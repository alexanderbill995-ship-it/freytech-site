# Analytics Event Map

The site pushes structured events to `window.dataLayer` (see `src/lib/analytics.ts`). **No analytics vendor is installed.** Connect Google Tag Manager (or another tag manager) after a client-owned GA4 property exists and consent handling is decided; nothing is transmitted until then. In development, events are echoed to the browser console.

| Event name | Fired when | Payload keys | Where |
|---|---|---|---|
| `assessment_form_start` | First focus inside the assessment form | `form_type` | /contact/ |
| `assessment_form_submit` | Assessment form validated and submitted | `form_type`, `delivery` (sent/unconfigured), `facility_type`, `county`, `request_type`, `project_stage`, `timing`, `product_interest`, `territory_status` | /contact/ |
| `assessment_form_error` | Submit blocked by validation | `form_type`, `fields` | /contact/ |
| `service_request_start` | First focus inside the service form | `form_type` | /request-service/ |
| `service_request_submit` | Service form submitted | `form_type`, `delivery`, `urgency`, `service_type`, `county`, `existing_customer` | /request-service/ |
| `spec_request_start` | First focus inside the spec form | `form_type` | /engineering-specification-support/ |
| `spec_request_submit` | Spec form submitted | `form_type`, `delivery`, `role`, `need`, `county`, `project_stage` | /engineering-specification-support/ |
| `phone_click` | Any tel: link clicked | `location` (header, footer, sticky_mobile, mobile_menu, cta_*, about, contact_aside, service_aside), `href` | site-wide |
| `email_click` | Any mailto: link clicked | `location`, `href` | site-wide |
| `document_download` | Manufacturer PDF/page link clicked | `document`, `category`, `href` | product pages, resources |
| `case_study_view` | Project/case-study detail page viewed | `slug` | /projects/[slug]/ |
| `becsys5_engagement` | 50% scroll or 30 s on the BECSys5 page | `product`, `reason` | /becsys5-controls/ |
| `pulsar_engagement` | 50% scroll or 30 s on the Pulsar page | `product`, `reason` | /pulsar-precision-feeders/ |
| `cta_click` | Sticky mobile assessment button | `location`, `label` | mobile |
| `homepage_cta` | Any homepage CTA (Talk With Angelo, assessment, explore products, problem tiles) | `label`, `section` | / |
| `product_search` | Query typed (debounced, ≥2 chars) | `query`, `results`, `variant` (header/hero/inline) | site-wide |
| `search_result_select` | Predictive result chosen | `query`, `id`, `kind`, `position` | site-wide |
| `search_no_results` | Query returned zero results | `query`, `variant` | site-wide |
| `filter_used` | Library filter/chip/sort changed | `filter`, `value` | /products/ |
| `manufacturer_view` | Manufacturer page viewed | `manufacturer` | /manufacturers/[slug]/ |
| `product_view` | Product detail viewed | `product`, `availability` | /products/[category]/[slug]/ |
| `availability_request` | "Request availability" CTA clicked | `product`, `manufacturer` | product pages |
| `resource_request` | "Available on request" document requested | `document` | resources, product docs |

Every event also carries `page_path`. Session attribution (`landing_page`, `referrer`, `utm_*`) is captured once per session into `sessionStorage` and attached to form payloads, not to events.

## GTM setup sketch
1. Create a GA4 property owned by FreyTech (not an agency).
2. In GTM, create a Custom Event trigger for each event name above and a GA4 Event tag that forwards the payload keys as event parameters.
3. Mark `assessment_form_submit`, `service_request_submit`, `spec_request_submit`, and `phone_click` as GA4 conversions (key events).
4. Add a consent mode configuration if any advertising tags are ever added. The site currently sets no tracking cookies.
5. Insert the GTM snippet in `src/app/layout.tsx` behind an environment flag (`NEXT_PUBLIC_GTM_ID`) — not yet added by design.
