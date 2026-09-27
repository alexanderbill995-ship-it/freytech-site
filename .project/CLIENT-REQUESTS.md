# Client Requests — verbatim record

Source of truth for what Angelo actually asked for. Requests are recorded here **verbatim** on
arrival, before any interpretation, so that work is never reconstructed from memory again.
(Reconstruction was impossible on 2026-09-26: no record of these requests existed in or outside
the repository — see STATUS.md escalation E-1.)

---

## Batch R1 — received via Alex 2026-09-26 (Angelo, undated email)

> Hi Alex,
>
> Couple of note on the website:
> We can remove the "outside of NYC".  I have a guy in that area that I can work for me.
>
> Our address is
> 356 Macedon Center Rd
> Fairport NY 14450
>
> Remit/Bill to
> PO Box 486
> Macedon NY 14502
>
> We are in Monroe county
>
> I want to add a section about liners
> Commercial Membrane - Poolside by CGT
>
> There are several changes that I would like to the products to fine tune what we sell and don't.
> What is the easiest way to go about this?  Email everything, schedule a call or another meeting?
>
> Angelo

## Batch R2 — Angelo, Sep 24 2026, 8:02 PM (to Alex, Deborah)

> Hi,
>
> Hope you are well.  Here are items to remove and add to the website.
>
> Remove:
> Picture for the pulsar precision is wrong.  Proper picture is in the add section below.
> All the LMI under chemical delivery
> deck equipment and accessibility pages should be spectrum products only.  I believe they have
> some version of almost everything currently listed on the page.  If not, please remove that product.
> Replace clearwater tech with Commercial Facility Low Chlorine Pool Systems | Clear Comfort AOP
> Specialty chemicals are TBD.  I have to talk with my supplier about which brand he stocks.
>
> Add:
> Products
> Home
> Pulsar® Precision | Pool Chlorination System 500K to 1M Gal
> Home
> Manufacturers Represented - ASC Pumping Equipment, Inc.-Aurora/grundfos/Pentair
> WAPOTECH- under supplemental

## Batch R3 — Angelo, follow-up

> Thank you for choosing Frey Technologies. Thanks.  Here is info on the specialty chemicals.
> EZ Clor Chemical Product Brochure
> Jacks Magic

## Gmail verification — 2026-09-26 (thread "Re: Consultant", angelo@freytech.org → alex@betterwithrook.com)

Read directly from Gmail once the connector connected. Dates and the link targets Angelo pasted, which the
text-only record above had lost:

- **R1 = 2026-09-17 14:45 ET.** Wording as recorded. The liner link is https://poolsidebycgt.com/commercial-membrane/.
- **R2 = 2026-09-24 20:02 ET.** Wording as recorded. The "Add:" lines were pasted page titles with links:
  - "Products" → **https://mermade.com/products/** (Mer-Made Filter)
  - "Home" → **https://filtrexnj.com/** (Filtrex, Inc.)
  - "Pulsar® Precision | Pool Chlorination System 500K to 1M Gal" → https://pulsarpools.com/products/pulsar-precision/
  - "Home" → **https://spectrumproducts.com/** (Spectrum Aquatics)
  - "Manufacturers Represented - ASC Pumping Equipment, Inc." → https://ascpump.com/index.php/partner/ "-Aurora/grundfos/Pentair"
  - "WAPOTECH" → https://wapotech.com/#c562 "- under supplemental"
  - Clear Comfort link: https://clearcomfort.com/commercial/
  So Mer-Made, Filtrex and Spectrum are explicit requests in R2, not additions from Alex's list.
- **R2 inline screenshots (Remove list):** two images pasted after "Specialty chemicals are TBD" show product cards from the
  site: AST Propeller Bead filters, and the AquatiControl ELC-800r and ELC-810 water-level controllers. These are
  removals. The text-only record had no trace of them; Alex spotted them on 2026-09-27.
- **R3 = 2026-09-25 14:22 ET.** "EZ Clor Chemical Product Brochure" → **https://view.flipdocs.com/ezclor-chemical-products**
  (this answers the earlier question about the brochure's origin); "Jacks Magic" → https://jacksmagic.com/. The rest
  of R3 is about grants and is out of scope for the website milestone.
- Alex's replies (2026-09-18, 2026-09-25) promised the changes and said a bill would follow once modifications are done.

---

## Open question from Angelo, for Alex to answer
> "There are several changes that I would like to the products to fine tune what we sell and don't.
> What is the easiest way to go about this? Email everything, schedule a call or another meeting?"

This is a process decision for Alex, not an implementation task. Recommendation is in STATUS.md.

---

# Implementation tracker

| # | Request | Status | Notes |
|---|---|---|---|
| R1-1 | Remove "outside of NYC" | **DONE** | 81 occurrences updated; NYC is now a served region with its own page; assessment form no longer flags NYC leads as out-of-territory. Subpart 6-1 regulatory pages deliberately unchanged — there "outside New York City" is the regulation's scope, not a territory claim. |
| R1-2 | New address + separate remit-to | **DONE** | 356 Macedon Center Rd, Fairport NY 14450, Monroe County in config, schema, About, contact, footer. Remit-to (P.O. Box 486, Macedon NY 14502) modelled separately and shown distinctly. Office references updated from Wayne to Monroe County. |
| R1-3 | Add a section about liners — Commercial Membrane, Poolside by CGT | **DONE** | New `pool-surfaces-membranes` category with Infinity Pool Surface by CGT (Commercial Membrane) and Infinity Deck; "Commercial Membrane" is a search alias. |
| R1-4 | "Easiest way to handle product changes?" | **FOR ALEX** | Process question, not an implementation task. Recommendation below. |
| R2-1 | Pulsar Precision picture is wrong | **DONE — confirmed against his link** | Fixed on the morning of 2026-09-26, before the request arrived; the page had been showing a Pulsar Infinity. The corrected image is Pulsar's own hero photo from exactly the page Angelo named. He was reviewing the 2026-09-16 preview. See QUESTIONS-FOR-ANGELO.md Q5. |
| R2-2 | Remove all LMI under chemical delivery | **DONE** | 4 products removed. |
| R2-3 | Deck equipment and accessibility = Spectrum only | **DONE** | Only Spectrum-catalogue items remain (Spectrum, AntiWave, Competitor, Duraflex — D-008). 56 non-Spectrum products excluded. Five product types have no Spectrum equivalent (Q4, informational). |
| R2-4 | Replace ClearWater Tech with Clear Comfort AOP | **DONE** | ClearWater Tech excluded; Clear Comfort hydroxyl AOP (CCW300A/300/500) published under supplemental treatment. |
| R2-5 | Specialty chemicals TBD → EZ Clor + Jack's Magic | **DONE** | Jack's Magic (7) kept; E-Z Clor product lines added from ezclorchemicals.com at the owner's instruction (D-010). Advisory note on trichlor retained in QUESTIONS-FOR-ANGELO Q3 for Alex only. |
| R2-6 | Add Pulsar Precision 500K–1M gal product | **DONE — no change needed** | Pulsar publishes "500K to 1M+ gallons"; our record already says "manufacturer-rated for 500,000 to 1,000,000+ gallon pools". Separately correcting the **Precision 30** record, which still calls Pulsar's figures "conflicting" — Pulsar now publishes a clean 10,000–300,000 gal. |
| R2-7 | Add manufacturers represented: ASC/Aurora, Grundfos, Pentair | **DONE** | Aurora (Pentair brand) and Pentair added as represented manufacturers with pump records; Grundfos already listed; all three name ASC Pumping Equipment, Inc. as the channel (D-009, D-010). |
| R2-8 | Add WAPOTECH under supplemental | **DONE** | WAPOTEC SYSTEM (HydroSan / HydroXan / WAPO Floc) published under UV & Supplemental Treatment as asked; WAPO Chlor electrolysis, WAPO TEC filters and ClearAmine monitor filed under chlorination, filtration and testing. |

| R2-9 | Add Mer-Made products (mermade.com/products, R2) | **DONE** | Mer-Made Filter, Inc. added as a represented manufacturer with its commercial filtration lines. |
| R2-10 | Add Filtrex (filtrexnj.com, R2) | **DONE** | Filtrex, Inc. added: EC-series regenerative media filters (18 models), Trex-Flow VFD package, vacuum transfer system. |
| R2-11 | Add Pulsar Precision (pulsarpools.com, R2) | **DONE** | Already published and featured; aliases now include "500K to 1M gal" so Angelo's phrasing finds it. |
| R2-13 | Remove AST Propeller Bead filters and AquatiControl ELC-800r / ELC-810 (screenshots in R2 Remove list) | **DONE** 2026-09-27 | Three rows excluded in the manifest with the reason recorded; AST and AquatiControl manufacturer pages disappear with them. |
| R2-12 | Add Spectrum (spectrumproducts.com, R2) | **DONE** | Spectrum Aquatics listed as a represented manufacturer (14 Spectrum-branded products plus the Spectrum-catalogue brands). |

## Judgment call made on R2-5, for Angelo to confirm
"Specialty chemicals are TBD... which brand he stocks" followed by "EZ Clor / Jacks Magic" reads as
naming the chemical brands he stocks. Three items filed under specialty chemicals are **equipment,
not chemicals**, so a statement about chemical brands should not sweep them away:
ChlorKing HYPOGEN (on-site hypochlorous generator), Pacific Ozone PC3 portable ozone cart, and the
Wysiwash hose-end sanitiser. **These were kept.** If Angelo wants the category to be literally only
EZ Clor and Jack's Magic, those three come out in one edit — but they would more accurately be
refiled as equipment than deleted.

## Recommendation on R1-4, for Alex
Angelo asked whether to email, call, or meet about further product changes. Email has already
proven costly: the requests in this file existed for days with no trace in the project, and work was
planned against a repository that had no record of them. Recommended answer: **a single shared
product list he can mark up** — every product currently on the site, one row each, with a keep/remove
column. That converts an open-ended conversation into a document, gives him something to work through
at his own pace, and leaves a record. `docs/PRODUCT-CONTENT-MATRIX.md` is already generated from the
catalog and is one export away from being exactly that list.

## Formerly blocked — now implemented (D-010)
Q1 WAPOTECH, Q2 ASC Pumping / Aurora and Q3 E-Z Clor were implemented as Angelo asked on 2026-09-26 after Alex
ruled that the owner's product instructions are authoritative. The write-ups in **`QUESTIONS-FOR-ANGELO.md`** are
kept as advisory notes for Alex. Q4 (five deck/accessibility gaps) and Q5 (stale preview) remain informational.
