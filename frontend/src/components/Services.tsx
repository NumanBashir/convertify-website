/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import {
  ClipboardCheck,
  Database,
  HelpCircle,
  Layout,
  Monitor,
  RefreshCw,
  Zap,
} from "lucide-react";
import type { ComponentType } from "react";
import { Service } from "../types";

interface ServicesProps {
  services: Service[];
}

const serviceIcons: Record<string, ComponentType<{ size?: number }>> = {
  ClipboardCheck,
  Database,
  HelpCircle,
  Layout,
  Monitor,
  RefreshCw,
  Zap,
};

export default function Services({ services }: ServicesProps) {
  return (
    <section
      id="services"
      className="py-24 bg-brand-navy relative overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6">
              Everything your business needs to{" "}
              <span className="text-brand-gold">look professional</span>
            </h2>
            <p className="text-lg text-brand-beige/60">
              We lead with business outcomes first. Our goal is to create a
              website that actually helps you grow, connecting you with your
              customers through clear messaging and modern design.
            </p>
          </motion.div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, idx) => {
            const Icon = serviceIcons[service.icon] || HelpCircle;
            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="glass-card p-8 rounded-3xl group hover:bg-white/10 transition-colors"
              >
                <div className="w-14 h-14 rounded-2xl bg-brand-gold/10 flex items-center justify-center text-brand-gold mb-6 group-hover:scale-110 group-hover:bg-brand-gold group-hover:text-brand-navy transition-all duration-300">
                  {service.image ? (
                    <img
                      src={service.image}
                      alt=""
                      className="h-full w-full rounded-2xl object-cover"
                    />
                  ) : (
                    <Icon size={32} />
                  )}
                </div>
                <h3 className="text-xl font-bold mb-4 text-brand-white group-hover:text-brand-gold transition-colors">
                  {service.title}
                </h3>
                <p className="text-brand-beige/60 leading-relaxed group-hover:text-brand-beige/80 transition-colors">
                  {service.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
