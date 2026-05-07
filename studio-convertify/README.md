# Convertify Sanity Studio

This is the Sanity Studio for the Convertify website. It connects to the existing Sanity project and provides client-editable content for the React frontend.

## Environment

Create a local environment file:

```bash
cp .env.example .env.local
```

Values:

```bash
SANITY_STUDIO_PROJECT_ID=06lobmo4
SANITY_STUDIO_DATASET=production
SANITY_STUDIO_API_VERSION=2026-05-07
SANITY_STUDIO_TITLE=Convertify
```

The project ID and dataset also have safe fallback values in `sanity.config.ts` and `sanity.cli.ts`, so the studio still points at the manually configured Sanity project if `.env.local` is missing.

## Run

Sanity Studio v5 requires Node.js 20.19.1 or newer.

```bash
npm install
npm run dev
```

Sanity Studio usually runs at `http://localhost:3333`.

## Content Model

The Studio includes:

- Site Settings: brand name, logo, email, phone, address, social links, primary CTA
- Homepage: hero headline, highlighted hero text, supporting text, CTAs, hero image, trust points, trust bar names
- Services: service title, short description, Lucide icon name or image, display order
- Case Studies / Projects: title, category, short description, problem, solution, outcome, image, tools used, display order
- Testimonials: quote, client name, role, company, image or logo, display order
- FAQs: question, answer, display order
- Quote Form Settings: form headline, supporting text, success message, trust text

## Seed Starter Content

The frontend fallback copy can be seeded into Sanity so it becomes editable in Studio.

Log in once:

```bash
npx sanity login
```

Create missing starter documents:

```bash
npm run seed
```

The seed command does not overwrite existing documents by default.

To intentionally replace seeded documents:

```bash
SEED_OVERWRITE=true npm run seed
```

## Frontend Connection

The React frontend fetches published documents from this Sanity dataset using `@sanity/client`. The frontend still has fallback content, so it works locally before content has been published.

Make sure the Sanity project allows the frontend local origin in CORS settings:

```text
http://localhost:3000
```
