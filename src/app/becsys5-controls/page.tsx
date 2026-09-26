import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ProductEngagement } from "@/components/ui/ProductEngagement";
import { EquipmentRoom } from "@/components/diagrams/EquipmentRoom";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { RelatedProducts } from "@/components/catalog/RelatedProducts";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd, faqLd } from "@/lib/seo";
import { becsys5, sources } from "@/content/products";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "BECSys5 Automated Pool Chemical Controls in New York",
  description: "BECSys5 water-chemistry controller installation, commissioning, training, and service for commercial pools across New York State. Remote visibility, alarms, records, and equipment-room integration.",
  path: "/becsys5-controls/",
});

const problems = [
  { title: "No one knows what the water is doing after hours", text: "Remote dashboards, email and text alarms, and trend graphs replace the drive to the pump room. Operators, supervisors, and facilities directors each see what they need." },
  { title: "Chemistry drifts under load", text: "Continuous pH and ORP control, with optional direct free-chlorine PPM control, holds setpoints through practices, meets, lessons, and open swims instead of catching up the next morning." },
  { title: "Records are a scramble", text: "One year of readings at one-minute resolution and one year of events are stored on the controller. Reports in BECSys Live summarize readings, alarms, and setpoint changes for review." },
  { title: "Feed equipment runs without safeguards", text: "No-flow feed lockout, programmable failsafe overfeed timers, sanitizer lockout on pH alarm, and an emergency-off function are built in. The optional ChemLock adds an independent, UL 508A-approved interlock." },
  { title: "The equipment room is a black box", text: "Optional monitoring of system flow, pressures, vacuum, chemical inventory, tank levels, and turnover, plus optional control of VFDs, UV, ozone, heaters, and makeup water, brings the rest of the room onto one screen." },
  { title: "One person holds all the knowledge", text: "Three-level access codes, logged parameter changes, documented setpoints, and hands-on training from FreyTech mean the system survives staff turnover." },
];

const scenarios = [
  { title: "Replace an obsolete controller", text: "Discontinued models, failing electronics, no communications. A BECSys5 typically installs on the existing sample loop and feed equipment, with new probes and a machined flow cell.", deliverable: "Like-for-like replacement, usually 1–2 days on site." },
  { title: "Add remote visibility to a working system", text: "Older BECS or other controllers that control adequately but cannot be seen remotely. Upgrade to BECSys5 for Ethernet, alarms, logging, and BECSys Live.", deliverable: "Alarm recipients, dashboards, and report access configured." },
  { title: "Integrate a renovated mechanical room", text: "Pump, VFD, filter, UV, or heater replacements in a capital project. Define the point list so the controller monitors and, where appropriate, controls the new equipment.", deliverable: "Point list, sequence of operation, submittals." },
  { title: "Standardize across several pools", text: "Districts, campuses, Ys, and municipalities with multiple bodies of water. One controller per pool, one BECSys Live account for the whole portfolio.", deliverable: "Consistent setpoints, alarm policy, and training." },
];

const install = [
  { title: "Assessment", text: "Sample line, flow cell location, feed equipment, electrical, network access, and storage are reviewed on site. We identify anything that would undermine a new controller." },
  { title: "Configuration", text: "Standard and optional sensors, relays, communications, and interfaces are specified against your point list. Submittals provided to your engineer when required." },
  { title: "Installation", text: "FreyTech technicians mount the controller and flow cell, connect feed outputs and interlocks, and bring the network online. Work is scheduled around the pool calendar." },
  { title: "Commissioning", text: "Probes calibrated against manual tests, setpoints and alarm limits entered, failsafe timers and no-flow lockout verified, alarm delivery tested to each recipient, and a settings record left with you." },
  { title: "Training", text: "Operators learn daily checks, calibration, alarm response, and BECSys Live. Supervisors learn access levels and reports. Written procedures are left on site." },
  { title: "Support", text: "Phone support, preventive maintenance visits for calibration and probe replacement, and BECS warranty coordination. Remote diagnostics through BECSys Live reduce site visits." },
];

export default function Page() {
  return (
    <>
      <ProductEngagement event="becsys5_engagement" product="BECSys5" />
      <JsonLd data={[
        serviceLd({ name: "BECSys5 Automated Controls: Installation, Commissioning, and Service", serviceType: "Commercial pool chemical controller installation", description: metadata.description as string, path: "/becsys5-controls/" }),
        faqLd(becsys5.faqs),
      ]} />
      <PageHero
        eyebrow="Automated controls · BECS Technology"
        title="BECSys5 automated water-chemistry controls"
        lede="Measurement, control, alarms, records, and secure remote visibility for commercial pools, installed and supported in New York State by FreyTech, a listed BECS Technology distributor."
        crumbs={[{ name: "Solutions", href: "/water-chemistry-modernization/" }, { name: "BECSys5 Controls", href: "/becsys5-controls/" }]}
        actions={<><Button href="/contact/?product=BECSys5" variant="onDark" size="lg">Request a System Assessment</Button><Button href="#faq" variant="onDarkGhost" size="lg">Read the FAQ</Button></>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Is this page for you?</h2>
            <ul>
              <li>Your controller is discontinued, unreliable, or has no remote access.</li>
              <li>You need alarms and records you can show the health department.</li>
              <li>You operate more than one body of water.</li>
              <li>A renovation is touching the pump room.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Also see <Link href="/pulsar-precision-feeders/">Pulsar Precision feeders</Link> for chemical delivery.</p>
          </>
        }
      />

      <div className="container"><nav className={p.anchorNav} aria-label="On this page">
        <a href="#problems">Problems solved</a><a href="#capabilities">Capabilities</a><a href="#remote">Remote visibility</a><a href="#integration">Equipment-room integration</a><a href="#scenarios">Upgrade scenarios</a><a href="#install">Installation &amp; support</a><a href="#faq">FAQ</a>
      </nav></div>

      <Section id="problems">
        <SectionHeader eyebrow="Problems solved" title="What changes when the controller is doing its job" />
        <div className={p.featureGrid}>
          {problems.map((f) => (
            <div key={f.title} className={p.feature}><h3>{f.title}</h3><p>{f.text}</p></div>
          ))}
        </div>
      </Section>

      <Section tone="alt" id="capabilities">
        <SectionHeader eyebrow="Monitoring and control" title="Standard and optional capabilities" lede="Every capability below is stated in BECS Technology's published BECSys5 literature. Exact capabilities depend on the sensors, relays, and interfaces configured for your facility." />
        <div className={p.compare}>
          <div className={p.compareCol}>
            <p className={p.kicker}>Standard on every BECSys5</p>
            <h3>Included</h3>
            <ul className={p.checkList}>{becsys5.standard.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div className={p.compareCol}>
            <p className={p.kicker}>Configured to your point list</p>
            <h3>Optional</h3>
            <ul className={p.checkList}>{becsys5.optional.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
        <div style={{ marginTop: "var(--sp-8)" }} className={p.splitEven}>
          <div>
            <h3>Safety functions</h3>
            <ul className={p.checkList} style={{ marginTop: "var(--sp-4)" }}>{becsys5.safety.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <h3>Certification and warranty</h3>
            <p style={{ marginTop: "var(--sp-4)" }}>{becsys5.certifications}</p>
            <p style={{ marginTop: "var(--sp-3)" }}>{becsys5.warranty} FreyTech guarantees its own installation labor separately; see <Link href="/service-support/#warranty">warranty coordination</Link>.</p>
            <p className={p.small} style={{ marginTop: "var(--sp-3)" }}>Sources: <TrackedLink href={sources.becsys5Brochure.href} event="document_download" payload={{ document: "BECSys5 brochure" }} target="_blank" rel="noopener">{sources.becsys5Brochure.label}</TrackedLink>; BECSys5 Technical Data Sheet TDS-4262 (available from FreyTech on request).</p>
          </div>
        </div>
        <Callout title="Regulatory note for New York facilities" tone="warn">
          <p>BECSys5 is designed to help operators hold the free-chlorine and pH ranges set in 10 NYCRR 6-1.11 and 6-1.25, and its no-flow feed lockout addresses the requirement in 6-1.29 item 11.7 that feeders deactivate when recirculation stops. It supplements, and does not replace, the manual DPD tests and daily operation records required under 6-1.11(c)(5) and 6-1.21(c). Final acceptance of any equipment rests with your permit-issuing official. <Link href="/resources/new-york-pool-chemistry-requirements/">Requirements at a glance</Link>.</p>
        </Callout>
      </Section>

      <Section id="remote">
        <div className={p.split}>
          <div>
            <SectionHeader eyebrow="Remote visibility and alarms" title="BECSys Live: see every pool from anywhere, securely" lede="BECS Technology's remote-access service is included with BECSys5 at no additional fee. It gives operators, supervisors, and facilities directors the same live view of dashboards, graphs, reports, and alarms." />
            <ul className={p.checkList}>{becsys5.live.facts.map((s) => <li key={s}>{s}</li>)}</ul>
            <p className={p.small} style={{ marginTop: "var(--sp-5)" }}>Alarm emails and text messages are sent by the controller itself through its Ethernet connection; BECSys Live provides the remote view. Source: <TrackedLink href={sources.becsysLive.href} event="document_download" payload={{ document: "BECSys Live brochure" }} target="_blank" rel="noopener">{sources.becsysLive.label}</TrackedLink>.</p>
          </div>
          <div className={p.sticky}>
            <div className={p.compareCol}>
              <p className={p.kicker}>Reporting and operating records</p>
              <h3>What you can show</h3>
              <ul className={p.checkList} style={{ marginTop: "var(--sp-3)" }}>
                <li>Readings history at one-minute resolution for a full year, stored on the controller without a battery</li>
                <li>Event history: alarms, setpoint and parameter changes, access-code use</li>
                <li>Digital test-kit readings uploaded from SpinTouch and Lumiso kits alongside controller data</li>
                <li>BECSys Live reports summarizing alarm patterns, parameter changes, test-kit logs, and water-quality readings</li>
              </ul>
              <p className={p.small} style={{ marginTop: "var(--sp-3)" }}>These records supplement, not replace, New York&apos;s required daily operation record.</p>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt" id="integration">
        <SectionHeader eyebrow="Equipment-room integration" title="Where the controller sits in the loop" lede="The controller reads a sample stream from the recirculation loop, drives chemical feed with interlocks, and can monitor or control other equipment-room functions depending on configuration." />
        <EquipmentRoom />
        <div className={p.featureGrid} style={{ marginTop: "var(--sp-10)" }}>
          <div className={p.feature}><h3>Feed control</h3><p>Four solid-state relays standard, expandable to 19. Sanitizer, pH, and auxiliary feeds with time-proportional control and failsafe limits. Drives Pulsar Precision feeders and metering pumps.</p></div>
          <div className={p.feature}><h3>Circulation and filtration</h3><p>Optional flow, pressure, vacuum, and total-dynamic-head monitoring; patented VFD recirculation-pump control with the 4–20 mA output option. Automatic filter backwash is a BECSys7 feature.</p></div>
          <div className={p.feature}><h3>Secondary treatment and heating</h3><p>Optional UV (combined-chlorine) control, ozone feed control based on ORP and/or PPM, heater on/off with fireman cycle, TDS bleed, and surge-tank autofill.</p></div>
          <div className={p.feature}><h3>Building systems</h3><p>Optional Modbus TCP/IP, BACnet, Metasys N2, and LonWorks interfaces to bring pool chemistry into the building management system.</p></div>
          <div className={p.feature}><h3>Operator continuity</h3><p>Three-level access codes, logged changes, and documented setpoints. FreyTech leaves a commissioning record and trains current and future staff.</p></div>
          <div className={p.feature}><h3>Family fit</h3><ul>{becsys5.family.map((f) => <li key={f.name}><strong>{f.name}:</strong> {f.fit}</li>)}</ul></div>
        </div>
      </Section>

      <Section id="scenarios">
        <SectionHeader eyebrow="Upgrade and modernization scenarios" title="Four common starting points" />
        <ProcessSteps steps={scenarios} columns={4} />
      </Section>

      <Section tone="dark" id="install">
        <SectionHeader eyebrow="Installation, commissioning, training, local support" title="How FreyTech delivers a BECSys5" lede="Installed by FreyTech's own technicians and supported from our Monroe County office. The controller is only as good as the sample loop, the commissioning, and the people trained to run it." />
        <ProcessSteps steps={install} columns={3} />
        <div className={p.actions}>
          <Button href="/contact/?product=BECSys5" variant="onDark" size="lg">Request a System Assessment</Button>
          <Button href="/service-support/" variant="onDarkGhost" size="lg">Service and maintenance plans</Button>
        </div>
      </Section>

      <Section tone="alt">
        <RelatedProducts category="chemical-delivery-chlorination" title="Explore compatible chemical-delivery approaches" moreHref="/products/chemical-delivery-chlorination/" moreLabel="Chemical Delivery and Chlorination category" />
        <div style={{ marginTop: "var(--sp-10)" }}><RelatedProducts manufacturer="becs" exclude={["becsys5"]} title="Other BECS Technology equipment" moreHref="/manufacturers/becs/" moreLabel="All BECS equipment in the catalog" /></div>
      </Section>

      <Section id="faq">
        <FAQ items={becsys5.faqs} title="BECSys5 frequently asked questions" id="faq-list" />
        <p className={p.small} style={{ marginTop: "var(--sp-6)", maxWidth: "70ch" }}>BECSys is a trademark of BECS Technology, Inc. Product capabilities are summarized from BECS Technology literature accessed September 2026 and depend on configuration. Confirm current specifications with FreyTech before design.</p>
      </Section>

      <CTABand source="becsys5" title="Find out what a BECSys5 upgrade would involve at your facility" text="Send us your current controller, feed system, pool volumes, and what is not working. We will review it and recommend a scope, staged if that fits your budget cycle." />
    </>
  );
}
