import {
  CASE_STUDIES,
  FAQS,
  HOMEPAGE,
  QUOTE_FORM_SETTINGS,
  SERVICES,
  SITE_SETTINGS,
  TESTIMONIALS,
} from '../constants';
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
  siteSettings: SITE_SETTINGS,
  homepage: HOMEPAGE,
  services: SERVICES,
  caseStudies: CASE_STUDIES,
  testimonials: TESTIMONIALS,
  faqs: FAQS,
  quoteFormSettings: QUOTE_FORM_SETTINGS,
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
    return fallbackContent;
  }

  const data = await sanityClient.fetch<SanityWebsiteContent>(
    websiteContentQuery,
  );

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
          image: service.image?.asset?.url,
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
          image: study.image?.asset?.url || fallbackContent.caseStudies[0].image,
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
