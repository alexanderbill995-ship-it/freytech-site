"use client";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useMemo } from "react";
import { resourceLibrary, resourceTypes } from "@/content/resourceLibrary";
import { publishedProducts, publishedCategories, manufacturers } from "@/content/catalog";
import { track } from "@/lib/analytics";
import styles from "./ResourceLibrary.module.css";

type F = { product: string; manufacturer: string; type: string; category: string };
const empty: F = { product: "", manufacturer: "", type: "", category: "" };
const read = (sp: URLSearchParams): F => ({ product: sp.get("product") ?? "", manufacturer: sp.get("manufacturer") ?? "", type: sp.get("type") ?? "", category: sp.get("category") ?? "" });

/** Filterable technical library. Filters live in the URL so product pages can deep-link (e.g. ?product=becsys5). */
export function ResourceLibrary() {
  const sp = useSearchParams(); const router = useRouter(); const pathname = usePathname();
  const f = useMemo(() => read(new URLSearchParams(sp.toString())), [sp]);
  const push = useCallback((n: F) => {
    const params = new URLSearchParams(); (Object.keys(n) as (keyof F)[]).forEach((k) => { if (n[k]) params.set(k, n[k]); });
    const qs = params.toString(); router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname]);
  const set = (k: keyof F) => (e: React.ChangeEvent<HTMLSelectElement>) => push({ ...f, [k]: e.target.value });

  const items = useMemo(() => resourceLibrary
    .filter((r) => !f.product || r.products.includes(f.product))
    .filter((r) => !f.manufacturer || r.manufacturer === f.manufacturer)
    .filter((r) => !f.type || r.type === f.type)
    .filter((r) => !f.category || r.category === f.category), [f]);
  const active = (Object.keys(f) as (keyof F)[]).some((k) => f[k]);
  const usedTypes = resourceTypes.filter((t) => resourceLibrary.some((r) => r.type === t));
  const usedMfrs = manufacturers.filter((m) => resourceLibrary.some((r) => r.manufacturer === m.slug));

  return (
    <div className={styles.wrap}>
      <form className={styles.filters} aria-label="Filter resources" onSubmit={(e) => e.preventDefault()}>
        <div><label htmlFor="rl-product" className={styles.label}>Product</label><select id="rl-product" value={f.product} onChange={set("product")} className={styles.select}><option value="">All products</option>{publishedProducts.map((x) => <option key={x.slug} value={x.slug}>{x.name}</option>)}</select></div>
        <div><label htmlFor="rl-mfr" className={styles.label}>Manufacturer</label><select id="rl-mfr" value={f.manufacturer} onChange={set("manufacturer")} className={styles.select}><option value="">All manufacturers</option>{usedMfrs.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}</select></div>
        <div><label htmlFor="rl-type" className={styles.label}>Resource type</label><select id="rl-type" value={f.type} onChange={set("type")} className={styles.select}><option value="">All types</option>{usedTypes.map((t) => <option key={t} value={t}>{t}</option>)}</select></div>
        <div><label htmlFor="rl-cat" className={styles.label}>Product category</label><select id="rl-cat" value={f.category} onChange={set("category")} className={styles.select}><option value="">All categories</option>{publishedCategories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></div>
        <div className={styles.bar}><p role="status" aria-live="polite" className={styles.status}>{items.length} {items.length === 1 ? "resource" : "resources"}</p>{active && <button type="button" className={styles.clear} onClick={() => push(empty)}>Clear filters</button>}</div>
      </form>
      {items.length === 0 ? (
        <div className={styles.empty}><h3>No resources match</h3><p>Clear a filter, or <Link href="/contact/?intent=information">request the document you need</Link>. Manufacturer documents not published here are provided under the manufacturers&apos; terms.</p></div>
      ) : (
        <ul className={styles.list}>
          {items.map((r) => (
            <li key={r.id} className={styles.item}>
              <div className={styles.meta}><span className={styles.type}>{r.type}</span><span className={styles.file}>{r.fileType}</span>{r.manufacturer && <span className={styles.mfr}>{manufacturers.find((m) => m.slug === r.manufacturer)?.name}</span>}</div>
              <h3 className={styles.title}>
                {r.status === "linked" && r.href ? (
                  r.external ? <a href={r.href} target="_blank" rel="noopener" onClick={() => track("document_download", { document: r.title, type: r.type })}>{r.title}<span className="visually-hidden"> ({r.fileType}, opens manufacturer site in a new tab)</span></a> : <Link href={r.href}>{r.title}</Link>
                ) : <span>{r.title}</span>}
              </h3>
              <p className={styles.desc}>{r.description}</p>
              {r.status === "placeholder" && <p className={styles.note}><strong>Available on request.</strong> {r.note} <Link href={`/contact/?intent=information&product=${encodeURIComponent(r.title)}`}>Request it</Link>.</p>}
              {r.products.length > 0 && <p className={styles.products}>For: {r.products.map((ps, i) => { const x = publishedProducts.find((y) => y.slug === ps); return x ? <span key={ps}>{i > 0 && ", "}<Link href={`/products/${x.category}/${x.slug}/`}>{x.name}</Link></span> : null; })}</p>}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
