/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { lazy, Suspense, useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import Footer from './components/Footer';
import { fallbackContent } from './lib/fallbackContent';
import type { WebsiteContent } from './types';

const contentTypes = [
  'siteSettings',
  'homepage',
  'service',
  'caseStudy',
  'testimonial',
  'faq',
  'quoteFormSettings',
];

const Services = lazy(() => import('./components/Services'));
const QuoteForm = lazy(() => import('./components/QuoteForm'));
const CaseStudies = lazy(() => import('./components/CaseStudies'));
const Process = lazy(() => import('./components/Process'));
const About = lazy(() => import('./components/About'));
const Testimonials = lazy(() => import('./components/Testimonials'));
const FAQ = lazy(() => import('./components/FAQ'));

function runWhenIdle(callback: () => void) {
  const requestIdle = window.requestIdleCallback;
  const cancelIdle = window.cancelIdleCallback;

  if (requestIdle && cancelIdle) {
    const idleId = requestIdle(callback, { timeout: 1500 });
    return () => cancelIdle(idleId);
  }

  const timeoutId = window.setTimeout(callback, 250);
  return () => window.clearTimeout(timeoutId);
}

export default function App() {
  const [content, setContent] = useState<WebsiteContent>(fallbackContent);
  const [showDeferredSections, setShowDeferredSections] = useState(false);

  useEffect(() => {
    let isMounted = true;
    let unsubscribeFromSanity: (() => void) | undefined;

    const loadContent = async () => {
      const { getWebsiteContent } = await import('./lib/content');

      return getWebsiteContent()
        .then((nextContent) => {
          if (isMounted) {
            setContent(nextContent);
          }
        })
        .catch((error) => {
          console.warn('Unable to load Sanity content. Rendering local fallback content.', error);
        });
    };

    const cancelIdleWork = runWhenIdle(() => {
      loadContent();
      setShowDeferredSections(true);
    });

    const handleVisibilityChange = () => {
      if (document.visibilityState === 'visible') {
        loadContent();
      }
    };

    window.addEventListener('focus', loadContent);
    document.addEventListener('visibilitychange', handleVisibilityChange);

    if (import.meta.env.DEV) {
      import('./lib/sanity').then(({ sanityClient }) => {
        if (!isMounted) {
          return;
        }

        const subscription = sanityClient
          ?.listen(
            `*[_type in $types]`,
            {types: contentTypes},
            {includeResult: false},
          )
          .subscribe({
            next: loadContent,
            error: (error) => {
              console.warn('Unable to listen for Sanity content changes.', error);
            },
          });

        unsubscribeFromSanity = () => subscription?.unsubscribe();
      });
    }

    return () => {
      isMounted = false;
      cancelIdleWork();
      window.removeEventListener('focus', loadContent);
      document.removeEventListener('visibilitychange', handleVisibilityChange);
      unsubscribeFromSanity?.();
    };
  }, []);

  return (
    <div className="min-h-screen bg-brand-navy selection:bg-brand-gold selection:text-brand-navy">
      <Navbar siteSettings={content.siteSettings} />
      <main>
        <Hero homepage={content.homepage} />
        <TrustBar trustLogos={content.homepage.trustLogos} />
        {showDeferredSections && (
          <Suspense fallback={null}>
            <Services services={content.services} />
            <QuoteForm settings={content.quoteFormSettings} />
            <CaseStudies caseStudies={content.caseStudies} />
            <Process />
            <About />
            <Testimonials testimonials={content.testimonials} />
            <FAQ faqs={content.faqs} siteSettings={content.siteSettings} />
          </Suspense>
        )}
      </main>
      <Footer siteSettings={content.siteSettings} />
    </div>
  );
}
