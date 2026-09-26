# Decision Log

Newest first. Each entry: what was decided, why, and who owns it.

---

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
