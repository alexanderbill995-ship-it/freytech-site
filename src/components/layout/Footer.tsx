import Link from "next/link";
import { Logo } from "./Logo";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { footerNav } from "@/lib/nav";
import { site, telHref } from "@/lib/site";
import { serviceRegions } from "@/lib/regions";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import styles from "./Footer.module.css";

export function Footer() {
  const year = new Date().getFullYear();
  const hasAddress = site.address.street && site.address.city;
  return (
    <footer className={[styles.footer, "on-dark"].join(" ")}>
      <div className={["container", styles.top].join(" ")}>
        <div className={styles.brand}>
          <Logo onDark />
          <p className={styles.blurb}>
            Commercial pool water-chemistry controls, chemical-feed systems, installation, commissioning, operator training, and service for aquatic facilities across New York State.
          </p>
          <address className={styles.contact}>
            {hasAddress && (
              <p>{site.address.street}<br />{site.address.city}, {site.address.region} {site.address.postalCode}</p>
            )}
            {site.phone && <p><TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "footer" }}>{site.phone}</TrackedLink></p>}
            {site.email && <p><TrackedLink href={`mailto:${site.email}`} event="email_click" payload={{ location: "footer" }}>{site.email}</TrackedLink></p>}
            {site.hours && <p className={styles.hours}>{site.hours}</p>}
          </address>
        </div>
        {footerNav.map((col) => (
          <nav key={col.heading} aria-labelledby={`footer-${col.heading}`} className={styles.col}>
            <h2 id={`footer-${col.heading}`} className={styles.heading}>{col.heading}</h2>
            <ul className={styles.links}>
              {col.items.map((i) => (
                <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
              ))}
            </ul>
          </nav>
        ))}
      </div>
      <div className={["container", styles.search].join(" ")}>
        <p className={styles.regionsLabel}>Looking for something?</p>
        <div className={styles.searchBox}><GlobalSearch variant="inline" label="Search products, manufacturers and solutions" placeholder="Search by product, manufacturer, model or problem…" /></div>
      </div>
      <div className={["container", styles.regions].join(" ")}>
        <p className={styles.regionsLabel}>Service area · New York State</p>
        <ul className={styles.regionList}>
          {serviceRegions.map((r) => (
            <li key={r.slug}><Link href={`/service-area/${r.slug}/`}>{r.name}</Link></li>
          ))}
        </ul>
      </div>
      <div className={["container", styles.bottom].join(" ")}>
        <p>© {year} {site.legalName}. All rights reserved.</p>
        <ul className={styles.legal}>
          <li><Link href="/privacy/">Privacy</Link></li>
          <li><Link href="/accessibility/">Accessibility</Link></li>
          <li><Link href="/sitemap.xml">Sitemap</Link></li>
        </ul>
        <p className={styles.trademark}>BECSys is a trademark of BECS Technology, Inc. Pulsar and Pulsar Precision are trademarks of their respective owner. FreyTech is an independent dealer and service provider.</p>
      </div>
    </footer>
  );
}
