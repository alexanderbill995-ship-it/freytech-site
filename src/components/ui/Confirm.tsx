import type { ReactNode } from "react";
import { site } from "@/lib/site";
import styles from "./Confirm.module.css";

/**
 * Marks content that the owner must verify before launch.
 * - NEXT_PUBLIC_SHOW_CONFIRM_FLAGS=false: marker not rendered.
 * - NEXT_PUBLIC_CONFIRM_STYLE=generic (public review previews): a neutral "Under review" marker
 *   is shown and the internal note text is NOT exposed to visitors.
 * - otherwise (internal builds): the full note is shown.
 */
export function Confirm({ children, note = "Confirm before launch", inline = true }: { children?: ReactNode; note?: string; inline?: boolean }) {
  if (!site.showConfirmFlags) return <>{children}</>;
  const generic = site.confirmStyle === "generic";
  const Tag = inline ? "span" : "div";
  return (
    <Tag className={inline ? styles.inline : styles.block}>
      {children}
      <span className={styles.flag} title={generic ? "This detail is under review with FreyTech before publication." : note}>
        <span className="visually-hidden">Under review: </span>{generic ? "Under review" : note}
      </span>
    </Tag>
  );
}
