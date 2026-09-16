# Frey Technologies website (rebuild)

Production-ready static site for Frey Technologies (FreyTech), positioning the company as New York State's commercial pool water-chemistry modernization specialist outside New York City, built around BECSys5 automated controls and Pulsar Precision feeder systems.

- **Stack:** Next.js 16 (App Router, static export), TypeScript, CSS Modules with centralized design tokens. No UI framework, no runtime dependencies beyond React/Next.
- **Content:** plain TypeScript data files in `src/content/` (see `docs/OWNER-HANDOFF.md`). The product catalog (`src/content/catalog/`) drives the mega menu, product library filters, category/product/solution templates, resource library, and sitemap.
- **Forms:** three validated forms (assessment, service, specification) posting JSON to a configurable endpoint with an honest development fallback; CRM field map in `docs/WORKBOOKS-CRM-FIELD-MAP.md`.
- **Analytics:** vendor-neutral `dataLayer` events, documented in `docs/ANALYTICS-EVENT-MAP.md`; nothing installed.
- **SEO:** unique metadata and canonicals per page, Organization/LocalBusiness, Service, FAQ, Breadcrumb, and TechArticle JSON-LD, `sitemap.xml`, `robots.txt`, redirect map from the old Joomla site.

```bash
npm install
npm run dev     # develop
npm run build   # static export to ./out
npm run lint
npm run check:links   # verify internal links/anchors in ./out
npm run matrix        # regenerate docs/PRODUCT-CONTENT-MATRIX.md
```

Documentation: `docs/ROUTE-MAP.md`, `docs/PRODUCT-CONTENT-MATRIX.md`, `docs/OWNER-VERIFICATION-CHECKLIST.md`, `docs/DEPLOYMENT.md`, `docs/OWNER-HANDOFF.md`, `docs/CONTENT-CONFIRMATION-CHECKLIST.md`, `docs/MISSING-ASSETS.md`, `docs/REDIRECT-MAP.md`, `docs/WORKBOOKS-CRM-FIELD-MAP.md`, `docs/ANALYTICS-EVENT-MAP.md`.
