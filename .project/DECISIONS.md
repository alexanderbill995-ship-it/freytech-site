# Decision Log

Newest first. Each entry: what was decided, why, and who owns it.

---

## D-012 — Final copy: review markers retired, hedged copy resolved, production build defined
**Date:** 2026-09-27 · **Owner:** Alex (instruction) · **Status:** Implemented

Alex asked for the copy Angelo sees to be a final, deployable version with no warnings. Every "Under review" /
"confirm before launch" marker and every sentence that read as unfinished was resolved on its merits rather than
hidden: warranty policy and customer references came from FreyTech's own former public site and stay as final
copy; the founding year stays as the old site published it; Pulsar, CGT and Clear Comfort wording now reflects the
owner-confirmed relationships (D-009); business hours, the "three case studies" placeholder, the project-record
owner-review boxes and all "named on the current website / being reconfirmed" captions were removed or reworded
because no source exists for them. `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS` now defaults to off and the review banner is
opt-in (`NEXT_PUBLIC_REVIEW_BANNER`), so no public build can show markers by accident. `npm run build:prod` produces
the freytech.org build. github.io copies keep noindex and the "[Website preview]" form subject.

## D-011 — Lead delivery goes live through the FormSubmit relay to info@freytech.org
**Date:** 2026-09-26 · **Owner:** Orchestrator (Alex to trigger activation) · **Status:** Implemented, activation pending

Alex's instruction: functioning lead delivery is part of a usable website; pick the simplest implementation that
needs no new account, purchase or credential. Of the four options in `docs/FORM-DELIVERY-DECISION.md` only an
email relay meets that bar, and among relays only FormSubmit needs no account at all: the recipient inbox clicks one
activation link. Endpoint set in the Pages workflow; `submitLead` now treats FormSubmit's HTTP-200
`success:"false"` (its pre-activation reply) as a failure, so the site never shows a false success. Workbooks
CRM remains a later env-var swap. D-001 is closed by this decision.

## D-010 — Owner instructions are implemented as given; advisory objections move to the summary
**Date:** 2026-09-26 · **Owner:** Alex (instruction) · **Status:** Standing

Alex ruled that Angelo's explicit product, manufacturer, brand and content instructions are authoritative and are
not to be withheld or reinterpreted on regulatory-suitability, positioning, territory or product-choice grounds.
Consequences: WAPOTECH is filed under supplemental treatment as asked (its WAPOTEC SYSTEM is a supplemental
treatment; its other lines are filed where they truthfully belong); Aurora and Pentair are added as represented
manufacturers with ASC Pumping Equipment named as the channel; E-Z Clor is added to specialty chemicals
including its sanitizer lines, described factually (a trichlor product is labelled as stabilized trichlor). The
earlier objections in `QUESTIONS-FOR-ANGELO.md` Q1–Q3 are retained as advisory notes only; they no longer block.
The only remaining stop conditions are technical impossibility, a clear security issue, or a request from Alex
for advisory analysis.

## D-009 — Lines the owner names are "represented", and their products are "Available through FreyTech"
**Date:** 2026-09-26 · **Owner:** Orchestrator, per D-010 · **Status:** Implemented

D-003 kept every brand except BECS at availability `request` ("no dealer relationship is implied") pending
written confirmation. The owner's explicit instructions to add or keep a line are that confirmation: when the
company's president says "add Spectrum", the site should not tell a school district that no relationship is
implied. Lines Angelo has named in writing (Pulsar Precision, Spectrum and the Spectrum-catalogue brands, CGT,
Clear Comfort, WAPOTECH, Mer-Made, Filtrex, E-Z Clor, Jack's Magic, Aurora / Pentair / Grundfos via ASC) now carry
`relationshipStatus: "verified"` with the relationship text citing the owner instruction, and their products
publish as `availability: "confirmed"`. Every other brand inherited from the Aquafinity migration stays at
`request` under D-003. The generator encodes this as `OWNER_CONFIRMED`.

## D-008 — Spectrum-only means Spectrum's catalogue, not Spectrum's brand
**Date:** 2026-09-26 · **Owner:** Orchestrator, pending Angelo's confirmation · **Status:** Implemented

Angelo asked that deck equipment and accessibility list "spectrum products only". Implemented first
as brand-only, which removed the AntiWave and Competitor lane lines and the Duraflex diving boards.
Checking spectrumproducts.com showed all three are Spectrum-catalogue items carrying Spectrum part
numbers (AntiWave 558xx, Competitor 55xxx, Duraflex board 22220 with "used with its permission").
They were restored. Angelo's own words — "they have some version of almost everything currently
listed" — support the channel reading over the brand reading.

Stark bulkheads and Aqua Creek lifts are *not* in Spectrum's catalogue and were removed. The record
keeps each product's true manufacturer; Spectrum is the supply channel, and the two are not the
same claim.

## D-007 — Hold the push to `origin/main`; escalate to Alex
**Date:** 2026-09-26 · **Owner:** Alex · **Status:** OPEN — blocking client review

Local `main` is **2 commits ahead** of `origin/main`. `origin/main` is at `3488487` (2026-09-14).
The GitHub Pages review preview deploys on push to `main`, so the preview Angelo can currently
see does **not** include commit `3cc68ba` — the relationship homepage, global search, full catalog
migration (147 products), manufacturer pages, ownership story — or `ce297ac` (preview banner).

Pushing publishes to a client-facing URL, which is Alex's call under the operating rules.
Decision: prepare everything, do not push, escalate. See STATUS.md → Escalations.

## D-006 — Specialist agents limited to four roles
**Date:** 2026-09-26 · **Owner:** Orchestrator · **Status:** Done

Created `.claude/agents/`: `freytech-implementer`, `freytech-content-verifier`,
`freytech-tester`, `freytech-reviewer`. No others. The work is content-accuracy-bound, not
breadth-bound; more roles would add coordination cost without adding coverage.
(Agent definitions load at session start, so they become selectable from the next session.)

## D-005 — `lastVerified` must not be a build-time timestamp
**Date:** 2026-09-26 · **Owner:** Orchestrator · **Status:** Accepted, implementation pending

`scripts/generate-catalog.cjs:43` sets `const V = new Date()...` and applies it to every product's
`lastVerified`, which renders publicly as "Facts verified against manufacturer literature {date}".
Re-running `npm run catalog` therefore re-dates ~134 verification claims without re-verifying
anything. Verified by regenerating and diffing: the ONLY drift was the date, on every record.
Decision: pin verification dates to real verification events; keep today's date only for the
"Generated" line in reports. Low-risk, reversible, no client input needed — Orchestrator's call.

## D-004 — Treat the repository as the sole record of client requests
**Date:** 2026-09-26 · **Owner:** Orchestrator · **Status:** Standing

Searched for post-2026-09-16 client requests in: git history, all branches, remote refs, GitHub
issues and PRs (none exist), the working tree, ignored files, and the user's Documents, Desktop
and Downloads. No FreyTech request record exists outside this repository. Anything not recorded
here is escalated as MISSING EVIDENCE rather than reconstructed from memory.

## D-003 — Catalog availability language stays conservative
**Date:** 2026-09-15 (inherited) · **Owner:** Angelo to confirm · **Status:** In force

Only BECS Technology is `confirmed` (verified on becsys.com/distributors). Every other brand is
`request`: "Contact FreyTech to confirm availability, lead time, and service coverage. No dealer
relationship is implied." A brand moves to `confirmed` only when an agreement or rep confirmation
is on file. Source: `docs/OWNER-VERIFICATION-CHECKLIST.md` §A, §G.

## D-002 — Aquafinity house brands excluded from the catalog
**Date:** 2026-09-15 (inherited) · **Owner:** Orchestrator · **Status:** In force

24 rows excluded, chiefly EKO3 / Knorr Systems / CES "Precision Control" / Enduro-TurboClean —
competitor house brands FreyTech cannot resell. Each exclusion carries evidence and, where one
exists, a FreyTech-sellable alternative. Source: `docs/CATALOG-OMISSIONS-REPORT.md`.

## D-001 — Forms built but deliberately not connected
**Date:** 2026-09-15 (inherited) · **Owner:** Angelo · **Status:** OPEN — blocked on client

All three forms validate, collect CRM context and POST JSON, but `NEXT_PUBLIC_FORM_ENDPOINT` is
empty, so they show an honest "not connected" message and an email fallback. No false success is
ever shown. Four delivery options are costed in `docs/FORM-DELIVERY-DECISION.md`; Angelo picks one.
