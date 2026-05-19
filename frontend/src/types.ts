/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface NavLink {
  label: string;
  href: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  problem?: string;
  solution?: string;
  outcome: string;
  toolsUsed?: string[];
  client?: string;
  testimonial?: string;
  role?: string;
  company?: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  clientName: string;
  clientRole?: string;
  companyName?: string;
  clientImage?: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface BlogSpan {
  _key?: string;
  _type?: "span";
  text: string;
  marks?: string[];
}

export interface BlogContentBlock {
  _key?: string;
  _type: "block";
  style?: "normal" | "h2" | "h3" | "blockquote";
  listItem?: "bullet" | "number";
  children?: BlogSpan[];
}

export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  image?: string;
  publishedAt?: string;
  author: string;
  readingTime?: string;
  content: BlogContentBlock[];
}

export interface Question {
  id: string;
  text: string;
  options: string[];
}

export interface SocialLink {
  label: string;
  url: string;
}

export interface SiteSettings {
  brandName: string;
  logo?: string;
  email?: string;
  phone?: string;
  address?: string;
  socialLinks: SocialLink[];
  primaryCtaText: string;
}

export interface HomepageContent {
  heroHeadline: string;
  heroHighlightedText?: string;
  heroSupportingText: string;
  primaryCtaText: string;
  secondaryCtaText: string;
  heroImage?: string;
  trustPoints: string[];
  trustLogos: string[];
}

export interface QuoteFormSettings {
  formHeadline: string;
  formSupportingText: string;
  successMessage: string;
  trustText: string[];
}

export interface WebsiteContent {
  siteSettings: SiteSettings;
  homepage: HomepageContent;
  services: Service[];
  caseStudies: CaseStudy[];
  blogPosts: BlogPost[];
  testimonials: Testimonial[];
  faqs: FAQItem[];
  quoteFormSettings: QuoteFormSettings;
}
