# New York State Counties by Regional Economic Development Council (REDC) Region

Compiled 2026-09-14 for the website's service-area structure.

## Source

The county-to-region assignments below follow New York State's ten Regional Economic Development Council (REDC) regions, established in 2011 and administered through Empire State Development.

- Primary source (official REDC map, lists every county by region):
  https://www.governor.ny.gov/sites/default/files/atoms/files/RegionalCouncilMap.pdf
- REDC program site (region landing pages):
  https://regionalcouncils.ny.gov/ (regions: /capital-region, /central-new-york, /finger-lakes, /long-island, /mid-hudson, /mohawk-valley, /new-york-city, /north-country, /southern-tier, /western-new-york)
- Cross-check: Mid-Hudson page states the region "represents seven counties (Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster and Westchester)" — https://regionalcouncils.ny.gov/mid-hudson
- Cross-check: ESD press releases confirm county counts (Capital Region 8, Mid-Hudson 7, Western NY 5, Central NY 5, North Country 7) — https://esd.ny.gov/esd-media-center/press-releases

Total: 62 counties = 57 in the nine served regions + 5 in New York City (excluded).

## Regions and counties

### Capital Region (8)
Albany, Columbia, Greene, Rensselaer, Saratoga, Schenectady, Warren, Washington

### Central New York (5)
Cayuga, Cortland, Madison, Onondaga, Oswego

### Finger Lakes (9)
Genesee, Livingston, Monroe, Ontario, Orleans, Seneca, Wayne, Wyoming, Yates

### Southern Tier (8)
Broome, Chemung, Chenango, Delaware, Schuyler, Steuben, Tioga, Tompkins

### Mid-Hudson (Hudson Valley) (7)
Dutchess, Orange, Putnam, Rockland, Sullivan, Ulster, Westchester

### Mohawk Valley (6)
Fulton, Herkimer, Montgomery, Oneida, Otsego, Schoharie

### Western New York (5)
Allegany, Cattaraugus, Chautauqua, Erie, Niagara

### North Country (7)
Clinton, Essex, Franklin, Hamilton, Jefferson, Lewis, St. Lawrence

### Long Island (2)
Nassau, Suffolk

### New York City (5) — EXCLUDED from service area
Bronx, Kings (Brooklyn), New York (Manhattan), Queens, Richmond (Staten Island)

Reason for exclusion: NYC pools are regulated under the New York City Health Code, Article 165 (Bathing Establishments), enforced by the NYC Department of Health and Mental Hygiene, rather than by a county health department applying 10 NYCRR Subpart 6-1. See nys-requirements.md.

## Naming notes for the website

- "Mid-Hudson" is the official REDC name; "Hudson Valley" is the common marketing name. Use "Hudson Valley" in headings and mention "Mid-Hudson" once for search.
- The REDC "Capital Region" is often called the "Capital District" locally.
- Some marketing schemes fold Sullivan, Ulster, Delaware, or Greene into "the Catskills"; keep REDC assignments for consistency and note Catskills as a sub-area if wanted.
- Long Island is sometimes marketed together with Westchester as "downstate"; keep separate.

## JSON

```json
[
  {"region": "Capital Region", "counties": ["Albany", "Columbia", "Greene", "Rensselaer", "Saratoga", "Schenectady", "Warren", "Washington"]},
  {"region": "Central New York", "counties": ["Cayuga", "Cortland", "Madison", "Onondaga", "Oswego"]},
  {"region": "Finger Lakes", "counties": ["Genesee", "Livingston", "Monroe", "Ontario", "Orleans", "Seneca", "Wayne", "Wyoming", "Yates"]},
  {"region": "Southern Tier", "counties": ["Broome", "Chemung", "Chenango", "Delaware", "Schuyler", "Steuben", "Tioga", "Tompkins"]},
  {"region": "Mid-Hudson (Hudson Valley)", "counties": ["Dutchess", "Orange", "Putnam", "Rockland", "Sullivan", "Ulster", "Westchester"]},
  {"region": "Mohawk Valley", "counties": ["Fulton", "Herkimer", "Montgomery", "Oneida", "Otsego", "Schoharie"]},
  {"region": "Western New York", "counties": ["Allegany", "Cattaraugus", "Chautauqua", "Erie", "Niagara"]},
  {"region": "North Country", "counties": ["Clinton", "Essex", "Franklin", "Hamilton", "Jefferson", "Lewis", "St. Lawrence"]},
  {"region": "Long Island", "counties": ["Nassau", "Suffolk"]},
  {"region": "New York City", "excluded": true, "counties": ["Bronx", "Kings", "New York", "Queens", "Richmond"]}
]
```
