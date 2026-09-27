/**
 * Central site configuration.
 * Values below were carried from the current freytech.org site (audited 2026-09-14)
 * or the strategy brief. Items marked CONFIRM must be verified by the owner
 * before launch — see docs/CONTENT-CONFIRMATION-CHECKLIST.md.
 */
export const site = {
  name: "Frey Technologies",
  shortName: "FreyTech",
  legalName: "Frey Technologies, Inc.", // CONFIRM exact legal entity name (current site footer)
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://freytech.org",
  tagline: "Commercial pool water chemistry, engineered for New York",
  territory: "Serving commercial aquatic facilities across New York State.",
  territoryShort: "New York State",
  phone: process.env.NEXT_PUBLIC_PHONE ?? "1-800-724-2770", // current site; CONFIRM still active
  fax: "1-315-986-1332", // current site; CONFIRM still in use
  email: process.env.NEXT_PUBLIC_EMAIL ?? "info@freytech.org", // current site; CONFIRM monitored
  supportEmail: process.env.NEXT_PUBLIC_SUPPORT_EMAIL ?? "support@freytech.org", // current site; CONFIRM monitored
  /** Physical office. Supplied by Angelo 2026-09-26, replacing the old Walworth address. */
  address: {
    street: "356 Macedon Center Road",
    city: "Fairport",
    region: "NY",
    postalCode: "14450",
    country: "US",
    county: "Monroe",
  },
  /** Remit-to / billing address. Distinct from the physical office. Supplied by Angelo 2026-09-26. */
  remitTo: {
    poBox: "P.O. Box 486",
    city: "Macedon",
    region: "NY",
    postalCode: "14502",
    country: "US",
  },
  hours: process.env.NEXT_PUBLIC_HOURS ?? "", // Not stated on current site; CONFIRM and set NEXT_PUBLIC_HOURS
  owner: { name: "Angelo DiCiaccio", title: "President" },
  /** Current site says the company was purchased in 1987. CONFIRM before publishing a year. */
  since: "1987",
  /** Configured form endpoints (e.g. Formspree, Netlify, Workbooks web-to-lead). Empty = development fallback. */
  formEndpoint: process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  serviceEndpoint: process.env.NEXT_PUBLIC_SERVICE_FORM_ENDPOINT ?? process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  specEndpoint: process.env.NEXT_PUBLIC_SPEC_FORM_ENDPOINT ?? process.env.NEXT_PUBLIC_FORM_ENDPOINT ?? "",
  /** Internal only: show amber "confirm" markers next to facts still awaiting owner sign-off. Off unless NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=true. */
  showConfirmFlags: process.env.NEXT_PUBLIC_SHOW_CONFIRM_FLAGS === "true",
  /** "generic" hides internal note text behind a neutral "Under review" marker (public previews). */
  confirmStyle: process.env.NEXT_PUBLIC_CONFIRM_STYLE ?? "full",
  /** Public review preview mode (github.io hosting): noindex, preview-tagged form subjects. */
  isPreview: process.env.NEXT_PUBLIC_PREVIEW === "true",
  /** Show the "website concept — private client review" banner. Off unless NEXT_PUBLIC_REVIEW_BANNER=true. */
  showBanner: process.env.NEXT_PUBLIC_REVIEW_BANNER === "true",
};

export function telHref(phone: string) {
  const digits = phone.replace(/\D/g, "");
  return "tel:+" + (digits.startsWith("1") ? digits : "1" + digits);
}
