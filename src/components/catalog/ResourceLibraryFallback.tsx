import Link from "next/link";
import { resourceLibrary } from "@/content/resourceLibrary";
import { publishedProducts, manufacturers } from "@/content/catalog";
import styles from "./ResourceLibrary.module.css";

/**
 * Static, non-interactive stand-in for ResourceLibrary, rendered as the Suspense
 * fallback around it. Under `output: "export"` the fallback is what actually
 * prerenders to HTML (ResourceLibrary itself reads useSearchParams and only takes
 * over on hydration), so this must be the full, unfiltered resource list using the
 * same item markup, not a loading message.
 */
export function ResourceLibraryFallback() {
  const items = resourceLibrary;
  return (
    <div className={styles.wrap}>
      <p role="status" className={styles.status}>{items.length} {items.length === 1 ? "resource" : "resources"}</p>
      <ul className={styles.list}>
        {items.map((r) => (
          <li key={r.id} className={styles.item}>
            <div className={styles.meta}><span className={styles.type}>{r.type}</span><span className={styles.file}>{r.fileType}</span>{r.manufacturer && <span className={styles.mfr}>{manufacturers.find((m) => m.slug === r.manufacturer)?.name}</span>}</div>
            <h3 className={styles.title}>
              {r.status === "linked" && r.href ? (
                r.external ? <a href={r.href} target="_blank" rel="noopener">{r.title}<span className="visually-hidden"> ({r.fileType}, opens manufacturer site in a new tab)</span></a> : <Link href={r.href}>{r.title}</Link>
              ) : <span>{r.title}</span>}
            </h3>
            <p className={styles.desc}>{r.description}</p>
            {r.status === "placeholder" && <p className={styles.note}><strong>Available on request.</strong> {r.note} <Link href={`/contact/?intent=information&product=${encodeURIComponent(r.title)}`}>Request it</Link>.</p>}
            {r.products.length > 0 && <p className={styles.products}>For: {r.products.map((ps, i) => { const x = publishedProducts.find((y) => y.slug === ps); return x ? <span key={ps}>{i > 0 && ", "}<Link href={`/products/${x.category}/${x.slug}/`}>{x.name}</Link></span> : null; })}</p>}
          </li>
        ))}
      </ul>
    </div>
  );
}
