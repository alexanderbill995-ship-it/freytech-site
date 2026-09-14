"use client";
import { useSearchParams } from "next/navigation";
import { AssessmentForm } from "@/components/forms/AssessmentForm";

/** Reads ?request= and ?product= so product and market pages can pre-select the request type. */
export function ContactFormClient() {
  const sp = useSearchParams();
  const request = sp.get("request") ?? undefined;
  const product = sp.get("product") ?? undefined;
  return <AssessmentForm defaultRequest={request} defaultProduct={product} />;
}
