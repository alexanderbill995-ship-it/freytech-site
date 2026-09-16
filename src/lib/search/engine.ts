import { synonymGroups } from "./synonyms";

/**
 * Small client-side search engine (no dependency). Index is precomputed at build
 * time from catalog data; queries run instantly in the browser.
 * - token + phrase matching with weighted fields
 * - synonym expansion
 * - prefix matching for partial model numbers ("becs", "ps-1h")
 * - typo tolerance via Damerau-Levenshtein distance ≤ 1 (≤ 2 for long tokens)
 */
export type DocKind = "product" | "category" | "manufacturer" | "application" | "problem" | "resource";
export type SearchDoc = {
  id: string; kind: DocKind; title: string; subtitle?: string; description?: string; href: string;
  image?: { src: string; alt: string }; meta?: Record<string, string>;
  /** field -> text; weights applied by field name */
  fields: Record<string, string>;
};
export type SearchHit = { doc: SearchDoc; score: number };

const WEIGHTS: Record<string, number> = { title: 10, aliases: 8, models: 7, manufacturer: 5, category: 3, keywords: 4, description: 2, applications: 2, problems: 2, body: 1 };

export function normalize(s: string) {
  return s.toLowerCase().replace(/[®™©]/g, "").replace(/[^a-z0-9+/&.\- ]+/g, " ").replace(/\s+/g, " ").trim();
}
export function tokenize(s: string) {
  return normalize(s).split(/[\s/&]+/).map((t) => t.replace(/^[-.]+|[-.]+$/g, "")).filter((t) => t.length > 0);
}

const synonymIndex: Map<string, Set<string>> = new Map();
for (const group of synonymGroups) for (const term of group) { const set = synonymIndex.get(term) ?? new Set<string>(); group.forEach((g) => { if (g !== term) set.add(g); }); synonymIndex.set(term, set); }

/** Expand a query into alternative phrasings using synonym groups (bounded). */
export function expandQuery(q: string): string[] {
  const nq = normalize(q);
  const out = new Set<string>([nq]);
  for (const [term, alts] of synonymIndex) {
    if (nq === term || nq.includes(` ${term} `) || nq.startsWith(`${term} `) || nq.endsWith(` ${term}`) || (nq === term)) {
      for (const a of alts) { if (out.size > 24) break; out.add(nq.replace(term, a)); }
    }
  }
  return [...out];
}

function damerau(a: string, b: string, max: number): number {
  if (Math.abs(a.length - b.length) > max) return max + 1;
  const d: number[][] = Array.from({ length: a.length + 1 }, () => new Array(b.length + 1).fill(0));
  for (let i = 0; i <= a.length; i++) d[i][0] = i;
  for (let j = 0; j <= b.length; j++) d[0][j] = j;
  for (let i = 1; i <= a.length; i++) {
    let rowMin = Infinity;
    for (let j = 1; j <= b.length; j++) {
      const cost = a[i - 1] === b[j - 1] ? 0 : 1;
      d[i][j] = Math.min(d[i - 1][j] + 1, d[i][j - 1] + 1, d[i - 1][j - 1] + cost);
      if (i > 1 && j > 1 && a[i - 1] === b[j - 2] && a[i - 2] === b[j - 1]) d[i][j] = Math.min(d[i][j], d[i - 2][j - 2] + 1);
      rowMin = Math.min(rowMin, d[i][j]);
    }
    if (rowMin > max) return max + 1;
  }
  return d[a.length][b.length];
}

type Prepared = { doc: SearchDoc; fieldTokens: Record<string, string[]>; fieldText: Record<string, string> };

export class SearchEngine {
  private docs: Prepared[];
  private vocab: string[];
  constructor(docs: SearchDoc[]) {
    this.docs = docs.map((doc) => {
      const fieldTokens: Record<string, string[]> = {}; const fieldText: Record<string, string> = {};
      for (const [f, text] of Object.entries(doc.fields)) { fieldText[f] = normalize(text); fieldTokens[f] = tokenize(text); }
      return { doc, fieldTokens, fieldText };
    });
    const v = new Set<string>();
    this.docs.forEach((d) => Object.values(d.fieldTokens).forEach((ts) => ts.forEach((t) => v.add(t))));
    this.vocab = [...v];
  }

  /** Map each query token to itself plus close vocabulary matches (prefix or typo). */
  private variants(token: string): { term: string; penalty: number }[] {
    const out: { term: string; penalty: number }[] = [{ term: token, penalty: 0 }];
    if (token.length < 2) return out;
    const max = token.length >= 6 ? 2 : token.length >= 4 ? 1 : 0;
    for (const w of this.vocab) {
      if (w === token) continue;
      if (w.startsWith(token) && token.length >= 2) out.push({ term: w, penalty: 0.2 + Math.min(0.2, (w.length - token.length) * 0.03) });
      else if (max) { const d = damerau(token, w, max); if (d <= max) out.push({ term: w, penalty: 0.3 * d }); }
      if (out.length > 40) break;
    }
    return out;
  }

  search(query: string, opts: { limit?: number; kinds?: DocKind[]; filter?: (d: SearchDoc) => boolean } = {}): SearchHit[] {
    const q = normalize(query);
    if (!q) return [];
    const phrases = expandQuery(q);
    const tokenSets = phrases.map(tokenize);
    const results: SearchHit[] = [];
    for (const p of this.docs) {
      if (opts.kinds && !opts.kinds.includes(p.doc.kind)) continue;
      if (opts.filter && !opts.filter(p.doc)) continue;
      let best = 0;
      for (let pi = 0; pi < phrases.length; pi++) {
        const phrase = phrases[pi]; const tokens = tokenSets[pi];
        const synonymPenalty = pi === 0 ? 1 : 0.85;
        let score = 0; let matchedTokens = 0;
        // exact phrase bonuses
        for (const [f, text] of Object.entries(p.fieldText)) {
          if (text === phrase) score += WEIGHTS[f] * 6;
          else if (text.includes(phrase)) score += WEIGHTS[f] * 2.5;
        }
        for (const t of tokens) {
          let tokenScore = 0;
          for (const { term, penalty } of this.variants(t)) {
            for (const [f, toks] of Object.entries(p.fieldTokens)) {
              if (toks.includes(term)) tokenScore = Math.max(tokenScore, WEIGHTS[f] * (1 - penalty));
            }
          }
          if (tokenScore > 0) matchedTokens++;
          score += tokenScore;
        }
        if (tokens.length > 1 && matchedTokens === tokens.length) score *= 1.4;
        // Require most tokens to match so a two-word query does not return everything containing one common word.
        if (tokens.length > 1 && matchedTokens < Math.ceil(tokens.length * 0.6)) score = 0;
        best = Math.max(best, score * synonymPenalty);
      }
      if (best > 0) results.push({ doc: p.doc, score: best });
    }
    results.sort((a, b) => b.score - a.score || a.doc.title.localeCompare(b.doc.title));
    return results.slice(0, opts.limit ?? 50);
  }
}

/** Group hits by kind in a fixed display order, capped per group. */
export function groupHits(hits: SearchHit[], perGroup = 5) {
  const order: DocKind[] = ["product", "category", "manufacturer", "problem", "application", "resource"];
  const labels: Record<DocKind, string> = { product: "Products", category: "Categories", manufacturer: "Manufacturers", application: "Applications", problem: "Problems & solutions", resource: "Technical resources" };
  return order.map((kind) => ({ kind, label: labels[kind], hits: hits.filter((h) => h.doc.kind === kind).slice(0, perGroup) })).filter((g) => g.hits.length);
}
