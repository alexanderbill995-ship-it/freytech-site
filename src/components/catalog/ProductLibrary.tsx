"use client";
import Link from "next/link";
import { useRouter, useSearchParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { productIndex, publishedCategories, facilities, activeManufacturers, projectTypes } from "@/content/catalog";
import { SearchEngine } from "@/lib/search/engine";
import { searchDocs } from "@/lib/search/index";
import { track } from "@/lib/analytics";
import { ProductCard } from "./ProductCard";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import styles from "./ProductLibrary.module.css";

type Filters = { q: string; category: string; facility: string; manufacturer: string; project: string; availability: string; docs: string; sort: string };
const empty: Filters = { q: "", category: "", facility: "", manufacturer: "", project: "", availability: "", docs: "", sort: "" };
const read = (sp: URLSearchParams): Filters => ({ q: sp.get("q") ?? "", category: sp.get("category") ?? "", facility: sp.get("facility") ?? "", manufacturer: sp.get("manufacturer") ?? "", project: sp.get("project") ?? "", availability: sp.get("availability") ?? "", docs: sp.get("docs") ?? "", sort: sp.get("sort") ?? "" });

/** Category chips under the search: broad, buyer-friendly groupings that map to category slugs. */
const chips: { label: string; value: string }[] = [
  { label: "All", value: "" }, { label: "Controls", value: "automated-controls" }, { label: "Chemical Delivery", value: "chemical-delivery-chlorination" }, { label: "Filtration", value: "filtration" },
  { label: "Pumps & Flow", value: "pumps-circulation-flow" }, { label: "UV & Treatment", value: "uv-supplemental-treatment" }, { label: "Heating", value: "heating-energy" }, { label: "Deck Equipment", value: "deck-equipment" },
  { label: "Accessibility", value: "accessibility-safety" }, { label: "Testing", value: "water-testing-monitoring" }, { label: "Vacuums", value: "vacuums-cleaning" }, { label: "Chemicals", value: "specialty-chemicals" }, { label: "Parts", value: "parts-accessories-replacement" },
];

let engine: SearchEngine | null = null;
const getEngine = () => (engine ??= new SearchEngine(searchDocs));

/**
 * Product library. Search is primary; category chips give one-tap narrowing;
 * everything else sits behind "Filter results" (side panel on desktop, bottom
 * sheet on small screens). URL is the single source of truth, mirrored to
 * sessionStorage so returning from a product page restores state.
 */
export function ProductLibrary() {
  const sp = useSearchParams(); const router = useRouter(); const pathname = usePathname();
  const f = useMemo(() => read(new URLSearchParams(sp.toString())), [sp]);
  const [panelOpen, setPanelOpen] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);
  const filterBtnRef = useRef<HTMLButtonElement>(null);

  const push = useCallback((next: Filters, changed?: string) => {
    const params = new URLSearchParams();
    (Object.keys(next) as (keyof Filters)[]).forEach((k) => { if (next[k]) params.set(k, next[k]); });
    const qs = params.toString();
    try { sessionStorage.setItem("ft_product_filters", qs); } catch { /* ignore */ }
    if (changed) track("filter_used", { filter: changed, value: next[changed as keyof Filters] });
    router.replace(qs ? `${pathname}?${qs}` : pathname, { scroll: false });
  }, [router, pathname]);

  useEffect(() => {
    if (!panelOpen) return;
    const first = panelRef.current?.querySelector<HTMLElement>("select, button, input"); first?.focus();
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") { setPanelOpen(false); filterBtnRef.current?.focus(); } }
    document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey);
  }, [panelOpen]);

  const availableCategories = useMemo(() => new Set(productIndex.map((p) => p.category)), []);
  const visibleChips = chips.filter((c) => !c.value || availableCategories.has(c.value));

  const results = useMemo(() => {
    let items = productIndex
      .filter((p) => !f.category || p.category === f.category)
      .filter((p) => !f.facility || p.facilities.includes(f.facility))
      .filter((p) => !f.manufacturer || p.manufacturer === f.manufacturer)
      .filter((p) => !f.project || p.projectTypes.includes(f.project as never))
      .filter((p) => !f.availability || p.availability === f.availability)
      .filter((p) => !f.docs || p.hasDocs);
    if (f.q.trim().length >= 2) {
      const hits = getEngine().search(f.q, { kinds: ["product"], limit: 500 });
      const order = new Map(hits.map((h, i) => [h.doc.id.replace("product:", ""), i]));
      items = items.filter((p) => order.has(p.slug));
      if (!f.sort || f.sort === "best") items = [...items].sort((a, b) => (order.get(a.slug) ?? 0) - (order.get(b.slug) ?? 0));
    }
    const by = (k: "name" | "manufacturerName" | "categoryName") => (a: typeof items[number], b: typeof items[number]) => a[k].localeCompare(b[k]) || a.name.localeCompare(b.name);
    if (f.sort === "name") items = [...items].sort(by("name"));
    else if (f.sort === "manufacturer") items = [...items].sort(by("manufacturerName"));
    else if (f.sort === "category") items = [...items].sort(by("categoryName"));
    else if (!f.q) items = [...items].sort((a, b) => Number(b.featured) - Number(a.featured) || a.name.localeCompare(b.name));
    return items;
  }, [f]);

  const activeFilters = (["category", "facility", "manufacturer", "project", "availability", "docs"] as (keyof Filters)[]).filter((k) => f[k]);
  const labelFor = (k: keyof Filters, v: string) => k === "category" ? publishedCategories.find((c) => c.slug === v)?.name : k === "facility" ? facilities.find((x) => x.slug === v)?.name : k === "manufacturer" ? activeManufacturers.find((m) => m.slug === v)?.name : k === "project" ? projectTypes.find((t) => t.value === v)?.label : k === "availability" ? { confirmed: "Available through FreyTech", request: "Availability on request", discontinued: "Discontinued" }[v] : k === "docs" ? "Has documents" : v;
  const set = (k: keyof Filters) => (e: React.ChangeEvent<HTMLSelectElement | HTMLInputElement>) => push({ ...f, [k]: e.target.type === "checkbox" ? ((e.target as HTMLInputElement).checked ? "1" : "") : e.target.value }, k);
  const closest = useMemo(() => f.q ? getEngine().search(f.q, { kinds: ["category", "manufacturer", "problem"], limit: 4 }) : [], [f.q]);
  const popular = useMemo(() => productIndex.filter((p) => p.featured).slice(0, 3), []);

  return (
    <div className={styles.wrap}>
      <div className={styles.searchRow}>
        <GlobalSearch variant="hero" defaultValue={f.q} placeholder="Search by product, manufacturer, model, problem or facility…" onSubmitQuery={(q) => push({ ...f, q }, "q")} showExamples={!f.q} label="Search the catalog" />
      </div>

      <div className={styles.chips} role="group" aria-label="Filter by category">
        {visibleChips.map((c) => (
          <button key={c.value} type="button" className={[styles.chip, f.category === c.value ? styles.chipActive : ""].join(" ")} aria-pressed={f.category === c.value} onClick={() => push({ ...f, category: c.value }, "category")}>{c.label}</button>
        ))}
      </div>

      <div className={styles.bar}>
        <p className={styles.status} role="status" aria-live="polite">
          <strong>{results.length}</strong> {results.length === 1 ? "product" : "products"}{f.q ? <> for “{f.q}”</> : null}
        </p>
        <div className={styles.barActions}>
          <label className={styles.sortLabel}>Sort
            <select value={f.sort || "best"} onChange={set("sort")} className={styles.sort} aria-label="Sort results">
              <option value="best">Best match</option><option value="name">Product name</option><option value="manufacturer">Manufacturer</option><option value="category">Category</option>
            </select>
          </label>
          <button ref={filterBtnRef} type="button" className={styles.filterBtn} aria-expanded={panelOpen} aria-controls="pl-panel" onClick={() => setPanelOpen((o) => !o)}>
            <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M2 4h12M4 8h8M6 12h4" /></svg>
            Filter results{activeFilters.length ? ` (${activeFilters.length})` : ""}
          </button>
        </div>
      </div>

      {(activeFilters.length > 0 || f.q) && (
        <ul className={styles.active} aria-label="Active filters">
          {f.q && <li><button type="button" className={styles.activeChip} onClick={() => push({ ...f, q: "" }, "q")}>Search: “{f.q}” <span aria-hidden="true">×</span><span className="visually-hidden"> (remove)</span></button></li>}
          {activeFilters.map((k) => <li key={k}><button type="button" className={styles.activeChip} onClick={() => push({ ...f, [k]: "" }, k)}>{labelFor(k, f[k])} <span aria-hidden="true">×</span><span className="visually-hidden"> (remove)</span></button></li>)}
          <li><button type="button" className={styles.clearAll} onClick={() => push(empty, "clear")}>Clear all</button></li>
        </ul>
      )}

      <div className={styles.body}>
        <div id="pl-panel" ref={panelRef} className={[styles.panel, panelOpen ? styles.panelOpen : ""].join(" ")} hidden={!panelOpen} role="dialog" aria-label="Filter results" aria-modal="false">
          <div className={styles.panelHead}><h3>Filter results</h3><button type="button" className={styles.close} onClick={() => { setPanelOpen(false); filterBtnRef.current?.focus(); }}>Done</button></div>
          <div className={styles.panelBody}>
            <label className={styles.field}>Category<select value={f.category} onChange={set("category")}><option value="">All categories</option>{publishedCategories.map((c) => <option key={c.slug} value={c.slug}>{c.name}</option>)}</select></label>
            <label className={styles.field}>Manufacturer<select value={f.manufacturer} onChange={set("manufacturer")}><option value="">All manufacturers</option>{activeManufacturers.map((m) => <option key={m.slug} value={m.slug}>{m.name}</option>)}</select></label>
            <label className={styles.field}>Facility / application<select value={f.facility} onChange={set("facility")}><option value="">All facilities</option>{facilities.map((x) => <option key={x.slug} value={x.slug}>{x.name}</option>)}</select></label>
            <label className={styles.field}>Project type<select value={f.project} onChange={set("project")}><option value="">Any project type</option>{projectTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}</select></label>
            <label className={styles.field}>Availability<select value={f.availability} onChange={set("availability")}><option value="">Any</option><option value="confirmed">Available through FreyTech</option><option value="request">Availability on request</option><option value="discontinued">Discontinued (replacements)</option></select></label>
            <label className={styles.check}><input type="checkbox" checked={!!f.docs} onChange={set("docs")} /> Has linked documents</label>
            <div className={styles.panelFoot}><button type="button" className={styles.clearAll} onClick={() => push({ ...empty, q: f.q }, "clear")}>Clear all</button><button type="button" className={styles.apply} onClick={() => { setPanelOpen(false); filterBtnRef.current?.focus(); }}>Show {results.length} {results.length === 1 ? "product" : "products"}</button></div>
          </div>
        </div>

        {results.length === 0 ? (
          <div className={styles.empty}>
            <h3>We may still be able to help.</h3>
            <p>Try another product name, manufacturer or equipment type, or tell us what you need to replace. FreyTech sources equipment beyond what is listed here for the systems it installs and services.</p>
            {closest.length > 0 && <p><strong>Closest matches:</strong> {closest.map((h, i) => <span key={h.doc.id}>{i > 0 && " · "}<Link href={h.doc.href}>{h.doc.title}</Link></span>)}</p>}
            <p><strong>Suggested searches:</strong> {["BECSys5", "Pulsar Precision", "Defender filters", "pool lifts", "metering pumps", "UV"].map((s, i) => <span key={s}>{i > 0 && " · "}<button type="button" className={styles.linkBtn} onClick={() => push({ ...empty, q: s }, "q")}>{s}</button></span>)}</p>
            <div className={styles.emptyActions}>
              <button type="button" className={styles.clearAll} onClick={() => push(empty, "clear")}>Clear all filters</button>
              <Link href={`/contact/?intent=find&search_query=${encodeURIComponent(f.q)}`} className={styles.apply}>Help me find it</Link>
              <a href="tel:+18007242770" className={styles.linkBtn}>Call 1-800-724-2770</a>
            </div>
            <div className={styles.popular}>
              <p className={styles.popularLabel}>Popular products</p>
              <ul className={styles.grid}>{popular.map((p) => <li key={p.slug}><ProductCard p={p} compact /></li>)}</ul>
            </div>
          </div>
        ) : (
          <ul className={styles.grid} aria-label="Products">{results.map((p) => <li key={p.slug}><ProductCard p={p} /></li>)}</ul>
        )}
      </div>
    </div>
  );
}
