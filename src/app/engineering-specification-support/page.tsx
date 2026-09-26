import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { SpecForm } from "@/components/forms/SpecForm";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { customerReferences } from "@/content/projects";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Engineering & Specification Support for Pool Chemical Systems in New York",
  description: "Product selection, equipment schedules, submittals, sequence-of-operation, approved-equal review, and commissioning support for architects, engineers, and aquatic consultants specifying BECSys5 and Pulsar Precision on New York projects.",
  path: "/engineering-specification-support/",
});

const services = [
  { title: "Product selection assistance", text: "Basis-of-design guidance for controllers (BECSys3/5/7) and chemical feed (Pulsar Precision, Precision 30, liquid feed) matched to the owner's operating model, bodies of water, and demand." },
  { title: "Equipment schedules and submittals", text: "Model numbers, options, sensor and relay counts, power and network requirements, and manufacturer data for your schedules; submittal packages during construction." },
  { title: "Sequence-of-operation support", text: "Control narratives for chemistry control, interlocks, failsafe timers, alarm handling, and equipment-room functions (VFD, UV, heater, autofill) suitable for the specification." },
  { title: "Renovation and retrofit considerations", text: "Sample-loop routing, flow-cell placement, injection points, clearances, storage, and reuse of existing infrastructure in occupied facilities." },
  { title: "Approved-equal and substitution review", text: "Side-by-side comparison of proposed substitutes on measured points, capacity, safety functions, communications, listings, serviceability, and local support, documented for the engineer's decision." },
  { title: "Coordination with mechanical systems", text: "Interfaces with pumps, VFDs, filters, UV, heaters, makeup water, and BMS (Modbus TCP/IP, BACnet, Metasys N2, LonWorks options on BECSys5)." },
  { title: "Commissioning and operator training", text: "Commissioning plan, verification of interlocks and alarm delivery, settings record, and owner training scope for closeout." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={serviceLd({ name: "Engineering and Specification Support for Commercial Pool Chemical Systems", serviceType: "Specification support", description: metadata.description as string, path: "/engineering-specification-support/" })} />
      <PageHero
        eyebrow="For architects, engineers, and aquatic consultants"
        title="Engineering and specification support"
        lede="A local source who knows the equipment, knows New York's approval process, and will still be on site for commissioning. FreyTech supports design teams from schematic design through closeout on projects across New York State."
        crumbs={[{ name: "Engineering & Specification Support", href: "/engineering-specification-support/" }]}
        actions={<><Button href="#request" variant="onDark" size="lg">Request Specification Assistance</Button><Button href="/markets/architects-engineers-consultants/" variant="onDarkGhost" size="lg">Design-team overview</Button></>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Typical turnaround</h2>
            <ul>
              <li>Selection guidance and schedule input: a few business days</li>
              <li>Substitution review: depends on the submittal; tell us the deadline</li>
              <li>Submittals: per project schedule</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Manufacturer documents are provided to design teams with the manufacturer&apos;s permission rather than published openly here.</p>
          </>
        }
      />

      <Section>
        <SectionHeader eyebrow="What we provide" title="Support across the project lifecycle" />
        <div className={p.featureGrid}>
          {services.map((s) => (
            <div key={s.title} className={p.feature}><h3>{s.title}</h3><p>{s.text}</p></div>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <div className={p.splitEven}>
          <div>
            <h2>New York approval context</h2>
            <div className="prose" style={{ marginTop: "var(--sp-4)" }}>
              <p>Public pool additions and modifications require plans by a licensed engineer or architect approved by the permit-issuing official (10 NYCRR 6-1.8). Subpart 6-1 requires an automatic adjustable disinfectant feeder and pH feed equipment (6-1.29 items 11.1 and 11.6) and an automatic device that deactivates feeders when there is no recirculation flow (item 11.7); it permits electronic monitoring in addition to the test kit (item 11.8). Cyanuric acid is prohibited (6-1.11). The code does not name controllers, ORP, or flow switches; the permit-issuing official interprets acceptability. The CDC Model Aquatic Health Code (2023) recommends NSF/ANSI 50 controllers with flow interlocks and is guidance in New York unless adopted.</p>
              <p><Link href="/resources/new-york-pool-chemistry-requirements/">Requirements at a glance</Link>, with citations.</p>
            </div>
          </div>
          <div>
            <h2>Design firms we have worked with</h2>
            <p className={p.small} style={{ margin: "var(--sp-3) 0 var(--sp-4)" }}>Named on FreyTech&apos;s current website. <Confirm note="Confirm each">Relationships and spellings are being reconfirmed before launch.</Confirm></p>
            <ul className={p.pillList}>
              {[...customerReferences.designFirms, ...customerReferences.consultants].map((f) => <li key={f}>{f}</li>)}
            </ul>
          </div>
        </div>
      </Section>

      <Section id="request">
        <div className={p.split}>
          <div>
            <SectionHeader eyebrow="Request form" title="Request specification assistance" lede="Tell us about the project and what you need. Bodies of water, volumes, chemical program, and the owner's monitoring expectations help us respond with something usable the first time." />
            <SpecForm />
          </div>
          <div className={p.sticky}>
            <Callout title="Proprietary manufacturer documents" tone="warn">
              <p>Technical data sheets, O&amp;M manuals, wiring diagrams, and bid specifications from BECS Technology and Pulsar are provided to design teams through FreyTech under the manufacturers&apos; terms. Public manufacturer literature is linked from the <Link href="/resources/">resource center</Link>.</p>
            </Callout>
          </div>
        </div>
      </Section>
    </>
  );
}
