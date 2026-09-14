"use client";
import { useCallback, useRef, useState, type FormEvent } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";
import { submitLead, type SubmitResult } from "./submit";

export type Errors = Record<string, string | undefined>;
type Validator = (values: Record<string, string>) => Errors;

export function useLeadForm(opts: { endpoint: string; formType: string; validate: Validator; startEvent: AnalyticsEvent; submitEvent: AnalyticsEvent; errorEvent?: AnalyticsEvent; analyticsFields?: string[] }) {
  const [errors, setErrors] = useState<Errors>({});
  const [result, setResult] = useState<SubmitResult | null>(null);
  const [busy, setBusy] = useState(false);
  const [attempted, setAttempted] = useState(false);
  const started = useRef(false);
  const formRef = useRef<HTMLFormElement>(null);

  const onStart = useCallback(() => {
    if (started.current) return;
    started.current = true;
    track(opts.startEvent, { form_type: opts.formType });
  }, [opts.startEvent, opts.formType]);

  const read = useCallback((): Record<string, string> => {
    const fd = new FormData(formRef.current!);
    const out: Record<string, string> = {};
    fd.forEach((v, k) => { out[k] = typeof v === "string" ? v.trim() : ""; });
    // checkboxes
    formRef.current!.querySelectorAll<HTMLInputElement>("input[type=checkbox]").forEach((c) => { out[c.name] = c.checked ? "yes" : ""; });
    return out;
  }, []);

  const onBlur = useCallback(() => {
    if (!attempted || !formRef.current) return;
    setErrors(opts.validate(read()));
  }, [attempted, opts, read]);

  const onSubmit = useCallback(async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!formRef.current) return;
    setAttempted(true);
    const values = read();
    if (values.website_url) { // honeypot filled: silently ignore
      setResult({ status: "sent", reference: "FT-OK", payload: {} });
      return;
    }
    delete values.website_url;
    const errs = opts.validate(values);
    setErrors(errs);
    const firstKey = Object.keys(errs).find((k) => errs[k]);
    if (firstKey) {
      requestAnimationFrame(() => document.getElementById("error-summary")?.focus());
      if (opts.errorEvent) track(opts.errorEvent, { form_type: opts.formType, fields: Object.keys(errs).filter((k) => errs[k]).join(",") });
      return;
    }
    setBusy(true);
    const res = await submitLead(opts.endpoint, opts.formType, values);
    setBusy(false);
    setResult(res);
    if (res.status === "sent" || res.status === "unconfigured") {
      const extra: Record<string, string> = {};
      (opts.analyticsFields ?? []).forEach((f) => { if (res.payload[f]) extra[f] = res.payload[f]; });
      track(opts.submitEvent, { form_type: opts.formType, delivery: res.status, ...extra });
      if (res.status === "sent") formRef.current.reset();
    }
    requestAnimationFrame(() => document.getElementById("form-status")?.focus());
  }, [opts, read]);

  return { formRef, errors, result, busy, attempted, onStart, onBlur, onSubmit };
}
