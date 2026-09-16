import { publishedCategories, facilities, problems, categoryHref, facilityHref, problemHref } from "@/content/catalog";

export type NavItem = { label: string; href: string; description?: string; children?: NavItem[] };
export type MegaColumn = { heading: string; items: NavItem[]; footer?: NavItem };

/** Products & Solutions mega menu: four discovery paths into the same product data. */
export const productsMega: { label: string; href: string; columns: MegaColumn[] } = {
  label: "Products & Solutions",
  href: "/products/",
  columns: [
    {
      heading: "Featured solutions",
      items: [
        { label: "BECSys5 Automated Controls", href: "/becsys5-controls/", description: "Measure, control, alarm, record, see remotely." },
        { label: "Pulsar Precision Chlorination", href: "/pulsar-precision-feeders/", description: "Dry cal hypo feed sized to real demand." },
        { label: "Complete Automated Water-Chemistry Systems", href: "/water-chemistry-modernization/", description: "Controls + delivery + FreyTech support." },
        { label: "Equipment-Room Modernization", href: "/solutions/modernize-aging-equipment-room/", description: "Assess, design, install, commission, train." },
      ],
      footer: { label: "Browse all products", href: "/products/" },
    },
    {
      heading: "Browse by system",
      items: publishedCategories.map((c) => ({ label: c.name, href: categoryHref(c.slug) })),
      footer: { label: "All products", href: "/products/" },
    },
    {
      heading: "Browse by facility",
      items: facilities.map((f) => ({ label: f.name, href: facilityHref(f.slug) })),
      footer: { label: "Markets we serve", href: "/markets/" },
    },
    {
      heading: "Browse by problem",
      items: problems.map((p) => ({ label: p.name, href: problemHref(p.slug) })),
      footer: { label: "All solutions", href: "/solutions/" },
    },
  ],
};

export const primaryNav: NavItem[] = [
  { label: "Products & Solutions", href: "/products/", children: productsMega.columns.flatMap((c) => c.items) },
  {
    label: "Markets",
    href: "/markets/",
    children: [
      { label: "Schools, Colleges & Universities", href: "/markets/schools-and-universities/" },
      { label: "Municipal Aquatic Centers", href: "/markets/municipal-aquatic-centers/" },
      { label: "YMCAs, JCCs & Community Facilities", href: "/markets/ymca-jcc-community/" },
      { label: "Competition Pools & Large Venues", href: "/markets/competition-pools/" },
      { label: "Healthcare & Therapy Pools", href: "/markets/healthcare-therapy-pools/" },
      { label: "Hotels, Resorts & Hospitality", href: "/markets/hotels-resorts-hospitality/" },
      { label: "Camps & Seasonal Facilities", href: "/markets/camps-seasonal-facilities/" },
      { label: "Waterparks & High-Load Facilities", href: "/markets/waterparks-high-load-facilities/" },
      { label: "Architects, Engineers & Consultants", href: "/markets/architects-engineers-consultants/" },
    ],
  },
  { label: "Service", href: "/service-support/" },
  { label: "Projects", href: "/projects/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
];

export const utilityNav: NavItem[] = [
  { label: "Engineering & Spec Support", href: "/engineering-specification-support/" },
  { label: "Service Area", href: "/service-area/" },
  { label: "Request Service", href: "/request-service/" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Products & Solutions",
    items: [
      { label: "All products", href: "/products/" },
      { label: "BECSys5 Automated Controls", href: "/becsys5-controls/" },
      { label: "Pulsar Precision Feeders", href: "/pulsar-precision-feeders/" },
      { label: "Pulsar Commercial Chlorination", href: "/pulsar-chlorination/" },
      { label: "Water-Chemistry Modernization", href: "/water-chemistry-modernization/" },
      { label: "Solutions by problem", href: "/solutions/" },
    ],
  },
  {
    heading: "Markets",
    items: [
      { label: "Schools & Universities", href: "/markets/schools-and-universities/" },
      { label: "Municipal Aquatic Centers", href: "/markets/municipal-aquatic-centers/" },
      { label: "YMCAs, JCCs & Community", href: "/markets/ymca-jcc-community/" },
      { label: "Competition Pools", href: "/markets/competition-pools/" },
      { label: "Healthcare & Therapy", href: "/markets/healthcare-therapy-pools/" },
      { label: "Hospitality, Camps & Waterparks", href: "/markets/" },
      { label: "Architects & Engineers", href: "/markets/architects-engineers-consultants/" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About FreyTech", href: "/about/" },
      { label: "Projects", href: "/projects/" },
      { label: "Resource library", href: "/resources/" },
      { label: "Engineering & Spec Support", href: "/engineering-specification-support/" },
      { label: "Service & Support", href: "/service-support/" },
      { label: "Service Area", href: "/service-area/" },
      { label: "Contact & Assessment", href: "/contact/" },
    ],
  },
];
