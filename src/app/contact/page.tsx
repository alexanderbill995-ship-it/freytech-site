import type { Metadata } from "next";
import { Suspense } from "react";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ContactFormClient, ContactHeading } from "./ContactFormClient";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Request a Commercial Pool System Assessment | Contact FreyTech",
  description: "Request a commercial pool water-chemistry system assessment, discuss a modernization project, or speak with a commercial aquatic specialist. New York State.",
  path: "/contact/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Contact and assessment"
        title={<Suspense fallback={<h1 style={{ color: "var(--white)", fontSize: "var(--text-3xl)" }}>Request a commercial pool system assessment</h1>}><ContactHeading /></Suspense>}
        rawTitle
        crumbs={[{ name: "Contact & Assessment", href: "/contact/" }]}
        compact
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Other ways to reach us</h2>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li><TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "contact_aside" }} style={{ color: "#fff", fontWeight: 600 }}>{site.phone}</TrackedLink></li>
              <li><TrackedLink href={`mailto:${site.email}`} event="email_click" payload={{ location: "contact_aside" }} style={{ color: "#fff" }}>{site.email}</TrackedLink></li>
              <li style={{ marginTop: "0.5rem" }}>{site.address.street}<br />{site.address.city}, NY {site.address.postalCode}<br /><span style={{ opacity: 0.85 }}>{`${site.address.county} County`}</span></li>
              <li style={{ marginTop: "0.5rem" }}><span style={{ opacity: 0.85 }}>Remit / bill to:</span><br />{site.remitTo.poBox}<br />{site.remitTo.city}, NY {site.remitTo.postalCode}</li>
              {site.hours && <li style={{ marginTop: "0.5rem" }}>{site.hours}</li>}
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Existing system down? Use the <Link href="/request-service/" style={{ color: "var(--blue-400)" }}>service request</Link> instead.</p>
          </>
        }
      />
      <Section>
        <div className={p.split}>
          <div>
            <Suspense fallback={<AssessmentForm />}>
              <ContactFormClient />
            </Suspense>
          </div>
          <aside className={p.sticky} aria-label="What happens next">
            <div className={p.compareCol}>
              <p className={p.kicker}>What happens next</p>
              <ol style={{ paddingLeft: "1.1rem", fontSize: "var(--text-sm)", lineHeight: 1.7, marginTop: "var(--sp-3)" }}>
                <li>A specialist reviews your facility details, typically within one business day.</li>
                <li>We call or email to clarify scope, timing, and who should be involved.</li>
                <li>For most requests we schedule an on-site assessment and deliver a written findings summary with a recommended scope.</li>
              </ol>
            </div>
            <Callout title="Who this form is for" tone="info">
              <p>Commercial and institutional facilities in New York State. Residential pools are outside FreyTech&apos;s business. NYC and out-of-state facilities may submit; the form will flag them and we will respond honestly.</p>
            </Callout>
            <Callout title="Privacy" tone="warn">
              <p>Your information is used only to respond to and manage this request. FreyTech may record it in its customer relationship system for follow-up. See the <Link href="/privacy/">privacy notice</Link>.</p>
            </Callout>
          </aside>
        </div>
      </Section>
    </>
  );
}
