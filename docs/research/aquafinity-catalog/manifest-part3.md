# Aquafinity catalog manifest, part 3 (mechanical room equipment + accessories)

Source pages: every family page under `/catalog/mechanical-room-equipment/` and `/catalog/accessories-2/` in crawl.json (17 pages). Output: `manifest-part3.json` (34 objects).

## Counts

| Metric | Count |
| --- | --- |
| Family pages covered | 17 |
| Product/model objects | 34 |
| published | 19 |
| family (represented in a family-level entry) | 11 |
| duplicate (existing FreyTech slug) | 1 |
| discontinued | 0 |
| excluded | 3 |
| Images downloaded to public/images/products | 16 |
| Published/duplicate entries with no usable manufacturer image (status unknown) | 4 |

## Notes

- **Duplicate:** Neptune-Benson Defender maps to existing slug `defender-regenerative-media-filter`. Xylem's official product image was saved to `public/images/products/defender-regenerative-media-filter.webp` (1200x1200) and the Xylem product page plus Defender family brochure are listed for that page's docs.
- **Excluded (3):** Eko3 GEN2 Filters (EKO3 SYSTEMS trademark owned by Knorr Systems, Inc., an Aquafinity company; eko3.com redirects to knorrsystems.com), Precision Control AMF filters, and Precision Control AMF strainers (CES / Aquafinity house brand). Eko3 Pumps are manufactured by Speck Pumps and are published under Speck.
- **Category mapping:** filters/strainers -> filtration; pumps -> pumps-circulation-flow; UV and ozone (Apex, skid-mount CD) -> uv-supplemental-treatment; heaters -> heating-energy; Safety Grip and VGBA grates -> parts-accessories-replacement.
- **Current manufacturer names used:** ClearWater Tech; Aquaculture Systems Technologies (AST); ChlorKing; Speck Pumps (for Eko3 pumps); EPD USA; ETS-UV (Xylem); Harmsco; Lochinvar; Neptune Benson (Xylem); Grundfos (PACO); Pentair; Safety Grip; AquaStar Pool Products; Lawson Aquatics (Xylem); Paddock Pool Equipment Company.
- **Not imaged:** ChlorKing Sentry UV (no product photo on chlorking.com page), Grundfos PACO LC/LCV and KP/KPV (Grundfos Product Center is script-rendered and blocked fetches), AquaStar (Wix site with generic renders). Aquafinity- and knorrsystems-hosted images were never used.
- **Facts omitted as unverified:** Aquafinity's Sentry UV flow/lamp-life figures, EnergyRite 88 percent efficiency, Copper-Fin 2 88 percent (Lochinvar now states up to 85 percent), Harmsco T-316 (Harmsco now states 304L), Paddock lifetime warranty, Safety Grip 1-year warranty.
- The "Saline Chlorination / Guerrilla Professional / Oxidation Reduction Potential / Proven Green" tabs present on every crawled page are Aquafinity's education-menu items, not products, and were not mapped.

## Manufacturers in this part

- ClearWater Tech, LLC
- Aquaculture Systems Technologies, LLC (AST)
- ChlorKing, Inc.
- Knorr Systems, Inc. (Aquafinity / KSI house brand)
- Speck Pumps (Speck Pumps-Pool Products, Inc.)
- EPD USA, Inc.
- ETS-UV (Xylem, formerly Evoqua / Neptune Benson)
- Harmsco, Inc.
- Lochinvar, LLC
- Neptune Benson (a Xylem brand)
- Grundfos (PACO brand)
- Pentair
- Commercial Energy Specialists (CES), a division of Aquafinity
- Safety Grip
- AquaStar Pool Products
- Lawson Aquatics (Neptune Benson, a Xylem brand)
- Paddock Pool Equipment Company
