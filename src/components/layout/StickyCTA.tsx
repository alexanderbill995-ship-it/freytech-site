"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { site, telHref } from "@/lib/site";
import { track } from "@/lib/analytics";
import styles from "./StickyCTA.module.css";

/** Mobile-only bottom action bar: assessment + click-to-call. Hidden on the forms themselves. */
export function StickyCTA() {
  const pathname = usePathname();
  if (pathname.startsWith("/contact") || pathname.startsWith("/request-service") || pathname.startsWith("/engineering-specification-support")) return null;
  return (
    <div className={styles.bar} role="complementary" aria-label="Quick actions">
      <Link href="/contact/?intent=angelo" className={styles.primary} onClick={() => track("cta_click", { location: "sticky_mobile", label: "talk_with_angelo" })}>Talk With Angelo</Link>
      {site.phone ? (
        <a href={telHref(site.phone)} className={styles.secondary} onClick={() => track("phone_click", { location: "sticky_mobile" })}>
          <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="currentColor"><path d="M3.6 1.5c.4-.4 1-.4 1.4 0l1.7 1.8c.4.4.4 1 0 1.4l-1 1c.6 1.5 2.1 3 3.6 3.6l1-1c.4-.4 1-.4 1.4 0l1.8 1.7c.4.4.4 1 0 1.4l-1.2 1.2c-.6.6-1.5.8-2.3.5C6.3 11.9 4.1 9.7 2.9 6.2c-.3-.8-.1-1.7.5-2.3z"/></svg>
          Call
        </a>
      ) : (
        <Link href="/request-service/" className={styles.secondary}>Request Service</Link>
      )}
    </div>
  );
}
