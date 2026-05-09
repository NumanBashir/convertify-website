import type { WebsiteContent } from "../types";

export const fallbackContent: WebsiteContent = {
  siteSettings: {
    brandName: "Convertify",
    email: "hello@convertify.com",
    address: "London, United Kingdom",
    socialLinks: [
      { label: "LinkedIn", url: "https://www.linkedin.com/" },
      { label: "Twitter", url: "https://x.com/" },
      { label: "Instagram", url: "https://www.instagram.com/" },
    ],
    primaryCtaText: "Get Estimate",
  },
  homepage: {
    heroHeadline: "Professional websites built to help your",
    heroHighlightedText: "business grow.",
    heroSupportingText:
      "We design and build modern websites, landing pages, and CMS-powered experiences that look trustworthy and turn visitors into enquiries.",
    primaryCtaText: "Get a free estimate",
    secondaryCtaText: "View case studies",
    trustPoints: ["5+ Years Experience", "Webflow Experts", "Fast Response"],
    trustLogos: [
      "BabyGrow",
      "TrainSmart",
      "LuxeStudio",
      "HealthFirst",
      "Vanguard",
    ],
  },
  services: [
    {
      id: "new-builds",
      title: "New Website Builds",
      description:
        "For businesses that need a professional website from scratch, built around clear messaging and strong first impressions.",
      icon: "Monitor",
    },
    {
      id: "redesigns",
      title: "Website Redesigns",
      description:
        "For businesses with an outdated or unclear website that needs a stronger, more modern presence.",
      icon: "RefreshCw",
    },
    {
      id: "cms-setup",
      title: "CMS Setup",
      description:
        "Update pages, blogs, and menus yourself through an easy-to-use interface without needing a developer.",
      icon: "Database",
    },
    {
      id: "webflow",
      title: "Webflow Websites",
      description:
        "Fast, flexible, and visually polished websites that are easy to manage and scale.",
      icon: "Zap",
    },
    {
      id: "landing-pages",
      title: "Landing Pages",
      description:
        "Focused pages for campaigns, offers, or ads designed to drive specific actions.",
      icon: "Layout",
    },
    {
      id: "forms",
      title: "Booking & Contact Forms",
      description:
        "Make it easy for visitors to request quotes, book appointments, or enquire.",
      icon: "ClipboardCheck",
    },
  ],
  caseStudies: [
    {
      id: "baby-grow",
      title: "Baby Grow",
      category: "Ecommerce / Shopify",
      description:
        "Helping an ecommerce brand create a clearer, more conversion-focused shopping experience.",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
      outcome: "Improved conversion flow and stronger trust presentation.",
      toolsUsed: ["Shopify", "CRO", "UX"],
    },
    {
      id: "train-smart-coach",
      title: "TrainSmartCoach",
      category: "SaaS / Custom Platform",
      description:
        "Building a modern platform experience for managing football training and athlete workflows.",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop",
      outcome:
        "Advanced custom platform with intuitive dashboard and data management.",
      toolsUsed: ["React", "Dashboard", "Data Management"],
    },
    {
      id: "local-cms",
      title: "Local Business Concept",
      category: "Webflow / CMS",
      description:
        "A clean, CMS-powered website concept for a local business needing more enquiries and easier updates.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      outcome:
        "Professional local presence with automated booking and easy content controls.",
      toolsUsed: ["Webflow", "CMS", "Booking"],
    },
  ],
  testimonials: [
    {
      id: "baby-grow",
      quote:
        "Convertify transformed our Shopify store, boosting our conversion rates beyond our expectations! Their expertise in CRO is unmatched.",
      clientName: "Basim Shah",
      clientRole: "Founder",
      companyName: "Baby Grow",
    },
  ],
  faqs: [
    {
      question: "How much does a website cost?",
      answer:
        "Every project is different. The best way to get a realistic estimate is to answer a few quick questions in our quote form.",
    },
    {
      question: "Can you redesign my existing website?",
      answer:
        "Yes. We can improve the look, structure, messaging, and conversion flow of your current site.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Absolutely. We include easy CMS setup so you can manage your content without technical help.",
    },
    {
      question: "Do you only work with local businesses?",
      answer:
        "No, we help ecommerce brands, consultants, startups, and service businesses of all sizes.",
    },
    {
      question: "Do I need a plan before contacting you?",
      answer:
        "Not at all. Part of our job is to guide you and help you figure out what you actually need.",
    },
  ],
  quoteFormSettings: {
    formHeadline: "Find out what your new website could cost.",
    formSupportingText:
      "Answer a few quick questions and we'll send you a tailored price estimate.",
    successMessage:
      "We'll review your project and send your tailored recommendation within 24 hours.",
    trustText: ["Free & no pressure", "Tailored recommendation", "Response in 24h"],
  },
};
