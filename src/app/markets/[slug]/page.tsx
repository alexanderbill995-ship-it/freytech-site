import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, faqLd } from "@/lib/seo";
import { markets, getMarket } from "@/content/markets";
import p from "@/styles/page.module.css";

export function generateStaticParams() {
  return markets.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({ params }: PageProps<"/markets/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) return {};
  return pageMetadata({ title: m.title, description: m.description, path: `/markets/${m.slug}/` });
}

export default async function Page({ params }: PageProps<"/markets/[slug]">) {
  const { slug } = await params;
  const m = getMarket(slug);
  if (!m) notFound();
  return (
    <>
      <JsonLd data={faqLd(m.faqs)} />
      <PageHero
        eyebrow="Markets served"
        title={m.name}
        lede={m.intro}
        crumbs={[{ name: "Markets", href: "/markets/" }, { name: m.short, href: `/markets/${m.slug}/` }]}
        actions={<><Button href={m.nextAction.href} variant="onDark" size="lg">{m.nextAction.label}</Button><Button href="#solutions" variant="onDarkGhost" size="lg">Relevant solutions</Button></>}
        aside={
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>Who is usually involved</h2>
            <ul>{m.stakeholders.map((s) => <li key={s}>{s}</li>)}</ul>
          </>
        }
      />

      <Section>
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Operational pressures" title="What makes chemistry hard here" />
            <ul className={p.checkList}>{m.pressures.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <SectionHeader eyebrow="Buying triggers" title="When projects usually start" />
            <ul className={p.checkList}>{m.triggers.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
        </div>
      </Section>

      <Section tone="alt" id="solutions">
        <SectionHeader eyebrow="Relevant solutions" title="What typically fits" lede="Recommendations are made after an assessment. These are the solutions most often relevant to this market." />
        <div className="grid grid-2">
          {m.solutions.map((s) => (
            <Card key={s.title} title={s.title} href={s.href} footer="Learn more"><p>{s.text}</p></Card>
          ))}
        </div>
      </Section>

      {m.references && m.references.length > 0 && (
        <Section tight>
          <h2 style={{ fontSize: "var(--text-xl)" }}>References in this market</h2>
          <p className={p.small} style={{ margin: "var(--sp-2) 0 var(--sp-4)" }}>Named on FreyTech&apos;s current website. <Confirm note="Confirm each">Each is being reconfirmed before launch.</Confirm></p>
          <ul className={p.pillList}>{m.references.map((r) => <li key={r}>{r}</li>)}</ul>
        </Section>
      )}

      <Section tone="dark">
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Before you contact us" title="Helpful to have ready" lede="None of this is required. It lets a specialist prepare a useful first conversation." />
            <ul className={p.checkList}>{m.prepare.map((s) => <li key={s}>{s}</li>)}</ul>
          </div>
          <div>
            <SectionHeader eyebrow="Next step" title={m.nextAction.label} lede={m.nextAction.text} />
            <div className={p.actions}>
              <Button href={m.nextAction.href} variant="onDark" size="lg">{m.nextAction.label}</Button>
              <Button href="/request-service/" variant="onDarkGhost" size="lg">Existing system needs service</Button>
            </div>
          </div>
        </div>
      </Section>

      <Section>
        <FAQ items={m.faqs} title={`${m.short}: frequently asked questions`} id="faq" />
        <p className={p.small} style={{ marginTop: "var(--sp-6)" }}>Other markets: {markets.filter((x) => x.slug !== m.slug).map((x, i) => <span key={x.slug}>{i > 0 && " · "}<Link href={`/markets/${x.slug}/`}>{x.short}</Link></span>)}</p>
      </Section>

      <CTABand source={`market-${m.slug}`} primaryLabel={m.nextAction.label} primaryHref={m.nextAction.href} />
    </>
  );
}
