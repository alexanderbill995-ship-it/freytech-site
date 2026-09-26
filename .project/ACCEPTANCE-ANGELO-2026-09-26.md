# Angelo's website requests — acceptance checklist

Built 2026-09-26 from Angelo's emails, read directly from Gmail (thread "Re: Consultant": R1 2026-09-17, R2
2026-09-24, R3 2026-09-25) and cross-checked against Alex's consolidated list. Every row was checked in the built
`out/` directory, not in source.

| # | Angelo's request (source) | Status | Verified how |
|---|---|---|---|
| 1 | Remove "outside of NYC" (R1) | **DONE** | No page contains "outside of NYC", "outside of New York City" or "excluding New York City". NYC is a listed service region with its own page. Two regulation pages keep "outside New York City" as the scope of 10 NYCRR Subpart 6-1, which is a fact about the law. |
| 2 | Business address 356 Macedon Center Rd, Fairport NY 14450 (R1) | **DONE** | Home, About, Contact, footer and the LocalBusiness schema (`addressLocality: Fairport`). No "Walworth" or "2194 Penfield" anywhere. |
| 3 | Remit/billing address PO Box 486, Macedon NY 14502 (R1) | **DONE** | Contact page shows it as a distinct remit-to address. |
| 4 | Monroe County (R1) | **DONE** | Home and About say Monroe County; the old Wayne County office references are gone (Wayne County remains only as a served county in the Finger Lakes region list). |
| 5 | Liner section: Commercial Membrane, Poolside by CGT (R1) | **DONE** | Category `/products/pool-surfaces-membranes/` with Infinity Pool Surface by CGT (Commercial Membrane) and Infinity Deck; "Commercial Membrane" is a search alias. |
| 6 | Pulsar Precision picture is wrong (R2) | **DONE** | `/products/chemical-delivery-chlorination/pulsar-precision/` renders `pulsar-precision.webp` (Pulsar's own hero image); root cause in `attach-images.cjs` fixed. |
| 7 | Remove all LMI under chemical delivery (R2) | **DONE** | Four LMI records excluded; no LMI product or manufacturer page; the two form placeholders that used LMI as an example were changed. |
| 8 | Deck equipment: Spectrum products only (R2) | **DONE** | `/products/deck-equipment/` lists only Spectrum, AntiWave, Competitor and Duraflex items, all carried in Spectrum's catalogue (D-008). |
| 9 | Accessibility: Spectrum products only (R2) | **DONE** | `/products/accessibility-safety/` lists only the four Spectrum lifts; Aqua Creek excluded. |
| 10 | Remove deck/accessibility products Spectrum does not offer (R2) | **DONE** | 56 non-Spectrum records excluded (Stark, ADG, Paragon, Meyco, Tailwind, J&J, Lawson SuperGrip, Aqua Creek). Five product types now have no offering; listed for Angelo in the summary. |
| 11 | Replace ClearWater Tech with Clear Comfort AOP (R2) | **DONE** | ClearWater Tech excluded; Clear Comfort CCW300A/300/500 published under supplemental treatment. |
| 12 | Add Mer-Made products (R2: mermade.com/products) | **DONE** | Mer-Made Filter, Inc. manufacturer page; six records: sand filter systems (132/143/160), strainers, float valves, surge tanks, reducers, PoolLink controllers. Facts from mermade.com pages and PDFs. |
| 13 | Add Filtrex (R2: filtrexnj.com) | **DONE** | Filtrex, Inc. manufacturer page; EC Series regenerative media filters (18 models), Trex-Flow VFD packages, vacuum transfer system. Facts from filtrexnj.com. |
| 14 | Add Pulsar Precision (R2: pulsarpools.com "500K to 1M Gal") | **DONE** | Already published and featured; "Pulsar Precision 500K to 1M gal" and Pulsar's page title added as search aliases; capacity text already matched Pulsar's. |
| 15 | Add Spectrum (R2: spectrumproducts.com) | **DONE** | Spectrum Aquatics listed as a represented manufacturer (`/manufacturers/spectrum/`), 14 Spectrum-branded products plus the Spectrum-catalogue brands. |
| 16 | Add ASC / Aurora / Grundfos / Pentair (R2 "Manufacturers Represented") | **DONE** | Aurora and Pentair added as represented manufacturers with six pump records from pentair.com; Grundfos already listed. All three name ASC Pumping Equipment, Inc. as the channel. Pumps category copy says so. |
| 17 | Add WAPOTECH under supplemental (R2) | **DONE** | WAPOTEC SYSTEM (HydroSan / HydroXan / WAPO Floc) published under `/products/uv-supplemental-treatment/` as asked; WAPO Chlor, WAPO TEC filters and ClearAmine filed under chlorination, filtration and testing. |
| 18 | Add E-Z Clor specialty chemicals (R3) | **DONE** | Five E-Z Clor lines (sanitizers, oxidizers, algaecides, balancers, supplements; 43 products as models) under `/products/specialty-chemicals/`, described from ezclorchemicals.com; the brochure Angelo sent (view.flipdocs.com/ezclor-chemical-products) is linked from each record. Trichlor items labelled as stabilized. |
| 19 | Add Jack's Magic specialty chemicals (R3) | **DONE** | Seven Jack's Magic products published; manufacturer marked as represented. |

## Also delivered this session
- **Lead delivery connected** (D-011): all three forms POST to the FormSubmit relay for info@freytech.org. One
  activation click in that inbox remains (see `docs/FORM-DELIVERY-DECISION.md`). No false success with FormSubmit: its
  pre-activation reply is shown as "still being set up on our side", and a 2xx without JSON is shown as unconfirmed.
- **Owner-named lines read "Available through FreyTech"** (D-009); inherited Aquafinity brands still say
  "request availability".

## Gates (commands run 2026-09-26 on the final build)
See STATUS.md for the recorded output.
