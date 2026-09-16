/**
 * Product catalog data model.
 * CMS-ready: every record is plain data. Adding a product means adding one
 * object to products.ts; pages, menus, filters, and search derive from it.
 */
export type PublishStatus = "published" | "draft" | "excluded";
export type ClaimStatus = "verified" | "partially-verified" | "pending-verification";
export type ProjectType = "new-construction" | "retrofit" | "replacement";
/**
 * Availability language is data-controlled so no page ever implies a dealer
 * relationship that has not been documented.
 * - confirmed: FreyTech sells/installs/services this line (documented).
 * - request:   relevant product; availability, lead time and service coverage to be confirmed on request.
 * - discontinued: kept for search (replacement inquiries) but labeled.
 */
export type Availability = "confirmed" | "request" | "discontinued";
export type ImageStatus = "manufacturer-public-asset" | "manufacturer-literature-asset" | "dealer-media-asset" | "freytech-photo" | "permission-required" | "unknown";
export type ProductImage = { src: string; alt: string; width: number; height: number; sourceUrl: string; status: ImageStatus; license: string };

export type Manufacturer = {
  slug: string;
  name: string;
  /** Former or alternate names customers may know. */
  aka?: string[];
  url: string;
  /** FreyTech's documented relationship. Never claim more than this. */
  relationship: string;
  relationshipStatus: ClaimStatus;
  sourceUrl?: string;
};

export type Category = {
  slug: string;
  name: string;
  short: string;
  status: PublishStatus;
  /** Reason a category is draft/excluded (owner review). */
  statusNote?: string;
  seoTitle: string;
  seoDescription: string;
  overview: string[];
  problems: string[];
  applications: string[];
  selection: { title: string; text: string }[];
  comparison?: { title: string; rows: { label: string; cells: string[] }[]; head: string[] };
  related: string[];
  services: string[];
  faqs?: { q: string; a: string }[];
  cta: { label: string; intent: string; text: string };
};

export type Facility = {
  slug: string;
  name: string;
  short: string;
  /** Existing market page for deeper content, if any. */
  marketHref?: string;
  blurb: string;
};

export type Problem = {
  slug: string;
  name: string;
  seoTitle: string;
  seoDescription: string;
  symptoms: string[];
  approach: string[];
  /** Product slugs that typically address this problem. */
  products: string[];
  categories: string[];
  resources?: string[];
  cta: { label: string; intent: string };
};

export type Spec = { k: string; v: string; src?: string };
export type Model = { name: string; fit: string; specs?: Spec[] };
export type Doc = { title: string; type: DocType; href?: string; fileType?: "PDF" | "Web" | "DWG" | "ZIP"; note?: string; status: "linked" | "placeholder" };
export type DocType = "Brochure" | "Specification sheet" | "Owner's manual" | "Installation manual" | "Warranty" | "Safety data sheet" | "Engineering resource" | "Operator guide" | "Case study" | "Product page";

export type Product = {
  slug: string;
  name: string;
  manufacturer: string; // manufacturer slug
  category: string; // category slug
  subcategory?: string;
  status: PublishStatus;
  availability: Availability;
  featured?: boolean;
  /** Conversion-focused flagship page, when one exists beyond the product template. */
  flagshipHref?: string;
  /** Legacy names, abbreviations, alternate spellings, model numbers. Searchable, never displayed as facts. */
  aliases?: string[];
  /** Additional search keywords (problems, replacement use cases, features). */
  keywords?: string[];
  /** Migration provenance for entries derived from the competitive catalog inventory. */
  migration?: { sourceUrl: string; sourceCategory: string; family?: string };
  headline: string;
  shortDescription: string;
  overview: string[];
  fit: { yes: string[]; no: string[] };
  problems: string[]; // problem slugs
  applications: string[];
  facilities: string[]; // facility slugs
  projectTypes: ProjectType[];
  features: string[];
  benefits: string[];
  models?: Model[];
  specs: Spec[];
  prerequisites: string[];
  retrofit: string[];
  integrations: { name: string; note: string; status: "verified" | "commonly-considered" }[];
  services: string[];
  support: string[];
  docs: Doc[];
  faqs: { q: string; a: string }[];
  related: string[]; // product slugs
  specifiedWith: { slug: string; status: "verified" | "commonly-considered" }[];
  relatedSolutions: string[]; // problem slugs
  image?: ProductImage;
  gallery?: ProductImage[];
  seoTitle: string;
  seoDescription: string;
  sourceUrls: string[];
  claimStatus: ClaimStatus;
  lastVerified: string; // YYYY-MM-DD
  ownerApproved: boolean;
  ownerNotes?: string;
};
