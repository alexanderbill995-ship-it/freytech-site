# Owner Handoff: how to update the FreyTech site

This site has no CMS database. Content lives in plain, readable TypeScript files under `src/content/`, and a developer (or a comfortable non-developer with a text editor and Git) can change it, run `npm run build`, and redeploy. Every edit is version-controlled.

## Where things live
| To change… | Edit |
|---|---|
| Phone, email, address, hours, "since" year, form endpoints, confirm-flag switch | `src/lib/site.ts` (or the matching `NEXT_PUBLIC_*` env var) |
| Navigation and footer links | `src/lib/nav.ts` |
| Colors, type scale, spacing | `src/app/globals.css` (design tokens at the top) |
| Home page copy | `src/app/page.tsx` |
| BECSys5 facts, FAQs, sources | `src/content/products.ts` → `becsys5` |
| Pulsar facts, FAQs, spec tables | `src/content/products.ts` → `pulsar` |
| Market pages (6) | `src/content/markets.ts` (one object per market: pressures, triggers, solutions, stakeholders, FAQs, references) |
| Region pages (9) | `src/content/regionsCopy.ts` (intro, facilities, references, travel note) and `src/lib/regions.ts` (county lists) |
| Projects, testimonial, customer/design-firm lists, case studies | `src/content/projects.ts` |
| Resource library (filterable documents) | `src/content/resourceLibrary.ts` |
| Guides/articles | `src/content/resources.ts` |
| Products, categories, facilities, problems, manufacturers | `src/content/catalog/` |
| Mega menu columns | derived from catalog data in `src/lib/nav.ts` |
| Contact intents (headline, button per `?intent=`) | `src/components/forms/options.ts` |
| Form option lists (facility types, controllers, feeders, problems, stages) | `src/components/forms/options.ts` |
| Form validation rules | `validate()` inside each form in `src/components/forms/` |

## Catalog migration and generated records
- `docs/research/aquafinity-catalog/manifest-part*.json` hold the machine-readable migration manifest (224 rows). `npm run catalog` merges them into `manifest.json`, generates `src/content/catalog/products.generated.ts` and `manufacturers.generated.ts`, attaches sourced images to hand-authored records, and rewrites `docs/CATALOG-MIGRATION-MANIFEST.md` and `docs/CATALOG-OMISSIONS-REPORT.md`.
- To promote a generated product to a hand-curated one, copy its object from `products.generated.ts` into `products.ts` and edit; hand-authored published records always win.
- To change availability wording for a brand, edit `relationshipStatus` in `taxonomy.ts` (or the manifest row's `availability`) and re-run `npm run catalog`.
- Search synonyms live in `src/lib/search/synonyms.ts`; homepage copy in `src/content/homepage.ts`.

## Adding or editing a product (product-discovery system)
1. Open `src/content/catalog/products.ts` and copy an existing record (BECSys3 is a compact example).
2. Fill every field. Keep `status: "draft"` until facts are verified and `ownerApproved: true`; drafts never render.
3. Set `category` to a published category slug in `taxonomy.ts`, list `facilities` and `problems` slugs so the product appears in facility filters and solution pages, and add `docs` (link manufacturer-hosted files; use `status: "placeholder"` for documents you cannot republish).
4. Run `npm run matrix` to refresh `docs/PRODUCT-CONTENT-MATRIX.md`, then `npm run build && npm run check:links`.
New categories, facilities, problems, and manufacturers live in `src/content/catalog/taxonomy.ts`; the mega menu, filters, and sitemap update automatically. Resource-library documents live in `src/content/resourceLibrary.ts`.

## Adding a case study (the most valuable update)
1. Open `src/content/projects.ts`. Duplicate one of the `caseStudies` template objects.
2. Fill every field with confirmed facts: `facilityType`, `location`, `originalProblem`, `existingEquipment`, `recommendedSystem`, `installationScope`, `commissioningProcess`, `measurableResult` (customer's own data), `customerQuotation` (with written permission) and `relatedProducts`.
3. Set `status: "published"`. Give it a `slug` like `cortland-ymca-becsys5-modernization`.
4. A developer adds a `/projects/[slug]` renderer for case studies (the installation renderer is the model) — about 30 minutes of work, deliberately left until real data exists so no fictional results are ever published.

## Adding a project photo
Convert to WebP (`cwebp -q 82 in.jpg -o out.webp`), place in `public/images/projects/`, and reference it in `installations` with real `width`/`height` and a descriptive `alt`.

## Removing the "Confirm before launch" markers
Set `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false` in the host's environment and rebuild. The markers disappear; the underlying text stays. Work through `docs/CONTENT-CONFIRMATION-CHECKLIST.md` first and delete or correct anything that is not true.

## Publishing workflow
```bash
git pull
# edit files
npm run build && npm run lint
git commit -am "Update: <what changed>"
git push        # host auto-deploys (Netlify/Vercel) or upload ./out
```

## QA before each deploy
- Open every page in the nav; check the mobile menu and sticky bar on a phone.
- Submit each form once with an intentional error, then correctly; confirm delivery in the CRM/inbox.
- Search the built site for the word "Confirm" to be sure no flags remain (`grep -rl "Confirm before launch" out/`).
- Check `/sitemap.xml` and `/robots.txt`.

## What was deliberately not built
- No CMS/admin UI (content files are the CMS).
- No live Workbooks integration (field map provided; enable when configured).
- No analytics vendor (event layer provided; connect GTM when a client-owned GA4 property exists).
- No file upload on forms (needs a secure upload service; the form asks visitors to describe documents and we follow up).
- No chat widget, popups, autoplay video, or fake reviews/counters/logos.
