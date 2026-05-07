import {WebsiteContent} from '../types';
import {sanityClient} from './sanity';

interface SanityImage {
  asset?: {
    url?: string;
  };
}

interface SanityWebsiteContent {
  siteSettings?: Partial<WebsiteContent['siteSettings']> & {
    logo?: SanityImage;
  };
  homepage?: Partial<WebsiteContent['homepage']> & {
    heroImage?: SanityImage;
  };
  services?: Array<{
    _id: string;
    title?: string;
    shortDescription?: string;
    icon?: string;
    externalImageUrl?: string;
    image?: SanityImage;
  }>;
  caseStudies?: Array<{
    _id: string;
    title?: string;
    category?: string;
    shortDescription?: string;
    problem?: string;
    solution?: string;
    outcome?: string;
    externalImageUrl?: string;
    image?: SanityImage;
    toolsUsed?: string[];
  }>;
  testimonials?: Array<{
    _id: string;
    quote?: string;
    clientName?: string;
    clientRole?: string;
    companyName?: string;
    clientImage?: SanityImage;
  }>;
  faqs?: Array<{
    _id: string;
    question?: string;
    answer?: string;
  }>;
  quoteFormSettings?: Partial<WebsiteContent['quoteFormSettings']>;
}

export const fallbackContent: WebsiteContent = {
  siteSettings: {
    brandName: 'Convertify',
    email: 'hello@convertify.com',
    address: 'London, United Kingdom',
    socialLinks: [
      { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
      { label: 'Twitter', url: 'https://x.com/' },
      { label: 'Instagram', url: 'https://www.instagram.com/' },
    ],
    primaryCtaText: 'Get Estimate',
  },
  homepage: {
    heroHeadline: 'Professional websites built to help your',
    heroHighlightedText: 'business grow.',
    heroSupportingText:
      'We design and build modern websites, landing pages, and CMS-powered experiences that look trustworthy and turn visitors into enquiries.',
    primaryCtaText: 'Get a free estimate',
    secondaryCtaText: 'View case studies',
    trustPoints: ['5+ Years Experience', 'Webflow Experts', 'Fast Response'],
    trustLogos: ['BabyGrow', 'TrainSmart', 'LuxeStudio', 'HealthFirst', 'Vanguard'],
  },
  services: [
    {
      id: 'new-builds',
      title: 'New Website Builds',
      description:
        'For businesses that need a professional website from scratch, built around clear messaging and strong first impressions.',
      icon: 'Monitor',
    },
    {
      id: 'redesigns',
      title: 'Website Redesigns',
      description:
        'For businesses with an outdated or unclear website that needs a stronger, more modern presence.',
      icon: 'RefreshCw',
    },
    {
      id: 'cms-setup',
      title: 'CMS Setup',
      description:
        'Update pages, blogs, and menus yourself through an easy-to-use interface without needing a developer.',
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
  ],
  caseStudies: [
    {
      id: 'baby-grow',
      title: 'Baby Grow',
      category: 'Ecommerce / Shopify',
      description:
        'Helping an ecommerce brand create a clearer, more conversion-focused shopping experience.',
      image:
        'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop',
      outcome: 'Improved conversion flow and stronger trust presentation.',
      toolsUsed: ['Shopify', 'CRO', 'UX'],
    },
    {
      id: 'train-smart-coach',
      title: 'TrainSmartCoach',
      category: 'SaaS / Custom Platform',
      description:
        'Building a modern platform experience for managing football training and athlete workflows.',
      image:
        'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop',
      outcome: 'Advanced custom platform with intuitive dashboard and data management.',
      toolsUsed: ['React', 'Dashboard', 'Data Management'],
    },
    {
      id: 'local-cms',
      title: 'Local Business Concept',
      category: 'Webflow / CMS',
      description:
        'A clean, CMS-powered website concept for a local business needing more enquiries and easier updates.',
      image:
        'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
      outcome: 'Professional local presence with automated booking and easy content controls.',
      toolsUsed: ['Webflow', 'CMS', 'Booking'],
    },
  ],
  testimonials: [
    {
      id: 'baby-grow',
      quote:
        'Convertify transformed our Shopify store, boosting our conversion rates beyond our expectations! Their expertise in CRO is unmatched.',
      clientName: 'Basim Shah',
      clientRole: 'Founder',
      companyName: 'Baby Grow',
    },
  ],
  faqs: [
    {
      question: 'How much does a website cost?',
      answer:
        'Every project is different. The best way to get a realistic estimate is to answer a few quick questions in our quote form.',
    },
    {
      question: 'Can you redesign my existing website?',
      answer:
        'Yes. We can improve the look, structure, messaging, and conversion flow of your current site.',
    },
    {
      question: 'Can I update the website myself?',
      answer:
        'Absolutely. We include easy CMS setup so you can manage your content without technical help.',
    },
    {
      question: 'Do you only work with local businesses?',
      answer:
        'No, we help ecommerce brands, consultants, startups, and service businesses of all sizes.',
    },
    {
      question: 'Do I need a plan before contacting you?',
      answer:
        'Not at all. Part of our job is to guide you and help you figure out what you actually need.',
    },
  ],
  quoteFormSettings: {
    formHeadline: 'Find out what your new website could cost.',
    formSupportingText:
      'Answer a few quick questions and we’ll send you a tailored price estimate.',
    successMessage:
      "We'll review your project and send your tailored recommendation within 24 hours.",
    trustText: ['Free & no pressure', 'Tailored recommendation', 'Response in 24h'],
  },
};

const websiteContentQuery = `{
  "siteSettings": *[_type == "siteSettings"][0]{
    brandName,
    logo{asset->{url}},
    email,
    phone,
    address,
    socialLinks,
    primaryCtaText
  },
  "homepage": *[_type == "homepage"][0]{
    heroHeadline,
    heroHighlightedText,
    heroSupportingText,
    primaryCtaText,
    secondaryCtaText,
    heroImage{asset->{url}},
    trustPoints,
    trustLogos
  },
  "services": *[_type == "service"] | order(displayOrder asc, title asc){
    _id,
    title,
    shortDescription,
    icon,
    externalImageUrl,
    image{asset->{url}}
  },
  "caseStudies": *[_type == "caseStudy"] | order(displayOrder asc, title asc){
    _id,
    title,
    category,
    shortDescription,
    problem,
    solution,
    outcome,
    externalImageUrl,
    image{asset->{url}},
    toolsUsed
  },
  "testimonials": *[_type == "testimonial"] | order(displayOrder asc, clientName asc){
    _id,
    quote,
    clientName,
    clientRole,
    companyName,
    clientImage{asset->{url}}
  },
  "faqs": *[_type == "faq"] | order(displayOrder asc, question asc){
    _id,
    question,
    answer
  },
  "quoteFormSettings": *[_type == "quoteFormSettings"][0]{
    formHeadline,
    formSupportingText,
    successMessage,
    trustText
  }
}`;

export async function getWebsiteContent(): Promise<WebsiteContent> {
  if (!sanityClient) {
    console.warn('[Sanity] Client is not configured. Rendering local fallback content.');
    return fallbackContent;
  }

  const data = await sanityClient.fetch<SanityWebsiteContent>(
    websiteContentQuery,
  );

  console.info('[Sanity] Loaded website content.', {
    homepage: data.homepage?.heroHeadline,
    services: data.services?.length || 0,
    caseStudies: data.caseStudies?.length || 0,
    faqs: data.faqs?.length || 0,
  });

  return {
    siteSettings: {
      ...fallbackContent.siteSettings,
      ...data.siteSettings,
      logo: data.siteSettings?.logo?.asset?.url || fallbackContent.siteSettings.logo,
      socialLinks:
        data.siteSettings?.socialLinks?.length
          ? data.siteSettings.socialLinks
          : fallbackContent.siteSettings.socialLinks,
    },
    homepage: {
      ...fallbackContent.homepage,
      ...data.homepage,
      heroImage: data.homepage?.heroImage?.asset?.url || fallbackContent.homepage.heroImage,
      trustPoints:
        data.homepage?.trustPoints?.length
          ? data.homepage.trustPoints
          : fallbackContent.homepage.trustPoints,
      trustLogos:
        data.homepage?.trustLogos?.length
          ? data.homepage.trustLogos
          : fallbackContent.homepage.trustLogos,
    },
    services: data.services?.length
      ? data.services.map((service) => ({
          id: service._id,
          title: service.title || 'Untitled service',
          description: service.shortDescription || '',
          icon: service.icon || 'HelpCircle',
          image: service.image?.asset?.url || service.externalImageUrl,
        }))
      : fallbackContent.services,
    caseStudies: data.caseStudies?.length
      ? data.caseStudies.map((study) => ({
          id: study._id,
          title: study.title || 'Untitled project',
          category: study.category || 'Project',
          description: study.shortDescription || '',
          problem: study.problem,
          solution: study.solution,
          outcome: study.outcome || '',
          image: study.image?.asset?.url || study.externalImageUrl || '',
          toolsUsed: study.toolsUsed,
        }))
      : fallbackContent.caseStudies,
    testimonials: data.testimonials?.length
      ? data.testimonials.map((testimonial) => ({
          id: testimonial._id,
          quote: testimonial.quote || '',
          clientName: testimonial.clientName || 'Client',
          clientRole: testimonial.clientRole,
          companyName: testimonial.companyName,
          clientImage: testimonial.clientImage?.asset?.url,
        }))
      : fallbackContent.testimonials,
    faqs: data.faqs?.length
      ? data.faqs.map((faq) => ({
          question: faq.question || 'Question',
          answer: faq.answer || '',
        }))
      : fallbackContent.faqs,
    quoteFormSettings: {
      ...fallbackContent.quoteFormSettings,
      ...data.quoteFormSettings,
      trustText:
        data.quoteFormSettings?.trustText?.length
          ? data.quoteFormSettings.trustText
          : fallbackContent.quoteFormSettings.trustText,
    },
  };
}
