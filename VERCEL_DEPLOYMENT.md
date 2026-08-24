# PEXEK Portable Deployment Guide

This repository is a static React/Vite site prepared for the existing PEXEK GitHub/Vercel project. The deployment path below is manual because Vercel authentication is intentionally not handled in this workspace.

## Build contract

Use Node.js 20 or newer and pnpm 10.4.1. From the repository root, run:

```bash
pnpm install --frozen-lockfile
pnpm check
pnpm build
```

The Vercel project should use **Build Command** `pnpm build`, **Output Directory** `dist/public`, and the repository's default install command. No runtime environment variables are required for the static build.

## Vercel steps

1. Open the existing PEXEK project in Vercel.
2. Open **Settings → Git** and confirm that the intended GitHub repository and production branch are connected.
3. Confirm that the project root is the repository root and that the build command and output directory match the values above.
4. Push the hardened source to the approved GitHub repository with the recommended commit message in `README.md` or the final QA report.
5. Create a preview deployment first. Verify `/`, `/solutions`, `/how-it-works`, `/industries`, `/industries/kitchens-interior`, `/industries/automotive-after-sales`, `/about`, `/contact`, `/privacy` and `/terms` by direct refresh.
6. Verify `/resources/guide-lead-to-showroom-showrooms-cuisines-maroc.pdf` and `/resources/guide-demandes-automobiles-sans-suite-maroc.pdf` return the PDFs directly.
7. Promote the approved preview to production from Vercel.
8. Do not connect `pexek.com` or change DNS in this deployment step. Domain cutover remains a separate owner-approved operation.

`vercel.json` contains nine explicit non-root SPA rewrites for the approved client routes and exactly one legacy redirect: `/voice-ai-agents` → `/`. `/about` and `/contact` are real application routes, not redirects. Immutable caching for local assets and direct delivery for both PDF resources are preserved.

## Post-deployment checks

Verify all 10 public application routes by direct refresh, the production response status, browser console, form display, both PDF downloads, assessment hash landing, mobile layout and the canonical URL for each indexable route. Submit no form during deployment verification unless the owner separately authorizes a production Formspree test.
