import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { ResourceLibrary } from "@/components/catalog/ResourceLibrary";
import { ResourceLibraryFallback } from "@/components/catalog/ResourceLibraryFallback";
import { pageMetadata } from "@/lib/seo";
import { articles } from "@/content/resources";
import { site } from "@/lib/site";
import styles from "./resources.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Resource Library: Brochures, Manuals, Operator Guides & New York Pool Regulations",
  description: "Filter manufacturer brochures, manuals, specification sheets, safety data sheets, warranties, FreyTech operator guides, and New York regulatory references by product, manufacturer, type, and category.",
  path: "/resources/",
});

export default function Page() {
  return (
    <>
      <PageHero eyebrow="Resource library" title="Technical resources for operators, facilities teams, and design professionals" lede="Manufacturer-hosted documents, FreyTech operator guides, and current New York regulatory references, filterable by product, manufacturer, type, and category. Documents that cannot be republished are listed as available on request." crumbs={[{ name: "Resources", href: "/resources/" }]} compact />
      <Section>
        <Suspense fallback={<ResourceLibraryFallback />}><ResourceLibrary /></Suspense>
        <Callout title="Safety data sheets and manufacturer documents" tone="info">
          <p>To request an SDS for a chemical supplied by FreyTech, or a manufacturer document listed as available on request, email <TrackedLink href={`mailto:${site.email}?subject=Document%20request`} event="email_click" payload={{ location: "resources" }}>{site.email}</TrackedLink> or use the <Link href="/contact/?intent=information">request form</Link>. Proprietary documents are shared under the manufacturers&apos; terms.</p>
        </Callout>
      </Section>
      <Section tone="alt">
        <SectionHeader eyebrow="FreyTech guides" title="Written for New York operators" />
        <ul className={styles.list}>
          {articles.map((a) => (
            <li key={a.slug} className={styles.item}><h3 className={styles.itemTitle}><Link href={`/resources/${a.slug}/`}>{a.title}</Link></h3><p>{a.description}</p></li>
          ))}
        </ul>
      </Section>
      <CTABand source="resources" />
    </>
  );
}
