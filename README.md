# Evalent Landing Page

Public landing page for **BluetipAI Evalent**, built with React 19, TypeScript and Vite.
Implements design handoff "Evalent Landing K" (direction K).

## Getting started

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the production build
```

## Structure

- `src/components/` — one component per page section (Header, Hero, Formats, TopPerformers, Languages, Create, Integrity, AIStages, Roles, Why, FAQ, CTA, Footer).
- `src/data.ts` — list content: top performers, marquee items, proctoring signals, AI stages, FAQs.
- `src/index.css` — design tokens and all styles (values match the handoff exactly).
- `src/assets/evalent-logo.svg` — client-supplied logo.

## Breakpoints

From design "Evalent Landing K Devices": desktop ≥960px, tablet 600–959px, mobile <600px (media queries at the end of `src/index.css`).
Below 960px the nav collapses into a hamburger menu; below 560px "Sign in" moves into that menu; on mobile the FAQ answer opens under the question.

## Interactions

- Hero headline variable-font "lens" and card parallax live in `Hero.tsx`; both are disabled under `prefers-reduced-motion`.
- Marquee rows pause on hover. FAQ selects on hover or click.

## Pending client input

- FAQ answers 8 (capacity) and 9 (connection drop) are placeholders in `src/data.ts`.
- `#signin`, `#register`, `#tour`, `#create` links have no targets yet.
