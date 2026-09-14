import Link from "next/link";
import type { ReactNode } from "react";
import styles from "./Card.module.css";

export function Card({ title, children, href, eyebrow, footer, className = "", as: Tag = "h3" }: { title: ReactNode; children?: ReactNode; href?: string; eyebrow?: string; footer?: ReactNode; className?: string; as?: "h2" | "h3" | "h4" }) {
  const body = (
    <>
      {eyebrow && <p className={styles.eyebrow}>{eyebrow}</p>}
      <Tag className={styles.title}>{href ? <Link href={href} className={styles.link}>{title}</Link> : title}</Tag>
      {children && <div className={styles.body}>{children}</div>}
      {footer && <div className={styles.footer}>{footer}</div>}
    </>
  );
  return <article className={[styles.card, href ? styles.clickable : "", className].join(" ")}>{body}</article>;
}

export function StatBlock({ label, value, note }: { label: string; value: ReactNode; note?: string }) {
  return (
    <div className={styles.stat}>
      <div className={styles.statValue}>{value}</div>
      <div className={styles.statLabel}>{label}</div>
      {note && <div className={styles.statNote}>{note}</div>}
    </div>
  );
}

export function Callout({ title, children, tone = "info" }: { title?: string; children: ReactNode; tone?: "info" | "confirm" | "warn" }) {
  return (
    <aside className={[styles.callout, styles[`callout_${tone}`]].join(" ")} role={tone === "warn" ? "note" : undefined}>
      {title && <p className={styles.calloutTitle}>{title}</p>}
      <div className={styles.calloutBody}>{children}</div>
    </aside>
  );
}
