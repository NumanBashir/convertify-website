import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

const projectId = process.env.SANITY_STUDIO_PROJECT_ID || '06lobmo4'
const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
const apiVersion = process.env.SANITY_STUDIO_API_VERSION || '2026-05-07'
const title = process.env.SANITY_STUDIO_TITLE || 'Convertify'

export default defineConfig({
  name: 'default',
  title,

  projectId,
  dataset,

  plugins: [structureTool(), visionTool({defaultApiVersion: apiVersion})],

  schema: {
    types: schemaTypes,
  },
})
