# Form Delivery: Decision and Status

**Decision (2026-09-26):** deliver leads by email through the **FormSubmit AJAX relay**, addressed to the inbox FreyTech already publishes on the site (`info@freytech.org`). Chosen because it is the only option on the table that needs no account, no credentials, no paid service and no server code: the site POSTs the same JSON payload it always built to `https://formsubmit.co/ajax/info@freytech.org`, and FormSubmit emails it to that address as a table.

Switching later to Workbooks CRM (or to a relay that does both) remains an environment-variable change; the form components do not change.

## What is live
| Item | State |
|---|---|
| Endpoint in the GitHub Pages build | `NEXT_PUBLIC_FORM_ENDPOINT=https://formsubmit.co/ajax/info@freytech.org` (`.github/workflows/pages.yml`) |
| Payload | Unchanged (see `WORKBOOKS-CRM-FIELD-MAP.md`) plus FormSubmit routing fields: `_subject` (form type + organization), `_template: table`, `_replyto` (the visitor's email, so Reply goes to them), `_captcha: false` (the AJAX flow has no CAPTCHA page) |
| Success reporting | With the FormSubmit endpoint a submission is reported as sent **only** when the service answers 2xx **and** returns a JSON body that does not report `success: "false"`; a 2xx with no parseable JSON is shown as "cannot confirm delivery", never as success. (Another endpoint would be trusted on 2xx alone; revisit this check if the endpoint changes.) Before activation FormSubmit answers 200 with `success: "false"` and an activation message; the site shows "Form delivery is still being set up on our side, so your request was not delivered" plus the phone number and email, never a success message. |
| Activation | **Pending — one click.** The first submission makes FormSubmit send an "Activate Form" email to `info@freytech.org`. Whoever reads that inbox clicks the link once. Every submission after that is delivered. |

Preview builds prefix the email subject with "[Website preview]" so test submissions from the review site are easy to tell from real leads.

## The one remaining step
1. Submit any of the three forms once on the live site.
2. Open the FormSubmit email in `info@freytech.org` and click **Activate Form**.
3. Submit a form again and confirm the email arrives (the site will now show the "Received" message with a reference code).

Optional hardening after activation: FormSubmit offers a random alias string in place of the plain address; set it as the endpoint (`https://formsubmit.co/ajax/<alias>`) to keep the address out of the page source. It is already public on the contact page, so this is cosmetic.

## Options considered
| Option | How | Pros | Cons |
|---|---|---|---|
| **FormSubmit relay (chosen)** | Endpoint set in the build env; recipient activates once by email | No account, no credentials, no code, no cost; JSON POST; `_replyto` makes replies one click | Interim data passes through a third party; email only, no CRM record |
| Workbooks CRM | Workbooks Web-to-Lead / Web Key endpoint; fields mapped per WORKBOOKS-CRM-FIELD-MAP.md | Leads land as Organization/Person/Opportunity with context | Requires the Workbooks edition/module that supports web forms plus dedupe configuration; needs Angelo's Workbooks admin |
| CRM plus email | Serverless relay posting to Workbooks and emailing | Best of both | A function to host and maintain; needs a hosting account |
| Other form services (Formspree, Basin, Web3Forms) | Endpoint swap | Dashboards, spam filtering | All require creating an account or obtaining a key |
