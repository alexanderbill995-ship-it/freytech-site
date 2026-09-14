import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { pageMetadata } from "@/lib/seo";
import { resources, resourceCategories } from "@/content/resources";
import { site } from "@/lib/site";
import styles from "./resources.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Resources: Operator Guides, Product Literature & New York Pool Regulations",
  description: "Operator guides, maintenance checklists, modernization guides, BECSys5 and Pulsar Precision literature, engineering resources, and current New York State pool regulatory references from FreyTech.",
  path: "/resources/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Resource center" title="Resources for operators, facilities teams, and design professionals" lede="Practical guides written by FreyTech, official manufacturer literature, and current New York regulatory references. External links go to official sources only." crumbs={[{ name: "Resources", href: "/resources/" }]} compact />
      <Section>
        <nav className={styles.jump} aria-label="Resource categories">
          {resourceCategories.map((c) => <a key={c} href={`#${c.toLowerCase().replace(/\s+/g, "-")}`}>{c}</a>)}
        </nav>
        {resourceCategories.map((cat) => {
          const items = resources.filter((r) => r.category === cat);
          return (
            <section key={cat} id={cat.toLowerCase().replace(/\s+/g, "-")} className={styles.group} aria-labelledby={`h-${cat.toLowerCase().replace(/\s+/g, "-")}`}>
              <SectionHeader as="h2" id={`h-${cat.toLowerCase().replace(/\s+/g, "-")}`} title={cat} />
              <ul className={styles.list}>
                {items.map((r) => (
                  <li key={r.href} className={styles.item}>
                    <h3 className={styles.itemTitle}>
                      {r.external ? (
                        <TrackedLink href={r.href} event={r.event ?? "document_download"} payload={{ document: r.title, category: r.category }} target="_blank" rel="noopener">{r.title}<span className={styles.ext}> (external)</span></TrackedLink>
                      ) : (
                        <Link href={r.href}>{r.title}</Link>
                      )}
                    </h3>
                    <p>{r.text}</p>
                  </li>
                ))}
              </ul>
            </section>
          );
        })}
        <Callout title="Safety data sheets and manufacturer documents" tone="info">
          <p>To request an SDS for a chemical supplied by FreyTech, or manufacturer technical documents not linked here, email <TrackedLink href={`mailto:${site.email}?subject=SDS%20request`} event="email_click" payload={{ location: "resources_sds" }}>{site.email}</TrackedLink>. Proprietary manufacturer documents are shared under the manufacturers&apos; terms.</p>
        </Callout>
      </Section>
      <CTABand source="resources" />
    </>
  );
}
