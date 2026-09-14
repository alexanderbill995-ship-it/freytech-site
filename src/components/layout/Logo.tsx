import Link from "next/link";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";
import styles from "./Logo.module.css";

/**
 * Uses FreyTech's existing logo carried from freytech.org (364×94 raster).
 * The owner should supply a vector (SVG/EPS) version; drop it at
 * /public/images/brand/freytech-logo.svg and update the paths below.
 */
export function Logo({ onDark = false, className = "" }: { onDark?: boolean; className?: string }) {
  return (
    <Link href="/" className={[styles.logo, className].join(" ")} aria-label={`${site.name} home`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={asset(onDark ? "/images/brand/freytech-logo-white.png" : "/images/brand/freytech-logo.png")}
        alt={`${site.name}, Inc.`}
        width={onDark ? 168 : 182}
        height={onDark ? 80 : 47}
        className={styles.img}
        fetchPriority="high"
      />
    </Link>
  );
}
