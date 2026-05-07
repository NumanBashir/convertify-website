/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Services from './components/Services';
import QuoteForm from './components/QuoteForm';
import CaseStudies from './components/CaseStudies';
import Process from './components/Process';
import About from './components/About';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import { fallbackContent, getWebsiteContent } from './lib/content';
import { sanityClient } from './lib/sanity';
import { WebsiteContent } from './types';

const contentTypes = [
  'siteSettings',
  'homepage',
  'service',
  'caseStudy',
  'testimonial',
  'faq',
  'quoteFormSettings',
];

export default function App() {
  const [content, setContent] = useState<WebsiteContent>(fallbackContent);

  useEffect(() => {
    let isMounted = true;

    const loadContent = () => {
      getWebsiteContent()
        .then((nextContent) => {
          if (isMounted) {
            setContent(nextContent);
          }
        })
        .catch((error) => {
          console.warn('Unable to load Sanity content. Rendering local fallback content.', error);
        });
    };

    loadContent();

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadContent();
      }
    };

    window.addEventListener('focus', loadContent);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    const subscription = sanityClient
      ?.listen(`*[_type in $types]`, {types: contentTypes}, {includeResult: false})
      .subscribe({
        next: loadContent,
        error: (error) => {
          console.warn('Unable to listen for Sanity content changes.', error);
        },
      });

    return () => {
      isMounted = false;
      window.removeEventListener('focus', loadContent);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      subscription?.unsubscribe();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy">
      <Navbar siteSettings={content.siteSettings} />
      <main>
        <Hero homepage={content.homepage} />
        <TrustBar trustLogos={content.homepage.trustLogos} />
        <Services services={content.services} />
        <QuoteForm settings={content.quoteFormSettings} />
        <CaseStudies caseStudies={content.caseStudies} />
        <Process />
        <About />
        <Testimonials testimonials={content.testimonials} />
        <FAQ faqs={content.faqs} siteSettings={content.siteSettings} />
      </main>
      <Footer siteSettings={content.siteSettings} />
    </div>
  );
}
