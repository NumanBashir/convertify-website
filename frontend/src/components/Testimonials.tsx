/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Quote } from "lucide-react";
import { Testimonial } from "../types";

interface TestimonialsProps {
  testimonials: Testimonial[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  return (
    <section className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
            Practical support for{" "}
            <span className="text-brand-gold">founder-led businesses</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-1 max-w-4xl mx-auto">
          {testimonials.map((t, idx) => (
            <motion.div
              key={t.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="glass-card p-10 md:p-16 rounded-[40px] relative text-center"
            >
              <div className="absolute top-10 left-10 text-brand-gold/20">
                <Quote size={60} />
              </div>

              <div className="space-y-8 relative z-10">
                <p className="text-2xl md:text-3xl font-medium leading-relaxed font-display italic">
                  "{t.quote}"
                </p>

                <div className="flex flex-col items-center">
                  {t.clientImage ? (
                    <img
                      src={t.clientImage}
                      alt=""
                      className="w-14 h-14 rounded-full object-cover border border-brand-gold/20 mb-4"
                    />
                  ) : (
                    <div className="w-14 h-14 rounded-full bg-brand-gold/10 border border-brand-gold/20 mb-4 flex items-center justify-center font-bold text-brand-gold">
                      {t.clientName.charAt(0)}
                    </div>
                  )}
                  <p className="text-lg font-bold text-brand-white">
                    {t.clientName}
                  </p>
                  <p className="text-sm font-medium text-brand-beige/50">
                    {[t.clientRole, t.companyName].filter(Boolean).join(", ")}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
