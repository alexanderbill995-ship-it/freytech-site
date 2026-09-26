# M1 Website Closeout — change log (internal)

Every entry was verified in the built output, not just in source. Nothing here required
client input; everything requiring Angelo's input is in STATUS.md under Escalations.

## Accuracy and liability

**1. Unsourced chemical composition claims removed.**
Three private-label algaecides (Algigon 30, Premium 60, Terminator II) published concentration
and performance claims — "30% poly-quat", "60% poly-quat", non-foaming/non-metallic/non-staining
behaviour, targeted algae types — with an unidentified manufacturer, zero source URLs and no
supporting document. The migration manifest had explicitly instructed "do not publish specs until
a label or SDS is sourced". Claims stripped at the manifest; products remain listed with their
generic purpose and the unidentified-manufacturer disclaimer.
*Verified: 0 occurrences of the concentration claims in the built HTML.*

**2. Verification claims are now graded by the evidence actually on file.**
Every product page printed "Facts verified against manufacturer literature {date}" — including
pages with no source URLs at all. Now three-way: full verification only where `claimStatus` is
verified AND sources exist; "checked … some details are still being confirmed" where sources
exist but verification is partial; and, where no literature has been obtained, the page says so
plainly instead of claiming verification.

**3. The generator no longer forges verification dates.**
`scripts/generate-catalog.cjs` stamped every product's public `lastVerified` with the build date,
so each `npm run catalog` silently re-dated ~134 verification claims forward with no
re-verification. Date pinned to `VERIFIED_ON = '2026-09-16'`, the date the manifest was actually
checked; today's date remains only on the generated reports' "Generated" header, where it belongs.
*Verified: two consecutive regenerations now produce byte-identical output.*

**4. Two thin, unsourced products unpublished.**
`t-star-thermal-pool-covers` and `titan-series-pool-covers` had zero specs, zero features, zero
documents, no sources and an unidentified manufacturer — their page titles literally read
"… | Manufacturer not yet identified | …". Set to a non-rendering disposition, reversibly; the
manifest rows are intact and annotated for when Angelo identifies the manufacturer.

## Broken for real users

**5. The production redirect that hid the entire catalog.**
`public/_redirects` and `vercel.json` both 301'd `/products` to `/water-chemistry-modernization/`,
left over from when the old catalog page was retired. `/products/` is now the live hub for all
published products. Netlify matches redirect rules ignoring the trailing slash, so on a Netlify or
Vercel deploy the whole catalog would have redirected away from its canonical URL — while the
canonical tag still pointed at it. Rule removed from both files; `docs/REDIRECT-MAP.md` corrected.
Never visible on the GitHub Pages preview, which ignores `_redirects` — which is why it survived QA.

**6. The flagship Pulsar Precision page showed a different product.**
It rendered `pulsar-infinity.webp` with the alt text "Pulsar Infinity calcium hypochlorite tablet
feeder", while the correct 44 KB `pulsar-precision.webp` sat unused. Root cause was in
`scripts/attach-images.cjs`: a loose notes-text fallback let a `published` row claim a sibling's
slug before the real row matched. Fallback restricted to `duplicate`/`family` dispositions, as the
module's own doc comment always said it should be. Correct image confirmed on the product page,
the category index, `/pulsar-chlorination/` and the solutions pages.

**7. Obsolete-model searches now reach their successors.**
`/solutions/find-replacement-equipment/` publicly promises that discontinued items stay findable
so replacements can be matched, but Pulsar 4, Pulsar 3, ChlorKing CLASSIC and Pooltest 25 resolved
nowhere. Aliases added to the documented successors, matching the existing Pulsar 500/140/45/1
pattern.

## Layout and presentation

**8. 78 empty specification tables removed.**
Every product page rendered a `Technical specifications` heading, an empty table, and the sentence
"Specifications are summarized from manufacturer literature" — directly beneath a verification
claim — whether or not it had any specifications. The specs section, the capabilities section and
the documents list are now each guarded on content, and the sticky section navigator no longer
offers jump links to sections that do not exist.
*Verified: empty specification tables in the build went from 78 to 0.*

**9. Region headings were ungrammatical on three of nine pages.**
"What we install and service in **the** Western New York" / "the Long Island" / "the Central New
York". Added `regionPhrase()` in `src/lib/regions.ts` so templates stop hardcoding the article.

**10. Six category pages rendered an empty "Problems this category addresses" list.**

## Findability

**11. All 44 manufacturer pages were missing from the sitemap** — indexable, canonical-tagged,
internally linked, and invisible to search engines. Added. Sitemap: 212 → 253 URLs.

**12. `/manufacturers/` was absent from the header, mega menu and footer** — reachable only from
body copy. Added to the footer's Products & Solutions group.

**13. 128 of 134 generated meta descriptions were cut mid-word** — these are the search-result
snippets for every generated product page. Now truncated on a sentence boundary, falling back to a
word boundary.

**14. The About page title asserted a year that the page body hedges twice.** The title read
"… in New York Since 1987" where no confirmation marker can reach it, and the at-a-glance entry
said "Established 1987" while the underlying source record says the business was *purchased* in
1987. Year removed from the title; the entry now reads "Serving New York since" and asks Angelo to
confirm which is true.

## Hygiene
**15.** Dead code removed (unused `Callout` import, unused `companySince` export and import).
Lint is now completely clean — 0 errors, 0 warnings, where the delivered QA record had claimed
"clean" while 2 warnings existed.
**16.** Empty `public/downloads/` directory removed from the build.

## Documentation corrected
The 2026-09-16 QA record certified three gates as passing that were failing: "lint: clean"
(2 warnings), "no duplicate titles" (1 duplicate pair), and "Sitemap: 224 URLs" (212). Corrected
inline and marked. Stale rows across `CONTENT-CONFIRMATION-CHECKLIST.md`,
`OWNER-VERIFICATION-CHECKLIST.md` and `MISSING-ASSETS.md` rewritten so Angelo is not asked to
confirm content that does not exist, or to supply things that have already been supplied.
A new section H was added covering FreyTech's own warranty commitments, which appeared on no
checklist despite binding the company.
