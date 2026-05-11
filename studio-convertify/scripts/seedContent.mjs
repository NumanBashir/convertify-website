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
    primaryCtaText: 'Tell us about your business',
  },
  {
    _id: 'homepage',
    _type: 'homepage',
    heroHeadline: 'Your digital growth partner for a stronger online presence',
    heroHighlightedText: 'that brings in more enquiries.',
    heroSupportingText:
      'Convertify helps you put the right digital foundations in place: website strategy, hosting/setup, SEO basics, analytics, contact forms, speed, mobile optimisation, branding, and ongoing support.',
    primaryCtaText: 'Tell us about your business',
    secondaryCtaText: 'Start with a quick review',
    trustPoints: [
      'No technical headache',
      'Built around business goals',
      'Ready for future marketing',
    ],
    trustLogos: ['BabyGrow', 'TrainSmart', 'LuxeStudio', 'HealthFirst', 'Vanguard'],
  },
  {
    _id: 'service-new-builds',
    _type: 'service',
    title: 'Website Foundation',
    shortDescription:
      'A clear, professional website structure built to help people understand, trust, and contact your business.',
    icon: 'Monitor',
    displayOrder: 10,
  },
  {
    _id: 'service-redesigns',
    _type: 'service',
    title: 'Visibility & SEO Basics',
    shortDescription:
      'The essential setup for search: sensible page structure, metadata, indexing basics, and content that explains what you do.',
    icon: 'Search',
    displayOrder: 20,
  },
  {
    _id: 'service-cms-setup',
    _type: 'service',
    title: 'Tracking & Lead Setup',
    shortDescription:
      'Contact forms, analytics, and tracking configured properly so enquiries are captured and you can see what is working.',
    icon: 'BarChart3',
    displayOrder: 30,
  },
  {
    _id: 'service-webflow',
    _type: 'service',
    title: 'Performance & Mobile Experience',
    shortDescription:
      'Fast loading, mobile-friendly pages with a conversion-focused structure that is ready for marketing.',
    icon: 'Smartphone',
    displayOrder: 40,
  },
  {
    _id: 'service-landing-pages',
    _type: 'service',
    title: 'Ongoing Support',
    shortDescription:
      'Practical help after launch, from small updates to technical fixes, so your digital presence keeps working.',
    icon: 'LifeBuoy',
    displayOrder: 50,
  },
  {
    _id: 'caseStudy-baby-grow',
    _type: 'caseStudy',
    title: 'Baby Grow',
    category: 'Ecommerce / Shopify',
    shortDescription:
      'Creating a clearer buying journey with stronger trust signals, cleaner structure, and better enquiry paths.',
    outcome: 'A more professional customer journey that supports trust and action.',
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
      'Building a more reliable digital product experience around real user workflows and clearer information.',
    outcome: 'A clearer platform foundation with easier workflows and better data management.',
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
      'A practical digital foundation for a local business that needs to look credible and make enquiries easier.',
    outcome:
      'A faster, clearer presence with easier updates, booking paths, and stronger local trust.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    toolsUsed: ['Webflow', 'CMS', 'Booking'],
    displayOrder: 30,
  },
  {
    _id: 'testimonial-baby-grow',
    _type: 'testimonial',
    quote:
      'Convertify helped us make the site clearer, easier to trust, and more focused on the actions that matter.',
    clientName: 'Basim Shah',
    clientRole: 'Founder',
    companyName: 'Baby Grow',
    displayOrder: 10,
  },
  {
    _id: 'faq-website-cost',
    _type: 'faq',
    question: 'What does a digital foundation include?',
    answer:
      'It usually includes the website structure, core pages, contact forms, basic SEO, hosting/setup guidance, analytics, speed, mobile optimisation, and a plan for ongoing support.',
    displayOrder: 10,
  },
  {
    _id: 'faq-redesign',
    _type: 'faq',
    question: 'Can you improve my existing website?',
    answer:
      'Yes. We can review what you already have and improve the structure, messaging, performance, mobile experience, tracking, and enquiry paths.',
    displayOrder: 20,
  },
  {
    _id: 'faq-update-myself',
    _type: 'faq',
    question: 'Can I update the website myself?',
    answer:
      'Yes. When it makes sense, we set up a simple CMS so you can update key content without dealing with code.',
    displayOrder: 30,
  },
  {
    _id: 'faq-local-businesses',
    _type: 'faq',
    question: 'Do you only work with local businesses?',
    answer:
      'No, Convertify is built for businesses, local service providers, consultants, ecommerce brands, and founder-led companies that need a stronger online presence.',
    displayOrder: 40,
  },
  {
    _id: 'faq-need-plan',
    _type: 'faq',
    question: 'Do I need a plan before contacting you?',
    answer:
      'No. You can come with a rough idea, an existing website, or just a business goal. We will help you work out what matters first.',
    displayOrder: 50,
  },
  {
    _id: 'quoteFormSettings',
    _type: 'quoteFormSettings',
    formHeadline: 'Tell us about your business',
    formSupportingText:
      'Answer a few quick questions so we can understand your goals, your current setup, and what kind of digital foundation would help you most.',
    successMessage:
      "Thanks — we'll review your answers and get back to you with a clear recommendation.",
    trustText: [
      'No technical headache',
      'Clear recommendation',
      'Friendly, low-pressure next step',
    ],
  },
]

const mutation = overwrite ? 'createOrReplace' : 'createIfNotExists'
const deprecatedDocumentIds = ['service-forms']

console.log(
  `${overwrite ? 'Replacing' : 'Creating missing'} ${documents.length} starter documents in ${projectId}/${dataset}...`,
)

const transaction = documents.reduce((tx, document) => tx[mutation](document), client.transaction())

if (overwrite) {
  deprecatedDocumentIds.forEach((id) => transaction.delete(id))
}

await transaction.commit()

console.log('Seed complete. Open Sanity Studio and publish/edit the starter content.')
