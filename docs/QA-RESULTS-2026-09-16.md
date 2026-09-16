# QA Results: Relationship Homepage, Global Search, Full Catalog (2026-09-16)

Environment: static export served locally with `npx serve out`; Chrome headless for full-page captures; the desktop app's browser pane with device emulation (375×812 mobile, 768×1024 tablet) for interaction tests. Lighthouse could not be downloaded in this environment (npm registry blocked for the `lighthouse` package), so performance figures are Navigation Timing and transfer sizes.

## Build and static checks
- `npm run build`: 262 routes (261 HTML pages + 404), no errors.
- `npm run lint`: clean.
- `npm run check:links`: 0 broken internal links, 0 missing anchors, one `<h1>` per page, no duplicate titles.
- Sitemap: 224 URLs.
- Catalog: 147 published product entries (13 hand-authored, 134 generated) across 12 categories and 43 manufacturers; 0 unresolved Aquafinity omissions.

## The fourteen required journeys
| # | Journey | Result |
|---|---|---|
| 1 | New visitor understands who Angelo and FreyTech are | H1 "Commercial water quality deserves personal accountability."; "A note from Angelo" and the four "never have to chase" pillars render above the fold sequence. Pass (copy flagged for Angelo's approval). |
| 2 | Facility director starts a conversation from the homepage | 7 "Talk With Angelo" links and 5 click-to-call links on the homepage; compact inquiry form in the final section pre-set to the Angelo intent. Pass. |
| 3 | Visitor reaches BECSys5 | One interaction from the mega menu Featured column, the homepage featured solutions, and search ("becsis5" typo → BECSys5 first). Pass. |
| 4 | Buyer searches a partial Pulsar model | "ps-1hce" → Pulsar Precision, Precision 30. "puls" → 15 grouped results. Pass. |
| 5 | Engineer searches UV equipment | "UV equipment" → ETS-UV medium-pressure, Sentry Aqua Guard, then BECSys5 (UV control option). Pass. |
| 6 | School searches starting blocks | Spectrum Bighorn, S.R.Smith Legacy, S.R.Smith Velocity, Spectrum Xcellerator/Cougar. Pass. |
| 7 | Municipality searches "replace liquid chlorine" | ChlorKing NEXGEN, Pulsar Plus briquettes, Pulsar Precision; the Problems group links the solution page. Pass. |
| 8 | Visitor searches an obsolete model | "Pulsar 140" → Pulsar Precision, Pulsar Infinity (successors, via aliases); "Strantrol" → honest no-results with Help-me-find path. Pass. |
| 9 | Visitor browses by manufacturer | /manufacturers/ lists 43 brands; Spectrum page shows 14 products, "confirm availability, lead time" wording, and "No formal dealer relationship is implied". Pass. |
| 10 | Visitor requests availability for an unconfirmed product | Spectrum Motion Trek BP350 shows "Request availability" badge; CTA carries product, category, manufacturer, availability=request, intent=availability into the contact page, which pre-fills heading, request type, product, manufacturer, and availability context. Pass. |
| 11 | iPad user searches, filters, opens a product, returns without losing state | At 768px: search "lift" → Accessibility chip → 13 results → open aXs2 lift (jump menu visible) → "Back to all products" restores `?q=lift&category=accessibility-safety`. Pass. |
| 12 | Keyboard-only user completes the product journey | Header search: type "chemlock", ArrowDown selects (aria-activedescendant set), Enter navigates to the ChemLock product page; Escape closes menus; skip link present. Pass. |
| 13 | Mobile visitor contacts FreyTech without the catalog | Sticky bar "Talk With Angelo" and "Call" at 375px; Talk With Angelo lands on the intent-specific contact page. No horizontal overflow. Pass. |
| 14 | No-results search becomes a product-assistance inquiry | "strantrol" → "We may still be able to help." with suggested searches, closest categories, popular products, phone, and Help-me-find link; the contact page receives `search_query=strantrol`, pre-fills the product field, and sets the intent heading. Pass. |

## Search and filter QA
- Synonyms verified: chlorinator → Pulsar/ChemLock; handicap lift → S.R.Smith and Spectrum lifts; movable wall → bulkheads; cal hypo, filtration, starting platform groups.
- Typo tolerance: distance-weighted, so "becsis5" ranks BECSys5 above BECSys ChemLock.
- Multi-word queries require most tokens to match (fixes an inflated "starting blocks" result count).
- Chips, "Filter results" panel (desktop side panel / mobile bottom sheet), removable active-filter chips, "Clear all", sort, URL state, and sessionStorage restore all verified.

## Accessibility QA
- Combobox semantics on every search: `role=combobox`, `aria-expanded`, `aria-controls`, `aria-activedescendant`, `role=listbox/option`, live-region result counts.
- No forced focus on page load (activeElement = body); focus moves into the header search panel when opened and returns to the button on Escape.
- Filter panel is a labeled dialog with Escape-to-close and focus return; all controls labeled; chips use `aria-pressed`.
- Visible focus styles, 44px-class touch targets on chips/buttons, no hover-only navigation, one H1 per page.

## Desktop, tablet, mobile
- Desktop 1440: homepage, products, deck category, manufacturer, generated product pages captured (`screenshots/*-v3*.png`, `cat-deck-v2-1440.png`).
- Tablet 768 and mobile 375: verified in emulation for products, product detail, manufacturer, contact, homepage; no horizontal overflow on any tested page.

## Performance
- Homepage: DOMContentLoaded 58 ms, load 142 ms (local server); HTML 161 KB raw / 25 KB gzip.
- Largest JS chunk (search index + engine + catalog data): 577 KB raw / 94 KB gzip; other chunks ≤ 223 KB raw / 69 KB gzip. Total client chunks 1.5 MB raw.
- Product images: 123 WebP files, 8.1 MB total, all lazy-loaded and constrained; no external hotlinking.
- Recommended follow-up: split the search index into its own lazily fetched JSON once the catalog exceeds ~300 entries.

## Form delivery status
No endpoint configured (`NEXT_PUBLIC_FORM_ENDPOINT` empty). Every form shows the honest "not configured" message and a pre-filled email fallback; nothing pretends to send. Payload fields for Workbooks are documented in `WORKBOOKS-CRM-FIELD-MAP.md`.
