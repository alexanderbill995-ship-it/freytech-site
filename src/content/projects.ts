/**
 * Projects and case studies.
 *
 * `installations` are FreyTech projects publicly described on the current
 * freytech.org homepage (with photographs). Details are limited to what the
 * current site states; they must be confirmed by the owner before launch.
 *
 * `caseStudyTemplate` is the CMS-style structure for full water-chemistry
 * case studies. No fictional results are published: entries with
 * `status: "draft"` are NOT rendered publicly and exist so the owner can fill
 * them in (see docs/OWNER-HANDOFF.md).
 */
export type Installation = {
  slug: string;
  facility: string;
  facilityType: string;
  location: string;
  region: string;
  summary: string;
  scope: string[];
  image: { src: string; alt: string; width: number; height: number };
  products: string[];
  confirm: string[];
};

export const installations: Installation[] = [
  {
    slug: "ithaca-college-50-meter-pool",
    facility: "Ithaca College",
    facilityType: "College 50-meter competition pool",
    location: "Ithaca, Tompkins County",
    region: "Southern Tier",
    summary: "FreyTech outfitted Ithaca College's 50-meter competition pool, one of the newest and largest aquatic facilities in the state at the time, with Defender regenerative-media filtration and a Stark movable bulkhead.",
    scope: ["Defender regenerative-media filters", "Stark movable bulkhead", "Equipment supply, installation coordination, and start-up"],
    image: { src: "/images/projects/ithaca-college-50m-pool.webp", alt: "Elevated view of Ithaca College's indoor 50-meter competition pool with a movable bulkhead and lane lines", width: 922, height: 386 },
    products: ["Filtration", "Bulkhead"],
    confirm: ["Project year", "Full equipment scope including any chemical controls installed", "Permission to name the facility and use the photograph"],
  },
  {
    slug: "university-of-rochester-natatorium",
    facility: "University of Rochester",
    facilityType: "University natatorium",
    location: "Rochester, Monroe County",
    region: "Finger Lakes",
    summary: "A complete pool renovation at the University of Rochester natatorium, including a new sanitation system.",
    scope: ["Complete pool renovation", "New sanitation (water-treatment) system"],
    image: { src: "/images/projects/university-of-rochester-natatorium.webp", alt: "University of Rochester indoor natatorium with lane lines, backstroke flags, and a diving board", width: 922, height: 386 },
    products: ["Water treatment"],
    confirm: ["Project year", "Sanitation system make and model (controller, feed, UV)", "Permission to name the facility and use the photograph"],
  },
  {
    slug: "fairport-high-school-filtration",
    facility: "Fairport High School",
    facilityType: "School district pool",
    location: "Fairport, Monroe County",
    region: "Finger Lakes",
    summary: "FreyTech replaced the pool's sand filtration with a Defender regenerative-media filter at Fairport High School.",
    scope: ["Sand filter removal", "Defender regenerative-media filter installation"],
    image: { src: "/images/projects/fairport-high-school-pool.webp", alt: "Fairport High School indoor pool with lane lines and red, white, and blue backstroke flags", width: 922, height: 386 },
    products: ["Filtration"],
    confirm: ["Project year", "Chemical control scope, if any", "Permission to name the facility and use the photograph"],
  },
];

export type CaseStudy = {
  slug: string;
  status: "draft" | "published";
  facilityType: string;
  location: string;
  originalProblem: string;
  existingEquipment: string;
  recommendedSystem: string;
  installationScope: string;
  commissioningProcess: string;
  measurableResult: string;
  customerQuotation: { text: string; name: string; title: string } | null;
  relatedProducts: string[];
};

/** Fill these in with confirmed facts from closed projects. Drafts are never rendered publicly. */
export const caseStudies: CaseStudy[] = [
  { slug: "becsys5-controller-modernization-template", status: "draft", facilityType: "", location: "", originalProblem: "", existingEquipment: "", recommendedSystem: "BECSys5", installationScope: "", commissioningProcess: "", measurableResult: "", customerQuotation: null, relatedProducts: ["BECSys5"] },
  { slug: "pulsar-precision-conversion-template", status: "draft", facilityType: "", location: "", originalProblem: "", existingEquipment: "", recommendedSystem: "Pulsar Precision", installationScope: "", commissioningProcess: "", measurableResult: "", customerQuotation: null, relatedProducts: ["Pulsar Precision", "BECSys5"] },
  { slug: "multi-pool-remote-monitoring-template", status: "draft", facilityType: "", location: "", originalProblem: "", existingEquipment: "", recommendedSystem: "BECSys5 with BECSys Live", installationScope: "", commissioningProcess: "", measurableResult: "", customerQuotation: null, relatedProducts: ["BECSys5"] },
];

export const publishedCaseStudies = caseStudies.filter((c) => c.status === "published");

/** The only testimonial on the current site. NOT rendered: it is unapproved and names a former staff member. Kept for the owner review only. */
export const testimonial = {
  quote: "We recently purchased a Neptune-Benson Defender filter system through FreyTech and it has reduced the RPM on our pumps from 1750 to 1400 RPM during normal operations. Our water quality is also now unbelievable, amazingly clean and you can see the bottom of the pool. This is one of the best investments we've ever made.",
  quote2: "Our University Engineer, William McDonald, is also very impressed with the filter and its ease of operation. And we want to thank Mike Wilson of FreyTech for quickly rectifying an issue we had with the chemical controller. We appreciate the excellent responsiveness, service, and quality they deliver.",
  name: "Michael Maguire",
  title: "Head Men's and Women's Swimming Coach / Assistant Athletic Director, Clarkson University, Potsdam, NY",
};

export const customerReferences = {
  facilities: ["Binghamton High School and East Middle School", "Clarkson University", "Colgate University", "Cornell University", "Goshen BOCES", "Hudson Falls High School", "Hudson High School", "Ithaca College", "Lowville Central Schools", "Marist College", "Mechanicville High School", "Mount Saint Mary College", "Poughkeepsie Middle School", "Sagamore Resort Hotel", "Siena College", "South Lewis High School", "SUNY at Binghamton", "The Culinary Institute of America"],
  designFirms: ["Argus Engineering", "Bearsch, Compeau, Knudson Architects", "Bernier Carr Group", "Bevin's Architects", "Cannon Architects", "Excel Engineers", "Fellenzer Engineers", "Lan Associates", "Lewis Aquatics", "M&E Engineers", "March Architects", "Mosaic Architects", "Rhinebeck Architecture", "Sack & Associates WPS Engineers", "Sage Engineering", "SEI Architects and Design", "Tetra Tech", "Towne Engineering"],
  consultants: ["Counsilman-Hunsaker", "Integrated Pool Design", "Water Technology, Inc."],
};
