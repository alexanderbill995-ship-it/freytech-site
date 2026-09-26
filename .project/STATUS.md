# Status

**Updated:** 2026-09-26 · **Milestone:** M1 Website closeout · **Phase:** M1 complete and published · R1/R2 client requests complete except three blocked on Angelo

---

## Where the project actually is

The site is built, deployed-ready and passing its own QA suite as of the last commit
(`ce297ac`, 2026-09-16). 261 pages, 147 published products, 43 manufacturers, 12 categories.
The substantial build is done. What remains is **correctness and closeout**, not construction.

### Verified state after closeout (commit `dc66f6c`, commands actually run)
| Check | Result |
|---|---|
| `npm run build` | PASS — exit 0, 258 pages |
| `npm run lint` | PASS — 0 errors, **0 warnings** |
| `npm run check:links` | 258 pages · 0 broken · 0 missing anchors · 0 h1 issues · **0 duplicate titles** |
| `npm run catalog` reproducibility | **Stable** — byte-identical across consecutive runs |
| Sitemap | 253 URLs (was 212) |
| Static HTML content | contact 1 form / 21 inputs · catalog hub 145 product links · resources 34 entries |
| Working tree | Clean, committed at `dc66f6c` |

13 defects found and fixed, including two blockers that would have cost real business: a redirect
that made the whole catalog unreachable on the production hosts, and a conversion page whose form
did not exist in the delivered HTML. Full list in `CHANGELOG-M1.md`; gate results in
`docs/QA-RESULTS-2026-09-26.md`. Reviewed by an independent adversarial pass: no blockers, four
findings, all fixed.

---

## ESCALATIONS FOR ALEX

### E-1 — RESOLVED 2026-09-26
Alex supplied Angelo's requests (three email batches). They are now recorded **verbatim** in
`.project/CLIENT-REQUESTS.md` with an implementation tracker, so the failure that made this an
escalation — requests existing for days with no trace in the project — cannot repeat silently.

### E-2 — RESOLVED 2026-09-26
Alex approved the push. 13 commits deployed to the client preview. The GitHub Actions history
confirms the previous successful Pages deploy was **2026-09-14**, so Angelo had been reviewing a
12-day-old build. That is the direct explanation for requests that were already implemented — the
wrong Pulsar photo he reported had been fixed hours before his note arrived, on a build he could
not see.

### E-3 — Client decisions that have been open since 2026-09-15
None are code problems; all need one answer from Angelo.
- **Form delivery endpoint.** Three forms are complete but deliver nowhere. Four options costed
  in `docs/FORM-DELIVERY-DECISION.md`. Until one is chosen, the site cannot capture a lead.
  This is the highest-value open item on the whole engagement.
- **Dealer status for Pulsar** and the other manufacturers in `OWNER-VERIFICATION-CHECKLIST` §A.
- **Customer naming permission** for the 18 named facilities and the Clarkson testimonial.
- **Business hours**, and whether the confirm-before-launch markers can come down.
- **Analytics**: no GA4/GTM property exists; events currently go nowhere.

---

## Next
1. **Alex:** answer E-1 (are there client requests newer than 2026-09-16?) and E-2 (approve the push).
2. **Alex:** review `CLIENT-SUMMARY-DRAFT.md` and send to Angelo.
3. **Angelo:** the form-delivery decision is the highest-value open item on the engagement —
   the site cannot capture a lead until it is made.
4. **M2:** grant scoping questions are drafted in `M2-GRANT-SCOPING.md` and are ready to send.
   No grant work can begin before question 1 there is answered.
