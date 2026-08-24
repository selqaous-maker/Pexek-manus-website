#!/usr/bin/env bash
set -euo pipefail
PROJECT_ROOT="$(cd "$(dirname "$0")/.." && pwd)"
ZIP="${1:-$PROJECT_ROOT/pexek-global-homepage-v31-production-handoff-77bde7c1-docs.zip}"
TMP="/tmp/pexek-handoff-final"
rm -rf "$TMP"
mkdir -p "$TMP"
unzip -q "$ZIP" -d "$TMP"
ROOT="$TMP/pexek-global-homepage-v31"
cp "$PROJECT_ROOT/qa/verify_handoff.sh" "$ROOT/qa/verify_handoff.sh"
cd "$ROOT"
pnpm install --frozen-lockfile > /tmp/pexek-final-install.log
pnpm check > /tmp/pexek-final-check.log
pnpm build > /tmp/pexek-final-build.log
pnpm preview --host 127.0.0.1 --port 4185 > /tmp/pexek-final-preview.log 2>&1 &
PREVIEW_PID=$!
cleanup() { kill "$PREVIEW_PID" 2>/dev/null || true; }
trap cleanup EXIT
sleep 2
"$ROOT/qa/verify_handoff.sh" http://127.0.0.1:4185
if unzip -l "$ZIP" | grep -E 'node_modules|dist/|\.manus-logs|\.project-config|client/public/__manus__|(^|/)\.env$|\.env\.local'; then
  echo "ZIP_EXCLUSION_CHECK_FAIL" >&2
  exit 1
fi
printf '%s\n' "CLEAN_EXTRACTED_ZIP_VERIFICATION_PASS"
printf '%s\n' "ZIP_SHA256=$(sha256sum "$ZIP" | awk '{print $1}')"
printf '%s\n' "ZIP_BYTES=$(stat -c '%s' "$ZIP")"
printf '%s\n' '--- build tail ---'
tail -8 /tmp/pexek-final-build.log
