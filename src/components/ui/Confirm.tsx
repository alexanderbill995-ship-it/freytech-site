import type { ReactNode } from "react";
import { site } from "@/lib/site";
import styles from "./Confirm.module.css";

/**
 * Marks content that the owner must verify before launch. When
 * NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false the marker is not rendered and the
 * wrapped content displays normally. Nothing is hidden from the owner's review.
 */
export function Confirm({ children, note = "Confirm before launch", inline = true }: { children?: ReactNode; note?: string; inline?: boolean }) {
  if (!site.showConfirmFlags) return <>{children}</>;
  const Tag = inline ? "span" : "div";
  return (
    <Tag className={inline ? styles.inline : styles.block}>
      {children}
      <span className={styles.flag} title={note}>
        <span className="visually-hidden">Owner review: </span>{note}
      </span>
    </Tag>
  );
}
