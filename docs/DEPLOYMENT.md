# Deployment

The site is a **static export**: `npm run build` produces `out/` containing plain HTML, CSS, JS, and images. Host it on any static host or CDN.

## Requirements
- Node.js 20+ (built with Node 24) and npm.

## Local development
```bash
npm install
cp .env.example .env.local   # edit values
npm run dev                  # http://localhost:3000
```

## Environment variables (all optional; documented in `.env.example`)
| Variable | Purpose | Default |
|---|---|---|
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for metadata, sitemap, schema | `https://freytech.org` |
| `NEXT_PUBLIC_FORM_ENDPOINT` | URL that receives JSON POSTs from all forms | empty → honest "not configured" fallback |
| `NEXT_PUBLIC_SERVICE_FORM_ENDPOINT` | Override for the service form | falls back to FORM_ENDPOINT |
| `NEXT_PUBLIC_SPEC_FORM_ENDPOINT` | Override for the spec-assistance form | falls back to FORM_ENDPOINT |
| `NEXT_PUBLIC_PHONE` | Public phone number | `1-800-724-2770` |
| `NEXT_PUBLIC_EMAIL` | General email | `info@freytech.org` |
| `NEXT_PUBLIC_SUPPORT_EMAIL` | Service email | `support@freytech.org` |
| `NEXT_PUBLIC_HOURS` | Business hours string | empty (no hours line is shown) |
| `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS` | Internal only: amber markers on facts awaiting owner sign-off | `false` (never `true` on a public build) |
| `NEXT_PUBLIC_PREVIEW` | github.io review hosting: noindex, "[Website preview]" form subjects | `false` (`true` only in the Pages workflow) |
| `NEXT_PUBLIC_REVIEW_BANNER` | "website concept — private client review" banner on preview builds | `false` |
| `NEXT_PUBLIC_BASE_PATH` | Sub-path when hosted under a folder (github.io repo name) | empty (production is served from the domain root) |

No secrets are used anywhere. Everything prefixed `NEXT_PUBLIC_` is embedded in the static build and visible to visitors.

## Build
```bash
npm run build:prod   # production build for https://freytech.org → ./out (canonical URLs, sitemap, robots allow, forms live)
npm run build        # plain build using whatever env is set (preview/dev)
npm run lint
npm run check:links
```
`build:prod` bakes in the production settings: site URL `https://freytech.org`, no base path, preview off, markers off, FormSubmit endpoint on. Upload the resulting `out/` directory to the host as-is.

## Hosting options
**Netlify (recommended for simplicity):** connect the repo; `netlify.toml` sets `publish = "out"` and includes the legacy query-string redirects; `public/_redirects` handles path redirects. Set env vars in the Netlify UI.

**Vercel:** import the repo; framework preset Next.js; output is static. `vercel.json` carries redirects and headers. 

**Cloudflare Pages / S3+CloudFront / cPanel:** upload `out/`. Add redirects from `docs/REDIRECT-MAP.md` in the host's rules (Apache sample in `docs/htaccess.sample`). Ensure the host serves `/foo/` → `/foo/index.html` and a custom 404 (`out/404.html`).

## Forms
`NEXT_PUBLIC_FORM_ENDPOINT` is set to the FormSubmit AJAX relay (`https://formsubmit.co/ajax/info@freytech.org`) in the Pages workflow; see `docs/FORM-DELIVERY-DECISION.md` for the one-time activation step and the alternatives (Workbooks web-to-lead, a CRM-plus-email relay, other form services). The forms POST JSON and report success only when the service confirms it.
Test each of the three forms after configuring; the success message includes a reference code only after a 2xx response.

## DNS cutover checklist
1. Run `npm run build:prod` and upload `out/` to the chosen host (or connect the repo and set the env vars from `build:prod` in the host UI).
2. Open the host's temporary URL and check the home page, `/products/`, one product page, `/contact/` (submit once; then click "Activate Form" in info@freytech.org), `/sitemap.xml` and `/robots.txt`.
3. Point DNS (A/CNAME) at the new host; enable HTTPS (the old site had no HTTP→HTTPS redirect).
4. Choose www vs non-www and redirect the other.
5. Submit `https://freytech.org/sitemap.xml` in Google Search Console; verify redirects for the top old URLs with `curl -I`.
6. Retire the Joomla install (it is EOL and exposes its version); keep a full backup/export first.
