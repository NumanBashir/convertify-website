/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from 'motion/react';

interface TrustBarProps {
  trustLogos: string[];
}

export default function TrustBar({ trustLogos }: TrustBarProps) {
  return (
    <section className="bg-white/5 border-t border-white/10 py-8 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        <span className="text-[10px] font-bold uppercase tracking-[0.3em] text-white/50">Built for practical growth</span>
        <div className="flex flex-wrap justify-center gap-x-12 gap-y-6 items-center">
          {trustLogos.map((logo, index) => (
            <span
              key={logo}
              className={`text-2xl text-white ${
                index % 5 === 0
                  ? 'font-black italic tracking-tighter'
                  : index % 5 === 1
                    ? 'font-bold font-mono uppercase'
                    : index % 5 === 2
                      ? 'font-serif'
                      : index % 5 === 3
                        ? 'font-semibold'
                        : 'font-light tracking-widest uppercase'
              }`}
            >
              {logo}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
