# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

@AGENTS.md

> The `@AGENTS.md` import above is load-bearing: **this is Next.js 16.2.6, not the version in your training data.** APIs, conventions, and file layout may differ. Read the relevant guide under `node_modules/next/dist/docs/` (`01-app`, `02-pages`, `03-architecture`) and heed deprecation notices before writing or changing any Next.js code.

## Commands

```bash
npm run dev      # start dev server at http://localhost:3000
npm run build    # production build
npm run start    # serve the production build
npm run lint     # eslint (flat config, eslint-config-next core-web-vitals + typescript)
```

There is no test runner configured.

## What this is

A single-page marketing/landing site for **FleetDecks**, a white-label car-rental operations SaaS targeting Indian operators. There is no backend, database, forms, or API routes — the only conversion path is a `mailto:` link (`sales@fleetdecks.in`) defined as `contactHref` in `app/page.tsx`. Treat copy in `app/page.tsx` (pain points, features, steps, testimonials) as the product content; testimonials and logos are intentional placeholders.

## Architecture

- **`app/page.tsx`** — the entire page. It is a Client Component (`"use client"`) solely because it owns the `ThemeToggle`. Section content lives in plain arrays at the top of the file (`painPoints`, `features`, `steps`, `testimonials`); render loops map over them. Edit those arrays to change copy rather than touching JSX.
- **`app/layout.tsx`** — root layout, all SEO/OpenGraph/Twitter `metadata` and `viewport`, and `next/font/google` setup. Site URL comes from `NEXT_PUBLIC_SITE_URL` (defaults to `https://fleetdecks.in`).
- **`app/globals.css`** — Tailwind v4 entry and design tokens.

## Conventions that aren't obvious

- **Tailwind v4, CSS-first config.** There is no `tailwind.config.js`. Theme tokens are declared in `app/globals.css` via `@import "tailwindcss"` and `@theme inline`. Dark mode is **class-based** through a custom variant: `@custom-variant dark (&:where(.dark, .dark *))` — so `dark:` utilities key off a `.dark` class on `<html>`, not the OS media query.
- **Theme toggle is manual + persisted.** `ThemeToggle` in `app/page.tsx` toggles `.dark` on `document.documentElement` and stores the choice in `localStorage` under `fleetdecks-theme`. It falls back to `prefers-color-scheme` only when no stored value exists. `<html>` uses `suppressHydrationWarning` because of this client-side class manipulation.
- **Fonts.** Manrope → `--font-manrope` (sans, body); Fraunces → `--font-fraunces` (serif, headings via `font-serif`). Both are wired through `next/font/google` in `layout.tsx` and exposed as CSS vars in `@theme`.
- **Brand palette is emerald.** Greens + cream (`#f7f5ef` light / `#07110d` dark) are used directly as Tailwind utilities and arbitrary values; keep new UI consistent with that system.
- **Path alias:** `@/*` maps to the repo root (`tsconfig.json`).
- **Assets:** brand SVGs live in `public/` as `fleetdecks-*.svg` (icon, logo, og). The `next.svg`/`vercel.svg` etc. are leftover scaffolding.
