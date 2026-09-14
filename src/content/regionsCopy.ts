/**
 * Region-specific copy. References are customer names carried from the
 * current freytech.org "Who We Work With" page and homepage, placed in the
 * region where the institution is located. Every reference must be
 * confirmed by the owner before launch (see docs/CONTENT-CONFIRMATION-CHECKLIST.md).
 */
export type RegionCopy = {
  slug: string;
  headline: string;
  intro: string;
  facilities: string[];
  references: string[];
  travelNote: string;
};

export const regionCopy: Record<string, RegionCopy> = {
  "capital-region": {
    slug: "capital-region",
    headline: "Commercial pool controls and chemical feed for the Capital Region",
    intro: "Albany, Schenectady, Troy, Saratoga Springs, and Glens Falls area facilities range from college natatoriums to municipal pools and resort pools in the Adirondack foothills. Several large aquatic projects in the region have moved through design in recent years, and the region's colleges and school districts run pools year-round.",
    facilities: ["College and university natatoriums", "School district pools", "Municipal pools and new aquatic centers", "JCC and YMCA facilities", "Resort and hotel pools in Warren and Saratoga counties"],
    references: ["Siena College", "Hudson Falls High School", "Hudson High School", "Mechanicville High School", "Sagamore Resort Hotel"],
    travelNote: "FreyTech's office is in Wayne County; Capital Region sites are a routine day trip for assessments, installation, and service.",
  },
  "central-new-york": {
    slug: "central-new-york",
    headline: "Commercial pool chemistry modernization in Central New York",
    intro: "Syracuse, Cortland, Auburn, and Oswego facilities include universities, community colleges, school districts, and YMCAs, several of which have received state funding for mechanical-room and chemical-control replacement. Central New York is within a short drive of FreyTech's office.",
    facilities: ["University and college pools", "School district natatoriums", "YMCA multi-pool facilities", "Municipal indoor and outdoor pools"],
    references: ["Colgate University"],
    travelNote: "Central New York is among the closest regions to FreyTech's Wayne County office, allowing fast response for service calls.",
  },
  "finger-lakes": {
    slug: "finger-lakes",
    headline: "FreyTech's home region: the Finger Lakes and Greater Rochester",
    intro: "FreyTech is based in Walworth, Wayne County, minutes from Rochester. The Finger Lakes region includes university natatoriums, dozens of school district pools, YMCAs, town and village pools, and college campuses from Geneva to Batavia.",
    facilities: ["University natatoriums", "Suburban school district pools", "YMCA and JCC facilities", "Town, village, and city pools", "College campuses across the Finger Lakes"],
    references: ["University of Rochester", "Fairport High School"],
    travelNote: "Same-region service. Most Finger Lakes facilities are within an hour of FreyTech's office.",
  },
  "southern-tier": {
    slug: "southern-tier",
    headline: "Commercial pool controls and feed systems across the Southern Tier",
    intro: "Ithaca, Binghamton, Elmira, and Corning host some of New York's most significant college and university aquatic facilities, including the 50-meter pool at Ithaca College that FreyTech outfitted. School districts and YMCAs across the Southern Tier operate pools that are now decades into their equipment life.",
    facilities: ["Major university and college natatoriums including 50-meter pools", "School district pools", "YMCA facilities", "Municipal pools"],
    references: ["Cornell University", "Ithaca College", "SUNY at Binghamton", "Binghamton High School and East Middle School"],
    travelNote: "The Southern Tier is a routine service territory for FreyTech, with long-standing relationships at several campuses.",
  },
  "hudson-valley": {
    slug: "hudson-valley",
    headline: "Commercial pool chemistry for the Hudson Valley and Westchester",
    intro: "From Westchester and Rockland north through Orange, Dutchess, Ulster, and Sullivan counties, the Hudson Valley includes colleges, BOCES facilities, school districts, JCCs and YMCAs, and municipalities planning large new aquatic complexes. FreyTech has served Hudson Valley institutions for years, and the region sits immediately outside our excluded New York City territory.",
    facilities: ["College campuses", "BOCES and school district pools", "JCC and YMCA facilities", "Municipal pool complexes in design or construction", "Culinary and hospitality institutions"],
    references: ["Marist College", "Mount Saint Mary College", "The Culinary Institute of America", "Poughkeepsie Middle School", "Goshen BOCES"],
    travelNote: "Hudson Valley sites are served from Wayne County with scheduled trips; multi-day installation work is planned to minimize travel impact.",
  },
  "mohawk-valley": {
    slug: "mohawk-valley",
    headline: "Commercial pool controls for the Mohawk Valley",
    intro: "Utica, Rome, Oneonta, and Amsterdam facilities include colleges, school districts, and community centers, several of which have recently received funding for indoor pool construction or renovation. The Mohawk Valley sits between FreyTech's home region and the Capital Region along the Thruway corridor.",
    facilities: ["College and community-college pools", "School district natatoriums", "Community and recreation center pools", "Municipal pools"],
    references: [],
    travelNote: "Mohawk Valley facilities are reached along the Thruway corridor from FreyTech's office. Service coverage for specific counties should be confirmed with FreyTech.",
  },
  "western-new-york": {
    slug: "western-new-york",
    headline: "Commercial pool chemistry modernization in Western New York",
    intro: "Buffalo, Niagara Falls, Jamestown, and Olean area facilities include universities, school districts, town recreation centers, and YMCAs, with several municipal pools funded for renovation. Western New York is a direct drive west from FreyTech's Wayne County office.",
    facilities: ["University and college pools", "School district pools", "Town and city recreation pools", "YMCA facilities"],
    references: [],
    travelNote: "Western New York is served directly from the Finger Lakes. Confirm coverage for the Southern Tier's western counties (Chautauqua, Cattaraugus, Allegany) with FreyTech.",
  },
  "north-country": {
    slug: "north-country",
    headline: "Commercial pool controls and service for the North Country",
    intro: "The North Country's universities, school districts, and community pools are far from most equipment vendors, which makes local support a real differentiator. FreyTech has long-standing relationships in the region, including at Clarkson University in Potsdam and school districts in Lewis County.",
    facilities: ["University natatoriums", "School district pools", "Community and municipal pools", "Resort and camp pools"],
    references: ["Clarkson University", "Lowville Central Schools", "South Lewis High School"],
    travelNote: "North Country service is scheduled to combine visits where possible; remote diagnostics through BECSys Live reduce the number of trips required.",
  },
  "long-island": {
    slug: "long-island",
    headline: "Commercial pool chemistry for Nassau and Suffolk counties",
    intro: "Long Island's school districts, colleges, JCCs, YMCAs, town pools, and aquatic centers are part of FreyTech's New York State territory outside New York City. Nassau and Suffolk are distinct from the five boroughs, which FreyTech does not serve.",
    facilities: ["School district and BOCES pools", "College and university pools", "JCC and YMCA facilities", "Town and county aquatic centers"],
    references: [],
    travelNote: "Long Island coverage, response times, and installation scheduling should be confirmed with FreyTech for your specific project.",
  },
};
