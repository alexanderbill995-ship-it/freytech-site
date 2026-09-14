import Link from "next/link";
import styles from "./SystemFlow.module.css";

const steps = [
  { key: "measure", label: "Measure", who: "BECSys5", text: "Sensors read pH, ORP or free chlorine, temperature, flow, and other configured points continuously.", href: "/becsys5-controls/" },
  { key: "control", label: "Control", who: "BECSys5", text: "The controller calls for chemical, holds setpoints, and applies flow interlocks and feed limits.", href: "/becsys5-controls/" },
  { key: "feed", label: "Feed", who: "Pulsar Precision", text: "Where volume and chlorine demand justify it, a calcium hypochlorite feeder delivers sanitizer on demand.", href: "/pulsar-precision-feeders/" },
  { key: "monitor", label: "Monitor", who: "BECSys Live", text: "Operators and managers see trends, alarms, and records remotely and keep operating logs.", href: "/becsys5-controls/#remote" },
  { key: "support", label: "Support", who: "FreyTech", text: "Local installation, commissioning, training, preventive maintenance, and service keep it running.", href: "/service-support/" },
];

/** The central story: Measure → Control → Feed → Monitor → Support. Semantic list, styled as a flow. */
export function SystemFlow({ compact = false }: { compact?: boolean }) {
  return (
    <ol className={[styles.flow, compact ? styles.compact : ""].join(" ")} aria-label="How a modern commercial pool chemistry system works">
      {steps.map((s, i) => (
        <li key={s.key} className={styles.step}>
          <div className={styles.head}>
            <span className={styles.num} aria-hidden="true">{String(i + 1).padStart(2, "0")}</span>
            <span className={styles.label}>{s.label}</span>
          </div>
          <p className={styles.who}>{s.who}</p>
          {!compact && <p className={styles.text}>{s.text}</p>}
          {!compact && <Link href={s.href} className={styles.link}>Learn more<span className="visually-hidden"> about {s.label.toLowerCase()}</span></Link>}
        </li>
      ))}
    </ol>
  );
}
