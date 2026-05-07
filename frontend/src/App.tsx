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
import { WebsiteContent } from './types';

export default function App() {
  const [content, setContent] = useState<WebsiteContent>(fallbackContent);

  useEffect(() => {
    getWebsiteContent()
      .then(setContent)
      .catch((error) => {
        console.warn('Unable to load Sanity content. Using local fallback content.', error);
      });
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
