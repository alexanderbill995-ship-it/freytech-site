import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { articles, getArticle } from "@/content/resources";
import { site } from "@/lib/site";
import p from "@/styles/page.module.css";

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: PageProps<"/resources/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) return {};
  return pageMetadata({ title: a.title, description: a.description, path: `/resources/${a.slug}/` });
}

export default async function Page({ params }: PageProps<"/resources/[slug]">) {
  const { slug } = await params;
  const a = getArticle(slug);
  if (!a) notFound();
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "TechArticle", headline: a.title, description: a.description, dateModified: `${a.updated}-01`, author: { "@type": "Organization", name: site.name }, publisher: { "@id": `${site.url}/#organization` }, mainEntityOfPage: `${site.url}/resources/${a.slug}/` }} />
      <PageHero eyebrow={a.category} title={a.title} lede={a.description} crumbs={[{ name: "Resources", href: "/resources/" }, { name: a.title, href: `/resources/${a.slug}/` }]} compact />
      <Section narrow>
        <p className={p.small} style={{ marginBottom: "var(--sp-6)" }}>Last reviewed {a.updated}.{a.byline && <> {a.byline}</>}{a.confirm && <> <Confirm note={a.confirm} /></>}</p>
        <div className="prose">
          {a.body.map((b, i) => (
            <div key={i}>
              {b.h && <h2>{b.h}</h2>}
              {b.p?.map((t, j) => <p key={j}>{t}</p>)}
              {b.ul && <ul>{b.ul.map((t, j) => <li key={j}>{t}</li>)}</ul>}
              {b.table && (
                <div className="table-wrap">
                  <table>
                    <thead><tr>{b.table.head.map((h) => <th key={h} scope="col">{h}</th>)}</tr></thead>
                    <tbody>{b.table.rows.map((r, j) => <tr key={j}>{r.map((c, k) => k === 0 ? <th key={k} scope="row">{c}</th> : <td key={k}>{c}</td>)}</tr>)}</tbody>
                  </table>
                </div>
              )}
            </div>
          ))}
        </div>
        {a.category === "Regulatory resources" && (
          <Callout tone="warn" title="Not legal advice">
            <p>Regulatory information on this site summarizes the New York State Sanitary Code (10 NYCRR Subpart 6-1) for convenience. Requirements are interpreted and enforced by the permit-issuing official for your facility. New York City facilities are regulated separately under NYC Health Code Article 165. Confirm requirements with your authority having jurisdiction and a New York-licensed design professional.</p>
          </Callout>
        )}
        <p className={p.small} style={{ marginTop: "var(--sp-8)" }}>More: {articles.filter((x) => x.slug !== a.slug).map((x, i) => <span key={x.slug}>{i > 0 && " · "}<Link href={`/resources/${x.slug}/`}>{x.title}</Link></span>)}</p>
      </Section>
      <CTABand source={`article-${a.slug}`} />
    </>
  );
}
