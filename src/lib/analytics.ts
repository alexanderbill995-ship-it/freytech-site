/**
 * Analytics event layer.
 * Pushes structured events to window.dataLayer so a tag manager (GTM, GA4,
 * Plausible, etc.) can be connected later WITHOUT changing component code.
 * No vendor script is installed by this site. Nothing is transmitted until
 * a tag manager is configured and consent handling is in place.
 *
 * Event names are documented in docs/ANALYTICS-EVENT-MAP.md.
 */
export type AnalyticsEvent =
  | "assessment_form_start"
  | "assessment_form_submit"
  | "assessment_form_error"
  | "service_request_start"
  | "service_request_submit"
  | "spec_request_start"
  | "spec_request_submit"
  | "phone_click"
  | "email_click"
  | "document_download"
  | "case_study_view"
  | "becsys5_engagement"
  | "pulsar_engagement"
  | "cta_click"
  | "homepage_cta"
  | "product_search"
  | "search_result_select"
  | "search_no_results"
  | "filter_used"
  | "manufacturer_view"
  | "product_view"
  | "availability_request"
  | "resource_request";

export type EventPayload = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Array<Record<string, unknown>>;
  }
}

export function track(event: AnalyticsEvent, payload: EventPayload = {}) {
  if (typeof window === "undefined") return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event,
    page_path: window.location.pathname,
    ...payload,
  });
  if (process.env.NODE_ENV !== "production") {
    // Visible in the browser console during development only.
    console.debug("[analytics]", event, payload);
  }
}

/** Reads UTM + landing-page attribution, persisted for the session so forms can carry it. */
export function captureAttribution() {
  if (typeof window === "undefined") return;
  try {
    const key = "ft_attribution";
    if (sessionStorage.getItem(key)) return;
    const p = new URLSearchParams(window.location.search);
    const attribution = {
      landing_page: window.location.pathname,
      referrer: document.referrer || "",
      utm_source: p.get("utm_source") || "",
      utm_medium: p.get("utm_medium") || "",
      utm_campaign: p.get("utm_campaign") || "",
      utm_term: p.get("utm_term") || "",
      utm_content: p.get("utm_content") || "",
      captured_at: new Date().toISOString(),
    };
    sessionStorage.setItem(key, JSON.stringify(attribution));
  } catch {
    /* storage unavailable: attribution simply isn't captured */
  }
}

export function readAttribution(): Record<string, string> {
  if (typeof window === "undefined") return {};
  try {
    const raw = sessionStorage.getItem("ft_attribution");
    return raw ? (JSON.parse(raw) as Record<string, string>) : {};
  } catch {
    return {};
  }
}
