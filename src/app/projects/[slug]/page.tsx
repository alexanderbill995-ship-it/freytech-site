import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Callout } from "@/components/ui/Card";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { CaseStudyView } from "@/components/ui/CaseStudyView";
import { pageMetadata } from "@/lib/seo";
import { installations } from "@/content/projects";
import p from "@/styles/page.module.css";
import { asset } from "@/lib/paths";

export function generateStaticParams() {
  return installations.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: PageProps<"/projects/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const i = installations.find((x) => x.slug === slug);
  if (!i) return {};
  return pageMetadata({ title: `${i.facility}: ${i.facilityType}`, description: i.summary, path: `/projects/${i.slug}/` });
}

export default async function Page({ params }: PageProps<"/projects/[slug]">) {
  const { slug } = await params;
  const i = installations.find((x) => x.slug === slug);
  if (!i) notFound();
  return (
    <>
      <CaseStudyView slug={i.slug} />
      <PageHero eyebrow={`${i.facilityType} · ${i.region}`} title={i.facility} lede={i.summary} crumbs={[{ name: "Projects", href: "/projects/" }, { name: i.facility, href: `/projects/${i.slug}/` }]} compact />
      <Section>
        <div className={p.split}>
          <div>
            <div className={p.imageCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(i.image.src)} alt={i.image.alt} width={i.image.width} height={i.image.height} />
            </div>
            <dl className={p.dl} style={{ marginTop: "var(--sp-6)" }}>
              <dt>Facility type</dt><dd>{i.facilityType}</dd>
              <dt>Location</dt><dd>{i.location} ({i.region})</dd>
              <dt>Scope</dt><dd><ul style={{ paddingLeft: "1rem" }}>{i.scope.map((s) => <li key={s}>{s}</li>)}</ul></dd>
              <dt>Related</dt><dd>{i.products.join(", ")}</dd>
            </dl>
          </div>
          <div>
            <Callout title="About this project record" tone="confirm">
              <p>This description is limited to what FreyTech&apos;s current website states about the project. Before launch the owner will confirm: {i.confirm.join("; ")}. <Confirm note="Owner review" /></p>
            </Callout>
            <p style={{ marginTop: "var(--sp-6)" }}>Looking for chemistry-specific detail? Detailed BECSys5 and Pulsar Precision case studies are in preparation. See <Link href="/projects/">projects</Link> or <Link href="/contact/">request a conversation</Link> and we will share references from comparable facilities.</p>
          </div>
        </div>
      </Section>
      <CTABand source={`project-${i.slug}`} />
    </>
  );
}
