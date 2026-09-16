/**
 * Generates docs/PRODUCT-CONTENT-MATRIX.md from the catalog data so the owner-review
 * queue always matches what the site publishes. Run: npx tsx scripts/content-matrix.ts
 */
import { writeFileSync } from "node:fs";
import { products, categories, manufacturers } from "../src/content/catalog/index";

const m = (slug: string) => manufacturers.find((x) => x.slug === slug) ?? { name: slug, relationship: "unknown", relationshipStatus: "pending-verification" as const };
const c = (slug: string) => categories.find((x) => x.slug === slug);
const rows = products.map((p) => {
  const mf = m(p.manufacturer)!; const cat = c(p.category)!;
  const dest = p.status === "published" ? `/products/${p.category}/${p.slug}/${p.flagshipHref ? ` (+ flagship ${p.flagshipHref})` : ""}` : "not rendered";
  const docs = p.docs.length ? p.docs.map((d) => `${d.title}${d.status === "placeholder" ? " (on request)" : ""}`).join("; ") : "none";
  const claims = [p.ownerNotes, mf.relationshipStatus !== "verified" ? `Manufacturer relationship: ${mf.relationship}` : null, p.claimStatus !== "verified" ? `Claim status: ${p.claimStatus}` : null].filter(Boolean).join(" · ");
  return `| ${p.name} | ${cat.name} | ${p.status === "published" ? p.shortDescription.split(". ")[0] : p.shortDescription} | ${mf.name} | ${mf.relationship} (${mf.relationshipStatus}) | ${p.sourceUrls.join("<br>") || "—"} | ${claims || "—"} | ${docs} | ${dest} | **${p.status}** |`;
});
const catRows = categories.map((k) => `| ${k.name} | ${k.status} | ${k.statusNote ?? (k.status === "published" ? `/products/${k.slug}/` : "")} |`);
const out = `# Product-Content Matrix

Generated ${new Date().toISOString().slice(0, 10)} from \`src/content/catalog/\`. Regenerate with \`npm run matrix\`. Rows marked **draft** or **excluded** are never rendered on the site.

## Categories

| Category | Status | Route / reason |
|---|---|---|
${catRows.join("\n")}

## Products

| Product | Category | Why relevant to FreyTech | Manufacturer | FreyTech relationship (status) | Source URLs | Claims requiring confirmation | Documents available | Destination page | Status |
|---|---|---|---|---|---|---|---|---|---|
${rows.join("\n")}

## Verification legend
- **verified**: every published figure traces to a manufacturer document listed in Source URLs (see docs/research/products/claims-register.md and docs/research/secondary-lines/).
- **partially-verified**: product facts verified; dealer relationship or a document copy (read from a distributor host) still needs confirmation.
- **pending-verification**: carried from FreyTech's current website; manufacturer facts or relationship not yet confirmed.
- \`ownerApproved\` is false for every record until Angelo signs off; see docs/OWNER-VERIFICATION-CHECKLIST.md.
`;
writeFileSync("docs/PRODUCT-CONTENT-MATRIX.md", out);
console.log(`wrote docs/PRODUCT-CONTENT-MATRIX.md (${products.length} products, ${categories.length} categories)`);
