# Tulas International School (TIS) - Homepage Redesign

A modern, animated redesign of the [Tulas International School](https://tis.edu.in/) homepage focusing on high conversion, fluid animations, and mobile responsiveness.

## 🚀 Live Demo

- **Live URL:** _coming soon_
- **Repository:** _coming soon_

## 🛠️ Tech Stack

- **Framework:** Next.js 16 (App Router) with React 19 and TypeScript
- **Styling:** Tailwind CSS v4 (CSS variables for theming)
- **Animations:** Framer Motion, plus CSS keyframes for the marquees
- **Icons:** Lucide React
- **Fonts:** Fraunces and Barlow via `next/font` (self-hosted, no layout shift)

## ✨ Standout Features Implemented

All four optional features are built:

1. **Custom Cursor** (`components/animation/CustomCursor.tsx`): a dot that tracks the pointer exactly and a ring that trails it on a Framer Motion `useSpring`. The ring grows when it is over a link or button (detected with one delegated `pointerover` listener). Positions are motion values applied as transforms, so moving the mouse never re-renders React. It only mounts on `(pointer: fine)` devices, so phones and tablets keep native touch behaviour.
2. **Scroll-Triggered Reveals** (`components/animation/Reveal.tsx`): `Reveal`, `RevealGroup` and `RevealItem` wrap Framer Motion's `whileInView` with `viewport={{ once: true }}`. Groups stagger their children by 80ms, and every entrance runs for 0.5s, inside the brief's 0.3s to 0.6s range.
3. **Animated Theme Switcher** (`components/animation/ThemeToggle.tsx`, `hooks/useTheme.ts`): the sun and moon icons rotate in and out with `AnimatePresence`, and page colours fade over 0.4s. A tiny inline script in `<head>` applies the saved or system theme before first paint, so there is no flash of the wrong theme. The `<html>` class is the single source of truth, and React reads it with `useSyncExternalStore`.
4. **Scroll Progress Bar** (`components/animation/ScrollProgress.tsx`): `useScroll()` smoothed by `useSpring()` and applied as `scaleX`, so it animates on the compositor.

Other touches: a parallax hero, count-up statistics, infinite marquees for sports and campus visitors, a full-screen animated mobile menu, and `prefers-reduced-motion` support throughout.

## 📦 Getting Started Locally

Requires Node.js 20.9 or newer.

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/tis-homepage-redesign.git
   cd tis-homepage-redesign
   ```
2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run the development server:**
   ```bash
   npm run dev
   ```
4. Open [http://localhost:3000](http://localhost:3000) in your browser.

Other scripts: `npm run build` (production build), `npm start` (serve the build), `npm run lint`.

## 🧩 Component Architecture Overview

```
src/
├── app/                  # layout.tsx (fonts, metadata, theme script), page.tsx, globals.css
├── components/
│   ├── ui/               # ButtonLink, SectionHeading, Marquee, StatCounter
│   ├── layout/           # Navbar, MobileNav, Footer
│   ├── sections/         # Hero, Stats, About, CampusLife, Sports, Rankings, Testimonials, AdmissionsCTA
│   └── animation/        # CustomCursor, ScrollProgress, ThemeToggle, Reveal
├── hooks/                # useMediaQuery, useScrolled, useCountUp, useTheme
├── lib/                  # theme.ts (storage key + pre-paint script)
└── data/                 # content.ts: all copy, links, stats and images in one place
```

- **Sections are server components where possible.** Only components that need state, effects or motion are marked `"use client"`.
- **Content is separated from markup.** Every string, statistic and image path lives in `data/content.ts`.
- **Custom hooks:**
  - `useMediaQuery`: subscribes to a media query with `useSyncExternalStore`, and returns `false` on the server so client-only UI never causes a hydration mismatch.
  - `useScrolled`: reports whether the page has scrolled past a threshold, and re-renders only when that boolean flips.
  - `useCountUp`: animates a number when it enters the viewport by writing to the DOM node directly, avoiding a render per frame.
  - `useTheme`: reads the current theme from the `<html>` class.

## ♿ Quality Checks

- `npm run build` and `npm run lint` pass with no errors or warnings.
- No console errors or warnings in the browser.
- Tested at 375px, 768px and 1440px in light and dark themes, with no horizontal scroll.
- Semantic landmarks (`header`, `nav`, `main`, `section`, `footer`, `address`), sections labelled by their headings, and every tap target at least 44px.
- Accent colours are adjusted in dark mode to keep text contrast readable.

## 🎨 Brand Identity Retained

- Primary colours from tis.edu.in: crimson `#B90124`, teal `#007A83` and gold `#C09D59`.
- Copy, rankings, sports list, testimonials and contact details are taken from the current homepage.
- Official school logo and photography from tis.edu.in, resized and converted to WebP (about 550 KB in total).
- TIS uses licensed fonts (Mirador, PF DIN), so Fraunces and Barlow are used as close open-source alternatives.
