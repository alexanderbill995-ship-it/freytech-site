export type NavItem = { label: string; href: string; description?: string; children?: NavItem[] };

export const primaryNav: NavItem[] = [
  {
    label: "Solutions",
    href: "/water-chemistry-modernization/",
    children: [
      { label: "BECSys5 Automated Controls", href: "/becsys5-controls/", description: "Measurement, control, alarms, records, and remote visibility." },
      { label: "Pulsar Precision Feeders", href: "/pulsar-precision-feeders/", description: "High-capacity calcium hypochlorite delivery for large pools." },
      { label: "Complete Modernization", href: "/water-chemistry-modernization/", description: "Assess, design, install, commission, train, and support." },
      { label: "Engineering & Specification Support", href: "/engineering-specification-support/", description: "For architects, engineers, and aquatic consultants." },
    ],
  },
  {
    label: "Markets",
    href: "/markets/",
    children: [
      { label: "Schools, Colleges & Universities", href: "/markets/schools-and-universities/" },
      { label: "Municipal Aquatic Centers", href: "/markets/municipal-aquatic-centers/" },
      { label: "YMCAs, JCCs & Community Facilities", href: "/markets/ymca-jcc-community/" },
      { label: "Competition Pools & Large Venues", href: "/markets/competition-pools/" },
      { label: "Healthcare & Therapy Pools", href: "/markets/healthcare-therapy-pools/" },
      { label: "Architects, Engineers & Consultants", href: "/markets/architects-engineers-consultants/" },
    ],
  },
  { label: "Service", href: "/service-support/" },
  { label: "Projects", href: "/projects/" },
  { label: "Resources", href: "/resources/" },
  { label: "About", href: "/about/" },
];

export const utilityNav: NavItem[] = [
  { label: "Service Area", href: "/service-area/" },
  { label: "Request Service", href: "/request-service/" },
];

export const footerNav: { heading: string; items: NavItem[] }[] = [
  {
    heading: "Solutions",
    items: [
      { label: "BECSys5 Automated Controls", href: "/becsys5-controls/" },
      { label: "Pulsar Precision Feeders", href: "/pulsar-precision-feeders/" },
      { label: "Water-Chemistry Modernization", href: "/water-chemistry-modernization/" },
      { label: "Engineering & Spec Support", href: "/engineering-specification-support/" },
      { label: "Service & Support", href: "/service-support/" },
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
      { label: "Architects & Engineers", href: "/markets/architects-engineers-consultants/" },
    ],
  },
  {
    heading: "Company",
    items: [
      { label: "About FreyTech", href: "/about/" },
      { label: "Projects", href: "/projects/" },
      { label: "Resources", href: "/resources/" },
      { label: "Service Area", href: "/service-area/" },
      { label: "Contact & Assessment", href: "/contact/" },
      { label: "Request Service", href: "/request-service/" },
    ],
  },
];
