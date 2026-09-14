import Link from "next/link";
import type { Metadata } from "next";
import { Button } from "@/components/ui/Button";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Card, StatBlock } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { Confirm } from "@/components/ui/Confirm";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";
import { serviceRegions } from "@/lib/regions";
import { markets } from "@/content/markets";
import { installations, testimonial } from "@/content/projects";
import styles from "./page.module.css";
import p from "@/styles/page.module.css";
import { asset } from "@/lib/paths";

export const metadata: Metadata = pageMetadata({
  title: "Frey Technologies | Commercial Pool Water Chemistry for New York State",
  description: "BECSys5 automated controls, Pulsar Precision calcium hypochlorite feeders, installation, commissioning, training, and service for commercial pools across New York State outside NYC. Request a system assessment.",
  path: "/",
});

const process = [
  { title: "Assess", text: "On-site review of controls, feed, sample loop, storage, and records." },
  { title: "Define", text: "Agree on setpoints, alarms, monitored points, and who needs visibility." },
  { title: "Design", text: "Controller and feed selection sized to demand; drawings and submittals as needed." },
  { title: "Install & commission", text: "Installation, start-up, calibration, and documented sequence of operation." },
  { title: "Train", text: "Hands-on operator training and written procedures for staff turnover." },
  { title: "Monitor & maintain", text: "Remote visibility, preventive maintenance, calibration, and parts." },
  { title: "Upgrade", text: "Staged additions: sensors, VFD, UV, BMS, or feed capacity as needs change." },
];

export default function Home() {
  return (
    <>
      <JsonLd data={{
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: site.name,
        url: site.url,
        potentialAction: { "@type": "SearchAction", target: `${site.url}/resources/?q={search_term_string}`, "query-input": "required name=search_term_string" },
      }} />

      {/* First screen: what, where, featured solutions, what to do next */}
      <section className={[styles.hero, "on-dark"].join(" ")} aria-labelledby="hero-title">
        <div className={["container", styles.heroInner].join(" ")}>
          <div className={styles.heroCopy}>
            <p className="eyebrow">Commercial aquatic systems · New York State outside NYC</p>
            <h1 id="hero-title" className={styles.h1}>Commercial pool water chemistry, engineered for New York.</h1>
            <p className={styles.heroLede}>
              Frey Technologies helps colleges, school districts, municipalities, YMCAs and JCCs, and healthcare facilities across New York State outside New York City modernize chemical control, chemical delivery, monitoring, and equipment-room operations. We assess, design, install, commission, train, and service.
            </p>
            <div className={styles.heroActions}>
              <Button href="/contact/" variant="onDark" size="lg">Request a System Assessment</Button>
              <Button href="/becsys5-controls/" variant="onDarkGhost" size="lg">Explore BECSys5 Controls</Button>
            </div>
            <p className={styles.trustLine}>
              <span>Design support</span><span>Equipment</span><span>Installation</span><span>Commissioning</span><span>Training</span><span>Service</span>
            </p>
          </div>
          <aside className={styles.panel} aria-label="Featured solutions">
            <p className={styles.panelTitle}>Featured solutions</p>
            <ul className={styles.panelList}>
              <li>
                <span className={styles.panelIcon} aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><rect x="2" y="3" width="14" height="10" rx="1.5"/><path d="M5 8h2l1.5-3 2 6L12 8h1.5"/></svg></span>
                <div><Link href="/becsys5-controls/">BECSys5 automated controls</Link><p>Measurement, control, alarms, one-year records, and secure remote access with BECSys Live.</p></div>
              </li>
              <li>
                <span className={styles.panelIcon} aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M5 2h8v4l-2 2v8H7V8L5 6z"/><path d="M7 12h4"/></svg></span>
                <div><Link href="/pulsar-precision-feeders/">Pulsar Precision feeders</Link><p>High-capacity calcium hypochlorite delivery for pools whose volume and chlorine demand justify it.</p></div>
              </li>
              <li>
                <span className={styles.panelIcon} aria-hidden="true"><svg width="18" height="18" viewBox="0 0 18 18" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M3 14l4-4 3 3 5-6"/><path d="M12 7h3v3"/></svg></span>
                <div><Link href="/water-chemistry-modernization/">Complete modernization</Link><p>Assess, design, install, commission, train, and support, in stages or all at once.</p></div>
              </li>
            </ul>
            <p className={styles.panelFoot}>Based in Wayne County. <Confirm note="Confirm year">Serving New York aquatic facilities since {site.since}.</Confirm> Listed New York distributor for BECS Technology.</p>
          </aside>
        </div>
      </section>

      {/* The central story */}
      <section className={styles.flowStrip} aria-labelledby="flow-title">
        <div className="container">
          <div className={styles.flowHead}>
            <h2 id="flow-title">Measure → Control → Feed → Monitor → Support</h2>
            <p>A modern equipment room is a loop, not a box on the wall. Each stage has a job, and the whole thing only works when someone local owns the outcome.</p>
          </div>
          <SystemFlow />
        </div>
      </section>

      {/* Featured solutions */}
      <Section>
        <SectionHeader eyebrow="Solutions" title="Two focused products. One accountable installer." lede="Most facilities need better control and visibility first. Some also need higher-capacity chemical delivery. We recommend only what your pool's demand supports." />
        <div className={styles.solutions}>
          <article className={styles.solution}>
            <p className="eyebrow">Controls</p>
            <h3><Link href="/becsys5-controls/">BECSys5 Automated Controls</Link></h3>
            <p>Expandable controller from BECS Technology. pH, ORP, and temperature standard; free-chlorine PPM, alkalinity, flow, pressures, inventory, VFD, UV, and heater control optional.</p>
            <ul>
              <li>Email and text alarms; no-flow feed lockout; failsafe timers</li>
              <li>One year of 1-minute readings for records review</li>
              <li>BECSys Live remote access with two-factor authentication, no subscription fee</li>
              <li>NSF Certified and Listed to NSF/ANSI 50</li>
            </ul>
            <p className={styles.solutionFoot}>BECSys5 details and FAQ</p>
          </article>
          <article className={styles.solution}>
            <p className="eyebrow">Chemical feed</p>
            <h3><Link href="/pulsar-precision-feeders/">Pulsar Precision Feeder Systems</Link></h3>
            <p>Calcium hypochlorite briquette erosion feeders for large pools and high bather loads. Full-size Precision for very large venues; Precision 30 for small and mid-size commercial pools.</p>
            <ul>
              <li>Up to 189 lb/day available chlorine (Precision) or 36 lb/day (Precision 30) per manufacturer manuals</li>
              <li>Dry chemical: no bleach deliveries, degradation, or bulk liquid storage</li>
              <li>Driven by BECSys5 or another controller&apos;s chlorine-demand output</li>
              <li>Sized by measured demand, not brochure gallonage</li>
            </ul>
            <p className={styles.solutionFoot}>Qualification and FAQ</p>
          </article>
          <article className={[styles.solution, styles.secondary].join(" ")}>
            <p className="eyebrow">Programs</p>
            <h3><Link href="/water-chemistry-modernization/">Complete Water-Chemistry Modernization</Link></h3>
            <p>For facilities whose equipment room has grown by accretion: one assessment, one design, one accountable installer, and a service plan that keeps it calibrated.</p>
            <ul>
              <li>Staged upgrades that fit capital cycles</li>
              <li>Coordination with your engineer and health department</li>
              <li>Commissioning documentation and operator training</li>
              <li><Link href="/service-support/">Service agreements</Link> after the install</li>
            </ul>
            <p className={styles.solutionFoot}>How the process works</p>
          </article>
        </div>
      </Section>

      {/* Trust */}
      <Section tone="alt" tight>
        <div className={styles.trustGrid}>
          <StatBlock value={<Confirm note="Confirm year">Since {site.since}</Confirm>} label="Commercial aquatic systems in New York" note="Design, equipment, installation, training, and service." />
          <StatBlock value="BECS distributor" label="Listed by BECS Technology as its New York distributor" note="Verified on becsys.com, September 2026." />
          <StatBlock value="Institutional" label="Colleges, districts, municipalities, Ys and JCCs" note="References include Cornell, Ithaca College, Clarkson, Colgate, and Siena." />
          <StatBlock value="Local" label="Wayne County office, statewide outside NYC" note="Installation and service by FreyTech's own technicians." />
        </div>
      </Section>

      {/* Markets */}
      <Section>
        <SectionHeader eyebrow="Markets served" title="Built for the facilities that run New York's public pools" lede="Each market has its own buying triggers, stakeholders, and operating pressures. Start with the page that matches yours." />
        <div className={styles.marketGrid}>
          {markets.map((m) => (
            <Card key={m.slug} title={m.name} href={`/markets/${m.slug}/`} footer="Read more">
              <p>{m.intro.split(". ")[0]}.</p>
            </Card>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section tone="dark">
        <SectionHeader eyebrow="How we work" title="From assessment to ongoing support" lede="The same sequence whether the scope is a single controller replacement or a full equipment-room modernization." />
        <ProcessSteps steps={process} columns={7} />
        <div className={p.actions}>
          <Button href="/water-chemistry-modernization/" variant="onDark">See the full process</Button>
          <Button href="/engineering-specification-support/" variant="onDarkGhost">For design teams</Button>
        </div>
      </Section>

      {/* Proof */}
      <Section>
        <SectionHeader eyebrow="Selected projects" title="Work at New York aquatic facilities" lede="Installations described on our current site. Detailed water-chemistry case studies with measured results are in preparation and will be published only with each customer's approval." />
        <div className={styles.projects}>
          {installations.map((i) => (
            <article key={i.slug} className={p.imageCard}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={asset(i.image.src)} alt={i.image.alt} width={i.image.width} height={i.image.height} loading="lazy" decoding="async" />
              <div className={p.imageCap}>
                <strong>{i.facility}</strong>
                {i.summary}
                <div style={{ marginTop: "0.5rem" }}><Link href={`/projects/${i.slug}/`}>Project details</Link></div>
              </div>
            </article>
          ))}
        </div>
        <hr className={p.divider} />
        <div className={p.split}>
          <blockquote className={p.quote}>
            <p>&ldquo;{testimonial.quote}&rdquo;</p>
            <p>&ldquo;{testimonial.quote2}&rdquo;</p>
            <footer><Confirm note="Confirm permission">{testimonial.name}, {testimonial.title}</Confirm></footer>
          </blockquote>
          <div>
            <h3>Customer references</h3>
            <p className={p.small} style={{ marginTop: "0.5rem", marginBottom: "1rem" }}>Facilities named on FreyTech&apos;s current website. <Confirm note="Confirm each">Each reference is being reconfirmed before launch.</Confirm></p>
            <ul className={p.pillList}>
              {["Cornell University", "Ithaca College", "Clarkson University", "Colgate University", "Siena College", "Marist College", "SUNY at Binghamton", "Goshen BOCES", "Hudson Falls High School", "Lowville Central Schools"].map((n) => <li key={n}>{n}</li>)}
            </ul>
            <div className={p.actions}><Button href="/projects/" variant="secondary">All projects and references</Button></div>
          </div>
        </div>
      </Section>

      {/* Service area */}
      <Section tone="navy" id="service-area">
        <SectionHeader eyebrow="Service area" title="New York State, outside New York City" lede="We install and service across upstate New York, the Hudson Valley, and Long Island. Each region page lists the facility types and references we can speak to." />
        <div className={styles.regionGrid}>
          {serviceRegions.map((r) => (
            <div key={r.slug} className={styles.regionItem}>
              <Link href={`/service-area/${r.slug}/`}>{r.name}</Link>
              <span>{r.counties.join(", ")}</span>
            </div>
          ))}
        </div>
        <p className={styles.exclusion}>
          <strong>Not served:</strong> New York City (Bronx, Kings, New York, Queens, and Richmond counties). NYC facilities are regulated separately under NYC Health Code Article 165 and are outside FreyTech&apos;s territory. Coverage of specific counties, response times, and travel are confirmed during the assessment.
        </p>
      </Section>

      <CTABand source="home" />
    </>
  );
}
