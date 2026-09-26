import type { DocType } from "./catalog/types";
import { sources } from "./products";

/**
 * Structured technical library. Items link to manufacturer-hosted documents or
 * FreyTech pages; "placeholder" items describe documents that exist but cannot be
 * republished without authorization (visitors can request them).
 */
export type ResourceItem = {
  id: string;
  title: string;
  type: DocType | "Regulatory reference" | "Guide";
  products: string[]; // product slugs, [] for general
  manufacturer?: string; // manufacturer slug
  category?: string; // category slug
  href?: string;
  fileType: "PDF" | "Web" | "Page";
  external: boolean;
  status: "linked" | "placeholder";
  note?: string;
  description: string;
};

export const resourceTypes = ["Brochure", "Specification sheet", "Owner's manual", "Installation manual", "Warranty", "Safety data sheet", "Engineering resource", "Operator guide", "Case study", "Regulatory reference", "Guide", "Product page"] as const;

export const resourceLibrary: ResourceItem[] = [
  // BECS
  { id: "becsys5-brochure", title: "BECSys5 brochure (SLS-4333-H)", type: "Brochure", products: ["becsys5"], manufacturer: "becs", category: "automated-controls", href: sources.becsys5Brochure.href, fileType: "PDF", external: true, status: "linked", description: "Official BECS Technology brochure: standard and optional capabilities, BECSys Live, warranty terms." },
  { id: "becsys3-brochure", title: "BECSys3 brochure (SLS-4655-E)", type: "Brochure", products: ["becsys3"], manufacturer: "becs", category: "automated-controls", href: "https://www.becsys.com/wp-content/uploads/2021/06/SLS-4655-E_BECSys3.pdf", fileType: "PDF", external: true, status: "linked", description: "Entry-level pH/ORP controller with optional PPM and communications." },
  { id: "becsys7-brochure", title: "BECSys7 brochure (SLS-4335-F)", type: "Brochure", products: ["becsys7"], manufacturer: "becs", category: "automated-controls", href: "https://www.becsys.com/wp-content/uploads/sites/2/2025/10/SLS-4335-F_BECSys7.pdf", fileType: "PDF", external: true, status: "linked", description: "Chemistry control with automatic backwash for up to 16 filters." },
  { id: "becsys-family", title: "BECSys family brochure (SLS-4336-F)", type: "Brochure", products: ["becsys3", "becsys5", "becsys7"], manufacturer: "becs", category: "automated-controls", href: sources.becsysFamily.href, fileType: "PDF", external: true, status: "linked", description: "Overview of the BECSys controller family." },
  { id: "becsys-live", title: "BECSys Live brochure (SLS-6105-A)", type: "Brochure", products: ["becsys5", "becsys7", "becsys3"], manufacturer: "becs", category: "automated-controls", href: sources.becsysLive.href, fileType: "PDF", external: true, status: "linked", description: "Remote access: security, devices, dashboards, graphs, reports." },
  { id: "chemlock", title: "BECSys ChemLock brochure (SLS-6152-A)", type: "Brochure", products: ["becsys-chemlock"], manufacturer: "becs", category: "automated-controls", href: sources.chemLock.href, fileType: "PDF", external: true, status: "linked", description: "Independent UL 508A chemical-feed interlock." },
  { id: "becsys5-tds", title: "BECSys5 Technical Data Sheet (TDS-4262)", type: "Specification sheet", products: ["becsys5"], manufacturer: "becs", category: "automated-controls", fileType: "PDF", external: false, status: "placeholder", note: "Official copy provided by FreyTech on request; hosting pending BECS permission.", description: "Full specifications, I/O, listings, and warranty." },
  { id: "becsys5-om", title: "BECSys5 Operator's Manual", type: "Owner's manual", products: ["becsys5"], manufacturer: "becs", category: "automated-controls", fileType: "PDF", external: false, status: "placeholder", note: "Provided with the system and on request to customers.", description: "Daily operation, calibration, alarms." },
  { id: "becsys5-install", title: "BECSys5 Installation & Technical Manual", type: "Installation manual", products: ["becsys5"], manufacturer: "becs", category: "automated-controls", fileType: "PDF", external: false, status: "placeholder", note: "Provided to installers and engineers on request.", description: "Mounting, wiring, sample loop, and configuration." },
  { id: "becs-warranty", title: "BECSys controller warranty terms", type: "Warranty", products: ["becsys3", "becsys5", "becsys7", "becs-replacement-sensors"], manufacturer: "becs", category: "automated-controls", href: sources.becsys5Brochure.href, fileType: "PDF", external: true, status: "linked", description: "5 years electronics; 2 years pH/ORP/temperature sensors; 1 year optional sensors and flow cell, as stated in BECS literature." },
  // Pulsar
  { id: "pulsar-precision-page", title: "Pulsar Precision product page", type: "Product page", products: ["pulsar-precision"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarPrecision.href, fileType: "Web", external: true, status: "linked", description: "Manufacturer page with links to the information sheet and manual." },
  { id: "pulsar-precision-manual", title: "Pulsar Precision Operation & Installation Manual (Rev 1.0, 2020)", type: "Installation manual", products: ["pulsar-precision"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", fileType: "PDF", external: false, status: "placeholder", note: "Available via Pulsar's support page; provided by FreyTech on request.", description: "Capacity tables, water and electrical requirements, installation, and maintenance." },
  { id: "p30-page", title: "Pulsar Precision 30 product page", type: "Product page", products: ["pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarPrecision30.href, fileType: "Web", external: true, status: "linked", description: "Manufacturer page; recommended pool size 10,000–300,000 gallons." },
  { id: "p30-manual", title: "Pulsar Precision 30 Operation & Installation Manual (Rev 1.1, 2023)", type: "Installation manual", products: ["pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarPrecision30Manual.href, fileType: "PDF", external: true, status: "linked", description: "Sizing guidance, clearances, flow-based installation, maintenance." },
  { id: "p30-eng", title: "Precision 30 bid specification, CAD (DWG/STEP/RVT), footprint, schematics", type: "Engineering resource", products: ["pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarPrecision30Resources.href, fileType: "Web", external: true, status: "linked", description: "Manufacturer engineering files for specifiers." },
  { id: "pulsar-sds", title: "Pulsar Plus calcium hypochlorite briquettes SDS", type: "Safety data sheet", products: ["pulsar-plus-briquettes", "pulsar-precision", "pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarBriquetteSDS.href, fileType: "PDF", external: true, status: "linked", description: "Hazards, handling, storage, and first aid." },
  { id: "pulsar-support", title: "Pulsar support and manuals", type: "Engineering resource", products: ["pulsar-precision", "pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", href: sources.pulsarSupport.href, fileType: "Web", external: true, status: "linked", description: "All Pulsar manuals and safety data sheets." },
  { id: "pulsar-warranty", title: "Pulsar feeder warranty terms", type: "Warranty", products: ["pulsar-precision", "pulsar-precision-30"], manufacturer: "pulsar", category: "chemical-delivery-chlorination", fileType: "PDF", external: false, status: "placeholder", note: "Stated in the feeder manuals: 12 months from installation or 18 months from shipment; Pulsar Plus briquettes required.", description: "Manufacturer warranty as stated in the O&I manuals." },
  // Secondary lines (placeholders pending confirmation)
  { id: "defender-brochure", title: "Defender regenerative media filter brochure and specification", type: "Brochure", products: ["defender-regenerative-media-filter"], manufacturer: "neptune-benson", category: "filtration", fileType: "PDF", external: false, status: "placeholder", note: "To be linked once the current manufacturer document set is confirmed.", description: "Filter description, model range, and specifications." },
  { id: "taylor-site", title: "Taylor Technologies test kits", type: "Product page", products: ["taylor-test-kits"], manufacturer: "taylor", category: "water-testing-monitoring", href: "https://www.taylortechnologies.com/", fileType: "Web", external: true, status: "linked", description: "Kits, reagents, and testing method guidance." },
  // FreyTech guides
  { id: "guide-alk", title: "Total alkalinity and why your controller cares about it", type: "Operator guide", products: ["becsys5", "becsys3", "taylor-test-kits"], category: "automated-controls", href: "/resources/total-alkalinity-and-controllers/", fileType: "Page", external: false, status: "linked", description: "Why 80–120 mg/L alkalinity keeps pH stable and lets a controller do its job." },
  { id: "guide-alarm", title: "Reading a controller alarm: a triage sequence for operators", type: "Operator guide", products: ["becsys5", "becsys3", "becsys7"], category: "automated-controls", href: "/resources/controller-alarm-triage/", fileType: "Page", external: false, status: "linked", description: "No-flow, feed-limit, and out-of-range alarms in order of likely cause." },
  { id: "guide-monthly", title: "Monthly water-chemistry equipment checklist", type: "Operator guide", products: ["becsys5", "pulsar-precision", "pulsar-precision-30"], href: "/resources/monthly-equipment-checklist/", fileType: "Page", external: false, status: "linked", description: "Probe, flow-cell, feeder, and records checks on a monthly cadence." },
  { id: "guide-replace", title: "When to replace a commercial pool chemical controller", type: "Guide", products: ["becsys5", "becsys3"], category: "automated-controls", href: "/resources/when-to-replace-a-pool-controller/", fileType: "Page", external: false, status: "linked", description: "Seven signs and how to plan the change." },
  { id: "guide-modernization", title: "Complete water-chemistry modernization: the FreyTech process", type: "Guide", products: ["becsys5", "pulsar-precision"], href: "/water-chemistry-modernization/", fileType: "Page", external: false, status: "linked", description: "Assess, define, design, install and commission, train, monitor, upgrade." },
  { id: "guide-spec", title: "Engineering and specification support", type: "Engineering resource", products: [], href: "/engineering-specification-support/", fileType: "Page", external: false, status: "linked", description: "Selection, schedules, submittals, sequence of operation, approved-equal review." },
  // Regulatory
  { id: "reg-nys", title: "10 NYCRR Subpart 6-1 (Swimming Pools)", type: "Regulatory reference", products: [], href: sources.nysSubpart61.href, fileType: "Web", external: true, status: "linked", description: "New York State Sanitary Code provisions for public pools." },
  { id: "reg-nysdoh", title: "NYSDOH swimming pool program", type: "Regulatory reference", products: [], href: sources.nysdohPools.href, fileType: "Web", external: true, status: "linked", description: "Forms and guidance from the State Department of Health." },
  { id: "reg-mahc", title: "CDC Model Aquatic Health Code (2023)", type: "Regulatory reference", products: [], href: sources.mahc.href, fileType: "Web", external: true, status: "linked", description: "Guidance in New York unless adopted by a jurisdiction." },
  { id: "reg-nsf", title: "NSF/ANSI 50 pool and spa equipment certification", type: "Regulatory reference", products: ["becsys5"], href: sources.nsf50.href, fileType: "Web", external: true, status: "linked", description: "Background on the equipment standard referenced by the MAHC and BECS listings." },
  { id: "reg-glance", title: "New York requirements at a glance for pool chemistry equipment", type: "Regulatory reference", products: ["becsys5", "pulsar-precision", "pulsar-precision-30"], href: "/resources/new-york-pool-chemistry-requirements/", fileType: "Page", external: false, status: "linked", description: "Plain-language summary with section citations." },
  // Case studies
  { id: "cs-projects", title: "Projects and installations", type: "Case study", products: ["defender-regenerative-media-filter"], href: "/projects/", fileType: "Page", external: false, status: "linked", description: "Selected FreyTech installations; detailed case studies in preparation." },
];
