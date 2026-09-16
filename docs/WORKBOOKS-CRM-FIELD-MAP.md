# Workbooks CRM Integration Field Map

**Status: the forms do NOT write to Workbooks today.** They POST JSON to whatever endpoint is set in `NEXT_PUBLIC_FORM_ENDPOINT` (and optional per-form overrides). If no endpoint is set, the form tells the visitor plainly that nothing was delivered and offers a pre-filled email. This document maps every field the forms emit to the Workbooks records they should populate once an integration (Workbooks Web-to-Lead form, Web Key, or an intermediary such as Zapier/Make posting to the Workbooks API) is configured.

## Payload emitted by every form (JSON, `Content-Type: application/json`)

| Field | Set by | Values | Workbooks target |
|---|---|---|---|
| `form_type` | site | `assessment` \| `service` \| `specification` | Lead → custom field **Web Form Type**; drives routing (Sales queue vs Service case vs Engineering) |
| `lead_source` | site | `Website` | Lead/Opportunity → **Lead Source** |
| `submitted_at` | site | ISO-8601 | Activity → created date |
| `page_url` | site | full URL of the form page | Lead → custom **Submission Page** |
| `landing_page` | attribution | first page path of the session | Lead → custom **Landing Page** |
| `referrer` | attribution | document.referrer | Lead → custom **Referrer** |
| `utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content` | attribution | from URL | Campaign membership / custom UTM fields |
| `territory_status` | site | `primary` \| `nyc` \| `out_of_state` \| `unknown` | Organization → custom **Territory Status**; `nyc`/`out_of_state` auto-flag for polite decline/referral |
| `ny_region` | site | REDC region name derived from county | Organization → custom **NY Region** |
| `consent` | visitor | `yes` | Person → **Marketing consent** / GDPR-style consent status + timestamp |

## Assessment form (`form_type = assessment`) — the primary sales lead

| Field | Required | Workbooks target |
|---|---|---|
| `name` | yes | Person → Name |
| `organization` | yes | Organization → Name (dedupe on name + county) |
| `email` | yes | Person → Email (business/institutional preferred; free-mail flagged in UI only) |
| `phone` | yes | Person → Phone |
| `title` | no | Person → Job Title |
| `address` | no | Organization → Street address |
| `state` | yes | Organization → State (NY expected) |
| `county` | yes if NY | Organization → custom **County** |
| `facility_type` | yes | Organization → custom **Facility Type** (picklist) |
| `pool_count` | no | Organization → custom **Number of Pools** |
| `largest_pool_volume` | no | Organization → custom **Largest Pool Volume** (picklist codes: under-50k, 50k-100k, 100k-300k, 300k-500k, over-500k, unknown) |
| `current_controller` | no | Installed System → **Controller** |
| `current_feed` | no | Installed System → **Feeder / chemical form** |
| `request_type` | yes | Opportunity → custom **Request Type** (angelo, assessment, modernization, selection, budget, replacement, specialist, specification, service, availability, document, find, information) — pre-selected by `?intent=` |
| `primary_problem` | yes | Opportunity → custom **Primary Problem** |
| `project_stage` | no | Opportunity → **Stage hint** / custom **Project Stage** |
| `timing` | no | Opportunity → **Close window** hint / custom **Desired Timing** |
| `product_interest` | no | Opportunity → **Product** (BECSys5 / Pulsar Precision; set from `?product=` on product-page CTAs) |
| `water_feature_type` | no | Organization → custom **Water Feature Type** |
| `preferred_contact` | no | Person → **Preferred contact method** |
| `product_interest_context` | no | Set from `?product=` on the linking page; Opportunity → **Product** (context) |
| `category_context` | no | Set from `?category=`; Opportunity → custom **Category Context** |
| `problem_context` | no | Set from `?problem=` (solution page slug); Opportunity → custom **Problem Context** |
| `facility_context` | no | Set from `?facility=`; Organization → Facility type hint |
| `source_page` | no | document.referrer of the contact page; Lead → **Source Page** |
| `campaign` | no | `utm_campaign` at form load; Campaign membership |
| `manufacturer` / `manufacturer_context` | no | Opportunity → custom **Manufacturer** |
| `existing_equipment` | no | Installed System → **Existing equipment** (replacement matching) |
| `search_query` | no | Set when the form is reached from a search (incl. no-result searches); Lead → custom **Search Query** |
| `availability_status` | no | Availability state of the product page that linked here (confirmed/request/discontinued); Opportunity → custom **Availability Context** |
| `requested_document` | no | Document intent only; Task → **Requested document** |
| `details` | no | Activity → Notes |
| `documents` | no | Activity → Notes ("documents mentioned"); secure upload not enabled |

Scoring hooks (per the Growth Blueprint account score): `project_stage` + `timing` → Timing (25); `facility_type` + `largest_pool_volume` + `product_interest` → Product fit (25); `primary_problem` → Pain (15); `territory_status`/`ny_region` → geographic gate.

## Service form (`form_type = service`) — a Case, not a Lead

| Field | Required | Workbooks target |
|---|---|---|
| `name`, `phone`, `email` | yes | Person |
| `organization`, `address`, `county` | org yes, county yes | Organization (match to installed base) |
| `urgency` | yes | Case → **Priority** (down = P1, degraded = P2, scheduled = P3) |
| `service_type` | yes | Case → **Type** |
| `equipment` | no | Installed System lookup / Case → Notes |
| `existing_customer` | no | Case → custom **Existing Customer?** |
| `details` | yes | Case → Description |

## Specification form (`form_type = specification`) — Influencer lead

| Field | Required | Workbooks target |
|---|---|---|
| `name`, `firm`, `email`, `phone`, `role` | name/firm/email/role yes | Person (Influence type = specifier) + Organization (type = A/E/Consultant) |
| `project_name` | yes | Opportunity → Name (Project) |
| `county`, `project_stage`, `facility_type`, `largest_pool_volume` | county yes | Opportunity / Project Signal fields |
| `need` | yes | Activity → Task type (selection, schedules, SOO, retrofit, substitution, coordination, commissioning) |
| `deadline` | no | Task → Due date |
| `details` | no | Notes |

## Recommended integration path
1. **Fastest:** Workbooks Web-to-Lead / Web Key form endpoint → set as `NEXT_PUBLIC_FORM_ENDPOINT`. Map the field names above in the Workbooks web-form definition. (Requires the Workbooks edition/module that supports web forms.)
2. **Most flexible:** a small serverless function (Netlify/Vercel/Cloudflare) that validates, dedupes against Workbooks by organization + county, and creates Organization/Person/Opportunity or Case via the Workbooks API. The static site stays static.
3. **Interim:** Formspree/Netlify Forms endpoint that emails info@ and support@; import to Workbooks manually.

Do not claim Workbooks integration on the site until one of these is live and tested.
