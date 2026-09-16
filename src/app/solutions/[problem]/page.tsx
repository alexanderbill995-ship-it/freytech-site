import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";
import { problems, getProblem, problemHref, productIndex, getCategory, categoryHref } from "@/content/catalog";
import p from "@/styles/page.module.css";

export function generateStaticParams() { return problems.map((x) => ({ problem: x.slug })); }

export async function generateMetadata({ params }: PageProps<"/solutions/[problem]">): Promise<Metadata> {
  const { problem } = await params;
  const x = getProblem(problem);
  if (!x) return {};
  return pageMetadata({ title: x.seoTitle, description: x.seoDescription, path: problemHref(x.slug) });
}

export default async function Page({ params }: PageProps<"/solutions/[problem]">) {
  const { problem } = await params;
  const x = getProblem(problem);
  if (!x) notFound();
  const items = productIndex.filter((i) => x.products.includes(i.slug));
  const cats = x.categories.map(getCategory).filter((c) => c && c.status === "published");
  return (
    <>
      <JsonLd data={serviceLd({ name: x.name, serviceType: "Commercial pool water-treatment solution", description: x.seoDescription, path: problemHref(x.slug) })} />
      <PageHero
        eyebrow="Solutions by problem"
        title={x.name}
        lede={x.seoDescription}
        crumbs={[{ name: "Solutions", href: "/solutions/" }, { name: x.name, href: problemHref(x.slug) }]}
        actions={<><Button href={`/contact/?intent=${x.cta.intent}&problem=${x.slug}`} variant="onDark" size="lg">{x.cta.label}</Button><Button href="#equipment" variant="onDarkGhost" size="lg">Equipment that applies</Button></>}
        aside={<><h2 style={{ fontSize: "var(--text-md)" }}>You may be seeing</h2><ul>{x.symptoms.map((sy) => <li key={sy}>{sy}</li>)}</ul></>}
      />
      <Section>
        <SectionHeader eyebrow="How FreyTech approaches it" title="In order" />
        <ProcessSteps steps={x.approach.map((a, i) => ({ title: `Step ${i + 1}`, text: a }))} columns={4} />
        {x.resources?.length ? <p style={{ marginTop: "var(--sp-6)" }}><strong>Read more:</strong> {x.resources.map((r, i) => <span key={r}>{i > 0 && " · "}<Link href={r}>{r.replace(/\//g, " ").trim().replace(/-/g, " ")}</Link></span>)}</p> : null}
      </Section>
      <Section tone="alt" id="equipment">
        <SectionHeader eyebrow="Equipment that typically applies" title="Products and categories" lede="Which of these applies depends on your pool's demand, equipment, and staff. The assessment decides." />
        <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="grid grid-3">{items.map((i) => <li key={i.slug}><ProductCard p={i} compact /></li>)}</ul>
        <div className="grid grid-3" style={{ marginTop: "var(--sp-8)" }}>{cats.map((c) => c && <Card key={c.slug} title={c.name} href={categoryHref(c.slug)} footer="Category overview"><p>{c.overview[0]?.split(". ")[0]}.</p></Card>)}</div>
      </Section>
      <Section tight>
        <p className={p.small}>Other problems: {problems.filter((o) => o.slug !== x.slug).map((o, i) => <span key={o.slug}>{i > 0 && " · "}<Link href={problemHref(o.slug)}>{o.name}</Link></span>)}</p>
      </Section>
      <CTABand source={`solution-${x.slug}`} primaryLabel={x.cta.label} primaryHref={`/contact/?intent=${x.cta.intent}&problem=${x.slug}`} />
    </>
  );
}
