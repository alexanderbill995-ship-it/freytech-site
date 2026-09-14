/**
 * Base path support for hosting under a subfolder (e.g. GitHub Pages preview at
 * /freytech-site). Empty for the production domain. next/link and next/image
 * prefix automatically; raw <img>, icon, and OG URLs use asset().
 */
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";
export function asset(path: string) {
  return `${basePath}${path}`;
}
