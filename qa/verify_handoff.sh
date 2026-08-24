#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
BASE="${1:-http://127.0.0.1:4173}"
ROUTES=(
  "/"
  "/solutions"
  "/how-it-works"
  "/industries"
  "/industries/kitchens-interior"
  "/industries/automotive-after-sales"
  "/about"
  "/contact"
  "/privacy"
  "/terms"
)
PDFS=(
  "/resources/guide-lead-to-showroom-showrooms-cuisines-maroc.pdf"
  "/resources/guide-demandes-automobiles-sans-suite-maroc.pdf"
)
for route in "${ROUTES[@]}"; do
  status=$(curl -sS -o /dev/null -w '%{http_code}' "$BASE$route")
  test "$status" = "200"
done
for pdf in "${PDFS[@]}"; do
  headers=$(curl -sSI "$BASE$pdf")
  printf '%s\n' "$headers" | grep -qi '^HTTP/.* 200'
  printf '%s\n' "$headers" | grep -qi '^Content-Type: application/pdf'
done
sha=$(sha256sum "$ROOT/client/public/resources/guide-demandes-automobiles-sans-suite-maroc.pdf" | awk '{print $1}')
test "$sha" = "aa59904fe8210fbd8a407df7d8b129bf0c116def9018e546ad61494809bdb35d"
grep -q 'id="eligibilite"' "$ROOT/client/src/pages/AutomotiveAfterSales.tsx"
grep -q 'https://pexek.com/industries/automotive-after-sales' "$ROOT/client/public/sitemap.xml"
test "$(grep -c '<url><loc>' "$ROOT/client/public/sitemap.xml")" = "10"
for route in /solutions /how-it-works /industries /industries/kitchens-interior /industries/automotive-after-sales /about /contact /privacy /terms; do
  grep -Fq "\"source\": \"$route\"" "$ROOT/vercel.json"
done
grep -q '/assets/(.*)' "$ROOT/vercel.json"
grep -q '/resources/(.*)\\\\.pdf' "$ROOT/vercel.json"
printf '%s\n' "HANDOFF_VERIFICATION_PASS"
printf '%s\n' "AUTOMOTIVE_SHA256=$sha"
printf '%s\n' "SITEMAP_URL_COUNT=$(grep -c '<url><loc>' "$ROOT/client/public/sitemap.xml")"
