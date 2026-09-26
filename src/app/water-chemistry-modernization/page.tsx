import type { Metadata } from "next";
import Link from "next/link";
import { PageHero } from "@/components/ui/PageHero";
import { Section, SectionHeader } from "@/components/ui/Section";
import { Button } from "@/components/ui/Button";
import { Callout } from "@/components/ui/Card";
import { CTABand } from "@/components/ui/CTABand";
import { SystemFlow } from "@/components/diagrams/SystemFlow";
import { ProcessSteps } from "@/components/diagrams/ProcessSteps";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMetadata, serviceLd } from "@/lib/seo";
import p from "@/styles/page.module.css";

export const metadata: Metadata = pageMetadata({
  title: "Complete Commercial Pool Water-Chemistry Modernization in New York",
  description: "Assess, design, install, commission, train, and support: FreyTech's process for modernizing chemical control and delivery at commercial pools across New York State, using BECSys5 and, where justified, Pulsar Precision.",
  path: "/water-chemistry-modernization/",
});

const steps = [
  { title: "Assess the existing system", text: "A structured walk-through of the sample loop, controller, probes, feed equipment, injection points, chemical storage, electrical, network, and records. You receive a written findings summary with photos.", deliverable: "Assessment report: what you have, what is at risk, what is optional." },
  { title: "Define operating needs", text: "Who needs to see what, who receives alarms, what must be logged, and how many bodies of water are involved. Staffing model and turnover matter as much as chemistry.", deliverable: "Point list and alarm policy draft." },
  { title: "Design the control and feed approach", text: "Controller model and options, feed method and capacity sized to measured demand, interlocks, communications, and any BMS interface. Coordinated with your engineer where plan approval applies.", deliverable: "Scope, equipment schedule, submittals, sequence of operation." },
  { title: "Install and commission", text: "FreyTech technicians install, start up, calibrate against manual tests, set and verify alarm limits and failsafe timers, test alarm delivery, and record every setting.", deliverable: "Commissioning record and as-installed settings." },
  { title: "Train operators", text: "Hands-on training for the people who run the pool today and written procedures for the ones who will run it later. Supervisors learn access levels and reporting.", deliverable: "Training sign-off and on-site procedures." },
  { title: "Monitor and maintain", text: "Remote visibility through BECSys Live, preventive maintenance visits, calibration, probe and parts replacement, and phone support.", deliverable: "Service agreement matched to your facility." },
  { title: "Support future upgrades", text: "Add sensors, VFD control, UV, alkalinity, inventory monitoring, BMS integration, or feed capacity when budgets and needs change, without starting over.", deliverable: "Upgrade roadmap tied to your capital plan." },
];

export default function Page() {
  return (
    <>
      <JsonLd data={serviceLd({ name: "Commercial Pool Water-Chemistry Modernization", serviceType: "Aquatic facility water treatment modernization", description: metadata.description as string, path: "/water-chemistry-modernization/" })} />
      <PageHero
        eyebrow="Complete solution"
        title="Complete water-chemistry modernization"
        lede="One assessment, one design, one accountable installer, and a service plan that keeps it calibrated. For equipment rooms that have grown by accretion and facilities that want to stop managing chemistry by surprise."
        crumbs={[{ name: "Solutions", href: "/water-chemistry-modernization/" }, { name: "Complete Modernization", href: "/water-chemistry-modernization/" }]}
        actions={<><Button href="/contact/?request=modernization" variant="onDark" size="lg">Discuss a Modernization Project</Button><Button href="/engineering-specification-support/" variant="onDarkGhost" size="lg">Working with a design team?</Button></>}
      />

      <Section>
        <SectionHeader eyebrow="The system" title="Measure, control, feed, monitor, support" lede="BECSys5 provides measurement, control, records, alarms, and remote visibility. Pulsar Precision provides high-capacity chemical delivery where facility size and chlorine demand justify it. FreyTech provides the local engineering support, installation, commissioning, training, and service that make the loop work." />
        <SystemFlow />
        <Callout title="Both products are not always required" tone="info">
          <p>Most modernization projects begin with control and visibility. A BECSys5 on a sound sample loop, with a properly interlocked existing feed system, resolves the majority of chemistry problems at typical institutional pools. A Pulsar Precision feeder is added when measured chlorine demand, chemical-handling burden, or storage constraints make dry calcium hypochlorite the better delivery method. We recommend the combination only when the numbers support it.</p>
        </Callout>
      </Section>

      <Section tone="alt">
        <SectionHeader eyebrow="The process" title="Seven steps, in order" lede="Each step produces something you keep. Skipping the assessment is how new controllers end up on bad sample lines." />
        <ProcessSteps steps={steps} columns={4} />
      </Section>

      <Section>
        <div className={p.splitEven}>
          <div>
            <h2>Staged or all at once</h2>
            <div className="prose" style={{ marginTop: "var(--sp-4)" }}>
              <p>Modernization does not have to be a single capital event. Common stagings:</p>
              <ul>
                <li><strong>Stabilize first:</strong> replace failing probes, fix the sample loop, and add remote alarms to the existing controller where possible; plan the controller replacement for the next budget cycle.</li>
                <li><strong>Controller now, feed later:</strong> install BECSys5 on the existing feed equipment with interlocks; evaluate feed conversion after a season of logged demand data.</li>
                <li><strong>Renovation bundle:</strong> when the pump room is being rebuilt, specify controls, feed, interlocks, monitoring, commissioning, and training together so they are coordinated and approved once.</li>
              </ul>
            </div>
          </div>
          <div>
            <h2>What you should have ready</h2>
            <ul className={p.checkList} style={{ marginTop: "var(--sp-4)" }}>
              <li>Controller and feeder make, model, and approximate install year</li>
              <li>Pool volumes, turnover, and number of bodies of water</li>
              <li>A recent month of daily operation records</li>
              <li>Recent problems: closures, alarms, probe replacements, complaints</li>
              <li>Any funded project scope, schedule, and design team</li>
              <li>Who operates the pool and who needs visibility</li>
            </ul>
            <div className={p.actions}><Button href="/contact/?request=modernization">Discuss a Modernization Project</Button></div>
          </div>
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeader eyebrow="Approvals and coordination" title="New York plan review, handled with your engineer" />
        <div className="prose" style={{ color: "var(--fg-on-dark-muted)" }}>
          <p>Additions or modifications to a public pool in New York generally require plans prepared by a licensed engineer or architect and approval by the permit-issuing official before work begins (10 NYCRR 6-1.8), followed by a compliance certificate before use (6-1.9). Whether a given controller or feeder change triggers review is the permit-issuing official&apos;s call. FreyTech provides submittals, equipment schedules, and sequence-of-operation language to your design professional and coordinates scheduling with the health department&apos;s review. See <Link href="/resources/new-york-pool-chemistry-requirements/">requirements at a glance</Link>.</p>
        </div>
      </Section>

      <CTABand source="modernization" title="Start with the assessment" text="Whether you are stabilizing an aging system or planning a full pump-room renovation, the assessment gives you a documented picture and a recommended scope." />
    </>
  );
}
