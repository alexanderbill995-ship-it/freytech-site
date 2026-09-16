import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";
import { installations, publishedCaseStudies, customerReferences } from "@/content/projects";
import p from "@/styles/page.module.css";
import { asset } from "@/lib/paths";

export const metadata: Metadata = pageMetadata({
  title: "Projects & Case Studies: Commercial Pool Installations in New York",
  description: "Selected FreyTech installations at New York colleges, universities, and school districts, customer references, and water-chemistry modernization case studies in preparation.",
  path: "/projects/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Projects and case studies" title="Work at New York aquatic facilities" lede="Installations described on FreyTech's current website, customer references, and the structure we use for detailed water-chemistry case studies. Nothing here is a composite or a projection; case studies are published only with confirmed facts and the customer's approval." crumbs={[{ name: "Projects", href: "/projects/" }]} compact />

      <Section>
        <SectionHeader eyebrow="Selected installations" title="Projects with photographs" />
        <div className="grid grid-3">
          {installations.map((i) => (
            <article key={i.slug} className={p.imageCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(i.image.src)} alt={i.image.alt} width={i.image.width} height={i.image.height} loading="lazy" decoding="async" />
              <div className={p.imageCap}>
                <strong>{i.facility}</strong>
                <span style={{ display: "block", fontSize: "var(--text-xs)", color: "var(--fg-muted)", marginBottom: "0.35rem" }}>{i.facilityType} · {i.location}</span>
                {i.summary}
                <div style={{ marginTop: "0.5rem" }}><Link href={`/projects/${i.slug}/`}>Project details</Link></div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Water-chemistry case studies" title="Documented modernization projects" lede="Each case study follows the same structure so facilities directors and engineers can compare like with like." />
        {publishedCaseStudies.length === 0 ? (
          <Callout title="Case studies in preparation" tone="confirm">
            <p>Detailed BECSys5 and Pulsar Precision case studies with facility type, location, original problem, existing equipment, recommended system, installation scope, commissioning process, measurable result, customer quotation, and related products are being documented from completed FreyTech projects. They will appear here once the facts and the customer&apos;s permission are confirmed. <Confirm note="Owner to supply 3 case studies" /></p>
            <p>In the meantime, we are glad to provide references from comparable facilities on request.</p>
          </Callout>
        ) : null}
        <div className={p.compareCol} style={{ marginTop: "var(--sp-6)" }}>
          <p className={p.kicker}>Case study structure</p>
          <h3>What every published case study includes</h3>
          <ul className={[p.checkList, p.checkListCols].join(" ")} style={{ marginTop: "var(--sp-3)" }}>
            {["Facility type", "Location (region and county)", "Original problem", "Existing equipment", "Recommended system", "Installation scope", "Commissioning process", "Measurable result, with the customer's data", "Customer quotation, with permission", "Related products"].map((x) => <li key={x}>{x}</li>)}
          </ul>
        </div>
      </Section>

      <Section>
        <div className={p.split}>
          <div>
            <h2 style={{ fontSize: "var(--text-xl)" }}>Customer facilities</h2>
            <p className={p.small} style={{ margin: "var(--sp-2) 0 var(--sp-4)" }}>Pools and aquatic centers named on FreyTech&apos;s current website. <Confirm note="Confirm each">Each is being reconfirmed before launch.</Confirm></p>
            <ul className={p.pillList}>{customerReferences.facilities.map((f) => <li key={f}>{f}</li>)}</ul>
            <h2 style={{ fontSize: "var(--text-xl)", marginTop: "var(--sp-8)" }}>Design firms and consultants</h2>
            <ul className={p.pillList} style={{ marginTop: "var(--sp-3)" }}>{[...customerReferences.designFirms, ...customerReferences.consultants].map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
        </div>
      </Section>

      <CTABand source="projects" />
    </>
  );
}
