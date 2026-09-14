import type { NextConfig } from "next";

/**
 * Static export: `next build` emits plain HTML/CSS/JS into ./out so the site
 * can be hosted on any static host (Netlify, Cloudflare Pages, S3, cPanel).
 * trailingSlash gives clean directory URLs (/becsys5-controls/index.html).
 */
const nextConfig: NextConfig = {
  output: "export",
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || undefined,
  trailingSlash: true,
  images: {
    // No image server in a static export; images are pre-optimized (WebP) in /public.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
  turbopack: { root: __dirname },
};

export default nextConfig;
