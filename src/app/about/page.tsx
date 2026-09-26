import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Confirm } from "@/components/ui/Confirm";
import { CTABand } from "@/components/ui/CTABand";
import { TrackedLink } from "@/components/ui/TrackedLink";
import { pageMetadata } from "@/lib/seo";
import { site, telHref } from "@/lib/site";
import { customerReferences } from "@/content/projects";
import { markets } from "@/content/markets";
import { angeloNote } from "@/content/homepage";
import { asset } from "@/lib/paths";
import { existsSync } from "node:fs";
import { join } from "node:path";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "About Frey Technologies: Commercial Aquatic Systems in New York",
  description: "FreyTech designs, supplies, installs, commissions, trains, and services commercial pool water-treatment systems for institutions across New York State, from its Monroe County office.",
  path: "/about/",
});

const capabilities = [
  { title: "Design support", text: "Product selection, equipment schedules, submittals, and sequence-of-operation support for owners and design teams." },
  { title: "Equipment", text: "Water-chemistry controllers and chemical-feed systems as the core; filtration, bulkheads, deck and competitive equipment as part of complete facility work." },
  { title: "Installation", text: "FreyTech's own technicians install controllers, feed loops, and related mechanical-room equipment." },
  { title: "Commissioning", text: "Calibration, interlock and alarm verification, and a documented settings record at start-up." },
  { title: "Training", text: "Hands-on operator training and written procedures that survive staff turnover." },
  { title: "Service", text: "Preventive maintenance, troubleshooting, parts, remote support, and warranty coordination." },
];

export default function Page() {
  const hasPortrait = existsSync(join(process.cwd(), "public", angeloNote.portrait.src));
  return (
    <>
      <PageHero
        eyebrow="About FreyTech"
        title="New York's commercial pool water-chemistry specialist"
        lede="Frey Technologies has designed, sold, installed, and serviced commercial pool equipment and water-treatment systems for New York institutions for decades. Today the company is focused on one thing it does better than anyone else in its territory: modernizing chemical control and delivery, and standing behind it locally."
        crumbs={[{ name: "About", href: "/about/" }]}
        compact
      />

      <Section>
        <div className={p.split}>
          <div className="prose">
            <h2>Company history and specialization</h2>
            <p><Confirm note="Confirm founding history">Frey Technologies, Inc. has served New York commercial aquatic facilities since the late 1980s.</Confirm> Over that time FreyTech has specialized in the design, sale, installation, service, and training of commercial pool equipment and water-treatment systems for schools, colleges and universities, municipalities, community organizations, and hospitality facilities across New York State.</p>
            <p>The company&apos;s value has never been limited to selling equipment. FreyTech staff become familiar with a facility before visiting, test the water on site, answer questions, and make recommendations for the quality and safety of the pool. That service model gives FreyTech a reason to remain involved long after an installation: monthly, quarterly, and annual maintenance programs, phone consultation, chemistry review, parts, and chemical delivery.</p>
            <h2>Focus today</h2>
            <p>Institutional pools across New York are running controllers and feeders installed decades ago, often without remote visibility, alarms, or records that can be shown to a health department. At the same time, state funding has put an unusual number of municipal, YMCA, JCC, school, and college pools into design or construction. FreyTech&apos;s focus is helping those facilities measure, control, feed, monitor, and support their water chemistry properly: BECSys5 controls from BECS Technology as the broad foundation, Pulsar Precision calcium hypochlorite feeders where pool scale and chlorine demand justify them, and FreyTech&apos;s own engineering support, installation, commissioning, training, and service around both.</p>
            <h2>New York experience</h2>
            <p>FreyTech&apos;s customer facilities include pools and aquatic centers at Cornell University, Ithaca College, Clarkson University, Colgate University, Siena College, Marist College, SUNY at Binghamton, and school districts and BOCES facilities from the North Country to the Hudson Valley. The company has worked alongside architects, engineers, and pool consultants on new construction and renovation across the state. <Confirm note="Confirm references" /></p>
            <p>FreyTech is listed by BECS Technology as its distributor for New York.</p>
          </div>
          <div className={p.sticky}>
            <div className={p.compareCol}>
              <p className={p.kicker}>At a glance</p>
              <dl className={p.dl} style={{ marginTop: "var(--sp-3)" }}>
                <dt>Company</dt><dd>{site.legalName} (FreyTech)</dd>
                <dt>Office</dt><dd>{site.address.street}, {site.address.city}, NY {site.address.postalCode} ({site.address.county} County)</dd>
                <dt>Territory</dt><dd>New York State</dd>
                <dt>President</dt><dd>Angelo DiCiaccio</dd>
                <dt>Serving New York since</dt><dd><Confirm note="Confirm year and whether the business was established or purchased in this year">{site.since}</Confirm></dd>
                <dt>Phone</dt><dd><TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: "about" }}>{site.phone}</TrackedLink></dd>
                <dt>Email</dt><dd><TrackedLink href={`mailto:${site.email}`} event="email_click" payload={{ location: "about" }}>{site.email}</TrackedLink></dd>
                <dt>Manufacturer</dt><dd>Listed New York distributor, BECS Technology</dd>
              </dl>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="Technical capabilities" title="Design support. Equipment. Installation. Commissioning. Training. Service." />
        <div className={p.featureGrid}>
          {capabilities.map((c) => <div key={c.title} className={p.feature}><h3>{c.title}</h3><p>{c.text}</p></div>)}
        </div>
      </Section>

      <Section>
        <div className={p.splitEven}>
          <div>
            <SectionHeader eyebrow="Ownership" title="Commercial expertise without the corporate handoff" lede="FreyTech is owner-led. The people who assess your facility, install the system, and answer the phone afterward work for the same small company in Monroe County, and the owner is directly involved." />
            <div style={{ display: "grid", gridTemplateColumns: hasPortrait ? "minmax(0, 11rem) minmax(0, 1fr)" : "1fr", gap: "var(--sp-6)", alignItems: "start" }}>
              {hasPortrait && (
                // eslint-disable-next-line @next/next/no-img-element
                <img src={asset(angeloNote.portrait.src)} alt={angeloNote.portrait.alt} width={angeloNote.portrait.width} height={angeloNote.portrait.height} loading="lazy" style={{ borderRadius: "var(--radius-lg)", aspectRatio: "4 / 5", objectFit: "cover", objectPosition: "50% 15%" }} />
              )}
              <div className="prose">
                <h3>Angelo DiCiaccio, President</h3>
                <p>Angelo&apos;s relationship with FreyTech started well before he became its President. After several years with the company, he went on to gain broader experience across the commercial aquatic industry, working with manufacturers and distributors, in technical sales and product support, and with the consulting engineers and facility operators who specify and run commercial systems, before returning to lead FreyTech into its next chapter.</p>
                <p>That mix shapes how FreyTech works today: an owner who understands commercial aquatic systems and the people on every side of a project, who prefers a transparent conversation to a sales pitch, and who stays accountable for the result. <Confirm note="Angelo to approve wording" /></p>
                <p><Link href="/contact/?intent=angelo">Have a project, equipment issue, or question about your facility? Start with Angelo.</Link></p>
              </div>
            </div>
          </div>
          <div>
            <SectionHeader eyebrow="Customers and markets" title="Who we serve" />
            <ul className={p.checkList}>{markets.map((m) => <li key={m.slug}><Link href={`/markets/${m.slug}/`}>{m.name}</Link></li>)}</ul>
            <p className={p.small} style={{ marginTop: "var(--sp-5)" }}>{customerReferences.facilities.length} customer facilities and {customerReferences.designFirms.length + customerReferences.consultants.length} design firms and consultants are named on the <Link href="/projects/">projects page</Link>.</p>
            <div className={p.actions}><Button href="/service-area/" variant="secondary">Service area</Button></div>
          </div>
        </div>
      </Section>

      <CTABand source="about" />
    </>
  );
}
