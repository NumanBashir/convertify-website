import {createClient} from '@sanity/client'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '06lobmo4'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2026-05-07'
const token = process.env.SANITY_AUTH_TOKEN || process.env.SANITY_WRITE_TOKEN
const overwrite = process.env.SEED_OVERWRITE === 'true'

if (!token) {
  console.error(
    'Missing Sanity auth token. Run `npx sanity login`, then `npm run seed`, or pass SANITY_AUTH_TOKEN manually.',
  )
  process.exit(1)
}

const client = createClient({
  projectId,
  dataset,
  apiVersion,
  token,
  useCdn: false,
})

const documents = [
  {
    _id: 'siteSettings',
    _type: 'siteSettings',
    brandName: 'Convertify',
    email: 'hello@convertify.com',
    address: 'London, United Kingdom',
    socialLinks: [
      {_key: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/'},
      {_key: 'twitter', label: 'Twitter', url: 'https://x.com/'},
      {_key: 'instagram', label: 'Instagram', url: 'https://www.instagram.com/'},
    ],
    primaryCtaText: 'Get Estimate',
  },
  {
    _id: 'homepage',
    _type: 'homepage',
    heroHeadline: 'Professional websites built to help your',
    heroHighlightedText: 'business grow.',
    heroSupportingText:
      'We design and build modern websites, landing pages, and CMS-powered experiences that look trustworthy and turn visitors into enquiries.',
    primaryCtaText: 'Get a free estimate',
    secondaryCtaText: 'View case studies',
    trustPoints: ['5+ Years Experience', 'Webflow Experts', 'Fast Response'],
    trustLogos: ['BabyGrow', 'TrainSmart', 'LuxeStudio', 'HealthFirst', 'Vanguard'],
  },
  {
    _id: 'service-new-builds',
    _type: 'service',
    title: 'New Website Builds',
    shortDescription:
      'For businesses that need a professional website from scratch, built around clear messaging and strong first impressions.',
    icon: 'Monitor',
    displayOrder: 10,
  },
  {
    _id: 'service-redesigns',
    _type: 'service',
    title: 'Website Redesigns',
    shortDescription:
      'For businesses with an outdated or unclear website that needs a stronger, more modern presence.',
    icon: 'RefreshCw',
    displayOrder: 20,
  },
  {
    _id: 'service-cms-setup',
    _type: 'service',
    title: 'CMS Setup',
    shortDescription:
      'Update pages, blogs, and menus yourself through an easy-to-use interface without needing a developer.',
    icon: 'Database',
    displayOrder: 30,
  },
  {
    _id: 'service-webflow',
    _type: 'service',
    title: 'Webflow Websites',
    shortDescription: 'Fast, flexible, and visually polished websites that are easy to manage and scale.',
    icon: 'Zap',
    displayOrder: 40,
  },
  {
    _id: 'service-landing-pages',
    _type: 'service',
    title: 'Landing Pages',
    shortDescription: 'Focused pages for campaigns, offers, or ads designed to drive specific actions.',
    icon: 'Layout',
    displayOrder: 50,
  },
  {
    _id: 'service-forms',
    _type: 'service',
    title: 'Booking & Contact Forms',
    shortDescription: 'Make it easy for visitors to request quotes, book appointments, or enquire.',
    icon: 'ClipboardCheck',
    displayOrder: 60,
  },
  {
    _id: 'caseStudy-baby-grow',
    _type: 'caseStudy',
    title: 'Baby Grow',
    category: 'Ecommerce / Shopify',
    shortDescription:
      'Helping an ecommerce brand create a clearer, more conversion-focused shopping experience.',
    outcome: 'Improved conversion flow and stronger trust presentation.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?q=80&w=2075&auto=format&fit=crop',
    toolsUsed: ['Shopify', 'CRO', 'UX'],
    displayOrder: 10,
  },
  {
    _id: 'caseStudy-train-smart-coach',
    _type: 'caseStudy',
    title: 'TrainSmartCoach',
    category: 'SaaS / Custom Platform',
    shortDescription:
      'Building a modern platform experience for managing football training and athlete workflows.',
    outcome: 'Advanced custom platform with intuitive dashboard and data management.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1517466787929-bc90951d0974?q=80&w=1972&auto=format&fit=crop',
    toolsUsed: ['React', 'Dashboard', 'Data Management'],
    displayOrder: 20,
  },
  {
    _id: 'caseStudy-local-cms',
    _type: 'caseStudy',
    title: 'Local Business Concept',
    category: 'Webflow / CMS',
    shortDescription:
      'A clean, CMS-powered website concept for a local business needing more enquiries and easier updates.',
    outcome: 'Professional local presence with automated booking and easy content controls.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    toolsUsed: ['Webflow', 'CMS', 'Booking'],
    displayOrder: 30,
  },
  {
    _id: 'testimonial-baby-grow',
    _type: 'testimonial',
    quote:
      'Convertify transformed our Shopify store, boosting our conversion rates beyond our expectations! Their expertise in CRO is unmatched.',
    clientName: 'Basim Shah',
    clientRole: 'Founder',
    companyName: 'Baby Grow',
    displayOrder: 10,
  },
  {
    _id: 'faq-website-cost',
    _type: 'faq',
    question: 'How much does a website cost?',
    answer:
      'Every project is different. The best way to get a realistic estimate is to answer a few quick questions in our quote form.',
    displayOrder: 10,
  },
  {
    _id: 'faq-redesign',
    _type: 'faq',
    question: 'Can you redesign my existing website?',
    answer:
      'Yes. We can improve the look, structure, messaging, and conversion flow of your current site.',
    displayOrder: 20,
  },
  {
    _id: 'faq-update-myself',
    _type: 'faq',
    question: 'Can I update the website myself?',
    answer:
      'Absolutely. We include easy CMS setup so you can manage your content without technical help.',
    displayOrder: 30,
  },
  {
    _id: 'faq-local-businesses',
    _type: 'faq',
    question: 'Do you only work with local businesses?',
    answer:
      'No, we help ecommerce brands, consultants, startups, and service businesses of all sizes.',
    displayOrder: 40,
  },
  {
    _id: 'faq-need-plan',
    _type: 'faq',
    question: 'Do I need a plan before contacting you?',
    answer: 'Not at all. Part of our job is to guide you and help you figure out what you actually need.',
    displayOrder: 50,
  },
  {
    _id: 'quoteFormSettings',
    _type: 'quoteFormSettings',
    formHeadline: 'Find out what your new website could cost.',
    formSupportingText:
      'Answer a few quick questions and we’ll send you a tailored price estimate.',
    successMessage:
      "We'll review your project and send your tailored recommendation within 24 hours.",
    trustText: ['Free & no pressure', 'Tailored recommendation', 'Response in 24h'],
  },
]

const mutation = overwrite ? 'createOrReplace' : 'createIfNotExists'

console.log(
  `${overwrite ? 'Replacing' : 'Creating missing'} ${documents.length} starter documents in ${projectId}/${dataset}...`,
)

const transaction = documents.reduce((tx, document) => tx[mutation](document), client.transaction())
await transaction.commit()

console.log('Seed complete. Open Sanity Studio and publish/edit the starter content.')
