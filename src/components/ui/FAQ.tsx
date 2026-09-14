import styles from "./FAQ.module.css";

export type FAQItem = { q: string; a: string };

/** Native <details> accordion: keyboard accessible, no JS, works in static export. */
export function FAQ({ items, title = "Frequently asked questions", id = "faq" }: { items: FAQItem[]; title?: string; id?: string }) {
  return (
    <div className={styles.wrap}>
      <h2 id={id} className={styles.title}>{title}</h2>
      <div className={styles.list}>
        {items.map((f, i) => (
          <details key={i} className={styles.item} name={id}>
            <summary className={styles.q}>
              <span>{f.q}</span>
              <svg aria-hidden="true" width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M4 7l5 5 5-5" /></svg>
            </summary>
            <div className={styles.a}><p>{f.a}</p></div>
          </details>
        ))}
      </div>
    </div>
  );
}
