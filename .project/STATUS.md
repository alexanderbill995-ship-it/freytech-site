# Status

**Updated:** 2026-09-26 · **Milestone:** M1 Website closeout · **Phase:** M1.2 verification audits running

---

## Where the project actually is

The site is built, deployed-ready and passing its own QA suite as of the last commit
(`ce297ac`, 2026-09-16). 261 pages, 147 published products, 43 manufacturers, 12 categories.
The substantial build is done. What remains is **correctness and closeout**, not construction.

### Verified baseline (2026-09-26, commands actually run)
| Check | Result |
|---|---|
| `npm run build` | PASS — exit 0, 260 page directories emitted |
| `npm run lint` | PASS with 2 warnings — 0 errors |
| `npm run check:links` | 261 pages · 0 broken links · 0 missing anchors · 0 h1 issues · **1 duplicate title** |
| `npm run catalog` reproducibility | **Content-unstable** — re-dates 134 `lastVerified` values |
| Working tree | Clean, all work committed and protected |

### Confirmed defects (pre-existing, none introduced by this session)
1. **Duplicate page identity** — `manufacturers.generated.ts:14` and `:31` both name a
   manufacturer "Manufacturer not yet identified", producing two public pages with identical
   titles. Affects 5 products (2 pool covers, 3 private-label algaecides).
2. **Self-advancing verification dates** — `scripts/generate-catalog.cjs:43` stamps every
   product's public "facts verified" date with the build date. Proven by regenerate-and-diff:
   the date was the only thing that changed, and it changed on every record.
3. **2 lint warnings** — unused `Callout` (`src/app/about/page.tsx:6`) and unused `companySince`
   (`src/app/page.tsx:19`). Being checked for whether they signal half-removed features.

Two independent audits are running to complete this list before any code changes are made.

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
M1.2 audits complete → build the final checklist → implement → verify → review → fix →
client-ready summary → M2 grant scoping questions.
