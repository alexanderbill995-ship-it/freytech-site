import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";
import { problems, problemHref } from "@/content/catalog";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pool Solutions by Problem | FreyTech New York",
  description: "Start from the problem: replace liquid chlorine, stabilize chemistry, add alarms, modernize an aging equipment room, improve filtration, or prepare specifications. Solutions for New York commercial pools.",
  path: "/solutions/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Browse by problem" title="Start from what is wrong, not from a catalog" lede="Each solution page explains the symptoms, how FreyTech approaches the problem, which equipment typically applies, and what to have ready before you contact us. Every path leads into the same product data." crumbs={[{ name: "Solutions", href: "/solutions/" }]} compact />
      <Section>
        <SectionHeader title="Common problems at New York commercial pools" />
        <div className="grid grid-2">
          {problems.map((pr) => (
            <Card key={pr.slug} title={pr.name} href={problemHref(pr.slug)} footer="How we approach it">
              <ul>{pr.symptoms.slice(0, 3).map((x) => <li key={x}>{x}</li>)}</ul>
            </Card>
          ))}
        </div>
      </Section>
      <CTABand source="solutions" primaryLabel="Get Help Selecting a System" primaryHref="/contact/?intent=selection" />
    </>
  );
}
