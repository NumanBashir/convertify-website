import {defineField, defineType} from 'sanity'

export const homepage = defineType({
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    defineField({
      name: 'heroHeadline',
      title: 'Hero Headline',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroHighlightedText',
      title: 'Hero Highlighted Text',
      description: 'Optional gold-highlighted text appended to the headline.',
      type: 'string',
    }),
    defineField({
      name: 'heroSupportingText',
      title: 'Hero Supporting Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'primaryCtaText',
      title: 'Primary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'secondaryCtaText',
      title: 'Secondary CTA Text',
      type: 'string',
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image / Mockup',
      type: 'image',
      options: {hotspot: true},
    }),
    defineField({
      name: 'trustPoints',
      title: 'Trust Points',
      description: 'Short trust notes shown below the hero CTAs.',
      type: 'array',
      of: [{type: 'string'}],
    }),
    defineField({
      name: 'trustLogos',
      title: 'Trust Bar Names',
      description: 'Names shown in the logo-style trust bar.',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Homepage'}),
  },
})
