# Plan

Operating loop: **INVESTIGATE → PLAN → DELEGATE → IMPLEMENT → VERIFY → REVIEW → FIX → CONTINUE.**

---

## M1 — Website closeout (CURRENT)
**Goal:** every outstanding website change that is recorded in this repository and implementable
without client input is implemented and independently verified; everything else is named,
scoped and escalated as a specific question rather than left vague.

### M1.0 Reconstruct state — DONE
Git history, branches, remote refs, GitHub issues/PRs, working tree, ignored files and the
user's local Documents/Desktop/Downloads searched. Baseline build, lint and link check run.
**Finding:** no record of client requests after 2026-09-16 exists anywhere retrievable.

### M1.1 Establish governance — DONE
`.project/` charter, plan, status, decisions, acceptance, progress. Four specialist agents in
`.claude/agents/`: implementer, content verifier, tester, reviewer.

### M1.2 Build the verified outstanding-work checklist — IN PROGRESS
Two parallel audits: content/requirements verification against the four recorded checklists and
the catalog manifest; adversarial technical review for defects, accuracy risk and regressions.
Output: every item classified DONE / OPEN-IMPLEMENTABLE / BLOCKED-ON-CLIENT / WRONG.

### M1.3 Implement the OPEN-IMPLEMENTABLE set
Queued from investigation, ordered by client impact:
1. **Duplicate public page identity** — two manufacturer pages titled "Manufacturer not yet
   identified". Breaks the link check and splits an already-weak page in two.
2. **False verification dates** — `npm run catalog` re-stamps ~134 public "facts verified on"
   dates with no re-verification. Fix at the generator so the date means what it says.
3. **Unsourced specialty-chemical claims** — the three private-label algaecides publish product
   claims while the manifest says the source is unidentified. Bring the page in line with the
   evidence and make the sourcing gap explicit rather than silent.
4. Whatever else the two audits confirm.
Each change: implement → `npm run build && npm run lint && npm run check:links` → record output.

### M1.4 Independent verification
Tester validates the built output against Gates 1–3. Reviewer hunts for collateral damage.
Findings that survive review are fixed and re-verified. No self-certification.

### M1.5 Client-ready change summary
Plain-language summary for Angelo: what changed, what is now correct, what is still waiting on
him, and exactly what each waiting item needs. Alex approves before it goes out.

### M1.6 Publication decision — ALEX
The client-visible preview is 10 days and two commits stale. Pushing is a client-facing
publication action. Prepared, held, escalated. See DECISIONS.md D-007.

---

## M2 — Grant intelligence (NEXT — scope not yet sufficient to build)
Expected next per the client's stated priorities: grant finding and application support for
**hiring, training and equipment**, aimed at institutional buyers (schools, colleges,
municipalities) who fund pool work from capital and programme budgets rather than operating cash.

**Recorded basis in this repository:** the customer and market profile only — the named school,
college and municipal facilities, the nine NY regions, and the modernization programme framing.

**Not recorded anywhere, and required before building:** which grant programmes Angelo is
targeting, whether FreyTech pursues grants for itself (hiring/training) or on behalf of customers
(equipment), who writes and signs applications, deadlines already in play, and any past
application history. Building a grant pipeline without these would be fabrication.

**Therefore M2 opens with a scoping step, not an implementation step.** A short, specific
question set goes to Angelo through Alex; the build plan follows the answers. Drafted in STATUS.md.

---

## M3+ — Later, per client priority order
Bid/opportunity filtering · sales and outreach automation · CRM and owner visibility.
Not scoped. Not started. No assumptions recorded.
