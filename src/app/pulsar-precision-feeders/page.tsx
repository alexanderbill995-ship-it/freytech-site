import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ProductEngagement } from "@/components/ui/ProductEngagement";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { RelatedProducts } from "@/components/catalog/RelatedProducts";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd, faqLd } from "@/lib/seo";
import { pulsar, sources } from "@/content/products";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Pulsar Precision Calcium Hypochlorite Feeders in New York",
  description: "Pulsar Precision and Precision 30 cal hypo feeder sizing, installation, commissioning, training, and service for large commercial pools across New York State outside NYC. Qualified by chlorine demand, not gallons.",
  path: "/pulsar-precision-feeders/",
});

const fits = [
  { title: "Good candidates", items: ["50-meter and large competition pools", "Municipal aquatic centers and outdoor pools with heavy summer bather loads", "Water parks and high-bather-load facilities", "Large institutional pools moving off liquid bleach or gas chlorine", "Facilities with limited space or appetite for bulk liquid storage"] },
  { title: "Usually not the first move", items: ["Small school or hotel pools with modest, steady demand", "Warm-water therapy pools and spas (small volumes; controller upgrade matters more)", "Facilities without safe, ventilated dry-chemical storage", "Pools whose real problem is control and visibility, not feed capacity", "Any pool until chlorine demand has actually been measured"] },
];

const alternatives = [
  { name: "Liquid sodium hypochlorite (bleach)", pros: "Familiar; simple metering pumps; widely available.", cons: "Deliveries and bulk storage; degrades in storage, especially in heat; high liquid volumes handled; raises pH and TDS." },
  { name: "Calcium hypochlorite erosion feeders (Pulsar Precision, other brands)", pros: "Dry chemical with long shelf life; concentrated; on-demand solution; lower handled volume.", cons: "Adds calcium hardness over time; requires oxidizer storage discipline; feeder cleaning and briquette logistics." },
  { name: "Trichlor tablet feeders", pros: "Common in small pools.", cons: "Adds cyanuric acid, which New York prohibits in public pools (10 NYCRR 6-1.11); generally unsuitable in our territory." },
  { name: "Gas chlorine", pros: "Inexpensive chemical; high capacity.", cons: "Acute hazard; regulatory and staffing burden; New York requires a qualified operator wherever gas is used; many facilities are converting away from it." },
  { name: "Salt chlorine generation", pros: "On-site generation; fewer deliveries.", cons: "Capital cost, electrical and salt effects on the facility, cell replacement, and demand limits at large volumes." },
];

const process = [
  { title: "Demand assessment", text: "Volume, turnover, bather load, indoor or outdoor exposure, temperature, and current daily chlorine use establish the real requirement." },
  { title: "Hydraulics and location", text: "Booster-pump or flow-based Venturi loop, injection point, clearances, drainage, and electrical are checked against the manufacturer's manual." },
  { title: "Storage and handling", text: "Segregated, ventilated, dry storage for calcium hypochlorite; SDS on site; local fire-code review. Storage often decides feasibility." },
  { title: "Controller pairing", text: "The feeder is driven by the chlorine-demand output of a BECSys5 or compatible controller with flow interlock and failsafe timers." },
  { title: "Approvals", text: "Where the change modifies treatment equipment, plans by a New York-licensed design professional may be required (6-1.8). We coordinate with your engineer." },
  { title: "Install and commission", text: "FreyTech installs the feeder and loop, verifies solution strength and delivery, tests interlocks, and records settings." },
  { title: "Train and support", text: "Operators learn loading, cleaning, and troubleshooting; service visits keep the feeder clean and delivery consistent." },
];

export default function Page() {
  return (
    <>
      <ProductEngagement event="pulsar_engagement" product="Pulsar Precision" />
      <JsonLd data={[
        serviceLd({ name: "Pulsar Precision Feeder Systems: Sizing, Installation, and Service", serviceType: "Commercial pool chemical feed system installation", description: metadata.description as string, path: "/pulsar-precision-feeders/" }),
        faqLd(pulsar.faqs),
      ]} />
      <PageHero
        eyebrow="Chemical delivery · Pulsar Systems"
        title="Pulsar Precision calcium hypochlorite feeder systems"
        lede="High-capacity chlorine delivery for pools whose volume and bather load justify it. FreyTech sizes by measured chlorine demand, installs and commissions the loop, trains operators, and services the system across New York State outside NYC."
        crumbs={[{ name: "Solutions", href: "/water-chemistry-modernization/" }, { name: "Pulsar Precision Feeders", href: "/pulsar-precision-feeders/" }]}
        actions={<><Button href="/contact/?product=Pulsar%20Precision" variant="onDark" size="lg">Request a Facility Assessment</Button><Button href="#qualify" variant="onDarkGhost" size="lg">Does my pool qualify?</Button></>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Two models, two very different pools</h2>
            <ul>
              <li><strong>Pulsar Precision:</strong> manufacturer-rated for 500,000 to 1,000,000+ gallon pools; up to 189 lb/day available chlorine.</li>
              <li><strong>Pulsar Precision 30:</strong> compact, flow-based; up to 36 lb/day; manufacturer guidance up to 200,000 gallons indoor.</li>
            </ul>
            <p style={{ marginTop: "0.75rem" }}>Not every commercial pool is a Pulsar prospect. Many are better served by a <Link href="/becsys5-controls/">controller upgrade</Link> first.</p>
          </>
        }
      />

      <div className="container"><nav className={p.anchorNav} aria-label="On this page">
        <a href="#how">How it works</a><a href="#models">Models and specifications</a><a href="#qualify">Qualification</a><a href="#alternatives">Alternatives</a><a href="#storage">Storage and handling</a><a href="#process">Installation and service</a><a href="#faq">FAQ</a>
      </nav></div>

      <Section id="how">
        <div className={p.split}>
          <div>
            <SectionHeader eyebrow="How it works" title="Dry calcium hypochlorite, delivered as a solution on demand" />
            <div className="prose">
              <p>Pulsar Precision feeders hold calcium hypochlorite briquettes in a hopper. When the chemistry controller calls for chlorine, water sprays the briquettes, eroding a measured amount into a concentrated chlorine solution that is carried into the recirculation loop. When the controller is satisfied, the spray stops and the briquettes sit dry. The chemical is stored as a stable solid, not as bulk liquid.</p>
              <p>The manufacturer describes the full-size Precision as a patented high-capacity erosion (HCE) system. Both models are NSF Listed according to Pulsar, and both require Pulsar Plus briquettes to keep the manufacturer&apos;s warranty.</p>
              <ul>{pulsar.shared.map((s) => <li key={s}>{s}</li>)}</ul>
            </div>
          </div>
          <div className={p.sticky}>
            <Callout title="Why facilities switch" tone="info">
              <ul style={{ paddingLeft: "1.1rem" }}>
                <li>Fewer liquid deliveries and no bulk bleach storage</li>
                <li>Dry chemical with a long shelf life, unaffected by summer heat the way bleach is</li>
                <li>Capacity for demand spikes at meets and peak summer days</li>
                <li>Lower handled volume of chemical for the same available chlorine</li>
              </ul>
              <p>Savings depend on your chemical use, labor, deliveries, and downtime. We build any economic comparison from your facility&apos;s actual numbers, not generic percentages.</p>
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="alt" id="models">
        <SectionHeader eyebrow="Models and manufacturer specifications" title="Pulsar Precision and Precision 30" lede="Figures below are taken from Pulsar's published operation and installation manuals and product pages (accessed September 2026). Final sizing depends on chlorine demand, bather load, hydraulics, operating conditions, storage, and applicable codes." />
        <div className={p.compare}>
          {[pulsar.precision, pulsar.precision30].map((m) => (
            <div key={m.model} className={p.compareCol}>
              <p className={p.kicker}>Model {m.model}</p>
              <h3>{m.name}</h3>
              <p style={{ fontSize: "var(--text-sm)", color: "var(--steel-700)", marginBottom: "var(--sp-4)" }}>{m.positioning}</p>
              <div className="table-wrap">
                <table className={p.specTable}>
                  <tbody>
                    {m.specs.map((s) => (
                      <tr key={s.k}><th scope="row">{s.k}</th><td>{s.v}<small>Source: {s.src}</small></td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          ))}
        </div>
        <Callout title="About the Precision 30 sizing figures" tone="warn">
          <p>{pulsar.precision30.inconsistency}</p>
          <p>Because New York prohibits cyanuric acid stabilizer in public pools, the manufacturer&apos;s &ldquo;outdoor non-stabilized&rdquo; guidance (up to 90,000 gallons) is the relevant outdoor figure for facilities in our territory.</p>
        </Callout>
        <p className={p.small} style={{ marginTop: "var(--sp-5)" }}>
          Manufacturer literature: <TrackedLink href={sources.pulsarPrecision.href} event="document_download" payload={{ document: "Pulsar Precision page" }} target="_blank" rel="noopener">{sources.pulsarPrecision.label}</TrackedLink> · <TrackedLink href={sources.pulsarPrecision30Manual.href} event="document_download" payload={{ document: "Precision 30 manual" }} target="_blank" rel="noopener">{sources.pulsarPrecision30Manual.label}</TrackedLink> · <TrackedLink href={sources.pulsarPrecision30Resources.href} event="document_download" payload={{ document: "Precision 30 resources" }} target="_blank" rel="noopener">bid spec, CAD, and schematics</TrackedLink>. <Confirm note="Confirm dealer status">FreyTech&apos;s authorized Pulsar dealer status and county coverage are being confirmed for publication.</Confirm>
        </p>
      </Section>

      <Section id="qualify">
        <SectionHeader eyebrow="Pool volume and chlorine-demand qualification" title="Who should consider a Pulsar Precision" lede="We will tell you if your pool is not a fit. Feed capacity you do not need is money that should have gone into control, visibility, or filtration." />
        <div className={p.compare}>
          {fits.map((f) => (
            <div key={f.title} className={p.compareCol}>
              <h3>{f.title}</h3>
              <ul className={p.checkList} style={{ marginTop: "var(--sp-3)" }}>{f.items.map((i) => <li key={i}>{i}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className={p.splitEven} style={{ marginTop: "var(--sp-10)" }}>
          <div>
            <h3>What we measure before recommending a feeder</h3>
            <ul className={p.checkList} style={{ marginTop: "var(--sp-4)" }}>
              <li>Pool volume, surface area, turnover rate, and number of bodies of water</li>
              <li>Peak and typical bather load; event schedule; indoor or outdoor exposure</li>
              <li>Operating temperature and current daily chlorine consumption (from records)</li>
              <li>Existing controller, feed equipment, injection point, and hydraulics</li>
              <li>Chemical storage location, ventilation, and fire-code constraints</li>
              <li>Health-department plan-review implications for the change</li>
            </ul>
          </div>
          <div>
            <h3>Best-fit facility types</h3>
            <ul className={p.pillList} style={{ marginTop: "var(--sp-4)" }}>
              {["50-meter and competition pools", "Municipal aquatic centers", "Water parks", "Large university natatoriums", "High-bather-load outdoor pools", "Large YMCA/JCC lap pools (Precision 30)"].map((t) => <li key={t}>{t}</li>)}
            </ul>
            <div className={p.actions}><Button href="/markets/competition-pools/" variant="secondary">Competition pools and large venues</Button></div>
          </div>
        </div>
      </Section>

      <Section tone="alt" id="alternatives">
        <SectionHeader eyebrow="Alternatives" title="How cal hypo feed compares with what you may have now" lede="An honest comparison. Each approach has a place; the assessment shows which one fits your pool." />
        <div className="table-wrap">
          <table className={p.specTable}>
            <thead><tr><th scope="col">Approach</th><th scope="col">Strengths</th><th scope="col">Trade-offs</th></tr></thead>
            <tbody>
              {alternatives.map((a) => (
                <tr key={a.name}><th scope="row">{a.name}</th><td>{a.pros}</td><td>{a.cons}</td></tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section id="storage">
        <div className={p.split}>
          <div>
            <SectionHeader eyebrow="Chemical storage and handling" title="Calcium hypochlorite is an oxidizer. Plan for it." />
            <div className="prose">
              <p>Cal hypo briquettes are stable when stored correctly and hazardous when they are not. Before any feeder is specified, we review where the chemical will be stored and how it will be handled.</p>
              <ul>
                <li>Dry, cool, ventilated storage segregated from acids, organics, and other incompatible chemicals</li>
                <li>Original containers, closed, off the floor; no mixing with other chlorine products</li>
                <li>Safety data sheet on site and staff trained on it (<TrackedLink href={sources.pulsarBriquetteSDS.href} event="document_download" payload={{ document: "Pulsar Plus SDS" }} target="_blank" rel="noopener">Pulsar Plus SDS</TrackedLink>)</li>
                <li>Local fire code and health-department review of storage quantities and location</li>
                <li>Personal protective equipment and a loading routine that keeps the hopper area clean</li>
              </ul>
              <p>Operator training at commissioning covers loading, cleaning, and what to do when the feeder or controller alarms.</p>
            </div>
          </div>
          <div className={p.sticky}>
            <div className={p.compareCol}>
              <p className={p.kicker}>Maintenance and service</p>
              <h3>Keeping delivery consistent</h3>
              <ul className={p.checkList} style={{ marginTop: "var(--sp-3)" }}>
                <li>Scheduled cleaning of the hopper, spray nozzles, and solution tank per the manual</li>
                <li>Inspection of the Venturi or booster loop, strainers, and injection point</li>
                <li>Verification that the feeder stops when the controller&apos;s demand output is off</li>
                <li>Briquette supply planning and storage checks</li>
                <li>Warranty coordination with Pulsar (12 months from installation or 18 from shipment)</li>
              </ul>
              <div className={p.actions}><Button href="/service-support/" variant="secondary" size="sm">Service agreements</Button></div>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="dark" id="process">
        <SectionHeader eyebrow="Installation, commissioning, training" title="From demand assessment to a commissioned feeder" />
        <ProcessSteps steps={process} columns={4} />
        <div className={p.actions}>
          <Button href="/contact/?product=Pulsar%20Precision" variant="onDark" size="lg">Request a Facility Assessment</Button>
          <Button href="/becsys5-controls/" variant="onDarkGhost" size="lg">Pair with BECSys5 controls</Button>
        </div>
      </Section>

      <Section tone="alt">
        <RelatedProducts manufacturer="pulsar" exclude={["pulsar-precision", "pulsar-precision-30"]} title="Related Pulsar products" moreHref="/manufacturers/pulsar/" moreLabel="All Pulsar equipment in the catalog" />
        <div style={{ marginTop: "var(--sp-10)" }}><RelatedProducts category="chemical-delivery-chlorination" exclude={["pulsar-precision", "pulsar-precision-30"]} title="Other chemical-delivery approaches" moreHref="/products/chemical-delivery-chlorination/" moreLabel="Chemical Delivery and Chlorination category" /></div>
      </Section>

      <Section id="faq">
        <FAQ items={pulsar.faqs} title="Pulsar Precision frequently asked questions" id="faq-list" />
        <p className={p.small} style={{ marginTop: "var(--sp-6)", maxWidth: "70ch" }}>Pulsar and Pulsar Precision are trademarks of Innovative Water Care, LLC or its affiliates. Specifications are summarized from Pulsar literature accessed September 2026; confirm current figures with FreyTech before design. FreyTech is an independent dealer and service provider.</p>
      </Section>

      <CTABand source="pulsar" title="Not sure whether your pool justifies a Pulsar Precision?" text="Send us your pool volumes, current disinfection method, and daily chlorine use if you have it. We will tell you honestly whether a cal hypo feeder makes sense, which model, and what else should come first." primaryLabel="Request a Facility Assessment" />
    </>
  );
}
