import type { Metadata } from "next";
import { site } from "./site";
import { asset } from "./paths";

type PageMeta = {
  title: string;
  description: string;
  path: string;
  noIndex?: boolean;
};

/** Builds unique title/description/canonical for a page. */
export function pageMetadata({ title, description, path, noIndex }: PageMeta): Metadata {
  const url = new URL(path, site.url).toString();
  const fullTitle = title.includes(site.name) || title.includes(site.shortName) ? title : `${title} | ${site.shortName}`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: url },
    robots: site.isPreview ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } } : noIndex ? { index: false, follow: true } : undefined,
    openGraph: {
      title: fullTitle,
      description,
      url,
      siteName: site.name,
      type: "website",
      locale: "en_US",
      images: [{ url: new URL(asset("/images/og-default.png"), site.url).toString(), width: 1200, height: 630, alt: `${site.name}: commercial pool water chemistry for New York State` }],
    },
    twitter: { card: "summary_large_image", title: fullTitle, description },
  };
}

export type Crumb = { name: string; href: string };

export function breadcrumbLd(crumbs: Crumb[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: new URL(c.href, site.url).toString(),
    })),
  };
}

/**
 * Organization / LocalBusiness schema.
 * Only fields with confirmed values are emitted; address is included only
 * when street + city + postal code are all set in site config.
 */
export function organizationLd() {
  const hasAddress = site.address.street && site.address.city && site.address.postalCode;
  const ld: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": ["Organization", "LocalBusiness"],
    "@id": `${site.url}/#organization`,
    name: site.name,
    alternateName: site.shortName,
    url: site.url,
    logo: new URL(asset("/images/brand/freytech-logo.png"), site.url).toString(),
    description:
      "Commercial aquatic systems specialist providing water-chemistry controls, chemical-feed systems, installation, commissioning, operator training, and service for commercial pools across New York State.",
    areaServed: { "@type": "State", name: "New York", description: "New York State" },
    knowsAbout: ["Commercial pool chemical controllers", "BECSys5", "Pulsar Precision calcium hypochlorite feeders", "Commercial pool water treatment", "Aquatic facility modernization"],
  };
  if (site.phone) ld.telephone = site.phone;
  if (site.email) ld.email = site.email;
  if (hasAddress) {
    ld.address = {
      "@type": "PostalAddress",
      streetAddress: site.address.street,
      addressLocality: site.address.city,
      addressRegion: site.address.region,
      postalCode: site.address.postalCode,
      addressCountry: site.address.country,
    };
  }
  return ld;
}

export function serviceLd(opts: { name: string; description: string; path: string; serviceType: string }) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: opts.name,
    serviceType: opts.serviceType,
    description: opts.description,
    url: new URL(opts.path, site.url).toString(),
    provider: { "@id": `${site.url}/#organization` },
    areaServed: { "@type": "State", name: "New York", description: "New York State" },
  };
}

export function faqLd(faqs: { q: string; a: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}
