import type { Metadata } from "next";
import { PageHero } from "@/components/ui/PageHero";
import { Section } from "@/components/ui/Section";
import { Confirm } from "@/components/ui/Confirm";
import { pageMetadata } from "@/lib/seo";
import { site } from "@/lib/site";

export const metadata: Metadata = pageMetadata({ title: "Privacy Notice", description: "How Frey Technologies handles information submitted through this website.", path: "/privacy/", noIndex: true });

export default function Page() {
  return (
    <>
      <PageHero title="Privacy notice" crumbs={[{ name: "Privacy", href: "/privacy/" }]} compact lede="How Frey Technologies handles information you provide through this website." />
      <Section narrow>
        <div className="prose">
          <p><Confirm note="Legal review before launch">This notice describes the intended handling of website information and should be reviewed by the owner before launch.</Confirm></p>
          <h2>What we collect</h2>
          <p>When you submit a form on this site we collect the information you enter: name, organization, contact details, facility details, and your message. We also record the page you submitted from, how you arrived at the site (referrer and campaign parameters, if present), and the time of submission, so we can respond appropriately and understand which pages are useful.</p>
          <h2>How we use it</h2>
          <p>To respond to your request, schedule assessments or service, prepare proposals, and manage the resulting business relationship. Frey Technologies may store this information in its customer relationship management system. We do not sell your information, and we do not add you to marketing lists without your consent.</p>
          <h2>Analytics</h2>
          <p>This site is prepared to record anonymous usage events (such as form starts and document downloads) through a tag manager. No analytics or advertising platform is active unless configured, and where required we will request consent before any such tool is enabled.</p>
          <h2>Cookies and storage</h2>
          <p>The site uses browser session storage only to remember how you arrived at the site for the duration of your visit so that this can accompany a form submission. It sets no tracking cookies of its own.</p>
          <h2>Third parties</h2>
          <p>Form submissions are delivered through a form-processing service configured by Frey Technologies. Links to manufacturer and government websites are subject to those sites&apos; own privacy practices.</p>
          <h2>Your choices</h2>
          <p>To review, correct, or delete information you have provided, contact {site.email}.</p>
          <p>Last updated September 2026.</p>
        </div>
      </Section>
    </>
  );
}
