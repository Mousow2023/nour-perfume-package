# Nour — Fragrance House Landing Page

A premium, single-page marketing site for **Nour**, a small-batch fragrance
oil house. Built with React, TypeScript, Vite, Tailwind CSS v4 and Framer
Motion. Fully static — no backend, database, or paid service required.

## Stack

- **Vite + React 19 + TypeScript** — build tooling and app shell
- **Tailwind CSS v4** — design tokens defined once in `src/index.css` (`@theme`)
- **Framer Motion** — scroll-triggered reveals and the signature "scent
  trail" line animation
- **lucide-react** — line icons
- **@fontsource/fraunces** + **@fontsource/inter** — self-hosted variable
  fonts (no external font CDN request at runtime)

## Getting started

\`\`\`bash
npm install
npm run dev       # local dev server
npm run build      # type-check + production build → dist/
npm run preview    # preview the production build locally
npm run lint        # oxlint
\`\`\`

## Project structure

\`\`\`
src/
  assets/images/        Source photography (heritage + atelier shots)
  components/
    Navbar.tsx           Transparent → glass nav, mobile drawer
    PerfumeBottle.tsx     Reusable vector bottle illustration (color-driven)
    ScentTrail.tsx        Signature animated divider motif
  lib/
    products.ts           Single source of truth for the 5 fragrances
  sections/
    Hero.tsx
    Collection.tsx
    BrandStory.tsx
    FragranceNotes.tsx
    WhyChooseUs.tsx
    Bestseller.tsx
    Testimonials.tsx
    Contact.tsx
    Newsletter.tsx
    Footer.tsx
  App.tsx                 Section order / page composition
  index.css               Design tokens (@theme) + base styles
\`\`\`

To edit a product (name, price, notes, description, bottle colour), change
one entry in \`src/lib/products.ts\` — every section that references it
updates automatically.

## Design system

Tokens live in \`src/index.css\` under \`@theme\`, so Tailwind generates
utilities directly from them (\`bg-ink\`, \`text-gold\`, \`bg-oxblood\`, etc.):

| Token | Hex | Use |
|---|---|---|
| \`--color-ink\` | \`#0e0c11\` | Primary dark background |
| \`--color-bone\` | \`#f5efe3\` | Primary light background |
| \`--color-gold\` | \`#c6974e\` | Accent, CTAs, dividers |
| \`--color-oxblood\` | \`#4a1620\` | Testimonials ground |
| \`--color-plum\` | \`#221d24\` | Body text on light backgrounds |

Type: **Fraunces** (display/editorial headlines, used with italic for
accent words) + **Inter** (body copy, UI, tracked-uppercase "eyebrow"
labels).

## Content notes (read before launch)

This is a fully designed, production-ready template with realistic
placeholder content — swap the following before going live:

- **Product photography**: the five fragrances currently use hand-drawn
  SVG bottle illustrations (\`PerfumeBottle.tsx\`) rather than photos, so
  every product renders crisp and consistent at any size. Swap in real
  studio photography by replacing the component usage with an \`<img>\` tag
  once you have clean, isolated product shots.
- **WhatsApp number**: replace \`97100000000\` in \`Contact.tsx\` and
  \`Footer.tsx\` with your real number.
- **Email / handle / address**: placeholders in \`Contact.tsx\` and
  \`Footer.tsx\`.
- **Testimonials**: sample quotes in \`Testimonials.tsx\` — replace with
  real customer feedback.
- **Newsletter form**: \`Newsletter.tsx\` currently just shows a success
  state locally. Wire \`handleSubmit\` up to your email provider
  (Mailchimp, Klaviyo) or use Netlify Forms if deploying there.

## Deployment

### Netlify (free tier)
1. Push this folder to a GitHub repo (or drag-and-drop the \`dist/\`
   folder after running \`npm run build\` into Netlify's dashboard).
2. Build command: \`npm run build\` — Publish directory: \`dist\`.

### GitHub Pages
1. Run \`npm run build\`.
2. Deploy the contents of \`dist/\` to the \`gh-pages\` branch (e.g. via the
   \`gh-pages\` npm package or a GitHub Actions workflow).
3. \`vite.config.ts\` already uses a relative \`base: './'\`, so the build
   works from any sub-path without extra configuration.

No environment variables, backend, or database are required.
# maison_baraka
