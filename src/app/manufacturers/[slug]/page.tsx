import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { ProductCard } from "@/components/catalog/ProductCard";
import { ManufacturerView } from "@/components/catalog/ManufacturerView";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { activeManufacturers, getManufacturer, publishedProducts, productIndex, publishedCategories, categoryHref } from "@/content/catalog";
import { resourceLibrary } from "@/content/resourceLibrary";
import p from "@/styles/page.module.css";

export function generateStaticParams() { return activeManufacturers.map((m) => ({ slug: m.slug })); }

export async function generateMetadata({ params }: PageProps<"/manufacturers/[slug]">): Promise<Metadata> {
  const { slug } = await params; const m = getManufacturer(slug);
  if (!m) return {};
  const items = publishedProducts.filter((x) => x.manufacturer === slug);
  return pageMetadata({ title: `${m.name} Commercial Pool Equipment in New York | FreyTech`, description: `${m.name} products FreyTech can help you evaluate, install, and support: ${items.slice(0, 4).map((x) => x.name).join(", ")}. New York State outside NYC.`, path: `/manufacturers/${slug}/` });
}

export default async function Page({ params }: PageProps<"/manufacturers/[slug]">) {
  const { slug } = await params; const m = getManufacturer(slug);
  if (!m || !activeManufacturers.some((x) => x.slug === slug)) notFound();
  const items = productIndex.filter((x) => x.manufacturer === slug);
  const cats = Array.from(new Set(items.map((x) => x.category))).map((c) => publishedCategories.find((k) => k.slug === c)!).filter(Boolean);
  const docs = resourceLibrary.filter((r) => r.manufacturer === slug);
  const verified = m.relationshipStatus === "verified";
  return (
    <>
      <ManufacturerView slug={slug} />
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: `${m.name} products`, url: `${site.url}/manufacturers/${slug}/`, about: { "@type": "Brand", name: m.name } }} />
      <PageHero
        eyebrow="Manufacturer"
        title={m.name}
        lede={`${m.name} equipment in the FreyTech catalog, organized by category, with the technical resources we can point you to and honest availability language.${m.aka?.length ? ` Also known as: ${m.aka.join(", ")}.` : ""}`}
        crumbs={[{ name: "Products & Solutions", href: "/products/" }, { name: "Manufacturers", href: "/manufacturers/" }, { name: m.name, href: `/manufacturers/${slug}/` }]}
        compact
        actions={<><Button href={`/contact/?intent=${verified ? "assessment" : "availability"}&manufacturer=${slug}`} variant="onDark" size="lg">{verified ? "Talk With FreyTech About Selection" : "Request Availability"}</Button><a href={m.url} target="_blank" rel="noopener" style={{ color: "var(--blue-400)", alignSelf: "center", fontWeight: 600 }}>Manufacturer website</a></>}
        aside={<><h2 style={{ fontSize: "var(--text-md)" }}>Availability</h2><p>{verified ? m.relationship : "Contact FreyTech to confirm availability, lead time, and service coverage for your facility. FreyTech can help evaluate this product category for your facility."}</p>{!verified && <p style={{ marginTop: "0.5rem" }}><Confirm note="Relationship unverified">{m.relationship}</Confirm></p>}</>}
      />
      <Section>
        <SectionHeader eyebrow="Product categories" title={`${m.name} in the catalog`} />
        <ul className={p.pillList}>{cats.map((c) => <li key={c.slug}><Link href={categoryHref(c.slug)}>{c.name}</Link></li>)}</ul>
        <ul style={{ listStyle: "none", padding: 0, margin: "var(--sp-8) 0 0" }} className="grid grid-3">{items.map((x) => <li key={x.slug}><ProductCard p={x} /></li>)}</ul>
      </Section>
      <Section tone="alt">
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Technical resources" title="Documents" />
            {docs.length ? <ul className={p.checkList}>{docs.map((d) => <li key={d.id}>{d.status === "linked" && d.href ? (d.external ? <a href={d.href} target="_blank" rel="noopener">{d.title}</a> : <Link href={d.href}>{d.title}</Link>) : <>{d.title} <span className={p.small}>(available on request)</span></>} <span className={p.small}>({d.type})</span></li>)}</ul> : <p>Manufacturer documents are linked from each product page or provided on request.</p>}
            <p style={{ marginTop: "var(--sp-4)" }}><Link href={`/resources/?manufacturer=${slug}`}>Resource library filtered to {m.name}</Link></p>
          </div>
          <div>
            <Callout tone={verified ? "info" : "warn"} title="How FreyTech works with this equipment">
              <p>{verified ? "FreyTech selects, installs, commissions, trains operators on, and services this manufacturer's equipment for New York facilities outside NYC." : "FreyTech can help you evaluate this manufacturer's equipment for your facility, confirm availability and lead time, and coordinate installation and support where it is offered. No formal dealer relationship is implied."}</p>
            </Callout>
          </div>
        </div>
      </Section>
      <CTABand source={`manufacturer-${slug}`} primaryLabel={verified ? "Request a Facility Assessment" : "Request Product Availability"} primaryHref={`/contact/?intent=${verified ? "assessment" : "availability"}&manufacturer=${slug}`} />
    </>
  );
}
