import { productIndex } from "@/content/catalog";
import { ProductCard } from "./ProductCard";
import styles from "./ProductLibrary.module.css";

/**
 * Static, non-interactive stand-in for ProductLibrary, rendered as the Suspense
 * fallback around it. Under `output: "export"` the fallback is what actually
 * prerenders to HTML (ProductLibrary itself reads useSearchParams and only takes
 * over on hydration), so this must be the full, unfiltered product list using the
 * same card component and grid markup, not a loading message.
 */
export function ProductLibraryFallback() {
  const items = [...productIndex].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
  return (
    <div className={styles.wrap}>
      <div className={styles.bar}>
        <p className={styles.status}><strong>{items.length}</strong> {items.length === 1 ? "product" : "products"}</p>
      </div>
      <ul className={styles.grid} aria-label="Products">
        {items.map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}
      </ul>
    </div>
  );
}
