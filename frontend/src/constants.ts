/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import {
  CaseStudy,
  FAQItem,
  HomepageContent,
  NavLink,
  ProcessStep,
  Question,
  QuoteFormSettings,
  Service,
  SiteSettings,
  Testimonial,
} from './types';

export const NAV_LINKS: NavLink[] = [
  { label: 'Services', href: '#services' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Process', href: '#process' },
  { label: 'About', href: '#about' },
  { label: 'FAQ', href: '#faq' },
];

export const TRUST_POINTS = [
  '5+ years of experience',
  'Webflow & Modern Tech',
  'Conversion-focused',
  'Fast Communication'
];

export const SITE_SETTINGS: SiteSettings = {
  brandName: 'Convertify',
  email: 'hello@convertify.com',
  address: 'London, United Kingdom',
  socialLinks: [
    { label: 'LinkedIn', url: '#' },
    { label: 'Twitter', url: '#' },
    { label: 'Instagram', url: '#' },
  ],
  primaryCtaText: 'Get Estimate',
};

export const HOMEPAGE: HomepageContent = {
  heroHeadline: 'Professional websites built to help your',
  heroHighlightedText: 'business grow.',
  heroSupportingText:
    'We design and build modern websites, landing pages, and CMS-powered experiences that look trustworthy and turn visitors into enquiries.',
  primaryCtaText: 'Get a free estimate',
  secondaryCtaText: 'View case studies',
  trustPoints: ['5+ Years Experience', 'Webflow Experts', 'Fast Response'],
  trustLogos: ['BabyGrow', 'TrainSmart', 'LuxeStudio', 'HealthFirst', 'Vanguard'],
};

export const SERVICES: Service[] = [
  {
    id: 'new-builds',
    title: 'New Website Builds',
    description: 'For businesses that need a professional website from scratch, built around clear messaging and strong first impressions.',
    icon: 'Monitor',
  },
  {
    id: 'redesigns',
    title: 'Website Redesigns',
    description: 'For businesses with an outdated or unclear website that needs a stronger, more modern presence.',
    icon: 'RefreshCw',
  },
  {
    id: 'cms-setup',
    title: 'CMS Setup',
    description: 'Update pages, blogs, and menus yourself through an easy-to-use interface without needing a developer.',
    icon: 'Database',
  },
  {
    id: 'webflow',
    title: 'Webflow Websites',
    description: 'Fast, flexible, and visually polished websites that are easy to manage and scale.',
    icon: 'Zap',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'Focused pages for campaigns, offers, or ads designed to drive specific actions.',
    icon: 'Layout',
  },
  {
    id: 'forms',
    title: 'Booking & Contact Forms',
    description: 'Make it easy for visitors to request quotes, book appointments, or enquire.',
    icon: 'ClipboardCheck',
  },
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'baby-grow',
    title: 'Baby Grow',
    category: 'Ecommerce / Shopify',
    description: 'Helping an ecommerce brand create a clearer, more conversion-focused shopping experience.',
    image: 'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop', // Baby products context
    outcome: 'Improved conversion flow and stronger trust presentation.',
    client: 'Basim Shah',
    role: 'Founder',
    company: 'Baby Grow',
    testimonial: 'Convertify transformed our Shopify store, boosting our conversion rates beyond our expectations! Their expertise in CRO is unmatched.',
  },
  {
    id: 'train-smart-coach',
    title: 'TrainSmartCoach',
    category: 'SaaS / Custom Platform',
    description: 'Building a modern platform experience for managing football training and athlete workflows.',
    image: 'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop', // Sports/Training context
    outcome: 'Advanced custom platform with intuitive dashboard and data management.',
  },
  {
    id: 'local-cms',
    title: 'Local Business Concept',
    category: 'Webflow / CMS',
    description: 'A clean, CMS-powered website concept for a local business needing more enquiries and easier updates.',
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop', // Professional office context
    outcome: 'Professional local presence with automated booking and easy content controls.',
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 'baby-grow',
    quote:
      'Convertify transformed our Shopify store, boosting our conversion rates beyond our expectations! Their expertise in CRO is unmatched.',
    clientName: 'Basim Shah',
    clientRole: 'Founder',
    companyName: 'Baby Grow',
  },
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Tell us what you need',
    description: 'Fill out our estimate form. We learn about your business, goals, and specific website needs.',
  },
  {
    number: '02',
    title: 'Get a recommendation',
    description: 'We suggest the right website structure, tech stack, and next steps for your situation.',
  },
  {
    number: '03',
    title: 'Design and build',
    description: 'Your site is planned, designed, and built with a focus on clarity, trust, and conversion.',
  },
  {
    number: '04',
    title: 'Review and launch',
    description: 'You review the final product, we make tweaks, and then prepare for a successful launch.',
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'How much does a website cost?',
    answer: 'Every project is different. The best way to get a realistic estimate is to answer a few quick questions in our quote form.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer: 'Yes. We can improve the look, structure, messaging, and conversion flow of your current site.',
  },
  {
    question: 'Can I update the website myself?',
    answer: 'Absolutely. We include easy CMS setup so you can manage your content without technical help.',
  },
  {
    question: 'Do you only work with local businesses?',
    answer: 'No, we help ecommerce brands, consultants, startups, and service businesses of all sizes.',
  },
  {
    question: 'Do I need a plan before contacting you?',
    answer: 'Not at all. Part of our job is to guide you and help you figure out what you actually need.',
  },
];

export const QUOTE_QUESTIONS: Question[] = [
  {
    id: 'goal',
    text: 'What do you need help with?',
    options: ['New website', 'Website redesign', 'Landing page', 'CMS setup', 'Not sure yet'],
  },
  {
    id: 'type',
    text: 'What type of business do you run?',
    options: ['Local service', 'Restaurant/Café', 'Shop/Ecommerce', 'Consultant', 'SaaS/Startup', 'Other'],
  },
  {
    id: 'main-goal',
    text: 'What is the main goal?',
    options: ['More enquiries', 'Take bookings', 'Look more professional', 'Sell products', 'Clearer services'],
  },
  {
    id: 'pages',
    text: 'How many pages do you think you need?',
    options: ['1-page landing', '2–5 pages', '6–10 pages', 'Not sure yet'],
  },
  {
    id: 'features',
    text: 'Any extra features needed?',
    options: ['Contact form', 'Booking form', 'CMS/Blog', 'Gallery', 'Ecommerce', 'Not sure yet'],
  },
  {
    id: 'readiness',
    text: 'Do you have content ready?',
    options: ['Yes, everything', 'Partly', 'No, I need help'],
  },
  {
    id: 'timeline',
    text: 'When would you like to start?',
    options: ['As soon as possible', 'Within 1–2 months', 'Just exploring'],
  },
];

export const QUOTE_FORM_SETTINGS: QuoteFormSettings = {
  formHeadline: 'Find out what your new website could cost.',
  formSupportingText:
    'Answer a few quick questions and we’ll send you a tailored price estimate.',
  successMessage:
    "We'll review your project and send your tailored recommendation within 24 hours.",
  trustText: ['Free & no pressure', 'Tailored recommendation', 'Response in 24h'],
};
