import Link from "next/link";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbLd, type Crumb } from "@/lib/seo";
import styles from "./Breadcrumbs.module.css";

export function Breadcrumbs({ crumbs }: { crumbs: Crumb[] }) {
  const all: Crumb[] = [{ name: "Home", href: "/" }, ...crumbs];
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <JsonLd data={breadcrumbLd(all)} />
      <ol className={styles.list}>
        {all.map((c, i) => {
          const last = i === all.length - 1;
          return (
            <li key={c.href} className={styles.item}>
              {last ? <span aria-current="page">{c.name}</span> : <Link href={c.href}>{c.name}</Link>}
              {!last && <span aria-hidden="true" className={styles.sep}>/</span>}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
