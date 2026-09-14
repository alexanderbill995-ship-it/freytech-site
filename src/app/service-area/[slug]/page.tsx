import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card, Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { serviceRegions } from "@/lib/regions";
import { regionCopy } from "@/content/regionsCopy";
import { markets } from "@/content/markets";
import { site } from "@/lib/site";
import p from "@/styles/page.module.css";

export function generateStaticParams() {
  return serviceRegions.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: PageProps<"/service-area/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const r = serviceRegions.find((x) => x.slug === slug);
  if (!r) return {};
  return pageMetadata({
    title: `Commercial Pool Chemical Controls & Feed Systems: ${r.name}, NY`,
    description: `BECSys5 controls, Pulsar Precision feeders, installation, and service for commercial pools in ${r.counties.join(", ")} ${r.counties.length > 1 ? "counties" : "County"}. FreyTech serves New York State outside NYC.`,
    path: `/service-area/${r.slug}/`,
  });
}

export default async function Page({ params }: PageProps<"/service-area/[slug]">) {
  const { slug } = await params;
  const r = serviceRegions.find((x) => x.slug === slug);
  const c = regionCopy[slug];
  if (!r || !c) notFound();
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "Service",
        name: `Commercial pool water-chemistry systems: ${r.name}`,
        provider: { "@id": `${site.url}/#organization` },
        areaServed: r.counties.map((county) => ({ "@type": "AdministrativeArea", name: `${county} County, New York` })),
        url: `${site.url}/service-area/${r.slug}/`,
      }} />
      <PageHero
        eyebrow={`Service area · ${r.name}`}
        title={c.headline}
        lede={c.intro}
        crumbs={[{ name: "Service Area", href: "/service-area/" }, { name: r.name, href: `/service-area/${r.slug}/` }]}
        actions={<><Button href="/contact/" variant="onDark" size="lg">Request a System Assessment</Button><Button href="/request-service/" variant="onDarkGhost" size="lg">Request Service</Button></>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Counties</h2>
            <p>{r.counties.join(" · ")}</p>
            <h2 style={{ fontSize: "var(--text-md)", marginTop: "var(--sp-4)" }}>Travel and response</h2>
            <p>{c.travelNote}</p>
          </>
        }
      />

      <Section>
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Facilities in this region" title="Where the work is" />
            <ul className={p.checkList}>{c.facilities.map((f) => <li key={f}>{f}</li>)}</ul>
          </div>
          <div>
            <SectionHeader eyebrow="References" title={c.references.length ? "Customers we can speak to here" : "References in this region"} />
            {c.references.length ? (
              <>
                <ul className={p.pillList}>{c.references.map((x) => <li key={x}>{x}</li>)}</ul>
                <p className={p.small} style={{ marginTop: "var(--sp-4)" }}>Named on FreyTech&apos;s current website. <Confirm note="Confirm each">Each reference is being reconfirmed before launch.</Confirm></p>
              </>
            ) : (
              <Callout tone="confirm" title="No published references yet">
                <p>FreyTech has not published customer references in this region. We are glad to provide references from comparable facilities elsewhere in New York on request. <Confirm note="Owner to add references or confirm coverage" /></p>
              </Callout>
            )}
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Solutions" title={`What we install and service in the ${r.name}`} />
        <div className="grid grid-3">
          <Card title="BECSys5 automated controls" href="/becsys5-controls/" footer="Details and FAQ"><p>Controller modernization with remote visibility, alarms, and records for pools of every size.</p></Card>
          <Card title="Pulsar Precision feeders" href="/pulsar-precision-feeders/" footer="Qualification"><p>High-capacity calcium hypochlorite delivery for large pools and high bather loads, sized by measured demand.</p></Card>
          <Card title="Service and maintenance" href="/service-support/" footer="Service capabilities"><p>Preventive maintenance, troubleshooting, parts, training, and warranty coordination from our Wayne County office.</p></Card>
        </div>
      </Section>

      <Section tight>
        <h2 style={{ fontSize: "var(--text-xl)" }}>Markets we serve in this region</h2>
        <p className={p.small} style={{ margin: "var(--sp-3) 0" }}>{markets.map((m, i) => <span key={m.slug}>{i > 0 && " · "}<Link href={`/markets/${m.slug}/`}>{m.short}</Link></span>)}</p>
        <p className={p.small}>Other regions: {serviceRegions.filter((x) => x.slug !== r.slug).map((x, i) => <span key={x.slug}>{i > 0 && " · "}<Link href={`/service-area/${x.slug}/`}>{x.name}</Link></span>)}</p>
      </Section>

      <CTABand source={`region-${r.slug}`} title={`Planning a chemistry upgrade in the ${r.name}?`} />
    </>
  );
}
