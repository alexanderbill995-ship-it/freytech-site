# Manifest part 1 — Aquafinity Automated Controls + Chemical Delivery Systems

Source: `manifest-part1.json` (45 objects). Scope: every family page under
`aquafinity.com/catalog/automated-controls/` and `/chemical-delivery-systems/` (17 pages).
Facts, documents and images come from manufacturer sites only; Aquafinity was used solely to enumerate products.

## Counts

| Metric | Count |
| --- | --- |
| Family pages covered | 17 / 17 |
| Product/model objects | 45 |
| published | 13 |
| family (represented inside another entry) | 3 |
| duplicate (already in FreyTech catalog / same product) | 10 |
| discontinued | 8 |
| excluded (Aquafinity house brands) | 11 |
| Images downloaded to `public/images/products/` | 14 |
| Image status permission-required (Aquafinity/Knorr-hosted only) | 24 |
| Image status unknown (no public manufacturer image) | 3 |
| Image status dealer-media-asset (not downloaded) | 4 |

## Images downloaded (all webp, q82, never upscaled)

becsys2, becsys3, becsys5, becsys7, becsys-bw, becs-co2-ph-control (becsys.com renders; the site only serves 250 px thumbnails for 3/5/7/CO2),
pulsar-precision, pulsar-precision-30, pulsar-plus-briquettes, pulsar-infinity (pulsarpools.com),
stenner-classic-series (stenner.com), chlorking-chlor-sm, chlorking-nexgen (chlorking.com product-page photos, agency CDN),
taylor-wharton-easycarb-750-pool (extracted from Taylor-Wharton's own sell sheet PDF; literature asset, 220 x 535 px).

## Published (new for FreyTech)

- **BECS**: `becsys2`, `becsys-bw` (availability confirmed). BECSys3/5/7 and the CO2 feeder are duplicates of existing slugs.
- **AquatiControl Technology**: `aquaticontrol-elc-800r`, `aquaticontrol-elc-810` water level controllers (docs on aquaticontrol.com; no public image).
- **ChlorKing**: `chlorking-chlor-sm` (covers Aquafinity's MINI and CHLOR-reverse tabs), `chlorking-nexgen`. CLASSIC forward-polarity is gone from chlorking.com (discontinued).
- **LMI (Milton Roy)**: `lmi-roytronic-series-a`, `lmi-series-b`, `lmi-series-c`, `lmi-series-g`. lmipumps.com is behind a bot check; literature cited from LMI's WNY distributor site lmi-pumps.com (Flomotion Systems) and flagged as dealer-hosted.
- **Pulsar**: `pulsar-infinity`. Pulsar 1/3/4/45/140/500 are absent from pulsarpools.com and its support page (discontinued); Precision / Precision 30 / briquettes emitted as duplicates with manufacturer images.
- **Stenner**: `stenner-classic-series` (45M5 / 85M5 / 45MHP10 as models; specs from FSPECCSHA).
- **Taylor-Wharton**: `taylor-wharton-easycarb-750-pool` (NOVO 750 is now sold as EasyCarb 750 (Pool), TWM-B019); NOVO 575/450 as family entries.

## Excluded — Aquafinity house brands (documented in `notes`)

- **EKO3 Systems** (pH-MTS, CO2 feeder + heater/regulator/switchover, Acid Vapor Recovery System, VaporLok, Fume-X): eko3.com redirects to knorrsystems.com, the EKO3 brochure carries Knorr's Santa Ana address, and Aquafinity's store lists "Eko3 Fume-X". FreyTech alternatives noted (BECS CO2 feed, ProMinent acid fume scrubber, Taylor-Wharton bulk CO2).
- **Precision Control MCC-VFD / PFDx** (CES house-brand VFD packages, drive OEM undisclosed) and **Knorr Smart Pump Control System** (KSI house-brand VFD package).
- **Precision Control MR1/MR2/MR3** are marked *duplicate*, not excluded: the Aquafinity-hosted MR3 data sheet is a BECS Technology document ("Designed and Manufactured in the USA by BECS Technology"), so these are private-label BECSys2/BECSys3 equivalents.

## Discontinued (evidence in `notes`)

Pulsar 500, 140, 45, 4, 3, 1 (not on pulsarpools.com); ChlorKing CLASSIC forward-polarity (not on chlorking.com); Natural Chemistry Automatic Dosage Dispenser (not on naturalchemistry.com; retail-only listings).

## Manufacturers / facts not fully resolved

- Drive OEM behind Knorr SPCS and CES MCC-VFD/PFDx (not disclosed in their literature).
- OEM of the EKO3-branded CO2 heater, regulator and switchover accessories.
- Whether Fume-X is a rebadged third-party scrubber.
- Corporate parents to confirm before publishing manufacturer copy: LMI/Milton Roy (Ingersoll Rand), Pulsar (Innovative Water Care / Solenis), Taylor-Wharton, Natural Chemistry.
- BECS brochures use embedded font encodings, so BECSys2 and BECSysBW specs beyond the becsys.com product page must be transcribed manually.
- Per-model GPD figures for LMI and Stenner configurations cited by Aquafinity are flagged "verify" in `models[].fit` rather than asserted.
