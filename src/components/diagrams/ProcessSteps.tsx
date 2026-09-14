import styles from "./ProcessSteps.module.css";

export type Step = { title: string; text: string; deliverable?: string };

export function ProcessSteps({ steps, columns = 4 }: { steps: Step[]; columns?: 3 | 4 | 7 }) {
  return (
    <ol className={[styles.list, styles[`cols${columns}`]].join(" ")}>
      {steps.map((s, i) => (
        <li key={s.title} className={styles.item}>
          <span className={styles.num} aria-hidden="true">{i + 1}</span>
          <h3 className={styles.title}>{s.title}</h3>
          <p className={styles.text}>{s.text}</p>
          {s.deliverable && <p className={styles.deliverable}><span>You receive:</span> {s.deliverable}</p>}
        </li>
      ))}
    </ol>
  );
}
