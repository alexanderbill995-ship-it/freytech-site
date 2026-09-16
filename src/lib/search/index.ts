import type { SearchDoc } from "./engine";
import { publishedProducts, publishedCategories, facilities, problems, manufacturers, categoryHref, facilityHref, problemHref, productHref } from "@/content/catalog";
import { resourceLibrary } from "@/content/resourceLibrary";
import { asset } from "@/lib/paths";

export const availabilityLabel: Record<string, string> = {
  confirmed: "Available through FreyTech",
  request: "Request availability",
  discontinued: "Discontinued: ask about replacements",
};

/** Precomputed at build time and bundled with the client; ~100 products stays well under 200 KB. */
export function buildSearchDocs(): SearchDoc[] {
  const docs: SearchDoc[] = [];
  for (const p of publishedProducts) {
    const m = manufacturers.find((x) => x.slug === p.manufacturer);
    const c = publishedCategories.find((x) => x.slug === p.category);
    docs.push({
      id: `product:${p.slug}`, kind: "product", title: p.name, subtitle: `${m?.name ?? ""} · ${c?.name ?? ""}`, description: p.shortDescription,
      href: p.flagshipHref ?? productHref(p), image: p.image ? { src: asset(p.image.src), alt: p.image.alt } : undefined,
      meta: { availability: p.availability, manufacturer: p.manufacturer, category: p.category, model: p.models?.[0]?.name ?? "", detailHref: productHref(p) },
      fields: {
        title: p.name,
        aliases: [...(p.aliases ?? []), ...(m?.aka ?? [])].join(" "),
        models: (p.models ?? []).map((x) => x.name).join(" "),
        manufacturer: m?.name ?? "",
        category: `${c?.name ?? ""} ${p.subcategory ?? ""}`,
        keywords: (p.keywords ?? []).join(" "),
        description: `${p.headline} ${p.shortDescription}`,
        applications: [...p.applications, ...p.facilities.map((f) => facilities.find((x) => x.slug === f)?.name ?? f)].join(" "),
        problems: p.problems.map((s) => problems.find((x) => x.slug === s)?.name ?? s).join(" "),
        body: [...p.features, ...p.benefits, ...p.specs.map((s) => `${s.k} ${s.v}`)].join(" "),
      },
    });
  }
  for (const c of publishedCategories) {
    docs.push({ id: `category:${c.slug}`, kind: "category", title: c.name, subtitle: "Category", description: c.overview[0]?.split(". ")[0], href: categoryHref(c.slug), fields: { title: c.name, description: c.overview.join(" "), body: [...c.problems, ...c.applications].join(" ") } });
  }
  for (const m of manufacturers) {
    if (!publishedProducts.some((p) => p.manufacturer === m.slug)) continue;
    docs.push({ id: `manufacturer:${m.slug}`, kind: "manufacturer", title: m.name, subtitle: "Manufacturer", description: m.relationship, href: `/manufacturers/${m.slug}/`, fields: { title: m.name, aliases: (m.aka ?? []).join(" "), body: publishedProducts.filter((p) => p.manufacturer === m.slug).map((p) => p.name).join(" ") } });
  }
  for (const f of facilities) {
    docs.push({ id: `facility:${f.slug}`, kind: "application", title: f.name, subtitle: "Facility type", description: f.blurb, href: facilityHref(f.slug), fields: { title: f.name, description: f.blurb } });
  }
  for (const pr of problems) {
    docs.push({ id: `problem:${pr.slug}`, kind: "problem", title: pr.name, subtitle: "Problem & solution", description: pr.symptoms[0], href: problemHref(pr.slug), fields: { title: pr.name, description: pr.seoDescription, body: [...pr.symptoms, ...pr.approach].join(" ") } });
  }
  for (const r of resourceLibrary) {
    docs.push({ id: `resource:${r.id}`, kind: "resource", title: r.title, subtitle: `${r.type} · ${r.fileType}`, description: r.description, href: r.href ?? `/resources/?type=${encodeURIComponent(r.type)}`, meta: { status: r.status }, fields: { title: r.title, description: r.description, category: r.type, manufacturer: manufacturers.find((m) => m.slug === r.manufacturer)?.name ?? "" } });
  }
  return docs;
}

export const searchDocs = buildSearchDocs();
