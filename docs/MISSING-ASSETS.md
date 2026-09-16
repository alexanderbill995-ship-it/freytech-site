# Missing-Asset Checklist

Assets the site is designed to use but which were not available from the current website or supplied materials. The site functions without them; each would strengthen it.

| # | Asset | Where used | Current state | Ask |
|---|---|---|---|---|
| 1 | Vector logo (SVG/EPS/AI) | Header, footer, OG image, favicon | Only a 364×94 PNG and a 210×100 white PNG exist (carried from the old site). Rendered at ~180px so they look sharp enough, but will not scale. | Send the original logo files from the designer. |
| 2 | Brand guidelines (exact blue, typeface) | Design tokens | Blue sampled from the logo PNG: `#0078C0`. Typeface set to IBM Plex Sans/Mono. | Confirm or supply PMS/hex values. |
| 3 | Equipment-room photographs (BECSys5 installed, Pulsar Precision installed, flow cell, feeders, technician at work) | Product pages, modernization, service | None. Product pages use a schematic diagram and specification tables instead of photos. | 6–10 well-lit photos of real FreyTech installations in NY (with customer permission). |
| 4 | Higher-resolution project photos | Home, projects | Three 922×386 images from the old site (Ithaca College, U of R, Fairport HS). Adequate for cards, too small for full-width hero use. | Originals at 2000px+ if available. |
| 5 | Team photos and bios | About | Angelo DiCiaccio portrait supplied 2026-09-16 (assets/source/angelo-portrait-original.jpeg → public/images/brand/angelo-diciaccio.webp). Other staff pending. | Names, titles, bios for any other staff to publish. |
| 6 | Three documented case studies | Projects, home proof section | Templates exist as unpublished drafts. | Facility, problem, equipment, scope, commissioning, measurable result (customer data), quote with permission. |
| 7 | Manufacturer co-marketing permission and assets | Product pages | Site links to manufacturer PDFs; no logos or renders hosted. | Written permission from BECS Technology and Pulsar/Solenis; dealer marketing kits (Pulsar logo SVG and product renders are available from pulsarpools.com once permission is granted). |
| 8 | Official BECSys5 Technical Data Sheet (TDS-4262) and O&M manual | Engineering support (provided on request) | Only distributor-hosted copies were found. | Download from the BECS distributor portal (support.becsys.com / tdp.becs.com). |
| 9 | Pulsar Precision (full-size) O&I manual, official copy | Product page sources | Read from a dealer host; official link is a Salesforce URL. | Pull from Pulsar ESA portal. |
| 10 | Business hours | Header/footer/contact, schema | Not stated on the old site. | Set `NEXT_PUBLIC_HOURS`. |
| 11 | Operator-facing downloadable PDFs (checklists) | Resources | Checklists are web pages only. | Optional: approve PDF versions for `public/downloads/`. |
| 12 | Certifications and memberships (CPO/AFO, manufacturer training, PHTA, NYS OGS/BOCES purchasing contracts, MWBE) | About, trust strip | Not published (none verifiable). | Provide documentation to add. |
| 13 | Customer permission for names | Home, projects, markets, regions | Names carried from the old site with confirm flags. | Written OK from each, or remove. |
| 14 | Form endpoint (Formspree/Netlify/Workbooks web form) | All three forms | Not configured; forms show an honest "not delivered" fallback. | Provide endpoint URL(s) for `.env`. |
| 15 | GA4 / tag manager container | Analytics | Not installed; events go to `window.dataLayer` only. | Create client-owned GA4 property and GTM container; enable after consent handling is confirmed. |
| 16 | Old-site Joomla export / DNS & hosting access | Deployment, redirects | Not available. | Registrar, DNS, and hosting logins; who owns UA-21840584. |

## Added with the product-discovery expansion (2026-09-15)
| # | Asset | Where used | Current state | Ask |
|---|---|---|---|---|
| 17 | Product photography or licensed manufacturer renders for BECSys3/5/7, ChemLock, CO2 system, Pulsar Precision/30, Aqua Creek lifts, Taylor kits | Product cards and detail heroes | Category glyphs shown instead; only FreyTech's Ithaca photo used (Defender, Stark) | Manufacturer marketing kits with written permission, or FreyTech installation photos |
| 18 | Official Pulsar Precision (full-size) manual PDF | Product docs, resource library | Placeholder "available on request" | Pull from Pulsar ESA portal |
| 19 | BECS TDS-4262/4263, O&M and installation manuals | Product docs, resource library | Placeholders | Distributor portal + permission to host |
| 20 | Manufacturer lines for draft categories (pumps, UV, heating, cleaning) | Category pages | Draft, not rendered | Names, models, relationship documentation |
| 21 | Written dealer confirmations (Pulsar, Xylem, S.R.Smith, Aqua Creek, Taylor) | Product pages, matrix | Wording says "installs and services" / "to be confirmed" | Agreements or rep emails |
