/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Linkedin, Twitter, Github } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-24 bg-brand-navy overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="relative z-10 rounded-[40px] overflow-hidden aspect-4/5 bg-brand-gold/10">
              <img
                src="public/assets/foto.jpg"
                alt="Numan Bashir"
                className="w-full h-full object-cover brightness-90 hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy via-transparent to-transparent opacity-60" />
            </div>

            {/* Decorative frames */}
            <div className="absolute -top-6 -left-6 w-full h-full border-2 border-brand-gold/10 rounded-[40px] -z-10" />
            <div className="absolute top-12 left-12 w-full h-full bg-brand-gold/5 rounded-[40px] -z-20" />

            <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl border-brand-gold/20 flex justify-between items-center">
              <div>
                <p className="text-xs font-bold text-brand-gold uppercase tracking-widest mb-1">
                  Founder & Developer
                </p>
                <p className="text-xl font-bold font-display">Numan Bashir</p>
              </div>
              <div className="flex gap-3">
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand-gold hover:text-brand-navy transition-all"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href="#"
                  className="p-2 rounded-lg bg-white/5 hover:bg-brand-gold hover:text-brand-navy transition-all"
                >
                  <Twitter size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
                A website partner who understands{" "}
                <span className="text-brand-gold">design and development</span>
              </h2>
              <div className="space-y-6 text-lg text-brand-beige/70 leading-relaxed">
                <p>
                  Convertify is led by Numan Bashir, a developer with 5+ years
                  of experience building modern websites, CMS solutions, and
                  custom web platforms.
                </p>
                <p>
                  We combine technical skill with a business-focused approach.
                  Our goal is not just to build a good-looking website, but to
                  create a tool that helps you communicate clearly and convert
                  more visitors into customers.
                </p>
                <p>
                  We work with local businesses, startups, and ecommerce brands
                  who want to look professional online without the technical
                  headache.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8 pt-4">
              <div className="space-y-1">
                <p className="text-3xl font-extrabold text-brand-gold">5+</p>
                <p className="text-sm font-bold text-brand-beige/40 uppercase tracking-widest">
                  Years Experience
                </p>
              </div>
              <div className="space-y-1">
                <p className="text-3xl font-extrabold text-brand-gold">50+</p>
                <p className="text-sm font-bold text-brand-beige/40 uppercase tracking-widest">
                  Projects Launched
                </p>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="#quote"
                className="btn-primary inline-flex items-center gap-2"
              >
                Let's discuss your project
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
