"use client";
import { useEffect, useId, useRef, useState } from "react";
import { GlobalSearch } from "./GlobalSearch";
import styles from "./HeaderSearch.module.css";

/**
 * Header search: inline combobox on wide screens; on narrow screens a labeled
 * "Search" button opens a full-width panel below the header. Escape closes and
 * returns focus to the button.
 */
export function HeaderSearch() {
  const [open, setOpen] = useState(false);
  const id = useId();
  const btnRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (!open) return;
    panelRef.current?.querySelector<HTMLInputElement>("input")?.focus();
    function onKey(e: KeyboardEvent) { if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); } }
    document.addEventListener("keydown", onKey); return () => document.removeEventListener("keydown", onKey);
  }, [open]);
  return (
    <>
      <div className={styles.inline}><GlobalSearch variant="header" placeholder="Search products, manufacturers, problems…" /></div>
      <button ref={btnRef} type="button" className={styles.toggle} aria-expanded={open} aria-controls={id} onClick={() => setOpen((o) => !o)}>
        <svg aria-hidden="true" width="18" height="18" viewBox="0 0 20 20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><circle cx="9" cy="9" r="6" /><path d="M13.5 13.5L18 18" /></svg>
        <span>Search</span>
      </button>
      <div id={id} ref={panelRef} className={styles.panel} hidden={!open}>
        <div className="container">
          <GlobalSearch variant="hero" placeholder="Search by product, manufacturer, model, problem or facility…" showExamples />
        </div>
      </div>
    </>
  );
}
