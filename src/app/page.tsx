import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Confirm } from "@/components/ui/Confirm";
import { HomeCta } from "@/components/ui/HomeCta";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { GlobalSearch } from "@/components/search/GlobalSearch";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import { asset } from "@/lib/paths";
import { installations } from "@/content/projects";
import { publishedCategories, categoryHref, activeManufacturers } from "@/content/catalog";
import { exampleSearches } from "@/lib/search/synonyms";
import { hero, proof, pillars, angeloNote, problems, systemStages, featured, lifecycle, catalogIntro, finalCta } from "@/content/homepage";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { ContactFormClient } from "./contact/ContactFormClient";
import { AssessmentForm } from "@/components/forms/AssessmentForm";
import styles from "./page.module.css";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Frey Technologies | Commercial Pool Water Quality, Equipment and Service in New York",
  description: "Owner-operated commercial water-quality specialist for New York aquatic facilities: facility evaluations, BECSys5 controls, Pulsar chlorination, equipment selection, installation, training and long-term service. Talk with Angelo about your facility.",
  path: "/",
});

export default function Home() {
  const hasPortrait = existsSync(join(process.cwd(), "public", angeloNote.portrait.src));
  return (
    <>
      <JsonLd data={{ "@context": "https://schema.org", "@type": "WebSite", name: site.name, url: site.url, potentialAction: { "@type": "SearchAction", target: `${site.url}/products/?q={search_term_string}`, "query-input": "required name=search_term_string" } }} />

      {/* 1. Hero: personal accountability */}
      <section className={[styles.hero, "on-dark"].join(" ")} aria-labelledby="hero-title">
        <div className={["container", styles.heroInner].join(" ")}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">{hero.eyebrow}</p>
            <h1 id="hero-title" className={styles.h1}>{hero.title}</h1>
            <p className={styles.heroLede}>{hero.lede}</p>
            <div className={styles.heroActions}>
              <HomeCta section="hero" label={hero.primary.label} href={hero.primary.href} className={p.actions} style={{ display: "contents" }}><Button href={hero.primary.href} variant="onDark" size="lg">{hero.primary.label}</Button></HomeCta>
              <Button href={hero.secondary.href} variant="onDarkGhost" size="lg">{hero.secondary.label}</Button>
              <HomeCta section="hero" label={hero.tertiary.label} href={hero.tertiary.href} className={styles.tertiary}>{hero.tertiary.label}</HomeCta>
            </div>
          </div>
          <figure className={styles.heroMedia}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={asset(installations[0].image.src)} alt={installations[0].image.alt} width={922} height={386} fetchPriority="high" />
            <figcaption className={styles.heroCaption}><strong>{installations[0].facility}</strong>FreyTech installation.</figcaption>
          </figure>
        </div>
      </section>

      {/* 2. Trust evidence */}
      <section className={styles.proofBar} aria-label="Why facilities trust FreyTech">
        <div className={["container", styles.proofInner].join(" ")}>
          {proof.map((x) => (
            <div key={x.label} className={styles.proofItem}>
              <div className={styles.proofValue}>{x.value}</div>
              <div className={styles.proofLabel}>{x.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Why FreyTech */}
      <Section id="help">
        <SectionHeader eyebrow="Why FreyTech" title="You should never have to chase the person responsible for your water quality." lede="An owner-operated specialist works differently from a distributor's sales desk. Four things you can expect." />
        <div className={styles.pillars}>
          {pillars.map((x) => (
            <div key={x.title} className={p.feature}><h3>{x.title}</h3><p>{x.text}</p></div>
          ))}
        </div>
      </Section>

      {/* 4. Angelo's message */}
      <Section tone="alt">
        <div className={styles.note}>
          {hasPortrait ? (
            <figure className={styles.portrait}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(angeloNote.portrait.src)} alt={angeloNote.portrait.alt} width={angeloNote.portrait.width} height={angeloNote.portrait.height} loading="lazy" decoding="async" />
            </figure>
          ) : (
            <div className={styles.portrait} role="img" aria-label="Portrait of Angelo DiCiaccio, to be added">
              <span>Portrait of Angelo goes here.<br /><Confirm note="Add public/images/brand/angelo-diciaccio.webp" /></span>
            </div>
          )}
          <div className={styles.noteBody}>
            <p className="eyebrow">{angeloNote.heading}</p>
            <h2>{angeloNote.title}</h2>
            {angeloNote.paragraphs.map((t) => <p key={t}>{t}</p>)}
            <p className={styles.sig}>{angeloNote.signature}<span>{angeloNote.title2}</span></p>
            <div className={p.actions}><HomeCta section="angelo-note" label="Talk With Angelo" href="/contact/?intent=angelo" style={{ display: "contents" }}><Button href="/contact/?intent=angelo" size="lg">Talk With Angelo</Button></HomeCta></div>
          </div>
        </div>
      </Section>

      {/* 5. Start with the client's problem */}
      <Section>
        <SectionHeader eyebrow="Start with what is happening" title="Tell us what is happening. We'll help you determine what comes next." lede="Pick the situation closest to yours. Each path leads to the relevant solution, service, or a short form that goes straight to FreyTech." />
        <ul className={styles.problems}>
          {problems.map((x) => (
            <li key={x.href + x.label}>
              <HomeCta section="problems" label={x.label} href={x.href} className={styles.problem}>
                <span>{x.label}</span>
                <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"><path d="M3 8h10M9 4l4 4-4 4" /></svg>
              </HomeCta>
            </li>
          ))}
        </ul>
      </Section>

      {/* 6. Complete-system expertise */}
      <Section tone="dark">
        <SectionHeader eyebrow="Complete-system expertise" title="Measure → Control → Feed → Monitor → Support" lede="Angelo's commitment is personal; the capability behind it is a complete system. Each stage has a job, and FreyTech owns the outcome across all five." />
        <SystemFlow />
        <div className={p.featureGrid} style={{ marginTop: "var(--sp-10)" }}>
          {systemStages.map((s) => <div key={s.title} className={p.feature}><h3>{s.title}</h3><p>{s.text}</p></div>)}
        </div>
      </Section>

      {/* 7. Featured solutions */}
      <Section>
        <SectionHeader eyebrow="Featured solutions" title="Where most conversations start" lede="Framed by the outcome a facility is after, not by a part number." />
        <div className={styles.featured}>
          {featured.map((f) => (
            <article key={f.href} className={styles.featureCard}>
              <h3><HomeCta section="featured" label={f.title} href={f.href}>{f.title}</HomeCta></h3>
              <p>{f.text}</p>
              <p className={styles.featureFoot}>Learn more</p>
            </article>
          ))}
        </div>
      </Section>

      {/* 8. New York project proof */}
      <Section tone="alt">
        <SectionHeader eyebrow="New York project proof" title="Trusted in New York equipment rooms" lede="Facilities across New York where FreyTech has installed and serviced commercial pool equipment." />
        <div className={styles.projects}>
          {installations.map((i) => (
            <article key={i.slug} className={p.imageCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(i.image.src)} alt={i.image.alt} width={i.image.width} height={i.image.height} loading="lazy" decoding="async" />
              <div className={p.imageCap}>
                <strong>{i.facility}</strong>
                <dl className={styles.projectMeta}>
                  <dt>Location</dt><dd>{i.location}</dd>
                  <dt>FreyTech&apos;s role and equipment</dt><dd>{i.scope.join("; ")}</dd>
                </dl>
                <div style={{ marginTop: "0.5rem" }}><Link href={`/projects/${i.slug}/`}>Project details</Link></div>
              </div>
            </article>
          ))}
        </div>
        <p className={p.small} style={{ marginTop: "var(--sp-6)" }}>Customer references include Cornell, Ithaca College, Clarkson, Colgate, and Siena. <Link href="/projects/">All projects and references</Link></p>
      </Section>

      {/* 9. Service lifecycle */}
      <Section>
        <SectionHeader eyebrow="Working with FreyTech" title="What the relationship looks like, start to finish" lede="Only stages FreyTech provides are shown; a few are flagged for Angelo to confirm the exact scope." />
        <ProcessSteps steps={lifecycle.map((s) => ({ title: s.title, text: s.text }))} columns={3} />
      </Section>

      {/* 10. Catalog as client service */}
      <Section tone="navy">
        <div className={styles.catalog}>
          <div>
            <p className="eyebrow">The catalog, as a service</p>
            <h2>{catalogIntro.heading}</h2>
            <p className="lede" style={{ marginTop: "var(--sp-4)" }}>{catalogIntro.text}</p>
            <div style={{ marginTop: "var(--sp-6)" }}>
              <GlobalSearch variant="hero" placeholder={catalogIntro.placeholder} label="Search the FreyTech catalog" showExamples />
            </div>
            <div className={styles.catalogActions}>
              <Button href="/products/" variant="onDark">Search Products</Button>
              <Button href="/contact/?intent=find" variant="onDarkGhost">Help Me Find the Right Solution</Button>
            </div>
          </div>
          <div>
            <p className="eyebrow">Browse by system</p>
            <ul className={styles.catalogList} style={{ marginTop: "var(--sp-3)" }}>
              {publishedCategories.map((c) => <li key={c.slug}><Link href={categoryHref(c.slug)}>{c.name}</Link></li>)}
            </ul>
            <p className="eyebrow" style={{ marginTop: "var(--sp-6)" }}>Manufacturers</p>
            <p className={p.small} style={{ color: "var(--fg-on-dark-muted)", marginTop: "var(--sp-2)" }}>{activeManufacturers.map((m, i) => <span key={m.slug}>{i > 0 && " · "}<Link href={`/manufacturers/${m.slug}/`} style={{ color: "var(--fg-on-dark)" }}>{m.name}</Link></span>)} · <Link href="/manufacturers/" style={{ color: "var(--blue-400)" }}>all</Link></p>
            <p className={p.small} style={{ color: "var(--fg-on-dark-muted)", marginTop: "var(--sp-4)" }}>Example searches: {exampleSearches.join(", ")}.</p>
          </div>
        </div>
      </Section>

      {/* 11. Final conversion */}
      <Section tone="dark" id="talk">
        <div className={styles.final}>
          <div>
            <p className="eyebrow">Next step</p>
            <h2>{finalCta.heading}</h2>
            <p className="lede" style={{ marginTop: "var(--sp-4)" }}>{finalCta.text}</p>
            <p style={{ marginTop: "var(--sp-3)", color: "var(--white)", fontWeight: 600 }}>{finalCta.support}</p>
            <div className={styles.finalActions}>
              <Button href="/contact/?intent=angelo" variant="onDark" size="lg">Talk With Angelo</Button>
              <Button href="/contact/?intent=assessment" variant="onDarkGhost" size="lg">Request a Facility Assessment</Button>
            </div>
            <p className={p.small} style={{ color: "var(--fg-on-dark-muted)" }}>Prefer the phone?</p>
            <TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "home_final" }} className={styles.phone}>{site.phone}</TrackedLink>
            <p className={p.small} style={{ color: "var(--fg-on-dark-muted)", marginTop: "var(--sp-4)" }}>{site.territory}</p>
          </div>
          <div style={{ background: "var(--white)", color: "var(--fg)", borderRadius: "var(--radius-lg)", padding: "var(--sp-6)" }} className="on-light">
            <h3 style={{ marginBottom: "var(--sp-4)" }}>Start the conversation</h3>
            <Suspense fallback={<AssessmentForm compact />}><ContactFormClient compact /></Suspense>
          </div>
        </div>
      </Section>
    </>
  );
}
