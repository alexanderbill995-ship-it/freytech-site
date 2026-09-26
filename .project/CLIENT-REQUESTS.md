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
| R1-3 | Add a section about liners — Commercial Membrane, Poolside by CGT | **IN PROGRESS** | Awaiting sourced manufacturer facts. Needs a decision on whether liners get a new category. |
| R1-4 | "Easiest way to handle product changes?" | **FOR ALEX** | Process question, not an implementation task. Recommendation below. |
| R2-1 | Pulsar Precision picture is wrong | **DONE** (verify against his link) | Fixed 2026-09-26 before the request arrived: the page had been showing a Pulsar Infinity photo. Root cause was in `attach-images.cjs`. Confirming the corrected image matches the product page Angelo pointed to. |
| R2-2 | Remove all LMI under chemical delivery | **DONE** | 4 products removed. |
| R2-3 | Deck equipment and accessibility = Spectrum only | **DONE, with a gap list** | 56 products removed; 14 Spectrum products remain. 11 product types now have no offering at all — researching which of them Spectrum actually makes so Angelo can choose. |
| R2-4 | Replace ClearWater Tech with Clear Comfort AOP | **HALF DONE** | ClearWater Tech removed. Clear Comfort AOP lands once its facts are sourced. |
| R2-5 | Specialty chemicals TBD → EZ Clor + Jack's Magic | **PARTIAL — needs confirmation** | Removed the 3 unidentified private-label algaecides, 4 Next Generation Water Science products and Natural Chemistry Stainfree. Jack's Magic kept (7). EZ Clor to be added once sourced. **Judgment call flagged below.** |
| R2-6 | Add Pulsar Precision 500K–1M gal product | **IN PROGRESS** | Verifying our published capacity language against Pulsar's own figures. |
| R2-7 | Add manufacturers represented: ASC/Aurora, Grundfos, Pentair | **IN PROGRESS** | Grundfos already in the catalog. ASC/Aurora and Pentair commercial lines being sourced. |
| R2-8 | Add WAPOTECH under supplemental | **IN PROGRESS** | Being sourced; will confirm it really is a supplemental-treatment product before filing it there. |

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
