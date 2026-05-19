/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X } from 'lucide-react';
import { NavLink, SiteSettings } from '../types';

const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '/#services' },
  { label: 'Case Studies', href: '/#case-studies' },
  { label: 'Blog', href: '/#blog' },
  { label: 'Process', href: '/#process' },
  { label: 'About', href: '/#about' },
  { label: 'FAQ', href: '/#faq' },
];

interface NavbarProps {
  siteSettings: SiteSettings;
}

export default function Navbar({ siteSettings }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#050B1F]/90 backdrop-blur-lg py-5 shadow-xl' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <a href="/" className="flex items-center space-x-2">
          {siteSettings.logo ? (
            <img src={siteSettings.logo} alt="" className="h-8 w-8 rounded-sm object-cover" />
          ) : (
            <div className="w-8 h-8 bg-brand-gold rounded-sm flex items-center justify-center font-black text-brand-navy text-xl">
              {siteSettings.brandName.charAt(0)}
            </div>
          )}
          <span className="text-2xl font-display font-bold tracking-tight uppercase text-white">
            {siteSettings.brandName}
          </span>
        </a>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="text-sm font-medium tracking-wide text-white/70 hover:text-brand-gold transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a href="/#quote" className="btn-outline">
            {siteSettings.primaryCtaText}
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden text-brand-beige"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-brand-depth border-t border-white/10 p-6 md:hidden flex flex-col space-y-4"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-lg font-medium text-brand-beige/80 hover:text-brand-gold"
              >
                {link.label}
              </a>
            ))}
            <a
              href="/#quote"
              onClick={() => setIsOpen(false)}
              className="btn-primary text-center"
            >
              {siteSettings.primaryCtaText}
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
