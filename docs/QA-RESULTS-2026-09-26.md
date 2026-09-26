# QA Results: Website Closeout (2026-09-26)

Scope: correctness and closeout of the site as committed at `ce297ac` (2026-09-16). No new
features. Every result below is the actual output of the stated command, not an expectation.

## Build and static checks
| Check | Result |
|---|---|
| `npm run build` | **Pass** — exit 0, 259 routes (258 HTML pages + 404), no errors |
| `npm run lint` | **Pass** — 0 errors, **0 warnings** (was 0 errors / 2 warnings) |
| `npm run check:links` | 258 pages · 0 broken links · 0 missing anchors · 0 `<h1>` issues · **0 duplicate titles** (was 1 duplicate pair) |
| `npm run catalog` idempotency | **Pass** — two consecutive runs produce byte-identical output (previously re-dated 134 records per run) |
| Sitemap | **253 URLs** (was 212; the 44 manufacturer pages were missing) |
| Catalog | 145 published products (13 hand-authored, 132 generated) across 12 categories; 0 unresolved Aquafinity omissions |

Page count moved 261 → 258: two unsourced pool-cover products unpublished, and one duplicate
manufacturer page collapsed into the record it was duplicating.

## Static-HTML content (the defect class that automated link checking cannot see)
Under `output: "export"`, a `<Suspense>` boundary around a client component calling
`useSearchParams()` prerenders the *fallback*, so the real content never reached the HTML.

| Page | Before | After |
|---|---|---|
| `/contact/` (primary conversion page) | 0 `<form>`, 0 `<input>` in `<main>` — the text "Loading form…" | 1 `<form>`, 21 `<input>`, 13 `<select>` |
| `/` (homepage compact form) | 0 inputs | 2 `<form>`, 18 `<input>` |
| `/products/` (catalog hub) | 2 product links | **145** product links |
| `/resources/` | 0 resource entries | 34 entries |

"Loading form…", "Loading the catalog…" and "Loading resources…" now appear **0 times** across the
whole build.

## Content-accuracy verification
| Check | Result |
|---|---|
| Empty specification tables rendered under a verification claim | **78 → 0** |
| Products publishing unsourced concentration/performance claims | **3 → 0** |
| Products asserting "facts verified" with zero source URLs | **7 → 0** (wording now graded by evidence on file) |
| Generated meta descriptions cut mid-word | **128 → 0** |
| Manufacturer pages absent from sitemap | **44 → 0** |
| Wrong product photograph on the Pulsar Precision page | Fixed; correct asset confirmed on the product page, category index, `/pulsar-chlorination/` and the solutions pages |
| Obsolete models resolving to no successor | **4 → 0** (Pulsar 4, Pulsar 3, ChlorKing CLASSIC, Pooltest 25) |
| Ungrammatical region headings | **3 → 0** |

## Deployment-configuration defect (not visible on the review preview)
`public/_redirects` and `vercel.json` both 301'd `/products` → `/water-chemistry-modernization/`.
Netlify matches redirect rules ignoring the trailing slash, so on a Netlify or Vercel deploy the
entire published catalog would have redirected away from its own canonical URL. GitHub Pages
ignores `_redirects`, which is why every prior QA pass missed it. Rule removed from both files and
`docs/REDIRECT-MAP.md` corrected.

## Retired content (re-verified, 0 hits each across the whole build)
"Everything for a wonderful world of water" · "30 YEARS EXPERIENCE" · "Hundreds of satisfied
customers" · "one of the most innovative" · "Greg Frey" · "Mechanicsville" · "Tectra Tech" ·
"Councilmann" · "Business Solutions".

## Removals and replacements (re-verified against the migration manifest)
All 24 `excluded` and 10 `discontinued` manifest rows confirmed absent from the build, checked
programmatically against the built tree rather than by name search. All stated successors
(`chlorking-chlor-sm`, `pulsar-precision`, `pulsar-precision-30`, `pulsar-infinity`,
`palintest-lumiso-pooltest-expert`) confirmed present and now reachable from the legacy names.

## Status of things that are NOT done
- **Forms deliver nowhere.** `NEXT_PUBLIC_FORM_ENDPOINT` is unset, so every submission returns
  `unconfigured` and shows an honest "not connected" message with an email fallback. No lead can be
  captured until an endpoint is chosen. The form markup is now in the static HTML, but that changes
  discoverability, not delivery.
- **Analytics is not installed.** Events go to `window.dataLayer` only; no vendor script ships.
- **167 pages carry visible amber "Under review" markers.** Correct for a review preview;
  `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false` must be set at launch.
- **123 manufacturer product renders are hosted without written permission** (113 in use). Unchanged
  by this pass and awaiting an owner decision; see `CONTENT-CONFIRMATION-CHECKLIST.md`.
- **All 145 published products remain `ownerApproved: false`.**

## Corrections to the previous QA record
`QA-RESULTS-2026-09-16.md` certified three gates as passing that were failing at the time: lint
"clean" (2 warnings existed), "no duplicate titles" (1 pair existed), and "Sitemap: 224 URLs"
(212 were emitted). That document has been corrected inline and marked.
