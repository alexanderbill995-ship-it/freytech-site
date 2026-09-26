# Acceptance Criteria

A milestone is complete only when every gate below is met **and the proving command output is
recorded in STATUS.md**. "It should pass" is not a pass.

## Gate 1 — Build and static integrity (automated, every change)
| # | Criterion | Proving command | Baseline 2026-09-26 |
|---|---|---|---|
| 1.1 | Production build succeeds | `npm run build` | PASS — exit 0, 260 pages |
| 1.2 | No lint errors | `npm run lint` | PASS — 0 errors, 2 warnings |
| 1.3 | Zero lint warnings | `npm run lint` | FAIL — 2 unused-variable warnings |
| 1.4 | No broken internal links | `npm run check:links` | PASS — 0 broken |
| 1.5 | No missing anchors | `npm run check:links` | PASS — 0 missing |
| 1.6 | Exactly one `<h1>` per page | `npm run check:links` | PASS — 0 issues |
| 1.7 | No duplicate `<title>` | `npm run check:links` | FAIL — 1 duplicate pair |
| 1.8 | Catalog regeneration is content-stable | `npm run catalog && git diff --stat` | FAIL — re-dates 134 records |

## Gate 2 — Content correctness (verified, not assumed)
- 2.1 Every product recorded as `excluded` or `discontinued` has **no published page** in `out/`.
- 2.2 Every `discontinued` product with a stated successor resolves to that successor via search
      aliases, so an operator searching an obsolete model still lands somewhere useful.
- 2.3 Every replacement/addition renders with correct category, manufacturer and availability.
- 2.4 No page publishes a specification, certification or capability claim whose record is
      `claimStatus: "pending-verification"` or has empty `sourceUrls`.
- 2.5 No page asserts a dealer, authorized or distributor relationship that
      `docs/OWNER-VERIFICATION-CHECKLIST.md` §A records as unverified. BECS is the sole exception.
- 2.6 Every phrase listed as retired in `docs/CONTENT-CONFIRMATION-CHECKLIST.md` is absent from `out/`.

## Gate 3 — No regression
- 3.1 Page count does not drop below the recorded baseline without a logged decision.
- 3.2 Every route in `docs/ROUTE-MAP.md` still exists in `out/`.
- 3.3 Header, mega-menu and footer links all resolve to pages that exist.
- 3.4 No horizontal overflow at 375 / 768 / 1440 px on pages touched by a change.
- 3.5 No section renders as a bare heading with empty content.

## Gate 4 — Honest status reporting
- 4.1 Forms are described to the client as **NOT CONNECTED** until an endpoint is configured
      and a live submission has been confirmed received.
- 4.2 Analytics is described as **NOT INSTALLED** until a client-owned GA4/GTM container exists.
- 4.3 Anything blocked on Angelo is listed as blocked, naming the exact missing information.
- 4.4 No item is reported complete on the strength of a code change alone when the claim is
      about client-visible behaviour — it must be verified in the built output.

## Gate 5 — Client delivery
- 5.1 A plain-language change summary exists, written for Angelo, not for engineers.
- 5.2 Every open question is phrased as a specific, answerable question.
- 5.3 Alex has approved publication before anything reaches a client-visible URL.
