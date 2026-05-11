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
    primaryCtaText: "Tell us about your business",
  },
  homepage: {
    heroHeadline: "Build a digital foundation that helps your business",
    heroHighlightedText: "get more enquiries.",
    heroSupportingText:
      "Convertify helps you get the essentials in place: website strategy, hosting/setup, SEO basics, analytics, contact forms, speed, mobile optimisation, branding, and ongoing support.",
    primaryCtaText: "Tell us about your business",
    secondaryCtaText: "Start with a quick review",
    trustPoints: [
      "No technical headache",
      "Built around business goals",
      "Ready for future marketing",
    ],
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
      id: "website-foundation",
      title: "Website Foundation",
      description:
        "A clear, professional website structure built to help people understand, trust, and contact your business.",
      icon: "Monitor",
    },
    {
      id: "visibility-seo-basics",
      title: "Visibility & SEO Basics",
      description:
        "The essential setup for search: sensible page structure, metadata, indexing basics, and content that explains what you do.",
      icon: "Search",
    },
    {
      id: "tracking-lead-setup",
      title: "Tracking & Lead Setup",
      description:
        "Contact forms, analytics, and tracking configured properly so enquiries are captured and you can see what is working.",
      icon: "BarChart3",
    },
    {
      id: "performance-mobile",
      title: "Performance & Mobile Experience",
      description:
        "Fast loading, mobile-friendly pages with a conversion-focused structure that is ready for marketing.",
      icon: "Smartphone",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support",
      description:
        "Practical help after launch, from small updates to technical fixes, so your digital presence keeps working.",
      icon: "LifeBuoy",
    },
  ],
  caseStudies: [
    {
      id: "baby-grow",
      title: "Baby Grow",
      category: "Ecommerce / Shopify",
      description:
        "Creating a clearer buying journey with stronger trust signals, cleaner structure, and better enquiry paths.",
      image:
        "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop",
      outcome:
        "A more professional customer journey that supports trust and action.",
      toolsUsed: ["Shopify", "CRO", "UX"],
    },
    {
      id: "train-smart-coach",
      title: "TrainSmartCoach",
      category: "SaaS / Custom Platform",
      description:
        "Building a more reliable digital product experience around real user workflows and clearer information.",
      image:
        "https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop",
      outcome:
        "A clearer platform foundation with easier workflows and better data management.",
      toolsUsed: ["React", "Dashboard", "Data Management"],
    },
    {
      id: "local-cms",
      title: "Local Business Concept",
      category: "Webflow / CMS",
      description:
        "A practical digital foundation for a local business that needs to look credible and make enquiries easier.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      outcome:
        "A faster, clearer presence with easier updates, booking paths, and stronger local trust.",
      toolsUsed: ["Webflow", "CMS", "Booking"],
    },
  ],
  testimonials: [
    {
      id: "baby-grow",
      quote:
        "Convertify helped us make the site clearer, easier to trust, and more focused on the actions that matter.",
      clientName: "Basim Shah",
      clientRole: "Founder",
      companyName: "Baby Grow",
    },
  ],
  faqs: [
    {
      question: "What does a digital foundation include?",
      answer:
        "It usually includes the website structure, core pages, contact forms, basic SEO, hosting/setup guidance, analytics, speed, mobile optimisation, and a plan for ongoing support.",
    },
    {
      question: "Can you improve my existing website?",
      answer:
        "Yes. We can review what you already have and improve the structure, messaging, performance, mobile experience, tracking, and enquiry paths.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes. When it makes sense, we set up a simple CMS so you can update key content without dealing with code.",
    },
    {
      question: "Do you only work with local businesses?",
      answer:
        "No. Convertify is built for businesses, local service providers, consultants, ecommerce brands, and founder-led companies that need a stronger online presence.",
    },
    {
      question: "Do I need a plan before contacting you?",
      answer:
        "No. You can come with a rough idea, an existing website, or just a business goal. We will help you work out what matters first.",
    },
  ],
  quoteFormSettings: {
    formHeadline: "Tell us about your business",
    formSupportingText:
      "Answer a few quick questions so we can understand your goals, your current setup, and what kind of digital foundation would help you most.",
    successMessage:
      "Thanks — we'll review your answers and get back to you with a clear recommendation.",
    trustText: [
      "No technical headache",
      "Clear recommendation",
      "Friendly, low-pressure next step",
    ],
  },
};
