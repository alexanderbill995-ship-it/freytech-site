# freytech.org — Audit Findings & Rebuild Notes

Audited 2026-09-14. Site is a Joomla 3.10.12 build by Mason Digital dated 2014 (copyright), essentially unchanged since January 2015 (last news post). 15 real content pages, 1 testimonial, 1 news article (+3 archived), 9 gallery photos.

## 1. What is useful to preserve

**Contact & identity (verify, then keep)**
- Frey Technologies, Inc. / "FreyTech"; tagline "Everything for a wonderful world of water".
- 1-800-724-2770 · fax 1-315-986-1332 · info@freytech.org · support@freytech.org.
- P.O. Box 403, 2194 Penfield Road, Walworth, NY 14568.
- Logo (`assets/logo.png`, 364x94 — only raster available; need vector from owner).

**Positioning copy that still reads well**
- "No One Knows Water Quality Like FreyTech" (home H2) and the years-of-NY-expertise framing (update the number).
- What We Do: design/sales/installation/service/training of commercial pool equipment and water treatment systems; on-site water testing and consultation; phone/email support. Solid service-company copy — refresh, don't discard.
- Products: the 9 product-category bullets (deck, competitive, cleaning/maintenance, mechanical/specialty, facility, blankets/covers, safety/rescue, training/exercise, toys/recreational) are a good taxonomy for a rebuilt product section.
- Manufacturer list (11 brands): Aqua Creek, BECS Technology, EPD, Lonza, Maytronics, Neptune-Benson, Paragon Aquatics, Spectrum Aquatics, Slip MD, Stark Bulkheads, Taylor Technologies — needs owner confirmation (several have been acquired/renamed since 2014; e.g. Neptune-Benson -> Evoqua/Xylem; Lonza water treatment -> Arxada; Paragon is Pentair; EPD link likely dead).
- Capabilities: the **Monthly Maintenance Program** benefits list (reduced chemical consumption, free phone consultation, monthly/quarterly chemistry graphs, chemical tests & parts replacement, feed-equipment cleaning, chemical delivery) and the service-contract tiers (Annual / Quarterly / Monthly, from the alkalinity article) — the clearest recurring-revenue offer on the site; should be a hero service on the rebuild.
- Warranties page: complete, specific policy text (factory warranties honored; 1-year labor guarantee on FreyTech installs; exclusions; RA-number process). Keep nearly verbatim after owner review.
- Who We Work With: 18 named customer facilities, 19 A/E firms, 3 pool consultants — strong social proof for institutional buyers, but every name must be re-confirmed (see section 4).
- Testimonial: Michael Maguire, Clarkson University (Neptune-Benson Defender; pump RPM 1750->1400; praises Mike Wilson). Keep if Clarkson/Maguire re-consent; it is the only testimonial.
- Hero project captions: Ithaca College (50 m pool, Defender filters, Stark bulkhead), University of Rochester (renovation + sanitation system), Fairport High School (sand->Defender filter). Real NY projects with photos (`assets/slider2_ithaca-college.jpg`, `UofR_university-of-rochester.jpg`, `Fairport_fairport-high-school.jpg`, 922x386 each). Best visual assets on the site.
- Leadership bios (Greg Frey, Mike Wilson, Bob Ulrich) — structure is good; facts must be re-verified.
- "New Municipal & Industrial Products" (chemical delivery, filtration, parts replacement for municipalities/industry) — confirm still a line of business.
- Resources page concept (MSDS/SDS requests, ADA, NYS DOH Subpart 6-1 link) — keep the idea, replace the links.
- Evergreen educational content: the alkalinity explainer is technically sound (TA 80-120 ppm, pH buffering, ORP controller interaction, CO2 adds alkalinity). Re-edit and republish as a resource article rather than a "January 2015 newsletter".

## 2. What is outdated / broken

| Item | Issue |
|---|---|
| Joomla 3.10.12 | EOL since Aug 2023; unsupported. Version publicly exposed via /administrator/manifests/files/joomla.xml. |
| Copyright (c) 2014 | 12 years stale. |
| "Over 25 years" (meta, About, History) vs. "30 years" (home badge/copy) | Contradictory; if purchased 1987, 2026 = 39 years. |
| Mike Wilson "joined in 1988... over the last 14 years" | Copy from ~2002; internally inconsistent. |
| Only news article: "Have You Checked Your Alkalinity Today?" — Jan 2015 | 11+ years old; contains a visible `\\\\\\\\\\\\\\\'s` escaping bug (15 backslashes). |
| Archived articles (2012 ADA deadline; 2012 lift retro-fit kits; 2014 Dolphin Wave exclusivity) | Dead-dated; not in nav but still reachable/indexable via non-SEF article-ID URLs. |
| Resources: "ADA pool lift deadline extension to 2013" (arda.org link) | 13 years past. Aqua Creek link href is malformed (`http://"http:/www.aquacreek...`). ada.gov URL structure has changed. |
| Request A Quote page | Renders only "The form #3 does not exist or it is not published." — no form at all. |
| Photo Gallery | All 18 detail/download links return HTTP 500. Empty "avatars" sub-folder visible. Zero captions. 6-8 of 9 photos appear to be non-FreyTech projects (two Australian water-park stock shots, three Salem OR Kroc Center shots, three State College PA parks photos with "CRPR" watermark). |
| Google Analytics UA-21840584-40 (ga.js) | Universal Analytics stopped collecting July 2023; tag is dead. Property likely in an agency account. |
| jQuery 1.6.4 over plain HTTP | 2011 library; mixed content on HTTPS. Second jQuery copy loaded by Joomla on inner pages. |
| No HTTP->HTTPS redirect; www and non-www both 200 | Duplicate hosts, no rel=canonical. |
| robots.txt -> sitemap.xml 404 | No sitemap exists. |
| Fixed-width, non-responsive template with IE7 stylesheet, no viewport meta | Not mobile-usable. |
| `<html lang="en-gb">` | Should be en-US. |
| Identical meta description on every page; homepage lacks H1; /about and /service-and-support render double H1 with duplicated child content | SEO hygiene. |
| Manufacturer links | Point to 2014-era URLs (becs.com .aspx, lonza.com path, pentaircommercial.com, epdusa.net, taylortechnologies.com/home.asp) — likely dead or redirected. |
| White footer logo (logo_footer.png) | Only usable on dark backgrounds; invisible on white. |
| Brand/place name typos | "Maytonics", "Councilmann Hunsacker", "Tectra Tech", "Mechanicsville", "technians". |
| Exposed Joomla files | README.txt, htaccess.txt, web.config.txt, front-end login, /administrator/ all public. |

## 3. Conversion-path weaknesses

1. **No working form anywhere.** "Request A Quote" (a top-nav item) is broken; Contact Us has no form. The only CTAs are a toll-free number in a thin bar and JS-cloaked mailto links (invisible without JS and to crawlers).
2. **Single, generic CTA** ("GET A FREE QUOTE! Call 1-800-724-2770") repeated identically on every page; no page-specific CTAs (e.g., "Schedule a water-quality assessment", "Ask about a maintenance contract", "Request SDS").
3. **No hours, no local phone, no map, no named rep contacts, no service-area map.** Institutional buyers can't tell who covers their region — the site implies territories ("Eastern Sales Manager") but never states them.
4. **No proof near the ask:** the sole testimonial is buried under Project Showcase; customer names live on a separate About sub-page; hero project stories are 1-sentence slider captions with no case-study pages.
5. **Products page is a dead end** — lists categories and manufacturer links that send visitors off-site with "call for ordering info." No catalog, spec sheets, or request-pricing action per category.
6. **Service contracts (the recurring-revenue offer) are only described in prose;** no tiers/what's-included table, no "get a service-plan quote" action.
7. **Resources for A/E firms** promised on the homepage deliver only four external links and an MSDS mailto — no spec/CAD/submittal downloads, which is what that audience wants.
8. **Not mobile-responsive** — first-touch visits from facility managers on-site fail immediately.
9. **Analytics dead** — zero measurement of any conversion since mid-2023.
10. **Trust signals missing:** no certifications/affiliations (CPO, PHTA, manufacturer-authorized-service badges), no insurance/licensing statement, inconsistent years-in-business badge, no team photos.

## 4. Factual claims requiring owner confirmation

**Company / history**
- [ ] Legal entity name "Frey Technologies, Inc." and DBA "FreyTech".
- [ ] Greg Frey purchased the company in 1987; "Owner and President" title still accurate.
- [ ] Founding year of the predecessor business (site only says "what is today's Frey Technologies").
- [ ] Years-in-business figure to use (site says both "over 25" and "30"; 1987->2026 = 39).
- [ ] "Hundreds of satisfied customers."
- [ ] "One of the most innovative, forward-thinking and successful companies of its type in New York State."

**People**
- [ ] Mike Wilson — Service Manager; joined 1988; still with company.
- [ ] Bob Ulrich — Eastern Sales Manager; "20+ years" expertise; still with company.
- [ ] Any additional current staff / sales territories (Eastern vs. Western NY?).
- [ ] Alkalinity article authorship (Mike Wilson, Jan 2015) — OK to republish/attribute?

**Contact**
- [ ] 1-800-724-2770 still active; any local number.
- [ ] Fax 1-315-986-1332 still in use (or drop).
- [ ] info@freytech.org and support@freytech.org monitored.
- [ ] P.O. Box 403 / 2194 Penfield Road, Walworth NY 14568 — still the office; is 2194 Penfield Rd a physical/visitable location; business hours.

**Territory / service area**
- [ ] "New York State" (home/history); "Upstate NY" (Dolphin Wave article). All of NYS? Downstate/NYC? Neighboring states (gallery shows PA jobs)?
- [ ] "Exclusive dealer of Dolphin Wave commercial pool vacuums in Upstate NY" (2014) — still true?
- [ ] "New products and services for municipalities and industry" — is municipal/industrial water treatment an active line?

**Certifications / qualifications**
- [ ] "Certified local technicians" — certified by whom (CPO/AFO, manufacturer factory certifications)?
- [ ] "Factory trained technicians" — which manufacturers?
- [ ] Licenses, insurance, memberships (PHTA etc.), MWBE status, NYS OGS contracts, BOCES cooperative purchasing — none stated; ask.

**Manufacturers represented (all 11)**
- [ ] Aqua Creek Products · BECS Technology · EPD · Lonza (now Arxada?) · Maytronics · Neptune-Benson (now Evoqua/Xylem?) · Paragon Aquatics (Pentair) · Spectrum Aquatics · Slip MD · Stark Bulkheads · Taylor Technologies — confirm current lines, additions, and any exclusivity/authorized-service status.

**Customers (Who We Work With — 18 facilities)**
- [ ] Binghamton High School and East Middle School · Clarkson University · Colgate University · Cornell University · Goshen BOCES · Hudson Falls High School · Hudson High School · Ithaca College · Lowville Central Schools · Marist College · Mechanicsville [Mechanicville?] High School · Mount Saint Mary College · Poughkeepsie Middle School · Sagamore Resort Hotel · Siena College · South Lewis High School · SUNY at Binghamton · The Culinary Institute of America — confirm each is current and OK to name publicly.
- [ ] Hero projects: Ithaca College (50 m pool, Defender filters, Stark bulkhead), University of Rochester (renovation, sanitation system), Fairport High School (Defender filter) — confirm details, dates, permission; UofR and Fairport are not in the customer list.
- [ ] Gallery: Moose Hillock (Lake George-area campground pool, 2014) — FreyTech project? Park Forest / William Welch Community Pools (State College PA) — FreyTech projects or manufacturer photos? Salem Kroc Center (OR) and Australian water-park photos — almost certainly not FreyTech work; confirm and remove.

**A/E firms & consultants (22 names)**
- [ ] Argus Engineering · Bearsch, Compeau, Knudson Architects · Bernier Carr Group · Bevin's Architects · Business Solutions · Cannon Architects · Excel Engineers · Fellenzer Engineers · Lan Associates · Lewis Aquatics · M&E Engineers · March Architects · Mosaic Architects · Rhinebeck Architecture · Sack & Associates WPS Engineers · Sage Engineering · SEI Architects and Design · Tectra Tech [Tetra Tech?] · Towne Engineering · Councilmann Hunsacker [Counsilman-Hunsaker] · Integrated Pool Design · Water Technology — confirm relationships are current and spellings; several firms have merged/renamed since 2014.

**Testimonial**
- [ ] Michael Maguire, Head Men's & Women's Swimming Coach / Assistant Athletic Director, Clarkson University — still there? Permission to continue using the quote; William McDonald (University Engineer) is named in it.

**Warranty policy**
- [ ] One-year labor guarantee on FreyTech installs; RA-number process; exclusions — still current?

**Service programs**
- [ ] Monthly Maintenance Program benefits; Annual/Quarterly/Monthly contract options; chemical delivery — current offerings and pricing structure.

**Accounts / access**
- [ ] Who owns GA account UA-21840584 (agency?) — a client-owned GA4 property and Search Console are needed.
- [ ] Domain registrar/DNS and hosting (nginx, 64.141.147.182) ownership and access; Joomla admin credentials for content export.
