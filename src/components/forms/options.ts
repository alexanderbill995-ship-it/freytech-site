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
  { value: "assessment", label: "Commercial pool system assessment" },
  { value: "modernization", label: "Discuss a modernization project" },
  { value: "specification", label: "Specification assistance (design team)" },
  { value: "service", label: "Service on an existing system" },
  { value: "information", label: "Product information" },
];

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
