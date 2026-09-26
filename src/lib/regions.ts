/**
 * New York State regions and counties (Empire State Development / REDC definitions).
 * New York City became part of the served territory on 2026-09-26 at Angelo's instruction.
 * Its counties are still identified separately so the forms can route those leads, because
 * coverage there is delivered differently from the rest of the state.
 */
export type Region = {
  slug: string;
  name: string;
  counties: string[];
  /** Notable facility centers, used for genuinely useful regional copy. */
  hubs: string[];
  excluded?: boolean;
};

/**
 * Region names differ on whether they take a definite article: "in the Hudson Valley"
 * but "in Western New York". Templates must use this rather than hardcoding "the".
 */
export function regionPhrase(name: string): string {
  return /New York$|^New York City$|^Long Island$/.test(name) ? name : `the ${name}`;
}

export const regions: Region[] = [
  { slug: "capital-region", name: "Capital Region", counties: ["Albany", "Columbia", "Greene", "Rensselaer", "Saratoga", "Schenectady", "Warren", "Washington"], hubs: ["Albany", "Schenectady", "Troy", "Saratoga Springs", "Glens Falls"] },
  { slug: "central-new-york", name: "Central New York", counties: ["Cayuga", "Cortland", "Madison", "Onondaga", "Oswego"], hubs: ["Syracuse", "Cortland", "Auburn", "Oswego"] },
  { slug: "finger-lakes", name: "Finger Lakes", counties: ["Genesee", "Livingston", "Monroe", "Ontario", "Orleans", "Seneca", "Wayne", "Wyoming", "Yates"], hubs: ["Rochester", "Canandaigua", "Geneva", "Batavia"] },
  { slug: "southern-tier", name: "Southern Tier", counties: ["Broome", "Chemung", "Chenango", "Delaware", "Schuyler", "Steuben", "Tioga", "Tompkins"], hubs: ["Binghamton", "Ithaca", "Elmira", "Corning"] },
  { slug: "hudson-valley", name: "Hudson Valley", counties: ["Dutchess", "Orange", "Putnam", "Rockland", "Sullivan", "Ulster", "Westchester"], hubs: ["White Plains", "Poughkeepsie", "Newburgh", "Middletown", "Kingston"] },
  { slug: "mohawk-valley", name: "Mohawk Valley", counties: ["Fulton", "Herkimer", "Montgomery", "Oneida", "Otsego", "Schoharie"], hubs: ["Utica", "Rome", "Oneonta", "Amsterdam"] },
  { slug: "western-new-york", name: "Western New York", counties: ["Allegany", "Cattaraugus", "Chautauqua", "Erie", "Niagara"], hubs: ["Buffalo", "Niagara Falls", "Jamestown", "Olean"] },
  { slug: "north-country", name: "North Country", counties: ["Clinton", "Essex", "Franklin", "Hamilton", "Jefferson", "Lewis", "St. Lawrence"], hubs: ["Watertown", "Plattsburgh", "Potsdam", "Lake Placid"] },
  { slug: "long-island", name: "Long Island", counties: ["Nassau", "Suffolk"], hubs: ["Hempstead", "Huntington", "Brookhaven", "Islip"] },
  { slug: "new-york-city", name: "New York City", counties: ["Bronx", "Kings", "New York", "Queens", "Richmond"], hubs: ["Manhattan", "Brooklyn", "Queens", "The Bronx", "Staten Island"] },
];

export const serviceRegions = regions.filter((r) => !r.excluded);
export const nycCounties = regions.find((r) => r.slug === "new-york-city")!.counties;

export const allCounties = regions
  .flatMap((r) => r.counties.map((c) => ({ county: c, region: r.name, regionSlug: r.slug, excluded: !!r.excluded })))
  .sort((a, b) => a.county.localeCompare(b.county));

export function regionForCounty(county: string) {
  return allCounties.find((c) => c.county === county);
}
