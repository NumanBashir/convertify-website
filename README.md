# Client Website + Sanity CMS

This project keeps the React frontend and Sanity Studio as separate local apps:

```text
client-website/
  frontend/  React + Vite website
  studio/    Sanity Studio CMS
```

The frontend uses local fallback content first, then fetches published content from Sanity when the Sanity environment variables are configured.

## Requirements

- Node.js 20 or newer
- npm
- An existing Sanity project ID and dataset

## Environment Setup

Create these files from the examples:

```bash
cp frontend/.env.example frontend/.env.local
cp studio/.env.example studio/.env.local
```

Frontend values:

sas

```bash
VITE_SANITY_PROJECT_ID=your_project_id
VITE_SANITY_DATASET=production
VITE_SANITY_API_VERSION=2026-05-07
VITE_SANITY_STUDIO_TITLE=Client Website Studio
```

Studio values:

```bash
SANITY_STUDIO_PROJECT_ID=your_project_id
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2026-05-07
SANITY_STUDIO_TITLE=Client Website Studio
```

For browser fetching, make sure the Sanity project allows the local frontend origin, usually `http://localhost:3000`, in Sanity CORS settings.

## Install

Install frontend dependencies:

```bash
cd frontend
npm install
```

Install studio dependencies:

```bash
cd ../studio
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
cd studio
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

## Content Flow

1. A client edits and publishes content in `studio`.
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
cd studio
npm run build
```
