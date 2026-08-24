#!/usr/bin/env bash
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
OUT="${1:-/home/ubuntu/pexek-global-homepage-v31/pexek-global-homepage-v31-production-handoff-77bde7c1-docs.zip}"
STAGE="$(mktemp -d)"
trap 'rm -rf "$STAGE"' EXIT
PKG="$STAGE/pexek-global-homepage-v31"
mkdir -p "$PKG"
cp -a "$ROOT/." "$PKG/"
rm -rf "$PKG/.git" "$PKG/node_modules" "$PKG/dist" "$PKG/.manus-logs" "$PKG/.project-config.json" "$PKG/client/public/__manus__" "$PKG/.env" "$PKG/.env.local"
find "$PKG" -type f \( -name 'pexek-global-homepage-v31-production-handoff*.zip' -o -path '*/qa/*.pdf' -o -path '*/qa/*.png' -o -path '*/qa/*.jpg' \) -delete
find "$PKG" -type f \( -name '*.zip' -o -name '*.pdf' -path '*/qa/*' -o -name '*.png' -path '*/qa/*' -o -name '*.jpg' -path '*/qa/*' \) -delete
rm -f "$PKG/.env" "$PKG/.env.local" "$PKG/FINAL_QA_REPORT.md" "$PKG/qa/FINAL_QA_REPORT.md" "$PKG/qa/SHA256SUMS.txt"
printf '%s\n' '# PEXEK static production handoff' '# Build with: pnpm install --frozen-lockfile && pnpm check && pnpm build' '# Vercel: Framework Vite; Output directory dist/public.' '# No secrets or provider credentials belong in this source package.' > "$PKG/.env.example"
mkdir -p "$(dirname "$OUT")"
rm -f "$OUT"
( cd "$STAGE" && zip -qr "$OUT" pexek-global-homepage-v31 )
sha256sum "$OUT"
unzip -l "$OUT" | tail -8
