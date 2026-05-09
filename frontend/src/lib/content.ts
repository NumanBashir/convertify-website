import {fallbackContent} from './fallbackContent';
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
