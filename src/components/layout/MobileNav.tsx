"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { primaryNav, utilityNav, productsMega } from "@/lib/nav";
import { site, telHref } from "@/lib/site";
import { track } from "@/lib/analytics";
import styles from "./MobileNav.module.css";

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const id = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const btnRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const first = panelRef.current?.querySelector<HTMLElement>("a, button");
    first?.focus();
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") { setOpen(false); btnRef.current?.focus(); }
      if (e.key === "Tab" && panelRef.current) {
        const f = Array.from(panelRef.current.querySelectorAll<HTMLElement>("a, button, [tabindex]:not([tabindex='-1'])"));
        if (!f.length) return;
        const firstEl = f[0], lastEl = f[f.length - 1];
        if (e.shiftKey && document.activeElement === firstEl) { e.preventDefault(); lastEl.focus(); }
        else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); firstEl.focus(); }
      }
    }
    document.addEventListener("keydown", onKey);
    return () => { document.body.style.overflow = prev; document.removeEventListener("keydown", onKey); };
  }, [open]);

  return (
    <div className={styles.root}>
      <button ref={btnRef} type="button" className={styles.toggle} aria-expanded={open} aria-controls={id} onClick={() => setOpen(!open)}>
        <span className="visually-hidden">{open ? "Close menu" : "Open menu"}</span>
        <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
          {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
        </svg>
      </button>
      <div id={id} ref={panelRef} className={styles.panel} hidden={!open} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(false); }}>
        <nav aria-label="Mobile primary">
          <ul className={styles.list}>
            {primaryNav.map((item) => (
              <li key={item.label} className={styles.group}>
                {item.label === productsMega.label ? (
                  <details className={styles.details}>
                    <summary className={styles.summary}>{item.label}
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.5 6l4.5 4.5L12.5 6" /></svg>
                    </summary>
                    <ul className={styles.sub}>
                      <li><Link href="/products/" className={styles.subLink}>All products</Link></li>
                      {productsMega.columns.map((col) => (
                        <li key={col.heading}>
                          <details className={styles.detailsInner}>
                            <summary className={styles.summaryInner}>{col.heading}</summary>
                            <ul className={styles.sub}>
                              {col.items.map((c) => (
                                <li key={c.href}><Link href={c.href} className={styles.subLink} aria-current={pathname === c.href ? "page" : undefined}>{c.label}</Link></li>
                              ))}
                            </ul>
                          </details>
                        </li>
                      ))}
                    </ul>
                  </details>
                ) : item.children ? (
                  <details className={styles.details}>
                    <summary className={styles.summary}>{item.label}
                      <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M3.5 6l4.5 4.5L12.5 6" /></svg>
                    </summary>
                    <ul className={styles.sub}>
                      <li><Link href={item.href} className={styles.subLink}>All {item.label.toLowerCase()}</Link></li>
                      {item.children.map((c) => (
                        <li key={c.href}><Link href={c.href} className={styles.subLink} aria-current={pathname === c.href ? "page" : undefined}>{c.label}</Link></li>
                      ))}
                    </ul>
                  </details>
                ) : (
                  <Link href={item.href} className={styles.link} aria-current={pathname === item.href ? "page" : undefined}>{item.label}</Link>
                )}
              </li>
            ))}
            {utilityNav.map((i) => (
              <li key={i.href}><Link href={i.href} className={styles.link}>{i.label}</Link></li>
            ))}
          </ul>
        </nav>
        <div className={styles.footer}>
          <Link href="/contact/" className={styles.primary}>Request a System Assessment</Link>
          {site.phone && (
            <a href={telHref(site.phone)} className={styles.phone} onClick={() => track("phone_click", { location: "mobile_menu" })}>Call {site.phone}</a>
          )}
          <p className={styles.territory}>{site.territory}</p>
        </div>
      </div>
    </div>
  );
}
