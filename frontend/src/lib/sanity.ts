import {createClient} from '@sanity/client';

export const sanityConfig = {
  projectId: import.meta.env.VITE_SANITY_PROJECT_ID || '06lobmo4',
  dataset: import.meta.env.VITE_SANITY_DATASET || 'production',
  apiVersion: import.meta.env.VITE_SANITY_API_VERSION || '2026-05-07',
};

const useCdn =
  import.meta.env.VITE_SANITY_USE_CDN === undefined
    ? import.meta.env.PROD
    : import.meta.env.VITE_SANITY_USE_CDN === 'true';

export const isSanityConfigured = Boolean(
  sanityConfig.projectId && sanityConfig.dataset,
);

export const sanityClient = isSanityConfigured
  ? createClient({
      ...sanityConfig,
      useCdn,
    })
  : null;
