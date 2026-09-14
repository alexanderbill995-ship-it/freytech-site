import { Button } from "./Button";
import { TrackedLink } from "./TrackedLink";
import { site, telHref } from "@/lib/site";
import styles from "./CTABand.module.css";

type Props = {
  title?: string;
  text?: string;
  primaryLabel?: string;
  primaryHref?: string;
  secondaryLabel?: string;
  secondaryHref?: string;
  source: string;
};

export function CTABand({
  title = "Request a commercial pool system assessment",
  text = "Tell us about your facility, current controller, chemical feed, and timing. A commercial aquatic specialist will review it and follow up with next steps for your system.",
  primaryLabel = "Request a System Assessment",
  primaryHref = "/contact/",
  secondaryLabel = "Request Service",
  secondaryHref = "/request-service/",
  source,
}: Props) {
  return (
    <section className={[styles.band, "on-dark"].join(" ")} aria-labelledby={`cta-${source}`}>
      <div className={["container", styles.inner].join(" ")}>
        <div className={styles.copy}>
          <p className="eyebrow">Next step</p>
          <h2 id={`cta-${source}`} className={styles.title}>{title}</h2>
          <p className={styles.text}>{text}</p>
          <p className={styles.territory}>{site.territory}</p>
        </div>
        <div className={styles.actions}>
          <Button href={primaryHref} variant="onDark" size="lg">{primaryLabel}</Button>
          <Button href={secondaryHref} variant="onDarkGhost" size="lg">{secondaryLabel}</Button>
          {site.phone && (
            <p className={styles.phone}>
              Prefer to talk? <TrackedLink href={telHref(site.phone)} event="phone_click" payload={{ location: `cta_${source}` }}>{site.phone}</TrackedLink>
            </p>
          )}
        </div>
      </div>
    </section>
  );
}
