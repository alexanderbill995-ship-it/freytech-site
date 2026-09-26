import type { Market } from "./markets";

/** Markets added with the product-discovery expansion (September 2026). */
export const marketsExtra: Market[] = [
  {
    slug: "hotels-resorts-hospitality",
    name: "Hotels, Resorts & Hospitality",
    short: "Hospitality",
    title: "Pool Chemistry Controls and Service for New York Hotels, Resorts & Clubs",
    description: "Reliable water chemistry, remote alarms, and local service for hotel, resort, and club pools and spas across New York State, where uptime and clarity protect the guest experience.",
    intro: "A hotel or resort pool is a guest-facing amenity run by an engineering or maintenance team with many other responsibilities. Clarity, comfort, and uptime matter to reviews and to the front desk. FreyTech's customer references include the Sagamore Resort on Lake George, and hospitality pools share the same equipment rooms and code requirements as any other New York public pool.",
    pressures: ["Small engineering teams covering the whole property, not just the pool.", "Guest expectations for clarity and comfort that exceed the code minimum.", "Seasonal or event-driven bather loads at resort properties.", "Spas and warm pools that change chemistry quickly.", "Equipment rooms tucked into spaces never designed for chemical storage."],
    triggers: ["Renovation of pool, spa, or fitness amenities", "Repeated closures or guest complaints", "Health department findings", "Replacement of an aging controller or feeder", "Change in management company or engineering lead"],
    solutions: [
      { title: "BECSys5 or BECSys3 with remote alarms", text: "Engineering sees chemistry from the office or phone and gets alarms before guests notice.", href: "/becsys5-controls/" },
      { title: "Right-sized chemical feed", text: "Most hospitality pools are well served by controlled liquid feed; larger resort pools may fit a Precision 30.", href: "/pulsar-precision-feeders/" },
      { title: "Service agreements", text: "Scheduled calibration, feeder cleaning, and chemistry review so the property does not need a pool specialist on staff.", href: "/service-support/" },
    ],
    stakeholders: ["Director of Engineering / Chief Engineer", "General Manager", "Ownership or management company", "Spa or recreation manager"],
    prepare: ["Pool and spa volumes and temperatures", "Current controller and feed equipment", "Recent closures or complaints", "Who tests and keeps records each shift"],
    nextAction: { label: "Request a Facility Assessment", href: "/contact/?intent=assessment&facility=hotels-resorts-hospitality", text: "A short equipment-room review tells you what is at risk and what a modest upgrade would change." },
    references: ["Sagamore Resort Hotel", "The Culinary Institute of America"],
    faqs: [
      { q: "Do the same New York rules apply to a hotel pool?", a: "Yes. Hotel and resort pools are public pools under 10 NYCRR Subpart 6-1, including daily testing and records, feeder interlocks, and plan approval for modifications." },
      { q: "Can FreyTech service a pool we did not buy equipment from?", a: "Yes. Service and assessments are available for existing systems regardless of who installed them." },
    ],
  },
  {
    slug: "camps-seasonal-facilities",
    name: "Camps & Seasonal Facilities",
    short: "Camps & Seasonal",
    title: "Seasonal Pool Start-Up, Controls, and Service for New York Camps",
    description: "Reliable seasonal start-up, simple controls, and remote alarms for camp and seasonal pools across New York State, with training for new staff each year.",
    intro: "Seasonal pools live a hard life: months idle, then a fast start-up with staff who may never have seen the equipment room. Controllers and feeders that were fine in August have to work again in June. FreyTech commissions at opening, trains the season's operators, and provides phone support in between, so a camp director is not troubleshooting a controller during check-in week.",
    pressures: ["Start-up with new or returning seasonal staff", "Probes and feed equipment that sat idle over winter", "Limited on-site technical expertise", "Short season with no tolerance for closures", "Outdoor exposure and heavy daytime bather loads"],
    triggers: ["A rough opening or mid-season closure last year", "Controller or feeder failure", "Health department findings", "Capital improvements to the pool or bathhouse"],
    solutions: [
      { title: "Simple, dependable controls", text: "BECSys3 or BECSys5 with remote alarms so an off-site director or contractor can see the pool.", href: "/becsys5-controls/" },
      { title: "Seasonal start-up and shutdown service", text: "Commissioning at opening, calibration during the season, proper winterization of sensors and feed equipment.", href: "/service-support/" },
      { title: "Dry chemical feed where demand fits", text: "Outdoor camp pools with high daytime loads may fit a Precision 30; New York's non-stabilized guidance applies.", href: "/pulsar-precision-feeders/" },
    ],
    stakeholders: ["Camp Director", "Facilities or maintenance lead", "Aquatics Director / Waterfront Director", "Board or owner"],
    prepare: ["Opening and closing dates", "Pool volume and whether indoor or outdoor", "Current controller and feed equipment", "Who will operate the pool this season"],
    nextAction: { label: "Request a Facility Assessment", href: "/contact/?intent=assessment&facility=camps-seasonal", text: "Schedule before the season so start-up is planned, not improvised." },
    faqs: [
      { q: "Can you train staff who arrive the week the pool opens?", a: "Yes. Operator training is part of commissioning, and written procedures are left on site for the season." },
      { q: "What happens to the controller over the winter?", a: "Sensors and feed equipment are winterized per the manufacturer's guidance; probes may be stored wet or replaced at start-up depending on condition." },
    ],
  },
  {
    slug: "waterparks-high-load-facilities",
    name: "Waterparks & High-Load Facilities",
    short: "Waterparks",
    title: "High-Capacity Chemical Feed and Controls for New York Waterparks",
    description: "Pulsar Precision high-capacity calcium hypochlorite feed, BECSys controls, and equipment-room integration for waterparks and high-bather-load facilities in New York State.",
    intro: "Waterparks and high-load facilities move huge volumes of water through multiple features, and chlorine demand swings with attendance and weather. This is where feed capacity, control, and monitoring have to be engineered together, and where the full-size Pulsar Precision is positioned by its manufacturer.",
    pressures: ["Sharp chlorine-demand swings with attendance and heat", "Multiple bodies of water and features from one mechanical area", "Bulk bleach logistics at scale", "Filtration and turnover demands that dominate the equipment room", "Public visibility of any closure"],
    triggers: ["New park or feature construction", "Conversion from liquid or gas chlorine", "Feeders that cannot keep up at peak", "Mechanical-room renovation or filtration replacement"],
    solutions: [
      { title: "Pulsar Precision high-capacity feed", text: "Up to 189 lb/day available chlorine per Pulsar's manual; sized to measured peak demand.", href: "/pulsar-precision-feeders/" },
      { title: "BECSys5 or BECSys7 per body of water", text: "Chemistry control plus flow, pressure, and inventory monitoring, with BECSys7 automatic backwash for multi-filter rooms.", href: "/products/automated-controls/" },
      { title: "Engineering and specification support", text: "Point lists, schedules, submittals, and sequence of operation with the design team.", href: "/engineering-specification-support/" },
    ],
    stakeholders: ["Park operations and maintenance directors", "Aquatic designer and MEP engineer", "Ownership / municipality", "Procurement"],
    prepare: ["Volumes and features", "Peak attendance and current daily chlorine use", "Current disinfection method and controllers", "Chemical storage constraints", "Project stage and design team"],
    nextAction: { label: "Discuss an Equipment-Room Upgrade", href: "/contact/?intent=modernization&facility=waterparks-high-load", text: "Large-venue assessments cover demand, hydraulics, storage, and control integration together." },
    faqs: [
      { q: "Is the full-size Pulsar Precision always the right feeder for a waterpark?", a: "It is positioned for very large pools and parks, but sizing is by measured demand per body of water. Some features are better served by smaller feeders under their own controller." },
    ],
  },
];
