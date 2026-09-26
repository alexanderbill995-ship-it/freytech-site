import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { pageMetadata } from "@/lib/seo";
import { activeManufacturers, publishedProducts, publishedCategories } from "@/content/catalog";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Commercial Pool Equipment Manufacturers | Browse by Brand | FreyTech",
  description: "Browse commercial pool equipment by manufacturer: controllers, chemical feeders, filters, pumps, UV, heaters, deck equipment, and testing. Availability and New York support through FreyTech.",
  path: "/manufacturers/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Browse by manufacturer" title="Manufacturers" lede="Every manufacturer represented in the FreyTech catalog, with the categories and products we can help you evaluate. Where FreyTech's dealer relationship is documented we say so; otherwise we say availability is confirmed on request." crumbs={[{ name: "Products & Solutions", href: "/products/" }, { name: "Manufacturers", href: "/manufacturers/" }]} compact />
      <Section>
        <div className="grid grid-3">
          {activeManufacturers.map((m) => {
            const items = publishedProducts.filter((x) => x.manufacturer === m.slug);
            const cats = Array.from(new Set(items.map((x) => x.category))).map((c) => publishedCategories.find((k) => k.slug === c)?.short).filter(Boolean);
            return (
              <article key={m.slug} className={p.compareCol}>
                <p className={p.kicker}>{items.length} {items.length === 1 ? "product" : "products"} · {cats.join(", ")}</p>
                <h2 style={{ fontSize: "var(--text-lg)" }}><Link href={`/manufacturers/${m.slug}/`} style={{ textDecoration: "none", color: "inherit" }}>{m.name}</Link></h2>
                <p className={p.small} style={{ marginTop: "var(--sp-2)" }}>{m.relationshipStatus === "verified" ? "Documented relationship" : "Availability confirmed on request"}</p>
                <p style={{ marginTop: "var(--sp-3)" }}><Link href={`/manufacturers/${m.slug}/`}>View manufacturer</Link></p>
              </article>
            );
          })}
        </div>
        <Callout tone="warn" title="About manufacturer relationships">
          <p>FreyTech names a manufacturer relationship only where it is documented. For every other brand, products are listed so you can find and evaluate them; contact FreyTech to confirm availability, lead time, and service coverage for your facility.</p>
        </Callout>
      </Section>
      <CTABand source="manufacturers" primaryLabel="Request Product Availability" primaryHref="/contact/?intent=availability" />
    </>
  );
}
