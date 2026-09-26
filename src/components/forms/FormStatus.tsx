import type { SubmitResult } from "./submit";
import { site } from "@/lib/site";
import styles from "./Form.module.css";

export function FormStatus({ result, formLabel }: { result: SubmitResult | null; formLabel: string }) {
  if (!result) return null;
  if (result.status === "sent") {
    return (
      <div className={[styles.status, styles.status_success].join(" ")} role="status" aria-live="polite" tabIndex={-1} id="form-status">
        <h3>Received. Thank you.</h3>
        {site.isPreview && <p><strong>This is the review preview:</strong> your submission really was delivered to FreyTech, marked as a preview test.</p>}
        <p>Your {formLabel} was delivered (reference <code>{result.reference}</code>). A commercial aquatic specialist will review the details and follow up with you directly. If your need is urgent, please call{site.phone ? ` ${site.phone}` : " us"}.</p>
      </div>
    );
  }
  if (result.status === "error") {
    return (
      <div className={[styles.status, styles.status_error].join(" ")} role="alert" tabIndex={-1} id="form-status">
        <h3>Your {formLabel} was not sent</h3>
        <p>{result.message} Your entries are still in the form below, so you can try again.{site.email ? ` You can also email ${site.email}.` : ""}</p>
      </div>
    );
  }
  // unconfigured (no endpoint at build time): honest fallback. When the review preview is built without an endpoint it says so; when an endpoint is set, submissions are delivered and the subject is prefixed "[Website preview]".
  if (site.isPreview) {
    return (
      <div className={[styles.status, styles.status_info].join(" ")} role="status" aria-live="polite" tabIndex={-1} id="form-status">
        <h3>Form delivery is not connected in this preview</h3>
        <p>Thank you for testing the form. <strong>Nothing was sent or stored.</strong> Delivery to FreyTech (CRM and/or email) will be connected during implementation; the form, validation, and the information it collects are final.</p>
        <p>To reach FreyTech now, call{site.phone ? ` ${site.phone}` : " us"}{site.email ? ` or email ${site.email}` : ""}.</p>
      </div>
    );
  }
  const mailBody = encodeURIComponent(Object.entries(result.payload).filter(([, v]) => v).map(([k, v]) => `${k}: ${v}`).join("\n"));
  return (
    <div className={[styles.status, styles.status_info].join(" ")} role="status" aria-live="polite" tabIndex={-1} id="form-status">
      <h3>Form delivery is not configured yet</h3>
      <p>
        This site has no form endpoint configured (<code>NEXT_PUBLIC_FORM_ENDPOINT</code> is empty), so <strong>your {formLabel} was not delivered</strong>. Nothing has been sent or stored.
      </p>
      {site.email ? (
        <p>
          You can send the same information by email instead: <a href={`mailto:${site.email}?subject=${encodeURIComponent(`Website ${formLabel}`)}&body=${mailBody}`}>open a pre-filled email to {site.email}</a>.
        </p>
      ) : (
        <p>Set the endpoint in <code>.env.local</code> (see <code>docs/DEPLOYMENT.md</code>) to enable delivery.</p>
      )}
      <details>
        <summary>Show the data that would have been sent</summary>
        <ul>
          {Object.entries(result.payload).filter(([, v]) => v).map(([k, v]) => (
            <li key={k}><code>{k}</code>: {v}</li>
          ))}
        </ul>
      </details>
    </div>
  );
}
