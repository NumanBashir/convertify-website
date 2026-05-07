import {defineField, defineType} from 'sanity'

export const quoteFormSettings = defineType({
  name: 'quoteFormSettings',
  title: 'Quote Form Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'formHeadline',
      title: 'Form Headline',
      type: 'string',
    }),
    defineField({
      name: 'formSupportingText',
      title: 'Form Supporting Text',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'successMessage',
      title: 'Success Message',
      type: 'text',
      rows: 3,
    }),
    defineField({
      name: 'trustText',
      title: 'Trust Text Near Form',
      type: 'array',
      of: [{type: 'string'}],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Quote Form Settings'}),
  },
})
