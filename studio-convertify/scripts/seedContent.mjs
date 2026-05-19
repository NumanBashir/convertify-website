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

const block = (_key, style, text) => ({
  _key,
  _type: 'block',
  style,
  markDefs: [],
  children: [{_key: `${_key}-span`, _type: 'span', marks: [], text}],
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
      'Convertify combines business website design, website strategy, hosting/setup, SEO basics, analytics, contact forms, speed, mobile optimisation, branding, and ongoing support.',
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
      'Business website design and website strategy built around clear messaging, trust, and enquiries from the first page.',
    icon: 'Monitor',
    displayOrder: 10,
  },
  {
    _id: 'service-redesigns',
    _type: 'service',
    title: 'Visibility & SEO Basics',
    shortDescription:
      'SEO basics for your website: sensible page structure, metadata, indexing setup, and content that explains what you do.',
    icon: 'Search',
    displayOrder: 20,
  },
  {
    _id: 'service-cms-setup',
    _type: 'service',
    title: 'Tracking & Lead Setup',
    shortDescription:
      'Contact forms, analytics, and tracking configured properly so website enquiries are captured and you can see what is working.',
    icon: 'BarChart3',
    displayOrder: 30,
  },
  {
    _id: 'service-webflow',
    _type: 'service',
    title: 'Performance & Mobile Experience',
    shortDescription:
      'A fast, mobile-friendly, conversion-focused website structure that is ready for future marketing.',
    icon: 'Smartphone',
    displayOrder: 40,
  },
  {
    _id: 'service-landing-pages',
    _type: 'service',
    title: 'Ongoing Support',
    shortDescription:
      'Website maintenance and support after launch, from content updates to technical fixes and practical improvements.',
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
      'A practical website redesign and CMS setup for a local service business that needs to look credible and make enquiries easier.',
    outcome:
      'A faster, clearer presence with easier updates, booking paths, and stronger local trust.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=2069&auto=format&fit=crop',
    toolsUsed: ['Webflow', 'CMS', 'Booking'],
    displayOrder: 30,
  },
  {
    _id: 'blogPost-website-not-getting-enquiries',
    _type: 'blogPost',
    title: 'Why your website is not getting enquiries',
    slug: {_type: 'slug', current: 'why-your-website-is-not-getting-enquiries'},
    excerpt:
      'A practical breakdown of the common clarity, trust, mobile, and call-to-action issues that stop visitors from contacting a business.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=2070&auto=format&fit=crop',
    publishedAt: '2026-05-19T00:00:00.000Z',
    author: 'Numan Bashir',
    readingTime: '4 min read',
    content: [
      block(
        'enquiries-intro',
        'normal',
        'A website can look fine and still fail to bring in enquiries. Usually, the problem is not one single thing. It is a mix of unclear messaging, weak trust signals, slow loading, poor mobile experience, and calls-to-action that are too easy to miss.',
      ),
      block('enquiries-clarity-heading', 'h2', 'Visitors need clarity quickly'),
      block(
        'enquiries-clarity',
        'normal',
        'People should understand what you offer, who it is for, and what to do next within the first few seconds. If the homepage does not answer those questions, visitors often leave before they reach the contact form.',
      ),
      block('enquiries-trust-heading', 'h2', 'Trust matters before design details'),
      block(
        'enquiries-trust',
        'normal',
        'Reviews, case studies, clear service explanations, contact details, and professional visuals all help visitors feel safer taking the next step. A conversion-focused website makes those signals easy to find.',
      ),
    ],
  },
  {
    _id: 'blogPost-digital-foundation-includes',
    _type: 'blogPost',
    title: 'What a proper digital foundation should include',
    slug: {_type: 'slug', current: 'what-a-proper-digital-foundation-should-include'},
    excerpt:
      'More than a homepage: the setup pieces that help a business look credible, capture leads, and prepare for future marketing.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    publishedAt: '2026-05-19T00:00:00.000Z',
    author: 'Numan Bashir',
    readingTime: '5 min read',
    content: [
      block(
        'foundation-intro',
        'normal',
        'A useful website is only one part of a digital foundation. The strongest setups also include SEO basics, analytics, contact forms, hosting/setup decisions, speed, mobile optimisation, and a clear way to maintain content after launch.',
      ),
      block('foundation-goal-heading', 'h2', 'Start with the business goal'),
      block(
        'foundation-goal',
        'normal',
        'Before choosing tools or layouts, define what the website needs to support: enquiries, bookings, trust, product education, recruitment, or future marketing. That goal should shape the structure.',
      ),
      block('foundation-maintain-heading', 'h2', 'Make the setup easy to maintain'),
      block(
        'foundation-maintain',
        'normal',
        'A CMS setup, simple tracking, and a clear support plan help the website keep working after launch instead of becoming another outdated project.',
      ),
    ],
  },
  {
    _id: 'blogPost-homepage-trust-signals',
    _type: 'blogPost',
    title: 'Trust signals every service website should have',
    slug: {_type: 'slug', current: 'trust-signals-every-service-website-should-have'},
    excerpt:
      'Simple website improvements that make a business feel more credible before a visitor sends an enquiry.',
    externalImageUrl:
      'https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2074&auto=format&fit=crop',
    publishedAt: '2026-05-19T00:00:00.000Z',
    author: 'Numan Bashir',
    readingTime: '3 min read',
    content: [
      block(
        'trust-intro',
        'normal',
        "Visitors are more likely to contact a business when the website removes doubt. Trust signals show that the business is real, reliable, and able to solve the visitor's problem.",
      ),
      block('trust-proof-heading', 'h2', 'Show proof close to the decision point'),
      block(
        'trust-proof',
        'normal',
        'Testimonials, project examples, client names, guarantees, process details, and clear contact options should sit near the places where visitors decide whether to enquire.',
      ),
      block('trust-next-step-heading', 'h2', 'Be specific about what happens next'),
      block(
        'trust-next-step',
        'normal',
        'A clear next step reduces hesitation. Tell visitors what happens after they submit a form, how quickly you respond, and what information they should expect to receive.',
      ),
    ],
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
      'It usually includes website strategy, core pages, contact forms, SEO basics, hosting/setup guidance, analytics, speed, mobile optimisation, and a plan for ongoing support.',
    displayOrder: 10,
  },
  {
    _id: 'faq-redesign',
    _type: 'faq',
    question: 'Can you improve my existing website?',
    answer:
      'Yes. We can handle website redesign work by improving the structure, messaging, performance, mobile experience, tracking, and enquiry paths.',
    displayOrder: 20,
  },
  {
    _id: 'faq-update-myself',
    _type: 'faq',
    question: 'Can I update the website myself?',
    answer:
      'Yes. When it makes sense, we include CMS setup so you can update key website content without dealing with code.',
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
