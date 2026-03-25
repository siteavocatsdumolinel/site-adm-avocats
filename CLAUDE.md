# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Website for **ADM Avocats du Molinel**, a French law firm based in Wasquehal (Lille). Built with Next.js 14 App Router, TypeScript, Tailwind CSS, and Framer Motion.

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

## Environment Variables

Create a `.env.local` file at the project root with:

```env
NEXT_PUBLIC_WEB3FORMS_KEY=your_key_here
```

- **`NEXT_PUBLIC_WEB3FORMS_KEY`** — API key from [web3forms.com](https://web3forms.com). Required for the contact form to actually send emails. Without it, the form will silently fail.

## Architecture

### Routing (Next.js App Router)

All pages live in `app/`. The layout in `app/layout.tsx` wraps every page with Navbar, Footer, GoogleAnalytics, and CookieConsentBanner.

Key routes:
- `/` — Home page (hero + presentation + competences + team + CTA)
- `/competences` — Practice areas detail
- `/informations-et-contact` — Contact info, map, form
- `/le-blog` — Blog
- `/frank-beckelynck-avocat`, `/caroline-duquesne-avocat`, etc. — Individual lawyer profiles
- `/eric-gardin` — Eric Gardin profile (note: no `-avocat` suffix in the URL)
- `/leclercq-christophe` — Christophe Leclercq profile (note: name order reversed in URL)
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

Remote images from `adm-avocatsdumolinel.com` are allowed via `next.config.js`. Local assets (logos, hero images) are in `public/`. Lawyer photos are in `public/images/equipe/`.

---

## How to: Add or Edit a Lawyer

There are **two places** to update when adding or modifying a lawyer.

### 1. Home page team cards — `app/page.tsx`

The `lawyers` array drives the team section on the home page. Each entry maps to a `LawyerCard`:

```ts
const lawyers = [
  {
    name: 'Prénom NOM',
    title: 'Titre affiché sous le nom',
    tags: ['Droit social'],           // displayed as badges
    photo: '/images/equipe/fichier.jpg',
    href: '/slug-avocat',             // URL of the profile page
    email: 'prenom@admavocats.fr',    // personal email (optional)
    linkedin: 'https://linkedin.com/in/...', // personal LinkedIn (optional)
  },
]
```

If `email` or `linkedin` is omitted, the card icons fall back to the cabinet's default (`contact@adm-avocatsdumolinel.com` and the cabinet's LinkedIn page).

### 2. Profile page — `app/[slug]/page.tsx`

Each lawyer has their own page under `app/`. Pass all props to `<LawyerProfile>`:

```tsx
<LawyerProfile
  name="Prénom NOM"
  title="Avocat au Barreau de LILLE"
  structure="Nom de la structure (optionnel)"
  photo="/images/equipe/fichier.jpg"
  biography={`Texte de biographie...`}
  engagements={[                         // optional list
    'Membre de ...',
  ]}
  langue="Anglais"                       // optional
  competences={[
    { label: 'Droit social', href: '/competences#droit-social' },
  ]}
  phone="03 20 12 10 60"
  email="prenom@admavocats.fr"           // optional
  linkedin="https://linkedin.com/in/..." // optional
/>
```

**Email convention:** `firstinitial + lastname @admavocats.fr`
- Frank BECKELYNCK → `fbeckelynck@admavocats.fr`
- Caroline DUQUESNE → `cduquesne@admavocats.fr`
- Exception: Eric GARDIN → `gardin.avocat@gmail.com`

**Phone:** all lawyers share `03 20 12 10 60` except Eric GARDIN (`06 28 49 29 33`).

---

## Key Components

### `ContactIcons`
Renders email and LinkedIn icon buttons. Accepts `email`, `linkedin`, and `className` props. Falls back to cabinet-level defaults if props are omitted.

### `LawyerCard`
Used on the home page team section. Accepts `name`, `title`, `tags`, `photo`, `href`, `email`, `linkedin`, `delay`. On hover, shows an overlay with `ContactIcons` and a "Voir le profil" CTA.

### `LawyerProfile`
Full-page layout for individual lawyer profiles. Left column: photo, name, competences, phone, `ContactIcons`, "Prendre contact" button. Right column: biography, language, engagements.

### `ContactForm`
Contact form on `/informations-et-contact`. Submits via [Web3Forms](https://web3forms.com) API using `NEXT_PUBLIC_WEB3FORMS_KEY`. Fields: nom, email, sujet, message, RGPD checkbox.

### `FadeInSection`
Framer Motion wrapper for scroll-triggered fade-in animations. Wrap any section with it. Accepts a `delay` prop (seconds) and a `subtleScale` boolean for a slight scale effect.

---

## Competences Anchors

The `/competences` page uses anchor IDs. Use these exact hrefs when linking from `LawyerProfile`:

| Domain | href |
|--------|------|
| Droit commercial | `/competences#droit-commercial` |
| Droit pénal | `/competences#droit-penal` |
| Droit social | `/competences#droit-social` |
| Droit fiscal | `/competences#droit-fiscal` |
| Droit des sociétés | `/competences#droit-societes` |
