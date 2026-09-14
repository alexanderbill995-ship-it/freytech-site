# freytech.org — Technical Audit

Audited 2026-09-14 via curl/openssl against raw HTML.

## Platform / CMS
- **CMS:** Joomla! (`<meta name="generator" content="Joomla! - Open Source Content Management">`).
- **Version:** **3.10.12** (released July 2023) — confirmed by publicly readable `/administrator/manifests/files/joomla.xml` and `/language/en-GB/en-GB.xml`. Joomla 3.x reached end-of-life August 2023; this is an unsupported major version with no further security patches.
- **Template:** custom template named `msm` (`/templates/msm/`), built by Mason Digital / MSM Marcom (footer credit, http://www.msmmarcom.com). Fixed-width ~900–960px layout, table-free but **not responsive** (no viewport meta, no media queries in template.css, IE7 conditional stylesheet `ieonly.css`).
- **Extensions detected:**
  - `mod_jt_superfish_menu` (Superfish dropdown menu; loads hoverIntent.js, superfish.js).
  - `com_phocagallery` (Phoca Gallery) for the Project Showcase — photo detail/download endpoints return HTTP 500.
  - `jckeditor` (JCK Editor WYSIWYG) — loads `/plugins/editors/jckeditor/typography/typography2.php` as a stylesheet with a malformed `media="null" attribs="[]"` attribute.
  - Regular Labs "Modules Anywhere" (`<!-- START: Modules Anywhere -->` comments; `/media/regularlabs/js/script.min.js?v=18.2.9063`).
  - A form component that no longer exists — Request A Quote page shows "The form #3 does not exist or it is not published." (likely a removed/unpublished form from a component such as RSForm/ChronoForms/BreezingForms; component not identifiable from front end).
  - Joomla `mod_articles_news` (newsflash) embeds the news article on the homepage.
- **Server:** nginx (header `Server: nginx`); PHP not disclosed. Session cookie `1e489ee77ab03f9d0d709449bab374a4=…; HttpOnly` (Joomla). `P3P` header present (obsolete). Aggressive `Cache-Control: no-store, no-cache` on all HTML.
- **IP:** 64.141.147.182 (freytech.org and www.freytech.org both A-record to it).
- **Exposed files:** `/README.txt`, `/htaccess.txt`, `/web.config.txt`, `/administrator/manifests/files/joomla.xml`, `/administrator/` login, front-end `/index.php?option=com_users&view=login`. All standard Joomla but reveal exact version.

## HTTPS / transport
- HTTPS works. Certificate: Let's Encrypt (issuer CN=YR1), CN=freytech.org, valid 2026-09-10 → 2026-12-09 (auto-renewing).
- **HTTP is NOT redirected to HTTPS** — `http://freytech.org/` returns 200 with full content.
- **www vs non-www:** both serve 200 with no canonical redirect. `<base href="https://freytech.org/">` is set in HTML, but no `<link rel="canonical">`.
- No HSTS, X-Frame-Options, Content-Security-Policy or X-Content-Type-Options headers.
- **Mixed content:** homepage loads `http://ajax.googleapis.com/ajax/libs/jquery/1.6.4/jquery.min.js` over plain HTTP (blocked/warned by modern browsers on the HTTPS page). template.css references `http://openid.net/login-bg.gif`.
- Google Analytics beacon uses protocol-relative logic (`ga.js` legacy).

## JavaScript / front-end stack
- jQuery **1.6.4** from Google CDN (2011) on the homepage, plus Joomla's own `/media/jui/js/jquery.min.js` + `jquery-migrate` + `jquery-noconflict` on inner pages (two jQuery copies), MooTools core/more (Joomla 3 legacy), Bootstrap 2 JS (`/media/jui/js/bootstrap.min.js`), Chosen, html5.js shim, `jquery.cycle.all.js` (hero slider), `slider.js`, `script.js` (centers nav; hides the "Phoca.cz" credit link).
- Inline `$(document).ready` for Superfish menu.

## Analytics / tags
- **Google Analytics (legacy ga.js, "Classic" Analytics):** `UA-21840584-40` via `_gaq.push(['_setAccount', …])`. Universal Analytics / ga.js properties **stopped processing data on 1 July 2023 (GA4 migration)**, so this tag collects nothing today. The `-40` suffix indicates it is one of many properties under agency account UA-21840584 (likely Mason Digital's account, not the client's).
- No GA4, Google Tag Manager, Facebook Pixel, Hotjar, LinkedIn, call-tracking, or any other tag detected.
- No Google Search Console verification meta.

## Forms
| Page | Form | Method/Action | Fields | Status |
|---|---|---|---|---|
| Request A Quote | none renders | — | — | **Broken** — "The form #3 does not exist or it is not published." |
| Contact Us | none | — | — | No form; only text contact info (email links). |
| Photo Gallery (all category views) | `adminForm` (Phoca ordering) | POST to same category URL | `imgordering` select (Ordering/Title/Date/Rating/Hits asc/desc), `limit` select (5/10/15/20/50/All), hidden `controller=category`, hidden CSRF token | Functional but is a UI sort control, not a lead form. |
| Archive view (unlinked) | `adminForm` (Joomla archive filter) | POST to `/` | `month`, `year` (2012, 2014), `limit`, hidden `view=archive`, `option=com_content`, `limitstart=0` | System view, not linked. |
| Front-end login (unlinked) | Joomla `com_users` login | POST `/component/users/?task=user.login&Itemid=101` | `username`, `password`, `remember`, hidden `return`, CSRF token | Exposed but unused. |
| /administrator/ | Joomla admin login | POST `/administrator/index.php` | username, passwd, etc. | Standard admin login, publicly reachable. |

**Net effect: there is no working lead-capture form anywhere on the site.** The only conversion mechanisms are the toll-free number and `mailto:` links (JS-cloaked, so they do not render for users/crawlers without JS).

## Email obfuscation
Joomla core "Email Cloaking" content plugin — addresses are written by inline JS from HTML-entity fragments into `span#cloak…` elements. Decoded values: `info@freytech.org` (footer, Contact, What We Do, Resources with `?subject=MSDS%20Sheet%20Request`), `support@freytech.org` (Contact).

## Structured data
- Joomla 3 default microdata only: `itemscope itemtype="https://schema.org/Blog"` on the News listing and featured view; `schema.org/BlogPosting` on the news item (`itemprop="name"`); `schema.org/Article` with `itemprop="headline"` on archive listing items.
- **No** JSON-LD; **no** LocalBusiness / Organization / ContactPoint / PostalAddress schema; no Open Graph or Twitter Card meta; no `rel=canonical`.

## SEO/metadata observations
- Identical meta description on every page.
- `<title>` pattern: `Page Name - Commercial Pool Equipment and Supplies | Water Treatment Systems and Maintenance | Frey Technologies` (very long, brand last). Gallery pages have title order reversed.
- Homepage has no H1. Section landing URLs (`/about`, `/service-and-support`) render two H1s.
- `<html lang="en-gb">` (should be `en-US`).
- robots.txt points to a sitemap.xml that 404s. No XML sitemap exists.
- All images lack meaningful alt text except logo/tagline; slider images have empty alt.
- Page weight is light (~11 KB HTML homepage) but 4 render-blocking JS libs and two jQuery versions.

## Accessibility notes
- Fixed-width, non-responsive layout; no viewport meta — unusable on mobile without pinch-zoom.
- Tagline and logo are images with alt text (OK). Slider images `alt=""`. Gallery thumbs have filename alts.
- Dropdown menus are hover-only (Superfish) — not keyboard-friendly by default.
- Email addresses invisible without JavaScript ("This email address is being protected from spambots").

## Errors observed
- HTTP 500 on all 18 Phoca Gallery detail/download URLs.
- Joomla warning banner on Request A Quote.
- Escaping bug: `pool\\\\\\\\\\\\\\\'s` (15 backslashes) in the alkalinity article body — caused by repeated magic-quotes/addslashes on save.
- Malformed hrefs: Resources page Aqua Creek link `http://"http:/www.aquacreek.com/adaresources.html`; gallery RSS links `http://https:/freytech.org/...`.
- Duplicate anchor tags with empty text after BECS and Paragon links on Products page.
