/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ProcessStep } from "../types";

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Tell us where you are now",
    description:
      "Answer a few practical questions about your business, current setup, goals, and what is getting in the way.",
  },
  {
    number: "02",
    title: "Get a clear recommendation",
    description:
      "We explain what would help most first, whether that is structure, SEO basics, forms, tracking, speed, or support.",
  },
  {
    number: "03",
    title: "Build the foundation",
    description:
      "Your website and setup are planned around clarity, trust, mobile experience, lead capture, and future marketing.",
  },
  {
    number: "04",
    title: "Launch and support",
    description:
      "We handle the technical setup, check the essentials, launch carefully, and stay available for practical next steps.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            A simple path to a{" "}
            <span className="text-brand-gold">stronger digital foundation</span>
          </h2>
          <p className="text-brand-beige/60 max-w-2xl mx-auto">
            You do not need to arrive with a technical plan. We help you work
            out what matters, then handle the setup clearly and practically.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {PROCESS_STEPS.map((step, idx) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="mb-8 relative z-10">
                <span className="text-6xl font-display font-black text-white/5 absolute -top-10 -left-6 leading-none">
                  {step.number}
                </span>
                <div className="w-12 h-12 rounded-xl bg-brand-gold flex items-center justify-center text-brand-navy font-bold text-xl relative z-10">
                  {idx + 1}
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4 text-brand-white">
                {step.title}
              </h3>
              <p className="text-brand-beige/60 leading-relaxed">
                {step.description}
              </p>

              {idx < PROCESS_STEPS.length - 1 && (
                <div className="hidden lg:block absolute top-6 left-full w-full h-[2px] bg-brand-gold/10 -z-10 translate-x-4" />
              )}
            </motion.div>
          ))}
        </div>

        <div className="mt-20 p-1 bg-linear-to-r from-brand-gold/20 via-brand-gold/5 to-brand-gold/20 rounded-3xl">
          <div className="p-8 md:p-12 glass-card rounded-[22px] flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h4 className="text-2xl font-bold">
                Want a clearer online setup?
              </h4>
              <p className="text-brand-beige/60">
                Start with a few questions and we will come back with a
                practical recommendation.
              </p>
            </div>
            <a href="#quote" className="btn-primary whitespace-nowrap">
              Tell us about your business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
