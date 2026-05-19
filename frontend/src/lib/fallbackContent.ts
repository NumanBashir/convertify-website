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
    heroHeadline: "Your digital growth partner for a stronger online presence",
    heroHighlightedText: "that brings in more enquiries.",
    heroSupportingText:
      "Convertify combines business website design, website strategy, hosting/setup, SEO basics, analytics, contact forms, speed, mobile optimisation, branding, and ongoing support.",
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
        "Business website design and website strategy built around clear messaging, trust, and enquiries from the first page.",
      icon: "Monitor",
    },
    {
      id: "visibility-seo-basics",
      title: "Visibility & SEO Basics",
      description:
        "SEO basics for your website: sensible page structure, metadata, indexing setup, and content that explains what you do.",
      icon: "Search",
    },
    {
      id: "tracking-lead-setup",
      title: "Tracking & Lead Setup",
      description:
        "Contact forms, analytics, and tracking configured properly so website enquiries are captured and you can see what is working.",
      icon: "BarChart3",
    },
    {
      id: "performance-mobile",
      title: "Performance & Mobile Experience",
      description:
        "A fast, mobile-friendly, conversion-focused website structure that is ready for future marketing.",
      icon: "Smartphone",
    },
    {
      id: "ongoing-support",
      title: "Ongoing Support",
      description:
        "Website maintenance and support after launch, from content updates to technical fixes and practical improvements.",
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
        "A practical website redesign and CMS setup for a local service business that needs to look credible and make enquiries easier.",
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop",
      outcome:
        "A faster, clearer presence with easier updates, booking paths, and stronger local trust.",
      toolsUsed: ["Webflow", "CMS", "Booking"],
    },
  ],
  blogPosts: [
    {
      id: "website-not-getting-enquiries",
      title: "Why your website is not getting enquiries",
      slug: "why-your-website-is-not-getting-enquiries",
      excerpt:
        "A practical breakdown of the common clarity, trust, mobile, and call-to-action issues that stop visitors from contacting a business.",
      image:
        "https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop",
      publishedAt: "2026-05-19",
      author: "Numan Bashir",
      readingTime: "4 min read",
      content: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "A website can look fine and still fail to bring in enquiries. Usually, the problem is not one single thing. It is a mix of unclear messaging, weak trust signals, slow loading, poor mobile experience, and calls-to-action that are too easy to miss.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Visitors need clarity quickly" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "People should understand what you offer, who it is for, and what to do next within the first few seconds. If the homepage does not answer those questions, visitors often leave before they reach the contact form.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Trust matters before design details" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "Reviews, case studies, clear service explanations, contact details, and professional visuals all help visitors feel safer taking the next step. A conversion-focused website makes those signals easy to find.",
            },
          ],
        },
      ],
    },
    {
      id: "digital-foundation-includes",
      title: "What a proper digital foundation should include",
      slug: "what-a-proper-digital-foundation-should-include",
      excerpt:
        "More than a homepage: the setup pieces that help a business look credible, capture leads, and prepare for future marketing.",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop",
      publishedAt: "2026-05-19",
      author: "Numan Bashir",
      readingTime: "5 min read",
      content: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "A useful website is only one part of a digital foundation. The strongest setups also include SEO basics, analytics, contact forms, hosting/setup decisions, speed, mobile optimisation, and a clear way to maintain content after launch.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Start with the business goal" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "Before choosing tools or layouts, define what the website needs to support: enquiries, bookings, trust, product education, recruitment, or future marketing. That goal should shape the structure.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Make the setup easy to maintain" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "A CMS setup, simple tracking, and a clear support plan help the website keep working after launch instead of becoming another outdated project.",
            },
          ],
        },
      ],
    },
    {
      id: "homepage-trust-signals",
      title: "Trust signals every service website should have",
      slug: "trust-signals-every-service-website-should-have",
      excerpt:
        "Simple website improvements that make a business feel more credible before a visitor sends an enquiry.",
      image:
        "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop",
      publishedAt: "2026-05-19",
      author: "Numan Bashir",
      readingTime: "3 min read",
      content: [
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "Visitors are more likely to contact a business when the website removes doubt. Trust signals show that the business is real, reliable, and able to solve the visitor's problem.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Show proof close to the decision point" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "Testimonials, project examples, client names, guarantees, process details, and clear contact options should sit near the places where visitors decide whether to enquire.",
            },
          ],
        },
        {
          _type: "block",
          style: "h2",
          children: [{ text: "Be specific about what happens next" }],
        },
        {
          _type: "block",
          style: "normal",
          children: [
            {
              text: "A clear next step reduces hesitation. Tell visitors what happens after they submit a form, how quickly you respond, and what information they should expect to receive.",
            },
          ],
        },
      ],
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
        "It usually includes website strategy, core pages, contact forms, SEO basics, hosting/setup guidance, analytics, speed, mobile optimisation, and a plan for ongoing support.",
    },
    {
      question: "Can you improve my existing website?",
      answer:
        "Yes. We can handle website redesign work by improving the structure, messaging, performance, mobile experience, tracking, and enquiry paths.",
    },
    {
      question: "Can I update the website myself?",
      answer:
        "Yes. When it makes sense, we include CMS setup so you can update key website content without dealing with code.",
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
