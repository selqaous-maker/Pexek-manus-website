import fs from "node:fs";
import path from "node:path";

const root = process.cwd();
const configPath = path.join(root, "vercel.json");
const config = JSON.parse(fs.readFileSync(configPath, "utf8"));
const expectedAppRoutes = [
  "/solutions",
  "/industries",
  "/how-it-works",
  "/industries/kitchens-interior",
  "/industries/automotive-after-sales",
  "/about",
  "/contact",
  "/privacy",
  "/terms",
];
const expectedLegacy = new Map([["/voice-ai-agents", "/"]]);
const staticPrefixes = ["/assets/", "/resources/"];
const staticFiles = ["/robots.txt", "/sitemap.xml", "/manifest.webmanifest"];
const requiredPdfs = [
  "client/public/resources/guide-lead-to-showroom-showrooms-cuisines-maroc.pdf",
  "client/public/resources/guide-demandes-automobiles-sans-suite-maroc.pdf",
];
const fail = (message) => {
  console.error(`FAIL: ${message}`);
  process.exitCode = 1;
};
const assert = (condition, message) => condition || fail(message);

assert(fs.existsSync(path.join(root, "package.json")), "package.json is not at repository root");
assert(fs.existsSync(path.join(root, "pnpm-lock.yaml")), "pnpm-lock.yaml is not at repository root");
assert(fs.existsSync(configPath), "vercel.json is not at repository root");
assert(config.buildCommand === "pnpm build", "buildCommand must be pnpm build");
assert(config.outputDirectory === "dist/public", "outputDirectory must be dist/public");
assert(config.cleanUrls === true, "cleanUrls must remain true");

const rewrites = new Map((config.rewrites ?? []).map((item) => [item.source, item.destination]));
assert(expectedAppRoutes.length === 9, "validator must cover nine non-root application rewrites");
for (const route of expectedAppRoutes) {
  assert(rewrites.get(route) === "/", `${route} must rewrite to /`);
  const redirect = (config.redirects ?? []).find((item) => item.source === route);
  assert(!redirect, `${route} must not be a redirect`);
}
for (const [source, destination] of expectedLegacy) {
  const redirect = (config.redirects ?? []).find((item) => item.source === source);
  assert(redirect?.destination === destination && redirect.permanent === true, `${source} must permanently redirect to ${destination}`);
}
for (const route of [...staticPrefixes, ...staticFiles]) {
  assert(!rewrites.has(route), `${route} must not be intercepted by an exact SPA rewrite`);
}
const pdfHeader = (config.headers ?? []).find((item) => item.source === "/resources/(.*)\\.pdf");
const assetHeader = (config.headers ?? []).find((item) => item.source === "/assets/(.*)");
assert(assetHeader, "immutable asset cache headers are missing");
assert(pdfHeader, "direct PDF cache headers are missing");
const required = [
  "package.json",
  "pnpm-lock.yaml",
  "vercel.json",
  "client",
  "server",
  "client/public/robots.txt",
  "client/public/sitemap.xml",
  "client/public/manifest.webmanifest",
  "client/public/favicon.ico",
  ...requiredPdfs,
];
for (const relative of required) {
  assert(fs.existsSync(path.join(root, relative)), `missing required package path: ${relative}`);
}
if (process.exitCode) process.exit(1);
console.log(JSON.stringify({
  root,
  publicApplicationRouteCount: expectedAppRoutes.length + 1,
  buildCommand: config.buildCommand,
  outputDirectory: config.outputDirectory,
  applicationRewrites: expectedAppRoutes,
  rewriteDestination: "/",
  legacyRedirects: Object.fromEntries(expectedLegacy),
  staticAssetBypass: [...staticPrefixes, ...staticFiles],
  pdfResources: requiredPdfs,
  headersPreserved: true,
  result: "PASS",
}, null, 2));
