# Manifest agent brief (shared)

You are producing part of a machine-readable catalog migration manifest for Frey Technologies (FreyTech), a commercial pool equipment company in Walworth, NY. The competitive reference is Aquafinity's public catalog. **Use Aquafinity only to learn WHICH products/families/models exist. Do not copy or lightly paraphrase Aquafinity's sentences, and do not reuse its images.** Facts and images come from the MANUFACTURER's official site.

Inputs:
- Crawl data: `docs/research/aquafinity-catalog/crawl.json` (array; each entry has url, headings, tabs, images (Aquafinity-hosted, reference only), docs (PDF links), external links, excerpt). Cached HTML for each page: `/private/tmp/claude-501/-Users-abill-Documents-GitHub-freytech-site/f1d62776-2dae-47d4-b278-4ffd2470c07c/scratchpad/aq/<encodeURIComponent(url)>.html` (read with cat/grep; look for model names in headings, tabs, image alt text, and PDF filenames).
- Tools: load WebFetch and WebSearch via ToolSearch "select:WebFetch,WebSearch". curl works for most manufacturer sites (use a browser User-Agent). `cwebp` is available at /opt/homebrew/bin/cwebp; `sips` for dimensions. Do NOT use python (blocked on this machine); use node or shell.

For EVERY family page assigned to you, enumerate every product/model the page presents (headings, tabs, subsections, image alts, PDF names). For each product/model produce one JSON object:

```
{
 "sourceUrl": "<aquafinity url>", "sourceCategory": "<aquafinity category slug>", "family": "<family name as shown>",
 "product": "<product or model name>", "manufacturer": "<current manufacturer name>", "manufacturerUrl": "<official manufacturer home>",
 "officialProductUrl": "<official product page or ''>",
 "proposedCategory": one of ["automated-controls","chemical-delivery-chlorination","filtration","pumps-circulation-flow","uv-supplemental-treatment","heating-energy","deck-equipment","accessibility-safety","water-testing-monitoring","vacuums-cleaning","specialty-chemicals","parts-accessories-replacement"],
 "proposedSlug": "<kebab-case, unique, e.g. lmi-roytronic-excel-metering-pumps>",
 "disposition": one of ["published","family","duplicate","discontinued","excluded"],   // "family" = represented inside a family-level entry you also emit; "duplicate" = same product as another slug (name it in notes)
 "availability": "request" | "discontinued",   // ALWAYS "request" unless discontinued; FreyTech's dealer status is unverified for everything except BECS Technology (use "confirmed" only for BECS products)
 "verification": "verified" | "partially-verified" | "pending-verification",
 "image": { "sourceUrl": "<manufacturer image URL or ''>", "status": "manufacturer-public-asset" | "manufacturer-literature-asset" | "dealer-media-asset" | "permission-required" | "unknown", "localFile": "<public/images/products/<slug>.webp or ''>", "width": 0, "height": 0, "alt": "<descriptive alt>" },
 "docs": [ { "title": "", "url": "<manufacturer-hosted URL>", "type": "Brochure|Specification sheet|Owner's manual|Installation manual|Warranty|Safety data sheet|Engineering resource|Product page" } ],
 "description": "<2-3 ORIGINAL sentences in FreyTech's voice: what it is, what it does, who it suits. Plain language. No superlatives. Written from manufacturer facts, not Aquafinity text>",
 "headline": "<one outcome-oriented line>",
 "applications": ["..."], "facilities": [subset of "municipal-aquatic-centers","k12-schools","colleges-universities","ymca-community","hotels-resorts-hospitality","healthcare-rehabilitation","camps-seasonal","waterparks-high-load","architects-engineers-public"],
 "problems": [subset of "replace-liquid-chlorine","improve-chemical-safety","stabilize-water-chemistry","reduce-manual-testing","add-alarms-remote-visibility","modernize-aging-equipment-room","reduce-waste","replace-obsolete-controller","improve-filtration-water-clarity","find-replacement-equipment","prepare-specifications-budgets"],
 "features": ["manufacturer-stated features, 3-6"], "specs": [ { "k": "", "v": "", "src": "<doc/page name>" } ],
 "models": [ { "name": "", "fit": "" } ], "aliases": ["legacy names, abbreviations, model numbers"], "keywords": ["search words a buyer might type"],
 "notes": "", "uncertainties": ""
}
```

Rules:
- Every heading/tab/model on the Aquafinity page must map to an object (disposition published, family, duplicate, discontinued, or excluded). Excluded requires a documented reason (e.g., "Aquafinity in-house service", "not a product").
- Discontinued requires evidence (manufacturer page states discontinued / product gone from manufacturer site) in `notes`.
- Images: download ONLY manufacturer-hosted product images that are clearly product promotion assets (product pages, press/media kits, dealer resources). Save with `curl -L -A "Mozilla/5.0" -o /tmp/img.<ext> <url>` then `cwebp -q 82 -resize 1200 0 /tmp/img.<ext> -o public/images/products/<slug>.webp` (create dir with mkdir -p); record width/height via `sips -g pixelWidth -g pixelHeight`. If the only image is from Aquafinity or rights are unclear, leave localFile "" and set status "permission-required" or "unknown" with the manufacturer image URL in sourceUrl if known. Never download from aquafinity.com.
- Do not invent specs. If a fact is not on a manufacturer source, omit it or put it in uncertainties.
- Prefer current manufacturer names (e.g., Paragon → Pentair; Neptune Benson → Xylem brand; Stark → S.R.Smith; Precision Control Systems; ChlorKing; LMI (Milton Roy); Stenner; Lochinvar; PACO (Grundfos); Harmsco; Eko3; Palintest; LaMotte; Taylor (Fluidra); S.R.Smith; Spectrum Aquatics; Duraflex; AntiWave; Malmsten; Meyco (Fluidra/CoverStar?); Competitor (Fluidra); Kiefer; Lawson Aquatics; Hammerhead; Wysiwash; Natural Chemistry; etc. — verify each).

Output: write a valid JSON array to the file named in your task, then a short markdown summary next to it listing counts (families, products/models, published/family/duplicate/discontinued/excluded, images downloaded, permission-required). Final message: the counts and any manufacturers you could not identify.
