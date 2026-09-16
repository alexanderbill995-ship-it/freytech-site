import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { CTABand } from "@/components/ui/CTABand";
import { Breadcrumbs } from "@/components/ui/Breadcrumbs";
import { ProductLibrary } from "@/components/catalog/ProductLibrary";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { featuredProducts, publishedCategories, productHref, categoryHref, problems, problemHref, activeManufacturers } from "@/content/catalog";
import p from "@/styles/page.module.css";
import styles from "./products.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pool Equipment Catalog: Controls, Chemical Feed, Filtration, Pumps, Deck Equipment | FreyTech",
  description: "Search commercial pool equipment, water-treatment systems, automated controls, chemical feeders, filters, pumps, deck equipment, testing products and replacement parts, with experienced New York support outside NYC.",
  path: "/products/",
});

export default function Page() {
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "CollectionPage", name: "Products & Solutions", url: `${site.url}/products/`, about: "Commercial pool water-treatment equipment", isPartOf: { "@id": `${site.url}/#organization` } }} />
      <header className={[styles.hero, "on-dark"].join(" ")}>
        <div className="container">
          <Breadcrumbs crumbs={[{ name: "Products & Solutions", href: "/products/" }]} />
          <div className={styles.heroInner}>
            <p className="eyebrow">Products &amp; solutions · New York State outside NYC</p>
            <h1 className={styles.h1}>Looking for something? Let me show you what we&apos;ve got.</h1>
            <p className={styles.lede}>Search commercial pool equipment, water-treatment systems, automated controls, chemical feeders, filters, pumps, deck equipment, testing products and replacement parts, all with experienced New York support. Know the model, the manufacturer, or only the problem? Any of them will do.</p>
          </div>
        </div>
      </header>

      <Section tight id="library">
        <Suspense fallback={<p>Loading the catalog…</p>}>
          <ProductLibrary />
        </Suspense>
        <p className={styles.helpLine}>Not finding it, or not sure what you need? <Link href="/contact/?intent=find">Help me find the right solution</Link> or call <a href="tel:+18007242770">1-800-724-2770</a>.</p>
      </Section>

      <Section tone="alt">
        <div className={styles.featured}>
          {featuredProducts.map((f) => (
            <article key={f.slug} className={styles.featureCard}>
              <p className="eyebrow">{f.category === "automated-controls" ? "Automated controls" : "Chemical delivery"}</p>
              <h2>{f.name}</h2>
              <p className={styles.headline}>{f.headline}</p>
              <div className={styles.featureActions}>
                <Button href={f.flagshipHref ?? productHref(f)} size="md">{f.flagshipHref ? `${f.name} guide` : "View product"}</Button>
                <Link href={productHref(f)}>Specifications and fit</Link>
              </div>
            </article>
          ))}
          <aside className={styles.systemNote}>
            <p className="eyebrow">How they work together</p>
            <h2 style={{ fontSize: "var(--text-lg)" }}>One system, five stages</h2>
            <p className={styles.desc}>BECSys5 senses and decides. A feeder delivers sanitizer. Logs and alarms keep people informed. FreyTech supports the whole loop.</p>
            <Link href="/water-chemistry-modernization/">Complete water-chemistry systems</Link>
          </aside>
        </div>
      </Section>

      <Section>
        <div className={styles.threeCol}>
          <div>
            <SectionHeader eyebrow="Browse by system" title="Categories" />
            <ul className={styles.linkList}>{publishedCategories.map((c) => <li key={c.slug}><Link href={categoryHref(c.slug)}>{c.name}</Link></li>)}</ul>
          </div>
          <div>
            <SectionHeader eyebrow="Browse by manufacturer" title="Manufacturers" />
            <ul className={styles.linkList}>{activeManufacturers.map((m) => <li key={m.slug}><Link href={`/manufacturers/${m.slug}/`}>{m.name}</Link></li>)}</ul>
            <p className={p.small} style={{ marginTop: "var(--sp-3)" }}><Link href="/manufacturers/">All manufacturers</Link></p>
          </div>
          <div>
            <SectionHeader eyebrow="Browse by problem" title="Start from what is wrong" />
            <ul className={styles.linkList}>{problems.map((pr) => <li key={pr.slug}><Link href={problemHref(pr.slug)}>{pr.name}</Link></li>)}</ul>
          </div>
        </div>
      </Section>

      <Section tone="dark" tight>
        <SectionHeader eyebrow="The system" title="Measure → Control → Feed → Monitor → Support" />
        <SystemFlow compact />
      </Section>

      <CTABand source="products" title="Would you rather just ask?" text="Tell Angelo what is happening at your facility or what you are trying to replace. You will get a straight answer about options, fit, and availability." primaryLabel="Talk With Angelo" primaryHref="/contact/?intent=angelo" secondaryLabel="Help Me Find the Right Solution" secondaryHref="/contact/?intent=find" />
    </>
  );
}
