import Link from "next/link";
import { productIndex } from "@/content/catalog";
import { ProductCard } from "./ProductCard";

/** Data-driven strip of related products for flagship pages (grows automatically as the catalog grows). */
export function RelatedProducts({ manufacturer, category, exclude = [], title, moreHref, moreLabel, limit = 6 }: { manufacturer?: string; category?: string; exclude?: string[]; title: string; moreHref: string; moreLabel: string; limit?: number }) {
  const items = productIndex.filter((p) => (!manufacturer || p.manufacturer === manufacturer) && (!category || p.category === category) && !exclude.includes(p.slug)).slice(0, limit);
  if (!items.length) return null;
  return (
    <div>
      <h3 style={{ fontSize: "var(--text-xl)", marginBottom: "var(--sp-5)" }}>{title}</h3>
      <ul style={{ listStyle: "none", margin: 0, padding: 0 }} className="grid grid-3">{items.map((p) => <li key={p.slug}><ProductCard p={p} compact /></li>)}</ul>
      <p style={{ marginTop: "var(--sp-5)", fontWeight: 600 }}><Link href={moreHref}>{moreLabel}</Link></p>
    </div>
  );
}
