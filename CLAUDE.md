# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the website for **ADM Avocats du Molinel**, a French law firm. Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

## Commands

```bash
npm run dev      # Start development server (localhost:3000)
npm run build    # Production build
npm run start    # Start production server
npm run lint     # ESLint checks
```

Docker:
```bash
docker build -t adm-avocats .
docker run -p 3000:3000 adm-avocats
```

## Architecture

### Routing (Next.js App Router)

All pages live in `app/`. The layout in `app/layout.tsx` wraps every page with Navbar, Footer, GoogleAnalytics, and CookieConsentBanner.

Key routes:
- `/` — Home page (hero + presentation + competences + team + CTA)
- `/competences` — Practice areas detail
- `/informations-et-contact` — Contact info, map, form
- `/le-blog` — Blog
- `/[slug]-avocat` — Individual lawyer profiles (7 attorneys)
- `/mentionslegales`, `/politique-de-confidentialite` — Legal pages

### Component Pattern

`components/` contains shared UI. Pages compose these components directly — there is no global state management. Animations use Framer Motion; the `FadeInSection` wrapper provides scroll-triggered fade-ins.

### Styling

Tailwind CSS with a custom color palette defined in `tailwind.config.ts`:
- `adm-rouge` (#E5493D) — red accent
- `adm-fonce` (#313E35) — dark green/primary
- `adm-teal` (#4d6263) — teal
- `adm-blanc` / `adm-gris` — white / light gray

Fonts: **Playfair Display** (headings/serif) and **Inter** (body/sans). Applied via CSS variables `--font-playfair` and `--font-inter`.

Utility classes `section-padding` and `section-container` are defined in `app/globals.css` and used throughout pages for consistent spacing.

### Images

Remote images from `adm-avocatsdumolinel.com` are allowed via `next.config.js`. Local assets (logos, hero images) are in `public/`.
