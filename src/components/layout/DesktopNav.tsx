"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { primaryNav } from "@/lib/nav";
import styles from "./DesktopNav.module.css";

/**
 * Desktop navigation with accessible disclosure menus:
 * - buttons toggle submenus (aria-expanded / aria-controls)
 * - Escape closes, clicking outside closes, focus leaving closes
 * - no hover-only interaction
 */
export function DesktopNav() {
  const [open, setOpen] = useState<string | null>(null);
  const ref = useRef<HTMLElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    function onDoc(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(null);
    }
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(null);
    }
    document.addEventListener("mousedown", onDoc);
    document.addEventListener("keydown", onKey);
    return () => { document.removeEventListener("mousedown", onDoc); document.removeEventListener("keydown", onKey); };
  }, []);

  return (
    <nav ref={ref} aria-label="Primary" className={styles.nav} onBlur={(e) => { if (!e.currentTarget.contains(e.relatedTarget as Node)) setOpen(null); }}>
      <ul className={styles.list}>
        {primaryNav.map((item) => {
          const active = pathname === item.href || (item.children?.some((c) => pathname === c.href) ?? false) || (item.href !== "/" && pathname.startsWith(item.href) && !item.children);
          if (!item.children) {
            return (
              <li key={item.href}>
                <Link href={item.href} className={[styles.link, active ? styles.active : ""].join(" ")} aria-current={active ? "page" : undefined}>{item.label}</Link>
              </li>
            );
          }
          const id = `menu-${item.label.toLowerCase()}`;
          const isOpen = open === item.label;
          return (
            <li key={item.label} className={styles.hasMenu}>
              <button
                type="button"
                className={[styles.link, styles.button, active ? styles.active : ""].join(" ")}
                aria-expanded={isOpen}
                aria-controls={id}
                onClick={() => setOpen(isOpen ? null : item.label)}
              >
                {item.label}
                <svg aria-hidden="true" width="12" height="12" viewBox="0 0 12 12" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M2.5 4.5L6 8l3.5-3.5" /></svg>
              </button>
              <div id={id} className={styles.menu} hidden={!isOpen} onClick={(e) => { if ((e.target as HTMLElement).closest("a")) setOpen(null); }}>
                <ul className={styles.menuList}>
                  {item.children.map((c) => (
                    <li key={c.href}>
                      <Link href={c.href} className={styles.menuLink} aria-current={pathname === c.href ? "page" : undefined}>
                        <span className={styles.menuLabel}>{c.label}</span>
                        {c.description && <span className={styles.menuDesc}>{c.description}</span>}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link href={item.href} className={styles.menuAll}>View all {item.label.toLowerCase()}</Link>
              </div>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
