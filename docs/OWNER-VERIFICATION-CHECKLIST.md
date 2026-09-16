# Owner Verification Checklist for Angelo (Product Discovery Expansion)

Companion to `CONTENT-CONFIRMATION-CHECKLIST.md` (company facts) and `PRODUCT-CONTENT-MATRIX.md` (every product row). Nothing below is presented on the site as a confirmed FreyTech relationship; each item carries an amber "Confirm" marker or "to be confirmed" wording until approved. Set `ownerApproved: true` on each record in `src/content/catalog/products.ts` as you approve it.

## A. Manufacturer relationships (never claim "authorized dealer" without documentation)
| Manufacturer | What the site says now | Verified externally? | Decision needed |
|---|---|---|---|
| BECS Technology | "Listed by BECS Technology as its distributor for New York" | **Yes** – becsys.com/distributors shows Frey Technologies, Walworth NY | Confirm the listing may be quoted publicly; any county exclusions |
| Pulsar Systems (Solenis) | "FreyTech installs and services Pulsar Precision systems. Authorized-dealer status to be confirmed" | No (dealer map unreadable) | Provide dealer agreement or Pulsar rep confirmation; confirm Precision 30 is offered |
| Neptune Benson / Xylem (Defender) | "FreyTech supplied and installed Defender filters at named NY facilities" | Product facts yes; dealer no (Xylem publishes no roster) | Confirm current status with Xylem/Neptune Benson; permission for Ithaca photo |
| S.R.Smith / Stark Bulkheads | Installed at Ithaca College (current site) | Product facts yes; dealer no | Confirm relationship with S.R.Smith |
| Aqua Creek | "Listed on FreyTech's current website" | Product facts yes; dealer form only | Confirm current status and series carried |
| Taylor Technologies | "Listed on FreyTech's current website" | **Retail locator does NOT list FreyTech** | Confirm commercial supply relationship or change wording to "can supply" / remove |
| Spectrum, Paragon (Pentair), Maytronics | Draft only, not rendered | Unverified | Decide publish/exclude |
| Slip MD | Excluded (manufacturer site gone) | n/a | Confirm removal |

## B. Products
- [ ] BECSys5, BECSys3, BECSys7, ChemLock, CO2 feed system, replacement sensors: approve descriptions (all facts from BECS literature). Confirm FreyTech sells the CO2 system and ChemLock.
- [ ] Pulsar Precision and Precision 30: approve capacity language and the note about Pulsar's conflicting pool-size figures. Provide the official full-size Precision manual (read from a dealer host).
- [ ] Pulsar Plus briquettes: confirm FreyTech supplies chemicals (chemical delivery is also listed on the Service page).
- [ ] Defender: approve model ranges (Standard/Reduced Height, Assero, Virtuo) and warranty wording.
- [ ] Aqua Creek: approve series list and capacities; confirm which series FreyTech carries.
- [ ] Stark/S.R.Smith: approve description; confirm Ithaca College project details.
- [ ] Taylor: approve kit list or remove.
- [ ] Draft categories (pumps, UV, heating, cleaning): supply manufacturers and lines, or leave unpublished.

## C. Facilities and markets
- [ ] Three new market pages (Hospitality, Camps & Seasonal, Waterparks): approve copy; confirm Sagamore Resort and Culinary Institute references on Hospitality.
- [ ] Facility filter labels (K–12 vs Colleges) map to the combined Schools & Universities market page; confirm or ask for separate pages.

## D. Solutions pages (10)
- [ ] Approve the plain-language approach steps; all regulatory references cite 10 NYCRR Subpart 6-1 sections and are conditional.
- [ ] Confirm CTA intents route to the right person (assessment, modernization, selection, budget, replacement, specialist).

## E. Documents
- [ ] Permission to host BECS TDS-4262, O&M and installation manuals (currently "available on request").
- [ ] Permission to host Pulsar manuals/renders and logos (currently linked to pulsarpools.com).
- [ ] Xylem Defender brochure/TDS are linked to Xylem-hosted PDFs; confirm acceptable.

## F. Forms and CRM
- [ ] Approve the nine request intents and the new fields (water-feature type, preferred contact, product of interest).
- [ ] Provide the Workbooks web-form endpoint or API path so `NEXT_PUBLIC_FORM_ENDPOINT` can be set (see WORKBOOKS-CRM-FIELD-MAP.md). No integration is live yet.

## G. Availability language and manufacturer browsing (added 2026-09-15)
- Every product carries an `availability` state: **confirmed** (only BECS Technology lines today), **request** (all other manufacturers), or **discontinued**. Public wording for "request": "Request availability" / "Contact FreyTech to confirm availability, lead time, and service coverage." Change a manufacturer to "confirmed" only after a dealer agreement or rep confirmation is on file; edit `relationshipStatus` in `src/content/catalog/taxonomy.ts` and `availability` on its products.
- Manufacturer pages (`/manufacturers/`) state "no dealer relationship is implied" for unverified brands. Confirm this wording is acceptable.
- Generated catalog entries (from the competitive-catalog migration) are all `ownerApproved: false`; review `docs/CATALOG-MIGRATION-MANIFEST.md` and mark rows to keep, demote, or exclude.
- Product images sourced from manufacturer sites are recorded with source URL and status in each record; items marked "permission-required" or "unknown" are listed in `docs/CATALOG-MIGRATION-MANIFEST.md` for approval before launch.
