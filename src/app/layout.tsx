import type { Metadata, Viewport } from "next";
import { IBM_Plex_Sans, IBM_Plex_Mono } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { Attribution } from "@/components/layout/Attribution";
import { PreviewBanner } from "@/components/layout/PreviewBanner";
import { JsonLd } from "@/components/seo/JsonLd";
import { organizationLd } from "@/lib/seo";
import { site } from "@/lib/site";
import { asset } from "@/lib/paths";

const plexSans = IBM_Plex_Sans({ subsets: ["latin"], weight: ["400", "500", "600", "700"], variable: "--font-plex-sans", display: "swap" });
const plexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: ["400", "500"], variable: "--font-plex-mono", display: "swap" });

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} | Commercial Pool Water Chemistry for New York State`, template: `%s | ${site.shortName}` },
  description: "BECSys5 automated controls, Pulsar Precision feeders, installation, commissioning, training, and service for commercial aquatic facilities across New York State outside NYC.",
  applicationName: site.name,
  icons: { icon: [{ url: asset("/favicon.svg"), type: "image/svg+xml" }, { url: asset("/favicon.ico") }], apple: asset("/apple-touch-icon.png") },
  manifest: asset("/site.webmanifest"),
  robots: site.isPreview ? { index: false, follow: false, nocache: true, googleBot: { index: false, follow: false } } : undefined,
};

export const viewport: Viewport = { themeColor: "#0b1f3a", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${plexSans.variable} ${plexMono.variable}${site.isPreview ? " has-preview-banner" : ""}`}>
      <body>
        <JsonLd data={organizationLd()} />
        <Attribution />
        <PreviewBanner />
        <Header />
        <main id="main" tabIndex={-1}>{children}</main>
        <Footer />
        <StickyCTA />
      </body>
    </html>
  );
}
