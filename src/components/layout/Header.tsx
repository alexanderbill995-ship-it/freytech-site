import { Logo } from "./Logo";
import { MobileNav } from "./MobileNav";
import { DesktopNav } from "./DesktopNav";
import { HeaderSearch } from "@/components/search/HeaderSearch";
import { Button } from "@/components/ui/Button";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { site, telHref } from "@/lib/site";
import { utilityNav } from "@/lib/nav";
import Link from "next/link";
import styles from "./Header.module.css";

export function Header() {
  return (
    <>
      <a href="#main" className="skip-link">Skip to main content</a>
      <div className={styles.utility}>
        <div className={["container", styles.utilityInner].join(" ")}>
          <p className={styles.territory}>{site.territory}</p>
          <ul className={styles.utilityLinks}>
            {utilityNav.map((i) => (
              <li key={i.href}><Link href={i.href}>{i.label}</Link></li>
            ))}
            {site.phone && (
              <li>
                <TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "header" }}>{site.phone}</TrackedLink>
              </li>
            )}
          </ul>
        </div>
      </div>
      <header className={styles.header}>
        <div className={["container", styles.inner].join(" ")}>
          <Logo />
          <DesktopNav />
          <div className={styles.actions}>
            <HeaderSearch />
            <Button href="/contact/?intent=angelo" size="md" className={styles.cta}>Talk With Angelo</Button>
            <MobileNav />
          </div>
        </div>
      </header>
    </>
  );
}
