"use client";
import { useEffect, useState } from "react";
import styles from "./SectionNav.module.css";

export type SectionLink = { id: string; label: string };

/** Desktop: sticky in-page navigator with current-section highlighting. Mobile: compact jump menu. */
export function SectionNav({ sections }: { sections: SectionLink[] }) {
  const [current, setCurrent] = useState(sections[0]?.id);
  useEffect(() => {
    const els = sections.map((s) => document.getElementById(s.id)).filter(Boolean) as HTMLElement[];
    if (!els.length || !("IntersectionObserver" in window)) return;
    const io = new IntersectionObserver((entries) => {
      const visible = entries.filter((e) => e.isIntersecting).sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
      if (visible[0]) setCurrent(visible[0].target.id);
    }, { rootMargin: "-20% 0px -65% 0px", threshold: 0 });
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [sections]);
  return (
    <>
      <nav aria-label="On this page" className={styles.desktop}>
        <p className={styles.heading}>On this page</p>
        <ol className={styles.list}>
          {sections.map((s) => (
            <li key={s.id}><a href={`#${s.id}`} className={styles.link} aria-current={current === s.id ? "location" : undefined}>{s.label}</a></li>
          ))}
        </ol>
      </nav>
      <div className={styles.mobile}>
        <label htmlFor="jump" className={styles.jumpLabel}>Jump to</label>
        <select id="jump" className={styles.jump} value={current} onChange={(e) => { setCurrent(e.target.value); document.getElementById(e.target.value)?.scrollIntoView({ behavior: "smooth", block: "start" }); document.getElementById(e.target.value)?.focus({ preventScroll: true }); }}>
          {sections.map((s) => <option key={s.id} value={s.id}>{s.label}</option>)}
        </select>
      </div>
    </>
  );
}
