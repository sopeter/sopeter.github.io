# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev      # Start dev server at http://localhost:3000
npm run build    # Production build
npm run lint     # Run ESLint
```

Deployment is automated via GitHub Actions on push to `main` — it builds and deploys to GitHub Pages.

## Architecture

This is a **Next.js 14** single-page portfolio site using TypeScript, Tailwind CSS, and Bootstrap 5.

**Data layer**: All portfolio content (experiences, projects, skills) lives in `src/app/jsons/data.ts`. To add/update portfolio content, edit this file — components consume it directly.

**Component structure**: Each section of the page (`About`, `Experience`, `Projects`, `Navigation`, `Footer`) lives under `src/components/`. Each section has a container component and a card/sub-component.

**Styling**: Dual Tailwind + Bootstrap setup. Custom theme overrides (colors, fonts) are in `src/app/customTheme.css`. Primary palette: dark navy background (`#0f172A`), teal accent (`#2E9CCA`). Bootstrap JS requires the `src/components/BootstrapClient.ts` client-side shim for Next.js compatibility.

**Path alias**: `@/*` resolves to `./src/*`.

**Static assets**: Images, PDFs, and icons live in `public/`.
