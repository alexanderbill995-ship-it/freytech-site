import Link from "next/link";
import type { ProductIndexItem } from "@/content/catalog";
import { asset } from "@/lib/paths";
import { availabilityLabel } from "@/lib/search/index";
import styles from "./ProductCard.module.css";

const glyphs: Record<string, string> = {
  "automated-controls": "M3 4h18v12H3z M7 10h2l1.5-3 2 6 1.5-3H16 M9 20h6",
  "chemical-delivery-chlorination": "M8 3h8v4l-2 2v12H10V9L8 7z M10 15h4",
  filtration: "M4 5h16l-6 8v6l-4 2v-8z",
  "deck-accessibility-safety": "M6 20V10h12v10 M4 10l8-6 8 6 M10 20v-5h4v5",
  "water-testing-monitoring": "M9 3h6 M10 3v6l-5 9a2 2 0 002 3h10a2 2 0 002-3l-5-9V3",
  "parts-accessories-replacement": "M12 8a4 4 0 100 8 4 4 0 000-8z M12 2v3 M12 19v3 M2 12h3 M19 12h3 M5 5l2 2 M17 17l2 2 M5 19l2-2 M17 7l2-2",
};

export function ProductCard({ p, compact = false }: { p: ProductIndexItem; compact?: boolean }) {
  return (
    <article className={[styles.card, p.featured ? styles.featured : ""].join(" ")}>
      <div className={styles.media} aria-hidden={p.image ? undefined : true}>
        {p.image ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={asset(p.image.src)} alt={p.image.alt} loading="lazy" decoding="async" />
        ) : (
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round" className={styles.glyph}><path d={glyphs[p.category] ?? glyphs["parts-accessories-replacement"]} /></svg>
        )}
        {p.featured && <span className={styles.badge}>Featured</span>}
      </div>
      <div className={styles.body}>
        <p className={styles.meta}><span>{p.manufacturerName}</span><span aria-hidden="true">·</span><span>{p.categoryName}</span></p>
        <h3 className={styles.title}><Link href={p.href} className={styles.titleLink}>{p.name}</Link></h3>
        <p className={styles.desc}>{p.shortDescription}</p>
        <p className={[styles.avail, styles[`avail_${p.availability}`]].join(" ")}>{availabilityLabel[p.availability]}</p>
        {!compact && p.applications.length > 0 && (
          <p className={styles.fit}><span className={styles.fitLabel}>Best fit:</span> {p.applications.slice(0, 3).join(", ")}</p>
        )}
        <div className={styles.actions}>
          <Link href={p.href} className={styles.view}>View product<span className="visually-hidden">: {p.name}</span></Link>
          {p.availability === "confirmed" ? (
            <Link href={`/contact/?product=${encodeURIComponent(p.name)}&category=${p.category}&intent=assessment`} className={styles.assess}>Request an assessment<span className="visually-hidden"> for {p.name}</span></Link>
          ) : (
            <Link href={`/contact/?product=${encodeURIComponent(p.name)}&category=${p.category}&manufacturer=${p.manufacturer}&availability=${p.availability}&intent=availability`} className={styles.assess}>Request availability<span className="visually-hidden"> for {p.name}</span></Link>
          )}
        </div>
      </div>
    </article>
  );
}
