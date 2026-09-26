/**
 * Merges docs/research/aquafinity-catalog/manifest-part*.json into:
 *  - docs/research/aquafinity-catalog/manifest.json  (canonical, machine-readable)
 *  - src/content/catalog/products.generated.ts        (Product records for "published" rows)
 *  - docs/CATALOG-MIGRATION-MANIFEST.md + docs/CATALOG-OMISSIONS-REPORT.md
 * Hand-authored records in products.ts always win over generated ones with the same slug.
 * Run: node scripts/generate-catalog.cjs
 */
const fs = require('fs'); const path = require('path');
const dir = 'docs/research/aquafinity-catalog';
const crawl = JSON.parse(fs.readFileSync(path.join(dir, 'crawl.json'), 'utf8'));
const parts = fs.readdirSync(dir).filter((f) => /^manifest-part\d+\.json$/.test(f)).sort();
let rows = [];
for (const f of parts) { try { const arr = JSON.parse(fs.readFileSync(path.join(dir, f), 'utf8')); rows.push(...arr.map((r) => ({ ...r, _part: f }))); } catch (e) { console.error('bad json', f, e.message); } }
// hand-authored slugs
const handSrc = fs.readFileSync('src/content/catalog/products.ts', 'utf8');
const handSlugs = new Set([...handSrc.matchAll(/slug: "([^"]+)", name: "[^"]*", manufacturer: "[^"]*", category: "[^"]*",(?: subcategory: "[^"]*",)? status: "published"/g)].map((m) => m[1]));
const facilitySlugs = new Set(["municipal-aquatic-centers","k12-schools","colleges-universities","ymca-community","hotels-resorts-hospitality","healthcare-rehabilitation","camps-seasonal","waterparks-high-load","architects-engineers-public"]);
const problemSlugs = new Set(["replace-liquid-chlorine","improve-chemical-safety","stabilize-water-chemistry","reduce-manual-testing","add-alarms-remote-visibility","modernize-aging-equipment-room","reduce-waste","replace-obsolete-controller","improve-filtration-water-clarity","find-replacement-equipment","prepare-specifications-budgets"]);
const catSlugs = new Set(["automated-controls","chemical-delivery-chlorination","filtration","pumps-circulation-flow","uv-supplemental-treatment","heating-energy","deck-equipment","accessibility-safety","water-testing-monitoring","vacuums-cleaning","specialty-chemicals","parts-accessories-replacement"]);
const slugify = (s) => s.toLowerCase().replace(/[®™©]/g, '').replace(/&/g, ' and ').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '');
const esc = (s) => JSON.stringify(String(s ?? ''));
/** Truncate at the last sentence boundary within `max` chars; else the last word boundary + ellipsis. Never cuts mid-word. */
const truncateClean = (s, max) => {
  const str = String(s || '');
  if (str.length <= max) return str.trim();
  const window = str.slice(0, max);
  const lastSentence = Math.max(window.lastIndexOf('. '), window.lastIndexOf('! '), window.lastIndexOf('? '), window.endsWith('.') ? window.length - 1 : -1);
  if (lastSentence > 0) return window.slice(0, lastSentence + 1).trim();
  const lastSpace = window.lastIndexOf(' ');
  return `${(lastSpace > 0 ? window.slice(0, lastSpace) : window).trim()}…`;
};
/** Short display name: text before the first parenthesis/comma/slash; the long form is kept as an alias. */
const NAME_FIX = { hammerhead: 'Hammer-Head', 'jacks-magic': "Jack's Magic", hexagone: 'Hexagone', paddock: 'Paddock Pool Equipment', lamotte: 'LaMotte', stenner: 'Stenner Pump Company', unidentified: 'Manufacturer not yet identified', ast: 'Aquaculture Systems Technologies (AST)' };
const shortName = (name) => (name || 'Unknown manufacturer').replace(/\s*\(.*$/, '').replace(/,.*$/, '').replace(/\s+\/.*$/, '').replace(/\b(Inc\.?|LLC|Ltd\.?|Corp\.?|Co\.|Company|Manufacture SAS|SAS)\s*$/i, '').trim();
const manuSlug = (name) => { const n = (name || 'unknown').toLowerCase(); if (/becs/.test(n)) return 'becs'; if (/pulsar|solenis/.test(n)) return 'pulsar'; if (/neptune|xylem|evoqua|lawson|ets/.test(n) && !/etsy/.test(n)) return 'neptune-benson'; if (/aqua creek/.test(n)) return 'aqua-creek'; if (/s\.?r\.? ?smith|stark/.test(n)) return 'stark'; if (/taylor tech/.test(n)) return 'taylor'; if (/spectrum/.test(n)) return 'spectrum'; if (/paragon|pentair/.test(n)) return 'paragon'; if (/maytronics/.test(n)) return 'maytronics'; if (/grundfos|paco/.test(n)) return 'grundfos'; if (/speck/.test(n)) return 'speck-pumps'; if (/chlorking/.test(n)) return 'chlorking'; if (/lochinvar/.test(n)) return 'lochinvar'; if (/lmi|milton roy/.test(n)) return 'lmi'; if (/stenner/.test(n)) return 'stenner'; if (/harmsco/.test(n)) return 'harmsco'; if (/palintest/.test(n)) return 'palintest'; if (/lamotte/.test(n)) return 'lamotte'; if (/malmsten/.test(n)) return 'malmsten'; if (/antiwave|anti wave/.test(n)) return 'antiwave'; if (/duraflex/.test(n)) return 'duraflex'; if (/competitor/.test(n)) return 'competitor'; if (/meyco/.test(n)) return 'meyco'; if (/hammer.?head/.test(n)) return 'hammerhead'; if (/jack.?s magic/.test(n)) return 'jacks-magic'; if (/hexagone/.test(n)) return 'hexagone'; if (/paddock/.test(n)) return 'paddock'; if (/unidentified|unknown|not\s+(yet\s+)?identified/.test(n)) return 'unidentified'; if (/wysiwash/.test(n)) return 'wysiwash'; if (/natural chemistry/.test(n)) return 'natural-chemistry'; if (/clearwater/.test(n)) return 'clearwater-tech'; if (/aquaculture|\bast\b/.test(n)) return 'ast'; if (/aquatrek/.test(n)) return 'aquatrek'; if (/kiefer/.test(n)) return 'kiefer'; if (/j&j|j & j/.test(n)) return 'jj-electronics'; if (/taylor.wharton/.test(n)) return 'taylor-wharton'; if (/precision control|\bces\b/.test(n)) return 'precision-control-systems'; if (/epd/.test(n)) return 'epd'; if (/aquastar/.test(n)) return 'aquastar'; return slugify(shortName(name)); };
// dedupe slugs
const seen = new Map();
for (const r of rows) {
  if (!r.proposedSlug) r.proposedSlug = slugify(`${r.manufacturer || ''} ${r.product || r.family || ''}`);
  if (r.disposition === 'published') { let s = r.proposedSlug, i = 2; while (seen.has(s) && seen.get(s) !== r) { s = `${r.proposedSlug}-${i++}`; } r.proposedSlug = s; seen.set(s, r); }
  if (!catSlugs.has(r.proposedCategory)) { r.notes = `${r.notes || ''} [category '${r.proposedCategory}' not recognized; mapped to parts-accessories-replacement]`; r.proposedCategory = 'parts-accessories-replacement'; }
  r.facilities = (r.facilities || []).filter((f) => facilitySlugs.has(f)); r.problems = (r.problems || []).filter((p) => problemSlugs.has(p));
  r.manufacturerSlug = manuSlug(r.manufacturer);
  r.proposedUrl = r.disposition === 'published' ? `/products/${r.proposedCategory}/${r.proposedSlug}/` : (r.disposition === 'duplicate' || r.disposition === 'family') && r.notes && /slug[: ]+([a-z0-9-]+)/i.test(r.notes) ? `(see ${/slug[: ]+([a-z0-9-]+)/i.exec(r.notes)[1]})` : '';
}
fs.writeFileSync(path.join(dir, 'manifest.json'), JSON.stringify(rows, null, 1));
// manufacturers discovered but not in taxonomy
const knownManu = new Set(['becs','pulsar','neptune-benson','aqua-creek','stark','taylor','spectrum','paragon','maytronics']);
const newManu = new Map();
for (const r of rows) if (!knownManu.has(r.manufacturerSlug) && r.disposition === 'published') { const cur = newManu.get(r.manufacturerSlug) || { slug: r.manufacturerSlug, name: NAME_FIX[r.manufacturerSlug] || shortName(r.manufacturer), aka: new Set(), url: r.manufacturerUrl || '' }; if (!cur.url && r.manufacturerUrl) cur.url = r.manufacturerUrl; if (r.manufacturer && r.manufacturer !== cur.name) cur.aka.add(r.manufacturer); newManu.set(r.manufacturerSlug, cur); }
// generated products
const V = new Date().toISOString().slice(0, 10);
// Date the manifest was actually checked against manufacturer literature. Bump ONLY when records are genuinely re-verified.
const VERIFIED_ON = '2026-09-16';
const gen = rows.filter((r) => r.disposition === 'published' && !handSlugs.has(r.proposedSlug));
const lines = gen.map((r) => {
  const img = r.image && r.image.localFile && fs.existsSync(r.image.localFile) ? `image: { src: ${esc('/' + r.image.localFile.replace(/^public\//, ''))}, alt: ${esc(r.image.alt || r.product)}, width: ${r.image.width || 800}, height: ${r.image.height || 800}, sourceUrl: ${esc(r.image.sourceUrl)}, status: ${esc(r.image.status || 'unknown')}, license: ${esc(r.image.status === 'manufacturer-public-asset' ? 'Manufacturer public product asset; source recorded' : 'Pending permission review')} },` : '';
  const docs = (r.docs || []).filter((d) => d && d.title).map((d) => `{ title: ${esc(d.title)}, type: ${esc(d.type || 'Product page')}, href: ${esc(d.url)}, fileType: ${/\.pdf/i.test(d.url || '') ? '"PDF"' : '"Web"'}, status: "linked" }`).join(', ');
  const specs = (r.specs || []).filter((s) => s && s.k).map((s) => `{ k: ${esc(s.k)}, v: ${esc(s.v)}, src: ${esc(s.src || '')} }`).join(', ');
  const models = (r.models || []).filter((m) => m && m.name).map((m) => `{ name: ${esc(m.name)}, fit: ${esc(m.fit || '')} }`).join(', ');
  const arr = (a) => `[${(a || []).filter(Boolean).map(esc).join(', ')}]`;
  return `  {
    slug: ${esc(r.proposedSlug)}, name: ${esc(r.product || r.family)}, manufacturer: ${esc(r.manufacturerSlug)}, category: ${esc(r.proposedCategory)},${r.subcategory ? ` subcategory: ${esc(r.subcategory)},` : ''} status: "published", availability: ${esc(r.availability === 'discontinued' ? 'discontinued' : r.manufacturerSlug === 'becs' ? 'confirmed' : 'request')},
    aliases: ${arr(r.aliases)}, keywords: ${arr(r.keywords)},
    migration: { sourceUrl: ${esc(r.sourceUrl)}, sourceCategory: ${esc(r.sourceCategory)}, family: ${esc(r.family)} },
    headline: ${esc(r.headline || r.product)}, shortDescription: ${esc((r.description || '').split(/(?<=\.)\s/)[0] || r.product)},
    overview: [${esc(r.description || '')}],
    fit: { yes: ${arr(r.applications)}, no: [] }, problems: ${arr(r.problems)}, applications: ${arr(r.applications)}, facilities: ${arr(r.facilities)}, projectTypes: ["new-construction", "retrofit", "replacement"],
    features: ${arr(r.features)}, benefits: [], models: [${models}], specs: [${specs}],
    prerequisites: [], retrofit: [], integrations: [], services: ["Evaluation of fit for your facility", "Availability, lead time, and service coverage confirmed on request", "Installation and support coordination where offered"], support: ["Parts and warranty coordination on request"],
    docs: [${docs}], faqs: [], related: [], specifiedWith: [], relatedSolutions: ${arr(r.problems)},
    ${img}
    seoTitle: ${esc(`${r.product || r.family} | ${r.manufacturer} | Commercial Pool Equipment, New York`)}, seoDescription: ${esc(`${truncateClean(r.description, 150)} Availability through FreyTech, New York State.`)},
    sourceUrls: ${arr([r.officialProductUrl, r.manufacturerUrl].filter(Boolean))}, claimStatus: ${esc(r.verification || 'pending-verification')}, lastVerified: ${esc(VERIFIED_ON)}, ownerApproved: false,
    ownerNotes: ${esc([r.notes, r.uncertainties].filter(Boolean).join(' · '))},
  },`;
});
const header = `import type { Product } from "./types";\n\n/**\n * GENERATED by scripts/generate-catalog.cjs from docs/research/aquafinity-catalog/manifest*.json.\n * Do not edit by hand; edit the manifest (or promote a record into products.ts) and re-run.\n * Every record is availability "request" unless the manufacturer relationship is documented.\n */\nexport const generatedProducts: Product[] = [\n`;
fs.writeFileSync('src/content/catalog/products.generated.ts', header + lines.join('\n') + '\n];\n');
fs.writeFileSync('src/content/catalog/manufacturers.generated.ts', `import type { Manufacturer } from "./types";\n\n/** GENERATED manufacturers discovered in the migration manifest (not in taxonomy.ts). */\nexport const generatedManufacturers: Manufacturer[] = [\n${[...newManu.values()].map((m) => `  { slug: ${esc(m.slug)}, name: ${esc(m.name)}, aka: [${[...m.aka].map(esc).join(', ')}], url: ${esc(m.url)}, relationship: ${esc(m.slug === 'unidentified' ? 'The manufacturer of these items has not been identified from public sources; FreyTech will confirm the source before quoting.' : 'Products listed for evaluation; contact FreyTech to confirm availability, lead time, and service coverage. No dealer relationship is implied.')}, relationshipStatus: "pending-verification" },`).join('\n')}\n];\n`);
// docs
const byDisp = (d) => rows.filter((r) => r.disposition === d).length;
const catalogLinks = crawl.filter((p) => p.depth >= 2).length;
const families = new Set(rows.map((r) => r.family)).size;
const md = [`# Catalog Migration Manifest`, ``, `Generated ${V} from ${parts.length} manifest part files. Machine-readable version: \`docs/research/aquafinity-catalog/manifest.json\`.`, ``,
`| Metric | Count |`, `|---|---|`, `| Aquafinity catalog pages crawled | ${crawl.length} (1 index, 9 categories, ${catalogLinks} family/product pages) |`, `| Product families covered by manifest rows | ${families} |`, `| Products/models (manifest rows) | ${rows.length} |`,
`| Published as FreyTech entries | ${byDisp('published')} |`, `| Included within a family page | ${byDisp('family')} |`, `| Duplicate of another listing | ${byDisp('duplicate')} |`, `| Discontinued (with evidence) | ${byDisp('discontinued')} |`, `| Intentionally excluded (documented) | ${byDisp('excluded')} |`, `| Generated catalog records (new) | ${gen.length} |`, `| Images downloaded from manufacturers | ${rows.filter((r) => r.image && r.image.localFile && fs.existsSync(r.image.localFile)).length} |`, `| Images awaiting permission / unknown | ${rows.filter((r) => r.image && !r.image.localFile && r.image.status && r.image.status !== 'manufacturer-public-asset').length} |`, ``,
`| Source URL | Aquafinity category | Family | Product/model | Manufacturer | Manufacturer URL | FreyTech category | FreyTech URL | Image source | Image status | Docs | Disposition | Availability | Verification | Notes | Uncertainties |`, `|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|---|`,
...rows.map((r) => `| ${r.sourceUrl} | ${r.sourceCategory} | ${r.family} | ${r.product} | ${r.manufacturer} | ${r.manufacturerUrl || ''} | ${r.proposedCategory} | ${r.proposedUrl} | ${(r.image && r.image.sourceUrl) || ''} | ${(r.image && r.image.status) || ''} | ${(r.docs || []).length} | ${r.disposition} | ${r.availability} | ${r.verification} | ${(r.notes || '').replace(/\|/g, '/')} | ${(r.uncertainties || '').replace(/\|/g, '/')} |`)].join('\n');
fs.writeFileSync('docs/CATALOG-MIGRATION-MANIFEST.md', md + '\n');
// omissions: crawled family pages with zero manifest rows
const covered = new Set(rows.map((r) => r.sourceUrl));
const familyPages = crawl.filter((p) => p.depth >= 2);
const missing = familyPages.filter((p) => !covered.has(p.url));
const om = [`# Catalog Omissions Report`, ``, `Generated ${V}. Target: zero unresolved omissions.`, ``, `Aquafinity family/product pages: ${familyPages.length}. Covered by at least one manifest row: ${familyPages.length - missing.length}. **Unresolved: ${missing.length}.**`, ``, ...(missing.length ? ['| Unresolved page | Title |', '|---|---|', ...missing.map((p) => `| ${p.url} | ${p.h1 || p.title} |`)] : ['All family pages are accounted for.']), ``, `## Rows by disposition`, `- published: ${byDisp('published')}`, `- family (inside a family page): ${byDisp('family')}`, `- duplicate: ${byDisp('duplicate')}`, `- discontinued: ${byDisp('discontinued')}`, `- excluded: ${byDisp('excluded')}`, ``, `## Excluded rows (with reasons)`, ...rows.filter((r) => r.disposition === 'excluded').map((r) => `- ${r.product || r.family}: ${r.notes}`), ``, `## Discontinued rows (with evidence)`, ...rows.filter((r) => r.disposition === 'discontinued').map((r) => `- ${r.product}: ${r.notes}`)].join('\n');
fs.writeFileSync('docs/CATALOG-OMISSIONS-REPORT.md', om + '\n');
console.log(`rows ${rows.length}, generated ${gen.length}, new manufacturers ${newManu.size}, unresolved omissions ${missing.length}`);
