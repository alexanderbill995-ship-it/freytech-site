# Content & Claim Confirmation Checklist

Every item below appears on the new site (or was deliberately left off it) and must be confirmed by the owner before launch. Items marked **[FLAGGED]** are visibly tagged on the site with an amber "Confirm before launch" marker; set `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false` to hide the markers once confirmed. Source: audit of freytech.org on 2026-09-14 and the strategy brief.

## Company identity and contact
- [ ] Legal entity name: "Frey Technologies, Inc." (footer, schema). Confirm exact spelling/suffix.
- [ ] Phone 1-800-724-2770 active and answered during business hours. Any local number to add?
- [ ] Fax 1-315-986-1332 still in use (currently NOT shown on the new site; add if wanted).
- [ ] info@freytech.org and support@freytech.org are monitored. Who receives each?
- [ ] Address: P.O. Box 403 / 2194 Penfield Road, Walworth, NY 14568. Is 2194 Penfield Road a physical, visitable office? (Used in Organization schema and About.)
- [ ] **Business hours** — not stated anywhere on the current site. Set `NEXT_PUBLIC_HOURS` (e.g., "Monday–Friday, 8:00 AM–5:00 PM ET"). **[FLAGGED on Contact page]**
- [ ] Tagline "Everything for a wonderful world of water" — intentionally retired in favor of the technical positioning. Confirm the owner is comfortable dropping it.

## Company history and leadership **[FLAGGED]**
- [ ] **Founding year — what the site actually publishes (re-verified 2026-09-26).** "Greg Frey" appears nowhere in the built site; that line was removed. The year now appears in exactly two places: the About page `<title>` ("…in New York Since 1987") and the About at-a-glance entry "Established 1987". It is **not** in the homepage hero or trust strip. Note the underlying source record says the business was *purchased* in 1987, not *established* — confirm which is true and which wording to publish.
- [ ] **Leadership (resolved in copy, pending approval):** Angelo DiCiaccio, President, is now named on the homepage and About page with verified background (prior years at FreyTech; manufacturer, distributor, technical sales, engineering/end-user experience; more than a decade in the industry). The old site's "Greg Frey, Owner and President... purchased the company in 1987" line has been removed from the site; the old site also named Mike Wilson (Service Manager) and Bob Ulrich (Eastern Sales Manager). Confirm whether any of these three should appear anywhere, and confirm the company's founding/ownership history wording ("since the late 1980s").
- [ ] Alkalinity article attribution to Mike Wilson (January 2015 newsletter), republished in updated form at /resources/total-alkalinity-and-controllers/. Approve text and attribution.

## Territory and dealer status
- [ ] Territory: New York State excluding the five boroughs. Confirm which counties FreyTech will actually sell, install, and service. Region pages for Mohawk Valley, Western New York, and Long Island have no references and carry "coverage to be confirmed" notices. **[FLAGGED]**
- [ ] BECS Technology distributor status: VERIFIED on becsys.com/distributors ("Frey Technologies, Inc. – New York") on 2026-09-14. Confirm it should be stated publicly and whether any counties are excluded by the agreement.
- [ ] **Pulsar authorized dealer status: UNVERIFIED** (Pulsar's dealer map could not be read). The site says FreyTech "installs and services Pulsar Precision systems" and flags dealer status as being confirmed. Confirm dealer rights for Pulsar Precision and Precision 30 and any county restrictions. **[FLAGGED on Pulsar page]**
- [ ] Is Pulsar Precision 30 part of FreyTech's offering? (Included on the site; remove if not.)
- [ ] Chemical delivery / cal hypo briquette supply: current site lists "chemical delivery" as a maintenance-program benefit. Confirm it is still offered. **[FLAGGED on Service page]**

## Customers, references, testimonial **[FLAGGED wherever shown]**
Confirm each is (a) still a customer or accurate past customer and (b) approved for public naming.
- [ ] Facilities (18): Binghamton HS & East MS · Clarkson University · Colgate University · Cornell University · Goshen BOCES · Hudson Falls HS · Hudson HS · Ithaca College · Lowville Central Schools · Marist College · Mechanicville HS (site spelled "Mechanicsville") · Mount Saint Mary College · Poughkeepsie MS · Sagamore Resort Hotel · Siena College · South Lewis HS · SUNY at Binghamton · The Culinary Institute of America.
- [ ] Design firms (18) and consultants (3) as listed on /engineering-specification-support/ and /projects/. Spellings corrected on the new site: "Tetra Tech" (site: "Tectra Tech"), "Counsilman-Hunsaker" (site: "Councilmann Hunsacker"), "Water Technology, Inc." Removed: "Business Solutions" (not identifiable as a design firm). Several firms may have merged/renamed since 2014.
- [ ] **Testimonial — NOT currently published (re-verified 2026-09-26).** The Michael Maguire / Clarkson University testimonial (Neptune-Benson Defender filter and a chemical-controller fix, naming William McDonald) was **not carried over** and appears nowhere in the built site. Nothing needs confirming unless you want it added back — in which case written permission is required first.
- [ ] Regional placement of references on service-area pages (e.g., Sagamore Resort → Capital Region/Warren County; Goshen BOCES → Hudson Valley). Correct any misplacements.

## Projects **[FLAGGED on each project page]**
- [ ] Ithaca College 50-meter pool: Defender filters + Stark bulkhead. Confirm year, full scope, chemical-controls scope, photo permission.
- [ ] University of Rochester: complete renovation + "state of the art sanitation system". Confirm year and the sanitation system make/model; U of R is not in the customer list.
- [ ] Fairport High School: sand filter → Defender filter. Confirm year, scope, photo permission; Fairport is not in the customer list.
- [ ] Gallery photos from the old site were NOT reused: two Australian water-park images, three apparent Salem OR Kroc Center images, and three State College PA parks photos (CRPR watermark) are not FreyTech NY work. Moose Hillock (Lake George area, 2014) may be a FreyTech job — confirm if you want it added.
- [ ] Case studies: three BECSys5/Pulsar case-study records exist as unpublished drafts in `src/content/projects.ts`. Supply facts for at least three completed projects (see OWNER-HANDOFF.md).

## Service, warranty, programs
- [ ] One-year labor guarantee on FreyTech-installed equipment (carried verbatim from the current Warranties page). **[FLAGGED]**
- [ ] Warranty exclusions and RA-number process (carried verbatim). Confirm current.
- [ ] Monthly maintenance program benefits (carried from Capabilities page), including "reduced chemical consumption" **[FLAGGED as a claim]** and "chemical delivery" **[FLAGGED]**.
- [ ] Annual / quarterly / monthly agreement structure. Confirm and provide pricing approach (site says "quoted per facility").
- [ ] "Certified local technicians" / "factory trained technicians" (current site) were NOT carried over because no certifying body is named. Provide certifications (CPO/AFO, manufacturer training) to add.
- [ ] Response-time commitments: none published. Provide if you want them stated.

## Product claims (all verified against manufacturer literature 2026-09-14; confirm current)
- [ ] BECSys5 specifications summarized from BECS brochure SLS-4333-H and Technical Data Sheet TDS-4262 (read from a distributor host; obtain the official copy via the BECS distributor portal).
- [ ] Pulsar Precision figures from O&I Manual Rev 1.0 (2020; read from a dealer host — obtain official copy) and Precision 30 from O&I Manual Rev 1.1 (2023, official Pulsar S3 link).
- [ ] Manufacturer warranty terms stated on the Service page (BECS 5/2/1 years; Pulsar 12/18 months).
- [ ] **Manufacturer imagery — MATERIALLY CHANGED, needs a decision (re-verified 2026-09-26).** This row previously said the site hosts no manufacturer imagery. That is no longer true. The catalog migration copied manufacturer product renders into `public/images/products/`. After removing 9 orphaned files, **114 renders ship and all 114 are in use** across the catalog. Each is recorded with its source URL and is tagged `manufacturer-public-asset`, but **no written permission has been obtained from any manufacturer.** This is the largest unmanaged legal exposure in the build. Decide: obtain co-marketing permission (start with BECS and Pulsar), or remove the hosted renders and revert to linking. Manufacturer PDFs are still linked, not hosted — that part is unchanged.

## Regulatory language
- [ ] All compliance statements are conditional ("designed to help operators hold…", "final acceptance rests with your permit-issuing official"). Legal/owner review of /resources/new-york-pool-chemistry-requirements/ and the regulatory callouts on product pages.
- [ ] Privacy notice and accessibility statement: legal review. **[FLAGGED]**

## Retired content (deliberately not carried over)
- 2015 alkalinity newsletter as "news" (rewritten as an evergreen guide); 2012 ADA pool-lift articles; 2014 Dolphin Wave exclusivity claim; "30 YEARS EXPERIENCE" badge; "Hundreds of satisfied customers"; "one of the most innovative… companies of its type in New York State"; the 9-category general product catalog and 11-brand list (FreyTech may still sell these, but the site now leads with chemistry; a "Other equipment" mention can be added on request).
