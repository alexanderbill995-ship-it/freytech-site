# Route Map (static export, trailing slashes)

## Core
| Route | Template | Notes |
|---|---|---|
| `/` | Home | Relationship-driven: accountability hero, trust bar, Why FreyTech, note from Angelo, problems, system story, featured solutions, NY proof, lifecycle, catalog-as-service search, final conversion with compact form |
| `/products/` | Product library | Search + filters (q, category, facility, manufacturer, project); URL state |
| `/products/[category]/` (13) | Category template | automated-controls, chemical-delivery-chlorination, filtration, pool-surfaces-membranes, pumps-circulation-flow, uv-supplemental-treatment, heating-energy, deck-equipment, accessibility-safety, water-testing-monitoring, vacuums-cleaning, specialty-chemicals, parts-accessories-replacement |
| `/products/[category]/[slug]/` (118) | Product detail template | Sticky section nav (desktop) / jump menu (mobile); Product + FAQ schema |
| `/manufacturers/` + `/manufacturers/[slug]/` (34) | Manufacturer template | Overview, categories, products, resources, availability language, CTA |
| `/solutions/` + `/solutions/[problem]/` (11) | Solution template | Browse-by-problem route into the same product data |
| `/becsys5-controls/` | Flagship | BECSys5 decision guide |
| `/pulsar-precision-feeders/` | Flagship | Pulsar Precision + Precision 30 guide with model comparison |
| `/pulsar-chlorination/` | Overview | Pulsar commercial chlorination family overview |
| `/water-chemistry-modernization/` | Program | Complete system + 7-step process |
| `/engineering-specification-support/` | Page + spec form | For design teams |
| `/markets/` + `/markets/[slug]/` (9) | Market template | 6 original + hospitality, camps-seasonal, waterparks |
| `/service-area/` + `/service-area/[slug]/` (10) | Region template | Statewide including New York City (owner instruction 2026-09-17) |
| `/projects/` + `/projects/[slug]/` (3) | Installations | Case-study structure; drafts unrendered |
| `/service-support/`, `/request-service/` | Service | Distinct service journey + form |
| `/resources/` + `/resources/[slug]/` (5) | Resource library (filterable) + guides | Filters: product, manufacturer, type, category |
| `/about/`, `/contact/`, `/privacy/`, `/accessibility/` | Pages | Contact reads `?intent=` and context params |
| `/sitemap.xml`, `/robots.txt` | Generated | |

Total: 225 HTML pages as of 2026-09-27 (118 product pages, 34 manufacturer pages, 13 categories, 10 regions; 220 sitemap URLs — `/404/`, `/_not-found/`, `/privacy/` and `/accessibility/` are deliberately not in the sitemap). Draft/excluded products and unpublished categories are not routed.

## Discovery paths (all resolve into `src/content/catalog/`)
- Mega menu → Featured (4) · By system (6 categories) · By facility (9 → `/products/?facility=…`) · By problem (10 → `/solutions/…`)
- BECSys5 and Pulsar: one interaction from the header (mega menu featured column) and from the home hero.
- Any product page ≤ 3 interactions from home: Home → Products & Solutions → category → product, or Home → mega menu → product.
