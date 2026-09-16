/**
 * Homepage copy. Everything attributed to Angelo or describing owner history is
 * PROPOSED and flagged for approval (see docs/OWNER-VERIFICATION-CHECKLIST.md).
 * The years figure comes from site.since (current site: business purchased 1987).
 */
import { site } from "@/lib/site";

/** Company tenure comes from the current site's 1987 purchase statement; confirm before publishing a number. */
export const companySince = site.since;

export const hero = {
  eyebrow: "Commercial water quality · New York State outside NYC",
  title: "Commercial water quality deserves personal accountability.",
  lede: "FreyTech is an owner-led commercial aquatic company that helps New York facilities solve water-quality problems, modernize equipment rooms and keep critical systems operating. Commercial expertise without the corporate handoff: you work with people who know your facility, understand the equipment and stay accountable for the result.",
  primary: { label: "Talk With Angelo About Your Facility", href: "/contact/?intent=angelo" },
  secondary: { label: "See How FreyTech Can Help", href: "#help" },
  tertiary: { label: "Explore Products & Solutions", href: "/products/" },
};

export const proof = [
  { value: "Owner-led", label: "more than a decade of commercial aquatic industry and sales experience behind the company" },
  { value: "Institutional", label: "municipal, school, university, YMCA and healthcare experience", confirm: "Confirm references" },
  { value: "End to end", label: "equipment selection, installation, commissioning, training and service", confirm: "Confirm each service is offered" },
  { value: "New York", label: "Wayne County office; commercial and institutional focus statewide, excluding New York City" },
  { value: "BECS distributor", label: "listed by BECS Technology as its New York distributor" },
];

export const pillars = [
  { title: "Personal accountability", text: "The person helping recommend the solution stays connected to the outcome, and the owner is directly involved in the business. You know who to call, and that person knows your equipment room." },
  { title: "Practical expertise", text: "Recommendations are grounded in actual equipment rooms, operating demands and facility constraints, not in a brochure." },
  { title: "Long-term support", text: "The relationship does not end when equipment arrives. FreyTech can assist with implementation, commissioning, operator training, maintenance and troubleshooting.", confirm: "Confirm scope of ongoing support" },
  { title: "Facility-specific recommendations", text: "The goal is to understand the facility and recommend an appropriate combination of equipment, controls and support, not to push a generic system." },
];

/** PROPOSED first-person copy. Must not be published as Angelo's words until he approves or rewrites it. */
export const angeloNote = {
  heading: "A note from Angelo",
  title: "Commercial expertise without the corporate handoff.",
  paragraphs: [
    "I've spent much of my career in commercial aquatics, including several years here at FreyTech before returning to lead the company. In between, I worked on other sides of this industry: with manufacturers, in distribution, in technical sales, and alongside the engineers and operators who actually run these facilities.",
    "What that taught me is simple. The equipment matters, but the relationship matters just as much. You need someone who answers the phone, understands your equipment room, gives you a straight answer, and follows through.",
    "That is how we are building FreyTech today. If you have a project, an equipment issue, or a question about your facility, start with me.",
  ],
  signature: "Angelo DiCiaccio",
  title2: "President, Frey Technologies",
  portrait: { src: "/images/brand/angelo-diciaccio.webp", alt: "Angelo DiCiaccio, President of Frey Technologies", width: 640, height: 800 },
  confirm: "Proposed first-person copy: Angelo to approve or edit before it is published as his words.",
};

export const problems = [
  { label: "Water chemistry will not remain stable", href: "/solutions/stabilize-water-chemistry/" },
  { label: "The existing controller is unreliable or obsolete", href: "/solutions/replace-obsolete-controller/" },
  { label: "Chemical storage or handling is a concern", href: "/solutions/improve-chemical-safety/" },
  { label: "The system requires too much manual intervention", href: "/solutions/reduce-manual-testing/" },
  { label: "Water clarity is inconsistent", href: "/solutions/improve-filtration-water-clarity/" },
  { label: "Water, chemicals, energy or labor are being wasted", href: "/solutions/reduce-waste/" },
  { label: "Replacement parts are difficult to locate", href: "/solutions/find-replacement-equipment/" },
  { label: "The equipment room needs modernization", href: "/solutions/modernize-aging-equipment-room/" },
  { label: "A capital project needs evaluation, budgeting or specification support", href: "/solutions/prepare-specifications-budgets/" },
  { label: "Operators need training or ongoing support", href: "/service-support/" },
  { label: "We are considering replacing liquid chlorine", href: "/solutions/replace-liquid-chlorine/" },
  { label: "I know the problem but not the product name", href: "/contact/?intent=find" },
];

export const systemStages = [
  { title: "Measure", text: "Facility and water conditions: chemistry, flow, pressures, demand." },
  { title: "Control", text: "Chemistry and connected equipment held to setpoints with interlocks." },
  { title: "Feed", text: "Treatment products delivered reliably at the capacity the pool needs." },
  { title: "Monitor", text: "Performance recorded, problems identified, people alerted." },
  { title: "Support", text: "The operators responsible for the facility, supported locally." },
];

export const featured = [
  { title: "BECSys5 automated controls", text: "For facilities seeking water-chemistry consistency, operator visibility, documentation and control.", href: "/becsys5-controls/" },
  { title: "Pulsar Precision chlorination", text: "For facilities evaluating commercial dry chlorination or alternatives to their current chemical-delivery process.", href: "/pulsar-precision-feeders/" },
  { title: "Complete water-chemistry systems", text: "For facilities requiring coordinated controls, chemical delivery, commissioning, training and support.", href: "/water-chemistry-modernization/" },
  { title: "Equipment-room modernization", text: "For facilities that need a practical modernization plan rather than another isolated equipment replacement.", href: "/solutions/modernize-aging-equipment-room/" },
];

export const lifecycle = [
  { title: "Initial facility conversation", text: "What is happening, who is involved, what has been tried." },
  { title: "On-site evaluation", text: "The sample loop, controls, feed, filtration, storage and records, documented." },
  { title: "Options and recommendations", text: "Staged or complete, with the reasoning written down." },
  { title: "Design or specification support", text: "Schedules, submittals and sequence of operation with your engineer.", confirm: true },
  { title: "Equipment procurement", text: "Selection, lead times and coordination with the manufacturer.", confirm: true },
  { title: "Installation", text: "By FreyTech technicians, scheduled around the pool calendar.", confirm: true },
  { title: "Commissioning", text: "Calibration, interlock and alarm tests, and a settings record." },
  { title: "Operator training", text: "Hands-on, with written procedures left on site." },
  { title: "Ongoing service and troubleshooting", text: "Phone support, preventive maintenance, parts and warranty coordination." },
];

export const catalogIntro = {
  heading: "Looking for something? Let me show you what we've got.",
  text: "Whether you know the exact model or only the problem you are trying to solve, FreyTech has organized commercial aquatic equipment, manufacturers and technical resources in one place. Search the catalog, or ask Angelo to help narrow the options.",
  placeholder: "Search by product, model, manufacturer or problem…",
};

export const finalCta = {
  heading: "Let's talk about your facility.",
  text: "Whether you are troubleshooting an existing system, planning a capital project or trying to understand your equipment options, start with a conversation. FreyTech will help identify the next practical step.",
  support: "Have a project, equipment issue, or question about your facility? Start with Angelo.",
};
