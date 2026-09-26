# FreyTech Engagement Charter

**Client:** Angelo DiCiaccio, President — Frey Technologies, Inc. (FreyTech), Walworth, NY
**Delivery partner:** Rook (Alex Bill)
**Status:** Active, paying, client-facing
**Charter written:** 2026-09-26 (reconstructed from repository evidence)

## Who FreyTech serves
Institutional and commercial pool operators across New York State excluding the five boroughs
— school districts, colleges and universities, municipalities, hospitality, camps and waterparks.
Positioning: commercial pool **water-chemistry modernization** specialist, led by BECSys5
automated controls and Pulsar Precision feeder systems.

## Engagement priorities (client-stated order)
1. **Finish and correct the website.** ← current milestone
2. Grant-finding / application intelligence for hiring, training and equipment.
3. Improve bid/opportunity filtering.
4. Sales and outreach automation.
5. Broader CRM / owner visibility and operational improvements.

## Standing principles for this account
- **Never publish an unverified claim.** FreyTech sells into schools and municipalities; a false
  dealer claim or an unsourced chemical specification is a liability, not a copy problem.
  Every factual assertion must trace to manufacturer literature or a client confirmation.
- **No invented client requests.** Work is driven by evidence recorded in this repository.
  Anything referenced but not recorded is escalated, not guessed.
- **The content files are the CMS.** No admin UI; `src/content/**` is version-controlled content.
- **Generated data stays generated.** `products.generated.ts` / `manufacturers.generated.ts` are
  built from `docs/research/aquafinity-catalog/manifest-part*.json` by `npm run catalog`.
- **Alex approves anything client-facing.** Publishing to the client preview, sending summaries,
  credentials, paid services, and scope changes are Alex's calls.

## Current technical shape
Next.js 16 App Router, static export to `out/`, TypeScript, CSS Modules with design tokens.
No runtime dependencies beyond React/Next. 261 HTML pages. 147 published products across
12 categories and 43 manufacturers. Three lead forms, not yet connected to a delivery endpoint.
