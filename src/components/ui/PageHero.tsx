import type { ReactNode } from "react";
import { Breadcrumbs } from "./Breadcrumbs";
import type { Crumb } from "@/lib/seo";
import styles from "./PageHero.module.css";

type Props = {
  eyebrow?: string;
  title: ReactNode;
  lede?: ReactNode;
  crumbs: Crumb[];
  actions?: ReactNode;
  aside?: ReactNode;
  compact?: boolean;
  /** When true, `title` is rendered as-is (it must contain its own h1). */
  rawTitle?: boolean;
};

/** Interior page hero: dark, compact, informative. No decorative empty space. */
export function PageHero({ eyebrow, title, lede, crumbs, actions, aside, compact, rawTitle }: Props) {
  return (
    <header className={[styles.hero, "on-dark", compact ? styles.compact : ""].join(" ")}>
      <div className="container">
        <Breadcrumbs crumbs={crumbs} />
        <div className={[styles.grid, aside ? styles.hasAside : ""].join(" ")}>
          <div className={styles.main}>
            {eyebrow && <p className="eyebrow">{eyebrow}</p>}
            {rawTitle ? <div style={{ display: "grid", gap: "var(--sp-4)" }}>{title}</div> : <h1 className={styles.title}>{title}</h1>}
            {lede && <p className={styles.lede}>{lede}</p>}
            {actions && <div className={styles.actions}>{actions}</div>}
          </div>
          {aside && <aside className={styles.aside}>{aside}</aside>}
        </div>
      </div>
    </header>
  );
}
