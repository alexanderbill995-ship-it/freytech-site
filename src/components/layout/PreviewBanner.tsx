import { site } from "@/lib/site";
import styles from "./PreviewBanner.module.css";

/** Shown only when NEXT_PUBLIC_PREVIEW=true. */
export function PreviewBanner() {
  if (!site.isPreview || !site.showBanner) return null;
  return (
    <div className={styles.banner} role="note" aria-label="Preview notice">
      <span className={styles.dot} aria-hidden="true" />
      FreyTech website concept — private client review. <span className={styles.more}>Not the live freytech.org site; forms are disabled in this preview.</span>
    </div>
  );
}
