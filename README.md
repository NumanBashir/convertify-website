# Client Website + Sanity CMS

This project keeps the React frontend and Sanity Studio as separate local apps:

```text
convertify-website/
  frontend/            React + Vite website
  studio-convertify/   Sanity Studio CMS
```

The frontend fetches published content from Sanity for the editable website sections.

## How To Work In This Project

There are three separate layers:

- `frontend/`: the public React website visitors see.
- `studio-convertify/`: the Sanity Studio editing interface.
- Sanity Content Lake: the hosted database where published content lives.

### Editing Website Content

Use this workflow when changing copy, services, case studies, testimonials, FAQs, site settings, or quote form text.

You can edit content from either:

- local Studio: `http://localhost:3333`
- deployed Studio: `https://convertify.sanity.studio/`

Both edit the same Sanity project as long as they use:

```bash
SANITY_STUDIO_PROJECT_ID=06lobmo4
SANITY_STUDIO_DATASET=production
```

Content workflow:

1. Open local or deployed Studio.
2. Edit the content.
3. Click **Publish**.
4. The frontend reads the published content from Sanity.

Content edits do not require Git commits, frontend code changes, or Vercel redeploys.

Make sure if you change the domain to run this command for the given url

```bash
npx sanity cors add https://www.your-domain.com/ --no-credentials
```

### Changing Frontend Design Or Behavior

Use this workflow when changing layout, styling, components, animations, SEO, form behavior, or how Sanity data is rendered.

```bash
cd frontend
npm run dev
```

Frontend workflow:

1. Edit React files in `frontend/src`.
2. Test locally at `http://localhost:3000`.
3. Run checks:
   ```bash
   npm run lint
   npm run build
   ```
4. Commit and push changes.
5. Vercel redeploys the frontend.

### Changing CMS Structure

Use this workflow when adding or changing Sanity schemas, fields, validation, previews, or Studio organization.

```bash
cd studio-convertify
npm run dev
```

Schema workflow:

1. Edit schema files in `studio-convertify/schemaTypes`.
2. Test locally at `http://localhost:3333`.
3. If the frontend must display new fields, update the frontend query/rendering too.
4. Run checks:
   ```bash
   npm run build
   ```
5. Commit and push changes.
6. Deploy the Studio again:
   ```bash
   npx sanity deploy
   ```

Schema changes are code changes. Content changes are not.

### Deployment Responsibilities

Deploy the frontend to Vercel for website visitors.

Deploy the Studio only so you or a client can edit content from a public Studio URL.

Recommended setup:

- Frontend: Vercel
- Studio: Sanity hosted Studio using `npx sanity deploy`
- Content database: Sanity Content Lake, already hosted by Sanity

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
VITE_SANITY_USE_CDN=false
```

Studio values:

```bash
SANITY_STUDIO_PROJECT_ID=06lobmo4
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2026-05-07
SANITY_STUDIO_TITLE=Convertify
```

For browser fetching, make sure the Sanity project allows the local frontend origin, usually `http://localhost:3000`, in Sanity CORS settings.

The frontend has `06lobmo4` and `production` as non-secret fallbacks, so it can fetch from the current Sanity project even before `.env.local` exists. `VITE_SANITY_USE_CDN=false` keeps local editing responsive by using Sanity's live API instead of the cached CDN.

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

The starter seed script can copy the original website copy into Sanity as editable documents.

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

After seeding, open Studio at `http://localhost:3333`, edit the documents, and publish them. The frontend listens for published Sanity changes, refetches on window focus, and displays those published values.

## Content Flow

1. A client edits and publishes content in `studio-convertify`.
2. The frontend queries published Sanity documents using `@sanity/client`.
3. The frontend refreshes CMS content when published Sanity documents change and when the browser tab regains focus.
4. If Sanity is unreachable, the frontend falls back to local starter content and logs a warning in the browser console.
5. The quote form logic remains frontend-controlled; only the surrounding copy is editable in Sanity.

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
