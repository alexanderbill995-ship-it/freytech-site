import { sources } from "./products";

export type ResourceLink = { title: string; href: string; text: string; external?: boolean; category: string; event?: "document_download" };

/** Resource center. External links point to official sources only. */
export const resourceCategories = [
  "Operator guides",
  "Product FAQs",
  "Product literature",
  "Maintenance checklists",
  "Modernization guides",
  "Engineering resources",
  "Regulatory resources",
  "Case studies",
] as const;

export const resources: ResourceLink[] = [
  // Operator guides (on-site articles)
  { category: "Operator guides", title: "Total alkalinity and why your controller cares about it", href: "/resources/total-alkalinity-and-controllers/", text: "Why alkalinity in the 80–120 mg/L range keeps pH stable and lets an ORP or PPM controller do its job." },
  { category: "Operator guides", title: "Reading a controller alarm: a triage sequence for operators", href: "/resources/controller-alarm-triage/", text: "What to check first when a BECSys controller shows no-flow, feed-limit, or out-of-range alarms." },
  // Maintenance checklists
  { category: "Maintenance checklists", title: "Monthly water-chemistry equipment checklist", href: "/resources/monthly-equipment-checklist/", text: "Probe cleaning and calibration checks, flow-cell inspection, feeder cleaning, and record review on a monthly cadence." },
  // Modernization guides
  { category: "Modernization guides", title: "When to replace a commercial pool chemical controller", href: "/resources/when-to-replace-a-pool-controller/", text: "Seven signs an aging controller is costing you more than a replacement would, and how to plan the change." },
  { category: "Modernization guides", title: "Complete water-chemistry modernization: the FreyTech process", href: "/water-chemistry-modernization/", text: "Assess, define, design, install and commission, train, monitor, and plan for upgrades." },
  // Product FAQs
  { category: "Product FAQs", title: "BECSys5 frequently asked questions", href: "/becsys5-controls/#faq", text: "Bodies of water per controller, NSF/ANSI 50 status, PPM versus ORP control, BECSys Live cost, BMS integration." },
  { category: "Product FAQs", title: "Pulsar Precision frequently asked questions", href: "/pulsar-precision-feeders/#faq", text: "Sizing by chlorine demand, Precision versus Precision 30, stabilizer and New York, chemical handling, alternatives." },
  // Product literature (official manufacturer sources)
  { category: "Product literature", title: sources.becsys5Brochure.label, href: sources.becsys5Brochure.href, text: "Official BECS Technology brochure for the BECSys5 controller.", external: true, event: "document_download" },
  { category: "Product literature", title: sources.becsysLive.label, href: sources.becsysLive.href, text: "Official BECS Technology brochure describing BECSys Live remote access.", external: true, event: "document_download" },
  { category: "Product literature", title: sources.chemLock.label, href: sources.chemLock.href, text: "Independent chemical-feed interlock option for BECSys controllers.", external: true, event: "document_download" },
  { category: "Product literature", title: sources.pulsarPrecision.label, href: sources.pulsarPrecision.href, text: "Manufacturer page for the full-size Pulsar Precision feeder, with links to the information sheet and manual.", external: true },
  { category: "Product literature", title: sources.pulsarPrecision30Manual.label, href: sources.pulsarPrecision30Manual.href, text: "Manufacturer operation and installation manual for the Precision 30, including sizing guidance and clearances.", external: true, event: "document_download" },
  { category: "Product literature", title: sources.pulsarBriquetteSDS.label, href: sources.pulsarBriquetteSDS.href, text: "Safety data sheet for Pulsar Plus calcium hypochlorite briquettes.", external: true, event: "document_download" },
  // Engineering resources
  { category: "Engineering resources", title: "Engineering & specification support", href: "/engineering-specification-support/", text: "Selection assistance, equipment schedules, submittals, sequence of operation, and approved-equal review." },
  { category: "Engineering resources", title: sources.pulsarPrecision30Resources.label, href: sources.pulsarPrecision30Resources.href, text: "Bid specification, CAD files (DWG, STEP, RVT), footprint drawing, and schematics from the manufacturer.", external: true },
  { category: "Engineering resources", title: sources.nsf50.label, href: sources.nsf50.href, text: "Background on NSF/ANSI 50 certification for pool and spa equipment.", external: true },
  // Regulatory resources
  { category: "Regulatory resources", title: sources.nysSubpart61.label, href: sources.nysSubpart61.href, text: "The New York State Sanitary Code provisions for swimming pools, including operating records (6-1.21), disinfectant and pH (6-1.11), and plan approval (6-1.8).", external: true },
  { category: "Regulatory resources", title: sources.nysdohPools.label, href: sources.nysdohPools.href, text: "New York State Department of Health swimming pool program page with forms and guidance.", external: true },
  { category: "Regulatory resources", title: sources.mahc.label, href: sources.mahc.href, text: "CDC Model Aquatic Health Code, 2023 edition. Guidance in New York unless adopted by a jurisdiction.", external: true },
  { category: "Regulatory resources", title: "New York requirements at a glance for pool chemistry equipment", href: "/resources/new-york-pool-chemistry-requirements/", text: "A plain-language summary of 10 NYCRR Subpart 6-1 provisions relevant to controllers, feeders, and records, with citations." },
  // Case studies
  { category: "Case studies", title: "Projects and installations", href: "/projects/", text: "Selected FreyTech installations at New York facilities, with detailed water-chemistry case studies in preparation." },
];

export type Article = {
  slug: string;
  title: string;
  description: string;
  category: string;
  updated: string;
  byline?: string;
  confirm?: string;
  body: { h?: string; p?: string[]; ul?: string[]; table?: { head: string[]; rows: string[][] } }[];
};

export const articles: Article[] = [
  {
    slug: "total-alkalinity-and-controllers",
    title: "Total alkalinity and why your controller cares about it",
    description: "Why total alkalinity in the 80–120 mg/L range keeps pH stable and lets an ORP or PPM controller do its job in a commercial pool.",
    category: "Operator guides",
    updated: "2026-09",
    byline: "Originally published in FreyTech's January 2015 operator newsletter (author: Mike Wilson); updated for current practice.",
    body: [
      { p: ["Total alkalinity (TA) measures the alkaline substances dissolved in the water, chiefly bicarbonate in a swimming pool. New York's Sanitary Code sets a range of 80 to 120 mg/L for public pools (10 NYCRR 6-1.19). Within that range, alkalinity acts as a buffer: it resists rapid pH swings and gives the pH controller something stable to work against."] },
      { h: "When alkalinity is too low", p: ["pH becomes unstable and bounces as sanitizer and acid are fed. Plaster and grout can etch, metals can corrode, and staining is more likely. For an automated controller the effect is direct: an ORP or pH controller reacts to swings it did not cause, feeds to correct them, and overshoots. Operators often see unusually high chlorine readings in the morning after a night of unstable pH on a low-alkalinity pool."] },
      { h: "When alkalinity is too high", p: ["pH becomes difficult to lower. The controller calls for acid or carbon dioxide repeatedly with little visible result, and high pH reduces the effectiveness of free chlorine as a disinfectant. Water may also cloud. Note that carbon dioxide feed, while it lowers pH, adds to alkalinity over time, so pools on CO2 need particular attention to the TA trend."] },
      { h: "What to do", ul: ["Test total alkalinity at least weekly with a fresh reagent kit, more often after large water additions or chemical adjustments.", "Trend it. A controller's data log shows whether pH swings correlate with alkalinity drifting out of range.", "Adjust in stages and re-test; large single corrections create new swings.", "If a controller seems to be fighting the water, check alkalinity before assuming a probe or feed problem."] },
      { p: ["FreyTech service programs include water testing and chemistry review on scheduled visits, and BECSys controllers with the optional alkalinity meter can monitor and control TA directly. Either way, alkalinity is the foundation the rest of the chemistry sits on."] },
    ],
  },
  {
    slug: "controller-alarm-triage",
    title: "Reading a controller alarm: a triage sequence for operators",
    description: "A practical order of operations for responding to no-flow, feed-limit, and out-of-range alarms on a commercial pool chemistry controller.",
    category: "Operator guides",
    updated: "2026-09",
    body: [
      { p: ["An alarm is information, not a verdict. Most alarms on a well-commissioned controller are caused by something upstream of the controller: flow, sample line, probe condition, chemical supply, or the pool itself. Work through causes in this order before changing setpoints."] },
      { h: "1. No-flow alarm", ul: ["Confirm the recirculation pump is running and the filter is not in backwash.", "Check the sample line to the flow cell for a closed valve, a clogged strainer, or air.", "Verify the flow switch or flow sensor is clean and seated.", "Feed should be locked out while flow is absent; this is the interlock doing its job (see 10 NYCRR 6-1.29 item 11.7)."] },
      { h: "2. Feed-limit (failsafe timer) alarm", ul: ["The controller fed for its maximum allowed time without reaching setpoint. First question: did chemical actually reach the water?", "Check chemical supply: empty tank, empty hopper, closed valve, air-locked pump, or a feeder that has stopped eroding.", "Check for a sample-line problem that leaves the probes reading stale water.", "Only then consider whether demand genuinely exceeded feed capacity (a heavy event, a large fresh-water addition)."] },
      { h: "3. Out-of-range pH or ORP/chlorine", ul: ["Confirm with a manual DPD and pH test; New York requires manual testing regardless of the controller (6-1.11).", "If manual and controller disagree, clean and recalibrate the probe per the manual, or replace a probe past its service life.", "If they agree, treat the water: the controller is telling you the truth."] },
      { h: "4. Communication or remote-access alarm", ul: ["The controller keeps controlling locally. Check the network cable, switch, and internet connection before anything else.", "Remote visibility returns when the connection does; local logging continues in the meantime."] },
      { p: ["Record the alarm, the cause you found, and the action taken in your daily operation record. Patterns across weeks are the most valuable maintenance information you have. If an alarm recurs and you cannot find the cause, request service; do not raise the limit to silence it."] },
    ],
  },
  {
    slug: "monthly-equipment-checklist",
    title: "Monthly water-chemistry equipment checklist",
    description: "A monthly inspection routine for controllers, probes, flow cells, and chemical feeders at commercial pools.",
    category: "Maintenance checklists",
    updated: "2026-09",
    body: [
      { p: ["Use this alongside the manufacturer's manuals for your specific controller and feed equipment. It does not replace daily testing and daily operation records required in New York."] },
      { h: "Controller and sensors", ul: ["Compare controller pH and free chlorine (or ORP trend) against a fresh manual test; note the difference in your log.", "Inspect the flow cell for debris, scale, or air; clean per the manual.", "Inspect probes for coating or damage; clean and calibrate per the manual, and record the calibration.", "Confirm the flow switch or sensor actuates when sample flow is interrupted (feed should stop).", "Review alarm history for the month and note any recurring alarms.", "Confirm alarm notification recipients are current (staff changes happen)."] },
      { h: "Chemical feed", ul: ["Liquid systems: inspect tubing, check valves, injection point, and pump diaphragm; check for crystallization at the injection point.", "Erosion feeders (cal hypo): inspect and clean the hopper, spray nozzles, and solution tank per the manual; confirm briquette supply and storage conditions.", "Verify the feeder stops when the controller's demand output is off.", "Inspect chemical storage for segregation of incompatible chemicals, labeling, ventilation, and SDS availability."] },
      { h: "Records and trends", ul: ["Review the controller's monthly trend for pH and sanitizer; look for daily patterns tied to bather load or HVAC.", "Confirm the daily operation record is complete for the month and retained on site (New York: 12 months).", "Note parts nearing service life (probes, pump tubes, flow-cell components) for the next visit."] },
    ],
  },
  {
    slug: "when-to-replace-a-pool-controller",
    title: "When to replace a commercial pool chemical controller",
    description: "Seven signs an aging chemical controller is costing more than a replacement would, and how to plan the upgrade at a New York facility.",
    category: "Modernization guides",
    updated: "2026-09",
    body: [
      { p: ["Chemical controllers do not usually fail all at once. They become unreliable, unsupported, and invisible, and the cost shows up as staff time, chemistry excursions, and risk. These are the signs that a replacement should be in the capital plan."] },
      { h: "Seven signs", ul: ["The model is discontinued and replacement parts or probes are hard to source.", "No remote visibility: the only way to know the pool's chemistry after hours is to drive there.", "No alarm notification, or alarms go to a person who has left.", "Repeated probe replacement without stable readings, suggesting an electronics or flow-cell problem.", "No data logging, so you cannot show the health department or your own management what happened last Tuesday.", "The controller cannot interlock feed with flow, or the interlock is bypassed.", "Only one person knows how to operate it."] },
      { h: "Planning the replacement", ul: ["Start with an assessment of the whole loop: sample line, flow cell, probes, feed equipment, and chemical storage. A new controller on a bad sample line is a bad controller.", "Define what you want to see and control: pH and ORP only, or free chlorine PPM, alkalinity, flow, pressures, inventory, VFD, UV, heater.", "Decide who receives alarms and how, and who can change setpoints.", "Check whether the change triggers plan review by your permit-issuing official (10 NYCRR 6-1.8); your engineer and FreyTech can advise.", "Schedule around the pool calendar and plan for training of current and future operators."] },
      { p: ["FreyTech's system assessment produces a documented recommendation for a staged or complete upgrade. Request one from the contact page."] },
    ],
  },
  {
    slug: "new-york-pool-chemistry-requirements",
    title: "New York requirements at a glance for pool chemistry equipment",
    description: "Plain-language summary of 10 NYCRR Subpart 6-1 provisions relevant to chemical controllers, feeders, operating records, and plan approval at public pools outside New York City.",
    category: "Regulatory resources",
    updated: "2026-09",
    body: [
      { p: ["This summary is for convenience only and is not legal advice. Requirements are interpreted and enforced by the permit-issuing official for your facility (your county or city health department, or the NYSDOH district office). New York City facilities are regulated separately under NYC Health Code Article 165 and are outside FreyTech's territory. Verify current text at regs.health.ny.gov."] },
      { table: { head: ["Topic", "Section", "What it says (summary)"], rows: [
        ["Daily records", "6-1.21(c)", "Complete daily operation records on State-approved forms, kept at the facility for 12 months; the permit-issuing official may require periodic reports."],
        ["Testing frequency", "6-1.11(c)(5)", "pH and free and total chlorine (or bromine) tested and recorded at the beginning, during, and end of each swimming period with a DPD kit and fresh reagents."],
        ["Free chlorine, pools", "6-1.11(c)(1)", "Minimum 0.6 mg/L at pH 7.8 or below, 1.5 mg/L at pH 7.8–8.2; maximum 5.0 mg/L; pH not above 8.2 during use."],
        ["Free chlorine, spas", "6-1.25(c)", "Minimum 1.5 mg/L, maximum 5.0 mg/L; pH 7.2–7.8."],
        ["Alkalinity", "6-1.19(c)(2)", "80–120 mg/L."],
        ["Stabilizer", "6-1.11(c)(4)", "Cyanuric acid is prohibited."],
        ["Continuous operation", "6-1.10(a)", "Recirculation and disinfection equipment operate continuously."],
        ["Feeders", "6-1.29 items 11.1, 11.6", "Automatic adjustable disinfectant feeder; pH feed equipment unless pH holds without it."],
        ["No-flow shutoff", "6-1.29 item 11.7", "An automatic device deactivates chemical feeders when there is no recirculation flow."],
        ["Electronic monitoring", "6-1.29 item 11.8", "Electronic residual and pH monitoring devices may be used in addition to the test kit."],
        ["Operator", "6-1.2(l), 6-1.21(b)", "A qualified swimming pool treatment operator for pools over 3,000 sq ft or using gas chlorine."],
        ["Plan approval", "6-1.8, 6-1.9", "Plans by a licensed engineer or architect approved by the permit-issuing official before any addition or modification; compliance certificate before use."],
      ] } },
      { h: "What this means for controllers and feeders", ul: ["An automated controller supplements manual testing and daily records; it does not replace them.", "Feed equipment must stop when recirculation stops. BECSys controllers provide no-flow feed lockout, and the optional ChemLock adds an independent interlock. Final acceptance rests with your permit-issuing official.", "Because stabilizer is prohibited, trichlor feeders and 'stabilized' sizing guidance for outdoor pools generally do not apply in New York public pools.", "Modifying chemical treatment equipment may require plan approval; involve your engineer early."] },
      { p: ["The CDC Model Aquatic Health Code (2023) recommends automated controllers certified to NSF/ANSI 50 with flow interlocks. In New York it is guidance unless adopted by a jurisdiction. Regulatory summary last reviewed September 2026."] },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((a) => a.slug === slug);
}
