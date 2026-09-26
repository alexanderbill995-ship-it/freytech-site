/**
 * Attaches manufacturer images recorded on "duplicate" manifest rows to the hand-authored
 * records in products.ts (matching the slug named in the row's notes), writing an
 * images.overrides.json that index.ts merges at build time. Nothing in products.ts is rewritten.
 */
const fs = require('fs'); const path = require('path');
const dir = 'docs/research/aquafinity-catalog';
const rows = fs.readdirSync(dir).filter((f) => /^manifest-part\d+\.json$/.test(f)).flatMap((f) => JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')));
const hand = fs.readFileSync('src/content/catalog/products.ts', 'utf8');
const handSlugs = [...hand.matchAll(/slug: "([^"]+)", name:/g)].map((m) => m[1]);
const out = {};
for (const r of rows) {
  if (!r.image || !r.image.localFile || !fs.existsSync(r.image.localFile)) continue;
  // The notes-text fallback only applies to duplicate/family rows (per the module doc comment above); other
  // dispositions (e.g. "published") may merely *mention* a sibling hand slug in their notes without meaning
  // to hand off their photo to it (this previously caused pulsar-infinity's photo to attach to pulsar-precision).
  const bySlug = handSlugs.find((s) => r.proposedSlug === s) || ((r.disposition === 'duplicate' || r.disposition === 'family') && handSlugs.find((s) => new RegExp(`\\b${s}\\b`).test(r.notes || '')));
  if (!bySlug || out[bySlug]) continue;
  out[bySlug] = { src: '/' + r.image.localFile.replace(/^public\//, ''), alt: r.image.alt || r.product, width: r.image.width || 1200, height: r.image.height || 1200, sourceUrl: r.image.sourceUrl || '', status: r.image.status || 'unknown', license: r.image.status === 'manufacturer-public-asset' ? 'Manufacturer public product asset; source URL recorded' : 'Pending permission review' };
}
fs.writeFileSync('src/content/catalog/images.overrides.json', JSON.stringify(out, null, 2) + '\n');
console.log('image overrides for', Object.keys(out).join(', ') || 'none');
