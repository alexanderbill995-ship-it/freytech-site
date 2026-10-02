# Status

**Updated:** 2026-09-27 · **Milestone:** M1b Angelo's website requests · **Phase:** LIVE on freytech.org (2026-10-02, Hostinger). Website milestone closed.

---

## Where the project actually is

Every website request Angelo has made (19 items, `ACCEPTANCE-ANGELO-2026-09-26.md`) is implemented and verified
in the built output. The three items previously held back on advisory grounds (WAPOTECH under supplemental,
ASC/Aurora/Pentair as represented manufacturers, E-Z Clor) were implemented as he asked after Alex ruled the
owner's instructions authoritative (D-010). Mer-Made and Filtrex were added from Alex's list. Lead delivery is
connected (D-011) and needs one activation click in info@freytech.org.

### Verified state (final build, commands actually run)
| Check | Result |
|---|---|
| `npm run build` | PASS — exit 0, 225 pages (2026-09-27, after the three screenshot removals) |
| `npm run lint` | PASS — 0 errors, 0 warnings |
| `npm run check:links` | 225 pages · 0 broken · 0 missing anchors · 0 h1 issues · 0 duplicate titles |
| Catalog | 118 published products · 34 manufacturers with products · 13 categories |
| Sitemap | 225 URLs |
| Independent test pass | freytech-tester and freytech-reviewer run on the final build; findings and fixes recorded below |

### Gmail
The connector connected late in the session and the full "Re: Consultant" thread was read. It confirms every
item in the acceptance checklist and shows that Mer-Made, Filtrex, Spectrum and Pulsar Precision were explicit
links in Angelo's 2026-09-24 "Add" list (the earlier text-only record had dropped the link targets). It also gives
the E-Z Clor brochure source. Nothing in the thread asks for anything the site does not now do.

---

## For Alex — the review gate
1. Read `CLIENT-SUMMARY-DRAFT.md` (plain-language, for Angelo) and `ACCEPTANCE-ANGELO-2026-09-26.md`.
2. Inspect on the live preview: `/manufacturers/`, `/products/uv-supplemental-treatment/`,
   `/products/specialty-chemicals/`, `/products/pumps-circulation-flow/`, `/products/filtration/`, the WAPOTECH,
   Aurora, Pentair, E-Z Clor, Mer-Made and Filtrex manufacturer pages, `/contact/` (submit once to trigger form
   activation), and one Spectrum product page (availability now reads "Available through FreyTech").
3. Decide whether to send the summary and the five deck/accessibility gaps question to Angelo.

## Open items that need Angelo (none block the site)
- **Form activation:** click "Activate Form" in the FormSubmit email that arrives at info@freytech.org after the first submission.
- The five deck/accessibility types with no Spectrum equivalent (bulkheads, LED lighting, safety covers, deck grating, deck furniture).
- Business hours, founding-year wording, customer-naming permission, warranty text, manufacturer image permissions, analytics property (all unchanged from the last status).

## Go-live (2026-10-02)
- freytech.org A record moved at Bluehost to Hostinger 157.173.209.185 (nameservers unchanged, Microsoft 365 mail records untouched and re-verified). Let's Encrypt certificate issued for freytech.org + www. Verified live: all pages 200, branded 404, legacy Joomla redirects, HTTP→HTTPS, assets, sitemap (220 URLs), form endpoint in bundle.
- Optional follow-up: www → bare-domain redirect added to public/.htaccess (not yet uploaded to Hostinger; canonical tags already point at the bare domain).
- Search Console: freytech.org domain property verified (alex@betterwithrook.com, DNS TXT at Bluehost) and sitemap submitted 2026-10-02.
- Form relay activated 2026-10-02 (Deb clicked the FormSubmit link). Leads deliver to info@freytech.org.
- Old Joomla site: public snapshot (21 pages + assets) saved to Alex's Downloads as freytech-joomla-archive-2026-10-02.zip. Remaining: cancel only the Bluehost web hosting plan (keep the domain registration and DNS zone; Microsoft 365 mail records live there).

## Hosting (2026-10-01)
- Angelo approved the final copy. Alex is hosting on Hostinger: a temporary-domain placeholder today, domain switch when freytech.org unlocks (expected 2026-10-02).
- `public/.htaccess` added to the build: HTTPS redirect, custom 404, all legacy Joomla redirects, caching headers. Hostinger-ready zip of `out/` handed to Alex.
- Still pending after go-live: FormSubmit activation click in info@freytech.org; invoice.

## Final-copy state (2026-09-27)
- Zero "Under review" markers and zero hedged sentences in the built HTML (scan for the retired phrases returns nothing). Amber markers default off; review banner off.
- `npm run build:prod` produces the freytech.org build (canonical URLs, sitemap, robots allow, forms live). A zipped copy was handed to Alex.
- Still true after cleanup: form activation click pending; hours not shown (none known); case studies "in preparation".

## Deployment / hosting
- Dev repo `alexanderbill995-ship-it/freytech-site` → GitHub Pages review preview https://alexanderbill995-ship-it.github.io/freytech-site/ (deploys on push to `main`; carries the current build).
- Client review repo `alexanderbill995-ship-it/freytech-preview` → https://alexanderbill995-ship-it.github.io/freytech-preview/ (clean export, no internal docs; updated from this build).
- Production freytech.org untouched (still the Joomla site); no DNS changes.
