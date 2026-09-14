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
| `NEXT_PUBLIC_HOURS` | Business hours string | empty (shows "to be confirmed" flag) |
| `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS` | Show amber "Confirm before launch" markers | `true` — **set to `false` for launch** |

No secrets are used anywhere. Everything prefixed `NEXT_PUBLIC_` is embedded in the static build and visible to visitors.

## Build
```bash
npm run build      # outputs ./out
npm run lint
```

## Hosting options
**Netlify (recommended for simplicity):** connect the repo; `netlify.toml` sets `publish = "out"` and includes the legacy query-string redirects; `public/_redirects` handles path redirects. Set env vars in the Netlify UI.

**Vercel:** import the repo; framework preset Next.js; output is static. `vercel.json` carries redirects and headers. 

**Cloudflare Pages / S3+CloudFront / cPanel:** upload `out/`. Add redirects from `docs/REDIRECT-MAP.md` in the host's rules (Apache sample in `docs/htaccess.sample`). Ensure the host serves `/foo/` → `/foo/index.html` and a custom 404 (`out/404.html`).

## Forms
Point `NEXT_PUBLIC_FORM_ENDPOINT` at one of:
- Workbooks web form / Web Key endpoint (see `docs/WORKBOOKS-CRM-FIELD-MAP.md`)
- Formspree (`https://formspree.io/f/xxxx`) — accepts JSON; set notification to info@/support@
- Netlify Forms — requires switching the forms to `data-netlify` HTML posting (small change) or a Netlify Function that relays JSON
Test each of the three forms after configuring; the success message includes a reference code only after a 2xx response.

## DNS cutover checklist
1. Deploy to a preview URL; run through `docs/OWNER-HANDOFF.md` QA list.
2. Set `NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false` and rebuild once the confirmation checklist is complete.
3. Point DNS (A/CNAME) at the new host; enable HTTPS (the old site had no HTTP→HTTPS redirect).
4. Choose www vs non-www and redirect the other.
5. Submit `https://freytech.org/sitemap.xml` in Google Search Console; verify redirects for the top old URLs with `curl -I`.
6. Retire the Joomla install (it is EOL and exposes its version); keep a full backup/export first.
