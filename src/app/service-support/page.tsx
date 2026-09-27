import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pool Chemical System Service & Support in New York",
  description: "System assessments, preventive maintenance, controller and feeder troubleshooting, replacement parts, operator training, commissioning, remote support, service agreements, and warranty coordination for commercial pools across New York State.",
  path: "/service-support/",
});

const services = [
  { title: "System assessments", text: "Documented review of controls, feed, sample loop, storage, and records with a recommended scope. The starting point for any upgrade.", href: "/contact/" },
  { title: "Preventive maintenance", text: "Scheduled visits for probe cleaning and calibration, flow-cell and feeder cleaning, chemistry review, and parts nearing service life." },
  { title: "Water-chemistry equipment service", text: "Repair and replacement on controllers, probes, flow cells, metering pumps, erosion feeders, and related loop components." },
  { title: "Controller and feeder troubleshooting", text: "Diagnosis of alarms, drift, feed problems, and communications issues, often beginning remotely through BECSys Live where installed." },
  { title: "Replacement parts", text: "Probes, flow-cell components, pump tubes and diaphragms, feeder wear parts, and controller modules." },
  { title: "Operator training", text: "On-site training at commissioning and refreshers after staff turnover, with written procedures left at the facility." },
  { title: "Commissioning", text: "Start-up, calibration, interlock and alarm verification, and a settings record for new or replaced equipment, including equipment we did not sell." },
  { title: "Remote support", text: "Phone and email support, and remote diagnostics for internet-connected BECSys controllers, reducing site visits and response time." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={serviceLd({ name: "Commercial Pool Water-Chemistry Equipment Service", serviceType: "Pool equipment maintenance and repair", description: metadata.description as string, path: "/service-support/" })} />
      <PageHero
        eyebrow="Service and support"
        title="Service and support for commercial pool chemistry systems"
        lede="FreyTech's own technicians install, commission, maintain, and repair chemical controllers and feed systems across New York State. Existing customers and facilities with equipment we did not install are both welcome."
        crumbs={[{ name: "Service & Support", href: "/service-support/" }]}
        actions={<><Button href="/request-service/" variant="onDark" size="lg">Request Service</Button>{site.phone && <Button href={telHref(site.phone)} variant="onDarkGhost" size="lg" icon={false}>Call {site.phone}</Button>}</>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Two ways in</h2>
            <ul>
              <li><strong>Something is wrong now:</strong> use the <Link href="/request-service/">service request</Link> or call. Pool closures get first priority.</li>
              <li><strong>Planning an upgrade:</strong> request a <Link href="/contact/">system assessment</Link> instead. Different form, different conversation.</li>
            </ul>
          </>
        }
      />

      <Section>
        <SectionHeader eyebrow="What we do" title="Service capabilities" />
        <div className={p.featureGrid}>
          {services.map((s) => (
            <div key={s.title} className={p.feature}><h3>{s.title}</h3><p>{s.text}</p>{s.href && <Link href={s.href} style={{ fontSize: "var(--text-sm)", fontWeight: 600 }}>Request an assessment</Link>}</div>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="agreements">
        <div className={p.split}>
          <div>
            <SectionHeader eyebrow="Service agreements" title="Maintenance programs matched to your facility" lede="Annual, quarterly, and monthly visit schedules are tailored to the number of bodies of water, equipment age, staffing, and season. Monthly programs are designed to keep a recreational water facility running smoothly and continuously." />
            <h3>Monthly maintenance program benefits</h3>
            <ul className={p.checkList} style={{ margin: "var(--sp-4) 0" }}>
              <li>Chemical tests and parts replacement on each visit</li>
              <li>Cleaning of chemical feed equipment</li>
              <li>Graph of the previous month&apos;s or quarter&apos;s chemical levels</li>
              <li>Phone consultation for pool problems between visits at no charge</li>
              <li>Chemical delivery</li>
              <li>More consistent chemistry through scheduled calibration and control</li>
            </ul>
            <p className={p.small}>Pricing is quoted per facility after an assessment.</p>
          </div>
          <div className={p.sticky}>
            <div className={p.compareCol}>
              <p className={p.kicker}>Choosing a cadence</p>
              <h3>Which schedule fits?</h3>
              <dl className={p.dl} style={{ marginTop: "var(--sp-3)" }}>
                <dt>Annual</dt><dd>Seasonal outdoor pools; start-up commissioning and shutdown, with phone support in season.</dd>
                <dt>Quarterly</dt><dd>Year-round single-pool facilities with a trained operator on staff.</dd>
                <dt>Monthly</dt><dd>Multi-pool facilities, high bather loads, therapy pools, or sites without a dedicated operator.</dd>
              </dl>
              <div className={p.actions}><Button href="/request-service/?type=agreement" size="sm">Ask about a service agreement</Button></div>
            </div>
          </div>
        </div>
      </Section>

      <Section id="warranty">
        <div className={p.splitEven}>
          <div>
            <h2>Warranty and RMA coordination</h2>
            <div className="prose" style={{ marginTop: "var(--sp-4)" }}>
              <p><Confirm note="Confirm this warranty commitment">All products sold and installed by Frey Technologies are covered by factory warranties, whose terms vary by manufacturer. Frey Technologies honors those warranties fully and works to provide the fastest applicable solution to warranty issues.</Confirm></p>
              <p><Confirm note="Confirm policy">Frey Technologies guarantees all labor for one year from initial installation on equipment installed by Frey Technologies personnel.</Confirm> Where products are replaced by the factory, labor for removal and reinstallation may be the customer&apos;s responsibility, as determined by a Frey Technologies representative.</p>
              <p><Confirm note="Confirm these warranty exclusions">Warranties do not cover cosmetic damage; damage from accident, misuse, or negligence; products or installations modified by anyone other than a Frey Technologies representative; or damage from improper operation, maintenance, or attempted repair by anyone other than Frey Technologies&apos; authorized representatives.</Confirm></p>
              <p><Confirm note="Confirm the RA return process is current">For warranty service, provide a report describing the claim and any malfunctions, and a copy of the invoice showing proof of purchase and date. Returned equipment is issued a Return Authorization (RA) number before shipment; write the RA number clearly on the package.</Confirm></p>
            </div>
          </div>
          <div>
            <Callout title="Manufacturer warranty terms we work with" tone="info">
              <p><strong>BECSys5 (BECS Technology):</strong> 5 years electronics; 2 years pH, ORP, and temperature sensors; 1 year optional sensors and flow cell, as published by BECS.</p>
              <p><strong>Pulsar Precision and Precision 30:</strong> 12 months from installation or 18 months from shipment, whichever is earlier; use of non-Pulsar briquettes voids the warranty, per the manufacturer&apos;s manuals.</p>
              <p>We assemble the RMA packet (invoice, serial numbers, photos, issue narrative) and coordinate with the manufacturer on your behalf.</p>
            </Callout>
            <div className={p.actions}>
              <Button href="/request-service/?type=warranty" variant="secondary">Start a warranty request</Button>
              {site.supportEmail && <TrackedLink href={`mailto:${site.supportEmail}`} event="email_click" payload={{ location: "service_warranty" }} className={p.small} style={{ alignSelf: "center" }}>{site.supportEmail}</TrackedLink>}
            </div>
          </div>
        </div>
      </Section>

      <CTABand source="service" title="Need service on an existing system?" text="Use the service request for troubleshooting, maintenance, parts, training, or warranty. For upgrades and new systems, request an assessment instead." primaryLabel="Request Service" primaryHref="/request-service/" secondaryLabel="Request a System Assessment" secondaryHref="/contact/" />
    </>
  );
}
