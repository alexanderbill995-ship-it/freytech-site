import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";
import { serviceRegions, nycCounties } from "@/lib/regions";
import { regionCopy } from "@/content/regionsCopy";
import { site } from "@/lib/site";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Service Area: New York State Outside New York City",
  description: "FreyTech installs and services commercial pool chemical controls and feed systems across the Capital Region, Central New York, Finger Lakes, Southern Tier, Hudson Valley, Mohawk Valley, Western New York, North Country, and Long Island. NYC is not served.",
  path: "/service-area/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Service area" title="New York State, outside New York City" lede={`FreyTech is based in ${site.address.city}, ${site.address.county} County, and installs and services commercial pool chemistry systems statewide outside the five boroughs. Each region below lists the facility types we work with and the customer references we can speak to there.`} crumbs={[{ name: "Service Area", href: "/service-area/" }]} compact />
      <Section>
        <SectionHeader title="Regions and counties" lede="Regions follow New York's economic development region boundaries. Coverage of specific counties, response times, and travel are confirmed during the assessment." />
        <div className="grid grid-3">
          {serviceRegions.map((r) => {
            const c = regionCopy[r.slug];
            return (
              <article key={r.slug} className={p.compareCol}>
                <p className={p.kicker}>{r.counties.length} counties</p>
                <h3><Link href={`/service-area/${r.slug}/`} style={{ textDecoration: "none", color: "inherit" }}>{r.name}</Link></h3>
                <p className={p.small} style={{ marginTop: "var(--sp-2)" }}>{r.counties.join(", ")}</p>
                {c?.references.length ? <p className={p.small} style={{ marginTop: "var(--sp-3)" }}><strong>References:</strong> {c.references.join(", ")}</p> : <p className={p.small} style={{ marginTop: "var(--sp-3)" }}><Confirm note="Confirm coverage">Coverage to be confirmed.</Confirm></p>}
                <p style={{ marginTop: "var(--sp-3)" }}><Link href={`/service-area/${r.slug}/`}>Regional page</Link></p>
              </article>
            );
          })}
        </div>
        <Callout title="Not served: New York City" tone="warn">
          <p>FreyTech does not serve facilities in {nycCounties.map((c) => `${c} County`).join(", ")} (the five boroughs). New York City pools are regulated separately under NYC Health Code Article 165 by the NYC Department of Health and Mental Hygiene. Out-of-state facilities are outside our primary territory; we will respond honestly to inquiries about whether we can help.</p>
        </Callout>
      </Section>
      <CTABand source="service-area" />
    </>
  );
}
