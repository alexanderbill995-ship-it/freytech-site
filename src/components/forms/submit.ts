import { readAttribution } from "@/lib/analytics";
import { nycCounties, regionForCounty } from "@/lib/regions";

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

/**
 * Submits a form to the configured endpoint as JSON.
 * - Endpoint empty  -> returns "unconfigured" so the UI can show an honest
 *   development fallback (nothing is pretended to be delivered).
 * - Non-2xx / network error -> "error" with a user-facing message.
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
      body: JSON.stringify(payload),
    });
    if (!res.ok) return { status: "error", message: `The form service responded with status ${res.status}.` };
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
