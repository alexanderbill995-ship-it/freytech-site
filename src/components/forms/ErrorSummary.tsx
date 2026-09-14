import type { Errors } from "./useLeadForm";
import styles from "./Form.module.css";

export function ErrorSummary({ errors, labels }: { errors: Errors; labels: Record<string, string> }) {
  const keys = Object.keys(errors).filter((k) => errors[k]);
  if (!keys.length) return null;
  return (
    <div id="error-summary" className={styles.summaryBox} role="alert" tabIndex={-1}>
      <h2>Please correct {keys.length === 1 ? "1 item" : `${keys.length} items`} before sending</h2>
      <ul>
        {keys.map((k) => (
          <li key={k}><a href={`#${k}`}>{labels[k] ?? k}</a>: {errors[k]}</li>
        ))}
      </ul>
    </div>
  );
}
