# Client Website + Sanity CMS

This project keeps the React frontend and Sanity Studio as separate local apps:

```text
convertify-website/
  frontend/            React + Vite website
  studio-convertify/   Sanity Studio CMS
```

The frontend uses local fallback content first, then fetches published content from Sanity when the Sanity environment variables are configured.

## Requirements

- Node.js 20.19.1 or newer for Sanity Studio v5
- npm
- An existing Sanity project ID and dataset

## Environment Setup

Create these files from the examples:

```bash
cp frontend/.env.example frontend/.env.local
cp studio-convertify/.env.example studio-convertify/.env.local
```

Frontend values:

```bash
VITE_SANITY_PROJECT_ID=06lobmo4
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-05-07
VITE_SANITY_STUDIO_TITLE=Convertify
```

Studio values:

```bash
SANITY_STUDIO_PROJECT_ID=06lobmo4
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2026-05-07
SANITY_STUDIO_TITLE=Convertify
```

For browser fetching, make sure the Sanity project allows the local frontend origin, usually `http://localhost:3000`, in Sanity CORS settings.

The frontend has `06lobmo4` and `production` as non-secret fallbacks, so it can fetch from the current Sanity project even before `.env.local` exists.

## Install

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install studio dependencies:

```bash
cd ../studio-convertify
npm install
```

## Run Locally

Run the frontend:

```bash
cd frontend
npm run dev
```

The frontend runs at `http://localhost:3000`.

Run Sanity Studio in another terminal:

```bash
cd studio-convertify
npm run dev
```

Sanity Studio usually runs at `http://localhost:3333`.

## CMS Content

The Studio includes these client-editable areas:

- Site Settings: brand name, logo, contact details, social links, primary CTA
- Homepage: hero text, CTAs, hero image, trust points, trust bar names
- Services: title, short description, icon or image, display order
- Case Studies / Projects: project details, image, tools, display order
- Testimonials: quote, client details, client image or logo, display order
- FAQs: question, answer, display order
- Quote Form Settings: surrounding form copy, success message, trust text

## Seed Starter Content

The frontend fallback content can be copied into Sanity as editable starter documents.

First log in to Sanity:

```bash
cd studio-convertify
npx sanity login
```

Then seed the current starter content:

```bash
npm run seed
```

The seed command creates missing documents only. It will not overwrite client edits by default.

To intentionally reset the seeded documents from local starter content:

```bash
SEED_OVERWRITE=true npm run seed
```

After seeding, open Studio at `http://localhost:3333`, edit the documents, and publish them. The frontend will then fetch and display those published values.

## Content Flow

1. A client edits and publishes content in `studio-convertify`.
2. The frontend queries published Sanity documents using `@sanity/client`.
3. If Sanity is not configured, unreachable, or has no documents yet, the frontend keeps using the original hardcoded fallback content.
4. The quote form logic remains frontend-controlled; only the surrounding copy is editable in Sanity.

## Validation

Useful checks:

```bash
cd frontend
npm run lint
npm run build
```

```bash
cd studio-convertify
npm run build
```
