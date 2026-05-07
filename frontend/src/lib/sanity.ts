import {createClient} from '@sanity/client';

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-05-07',
};

export const isSanityConfigured = Boolean(
  sanityConfig.projectId && sanityConfig.dataset,
);

export const sanityClient = isSanityConfigured
  ? createClient({
      ...sanityConfig,
      useCdn: true,
    })
  : null;
