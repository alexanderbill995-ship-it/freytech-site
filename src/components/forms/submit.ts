import { readAttribution } from "@/lib/analytics";
import { nycCounties, regionForCounty } from "@/lib/regions";
import { site } from "@/lib/site";

export type SubmitResult =
  | { status: "sent"; reference: string; payload: Record<string, string> }
  | { status: "unconfigured"; payload: Record<string, string> }
  | { status: "error"; message: string };

/** Territory classification used to route and label the lead. */
export function classifyTerritory(state: string, county: string): "primary" | "nyc" | "out_of_state" | "unknown" {
  if (state && state !== "NY") return "out_of_state";
  if (!county) return "unknown";
  if (nycCounties.includes(county)) return "nyc";
  return regionForCounty(county) ? "primary" : "unknown";
}

/** Fields understood by the delivery service (FormSubmit AJAX). Ignored by any other JSON endpoint. */
function deliveryFields(formType: string, data: Record<string, string>): Record<string, string> {
  const who = [data.organization, data.firm, data.name].filter(Boolean).join(" — ");
  const label = formType === "service" ? "Service request" : formType === "specification" ? "Specification assistance request" : "Facility assessment request";
  return {
    _subject: `${site.isPreview ? "[Website preview] " : ""}Website ${label}: ${who || "new lead"}`,
    _template: "table",
    _captcha: "false",
    ...(data.email && emailRe.test(data.email) ? { _replyto: data.email } : {}),
  };
}

/** True when a JSON body from the delivery service reports failure (FormSubmit answers HTTP 200 with success:"false" before the recipient activates the form). */
function serviceRejected(body: unknown): string | null {
  if (!body || typeof body !== "object") return null;
  const b = body as { success?: unknown; message?: unknown };
  if (b.success === false || b.success === "false") return typeof b.message === "string" ? b.message : "The form service rejected the submission.";
  return null;
}

/**
 * Submits a form to the configured endpoint as JSON.
 * - Endpoint empty  -> returns "unconfigured" so the UI can show an honest
 *   development fallback (nothing is pretended to be delivered).
 * - Non-2xx / network error / service-reported failure -> "error" with a
 *   user-facing message. A submission is reported as sent only when the
 *   service answered 2xx and did not report a failure in its JSON body.
 * Attribution and territory routing are appended for CRM mapping
 * (see docs/WORKBOOKS-CRM-FIELD-MAP.md).
 */
export async function submitLead(endpoint: string, formType: string, data: Record<string, string>): Promise<SubmitResult> {
  const attribution = readAttribution();
  const county = data.county ?? "";
  const state = data.state ?? "NY";
  const region = regionForCounty(county);
  const payload: Record<string, string> = {
    form_type: formType,
    ...data,
    territory_status: classifyTerritory(state, county),
    ny_region: region ? region.region : "",
    lead_source: "Website",
    submitted_at: new Date().toISOString(),
    page_url: typeof window !== "undefined" ? window.location.href : "",
    ...attribution,
  };
  if (!endpoint) return { status: "unconfigured", payload };
  try {
    const res = await fetch(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify({ ...deliveryFields(formType, data), ...payload }),
    });
    if (!res.ok) return { status: "error", message: `The form service responded with status ${res.status}.` };
    let body: unknown = null;
    try { body = await res.clone().json(); } catch { body = null; }
    // FormSubmit always answers JSON; a 2xx without a parseable body is inconclusive, not a delivery.
    const isFormSubmit = /formsubmit\.co/i.test(endpoint);
    if (isFormSubmit && (body === null || (body as { success?: unknown }).success === undefined)) return { status: "error", message: "The form service gave an unexpected reply, so we cannot confirm delivery." };
    const rejected = serviceRejected(body);
    if (rejected) {
      const setup = /activat/i.test(rejected);
      return { status: "error", message: setup ? "Form delivery is still being set up on our side, so your request was not delivered." : `The form service did not accept the submission (${rejected}).` };
    }
    const reference = `FT-${Date.now().toString(36).toUpperCase()}`;
    return { status: "sent", reference, payload };
  } catch {
    return { status: "error", message: "We could not reach the form service. Check your connection and try again." };
  }
}

export const emailRe = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;
export const freeMailDomains = ["gmail.com", "yahoo.com", "hotmail.com", "outlook.com", "aol.com", "icloud.com", "me.com", "live.com", "msn.com", "protonmail.com"];
export function isFreeMail(email: string) {
  const d = email.split("@")[1]?.toLowerCase();
  return !!d && freeMailDomains.includes(d);
}
export function normalizePhone(p: string) { return p.replace(/[^\d+]/g, ""); }
export function validPhone(p: string) { const d = p.replace(/\D/g, ""); return d.length >= 10 && d.length <= 11; }
