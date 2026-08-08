#!/usr/bin/env node
// Regenerates the CSP script-src hash allowlist for this site's remaining
// `is:inline` scripts (BaseHead.astro, Header.astro, Footer.astro).
//
// Why this exists: script-src does NOT include 'unsafe-inline', so every
// literal inline <script> in the rendered HTML must be allowlisted by exact
// SHA-256 hash in vercel.json. Editing the content of any is:inline script
// changes its hash and will silently start getting blocked by the browser
// (CSP violation, console error) until the hash list below is regenerated.
//
// Run this after: `yarn build`, whenever you edit an is:inline script, or
// whenever you add a new one. Paste the printed script-src fragment into
// vercel.json's Content-Security-Policy header value.
//
// Page-scoped <script> blocks (no is:inline) do NOT need this — they're
// forced to build as external files via vite.build.assetsInlineLimit in
// astro.config.mjs, so they're already covered by script-src 'self'.

import { readFileSync, readdirSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const DIST_DIR = "dist";

function walk(dir, files = []) {
  for (const entry of readdirSync(dir)) {
    const p = join(dir, entry);
    const s = statSync(p);
    if (s.isDirectory()) walk(p, files);
    else if (entry.endsWith(".html")) files.push(p);
  }
  return files;
}

let files;
try {
  files = walk(DIST_DIR);
} catch {
  console.error(`No "${DIST_DIR}/" found. Run \`yarn build\` first.`);
  process.exit(1);
}

const hashes = new Map();
const scriptRe = /<script(\s[^>]*)?>([\s\S]*?)<\/script>/gi;

for (const file of files) {
  const html = readFileSync(file, "utf8");
  let m;
  while ((m = scriptRe.exec(html))) {
    const attrs = m[1] || "";
    const body = m[2];
    if (/\bsrc=/.test(attrs)) continue; // external file, not inline
    if (/type\s*=\s*"application\/ld\+json"/.test(attrs)) continue; // not executable, CSP-exempt
    if (!body.trim()) continue;
    const hash = createHash("sha256").update(body, "utf8").digest("base64");
    if (!hashes.has(hash)) {
      hashes.set(hash, { file, preview: body.trim().replace(/\s+/g, " ").slice(0, 70) });
    }
  }
}

if (hashes.size === 0) {
  console.log("No literal inline <script> blocks found in the build output.");
  process.exit(0);
}

console.log(`Found ${hashes.size} unique inline script(s):\n`);
for (const [hash, info] of hashes) {
  console.log(`  'sha256-${hash}'`);
  console.log(`    ${info.file} — ${info.preview}`);
}

console.log("\nPaste this into vercel.json's script-src (replacing the existing sha256- entries):\n");
console.log(
  [...hashes.keys()].map((h) => `'sha256-${h}'`).join(" "),
);
