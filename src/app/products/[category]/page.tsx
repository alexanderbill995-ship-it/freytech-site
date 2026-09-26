import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Card } from "@/components/ui/Card";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/ui/CTABand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { EquipmentRoom } from "@/components/diagrams/EquipmentRoom";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, faqLd, serviceLd } from "@/lib/seo";
import { publishedCategories, getCategory, productIndex, categoryHref, problems, problemHref, facilities, facilityHref } from "@/content/catalog";
import { resourceLibrary } from "@/content/resourceLibrary";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { activeManufacturers } from "@/content/catalog";
import p from "@/styles/page.module.css";

export function generateStaticParams() {
  return publishedCategories.map((c) => ({ category: c.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = getCategory(category);
  if (!c || c.status !== "published") return {};
  return pageMetadata({ title: c.seoTitle, description: c.seoDescription, path: categoryHref(c.slug) });
}

export default async function Page({ params }: PageProps<"/products/[category]">) {
  const { category } = await params;
  const c = getCategory(category);
  if (!c || c.status !== "published") notFound();
  const items = productIndex.filter((x) => x.category === c.slug).sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
  const related = c.related.map(getCategory).filter((x) => x && x.status === "published");
  const relProblems = problems.filter((pr) => pr.categories.includes(c.slug));
  const docs = resourceLibrary.filter((r) => r.category === c.slug && r.status === "linked").slice(0, 8);
  const facilitySlugs = Array.from(new Set(items.flatMap((i) => i.facilities)));

  return (
    <>
      <JsonLd data={[serviceLd({ name: `${c.name}: selection, installation, and service`, serviceType: c.name, description: c.seoDescription, path: categoryHref(c.slug) }), ...(c.faqs?.length ? [faqLd(c.faqs)] : [])]} />
      <PageHero
        eyebrow="Browse by system"
        title={c.name}
        lede={c.overview[0]}
        crumbs={[{ name: "Products & Solutions", href: "/products/" }, { name: c.name, href: categoryHref(c.slug) }]}
        actions={<><Button href={`/contact/?category=${c.slug}&intent=${c.cta.intent}`} variant="onDark" size="lg">{c.cta.label}</Button><Button href="#products" variant="onDarkGhost" size="lg">See products</Button></>}
        aside={<><h2 style={{ fontSize: "var(--text-md)" }}>Problems this equipment solves</h2><ul>{c.problems.map((x) => <li key={x}>{x}</li>)}</ul></>}
      />

      <div className="container"><nav className={p.anchorNav} aria-label="On this page"><a href="#overview">Overview</a><a href="#applications">Applications</a><a href="#selection">Selection</a><a href="#products">Products</a>{c.comparison && <a href="#comparison">Comparison</a>}<a href="#services">FreyTech services</a><a href="#resources">Resources</a></nav></div>

      <Section id="overview">
        <div className={p.split}>
          <div className="prose">
            {c.overview.slice(1).map((t, i) => <p key={i}>{t}</p>)}
            {c.slug === "automated-controls" && <p>The diagram below shows where the controller sits: it reads a sample stream, switches feed, and can monitor or control the rest of the room.</p>}
          </div>
          <div>
            <h3 id="applications">Common facility applications</h3>
            <ul className={p.checkList} style={{ marginTop: "var(--sp-4)" }}>{c.applications.map((a) => <li key={a}>{a}</li>)}</ul>
            {facilitySlugs.length > 0 && <p className={p.small} style={{ marginTop: "var(--sp-4)" }}>Browse by facility: {facilitySlugs.map((fs, i) => { const f = facilities.find((x) => x.slug === fs); return f ? <span key={fs}>{i > 0 && " · "}<Link href={facilityHref(fs)}>{f.short}</Link></span> : null; })}</p>}
          </div>
        </div>
        {c.slug === "automated-controls" && <div style={{ marginTop: "var(--sp-10)" }}><EquipmentRoom /></div>}
      </Section>

      <Section tone="alt" id="selection">
        <SectionHeader eyebrow="Selection considerations" title="What to decide before choosing equipment" />
        <div className={p.featureGrid}>{c.selection.map((x) => <div key={x.title} className={p.feature}><h3>{x.title}</h3><p>{x.text}</p></div>)}</div>
      </Section>

      <Section id="products">
        <SectionHeader eyebrow="Featured and available products" title={`${c.name} products`} lede="Products FreyTech can help you evaluate, and where documented, install and service. Featured items appear first; availability language is shown on each card." />
        <div style={{ maxWidth: "40rem", marginBottom: "var(--sp-8)" }}><GlobalSearch variant="inline" label={`Search within ${c.short.toLowerCase()} and the full catalog`} placeholder={`Search ${c.short.toLowerCase()} products, models, manufacturers…`} /></div>
        {items.length ? <ul style={{ listStyle: "none", padding: 0, margin: 0 }} className="grid grid-3">{items.map((x) => <li key={x.slug}><ProductCard p={x} /></li>)}</ul> : <p>Products in this category are provided on request.</p>}
        <p className={p.small} style={{ marginTop: "var(--sp-6)" }}><Link href={`/products/?category=${c.slug}`}>Filter the full library to {c.short.toLowerCase()}</Link> · Manufacturers in this category: {Array.from(new Set(items.map((i) => i.manufacturer))).map((ms, i) => { const m = activeManufacturers.find((x) => x.slug === ms); return m ? <span key={ms}>{i > 0 && ", "}<Link href={`/manufacturers/${ms}/`}>{m.name}</Link></span> : null; })}</p>
      </Section>

      {c.comparison && (
        <Section tone="alt" id="comparison">
          <SectionHeader eyebrow="Comparison guidance" title={c.comparison.title} />
          <div className="table-wrap">
            <table className={p.specTable}>
              <thead><tr>{c.comparison.head.map((h, i) => <th key={i} scope="col">{h}</th>)}</tr></thead>
              <tbody>{c.comparison.rows.map((r) => <tr key={r.label}><th scope="row">{r.label}</th>{r.cells.map((cell, i) => <td key={i}>{cell}</td>)}</tr>)}</tbody>
            </table>
          </div>
        </Section>
      )}

      <Section tone="dark" id="services">
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="FreyTech installation and service" title="What we do around the equipment" />
            <ul className={p.checkList}>{c.services.map((x) => <li key={x}>{x}</li>)}</ul>
          </div>
          <div>
            <SectionHeader eyebrow="Related system categories" title="Usually planned together" />
            <div className="grid" style={{ gap: "var(--sp-4)" }}>
              {related.map((r) => r && <Card key={r.slug} title={r.name} href={categoryHref(r.slug)} footer="Category"><p>{r.overview[0]?.split(". ")[0]}.</p></Card>)}
            </div>
          </div>
        </div>
      </Section>

      <Section id="resources">
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Technical resources" title="Brochures, manuals, and guides" />
            {docs.length ? <ul className={p.checkList}>{docs.map((d) => <li key={d.id}>{d.external ? <a href={d.href} target="_blank" rel="noopener">{d.title}</a> : <Link href={d.href!}>{d.title}</Link>} <span className={p.small}>({d.type}{d.fileType === "PDF" ? ", PDF" : ""})</span></li>)}</ul> : <p>Documents are provided on request.</p>}
            <p style={{ marginTop: "var(--sp-4)" }}><Link href={`/resources/?category=${c.slug}`}>Resource library filtered to {c.short.toLowerCase()}</Link></p>
          </div>
          {relProblems.length > 0 && (
          <div>
            <SectionHeader eyebrow="Solutions" title="Problems this category addresses" />
            <ul className={p.checkList}>{relProblems.map((pr) => <li key={pr.slug}><Link href={problemHref(pr.slug)}>{pr.name}</Link></li>)}</ul>
          </div>
          )}
        </div>
        {c.faqs?.length ? <div style={{ marginTop: "var(--sp-12)" }}><FAQ items={c.faqs} title={`${c.name}: common questions`} id={`faq-${c.slug}`} /></div> : null}
      </Section>

      <CTABand source={`category-${c.slug}`} title={c.cta.label} text={c.cta.text} primaryLabel={c.cta.label} primaryHref={`/contact/?category=${c.slug}&intent=${c.cta.intent}`} secondaryLabel="Talk to a Water-Quality Specialist" secondaryHref={`/contact/?category=${c.slug}&intent=specialist`} />
    </>
  );
}
