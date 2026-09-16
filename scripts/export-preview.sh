#!/usr/bin/env bash
# Exports a clean copy of the site for the public review-preview repository.
# Excludes internal research, owner checklists, approval notes, screenshots, source assets, env files, and build output.
set -euo pipefail
SRC="$(cd "$(dirname "$0")/.." && pwd)"
DEST="${1:-/private/tmp/claude-501/-Users-abill-Documents-GitHub-freytech-site/f1d62776-2dae-47d4-b278-4ffd2470c07c/scratchpad/freytech-preview}"
rm -rf "$DEST"; mkdir -p "$DEST"
rsync -a "$SRC/" "$DEST/" \
  --exclude '.git' --exclude 'node_modules' --exclude 'out' --exclude '.next' --exclude 'tsconfig.tsbuildinfo' \
  --exclude '.env*' --exclude 'screenshots' --exclude 'assets/source' --exclude '.claude' --exclude 'AGENTS.md' --exclude 'CLAUDE.md' \
  --exclude 'docs/research' --exclude 'docs/CONTENT-CONFIRMATION-CHECKLIST.md' --exclude 'docs/OWNER-VERIFICATION-CHECKLIST.md' \
  --exclude 'docs/HOMEPAGE-COPY-AND-APPROVALS.md' --exclude 'docs/PRODUCT-CONTENT-MATRIX.md' --exclude 'docs/CATALOG-MIGRATION-MANIFEST.md' \
  --exclude 'docs/CATALOG-OMISSIONS-REPORT.md' --exclude 'docs/QA-RESULTS-*.md' --exclude 'docs/MISSING-ASSETS.md' --exclude 'docs/htaccess.sample' \
  --exclude 'scripts/crawl-aquafinity.cjs' --exclude 'scripts/generate-catalog.cjs' --exclude 'scripts/attach-images.cjs' --exclude 'scripts/content-matrix.ts'
cp "$SRC/.env.example" "$DEST/.env.example"
cat > "$DEST/README.md" <<'MD'
# FreyTech website concept — private client review preview

This repository publishes a **review preview** of the proposed Frey Technologies website to GitHub Pages. It is not the live freytech.org site, it is marked `noindex`, and its forms are intentionally not connected (nothing is transmitted).

- Preview URL: https://alexanderbill995-ship-it.github.io/freytech-preview/
- Stack: Next.js static export, TypeScript, CSS Modules. Build: `npm ci && npm run build` (output in `out/`).
- Deployment: `.github/workflows/pages.yml` (official GitHub Pages Actions) sets `NEXT_PUBLIC_BASE_PATH` to the repository name and `NEXT_PUBLIC_PREVIEW=true`.
- Content is data-driven from `src/content/`; see `docs/OWNER-HANDOFF.md`, `docs/ROUTE-MAP.md`, `docs/FORM-DELIVERY-DECISION.md`.

Items shown with an "Under review" marker are pending confirmation with FreyTech before publication.
MD
# strip package scripts that reference excluded tooling
node -e "const fs=require('fs');const p=JSON.parse(fs.readFileSync('$DEST/package.json','utf8'));delete p.scripts.catalog;delete p.scripts.matrix;p.name='freytech-preview';fs.writeFileSync('$DEST/package.json',JSON.stringify(p,null,2)+'\n')"
echo "exported to $DEST"; du -sh "$DEST" | cut -f1; ls "$DEST"; ls "$DEST/docs"
