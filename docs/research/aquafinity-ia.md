# Aquafinity.com — Information Architecture Reference

Reviewed 2026-09-14 via live site (https://aquafinity.com). Purpose: structural reference only. Do not copy language. Aquafinity is a national/multi-brand distributor and service company (AES, ASSI, CES, Duffield, KSI merged); many of its patterns assume scale we do not have.

Note on access: the site returned "508 Resource Limit Is Reached" and HTTP 403 to non-browser fetches during review; it loaded normally in a browser on retry. Pages sampled: Home, Products (store), Catalog, Services, Pool Monitoring service page, About > Who We Serve, About > Service Areas, Education, Resources > Case Studies (index + Pembroke Pines), Documentation, FAQs, Videos, Contact.

---

## 1. Navigation structure

### Utility bar (top strip, above main nav)
- Brand family links: AES | ASSI | CES | Duffield | KSI (each goes to an /about/<brand>/ page)
- Contact (/contact/)
- Search icon (site search, GET ?s=)
- Cart icon (/shop/cart.php)
- "My Aquafinity" login / "Sign-up" (/shop/login.php) — customer portal for the store

### Primary nav (header; collapses into an off-canvas "Menu" panel on mobile)
1. Products (/store/) — e-commerce catalog (subcategory-driven, "Please call for price")
2. Catalog (/catalog) — a static grouped index of product families
3. Services (/services/) — dropdown:
   - Water Management (/services/complete-water-management/)
   - Installation (/services/complete-equipment-installation/)
   - Pool Monitoring (/services/complete-pool-monitoring/)
   - Permitting (/services/complete-permitting/)
   - Scheduled Maintenance (/services/complete-scheduled-maintenance/)
   - Q5® Water Quality Standard (/services/q5-water-quality-standard/)
   - SSD Service Supported Distribution® (/services/ssd-service-supported-distribution/)
4. About (/about/) — dropdown:
   - AES, ASSI, CES, Duffield, KSI (one page per legacy brand)
   - Who We Serve (/about/who-we-serve/)
   - Service Areas (/about/service-areas/)
   - Careers (/careers/)
5. Education (/education/) — dropdown with two nested groups:
   - Operator Certifications: AFO Certification, CPO Certification, AquaTech (each /education/<slug>/)
   - Specialty Courses: Saline Chlorination, Guerrilla Professional, Oxidation Reduction Potential, Proven Green (deep-link to /education/?tab=...#courses)
6. Resources (/resources/) — dropdown:
   - Blog & News (/blog-news/)
   - Case Studies (/resources/case-studies/)
   - Documentation (/resources/documentation/)
   - FAQs (/resources/faqs/)
   - Videos (/resources/videos/)

### Footer (four columns)
- Company: About Us, AES, ASSI, CES, Duffield, KSI
- Resources: Case Studies, Videos, FAQs, Documentation
- Legal: Privacy Policy, Terms & Conditions
- Connect: info@aquafinity.com, Contact Us
- Agency credit line. No phone number in the footer; no newsletter signup; no social icons detected in text.

### Sticky elements
- Only a fixed "back to top" anchor. Header is not sticky; there is no sticky CTA bar, no floating phone button, no chat widget detected.

---

## 2. Page types inventory

| Page type | Exists? | Notes |
|---|---|---|
| Home | Yes | Long-scroll marketing page (see section 3) |
| Product store (e-commerce) | Yes | /store/ with ~70 subcategories; product cards with part numbers, "Please call for price", "See Details" / "See parts" |
| Catalog (grouped index) | Yes | Nine top-level groups: Automated Controls, Chemical Delivery Systems, Mechanical Room Equipment, Deck Equipment, Vacuums, Site Disinfecting, Specialty Chemicals, Water Testing, Accessories |
| Services hub + 7 service detail pages | Yes | Hub is a card grid; detail pages follow a fixed template (section 4) |
| Who We Serve (audience segments) | Yes | Four segments: Commercial, Competitive, Institutional, Waterpark; embedded lead form with segment picker |
| Service Areas | Yes | Stat counters + office list by legacy brand and state (section 6) |
| Education hub + certification pages | Yes | Course calendar with Register buttons, tabbed specialty courses, online LMS ("Aquafinity U") signup |
| Case studies (index + detail) | Yes | 7 studies; template in section 7 |
| Documentation library | Yes | Grouped lists of PDFs: CDC, Health Department, Published Articles, (brand brochures). Mix of regulatory PDFs (state codes, inspection sheets), their own published trade articles, and brochures |
| FAQs | Yes | Grouped accordions: Products (controller probes, alerts to phone, heater leaks, test kit vs controller disagreement, flow rate, pump noise, air in inlets), General (leaks, staining, water balance, ORP...) |
| Videos | Yes | Flat grid of ~28 embedded videos, mostly product tutorials (SpinDisc, Enduro, PEPS, BECSys5 battery, SpinTouch-to-BECS) plus event clips |
| Blog & News | Yes | Standard post index |
| Contact | Yes | Lead form + office directory by brand/state + national 888 number + partner logo strip |
| Careers | Yes | |
| Brand history pages (x5) | Yes | Legacy-company pages (irrelevant for a single-brand NY company) |
| Customer login/portal | Yes | Store account |

Absent: no dedicated "automated control" landing page outside the store/catalog; no regulations/compliance explainer page (they park state codes in Documentation as PDFs); no pricing; no per-region landing pages (Service Areas is a single page); no testimonials page (quotes are embedded in Home and service pages).

---

## 3. Homepage section order (top to bottom)

1. Hero: H1 value statement ("complete water control" positioning), subhead about the merged brands, "collective years of experience" claim.
2. Savings claims block: five big-number stat tiles prefaced with "Up to…" (less water / chemicals / power / gas / labor). Unqualified percentages, no footnote or source.
3. "Fully integrated operations" capability list: nine technology pillars as a tag/chip list (Flow, Filtration, Chemistry Control, Monitoring, Treatment, Supplemental Oxidation, Robotic Vacuuming, Deck and Safety, Code Compliance) + About Us link.
4. Logo wall: "partnered with leading businesses and institutions worldwide" — ~14 recognizable hospitality, theme-park and university logos, in a carousel.
5. Services grid: six cards (Water Management, Installation, Pool Monitoring, Permitting, Scheduled Maintenance, Q5 Water Quality), each with "Learn More".
6. SSD distribution model explainer (three-word headline: Service / Support / Distribution) + Learn More.
7. Testimonials: three quotes with name, title, organization (a university facilities director, an insurance executive quoting a trade publication, a resort facilities director). Text only, no photos.
8. Contact block: short invitation + "Contact" button (links to /contact/, no inline form on Home).
9. Footer.

CTA density on Home: low. One primary CTA ("Contact") at the bottom, "Learn More" links on cards. No phone number visible above the fold.

---

## 4. Service detail page template (observed on Pool Monitoring; same skeleton on the hub cards)

1. Hero: three-line H1 ("Complete <Service>") + one-paragraph positioning statement + "Contact Us" button.
2. H2 benefit headline, then three H3 benefit blocks (for monitoring: 24/7 record-keeping tied to "DOH compliance" and liability, escalating alert notification, remote diagnostics/online support).
3. H2 capabilities list: bulleted parameters monitored (ORP and pH, direct-reading free chlorine ppm, total/combined chlorine, temperature, alkalinity, filter pressures, flow, water level/consumption, power, pump TDH, feeder malfunction, test-kit readings, water balance indexes).
4. Single testimonial quote (unattributed on this page).
5. Closing H2 "Get Started…" + one sentence inviting a call + "Contact Us" button (goes to /contact/; no inline form, no phone number on the page itself).
6. Footer.

Compliance phrasing they use: "help assure Department of Health (DOH) compliance", "provide full compliance with local and state codes" (Permitting card, with an asterisk that permitting is not available in all areas). Note that "full compliance" is an unconditional claim we should not imitate (see section 10).

---

## 5. Product presentation (store) and how BECS controllers appear

Store mechanics
- Left rail of subcategories (query-string driven: ?subCategoryToShow=...). Relevant water-chemistry groups: Chemistry Controllers, Pump Controls, Controller Accessories, Filter Controller, Water Level Controls; chemical delivery groups: Carbon Dioxide, Calcium Hypochlorite, Sodium Hypochlorite and Muriatic Acid, Saline Chlorination, On-Site Chlorine Production, All-in-one Tablet Feed; plus Flow Meters, Signet flow saddles/transmitters, test kits (photometric, color-match, Palintest/Taylor reagents), chemical tubing.
- "Chemistry Controllers" subcategory lists product families as image tiles: BECSys3, BECSys5, BECSys7, Precision MR1/MR2/MR3, Precision SC.
- Product family page (?productToShow=BECSys5), sections in order:
  1. H1 "Shop Products" (generic), left rail of categories.
  2. Documents panel: Brochure(s), Operator Manual, Spec/Data Sheet (PDF links behind a securelink handler).
  3. Family H2 (BECSys5) + product image.
  4. "Features:" bullet list (10 bullets: application fit, flowmeter monitoring, VFD control, pump TDH monitoring, dirty-strainer warning, free chlorine reading with bracketed control, chemical inventory monitoring, Ethernet/Wi-Fi, expandability, factory-trained support).
  5. Two-paragraph description (proven design, on-screen help, included Windows logging software; warranty terms: 5-year electronics / 2-year sensor).
  6. Line "for data sheets and drawings contact your sales representative" (pushes to human contact).
  7. SKU list: each row = long configuration description (e.g., pH & ORP sensors, flow cell, temperature sensor, Ethernet, optional ppm/CP-1 sensor, conductivity, safety flow switch, 4-20 mA board, backplate) + Part# + "Please call for price" + "See Details" / "See parts" buttons. Roughly 18 SKUs across BECSys3/5/7 on one page.
- No comparison table across BECSys3/5/7; no "which controller for which facility" guidance; no NSF/ANSI 50 or code-reference callouts on the product page; no add-to-quote flow (only call). FAQs carry the practical controller content (probe cleaning cadence, phone alerts, test-kit disagreement).

Takeaway for our product pages: model-family page with (a) plain-language positioning by facility type/size, (b) feature bullets, (c) standards/listing callouts, (d) downloadable docs, (e) configuration options as a table rather than 18 raw SKUs, (f) a quote request form rather than "call for price".

---

## 6. Service Areas handling

- Single page /about/service-areas/. Three stat counters (states with service centers, newly acquired states, states with affiliate centers), then a list grouped by legacy brand -> state -> street address + phone.
- No maps, no per-county or per-region pages, no local content, no local case studies tied to areas. The Contact page repeats the same office directory plus a toll-free 888 number.
- For a New York statewide company, the better pattern is region pages (Capital Region, Hudson Valley, etc.) each listing counties served, local facility types, local permit-issuing authority note, and a region-specific contact path. See ny-regions.md.

---

## 7. Case study template (from index and Pembroke Pines detail)

Index card: facility name (H3), one-sentence teaser starting with a verb ("Uncover how…", "See…", "Discover how…"), arrow link. No thumbnails of metrics on cards; no filtering by facility type.

Detail page fields, in order:
1. Title: "<Facility> Case Study"
2. Subtitle: solution category tag line (e.g., "Direct Monitoring + Energy Modernization")
3. "Download" button (PDF version)
4. Background — facility type, location, scale (number of pools, bathers, gallons)
5. The Problem — bulleted pain points (staffing, chemical/water/energy cost, dated mechanical systems, health-department scrutiny, liability)
6. The Solution — what was installed, contract model (multi-year equipment maintenance agreement), bulleted feature list (remote monitoring, 24/7 chemistry control, pump control, tablet feeders, water-level monitoring, alerts and digital logs)
7. Deeper-dive subsections (Chemicals + Inventory; Pump Energy Efficiency; Filter Cycles + Cleaning; Monitoring Controls) — each ties a feature to an operational outcome
8. The Results — quantified: peak-load kW reduction, annual kWh and dollar savings, gallons of water saved, "over 30%" chemical cost savings, "perfect scores during DOH inspections", "24/7 DOH compliance"
9. Footer (no related-case-study links, no CTA at the end, no author/date)

Other studies in the set: a school district VSD pump retrofit, a heater field study, a luxury hotel pool/spa compliance story, two YMCA indoor air/chloramine stories, a university chloramine (Cryptolyte) story. Mix of their own installs and manufacturer field studies.

Fields worth adopting: Background / Challenge / Solution / Results skeleton, equipment list, before/after operational detail, PDF download. Add: facility type + region tags, date, "what the inspector sees" angle, a customer quote, and a CTA. Only publish metrics we can document.

---

## 8. Proof formats used

- Logo wall (hospitality, theme parks, universities) on Home and Contact.
- Testimonials with full attribution (name, title, organization) on Home; one unattributed quote on service pages.
- Case studies with hard numbers (kWh, dollars, gallons, percentages, inspection scores).
- Third-party endorsement via an insurance-industry quote about documentation defusing guest complaints (liability angle).
- "Years of collective experience" and "since the early 1990s" longevity claims.
- Documentation library: regulatory PDFs and their own trade-press articles (positions them as an authority).
- Videos: product tutorials (functional proof of support depth more than marketing).
- Certifications/education offering (AFO/CPO/AquaTech instructor status) as credibility.
- Warranty terms stated on product pages (5-year electronics / 2-year sensor).
- Stat counters (states, offices).

---

## 9. CTA and lead-form inventory

CTA types
- "Contact" / "Contact Us" buttons -> /contact/ (dominant CTA everywhere).
- "Learn More" card links.
- "Register" (course dates) and "Enroll Now" / "Sign Up Today" (LMS).
- "Please call for price" + "See Details" / "See parts" on SKUs.
- "Download" on case studies; PDF links on documentation and product pages.
- Phone numbers appear only on Contact and Service Areas pages (per-office numbers plus one toll-free). No click-to-call in header or footer.
- No sticky CTA, no exit-intent, no chat.

Lead forms (Gravity Forms)
- Contact page form fields: Name (first only, required), Company (required), Email (required), Phone (required), "Inquiring about..." dropdown (Products, Pool monitoring, Q5, Water management, Installation, Permitting, Scheduled maintenance, Certifications, Courses, Other), Message (required), optional SMS consent checkbox with TCPA-style disclosure, Submit.
- Who We Serve page form: same fields but the dropdown is the audience segment (Commercial, Competitive, Institutional, Waterpark). Good pattern: the same form with a context-specific picker per page.
- Store has a separate account signup/login rather than a quote form.

---

## 10. Conversion patterns worth adapting vs. avoiding

Adapt
- Services as a first-class nav item with one page per service and an identical template (hero + 3 benefits + capabilities list + proof + closing CTA).
- Segment-aware lead form: reuse one form, swap the dropdown to the page's context (facility type on audience pages; controller model or service on product/service pages; region on region pages). Add facility type, county/municipality, and pool count/type fields for a NY B2B audience.
- Case study skeleton with a PDF download and quantified, documented results.
- Documentation library, but organized around what a NY operator needs: 10 NYCRR Subpart 6-1 links, NYSDOH daily operation record form, local health department directory, MAHC references, controller manuals.
- FAQs that answer operator-level technical questions (probe cleaning, test kit vs controller discrepancy, flow switch behavior) — these map directly to purchase anxiety for controllers.
- Education/training as a trust builder (CPO/AFO course listings) if the company actually teaches.
- Warranty and support terms stated plainly on product pages.
- Attributed testimonials (name, title, facility type) rather than anonymous quotes.

Avoid
- Unqualified "Up to X% less water/chemicals/power/gas/labor" stat tiles with no source. Only publish savings we can document per project, framed as ranges observed at specific facilities.
- "Full compliance with local and state codes", "24/7 DOH compliance", "perfect inspection scores" as blanket outcomes. Use "designed to help operators meet" language and defer to the permit-issuing official (see nys-requirements.md).
- National/global scale signals (state counts, "world's leading", multi-brand family pages) — irrelevant and unbelievable for a New York regional company; replace with county coverage, response-time commitments, and local references.
- "Please call for price" with a wall of raw SKUs; use a configurator or a short options table plus a quote form.
- Logo walls of brands we don't have permission to show.
- Dumping regulatory PDFs without context; add one-paragraph explainers and last-verified dates.
- Generic "Shop Products" H1 on product pages (poor SEO and orientation).
- Burying phone numbers on Contact only; a NY facilities audience expects click-to-call in the header on mobile.
