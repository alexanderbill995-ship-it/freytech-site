import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { productIndex } from "@/content/catalog";
import { pulsar } from "@/content/products";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Pulsar Commercial Chlorination Systems in New York | Overview",
  description: "Pulsar calcium hypochlorite chlorination for commercial pools: how dry cal hypo feeding works, which facilities fit, storage and handling, conversion from liquid or gas chlorine, controls integration, and FreyTech's role in New York State.",
  path: "/pulsar-chlorination/",
});

const workflow = [
  { title: "Load", text: "Operators keep the hopper stocked with Pulsar Plus briquettes from segregated dry storage, using the PPE and routine covered in training." },
  { title: "Demand", text: "The chemistry controller (BECSys5 or another controller with a chlorine-demand output) calls for chlorine when ORP or PPM drops below setpoint." },
  { title: "Erode and deliver", text: "Water sprays the briquettes, producing a chlorine solution that is carried into the recirculation loop; when demand is met the spray stops and the briquettes sit dry." },
  { title: "Interlock", text: "Feed is locked out when recirculation stops, through the controller and optionally an independent interlock." },
  { title: "Clean and maintain", text: "Scheduled cleaning of the hopper, nozzles, and solution tank keeps delivery consistent; wear parts are replaced on service visits." },
];

export default function Page() {
  const items = productIndex.filter((i) => ["pulsar-precision", "pulsar-precision-30", "pulsar-plus-briquettes"].includes(i.slug));
  return (
    <>
      <JsonLd data={serviceLd({ name: "Pulsar commercial chlorination: evaluation, installation, and service", serviceType: "Commercial pool chlorination system", description: metadata.description as string, path: "/pulsar-chlorination/" })} />
      <PageHero
        eyebrow="Pulsar commercial chlorination · overview"
        title="Dry calcium hypochlorite chlorination for commercial pools"
        lede="Pulsar feeders store chlorine as a solid and make chlorine solution only when the controller asks for it. For the right facility that means fewer deliveries, no bulk liquid, and capacity for peak demand. FreyTech evaluates fit by measured demand, installs the loop, trains operators, and services the system across New York State."
        crumbs={[{ name: "Products & Solutions", href: "/products/" }, { name: "Chemical Delivery and Chlorination", href: "/products/chemical-delivery-chlorination/" }, { name: "Pulsar Chlorination", href: "/pulsar-chlorination/" }]}
        actions={<><Button href="/pulsar-precision-feeders/" variant="onDark" size="lg">Pulsar Precision guide</Button><Button href="/contact/?product=Pulsar&category=chemical-delivery-chlorination&intent=assessment" variant="onDarkGhost" size="lg">Request a Facility Assessment</Button></>}
        aside={<><h2 style={{ fontSize: "var(--text-md)" }}>Two models</h2><ul><li><strong>Pulsar Precision:</strong> very large pools; up to 189 lb/day available chlorine.</li><li><strong>Pulsar Precision 30:</strong> small and mid-size pools; up to 36 lb/day; flow-based.</li></ul><p style={{ marginTop: "0.75rem" }}>FreyTech supplies, installs and services Pulsar systems for facilities across New York State.</p></>}
      />

      <Section>
        <div className={p.split}>
          <div className="prose">
            <h2>Dry cal hypo feeding in plain language</h2>
            <p>Calcium hypochlorite is a solid that releases available chlorine when dissolved. A Pulsar feeder holds briquettes in a hopper above a spray chamber. When the controller signals demand, water sprays the briquettes and the resulting chlorine solution flows into the pool&apos;s recirculation line. Between demands the briquettes stay dry, so the chemical is stored as a stable solid rather than as bulk bleach that loses strength in storage.</p>
            <h2>Suitable facility types</h2>
            <p>The full-size Precision is positioned by Pulsar for very large pools: competition venues, municipal aquatic centers, and waterparks. The Precision 30 brings the same approach to mid-size institutional pools. Small warm therapy pools and spas rarely need either; control and visibility matter more there.</p>
            <h2>Facility size and demand</h2>
            <p>Pulsar publishes gallonage guidance, and its own pages disagree with each other for the Precision 30. FreyTech sizes by measured chlorine demand: daily chlorine use from records, peak bather load, temperature, indoor or outdoor exposure, and turnover. Because New York prohibits stabilizer, only the non-stabilized outdoor guidance applies in our territory.</p>
            <h2>Storage, handling, ventilation, and the mechanical room</h2>
            <p>Calcium hypochlorite is an oxidizer. It needs dry, cool, ventilated storage segregated from acids and organics, original closed containers, SDS on site, and a loading routine with PPE. Local fire code and the health department review storage quantities and location. The feeder itself needs a water loop (booster pump for Precision; flow-based Venturi for Precision 30), drainage, clearances, and power. Cal hypo adds calcium hardness over time, so pH control and water replacement are part of the design.</p>
            <h2>Converting from liquid or gas chlorine</h2>
            <p>Conversions remove bulk bleach storage or gas cylinders and their handling burden. Expect to re-plan chemical storage, adjust pH control, confirm the controller&apos;s demand output and interlocks, and involve the engineer for plan review where treatment equipment is modified (10 NYCRR 6-1.8). Gas conversions also remove the qualified-operator requirement that gas chlorine triggers.</p>
          </div>
          <div className={p.sticky}>
            <Callout title="Alternatives we compare honestly" tone="info">
              <p>Liquid sodium hypochlorite with metering pumps, other calcium hypochlorite feeders, gas chlorine where still permitted, and salt chlorine generation. The <Link href="/products/chemical-delivery-chlorination/">chemical delivery category</Link> compares them.</p>
            </Callout>
            <Callout title="Controls integration" tone="warn">
              <p>The feeder solenoid is switched by a controller&apos;s chlorine-demand output. FreyTech commonly pairs Pulsar feeders with <Link href="/becsys5-controls/">BECSys5</Link>; Pulsar also offers its GuardTec controller. Compatibility with an existing controller is confirmed during the assessment, not assumed.</p>
            </Callout>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Operational workflow" title="What running a Pulsar system looks like" />
        <ProcessSteps steps={workflow} columns={4} />
      </Section>

      <Section>
        <SectionHeader eyebrow="Products" title="Pulsar equipment FreyTech evaluates, installs, and services" />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="grid grid-3">{items.map((i) => <li key={i.slug}><ProductCard p={i} /></li>)}</ul>
        <p className={p.small} style={{ marginTop: "var(--sp-6)" }}>Model comparison, verified specifications, and FAQs: <Link href="/pulsar-precision-feeders/">Pulsar Precision and Precision 30 guide</Link>. Manufacturer documents: <Link href="/resources/?manufacturer=pulsar">resource library</Link>.</p>
      </Section>

      <Section tone="dark">
        <SectionHeader eyebrow="Connected system" title="Sense → decide → deliver → record → support" lede="Pulsar delivers sanitizer. BECSys5 decides when. Logs and alarms keep people informed. FreyTech supports the loop locally." />
        <SystemFlow />
        <div className={p.actions}><Button href="/becsys5-controls/" variant="onDark">Explore automated chemistry controls</Button><Button href="/contact/?intent=modernization&product=BECSys5%20%2B%20Pulsar" variant="onDarkGhost">Request a complete system assessment</Button></div>
      </Section>

      <Section tight>
        <p className={p.small} style={{ maxWidth: "70ch" }}>{pulsar.manufacturer}. Specifications summarized from Pulsar literature accessed September 2026. FreyTech is an independent dealer and service provider; authorized-dealer status for your county should be confirmed with FreyTech.</p>
      </Section>

      <CTABand source="pulsar-overview" title="Find out whether dry chlorination fits your facility" text="Pool volumes, current disinfection method, and daily chlorine use are enough to start. We will tell you honestly whether a Pulsar system makes sense and which model." primaryLabel="Request a Facility Assessment" primaryHref="/contact/?product=Pulsar&category=chemical-delivery-chlorination&intent=assessment" />
    </>
  );
}
