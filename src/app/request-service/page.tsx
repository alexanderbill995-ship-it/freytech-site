import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ServiceForm } from "@/components/forms/ServiceForm";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Request Service: Pool Controller & Feeder Troubleshooting, Maintenance, Parts",
  description: "Request service for a commercial pool chemical controller or feed system in New York State outside NYC: troubleshooting, preventive maintenance, parts, training, commissioning, or warranty coordination.",
  path: "/request-service/",
});

export default function Page() {
  return (
    <>
      <PageHero
        eyebrow="Service request"
        title="Request service on an existing system"
        lede="For troubleshooting, preventive maintenance, parts, training, commissioning, service agreements, and warranty coordination. Planning an upgrade or a new system? Use the system assessment instead."
        crumbs={[{ name: "Service & Support", href: "/service-support/" }, { name: "Request Service", href: "/request-service/" }]}
        compact
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Pool closed or system down?</h2>
            <p>Call for the fastest response: <TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "service_aside" }} style={{ color: "#fff", fontWeight: 600 }}>{site.phone}</TrackedLink></p>
            <p style={{ marginTop: "0.5rem" }}>Support email: <TrackedLink href={`mailto:${site.supportEmail}`} event="email_click" payload={{ location: "service_aside" }} style={{ color: "#fff" }}>{site.supportEmail}</TrackedLink></p>
          </>
        }
      />
      <Section>
        <div className={p.split}>
          <div><ServiceForm /></div>
          <aside className={p.sticky} aria-label="Before you submit">
            <Callout title="Before you submit" tone="info">
              <ul style={{ paddingLeft: "1.1rem" }}>
                <li>Note any alarm text or codes shown on the controller.</li>
                <li>Take a manual DPD and pH reading to compare with the controller.</li>
                <li>Check chemical supply (tank level, hopper) and that the recirculation pump is running.</li>
                <li>Have the controller and feeder model and serial numbers handy if you can.</li>
              </ul>
              <p>See <Link href="/resources/controller-alarm-triage/">reading a controller alarm</Link> for a triage sequence.</p>
            </Callout>
            <Callout title="Not an emergency line" tone="warn">
              <p>This form is reviewed during business hours. For a pool closure or a safety concern, call. For a chemical exposure or spill emergency, contact emergency services first.</p>
            </Callout>
          </aside>
        </div>
      </Section>
    </>
  );
}
