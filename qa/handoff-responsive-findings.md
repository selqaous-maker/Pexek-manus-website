# Production Handoff Responsive QA Findings

## 1440px and 1280px

The homepage, Solutions, Industries, Kitchens & Interior, Automotive After-sales, About and Contact routes rendered in the desktop captures. The global English navigation is visible and the French Kitchens header remains intact. The Automotive page shows the compact resource-card integration in its approved visual context. No visible horizontal overflow or header clipping was observed in the captured viewport areas.

The 1280px capture also verified the legal route rendering and the same-origin page shell. Full route status, PDF MIME and checksum checks are recorded separately in the deterministic handoff verification output.

## 768px and 430px

The four representative routes rendered at tablet and mobile widths. Navigation collapses into the mobile menu as expected; headings and CTA groups wrap without visible clipping; the Automotive hero remains contained within the viewport. The Kitchens and Automotive layouts preserve their approved French content and route-specific visual treatment. The new Automotive resource card is below the hero flow and remains constrained by the shared card grid.

## 390px and 320px

The representative homepage, Solutions, Kitchens & Interior and Automotive routes rendered at both narrow mobile widths. The mobile menu button remains contained, headings wrap naturally, CTA buttons remain within the viewport, and the Automotive hero/card flow shows no visible horizontal overflow. The 320px capture is the narrowest required check and remained readable without clipping in the captured viewport.

## Browser direct-load checks

The production-built preview loaded `/solutions` and `/industries` directly in the browser with their expected page titles, route-specific content and shared navigation. No fallback 404 screen appeared in either direct load.

## Automotive direct load and refresh

The Automotive After-sales route loaded directly and again after a direct refresh in the browser. The expected French page title, hero, PDF resource card, 10-or-fewer customer-facing form inputs, four source checkboxes and eligibility form were present. The direct PDF link remained same-origin and the page did not fall back to the 404 screen.
