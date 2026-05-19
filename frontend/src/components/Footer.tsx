/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  Mail,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  Instagram,
} from "lucide-react";
import { NavLink, SiteSettings } from "../types";

const NAV_LINKS: NavLink[] = [
  { label: "Services", href: "/#services" },
  { label: "Case Studies", href: "/#case-studies" },
  { label: "Blog", href: "/#blog" },
  { label: "Process", href: "/#process" },
  { label: "About", href: "/#about" },
  { label: "FAQ", href: "/#faq" },
];

interface FooterProps {
  siteSettings: SiteSettings;
}

const SOCIAL_ICONS = {
  linkedin: Linkedin,
  twitter: Twitter,
  github: Github,
  instagram: Instagram,
};

export default function Footer({ siteSettings }: FooterProps) {
  return (
    <footer className="relative bg-[#050B1F] pt-24 pb-12 border-t border-white/10 overflow-hidden">
      {/* Background Ambient Glow */}
      <div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand-gold opacity-5 rounded-full blur-[120px]" />

      <div className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        <div className="grid lg:grid-cols-4 gap-16 mb-20">
          <div className="space-y-8 lg:col-span-1">
            <div className="flex items-center space-x-2">
              {siteSettings.logo ? (
                <img
                  src={siteSettings.logo}
                  alt=""
                  className="h-8 w-8 rounded-sm object-cover"
                />
              ) : (
                <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-black text-brand-navy text-xl">
                  {siteSettings.brandName.charAt(0)}
                </div>
              )}
              <span className="text-2xl font-display font-bold tracking-tight uppercase text-white">
                {siteSettings.brandName}
              </span>
            </div>
            <p className="text-white/40 leading-relaxed text-sm font-medium">
              More than a website — a proper digital foundation for businesses
              that want to look professional and capture enquiries with less
              technical stress.
            </p>
            <div className="flex gap-4">
              {siteSettings.socialLinks.map((link) => {
                const Icon =
                  SOCIAL_ICONS[
                    link.label.toLowerCase() as keyof typeof SOCIAL_ICONS
                  ] || Github;
                return (
                  <a
                    key={link.label}
                    href={link.url}
                    className="p-2.5 rounded-lg bg-white/5 text-white/50 hover:bg-brand-gold hover:text-brand-navy transition-all"
                    aria-label={link.label}
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">
              Company
            </h4>
            <ul className="space-y-5">
              {NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-white/50 hover:text-brand-gold transition-colors text-sm font-bold"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">
              Contact Us
            </h4>
            <ul className="space-y-5 text-sm font-bold">
              <li className="flex items-center gap-3 text-white/50 hover:text-brand-gold cursor-pointer transition-colors">
                <Mail size={18} className="text-brand-gold" />
                <span>{siteSettings.email}</span>
              </li>
              {siteSettings.address && (
                <li className="flex items-center gap-3 text-white/50">
                  <MapPin size={18} className="text-brand-gold" />
                  <span>{siteSettings.address}</span>
                </li>
              )}
            </ul>
          </div>

          <div className="lg:col-span-1">
            <h4 className="text-white font-black mb-10 uppercase tracking-[0.2em] text-[10px]">
              Start Simply
            </h4>
            <div className="p-8 rounded-2xl bg-[#0D1631] border border-white/10 shadow-xl">
              <p className="text-white/60 text-sm mb-6 leading-relaxed">
                Tell us where your business is now, and we will point you toward
                a sensible next step.
              </p>
              <a
                href="/#quote"
                className="btn-primary w-full text-center text-xs py-3.5 block"
              >
                {siteSettings.primaryCtaText}
              </a>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8 text-white/20 text-[10px] font-black uppercase tracking-[0.3em]">
          <p>
            © {new Date().getFullYear()} {siteSettings.brandName}. Built for
            practical growth.
          </p>
          <div className="flex gap-10">
            <a href="#" className="hover:text-white transition-colors">
              Privacy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
