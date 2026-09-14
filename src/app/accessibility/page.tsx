import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ title: "Accessibility Statement", description: "Frey Technologies' commitment to an accessible website.", path: "/accessibility/", noIndex: true });

export default function Page() {
  return (
    <>
      <PageHero title="Accessibility statement" crumbs={[{ name: "Accessibility", href: "/accessibility/" }]} compact lede="Frey Technologies wants every facilities professional to be able to use this site." />
      <Section narrow>
        <div className="prose">
          <p>This website was built to conform to the Web Content Accessibility Guidelines (WCAG) 2.2 Level AA. Measures include semantic HTML and heading structure, keyboard-operable navigation and disclosure menus, visible focus indicators, color contrast meeting AA ratios, descriptive link text and image alternatives, form labels with clear error messages, no autoplaying media, and no motion that cannot be reduced by the operating-system setting.</p>
          <p>If you encounter a barrier, please tell us at {site.email} or {site.phone}. Describe the page and the problem, and we will address it and provide the information you need in another form in the meantime.</p>
        </div>
      </Section>
    </>
  );
}
