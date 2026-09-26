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
| R1-3 | Add a section about liners — Commercial Membrane, Poolside by CGT | **IN PROGRESS** | Facts sourced from poolsidebycgt.com. Official product name is **Infinity Pool Surface by CGT**; "Commercial Membrane" is the category, not the product. New `pool-surfaces-membranes` category being added. |
| R1-4 | "Easiest way to handle product changes?" | **FOR ALEX** | Process question, not an implementation task. Recommendation below. |
| R2-1 | Pulsar Precision picture is wrong | **DONE — confirmed against his link** | Fixed on the morning of 2026-09-26, before the request arrived; the page had been showing a Pulsar Infinity. The corrected image is Pulsar's own hero photo from exactly the page Angelo named. He was reviewing the 2026-09-16 preview. See QUESTIONS-FOR-ANGELO.md Q5. |
| R2-2 | Remove all LMI under chemical delivery | **DONE** | 4 products removed. |
| R2-3 | Deck equipment and accessibility = Spectrum only | **DONE, with a gap list** | 56 products removed; 14 Spectrum products remain. 11 product types now have no offering at all — researching which of them Spectrum actually makes so Angelo can choose. |
| R2-4 | Replace ClearWater Tech with Clear Comfort AOP | **IN PROGRESS** | ClearWater Tech removed. Clear Comfort facts fully sourced (3 commercial models, NSF/ANSI 50, UL E482558, EPA Est. 91122-CO-3); records being added. It is hydroxyl AOP — **not** UV and **not** ozone — so the category copy needs a small correction. |
| R2-5 | Specialty chemicals TBD → EZ Clor + Jack's Magic | **PARTIAL — see Q3** | Removals done; Jack's Magic kept (7). **E-Z Clor is a POOLCORP private brand with no commercial line, the brochure Angelo sent is not a manufacturer document, and its lead products are trichlor — which our own compliance page says 10 NYCRR 6-1.11 prohibits in NY public pools.** Recommending supplements only. |
| R2-6 | Add Pulsar Precision 500K–1M gal product | **DONE — no change needed** | Pulsar publishes "500K to 1M+ gallons"; our record already says "manufacturer-rated for 500,000 to 1,000,000+ gallon pools". Separately correcting the **Precision 30** record, which still calls Pulsar's figures "conflicting" — Pulsar now publishes a clean 10,000–300,000 gal. |
| R2-7 | Add manufacturers represented: ASC/Aurora, Grundfos, Pentair | **BLOCKED — see Q2** | Grundfos already listed. **ASC is a distributor, not a manufacturer, and its published territory excludes New York.** Aurora is a Pentair brand, so Aurora and Pentair are one relationship. Pentair's commercial lines are sourced and ready once the relationship question is answered. |
| R2-8 | Add WAPOTECH under supplemental | **BLOCKED — see Q1** | WAPOTECH makes **no** UV, ozone or AOP product. Its line is filters, dosed chemicals, salt electrolysis (a primary sanitiser) and an air-quality monitor. Filing it under supplemental treatment would be wrong. Nothing published pending Angelo's answer. |

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

## Blocked pending Angelo's answers
Three requests cannot be implemented as written without publishing something inaccurate.
Each is written up with evidence and a recommended answer in **`QUESTIONS-FOR-ANGELO.md`**:
Q1 WAPOTECH · Q2 ASC Pumping / Aurora · Q3 E-Z Clor.
Q4 lists the five deck and accessibility product types that now have no offering.
Q5 explains that the Pulsar photo was already fixed, and why he was seeing a stale preview.
