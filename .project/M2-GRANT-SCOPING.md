# M2 — Grant Intelligence: scoping brief

**Status:** Cannot start implementation. Requirements are not recorded anywhere in this project.
**Written:** 2026-09-26 · **Owner of the answers:** Angelo, via Alex

---

## Why this is a scoping step and not a build step

The engagement brief places grant finding and application intelligence — for **hiring, training
and equipment** — as the milestone after the website. That is the full extent of what is recorded.

I searched the repository for any grant requirement, programme name, deadline, funder, eligibility
note or application history. **There is none.** The website work never touched grants.

Building a grant pipeline from that would mean inventing the client's business model: guessing
whether FreyTech applies for its own workforce funding or helps customers fund equipment, guessing
which programmes, guessing who signs. Those guesses would be invisible inside a working-looking
tool, which is worse than having no tool. So M2 opens with questions.

## What the project *does* establish (usable as input, verified in the repo)

- **Buyer types** — 9 market segments, all institutional: K–12 districts, colleges and
  universities, municipal aquatic centres, YMCA/JCC and community facilities, healthcare and
  therapy pools, competition pools, hospitality, camps, waterparks, plus the
  architect/engineer/public-sector channel. These are grant-receiving institutions, which is
  almost certainly why grants matter to this business.
- **Territory** — New York State excluding the five boroughs, resolved to county level in
  `src/lib/regions.ts` across 9 named regions. Grant programmes are usually scoped by state,
  county, or district type, so this maps directly onto eligibility filtering.
- **What FreyTech sells** — capital equipment (controllers, feeders, filtration, UV, lifts) and
  recurring service. Equipment is capital-budget and grant-fundable; service usually is not.
- **Named institutional customers** — 18 facilities including SUNY Binghamton, Cornell, Ithaca
  College, Marist, Siena, Clarkson, Colgate, and several school districts and BOCES. Existing
  relationships at grant-receiving institutions are the warmest possible grant channel.
- **Accessibility and safety as a compliance driver** — ADA lifts and drain-cover compliance are
  already a catalog category, and compliance-driven upgrades attract specific funding.

## What is missing, and why each answer changes the build

| # | Question for Angelo | What changes depending on the answer |
|---|---|---|
| 1 | Are you seeking grants **for FreyTech** (hiring and training your own technicians), **for your customers** (equipment they buy from you), or both? | This is the fork in the road. Own-company funding means workforce and apprenticeship programmes and a small number of applications FreyTech signs. Customer-side means a repeatable capital-funding play attached to every quote, and FreyTech never signs. The two share almost no infrastructure. |
| 2 | If customer-side: do you want to **find** funding your customers qualify for, **help them apply**, or just **know a deadline exists** so you can time the quote? | Sets whether this is a monitoring feed, a proposal-support tool, or a sales-timing signal. |
| 3 | Which programmes are already on your radar, and have you applied for anything before? | Any real programme or past application is worth more than anything I could assemble cold — it shows what actually fits and what has already failed. |
| 4 | For hiring and training: what roles, how many, what certifications (CPO/AFO, manufacturer training), and are you a registered apprenticeship sponsor or willing to become one? | NY workforce funding is largely gated on apprenticeship registration and specific certification programmes. Without this the eligibility filter cannot be built. |
| 5 | Who writes and signs applications, and how much time per month is realistic? | Decides whether the deliverable is a shortlist of 3 high-fit opportunities a year or an always-on monitored feed. |
| 6 | Are there deadlines already in play this cycle? | Determines whether M2 starts with a tracker or with an actual application. |
| 7 | Any past grant-funded customer projects — even ones you only heard about? | Real precedent is the strongest evidence of what a NY pool project can actually get funded. |

## Proposed shape once answered

1. **Eligibility profile** — FreyTech's own profile and a customer-institution profile, built from
   the segment and county data already in the repo.
2. **Programme register** — a verified, sourced list. Every entry carries funder, eligibility,
   amount, deadline, cycle and source URL. Same discipline as the product catalog: nothing listed
   without a source, nothing claimed that has not been read.
3. **Fit scoring** — programmes ranked against the profiles, with the reason for the score visible.
4. **Monitoring** — deadline and re-opening tracking for the programmes that score well.
5. **Application support** — reusable capability, past-performance and technical-approach content,
   drawn from the same verified facts as the website.

Stage 2 is where this becomes real work, and it cannot begin before question 1 is answered.

## Deliberately not done
No programme list has been drafted. No eligibility has been assumed. No deadline has been
recorded. Nothing in this file states a grant fact — only questions and repository-verified
context. That is intentional: a fabricated grant register is worse than an empty one.
