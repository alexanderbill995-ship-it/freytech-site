import { products as handProducts } from "./products";
import { generatedProducts } from "./products.generated";
import { generatedManufacturers } from "./manufacturers.generated";
import imageOverrides from "./images.overrides.json";
import type { ProductImage } from "./types";
import { categories, facilities, problems, manufacturers as baseManufacturers, publishedCategories } from "./taxonomy";

/** Hand-authored PUBLISHED records win over generated ones with the same slug; a hand-authored draft stub yields to a generated published record. */
const handSlugs = new Set(handProducts.filter((p) => p.status === "published").map((p) => p.slug));
const generatedSlugs = new Set(generatedProducts.map((p) => p.slug));
const overrides = imageOverrides as Record<string, ProductImage>;
/** Hand-authored records may receive a manufacturer image sourced during the catalog migration (scripts/attach-images.cjs). */
export const products = [...handProducts.filter((p) => p.status === "published" || !generatedSlugs.has(p.slug)).map((p) => (!p.image && overrides[p.slug] ? { ...p, image: overrides[p.slug] } : p)), ...generatedProducts.filter((p) => !handSlugs.has(p.slug))];
export const manufacturers = [...baseManufacturers, ...generatedManufacturers.filter((m) => !baseManufacturers.some((b) => b.slug === m.slug))];
import type { Product } from "./types";

export { categories, facilities, problems, publishedCategories };
export { projectTypes, getCategory, getFacility, getProblem } from "./taxonomy";
export const getManufacturer = (slug: string) => manufacturers.find((m) => m.slug === slug);

export const publishedProducts: Product[] = products.filter((p) => p.status === "published");
export const featuredProducts = publishedProducts.filter((p) => p.featured);
export const getProduct = (slug: string) => publishedProducts.find((p) => p.slug === slug);
export const productsInCategory = (cat: string) => publishedProducts.filter((p) => p.category === cat);
export const productsForFacility = (f: string) => publishedProducts.filter((p) => p.facilities.includes(f));
export const productsForProblem = (pr: string) => publishedProducts.filter((p) => p.problems.includes(pr));
export const productHref = (p: Product) => `/products/${p.category}/${p.slug}/`;
export const categoryHref = (slug: string) => `/products/${slug}/`;
export const facilityHref = (slug: string) => `/products/?facility=${slug}`;
export const problemHref = (slug: string) => `/solutions/${slug}/`;

/** Manufacturers that have at least one published product (for filters). */
export const activeManufacturers = manufacturers.filter((m) => publishedProducts.some((p) => p.manufacturer === m.slug));

/** Lightweight index shipped to the client for search/filtering. */
export type ProductIndexItem = {
  slug: string; name: string; manufacturer: string; manufacturerName: string; category: string; categoryName: string;
  shortDescription: string; applications: string[]; facilities: string[]; problems: string[]; projectTypes: string[];
  featured: boolean; href: string; flagshipHref?: string; image?: { src: string; alt: string }; availability: string; hasDocs: boolean; headline: string;
  haystack: string;
};

export const productIndex: ProductIndexItem[] = publishedProducts.map((p) => {
  const m = manufacturers.find((x) => x.slug === p.manufacturer)!;
  const c = categories.find((x) => x.slug === p.category)!;
  return {
    slug: p.slug, name: p.name, manufacturer: p.manufacturer, manufacturerName: m.name, category: p.category, categoryName: c.name,
    shortDescription: p.shortDescription, applications: p.applications, facilities: p.facilities, problems: p.problems, projectTypes: p.projectTypes,
    featured: !!p.featured, href: productHref(p), flagshipHref: p.flagshipHref, image: p.image ? { src: p.image.src, alt: p.image.alt } : undefined, availability: p.availability, hasDocs: p.docs.some((d) => d.status === "linked"), headline: p.headline,
    haystack: [p.name, m.name, ...(m.aka ?? []), ...(p.aliases ?? []), ...(p.keywords ?? []), c.name, p.subcategory ?? "", p.shortDescription, p.headline, ...p.applications, ...p.features, ...p.problems.map((s) => problems.find((x) => x.slug === s)?.name ?? "")].join(" ").toLowerCase(),
  };
});
