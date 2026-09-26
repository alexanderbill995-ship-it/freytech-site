import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";
import { markets } from "@/content/markets";

export const metadata: Metadata = pageMetadata({
  title: "Markets Served: Commercial & Institutional Pools in New York",
  description: "FreyTech serves colleges, school districts, municipalities, YMCAs and JCCs, competition venues, healthcare therapy pools, and design teams across New York State.",
  path: "/markets/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Markets served" title="Commercial and institutional aquatic facilities" lede="Each market has its own operating pressures, buying triggers, and stakeholders. Choose the page that matches your facility to see what typically drives a project and what to have ready before contacting us." crumbs={[{ name: "Markets", href: "/markets/" }]} compact />
      <Section>
        <SectionHeader title="Who we work with" lede="Commercial and institutional accounts only, in New York State. FreyTech does not sell or service residential pools." />
        <div className="grid grid-3">
          {markets.map((m) => (
            <Card key={m.slug} title={m.name} href={`/markets/${m.slug}/`} footer="Operating pressures, triggers, solutions, next step">
              <p>{m.intro.split(". ").slice(0, 2).join(". ")}.</p>
            </Card>
          ))}
        </div>
      </Section>
      <CTABand source="markets" />
    </>
  );
}
