/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { FAQItem as FAQItemType, SiteSettings } from "../types";

function FAQItem({ question, answer }: { question: string; answer: string }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-white/5 py-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between text-left py-4 group"
      >
        <span
          className={`text-xl font-bold transition-colors ${isOpen ? "text-brand-gold" : "text-brand-white group-hover:text-brand-gold/70"}`}
        >
          {question}
        </span>
        <div
          className={`shrink-0 ml-4 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
        >
          {isOpen ? (
            <Minus size={24} className="text-brand-gold" />
          ) : (
            <Plus size={24} className="text-brand-beige/30" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden"
          >
            <p className="pb-8 text-brand-beige/60 leading-relaxed text-lg">
              {answer}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

interface FAQProps {
  faqs: FAQItemType[];
  siteSettings: SiteSettings;
}

export default function FAQ({ faqs, siteSettings }: FAQProps) {
  return (
    <section id="faq" className="py-24 bg-brand-navy">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Common <span className="text-brand-gold">questions</span>
          </h2>
          <p className="text-brand-beige/60">
            Everything you need to know before we get started.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq) => (
            <div key={faq.question}>
              <FAQItem question={faq.question} answer={faq.answer} />
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-brand-beige/50 mb-6 font-medium">
            Still have questions?
          </p>
          <a
            href={`mailto:${siteSettings.email || "hello@convertify.com"}`}
            className="btn-secondary"
          >
            Send us a message
          </a>
        </div>
      </div>
    </section>
  );
}
