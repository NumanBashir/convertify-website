/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ProcessStep } from "../types";

const PROCESS_STEPS: ProcessStep[] = [
  {
    number: "01",
    title: "Discovery",
    description:
      "We learn about your business, goals, current setup, audience, and what your online presence needs to achieve.",
  },
  {
    number: "02",
    title: "Draft landing page",
    description:
      "We create an early landing page direction so you can react to the structure, messaging, and overall feel quickly.",
  },
  {
    number: "03",
    title: "Feedback",
    description:
      "You review the draft, tell us what feels right or wrong, and we use that feedback to tighten the direction.",
  },
  {
    number: "04",
    title: "Redesign & CMS",
    description:
      "We improve the design, build the remaining structure, and connect the CMS so key content can be edited easily.",
  },
  {
    number: "05",
    title: "Delivery",
    description:
      "We check the essentials, refine the final details, prepare the site for launch, and make sure the handover is clear.",
  },
  {
    number: "06",
    title: "Support & maintenance",
    description:
      "After launch, we stay available for updates, fixes, improvements, and practical support as your business moves forward.",
  },
];

export default function Process() {
  return (
    <section id="process" className="py-24 bg-brand-navy relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            An iterative process from{" "}
            <span className="text-brand-gold">first draft to finished foundation</span>
          </h2>
          <p className="text-brand-beige/60 max-w-2xl mx-auto">
            We do not expect everything to be perfect on the first pass. We
            draft, review, improve, and repeat the loop until the direction is
            clear and the final version is ready.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                Start with discovery, then we work through drafts, feedback,
                improvements, delivery, and support.
              </p>
            </div>
            <a href="/#quote" className="btn-primary whitespace-nowrap">
              Tell us about your business
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
