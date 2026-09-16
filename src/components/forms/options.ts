export const facilityTypes = [
  "College or university",
  "School district or BOCES",
  "Municipal aquatic center or town/village/county pool",
  "YMCA, JCC, or community center",
  "Competition or 50-meter venue",
  "Healthcare, therapy, or rehabilitation pool",
  "Water park or high-bather-load facility",
  "Hotel, club, or private membership facility",
  "Architecture, engineering, or aquatic consulting firm",
  "Other commercial or institutional facility",
  "Residential (single-family home pool)",
];

export const poolCounts = ["1", "2", "3", "4 or more"];

export const poolVolumes = [
  { value: "under-50k", label: "Under 50,000 gallons" },
  { value: "50k-100k", label: "50,000 – 100,000 gallons" },
  { value: "100k-300k", label: "100,000 – 300,000 gallons" },
  { value: "300k-500k", label: "300,000 – 500,000 gallons" },
  { value: "over-500k", label: "More than 500,000 gallons" },
  { value: "unknown", label: "Not sure" },
];

export const controllers = [
  "No automated controller (manual testing)",
  "BECSys (BECSys3 / BECSys5 / BECSys7)",
  "BECS legacy (BECSys2, 5000-series, or older)",
  "Pulsar GuardTec",
  "Hayward / Strantrol CAT",
  "Chemtrol",
  "Pentair IntelliChem or Acu-Trol",
  "Other / not sure",
];

export const feeders = [
  "Liquid bleach (sodium hypochlorite) metering pumps",
  "Calcium hypochlorite erosion feeder (Pulsar, Accu-Tab, other)",
  "Trichlor / tablet erosion feeder",
  "Gas chlorine",
  "Salt chlorine generation",
  "Manual dosing",
  "Other / not sure",
];

export const primaryProblems = [
  "Aging or failed controller",
  "No remote visibility or alarms",
  "Water-chemistry drift or instability",
  "Chemical handling, storage, or delivery burden",
  "Feeder capacity or reliability",
  "Operating-record and reporting burden",
  "Operator turnover or continuity",
  "Planning a renovation or new construction",
  "Evaluating options / budgeting",
  "Other",
];

export const projectStages = [
  "Exploring options",
  "Budgeting or capital planning",
  "Design or specification",
  "Out to bid",
  "Approved and ready to proceed",
  "Existing system needs replacement now",
];

export const timings = ["As soon as possible", "Within 3 months", "3 – 12 months", "12+ months", "Not sure"];

export const requestTypes = [
  { value: "angelo", label: "Talk with Angelo about my facility" },
  { value: "assessment", label: "Request a facility assessment" },
  { value: "modernization", label: "Discuss an equipment-room upgrade" },
  { value: "selection", label: "Get help selecting a system" },
  { value: "budget", label: "Request budgetary guidance" },
  { value: "replacement", label: "Ask about replacement equipment" },
  { value: "specialist", label: "Talk to a water-quality specialist" },
  { value: "specification", label: "Specification assistance (design team)" },
  { value: "service", label: "Service on an existing system" },
  { value: "availability", label: "Request product availability" },
  { value: "document", label: "Request a technical document" },
  { value: "find", label: "Help me find the right product" },
  { value: "information", label: "Product information or documents" },
];

/** Intent -> page headline, button label, and lede used by the contact page. */
export const intents: Record<string, { title: string; button: string; lede: string }> = {
  angelo: { title: "Talk with Angelo about your facility", button: "Send Message to Angelo", lede: "Have a project, equipment issue, or question about your facility? Tell us what is happening and how to reach you. Angelo or a FreyTech specialist will follow up personally to talk it through." },
  availability: { title: "Request product availability", button: "Send Availability Request", lede: "Tell us which product or model you are considering. We will confirm availability, lead time, and service coverage for your facility, and suggest alternatives if it is not a fit." },
  document: { title: "Request a technical document", button: "Send Document Request", lede: "Name the brochure, manual, specification, warranty, or safety data sheet you need. Manufacturer documents are provided under their terms." },
  find: { title: "Help me find the right product", button: "Send Request", lede: "Describe the problem, the equipment you are replacing, or what you searched for. A specialist will identify the product, model, or approach that fits." },
  assessment: { title: "Request a facility assessment", button: "Send Assessment Request", lede: "Tell us about the facility, the current controller and feed system, and what is not working. A specialist reviews every submission and follows up directly. No automated sales sequences." },
  modernization: { title: "Discuss an equipment-room upgrade", button: "Send Upgrade Inquiry", lede: "Describe the equipment room, what is being renovated, and the timeline. We will help scope controls, chemical feed, and filtration together." },
  selection: { title: "Get help selecting a system", button: "Send Selection Request", lede: "Not sure which controller or feeder fits? Share the pool basics and the problem, and a water-quality specialist will point you to the right options." },
  budget: { title: "Request budgetary guidance", button: "Send Budget Request", lede: "Planning a capital project or bond scope? We provide realistic budgetary ranges for controls, feed, and filtration work so the plan reflects real scope." },
  replacement: { title: "Ask about replacement equipment", button: "Send Replacement Inquiry", lede: "Tell us the make and model you need to replace and the symptoms. We will confirm the like-for-like or upgrade path." },
  specialist: { title: "Talk to a water-quality specialist", button: "Send Message", lede: "A question about chemistry, a controller reading, or a feeder? Ask here and a specialist will call or email." },
  specification: { title: "Request specification assistance", button: "Send Specification Request", lede: "For architects, engineers, and consultants: selection, schedules, submittals, and approved-equal review." },
  information: { title: "Request product information or documents", button: "Send Document Request", lede: "Tell us which product or document you need. Manufacturer documents are provided under their terms." },
};

export const waterFeatureTypes = ["Indoor lap / competition pool", "Outdoor pool", "Leisure or zero-depth pool", "Therapy / warm-water pool", "Spa / hot tub", "Waterpark feature or lazy river", "Multiple bodies of water", "Other"];
export const contactMethods = ["Phone", "Email", "Either"];

export const states = ["NY", "NJ", "CT", "PA", "VT", "MA", "Other"];

export const serviceUrgency = [
  { value: "down", label: "System down or pool closed" },
  { value: "degraded", label: "Operating with a problem" },
  { value: "scheduled", label: "Routine / schedule at convenience" },
];

export const serviceTypes = [
  "Controller troubleshooting or repair",
  "Feeder troubleshooting or repair",
  "Probe / sensor replacement or calibration",
  "Preventive maintenance visit",
  "Replacement parts",
  "Operator training",
  "Commissioning or start-up",
  "Service agreement inquiry",
  "Warranty / RMA coordination",
  "Other",
];

export const specRoles = ["Architect", "Mechanical / plumbing engineer", "Aquatic designer or pool consultant", "Owner's representative", "General or mechanical contractor", "Other"];
export const specNeeds = ["Product selection / basis of design", "Equipment schedule and submittals", "Sequence of operation", "Renovation or retrofit review", "Approved-equal / substitution review", "Mechanical coordination", "Commissioning and training scope"];
