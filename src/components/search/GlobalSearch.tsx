"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useId, useMemo, useRef, useState } from "react";
import { SearchEngine, groupHits, type SearchHit } from "@/lib/search/engine";
import { searchDocs, availabilityLabel } from "@/lib/search/index";
import { exampleSearches } from "@/lib/search/synonyms";
import { track } from "@/lib/analytics";
import styles from "./GlobalSearch.module.css";

let engine: SearchEngine | null = null;
function getEngine() { if (!engine) engine = new SearchEngine(searchDocs); return engine; }

type Props = {
  variant?: "header" | "hero" | "inline";
  placeholder?: string;
  autoFocus?: boolean;
  defaultValue?: string;
  /** Called instead of navigating when the visitor submits free text (used by the products page). */
  onSubmitQuery?: (q: string) => void;
  showExamples?: boolean;
  label?: string;
};

/**
 * Accessible instant search (WAI-ARIA combobox + listbox): typing shows grouped
 * predictive results; ↑/↓ move, Enter selects or submits, Escape closes.
 * Result counts are announced through a live region. No focus is forced on load
 * unless `autoFocus` is set by a page that exists for searching.
 */
export function GlobalSearch({ variant = "inline", placeholder = "Search by product, manufacturer, model, problem or facility…", autoFocus, defaultValue = "", onSubmitQuery, showExamples, label = "Search products, manufacturers and solutions" }: Props) {
  const id = useId();
  const router = useRouter();
  const [q, setQ] = useState(defaultValue);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(-1);
  const [debounced, setDebounced] = useState(defaultValue);
  const rootRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => { const t = window.setTimeout(() => setDebounced(q), 150); return () => window.clearTimeout(t); }, [q]);

  const hits = useMemo<SearchHit[]>(() => (debounced.trim().length >= 2 ? getEngine().search(debounced, { limit: 30 }) : []), [debounced]);
  const groups = useMemo(() => groupHits(hits, variant === "header" ? 4 : 5), [hits, variant]);
  const flat = useMemo(() => groups.flatMap((g) => g.hits), [groups]);

  useEffect(() => {
    if (debounced.trim().length >= 2) {
      track("product_search", { query: debounced, results: hits.length, variant });
      if (hits.length === 0) track("search_no_results", { query: debounced, variant });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [debounced]);

  useEffect(() => {
    function onDoc(e: MouseEvent) { if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false); }
    document.addEventListener("mousedown", onDoc); return () => document.removeEventListener("mousedown", onDoc);
  }, []);

  const submit = (query: string) => {
    const trimmed = query.trim();
    if (!trimmed) { inputRef.current?.focus(); return; }
    setOpen(false);
    if (onSubmitQuery) onSubmitQuery(trimmed); else router.push(`/products/?q=${encodeURIComponent(trimmed)}`);
  };
  const choose = (h: SearchHit) => {
    track("search_result_select", { query: debounced, id: h.doc.id, kind: h.doc.kind, position: flat.indexOf(h) });
    setOpen(false); setQ(""); router.push(h.doc.href);
  };

  const listboxId = `${id}-listbox`;
  const statusText = debounced.trim().length < 2 ? "" : hits.length === 0 ? `No matches for “${debounced}”. Press Enter to see suggestions.` : `${hits.length} ${hits.length === 1 ? "result" : "results"}. Use up and down arrows to review, Enter to open.`;

  return (
    <div ref={rootRef} className={[styles.root, styles[variant]].join(" ")}>
      <form role="search" className={styles.form} onSubmit={(e) => { e.preventDefault(); if (active >= 0 && flat[active]) choose(flat[active]); else submit(q); }}>
        <label htmlFor={`${id}-input`} className={variant === "header" ? "visually-hidden" : styles.label}>{label}</label>
        <div className={styles.field}>
          <svg aria-hidden="true" className={styles.icon} width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="9" r="6" /><path d="M13.5 13.5L18 18" /></svg>
          <input
            ref={inputRef} id={`${id}-input`} type="search" className={styles.input} value={q} placeholder={placeholder} autoComplete="off" autoFocus={autoFocus} enterKeyHint="search"
            role="combobox" aria-expanded={open && flat.length > 0} aria-controls={listboxId} aria-autocomplete="list" aria-activedescendant={active >= 0 && flat[active] ? `${id}-opt-${active}` : undefined}
            onChange={(e) => { setQ(e.target.value); setOpen(true); setActive(-1); }}
            onFocus={() => setOpen(true)}
            onKeyDown={(e) => {
              if (e.key === "ArrowDown") { e.preventDefault(); setOpen(true); setActive((a) => Math.min(a + 1, flat.length - 1)); }
              else if (e.key === "ArrowUp") { e.preventDefault(); setActive((a) => Math.max(a - 1, -1)); }
              else if (e.key === "Escape") { setOpen(false); setActive(-1); }
              else if (e.key === "Home" && open) { e.preventDefault(); setActive(0); }
              else if (e.key === "End" && open) { e.preventDefault(); setActive(flat.length - 1); }
            }}
          />
          <button type="submit" className={styles.button}><span>Search</span></button>
        </div>
        <p className="visually-hidden" role="status" aria-live="polite">{statusText}</p>
      </form>

      {showExamples && !q && (
        <p className={styles.examples}>Try: {exampleSearches.map((ex, i) => <span key={ex}>{i > 0 && ", "}<button type="button" className={styles.example} onClick={() => { setQ(ex); setOpen(true); inputRef.current?.focus(); }}>{ex}</button></span>)}</p>
      )}

      {open && debounced.trim().length >= 2 && (
        <div className={styles.panel} id={listboxId} role="listbox" aria-label="Search results">
          {flat.length === 0 ? (
            <div className={styles.noResults}>
              <p><strong>We may still be able to help.</strong> Try another product name, manufacturer or equipment type, or tell us what you need to replace.</p>
              <div className={styles.noResultsActions}>
                <button type="button" onClick={() => submit(q)} className={styles.linkBtn}>See suggestions for “{q}”</button>
                <Link href={`/contact/?intent=find&search_query=${encodeURIComponent(q)}`} onClick={() => setOpen(false)}>Help me find it</Link>
              </div>
            </div>
          ) : (
            groups.map((g) => (
              <div key={g.kind} className={styles.group} role="group" aria-label={g.label}>
                <p className={styles.groupLabel} aria-hidden="true">{g.label}</p>
                <ul className={styles.list}>
                  {g.hits.map((h) => {
                    const idx = flat.indexOf(h);
                    const av = h.doc.meta?.availability;
                    return (
                      <li key={h.doc.id} id={`${id}-opt-${idx}`} role="option" aria-selected={active === idx} className={[styles.item, active === idx ? styles.itemActive : ""].join(" ")} onMouseEnter={() => setActive(idx)}>
                        <a href={h.doc.href} className={styles.itemLink} onClick={(e) => { e.preventDefault(); choose(h); }} tabIndex={-1}>
                          {h.doc.kind === "product" && (
                            <span className={styles.thumb} aria-hidden="true">
                              {/* eslint-disable-next-line @next/next/no-img-element */}
                              {h.doc.image ? <img src={h.doc.image.src} alt="" loading="lazy" /> : <span className={styles.thumbGlyph} />}
                            </span>
                          )}
                          <span className={styles.itemBody}>
                            <span className={styles.itemTitle}>{h.doc.title}{h.doc.meta?.model ? <span className={styles.model}> · {h.doc.meta.model}</span> : null}</span>
                            {h.doc.subtitle && <span className={styles.itemSub}>{h.doc.subtitle}</span>}
                            {h.doc.description && <span className={styles.itemDesc}>{h.doc.description}</span>}
                            {av && <span className={[styles.avail, styles[`avail_${av}`]].join(" ")}>{availabilityLabel[av]}</span>}
                          </span>
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            ))
          )}
          {flat.length > 0 && (
            <div className={styles.footer}>
              <button type="button" className={styles.linkBtn} onClick={() => submit(q)}>All results for “{q}”</button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
