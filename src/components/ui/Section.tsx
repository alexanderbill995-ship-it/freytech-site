import type { ReactNode } from "react";
import styles from "./Section.module.css";

type Props = {
  children: ReactNode;
  tone?: "default" | "alt" | "dark" | "navy";
  id?: string;
  className?: string;
  narrow?: boolean;
  tight?: boolean;
  as?: "section" | "div" | "aside";
  ariaLabelledby?: string;
};

export function Section({ children, tone = "default", id, className = "", narrow, tight, as: Tag = "section", ariaLabelledby }: Props) {
  const isDark = tone === "dark" || tone === "navy";
  return (
    <Tag id={id} aria-labelledby={ariaLabelledby} className={[styles.section, styles[tone], tight ? styles.tight : "", isDark ? "on-dark" : "", className].join(" ")}>
      <div className={narrow ? "container-narrow" : "container"}>{children}</div>
    </Tag>
  );
}

export function SectionHeader({ eyebrow, title, lede, id, align = "left", as: Tag = "h2" }: { eyebrow?: string; title: ReactNode; lede?: ReactNode; id?: string; align?: "left" | "center"; as?: "h1" | "h2" | "h3" }) {
  return (
    <header className={[styles.header, align === "center" ? styles.center : ""].join(" ")}>
      {eyebrow && <p className="eyebrow">{eyebrow}</p>}
      <Tag id={id}>{title}</Tag>
      {lede && <p className="lede">{lede}</p>}
    </header>
  );
}
