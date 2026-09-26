# Status

**Updated:** 2026-09-26 · **Milestone:** M1 Website closeout · **Phase:** COMPLETE, pending publication approval (E-2)

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

### E-1 — BLOCKING: Angelo's post-2026-09-16 requests are not recorded anywhere
**What I need:** the actual content of the recent change requests.

The brief describes continued client requests including product removals, replacements and
additions, plus additional specialty-chemical source information. I searched exhaustively:
git history and all branches, `origin` refs, GitHub issues and pull requests (there are none),
the working tree, ignored files, and the local Documents, Desktop and Downloads folders.

**No FreyTech client-request record exists outside this repository, and the repository's last
commit is 2026-09-16 — ten days ago.**

The catalog work already committed *does* include removals, replacements, additions and
specialty-chemical sourcing, which may be exactly what that description refers to. If so,
the work is done and only client confirmation remains. If Angelo has sent anything **since**
2026-09-16 — email, text, call notes, a marked-up PDF, a phone conversation — it is not here
and I cannot reconstruct it without inventing it.

**Please supply the raw request, or confirm there is nothing newer than 2026-09-16.**
Until then I am closing out the work the repository does record, which is substantial.

### E-2 — BLOCKING publication: the client's review preview is two commits stale
`origin/main` is at `3488487` (2026-09-14). Local `main` is two commits ahead.
GitHub Pages deploys on push, so **the preview Angelo can see today does not contain the
relationship homepage, global search, the 147-product catalog, manufacturer pages, or the
ownership story** — all of commit `3cc68ba`.

If Angelo has been reviewing the live preview URL, he has been reviewing the 2026-09-14 site,
which would explain requests for changes that already exist locally.

Pushing publishes to a client-visible URL, so it is your call. Say the word and it goes out.

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
