/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { CheckCircle2 } from "lucide-react";
import { HomepageContent } from "../types";

interface HeroProps {
  homepage: HomepageContent;
}

export default function Hero({ homepage }: HeroProps) {
  return (
    <section className="relative pt-32 pb-20 overflow-hidden min-h-screen flex items-center bg-[#050B1F]">
      {/* Background Ambient Glows */}
      <div className="absolute top-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-gold opacity-10 rounded-full blur-[140px]" />
      <div className="absolute bottom-[-5%] left-[-5%] w-[500px] h-[500px] bg-blue-600 opacity-10 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-brand-gold text-[10px] font-bold uppercase tracking-[0.2em] mb-8">
            Trusted by Growing Businesses Worldwide
          </div>
          <h1 className="text-6xl lg:text-7xl font-bold text-white mb-8 !leading-[1.1] tracking-tight">
            {homepage.heroHeadline}{" "}
            {homepage.heroHighlightedText && (
              <span className="text-brand-gold">
                {homepage.heroHighlightedText}
              </span>
            )}
          </h1>
          <p className="text-xl text-white/60 mb-12 leading-relaxed max-w-lg">
            {homepage.heroSupportingText}
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-8 mb-16">
            <a
              href="#quote"
              className="btn-primary w-full sm:w-auto text-center"
            >
              {homepage.primaryCtaText}
            </a>
            <a
              href="#case-studies"
              className="text-white/80 font-bold border-b border-white/20 pb-1 hover:text-white hover:border-brand-gold transition-all"
            >
              {homepage.secondaryCtaText}
            </a>
          </div>

          <div className="flex flex-wrap gap-x-8 gap-y-4 opacity-50">
            {homepage.trustPoints.map((point) => (
              <div key={point} className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 bg-brand-gold rounded-full" />
                <span className="text-[10px] uppercase font-bold tracking-widest">
                  {point}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="relative hidden lg:flex justify-end"
        >
          {homepage.heroImage ? (
            <div className="relative w-full max-w-[500px] overflow-hidden rounded-2xl border border-white/10 shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)]">
              <img
                src={homepage.heroImage}
                alt=""
                className="aspect-[4/5] w-full object-cover"
              />
              <div className="absolute inset-0 bg-linear-to-t from-brand-navy/60 via-transparent to-transparent" />
            </div>
          ) : (
            <div className="w-full max-w-[440px] bg-[#0D1631] rounded-2xl border border-white/10 p-10 shadow-[0_0_50px_-12px_rgba(197,160,89,0.3)] relative group">
              <div className="absolute -inset-0.5 bg-linear-to-r from-brand-gold to-blue-500 opacity-20 blur rounded-2xl" />
              <div className="relative">
                <div className="flex justify-between items-center mb-10">
                  <h3 className="text-2xl font-bold !text-white">
                    Start Your Estimate
                  </h3>
                  <span className="text-brand-gold text-sm font-mono font-bold tracking-widest">
                    Step 01/07
                  </span>
                </div>

                <p className="text-[11px] text-white/40 mb-8 font-black uppercase tracking-[0.2em]">
                  What do you need help with?
                </p>

                <div className="grid grid-cols-1 gap-4">
                  <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between cursor-pointer group hover:border-brand-gold hover:bg-brand-gold/10 transition-all duration-300">
                    <span className="font-bold">New Website Build</span>
                    <div className="w-6 h-6 rounded-full border border-white/20 group-hover:border-brand-gold" />
                  </div>
                  <div className="p-5 rounded-xl border border-brand-gold bg-brand-gold/10 flex items-center justify-between cursor-pointer">
                    <span className="font-bold text-brand-gold">
                      Website Redesign
                    </span>
                    <div className="w-6 h-6 rounded-full border-2 border-brand-gold flex items-center justify-center">
                      <div className="w-2.5 h-2.5 bg-brand-gold rounded-full" />
                    </div>
                  </div>
                  <div className="p-5 rounded-xl border border-white/10 bg-white/5 flex items-center justify-between cursor-pointer hover:border-brand-gold hover:bg-brand-gold/10">
                    <span className="font-bold">Landing Page</span>
                    <div className="w-6 h-6 rounded-full border border-white/20" />
                  </div>
                </div>
                <div className="">
                  <button className="w-full mt-10 bg-white/5 border border-white/10 py-4 rounded-lg text-white font-black hover:border-brand-gold hover:bg-brand-gold/20 transition-all uppercase tracking-[0.2em] text-[10px] cursor-pointer">
                    <a href="#quote" className="text-white cursor-pointer">
                      Next Question
                    </a>
                  </button>
                </div>

                <div className="mt-8 flex items-center justify-center space-x-2 opacity-30 text-[10px] uppercase font-bold tracking-widest">
                  <CheckCircle2 size={12} className="text-brand-gold" />
                  <span>Takes less than 2 minutes</span>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
