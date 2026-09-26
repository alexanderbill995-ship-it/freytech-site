export type Market = {
  slug: string;
  name: string;
  short: string;
  title: string;
  description: string;
  intro: string;
  pressures: string[];
  triggers: string[];
  solutions: { title: string; text: string; href: string }[];
  stakeholders: string[];
  prepare: string[];
  nextAction: { label: string; href: string; text: string };
  faqs: { q: string; a: string }[];
  references?: string[];
};

import { marketsExtra } from "./marketsExtra";

const baseMarkets: Market[] = [
  {
    slug: "schools-and-universities",
    name: "Schools, Colleges & Universities",
    short: "Schools & Universities",
    title: "Pool Chemical Controls for New York Schools, Colleges & Universities",
    description: "BECSys5 controller upgrades, chemical-feed modernization, and local service for school district, BOCES, college, and university pools across New York State.",
    intro: "School and campus pools run long hours with shifting staff: PE classes, varsity practice, community swims, and summer programs. When the controller is a decade old and the only person who understands it is retiring, the facilities office inherits the risk. FreyTech has worked with New York colleges, universities, and school districts for decades, and understands how these projects are funded, specified, and operated.",
    pressures: [
      "Aging controllers with unreliable probes, no remote visibility, and no alarm notification after hours.",
      "Manual daily operating records maintained by rotating staff, with gaps when the regular operator is out.",
      "Chemistry drift during heavy-use periods that leads to closures, complaints, or corrective orders from the health department.",
      "Capital projects (bond, EXCEL, or campus funding) that replace HVAC, filtration, or the natatorium envelope but leave chemical control as an afterthought.",
      "One experienced operator carrying institutional knowledge that has never been documented.",
    ],
    triggers: [
      "Controller failure or repeated probe replacement on a discontinued model",
      "Voter-approved capital project or campus renovation that touches the pool mechanical room",
      "Health department inspection finding related to chemistry or records",
      "Retirement or turnover of the lead pool operator",
      "Addition of a therapy pool, spa, or second body of water that must be supervised from one place",
    ],
    solutions: [
      { title: "BECSys5 controller modernization", text: "Replace obsolete controls with an expandable, Ethernet-connected controller that logs chemistry, drives feed equipment with interlocks, and sends alarms to the people who need them.", href: "/becsys5-controls/" },
      { title: "Multi-pool remote visibility", text: "Give the facilities office and aquatics director one view of every body of water on campus through BECSys Live, with graphs and reports for records review.", href: "/becsys5-controls/#remote" },
      { title: "Chemical-feed review", text: "For larger competition pools with high chlorine demand, evaluate whether a Pulsar Precision calcium hypochlorite feeder fits. Most school pools are well served by the controller upgrade alone.", href: "/pulsar-precision-feeders/" },
      { title: "Operator training and service plans", text: "Commissioning documentation, hands-on training for current and future operators, and preventive maintenance visits that keep the system calibrated.", href: "/service-support/" },
    ],
    stakeholders: ["Director of Facilities / Buildings & Grounds", "Aquatics Director or Head Coach", "School Business Official / Assistant Superintendent for Business", "Campus Engineering or Plant Operations", "Purchasing / Procurement", "The district or campus architect and MEP engineer on funded projects"],
    prepare: ["Current controller make, model, and approximate age", "Feeder type and chemical form (bleach, cal hypo, tablets, gas)", "Pool volumes and number of bodies of water", "Recent chemistry or record-keeping problems", "Whether a capital project is funded, and who the design team is"],
    nextAction: { label: "Request a System Assessment", href: "/contact/", text: "We review your current controls and feed equipment, then recommend a staged or complete upgrade with a clear scope." },
    references: ["Cornell University", "Ithaca College", "Clarkson University", "Colgate University", "Siena College", "Marist College", "SUNY at Binghamton", "Mount Saint Mary College", "Binghamton High School and East Middle School", "Hudson Falls High School", "Hudson High School", "Lowville Central Schools", "Poughkeepsie Middle School", "South Lewis High School", "Goshen BOCES"],
    faqs: [
      { q: "Can a controller upgrade be done during the school year?", a: "Usually yes. A like-for-like controller replacement is typically completed in a day or two of on-site work and is scheduled around the pool calendar. Larger scope, such as new feed equipment or piping changes, is often timed for a break or summer shutdown." },
      { q: "Does the new controller replace our daily operating records?", a: "No. New York requires manual DPD testing and daily operation records regardless of automation (10 NYCRR 6-1.11 and 6-1.21). The controller's logs and reports supplement those records and make them easier to verify." },
      { q: "Can several pools on campus be seen from one screen?", a: "Yes. Each BECSys5 controller is network-connected, and BECSys Live provides a consolidated remote view across controllers, subject to your network policy and the system's configuration." },
      { q: "Do you work through the district's architect or engineer?", a: "Yes. On funded projects we provide product selection help, equipment schedules, submittals, and sequence-of-operation support to the design team. See Engineering & Specification Support." },
    ],
  },
  {
    slug: "municipal-aquatic-centers",
    name: "Municipal Aquatic Centers",
    short: "Municipal",
    title: "Chemical Control Upgrades for New York Municipal Pools & Aquatic Centers",
    description: "Water-chemistry controller and chemical-feed modernization for town, village, city, and county pools across New York State, including NY SWIMS-funded projects.",
    intro: "Municipal pools answer to residents, the health department, and the budget at the same time. Many are seasonal outdoor pools that must start up reliably each spring with part-time staff; others are year-round indoor centers with multiple bodies of water. New York's recent public-pool funding has put many of these facilities into design or construction, which is exactly when chemical control and feed decisions get made.",
    pressures: [
      "Seasonal start-up with new or part-time operators who did not run the system last year.",
      "Public visibility: a closure or a chemistry incident is a news story, not just a maintenance ticket.",
      "Aging equipment rooms where the controller, feeders, and filters were all installed decades ago.",
      "Procurement rules and bid documents that lock in equipment before the operations staff are consulted.",
      "Small staffs covering multiple parks, with no one physically present at the pool after hours.",
    ],
    triggers: [
      "NY SWIMS or other grant award for pool construction or renovation",
      "Capital plan line item for pump-room, filtration, or chemical system replacement",
      "A season with repeated closures or health-department findings",
      "Conversion away from gas chlorine or an aging liquid-bleach system",
      "Design of a new multi-feature aquatic center with several bodies of water",
    ],
    solutions: [
      { title: "BECSys5 controls with remote alarms", text: "Parks and public-works staff receive alarms and can view chemistry from a phone or office, reducing after-hours uncertainty and unnecessary trips.", href: "/becsys5-controls/" },
      { title: "Pulsar Precision for high-demand pools", text: "Large outdoor pools and aquatic centers with heavy summer bather loads are among the best fits for calcium hypochlorite feed. We size it to actual demand, not to a brochure.", href: "/pulsar-precision-feeders/" },
      { title: "Specification support for funded projects", text: "We help the municipality's engineer or aquatic consultant write a basis of design that operations staff can live with, and review approved-equal substitutions.", href: "/engineering-specification-support/" },
      { title: "Seasonal start-up and shutdown service", text: "Commissioning at opening, calibration during the season, and proper winterization of sensors and feed equipment.", href: "/service-support/" },
    ],
    stakeholders: ["Parks and Recreation Director", "Superintendent of Public Works / DPW", "Facilities or Buildings Manager", "Town, Village, or City Board and Purchasing", "Aquatic consultant, architect, or engineer of record", "Pool manager and seasonal operators"],
    prepare: ["Whether the project is funded and its current stage (study, design, bid, construction)", "Pool volumes and whether the facility is indoor, outdoor, or both", "Current disinfection method and controller", "Who prepares your plans (engineer or aquatic consultant)", "Staffing model during the season"],
    nextAction: { label: "Discuss a Modernization Project", href: "/contact/?request=modernization", text: "Tell us where the project stands. We can support the design team before equipment is locked in, or assess an existing facility." },
    faqs: [
      { q: "Our pool renovation is funded by a state grant. When should we involve you?", a: "As early as possible, ideally before the basis of design is set. That is when controller and feed decisions are cheapest to get right. We work with the municipality's engineer or aquatic consultant on selection, schedules, and sequence of operation." },
      { q: "Can seasonal staff realistically run a BECSys5?", a: "Yes, with training. The controller's job is to hold setpoints and alert people when something is wrong; the operator still tests and records. We train at commissioning and can return for a refresher at season start." },
      { q: "Do modifications to our chemical system need health department approval?", a: "In New York, additions or modifications to a public pool generally require plans prepared by a licensed engineer or architect and approval from your permit-issuing official before work begins (10 NYCRR 6-1.8). We coordinate with your engineer and local health department; final acceptance rests with them." },
    ],
  },
  {
    slug: "ymca-jcc-community",
    name: "YMCAs, JCCs & Community Facilities",
    short: "YMCAs & JCCs",
    title: "Pool Chemistry Modernization for New York YMCAs, JCCs & Community Centers",
    description: "Controller upgrades, remote monitoring, and chemical-feed modernization for YMCA, JCC, and community-center pools across New York State.",
    intro: "YMCAs, JCCs, and community centers often run the hardest-working pools in their communities: lap swimming before dawn, lessons and therapy through the day, and family swim at night, frequently across a lap pool, a warm therapy pool, and a spa. Executive directors and facility managers need to know these bodies of water are stable without standing in the pump room.",
    pressures: [
      "Multiple bodies of water at different temperatures and setpoints managed by a small facilities team.",
      "Heavy bather loads that drive chlorine demand and combined-chlorine (chloramine) complaints.",
      "Aging controllers and feeders replaced piecemeal over years, with mixed brands and no documentation.",
      "Capital campaigns and foundation or state grants that fund mechanical work on a fixed timeline.",
      "Member and program revenue that stops immediately when a pool closes.",
    ],
    triggers: [
      "Funded mechanical or pool renovation (including NY SWIMS awards to YMCAs and JCCs)",
      "Chronic chloramine or air-quality complaints in the natatorium",
      "Facilities director turnover or loss of the one operator who knew the system",
      "Insurance or health-department pressure on records and response times",
      "Addition of a therapy or warm-water pool",
    ],
    solutions: [
      { title: "BECSys5 for each body of water, one remote view", text: "Independent control of the lap pool, therapy pool, and spa with a consolidated BECSys Live view for the facilities director.", href: "/becsys5-controls/" },
      { title: "Chemical-feed evaluation", text: "Many Y and JCC pools are well served by improved liquid or cal hypo feed under proper control. Where volume and demand justify it, a Pulsar Precision 30 may fit; we qualify that honestly.", href: "/pulsar-precision-feeders/" },
      { title: "Service agreements", text: "Scheduled visits for calibration, probe replacement, feeder cleaning, and chemistry review, with phone support in between.", href: "/service-support/" },
    ],
    stakeholders: ["Executive Director / CEO", "Facilities Director or Property Manager", "Aquatics Director", "Board property or facilities committee", "Grant or capital campaign manager", "Design team on funded renovations"],
    prepare: ["Number of bodies of water, volumes, and temperatures", "Current controllers and feed equipment by pool", "Recent water-quality or air-quality complaints", "Whether a renovation is funded and its timeline", "Who is responsible for daily testing and records"],
    nextAction: { label: "Request a System Assessment", href: "/contact/", text: "A walk-through of your equipment room gives you a documented picture of what you have, what is at risk, and what a phased upgrade would look like." },
    faqs: [
      { q: "Can the therapy pool and lap pool be controlled independently but viewed together?", a: "Yes. Each body of water typically gets its own controller (or its own configured channel set, depending on system design), and BECSys Live provides a consolidated remote view." },
      { q: "Will better control fix our chloramine smell?", a: "Consistent free-chlorine and pH control is part of the answer, but chloramines also depend on bather hygiene, air handling, water replacement, and secondary treatment such as UV. An assessment looks at all of these rather than promising one fix." },
      { q: "We have a grant deadline. How fast can you move?", a: "Controller upgrades can move quickly once the scope is agreed. Feed-system changes and anything requiring health-department plan approval take longer. Tell us the deadline and we will be direct about what is realistic." },
    ],
  },
  {
    slug: "competition-pools",
    name: "Competition Pools & Large Venues",
    short: "Competition Pools",
    title: "Chemical Control & Cal Hypo Feed for New York Competition Pools & Large Venues",
    description: "BECSys5 controls and Pulsar Precision calcium hypochlorite feed systems for 50-meter pools, natatoriums, and high-bather-load aquatic venues across New York State.",
    intro: "A 50-meter pool or a major natatorium moves a lot of water and a lot of chlorine. Meets bring hundreds of swimmers and spectators, demand spikes, and there is no tolerance for cloudy water or a chemistry excursion on the day of an event. These are the facilities where high-capacity chemical feed and expandable control pay for themselves, and where FreyTech has some of its deepest experience, including the 50-meter pool at Ithaca College.",
    pressures: [
      "Chlorine demand that swings sharply between normal training and meet days.",
      "Large volumes where liquid bleach logistics (deliveries, storage, degradation) become a burden.",
      "Turnover, filtration, UV, and heating systems that all need to be coordinated and monitored.",
      "Athletic-department expectations for water clarity and comfort that exceed the minimum code requirements.",
      "Complex equipment rooms where undocumented changes have accumulated over years.",
    ],
    triggers: [
      "New natatorium or major renovation in design",
      "Conversion from liquid bleach or gas chlorine",
      "Aging erosion feeder that cannot keep up at peak demand",
      "Hosting larger meets or adding a bulkhead-divided configuration",
      "Integration of new UV, VFDs, or filtration into the control scheme",
    ],
    solutions: [
      { title: "Pulsar Precision high-capacity feed", text: "The full-size Pulsar Precision is positioned by the manufacturer for very large pools. We confirm fit against your actual chlorine demand, hydraulics, and storage before recommending it.", href: "/pulsar-precision-feeders/" },
      { title: "BECSys5 with equipment-room integration", text: "Chemistry control plus monitoring of flow, pressures, turnover, and chemical inventory, with optional control of pumps, VFDs, UV, and heaters depending on configuration.", href: "/becsys5-controls/" },
      { title: "Commissioning and documentation", text: "A commissioned system with recorded setpoints, alarm limits, and a sequence of operation your staff can follow years later.", href: "/water-chemistry-modernization/" },
    ],
    stakeholders: ["Director of Athletics / Aquatics", "Facilities and Engineering", "Head Coach and meet directors", "Aquatic designer and MEP engineer", "Procurement"],
    prepare: ["Pool volume, turnover rate, and peak bather load", "Current disinfection method and daily chlorine use", "Existing controller and feed equipment", "Chemical storage location and constraints", "Upcoming events or renovation timeline"],
    nextAction: { label: "Request a Facility Assessment", href: "/contact/", text: "Large-venue assessments include demand review, hydraulics, chemical storage, and control integration so the recommendation is sized to your facility." },
    references: ["Ithaca College (50-meter pool)", "University of Rochester", "Clarkson University", "Cornell University"],
    faqs: [
      { q: "Is every competition pool a fit for the full-size Pulsar Precision?", a: "No. The manufacturer positions the full-size unit for very large pools. Many competition pools are better served by the smaller Precision 30 or by well-controlled liquid feed. We qualify by demand, not by label." },
      { q: "Can the controller manage UV, VFDs, and heaters too?", a: "BECSys5 supports control and monitoring of equipment-room functions such as pumps, VFDs, UV, ozone, heaters, and makeup water depending on the configured options and I/O. We define the point list during design." },
      { q: "Do you handle the chemical supply?", a: "FreyTech has offered chemical delivery as part of its service programs. Cal hypo supply arrangements for Pulsar systems should be confirmed with us for your location." },
    ],
  },
  {
    slug: "healthcare-therapy-pools",
    name: "Healthcare, Therapy & Rehabilitation Pools",
    short: "Healthcare & Therapy",
    title: "Water-Chemistry Controls for New York Healthcare, Therapy & Rehabilitation Pools",
    description: "Precise chemical control, records, and remote alarms for warm-water therapy and rehabilitation pools at hospitals, rehab centers, and senior communities across New York State.",
    intro: "Warm-water therapy pools carry vulnerable users, elevated temperatures that accelerate chlorine consumption, and clinical staff who are not pool operators. Stable chemistry, tight records, and immediate alarms matter more here than anywhere else, and the person responsible is often a facilities manager overseeing the entire building.",
    pressures: [
      "High temperatures (often 88–94°F) that increase disinfectant demand and bather-load impact in a small volume.",
      "Medically vulnerable users with a low tolerance for chemistry excursions.",
      "Clinical schedules that make unplanned closures disruptive to patient care.",
      "Records expectations from both the health department and internal risk management.",
      "Facilities teams responsible for hundreds of building systems, not just the pool.",
    ],
    triggers: [
      "Infection-control or risk-management review of the pool",
      "Replacement of an aging or unsupported controller",
      "Renovation of a therapy suite or addition of a pool",
      "Staff turnover in plant operations",
      "Repeated chemistry excursions in a small, warm body of water",
    ],
    solutions: [
      { title: "BECSys5 with tight setpoints and alarms", text: "Continuous measurement and control with alarm notification to plant operations, and logs that document conditions over time.", href: "/becsys5-controls/" },
      { title: "Appropriately sized feed equipment", text: "Therapy pools rarely need high-capacity feeders. We focus on reliable, controllable feed with interlocks, sized for the actual body of water.", href: "/water-chemistry-modernization/" },
      { title: "Service agreements with calibration visits", text: "Regular probe calibration and equipment checks matter more in small warm pools, where drift shows up fast.", href: "/service-support/" },
    ],
    stakeholders: ["Director of Facilities / Plant Operations", "Rehabilitation or Therapy Services Manager", "Infection Prevention / Risk Management", "Administration and Finance", "Design team on renovations"],
    prepare: ["Pool volume and operating temperature", "Current controller, feed system, and who maintains them", "Recent excursions, closures, or findings", "Who performs daily testing and keeps records", "Any planned renovation"],
    nextAction: { label: "Request a System Assessment", href: "/contact/", text: "We review the current control and feed setup and recommend the most reliable configuration for a small, warm, high-stakes body of water." },
    faqs: [
      { q: "Is a full automated controller worth it on a small therapy pool?", a: "Small warm pools change chemistry quickly, which is exactly where continuous measurement and control help most. The controller also produces the trend data that risk management and the health department may want to see." },
      { q: "Can alarms go to our building operations center?", a: "BECSys5 supports alarm notification through its communications options, and BECSys Live provides remote alarm visibility. Integration with a building management system depends on configuration and should be defined during design." },
    ],
  },
  {
    slug: "architects-engineers-consultants",
    name: "Architects, Engineers & Aquatic Consultants",
    short: "Architects & Engineers",
    title: "Specification Support for New York Aquatic Designers, Engineers & Architects",
    description: "Product selection, equipment schedules, submittals, sequence-of-operation, and approved-equal review for BECSys5 controls and Pulsar Precision feeders on New York projects.",
    intro: "Design teams need a local source who knows the equipment, knows New York's approval process, and will still be there for commissioning. FreyTech has supported architects, engineers, and pool consultants on New York projects for decades and can help you specify controls and chemical feed that the owner's staff can actually operate.",
    pressures: [
      "Basis-of-design decisions made early with incomplete information about owner operations.",
      "Coordination between pool consultant, MEP engineer, and controls scope.",
      "Substitution requests during bidding that need technical review.",
      "Health department plan approval timelines (10 NYCRR 6-1.8) that affect the schedule.",
      "Commissioning and owner training that fall through the cracks at closeout.",
    ],
    triggers: ["Schematic design of a new natatorium or aquatic center", "Renovation study of an existing pool mechanical room", "Substitution or approved-equal request on a bid", "Owner request for remote monitoring or BMS integration", "Closeout requirements for commissioning and training"],
    solutions: [
      { title: "Engineering & Specification Support", text: "Product selection, equipment schedules, submittal packages, sequence-of-operation language, and coordination with mechanical systems.", href: "/engineering-specification-support/" },
      { title: "BECSys5 point lists and integration", text: "Help defining measured and controlled points, alarm strategy, and communications for the owner's operating model.", href: "/becsys5-controls/" },
      { title: "Pulsar Precision qualification", text: "Demand-based sizing review so the feeder in the drawings matches the pool that gets built.", href: "/pulsar-precision-feeders/" },
    ],
    stakeholders: ["Aquatic designer / pool consultant", "Mechanical and plumbing engineer", "Architect and project manager", "Owner's representative", "Mechanical contractor"],
    prepare: ["Bodies of water, volumes, and turnover", "Chemical program and storage constraints", "Owner's operating and monitoring expectations", "Project stage and submission deadlines", "Existing equipment (for renovations)"],
    nextAction: { label: "Request Specification Assistance", href: "/engineering-specification-support/#request", text: "Send the project basics and we will respond with selection guidance, schedules, or submittal support for your deadline." },
    references: ["Argus Engineering", "Bearsch, Compeau, Knudson Architects", "Bernier Carr Group", "Cannon Architects", "Fellenzer Engineers", "Lan Associates", "M&E Engineers", "Sage Engineering", "SEI Architects and Design", "Towne Engineering", "Counsilman-Hunsaker", "Water Technology, Inc."],
    faqs: [
      { q: "Will you provide manufacturer submittal documents?", a: "Yes, for projects where FreyTech is the supplier or supporting the specification. Manufacturer documents are provided through us with the manufacturer's permission rather than published openly on this site." },
      { q: "Can you review an approved-equal request?", a: "Yes. We compare the proposed substitute against the specified controller or feeder on capacity, measured points, safety functions, communications, serviceability, and local support, and document the differences for the engineer's decision." },
    ],
  },
];

export const markets: Market[] = [...baseMarkets, ...marketsExtra];

export function getMarket(slug: string) {
  return markets.find((m) => m.slug === slug);
}
