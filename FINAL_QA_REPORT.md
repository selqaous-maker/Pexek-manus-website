# PEXEK Global Website — Final Release-Candidate QA Report

**Project:** PEXEK Global Website  
**Scope:** Frozen approved website source, Vercel Preview handoff and portable production export.  
**Audit date:** 21 August 2026.  
**Deployment status:** No `pexek.com` connection, DNS change, Zoho Mail change, Formspree change or direct Vercel deployment was performed.

## Executive result

The release candidate is **ready for manual Vercel Preview deployment**. The complete source package builds from a clean extraction with the committed lockfile. All nine approved application routes return successfully through the local preview and the Vercel-compatible routing harness. Static assets, the direct PDF resource, robots, sitemap, manifest and favicon bypass the SPA rewrites correctly.

The only source changes in this final handoff pass are the root Vercel routing configuration, the reproducible routing validator and the QA checklist/report. Approved page copy, design, forms, PDF content, metadata, schema, legal text, DNS, Formspree and the existing Manus deployment were not changed.

## Approved route inventory

| Route | Expected behavior | Result |
|---|---|---:|
| `/` | Homepage | HTTP 200 |
| `/solutions` | Direct SPA route and refresh | HTTP 200 |
| `/how-it-works` | Direct SPA route and refresh | HTTP 200 |
| `/industries` | Direct SPA route and refresh | HTTP 200 |
| `/industries/kitchens-interior` | Direct French funnel route and refresh | HTTP 200 |
| `/about` | Direct SPA route and refresh | HTTP 200 |
| `/contact` | Direct SPA route and refresh | HTTP 200 |
| `/privacy` | Direct legal route and refresh | HTTP 200 |
| `/terms` | Direct legal route and refresh | HTTP 200 |

## Vercel routing integrity

`vercel.json` is located at the repository root beside `package.json` and `pnpm-lock.yaml`. Each approved application route has an exact SPA rewrite to `/`. The only retained legacy redirect is `/voice-ai-agents` → `/`, permanently. No approved route is redirected to a homepage hash.

The following static paths are not intercepted by exact application rewrites: `/assets/*`, `/resources/*`, `/robots.txt`, `/sitemap.xml` and `/manifest.webmanifest`. Existing cache rules remain in place for immutable assets and the PDF resource.

The Vercel-compatible harness was run against the production output on an isolated local port. Results were HTTP 200 for all nine application routes, the three configuration files and the direct PDF. The legacy route returned HTTP 308 to `/`, as configured. The PDF response MIME type was `application/pdf`.

## Build and source reproducibility

| Check | Result |
|---|---:|
| `pnpm install --frozen-lockfile` from repository | PASS |
| `pnpm check` | PASS |
| `pnpm build` | PASS |
| Fresh ZIP extraction and frozen install | PASS |
| Fresh ZIP extraction TypeScript check | PASS |
| Fresh ZIP extraction production build | PASS |
| `/manus-storage/` references | 0 |
| Manus runtime/debug/storage references in client | 0 |
| Required local image, logo, font, favicon and PDF assets | Present |

The install emits a non-blocking pnpm warning that the legacy `pnpm` field in `package.json` is ignored by newer pnpm versions. The frozen install, type check and build still pass. This warning does not require a design or deployment change for the current handoff.

## Production bundle measurements

The final production output is approximately **2.8 MB** including local visual assets and the direct PDF resource. The primary emitted application artifacts are:

| Artifact | Raw size |
|---|---:|
| Shared JavaScript | 349.7 KB |
| Shared CSS | 182.4 KB |
| Homepage route chunk | 27.3 KB |
| Solutions route chunk | 17.0 KB |
| Industries route chunk | 16.6 KB |
| How It Works route chunk | 16.3 KB |
| Kitchens route chunk | 25.8 KB |
| Contact route chunk | 12.0 KB |
| Main local emblem WebP | 285.8 KB |
| Direct PDF | 559.4 KB |

The current task did not introduce a shared-JavaScript reduction refactor. That optimization should be reconsidered only after measuring the authenticated Vercel Preview, as requested.

## Lighthouse evidence

The most recent production-preview Lighthouse evidence remains the following mobile-lab baseline. It was produced before this routing-only handoff change; the page runtime, copy, layout and assets were not changed in this pass.

| Route | Performance | Accessibility | Best practices | SEO |
|---|---:|---:|---:|---:|
| `/` | 73 | 96 | 100 | 100 |
| `/solutions` | 74 | 95 | 100 | 100 |
| `/industries` | 74 | 95 | 100 | 100 |
| `/how-it-works` | 74 | 95 | 100 | 100 |
| `/industries/kitchens-interior` | 73 | 96 | 100 | 100 |
| `/privacy` | 75 | 100 | 100 | 100 |
| `/terms` | 75 | 100 | 100 | 100 |

The score range is **73–75 Performance**, **95–100 Accessibility**, **100 Best Practices** and **100 SEO**. These are local lab values and must be rechecked on the Vercel Preview because CDN delivery and the hosted runtime will differ.

## Responsive and visual QA

Visual captures were completed at **1440, 1280, 1024, 768, 430, 390 and 320px** for the principal global routes, the Kitchens & Interior funnel and the Privacy route. The approved Signal Atelier Midnight system remained intact. The reviewed surfaces showed no new horizontal overflow, clipped headings or broken CTA containment. The 320px and 390px captures confirmed the mobile header and compact CTA behavior; tablet captures confirmed the breakpoint transition and card/workflow containment.

The `/terms` route shares the validated legal presentation component with `/privacy` and was separately verified for direct loading and build integrity.

## Navigation, form and external-link QA

The shared global English header uses the approved order **Solutions → How it works → Industries → About**, with the approved assessment CTA pointing to `/#assessment`. The homepage, Solutions, Industries, How It Works and About routes were visually checked for the shared header, active-route state and mobile menu. The Kitchens French header remained outside the global typography/header modification scope.

The homepage assessment form retains the validated Formspree endpoint and existing submission logic. The source includes the subject field, page URL field, form source, required privacy consent checkbox and honeypot field. No owner-authorized lead submission was sent during this final pass.

The Contact route retains the approved email, WhatsApp, company LinkedIn and founder LinkedIn destinations. External LinkedIn links use distinct accessible labels, open in a new tab and use `rel="noopener noreferrer"`.

## SEO and static integrity

The sitemap contains the nine approved public URLs: homepage, Solutions, Industries, How It Works, Kitchens & Interior, About, Contact, Privacy and Terms. Robots, manifest, favicon and direct PDF files are present locally. Existing canonical URLs, Open Graph metadata and structured data were preserved. No analytics or marketing cookies were added.

## Portable export

**File:** `pexek-global-production-release-candidate.zip`  
**Size:** approximately 17 MB  
**SHA-256:** `4b8de93bd7158e92f286739f7cd6f4b3b2ff6c655f58467e369f7eaabaac5868`

The ZIP is a complete repository-root export, not a `dist`-only package. It includes source code, `client/`, `server/`, `shared/`, `package.json`, `pnpm-lock.yaml`, root `vercel.json`, local fonts, local visual assets, favicon, webmanifest, robots, sitemap, the approved PDF, README, `.env.example`, deployment documentation and QA helpers. It excludes node modules, build output, credentials, secrets, local logs, Lighthouse browser profiles and temporary ZIP files.

## Manual Vercel Preview deployment

Import or update the existing GitHub/Vercel project using the **repository root**, not `dist/public` and not a nested subdirectory. Use these settings:

| Vercel setting | Value |
|---|---|
| Framework preset | Vite |
| Install command | `pnpm install --frozen-lockfile` |
| Build command | `pnpm build` |
| Output directory | `dist/public` |
| Root directory | Repository root |

After the Preview is created, verify all nine routes with direct refresh, `/#assessment` hash positioning, one owner-authorized Formspree test, PDF MIME/download behavior, mobile navigation at 320px, console/network errors, Lighthouse mobile/desktop, canonical URLs, schema, sitemap and robots. Do not connect `pexek.com` or change DNS until these checks pass and rollback readiness is confirmed.

## Rollback

Keep the current Manus deployment and original DNS records unchanged. If the Vercel Preview fails, do not connect the custom domain; instead correct the repository source or revert the GitHub commit. If a later domain cutover is authorized and fails, restore the original DNS records and confirm the existing Manus host serves the site before investigating further.

## Recommended Git commit message

```text
chore: finalize PEXEK Vercel release candidate and portable export
```
