"use client";
import { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { Field, Input, Select, Textarea, Checkbox, Fieldset } from "./Field";
import { ErrorSummary } from "./ErrorSummary";
import { FormStatus } from "./FormStatus";
import { useLeadForm, type Errors } from "./useLeadForm";
import { emailRe, validPhone, isFreeMail, classifyTerritory } from "./submit";
import * as o from "./options";
import { allCounties } from "@/lib/regions";
import { site, telHref } from "@/lib/site";
import styles from "./Form.module.css";

const labels: Record<string, string> = {
  name: "Name", organization: "Organization", email: "Business email", phone: "Phone", address: "Facility address", county: "County", state: "State",
  facility_type: "Facility type", pool_count: "Number of pools", largest_pool_volume: "Largest pool volume", current_controller: "Current controller",
  current_feed: "Current chemical-feed system", primary_problem: "Primary problem", project_stage: "Project stage", timing: "Desired timing", request_type: "Request type",
  details: "Details", consent: "Consent",
};

function validate(v: Record<string, string>): Errors {
  const e: Errors = {};
  if (!v.name) e.name = "Enter your name.";
  if (!v.organization) e.organization = "Enter the organization or facility name.";
  if (!v.email) e.email = "Enter a business email address."; else if (!emailRe.test(v.email)) e.email = "Enter a valid email address (name@organization.org).";
  if (!v.phone) e.phone = "Enter a phone number so we can reach you."; else if (!validPhone(v.phone)) e.phone = "Enter a 10-digit phone number.";
  if (!v.state) e.state = "Select the state.";
  if (v.state === "NY" && !v.county) e.county = "Select the New York county of the facility.";
  if (!v.facility_type) e.facility_type = "Select the facility type.";
  if (!v.request_type) e.request_type = "Select what you need.";
  if (!v.primary_problem) e.primary_problem = "Select the primary problem or goal.";
  if (!v.consent) e.consent = "Please confirm you agree to be contacted about this request.";
  return e;
}

const NY_COUNTIES = allCounties.map((c) => ({ value: c.county, label: c.excluded ? `${c.county} (New York City)` : `${c.county} — ${c.region}` }));

export function AssessmentForm({ defaultRequest, defaultProduct, context = {}, compact = false }: { defaultRequest?: string; defaultProduct?: string; context?: Record<string, string>; compact?: boolean }) {
  const intentMeta = (defaultRequest && o.intents[defaultRequest]) || o.intents.assessment;
  const { formRef, errors, result, busy, attempted, onStart, onBlur, onSubmit } = useLeadForm({ endpoint: site.formEndpoint, formType: "assessment", validate, startEvent: "assessment_form_start", submitEvent: "assessment_form_submit", errorEvent: "assessment_form_error", analyticsFields: ["facility_type", "county", "request_type", "project_stage", "timing", "product_interest", "territory_status", "category_context", "problem_context", "manufacturer_context", "availability_status", "search_query"] });
  const [state, setState] = useState("NY");
  const [county, setCounty] = useState("");
  const [facility, setFacility] = useState("");
  const [email, setEmail] = useState("");
  const territory = classifyTerritory(state, county);
  const residential = facility.startsWith("Residential");

  return (
    <form ref={formRef} className={styles.form} onSubmit={onSubmit} onFocus={onStart} onBlur={onBlur} noValidate aria-describedby="assessment-intro">
      <noscript><p className={styles.hint}>This form needs JavaScript to submit. If it is not working, call <a href={telHref(site.phone)}>{site.phone}</a> or email <a href={`mailto:${site.email}`}>{site.email}</a>.</p></noscript>
      <input type="hidden" name="product_interest_context" defaultValue={defaultProduct ?? ""} />
      <input type="hidden" name="category_context" defaultValue={context.category ?? ""} />
      <input type="hidden" name="problem_context" defaultValue={context.problem ?? ""} />
      <input type="hidden" name="facility_context" defaultValue={context.facility ?? ""} />
      <input type="hidden" name="source_page" defaultValue={context.source_page ?? ""} />
      <input type="hidden" name="campaign" defaultValue={context.campaign ?? ""} />
      <input type="hidden" name="search_query" defaultValue={context.search_query ?? ""} />
      <input type="hidden" name="availability_status" defaultValue={context.availability ?? ""} />
      <input type="hidden" name="manufacturer_context" defaultValue={context.manufacturer ?? ""} />
      <div className={styles.honeypot} aria-hidden="true"><label htmlFor="website_url">Leave this field empty</label><input id="website_url" name="website_url" tabIndex={-1} autoComplete="off" /></div>

      <FormStatus result={result} formLabel="assessment request" />
      {attempted && <ErrorSummary errors={errors} labels={labels} />}

      <Fieldset legend="Who to contact">
        <Field id="name" label="Name" required error={errors.name}><Input id="name" autoComplete="name" required error={errors.name} /></Field>
        <Field id="organization" label="Organization or facility" required error={errors.organization}><Input id="organization" autoComplete="organization" required error={errors.organization} /></Field>
        <Field id="email" label="Business email" required error={errors.email} hint={email && isFreeMail(email) ? "This looks like a personal email address. A business or institutional address helps us route your request; personal addresses are still accepted." : undefined}>
          <Input id="email" type="email" autoComplete="email" inputMode="email" required error={errors.email} onChange={(e) => setEmail(e.target.value)} />
        </Field>
        <Field id="phone" label="Phone" required error={errors.phone}><Input id="phone" type="tel" autoComplete="tel" inputMode="tel" required error={errors.phone} /></Field>
        {!compact && <Field id="title" label="Title or role"><Input id="title" autoComplete="organization-title" placeholder="e.g., Director of Facilities, Aquatics Director" /></Field>}
      </Fieldset>

      <Fieldset legend="Facility location" hint="FreyTech serves New York State. Facilities elsewhere can still submit; we will tell you honestly whether we can help or refer you.">
        {!compact && <Field id="address" label="Facility address" className={styles.span2}><Input id="address" autoComplete="street-address" placeholder="Street, city, ZIP" /></Field>}
        <Field id="state" label="State" required error={errors.state}>
          <Select id="state" options={o.states} defaultValue="NY" required error={errors.state} onChange={(e) => setState(e.target.value)} placeholder="Select state" />
        </Field>
        {state === "NY" && (
          <Field id="county" label="New York county" required error={errors.county}>
            <Select id="county" options={NY_COUNTIES} required error={errors.county} onChange={(e) => setCounty(e.target.value)} placeholder="Select county" />
          </Field>
        )}
        {territory === "nyc" && (
          <p className={[styles.routing, styles.span2].join(" ")} role="status">
            <strong>New York City coverage.</strong> {county} County is within the five boroughs. FreyTech covers New York City, and work there is scheduled through our local coverage for the area, so lead times can differ from upstate. Send the form and we will confirm specifics.
          </p>
        )}
        {territory === "out_of_state" && (
          <p className={[styles.routing, styles.span2].join(" ")} role="status">
            <strong>Outside our primary territory.</strong> FreyTech focuses on New York State. You may still submit this form and we will respond honestly about whether we can help.
          </p>
        )}
      </Fieldset>

      {!compact && <Fieldset legend="Facility and current system" hint="Approximate answers are fine. This lets a specialist prepare before contacting you.">
        <Field id="facility_type" label="Facility type" required error={errors.facility_type}>
          <Select id="facility_type" options={o.facilityTypes} required error={errors.facility_type} onChange={(e) => setFacility(e.target.value)} />
        </Field>
        {residential && (
          <p className={[styles.routing, styles.span2].join(" ")} role="status">
            <strong>Residential pools:</strong> FreyTech works exclusively with commercial and institutional aquatic facilities and does not sell or service residential pool equipment. Please contact a local residential pool company. You may still send this form, but we will not be able to assist.
          </p>
        )}
        <Field id="water_feature_type" label="Pool or water-feature type"><Select id="water_feature_type" options={o.waterFeatureTypes} /></Field>
        <Field id="pool_count" label="Number of pools / bodies of water"><Select id="pool_count" options={o.poolCounts} /></Field>
        <Field id="largest_pool_volume" label="Approximate largest-pool volume"><Select id="largest_pool_volume" options={o.poolVolumes} /></Field>
        <Field id="current_controller" label="Current chemical controller"><Select id="current_controller" options={o.controllers} /></Field>
        <Field id="current_feed" label="Current chemical-feed system"><Select id="current_feed" options={o.feeders} /></Field>
        {null}
        <Field id="existing_equipment" label="Existing equipment to replace or match" className={styles.span2} hint="Make, model, and serial number if you have them. A photo of the nameplate can be described here and shared when we reply."><Input id="existing_equipment" defaultValue={context.existing_equipment ?? ""} placeholder="e.g., Strantrol System 5, Stenner pump, Paco pump model…" /></Field>
      </Fieldset>}

      <Fieldset legend="Your request">
        {compact && <Field id="facility_type" label="Facility type" required error={errors.facility_type}><Select id="facility_type" options={o.facilityTypes} required error={errors.facility_type} onChange={(e) => setFacility(e.target.value)} /></Field>}
        <Field id="request_type" label="What do you need?" required error={errors.request_type}>
          <Select id="request_type" options={o.requestTypes} defaultValue={defaultRequest ?? ""} required error={errors.request_type} />
        </Field>
        <Field id="product_interest" label="Product or system of interest"><Input id="product_interest" defaultValue={defaultProduct ?? context.search_query ?? ""} placeholder="e.g., BECSys5, Pulsar Precision 30, filtration" /></Field>
        {!compact && <Field id="manufacturer" label="Manufacturer, if known"><Input id="manufacturer" defaultValue={context.manufacturer ?? ""} placeholder="e.g., BECS, Pulsar, Stenner, Lochinvar" /></Field>}
        {(defaultRequest === "document") && <Field id="requested_document" label="Document requested" className={styles.span2}><Input id="requested_document" defaultValue={context.requested_document ?? ""} placeholder="e.g., BECSys5 Technical Data Sheet" /></Field>}
        <Field id="primary_problem" label="Primary problem or goal" required error={errors.primary_problem}><Select id="primary_problem" options={o.primaryProblems} required error={errors.primary_problem} /></Field>
        <Field id="preferred_contact" label="Preferred contact method"><Select id="preferred_contact" options={o.contactMethods} /></Field>
        {compact && <input type="hidden" name="water_feature_type" value="" />}
        {!compact && <Field id="project_stage" label="Project stage"><Select id="project_stage" options={o.projectStages} /></Field>}
        {!compact && <Field id="timing" label="Desired timing"><Select id="timing" options={o.timings} /></Field>}
        <Field id="details" label="Details" className={styles.span2} hint="Helpful: controller model and age, feeder type, chemical form, recent problems, upcoming renovation scope, and who else is involved (engineer, consultant, contractor).">
          <Textarea id="details" />
        </Field>
        {!compact && <Field id="documents" label="Photos or documents" className={styles.span2} hint="Secure upload is not enabled on this form. If you have equipment-room photos, drawings, or specifications, mention them here and we will provide a secure way to share them when we reply.">
          <Input id="documents" placeholder="e.g., 3 equipment-room photos and the 2018 pool renovation drawings" />
        </Field>}
      </Fieldset>

      <div className={styles.actions}>
        <Checkbox id="consent" required error={errors.consent} label={<>I agree that Frey Technologies may contact me by phone or email about this request. Information is used only to respond to and manage this inquiry; see the <Link href="/privacy/">privacy notice</Link>.</>} />
        <div className={styles.submitRow}>
          <Button type="submit" size="lg" disabled={busy}>{busy ? "Sending…" : intentMeta.button}</Button>
          <span className="note">Typical response: one business day. No sales pressure, no automated sequences.</span>
        </div>
        <p id="assessment-intro" className="note">Required fields are marked with an asterisk (*).</p>
      </div>
    </form>
  );
}
