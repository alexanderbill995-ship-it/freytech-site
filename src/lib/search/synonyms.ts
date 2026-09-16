/**
 * Synonym groups for product search. Each group is a set of interchangeable
 * terms; a query containing any member also matches documents containing the
 * others. Keep terms lowercase. Multi-word terms are matched as phrases.
 */
export const synonymGroups: string[][] = [
  ["controller", "controllers", "automation", "automated control", "chemical control", "chemistry controller", "chemical controller", "water chemistry controller"],
  ["feeder", "feeders", "chemical delivery", "chlorinator", "chlorination", "chemical feed", "chemical feeder", "erosion feeder"],
  ["cal hypo", "calcium hypochlorite", "briquette", "briquettes", "dry chlorine"],
  ["liquid chlorine", "bleach", "sodium hypochlorite", "hypochlorite"],
  ["filter", "filters", "filtration", "regenerative media", "rmf", "perlite", "sand filter", "cartridge filter"],
  ["lift", "lifts", "pool lift", "ada access", "ada lift", "handicap access", "handicap lift", "accessibility", "accessible entry"],
  ["pump", "pumps", "circulation", "circulation pump", "recirculation", "metering pump", "dosing pump", "chemical pump"],
  ["uv", "ultraviolet", "secondary treatment", "supplemental treatment", "secondary disinfection", "chloramine", "combined chlorine"],
  ["test kit", "test kits", "water testing", "testing", "reagent", "reagents", "dpd", "photometer", "colorimeter"],
  ["starting platform", "starting platforms", "starting block", "starting blocks", "start block", "competition blocks"],
  ["bulkhead", "bulkheads", "movable wall", "moveable bulkhead", "movable bulkhead", "pool divider"],
  ["heater", "heaters", "pool heater", "boiler", "heating"],
  ["vfd", "variable frequency drive", "variable speed", "pump control", "pump controller"],
  ["alarm", "alarms", "remote monitoring", "remote visibility", "notifications", "text alerts", "email alerts"],
  ["ph control", "acid feed", "co2", "carbon dioxide", "muriatic", "acid"],
  ["vacuum", "vacuums", "robotic cleaner", "pool cleaner", "cleaning", "pool vacuum"],
  ["lane line", "lane lines", "racing lanes", "lane rope", "lane ropes", "wave eater"],
  ["guard chair", "guard chairs", "lifeguard chair", "lifeguard stand"],
  ["cover", "covers", "pool cover", "safety cover", "thermal cover", "pool blanket"],
  ["grate", "grates", "grating", "drain cover", "vgb", "vgba", "main drain"],
  ["strainer", "strainers", "basket strainer", "pump strainer"],
  ["interlock", "chemlock", "flow switch", "no flow", "feed lockout"],
  ["alkalinity", "total alkalinity", "ta", "bicarbonate"],
  ["orp", "oxidation reduction potential", "millivolt"],
  ["ppm", "free chlorine sensor", "amperometric", "chlorine sensor"],
  ["ozone", "ozonator", "o3"],
  ["salt", "salinity", "saltwater", "salt chlorine generator", "electrolytic", "on-site generation", "onsite generation"],
  ["water level", "autofill", "level control", "makeup water", "fill valve"],
  ["diving", "dive stand", "diving board", "springboard"],
  ["water polo", "goal", "goals", "polo goal"],
  ["ladder", "ladders", "rail", "rails", "handrail", "grab rail"],
  ["disinfect", "disinfecting", "sanitizer", "sanitation", "deck sanitizer", "surface disinfection"],
  ["replacement", "replace", "obsolete", "discontinued", "retrofit", "upgrade"],
  ["school", "district", "boces", "k-12", "natatorium"],
  ["ymca", "jcc", "community center", "rec center", "recreation"],
  ["hospital", "therapy", "rehab", "rehabilitation", "warm water"],
  ["hotel", "resort", "club", "hospitality"],
  ["camp", "seasonal", "summer pool"],
  ["waterpark", "water park", "aquatic center", "lazy river", "splash pad"],
];

export const exampleSearches = ["BECSys5", "Pulsar Precision", "Defender filters", "Starting blocks", "Pool lifts", "Replacement chemical pumps", "UV systems", "Commercial pool heaters"];
