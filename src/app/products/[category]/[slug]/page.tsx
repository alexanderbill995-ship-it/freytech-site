import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { FAQ } from "@/components/ui/FAQ";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SectionNav } from "@/components/catalog/SectionNav";
import { BackToProducts } from "@/components/catalog/BackToProducts";
import { ProductCard } from "@/components/catalog/ProductCard";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { ProductView } from "@/components/catalog/ProductView";
import { availabilityLabel } from "@/lib/search/index";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, faqLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";
import { publishedProducts, getProduct, getCategory, getManufacturer, getProblem, productIndex, productHref, categoryHref, problemHref } from "@/content/catalog";
import p from "@/styles/page.module.css";
import s from "@/components/catalog/ProductDetail.module.css";

export function generateStaticParams() {
  return publishedProducts.map((x) => ({ category: x.category, slug: x.slug }));
}

export async function generateMetadata({ params }: PageProps<"/products/[category]/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const x = getProduct(slug);
  if (!x) return {};
  return pageMetadata({ title: x.seoTitle, description: x.seoDescription, path: productHref(x) });
}

export default async function Page({ params }: PageProps<"/products/[category]/[slug]">) {
  const { category, slug } = await params;
  const x = getProduct(slug);
  const cat = getCategory(category);
  if (!x || !cat || x.category !== category) notFound();
  const m = getManufacturer(x.manufacturer)!;
  const related = productIndex.filter((r) => x.related.includes(r.slug));
  const specified = x.specifiedWith.map((sw) => ({ item: productIndex.find((r) => r.slug === sw.slug), status: sw.status })).filter((r) => r.item);
  const solutions = x.relatedSolutions.map(getProblem).filter(Boolean);
  const contactQ = `product=${encodeURIComponent(x.name)}&category=${x.category}`;

  const sections = [
    { id: "overview", label: "Overview" }, { id: "fit", label: "Is it a fit?" }, { id: "problems", label: "Problems it addresses" }, { id: "capabilities", label: "Capabilities & benefits" },
    ...(x.models?.length ? [{ id: "models", label: "Models & configurations" }] : []), { id: "specs", label: "Specifications" }, { id: "installation", label: "Installation & retrofit" },
    { id: "integration", label: "Works with" }, { id: "freytech", label: "FreyTech's role" }, { id: "documents", label: "Documents" }, ...(x.faqs.length ? [{ id: "faq", label: "FAQ" }] : []), { id: "related", label: "Related" },
  ];

  const productLd: Record<string, unknown> = {
    "@context": "https://schema.org", "@type": "Product", name: x.name, brand: { "@type": "Brand", name: m.name }, description: x.shortDescription, url: `${site.url}${productHref(x)}`, category: cat.name,
  };
  if (x.image) productLd.image = `${site.url}${asset(x.image.src)}`;

  return (
    <>
      <ProductView slug={x.slug} availability={x.availability} />
      <JsonLd data={x.faqs.length ? [productLd, faqLd(x.faqs)] : productLd} />
      <PageHero
        eyebrow={`${m.name} · ${cat.name}${x.subcategory ? ` · ${x.subcategory}` : ""}`}
        title={x.name}
        lede={x.headline}
        crumbs={[{ name: "Products & Solutions", href: "/products/" }, { name: cat.name, href: categoryHref(cat.slug) }, { name: x.name, href: productHref(x) }]}
        compact
        actions={<>{x.availability === "confirmed" ? <Button href={`/contact/?${contactQ}&intent=assessment`} variant="onDark" size="lg">Request a Facility Assessment</Button> : <Button href={`/contact/?${contactQ}&manufacturer=${x.manufacturer}&availability=${x.availability}&intent=availability`} variant="onDark" size="lg">Request Availability</Button>}<Button href={`/contact/?${contactQ}&intent=specialist`} variant="onDarkGhost" size="lg">Talk to a Water-Quality Specialist</Button></>}
        aside={x.image ? (
          <figure style={{ margin: 0 }}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(x.image.src)} alt={x.image.alt} width={x.image.width} height={x.image.height} style={{ borderRadius: "var(--radius)", background: "#fff", objectFit: "contain", maxHeight: "18rem", width: "100%" }} />
            {x.gallery?.length ? <div style={{ display: "flex", gap: "0.5rem", marginTop: "0.5rem" }}>{x.gallery.map((g) => (
              // eslint-disable-next-line @next/next/no-img-element
              <img key={g.src} src={asset(g.src)} alt={g.alt} width={g.width} height={g.height} loading="lazy" style={{ width: "4.5rem", height: "4.5rem", objectFit: "contain", background: "#fff", borderRadius: "var(--radius-sm)" }} />
            ))}</div> : null}
            <figcaption className="visually-hidden">Manufacturer product image; source recorded in catalog data.</figcaption>
          </figure>
        ) : (
          <>
            <h2 style={{ fontSize: "var(--text-md)" }}>At a glance</h2>
            <p>{x.shortDescription}</p>
            <p style={{ marginTop: "0.75rem" }}>Manufacturer relationship: {m.relationship}{m.relationshipStatus !== "verified" && <Confirm note="Confirm relationship" />}</p>
          </>
        )}
      />

      <Section>
        <div className={s.topBar}>
          <BackToProducts />
          <span className={[s.availBadge, s[`avail_${x.availability}`]].join(" ")}>{availabilityLabel[x.availability]}</span>
          <span className={s.verify}>Facts verified against manufacturer literature {x.lastVerified}. {x.claimStatus !== "verified" && <Confirm note={x.claimStatus === "partially-verified" ? "Partially verified" : "Pending verification"} />}</span>
        </div>
        <div className={s.layout}>
          <SectionNav sections={sections} />
          <div className={s.main}>
            {x.flagshipHref && (
              <p className={s.flagship}>Looking for the decision guide? The <Link href={x.flagshipHref}>{x.name} flagship page</Link> covers problems solved, scenarios, process, and FAQs in depth. This page is the specification and fit reference.</p>
            )}

            <section id="overview" className={s.section} tabIndex={-1}>
              <h2>Overview</h2>
              {x.overview.map((t, i) => <p key={i}>{t}</p>)}
            </section>

            <section id="fit" className={s.section} tabIndex={-1}>
              <h2>Is this a fit for your facility?</h2>
              <div className={s.cols}>
                <div className={[s.fitBox, s.fitYes].join(" ")}><h3>Usually a fit when</h3><ul className={p.checkList}>{x.fit.yes.map((t) => <li key={t}>{t}</li>)}</ul></div>
                {x.fit.no.length > 0 && <div className={[s.fitBox, s.fitNo].join(" ")}><h3>Look elsewhere when</h3><ul>{x.fit.no.map((t) => <li key={t}>{t}</li>)}</ul></div>}
              </div>
              <p><strong>Ideal facilities and conditions:</strong> {x.applications.join("; ")}.</p>
            </section>

            <section id="problems" className={s.section} tabIndex={-1}>
              <h2>Problems it addresses</h2>
              <ul className={p.checkList}>{x.problems.map((pr) => { const pb = getProblem(pr); return pb ? <li key={pr}><Link href={problemHref(pr)}>{pb.name}</Link></li> : null; })}</ul>
            </section>

            <section id="capabilities" className={s.section} tabIndex={-1}>
              <h2>Key capabilities and benefits</h2>
              <div className={s.cols}>
                <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Capabilities</h3><ul className={p.checkList}>{x.features.map((t) => <li key={t}>{t}</li>)}</ul></div>
                {x.benefits.length > 0 && <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Operational and buyer benefits</h3><ul className={p.checkList}>{x.benefits.map((t) => <li key={t}>{t}</li>)}</ul></div>}
              </div>
            </section>

            {x.models?.length ? (
              <section id="models" className={s.section} tabIndex={-1}>
                <h2>Available models and configurations</h2>
                <div className={s.models}>{x.models.map((mo) => <div key={mo.name} className={s.model}><strong>{mo.name}</strong><span>{mo.fit}</span></div>)}</div>
              </section>
            ) : null}

            <section id="specs" className={s.section} tabIndex={-1}>
              <h2>Technical specifications</h2>
              <div className="table-wrap">
                <table className={p.specTable}>
                  <tbody>{x.specs.map((sp) => <tr key={sp.k}><th scope="row">{sp.k}</th><td>{sp.v}{sp.src && <small>Source: {sp.src}</small>}</td></tr>)}</tbody>
                </table>
              </div>
              <p className={s.verify}>Specifications are summarized from manufacturer literature and depend on configuration. Confirm current values with FreyTech before design.</p>
            </section>

            <section id="installation" className={s.section} tabIndex={-1}>
              <h2>Installation requirements and retrofit considerations</h2>
              <div className={s.cols}>
                {x.prerequisites.length > 0 ? <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Prerequisites</h3><ul className={p.checkList}>{x.prerequisites.map((t) => <li key={t}>{t}</li>)}</ul></div> : <p>Installation requirements, utilities, and clearances are confirmed with the manufacturer&apos;s installation manual and your engineer during evaluation.</p>}
                {x.retrofit.length > 0 && <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Retrofit and replacement notes</h3><ul className={p.checkList}>{x.retrofit.map((t) => <li key={t}>{t}</li>)}</ul></div>}
              </div>
            </section>

            <section id="integration" className={s.section} tabIndex={-1}>
              <h2>Integration with other equipment</h2>
              {x.integrations.length ? (
                <ul className={s.integrations}>
                  {x.integrations.map((it) => (
                    <li key={it.name} className={s.integration}>
                      <div><strong>{it.name}</strong><span>{it.note}</span></div>
                      <span className={[s.statusTag, it.status === "verified" ? s.verified : s.considered].join(" ")}>{it.status === "verified" ? "Manufacturer-documented" : "Commonly considered together · requires technical confirmation"}</span>
                    </li>
                  ))}
                </ul>
              ) : <p>No equipment integrations are documented for this product. Coordination happens through the design team.</p>}
              {specified.length > 0 && (
                <>
                  <h3 style={{ fontSize: "var(--text-md)" }}>Often specified with</h3>
                  <ul className={s.integrations}>
                    {specified.map(({ item, status }) => item && (
                      <li key={item.slug} className={s.integration}>
                        <div><Link href={item.href}><strong>{item.name}</strong></Link><span>{item.shortDescription}</span></div>
                        <span className={[s.statusTag, status === "verified" ? s.verified : s.considered].join(" ")}>{status === "verified" ? "Documented pairing" : "Commonly considered together"}</span>
                      </li>
                    ))}
                  </ul>
                  <p className={s.verify}>&ldquo;Commonly considered together&rdquo; means the pairing is typical in practice; technical compatibility is confirmed for each project.</p>
                </>
              )}
            </section>

            <section id="freytech" className={s.section} tabIndex={-1}>
              <h2>FreyTech&apos;s role: design, installation, commissioning, training, support</h2>
              <div className={s.cols}>
                <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Project services</h3><ul className={p.checkList}>{x.services.map((t) => <li key={t}>{t}</li>)}</ul></div>
                <div><h3 style={{ fontSize: "var(--text-md)", marginBottom: "var(--sp-3)" }}>Ongoing service and support</h3><ul className={p.checkList}>{x.support.map((t) => <li key={t}>{t}</li>)}</ul></div>
              </div>
              <Callout tone={x.availability === "confirmed" ? "info" : "warn"} title={x.availability === "confirmed" ? "Available through FreyTech" : x.availability === "request" ? "Availability on request" : "Discontinued"}>
                {x.availability === "confirmed" && <p>Talk with FreyTech about selection, installation, and support. {site.territory}</p>}
                {x.availability === "request" && <p>Contact FreyTech to confirm availability, lead time, and service coverage for your facility. FreyTech can help evaluate this product category for your facility, and no dealer relationship is implied until confirmed. {site.territory}</p>}
                {x.availability === "discontinued" && <p>This product is listed so facilities that still run it can find replacements and parts. Ask FreyTech about current successors. {site.territory}</p>}
              </Callout>
            </section>

            <section id="documents" className={s.section} tabIndex={-1}>
              <h2>Brochures, manuals, warranties and specifications</h2>
              <ul className={s.docs}>
                {x.docs.map((d) => (
                  <li key={d.title} className={s.doc}>
                    <span className={s.docType}>{d.type}</span>
                    <div>
                      {d.status === "linked" && d.href ? (
                        d.href.startsWith("http") ? <TrackedLink href={d.href} event="document_download" payload={{ document: d.title, product: x.slug }} target="_blank" rel="noopener">{d.title} <span className="visually-hidden">(opens manufacturer site)</span></TrackedLink> : <Link href={d.href}>{d.title}</Link>
                      ) : <span className={s.placeholder}>{d.title}</span>}
                      <small>{d.fileType ?? ""}{d.fileType ? " · " : ""}{d.status === "linked" ? (d.href?.startsWith("http") ? `Manufacturer-hosted` : "FreyTech") : "Available on request"}{d.note ? ` · ${d.note}` : ""}</small>
                    </div>
                  </li>
                ))}
              </ul>
              <p><Link href={`/resources/?product=${x.slug}`}>All resources for {x.name}</Link> · <Link href={`/contact/?${contactQ}&intent=information`}>Request documents</Link></p>
            </section>

            {x.faqs.length > 0 && (
              <section id="faq" className={s.section} tabIndex={-1}>
                <FAQ items={x.faqs} title={`${x.name}: frequently asked questions`} id={`faq-${x.slug}`} />
              </section>
            )}

            <section id="related" className={s.section} tabIndex={-1}>
              <h2>Related products</h2>
              {related.length ? <div className={s.relatedGrid}>{related.map((r) => <ProductCard key={r.slug} p={r} compact />)}</div> : <p>See the <Link href={categoryHref(cat.slug)}>{cat.name}</Link> category.</p>}
              {solutions.length > 0 && <p><strong>Related solutions:</strong> {solutions.map((so, i) => so && <span key={so.slug}>{i > 0 && " · "}<Link href={problemHref(so.slug)}>{so.name}</Link></span>)}</p>}
            </section>

            {(x.slug.startsWith("becsys") || x.slug.startsWith("pulsar-precision")) && (
              <section className={s.section} aria-label="System path">
                <h2>{x.category === "automated-controls" ? "Explore compatible chemical-delivery approaches" : "Explore automated chemistry controls"}</h2>
                <SystemFlow compact />
                <div className={s.ctaRow}>
                  <Button href={x.category === "automated-controls" ? categoryHref("chemical-delivery-chlorination") : categoryHref("automated-controls")} variant="secondary">{x.category === "automated-controls" ? "Chemical delivery and chlorination" : "Automated controls"}</Button>
                  <Button href={`/contact/?${contactQ}&intent=modernization`}>Request a complete water-chemistry system assessment</Button>
                </div>
              </section>
            )}
          </div>
        </div>
      </Section>

      <CTABand source={`product-${x.slug}`} title={`Is ${x.name} right for your facility?`} text="Send us your pool volumes, current equipment, and what is not working. A specialist will review fit honestly and recommend next steps." primaryLabel="Request a Facility Assessment" primaryHref={`/contact/?${contactQ}&intent=assessment`} secondaryLabel="Talk to a Water-Quality Specialist" secondaryHref={`/contact/?${contactQ}&intent=specialist`} />
    </>
  );
}
