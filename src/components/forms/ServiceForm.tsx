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
import { site, telHref } from "@/lib/site";
import styles from "./Form.module.css";

const labels: Record<string, string> = { name: "Name", organization: "Facility", email: "Email", phone: "Phone", county: "County", urgency: "Urgency", service_type: "Service needed", equipment: "Equipment", details: "Description", consent: "Consent" };

function validate(v: Record<string, string>): Errors {
  const e: Errors = {};
  if (!v.name) e.name = "Enter your name.";
  if (!v.organization) e.organization = "Enter the facility name.";
  if (!v.phone) e.phone = "Enter a phone number. Service requests are confirmed by phone."; else if (!validPhone(v.phone)) e.phone = "Enter a 10-digit phone number.";
  if (!v.email) e.email = "Enter an email address."; else if (!emailRe.test(v.email)) e.email = "Enter a valid email address.";
  if (!v.county) e.county = "Select the facility's county.";
  if (!v.urgency) e.urgency = "Tell us how urgent this is.";
  if (!v.service_type) e.service_type = "Select the type of service.";
  if (!v.details) e.details = "Describe the problem or request.";
  if (!v.consent) e.consent = "Please confirm you agree to be contacted.";
  return e;
}

const NY_COUNTIES = allCounties.map((c) => ({ value: c.county, label: c.excluded ? `${c.county} (New York City)` : `${c.county} — ${c.region}` }));

export function ServiceForm() {
  const { formRef, errors, result, busy, attempted, onStart, onBlur, onSubmit } = useLeadForm({ endpoint: site.serviceEndpoint, formType: "service", validate, startEvent: "service_request_start", submitEvent: "service_request_submit", analyticsFields: ["urgency", "service_type", "county", "existing_customer"] });
  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} onFocus={onStart} onBlur={onBlur} noValidate>
      <noscript><p className={styles.hint}>This form needs JavaScript to submit. If it is not working, call <a href={telHref(site.phone)}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p></noscript>
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="website_url">Leave this field empty</label><input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" /></div>
      <FormStatus result={result} formLabel="service request" />
      {attempted && <ErrorSummary errors={errors} labels={labels} />}

      <Fieldset legend="Contact">
        <Field id="name" label="Name" required error={errors.name}><Input id="name" autoComplete="name" required error={errors.name} /></Field>
        <Field id="phone" label="Phone" required error={errors.phone}><Input id="phone" type="tel" inputMode="tel" autoComplete="tel" required error={errors.phone} /></Field>
        <Field id="email" label="Email" required error={errors.email}><Input id="email" type="email" inputMode="email" autoComplete="email" required error={errors.email} /></Field>
        <Field id="organization" label="Facility name" required error={errors.organization}><Input id="organization" autoComplete="organization" required error={errors.organization} /></Field>
        <Field id="address" label="Facility address"><Input id="address" autoComplete="street-address" /></Field>
        <Field id="county" label="County" required error={errors.county}><Select id="county" options={NY_COUNTIES} required error={errors.county} /></Field>
        <input type="hidden" name="state" value="NY" />
      </Fieldset>

      <Fieldset legend="What's happening">
        <Field id="urgency" label="Urgency" required error={errors.urgency}><Select id="urgency" options={o.serviceUrgency} required error={errors.urgency} /></Field>
        <Field id="service_type" label="Service needed" required error={errors.service_type}><Select id="service_type" options={o.serviceTypes} required error={errors.service_type} /></Field>
        <Field id="equipment" label="Equipment involved" hint="Controller and feeder make/model, and serial number if handy."><Input id="equipment" placeholder="e.g., BECSys5, Pulsar Precision, installed 2016" /></Field>
        <Field id="existing_customer" label="Has FreyTech serviced this facility before?"><Select id="existing_customer" options={["Yes", "No", "Not sure"]} /></Field>
        <Field id="details" label="Describe the problem or request" required className={styles.span2} error={errors.details} hint="Alarms shown, readings, what changed, and what you have already tried.">
          <Textarea id="details" required error={errors.details} />
        </Field>
      </Fieldset>

      <div className={styles.actions}>
        <Checkbox id="consent" required error={errors.consent} label={<>I agree that Frey Technologies may contact me about this service request. See the <Link href="/privacy/">privacy notice</Link>.</>} />
        <div className={styles.submitRow}>
          <Button type="submit" size="lg" disabled={busy}>{busy ? "Sending…" : "Send Service Request"}</Button>
          {site.phone && <span className="note">Pool closed or system down? Call {site.phone} for the fastest response.</span>}
        </div>
      </div>
    </form>
  );
}
