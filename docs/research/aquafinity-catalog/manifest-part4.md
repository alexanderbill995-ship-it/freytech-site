# Manifest part 4: site disinfecting, specialty chemicals, vacuums, water testing

Source: `manifest-part4.json` (55 entries). Covers all 17 Aquafinity family pages under `/catalog/site-disinfecting/`, `/catalog/specialty-chemicals/`, `/catalog/vacuums-2/` and `/catalog/water-testing/`, plus one FreyTech legacy brand (Maytronics Dolphin WAVE) that is not on Aquafinity.

## Counts

| Metric | Count |
| --- | --- |
| Aquafinity family pages covered | 17 |
| Entries (products, models, headings) | 55 |
| published | 32 |
| family (represented inside a published or duplicate entry) | 9 |
| duplicate | 3 (Taylor -> existing `taylor-test-kits`; legacy Palintest Pooltest 3 and 6 -> Lumiso equivalents) |
| discontinued | 2 (Palintest Pooltest 9 Premier, Pooltest 25 Professional Plus; Palintest EOL notice linked) |
| excluded | 9 (Enduro-TurboClean line + 5 models, EKO3 Vacuum Cart: Aquafinity in-house brands; Next Generation Water Science and Palintest brand headings: not products) |
| Images downloaded to `public/images/products/` | 22 files (23 entries; Hammer-Head family reuses the Resort image) |
| Image status permission-required (Aquafinity/Knorr-hosted only) | 13 entries (algaecides x3, AW-1 acid wash, ChlorKing 5000 stick meter and salinity controller, Enduro x6, EKO3 cart) |
| Image status unknown on published entries | 4 (Palintest Lumiso Pooltest 3/4/6/Expert; palintest.com blocks automated fetches) |
| Verification: verified / partially / pending | 39 / 11 / 5 |

## Category mapping applied

- Site disinfecting devices (HypoGen, PC3 ozone cart, Wysiwash) -> `specialty-chemicals`, subcategory "Site disinfection".
- Chemicals (algaecides, Next Generation Water Science, Natural Chemistry Stainfree, Jack's Magic) -> `specialty-chemicals`.
- ChlorKing AW-1 Electrode Stack Wash -> `parts-accessories-replacement` (it is a hardware maintenance kit, not a chemical; flagged in notes).
- Vacuums and carts -> `vacuums-cleaning`; testing -> `water-testing-monitoring`.

## Manufacturer identifications

- HypoGen: ChlorKing, Inc.; product lives on chlorking-hypogen.com (models 2.0 Auto, 5.0 Auto, 25 Auto, HYPO Mini).
- PC3: Pacific Ozone brand, Evoqua -> now Xylem; current listing is "PC Series Portable Cart" (36 g/h).
- Enduro-TurboClean: copyrighted by Commercial Energy Specialists, Inc. (an Aquafinity company) -> excluded.
- EKO3 Vacuum Cart: eko3.com redirects to knorrsystems.com (Knorr Systems International, Aquafinity) -> excluded.
- Quick Vac: Hexagone Manufacture SAS (France).
- Stain removal: Natural Chemistry (NC Brands / Biolab-KIK) for Stainfree; Jack's Magic Products, Inc. for the seven "Stuff" products.
- Next Generation Water Science: still a live independent brand site (nextgws.com).
- Taylor: Fluidra brand; K-2006 image downloaded to `public/images/products/taylor-test-kits.webp` from taylortechnologies.com product media.
- Maytronics Dolphin WAVE: Wave 100 and Wave 200 XL confirmed on maytronics.com US store; notes "FreyTech legacy brand".

## Could not identify or verify

- Algigon 30, Premium 60, Terminator II algaecides: manufacturer unknown (possibly Robarb "Super AlgiGon" or an Aquafinity private label). Pending verification, no image.
- ChlorKing 5000 Stick Meter, 5000 Toroidal Salinity Controller and saturated salt feeders: not on chlorking.com's current product pages (dealers still list "CHLORKING 5000 HHS"). Pending verification; official brochure/manual should be requested from ChlorKing.
- ChlorKing AW-1: only referenced via the CHLOR manual acid-wash procedure; confirm current name and availability.
- Palintest Lumiso Pooltest 3/4 URLs follow the confirmed `/product/lumiso-pooltest-6/` pattern but could not be fetched; Lumiso images must be requested.
- Enduro Spot/Peps robots appear to be Hexagone units re-badged by CES; noted as an uncertainty.
