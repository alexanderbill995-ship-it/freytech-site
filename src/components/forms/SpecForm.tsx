"use client";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea, Checkbox, Fieldset } from "./Field";
import { ErrorSummary } from "./ErrorSummary";
import { FormStatus } from "./FormStatus";
import { useLeadForm, type Errors } from "./useLeadForm";
import { emailRe, validPhone } from "./submit";
import * as o from "./options";
import { allCounties } from "@/lib/regions";
import { site } from "@/lib/site";
import styles from "./Form.module.css";

const labels: Record<string, string> = { name: "Name", firm: "Firm", email: "Email", phone: "Phone", role: "Role", project_name: "Project", county: "Project county", need: "Assistance needed", details: "Details", consent: "Consent" };

function validate(v: Record<string, string>): Errors {
  const e: Errors = {};
  if (!v.name) e.name = "Enter your name.";
  if (!v.firm) e.firm = "Enter your firm.";
  if (!v.email) e.email = "Enter your email."; else if (!emailRe.test(v.email)) e.email = "Enter a valid email address.";
  if (v.phone && !validPhone(v.phone)) e.phone = "Enter a 10-digit phone number.";
  if (!v.role) e.role = "Select your role.";
  if (!v.project_name) e.project_name = "Enter a project name or description.";
  if (!v.county) e.county = "Select the project county.";
  if (!v.need) e.need = "Select the type of assistance.";
  if (!v.consent) e.consent = "Please confirm you agree to be contacted.";
  return e;
}

const NY_COUNTIES = allCounties.map((c) => ({ value: c.county, label: c.excluded ? `${c.county} (New York City)` : `${c.county} — ${c.region}` }));

export function SpecForm() {
  const { formRef, errors, result, busy, attempted, onStart, onBlur, onSubmit } = useLeadForm({ endpoint: site.specEndpoint, formType: "specification", validate, startEvent: "spec_request_start", submitEvent: "spec_request_submit", analyticsFields: ["role", "need", "county", "project_stage"] });
  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} onFocus={onStart} onBlur={onBlur} noValidate>
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="website_url">Leave this field empty</label><input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" /></div>
      <FormStatus result={result} formLabel="specification assistance request" />
      {attempted && <ErrorSummary errors={errors} labels={labels} />}

      <Fieldset legend="Design team contact">
        <Field id="name" label="Name" required error={errors.name}><Input id="name" autoComplete="name" required error={errors.name} /></Field>
        <Field id="firm" label="Firm" required error={errors.firm}><Input id="firm" autoComplete="organization" required error={errors.firm} /></Field>
        <Field id="email" label="Email" required error={errors.email}><Input id="email" type="email" inputMode="email" autoComplete="email" required error={errors.email} /></Field>
        <Field id="phone" label="Phone" error={errors.phone}><Input id="phone" type="tel" inputMode="tel" autoComplete="tel" error={errors.phone} /></Field>
        <Field id="role" label="Your role" required error={errors.role}><Select id="role" options={o.specRoles} required error={errors.role} /></Field>
      </Fieldset>

      <Fieldset legend="Project">
        <Field id="project_name" label="Project name or description" required error={errors.project_name} className={styles.span2}><Input id="project_name" required error={errors.project_name} placeholder="e.g., High school natatorium renovation" /></Field>
        <Field id="county" label="Project county (New York)" required error={errors.county}><Select id="county" options={NY_COUNTIES} required error={errors.county} /></Field>
        <input type="hidden" name="state" value="NY" />
        <Field id="project_stage" label="Project stage"><Select id="project_stage" options={["Feasibility / study", "Schematic design", "Design development", "Construction documents", "Bidding", "Construction / submittals"]} /></Field>
        <Field id="facility_type" label="Facility type"><Select id="facility_type" options={o.facilityTypes.filter((t) => !t.startsWith("Residential"))} /></Field>
        <Field id="largest_pool_volume" label="Largest pool volume"><Select id="largest_pool_volume" options={o.poolVolumes} /></Field>
        <Field id="need" label="Assistance needed" required error={errors.need}><Select id="need" options={o.specNeeds} required error={errors.need} /></Field>
        <Field id="deadline" label="Needed by"><Input id="deadline" type="date" /></Field>
        <Field id="details" label="Details" className={styles.span2} hint="Bodies of water, volumes, turnover, chemical program, controller and feeder preferences, BMS integration, and any existing basis of design."><Textarea id="details" /></Field>
      </Fieldset>

      <div className={styles.actions}>
        <Checkbox id="consent" required error={errors.consent} label={<>I agree that Frey Technologies may contact me about this project. See the <Link href="/privacy/">privacy notice</Link>.</>} />
        <div className={styles.submitRow}>
          <Button type="submit" size="lg" disabled={busy}>{busy ? "Sending…" : "Request Specification Assistance"}</Button>
        </div>
      </div>
    </form>
  );
}
