/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { CaseStudy } from "../types";

interface CaseStudiesProps {
  caseStudies: CaseStudy[];
}

export default function CaseStudies({ caseStudies }: CaseStudiesProps) {
  return (
    <section id="case-studies" className="py-24 bg-brand-navy">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Digital foundations built for{" "}
              <span className="text-brand-gold">clarity and action</span>
            </h2>
            <p className="text-lg text-brand-beige/60">
              We help businesses turn unclear websites into conversion-focused
              websites that are easier to understand, trust, and act on.
            </p>
          </div>
          <motion.a
            href="/#quote"
            whileHover={{ x: 5 }}
            className="flex items-center gap-2 text-brand-gold font-bold group"
          >
            Start with a quick review
            <ArrowUpRight
              size={20}
              className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
            />
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {caseStudies.map((study, idx) => (
            <motion.div
              key={study.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[4/3] rounded-3xl overflow-hidden mb-6">
                <img
                  src={study.image}
                  alt={study.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-brand-navy/60 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-brand-gold text-brand-navy flex items-center justify-center">
                    <ArrowUpRight size={32} />
                  </div>
                </div>
                <div className="absolute top-4 left-4">
                  <span className="px-4 py-2 rounded-full glass-card text-[10px] uppercase font-bold tracking-widest text-brand-beige">
                    {study.category}
                  </span>
                </div>
              </div>

              <div className="space-y-3 px-2">
                <h3 className="text-2xl font-bold text-brand-white group-hover:text-brand-gold transition-colors">
                  {study.title}
                </h3>
                <p className="text-brand-beige/60 line-clamp-2">
                  {study.description}
                </p>
                <div className="pt-2 flex items-center gap-2 text-xs font-bold text-brand-gold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                  View the work
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
