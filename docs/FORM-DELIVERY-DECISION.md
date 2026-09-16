# Form Delivery: Decision Pending

Forms are complete (interface, validation, context collection, Workbooks-ready payload, accessibility, responsive behavior) but **not connected**. In the public review preview they display "Form delivery is not connected in this preview" after an attempted submission; nothing is transmitted or stored and no false success is shown.

## Options (choose one during implementation)
| Option | How | Pros | Cons |
|---|---|---|---|
| **Workbooks CRM** | Workbooks Web-to-Lead / Web Key endpoint set as `NEXT_PUBLIC_FORM_ENDPOINT`; fields mapped per WORKBOOKS-CRM-FIELD-MAP.md | Leads land directly as Organization/Person/Opportunity or Case with context | Requires the Workbooks edition/module that supports web forms; dedupe rules must be configured |
| **Email** | Form service (e.g., Formspree) or a small serverless relay emailing info@ / support@ | Fast; no CRM configuration | Manual re-keying into Workbooks; attachments limited |
| **CRM plus email** | Serverless relay that posts to Workbooks and sends a notification email | Best of both; single approval owner sees every lead | Small function to host and maintain |
| **Temporary form-delivery service** | Formspree/Basin endpoint now, swap to Workbooks later | Zero code change to switch (env var) | Interim data lives in a third-party service |

## Payload
All forms POST JSON with the fields documented in WORKBOOKS-CRM-FIELD-MAP.md (including territory routing, product/category/manufacturer/problem/search context, availability status, UTM attribution, and consent). Switching delivery is an environment-variable change; the components do not change.
