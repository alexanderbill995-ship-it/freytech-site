"use client";
import { useSearchParams } from "next/navigation";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { intents } from "@/components/forms/options";

/**
 * Reads context from the URL so product, category, solution, and market pages can
 * pre-select the request type and pass page/product/category/campaign context into
 * the submission (mapped in docs/WORKBOOKS-CRM-FIELD-MAP.md).
 */
export function ContactFormClient({ compact = false }: { compact?: boolean } = {}) {
  const sp = useSearchParams();
  const intent = sp.get("intent") ?? sp.get("request") ?? (compact ? "angelo" : undefined);
  const product = sp.get("product") ?? undefined;
  const context = {
    category: sp.get("category") ?? "",
    problem: sp.get("problem") ?? "",
    facility: sp.get("facility") ?? "",
    campaign: sp.get("utm_campaign") ?? "",
    search_query: sp.get("search_query") ?? sp.get("q") ?? "",
    availability: sp.get("availability") ?? "",
    manufacturer: sp.get("manufacturer") ?? "",
    existing_equipment: sp.get("existing_equipment") ?? "",
    requested_document: sp.get("document") ?? "",
    source_page: sp.get("from") ?? "", // optional explicit source; referrer and landing page come from session attribution
  };
  return <AssessmentForm key={`${intent}-${product}`} defaultRequest={intent && intents[intent] ? intent : undefined} defaultProduct={product} context={context} compact={compact} />;
}

export function ContactHeading() {
  const sp = useSearchParams();
  const intent = sp.get("intent") ?? sp.get("request") ?? "assessment";
  const meta = intents[intent] ?? intents.assessment;
  const product = sp.get("product");
  return (
    <>
      <h1 style={{ color: "var(--white)", fontSize: "var(--text-3xl)" }}>{meta.title}{product ? `: ${product}` : ""}</h1>
      <p style={{ fontSize: "var(--text-md)", lineHeight: "var(--leading-relaxed)", color: "var(--fg-on-dark-muted)", maxWidth: "60ch" }}>{meta.lede}</p>
    </>
  );
}
