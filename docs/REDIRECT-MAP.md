# Redirect Map: freytech.org (Joomla) → new site

All old URLs return 200 today except the gallery detail links (500) and sitemap.xml (404). Redirect with **301**. Also redirect `http://` → `https://` and `www` → non-www (or vice versa; pick one) at the host level — the old site served both without redirecting.

| Old URL | New URL | Note |
|---|---|---|
| `/` | `/` | |
| `/index.php` | `/` | |
| `/about` | `/about/` | |
| `/about/what-we-do` | `/about/` | Content merged into About + Service |
| `/about/who-we-work-with` | `/projects/` | Customer and design-firm lists live here |
| `/about/history-leadership` | `/about/` | |
| `/about/news` | `/resources/` | |
| `/about/news/20-have-you-checked-your-alkalinity-today` | `/resources/total-alkalinity-and-controllers/` | Rewritten evergreen guide |
| `/about/resources` | `/resources/` | |
| `/products` | *(no redirect — serves the live catalog)* | **Corrected 2026-09-26.** This row previously sent `/products` to the modernization page. `/products/` is now the catalog hub for all published products, and because Netlify matches redirects ignoring the trailing slash, that rule made the entire catalog unreachable on Netlify and Vercel. The rule has been removed from `public/_redirects` and `vercel.json`. |
| `/service-and-support` | `/service-support/` | |
| `/service-and-support/capabilities` | `/service-support/` | |
| `/service-and-support/warranties` | `/service-support/#warranty` | Anchor to warranty section |
| `/service-and-support/request-a-quote` | `/contact/` | Old form was broken |
| `/project-showcase` | `/projects/` | |
| `/project-showcase/photo-gallery` | `/projects/` | |
| `/project-showcase/photo-gallery/category/1` | `/projects/` | |
| `/project-showcase/photo-gallery/category/1-installations` | `/projects/` | |
| `/project-showcase/photo-gallery/category/2-avatars` | `/projects/` | |
| `/project-showcase/photo-gallery/1-installations/detail/*` | `/projects/` | All returned 500 |
| `/project-showcase/testimonials` | `/projects/` | Testimonial shown on projects page |
| `/contact-us` | `/contact/` | |
| `/index.php?option=com_content&view=article&id=1` | `/` | Home article |
| `/index.php?option=com_content&view=article&id=2` | `/projects/` | Who We Work With |
| `/index.php?option=com_content&view=article&id=4` | `/about/` | History |
| `/index.php?option=com_content&view=article&id=5` | `/resources/` | News |
| `/index.php?option=com_content&view=article&id=6` | `/resources/` | Resources |
| `/index.php?option=com_content&view=article&id=7` | `/water-chemistry-modernization/` | Products |
| `/index.php?option=com_content&view=article&id=8` | `/service-support/` | Capabilities |
| `/index.php?option=com_content&view=article&id=9` | `/service-support/#warranty` | Warranties |
| `/index.php?option=com_content&view=article&id=10` | `/contact/` | Contact |
| `/index.php?option=com_content&view=article&id=11` | `/resources/` | 2012 ADA article (retired) |
| `/index.php?option=com_content&view=article&id=12` | `/resources/` | 2012 lift kits (retired) |
| `/index.php?option=com_content&view=article&id=13` | `/about/` | What We Do |
| `/index.php?option=com_content&view=article&id=14` | `/projects/` | Testimonials |
| `/index.php?option=com_content&view=article&id=19` | `/resources/` | 2014 Dolphin Wave (retired) |
| `/index.php?option=com_content&view=article&id=20` | `/resources/total-alkalinity-and-controllers/` | Alkalinity |
| `/index.php?option=com_content&view=archive*` | `/resources/` | |
| `/about/news?format=feed*` | `/resources/` | Feeds retired |
| `/component/*`, `/administrator/*`, `/README.txt`, `/htaccess.txt`, `/web.config.txt`, `/language/*` | 410 Gone or 404 | Joomla system paths; do not redirect |
| `/images/logo.png` | `/images/brand/freytech-logo.png` | In case of external hotlinks |
| `/images/slider2.jpg` | `/images/projects/ithaca-college-50m-pool.webp` | |
| `/images/UofR.jpg` | `/images/projects/university-of-rochester-natatorium.webp` | |
| `/images/Fairport.jpg` | `/images/projects/fairport-high-school-pool.webp` | |

Implementation files are included for two common hosts:
- **Netlify:** `public/_redirects` (copied into `out/` at build)
- **Vercel / generic:** `vercel.json` `redirects` array

Query-string based Joomla URLs (`index.php?option=...`) need host support for query matching (Netlify supports it via `query` params in `netlify.toml`; a `netlify.toml` with these rules is included). On Apache/cPanel use `RewriteCond %{QUERY_STRING}` rules in `.htaccess` (sample in `docs/htaccess.sample`).

After launch: submit the new sitemap in Google Search Console, verify the property, and monitor the "Not found (404)" report for any old URL we missed.
