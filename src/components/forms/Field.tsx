import type { ReactNode, ComponentProps } from "react";
import styles from "./Form.module.css";

type Base = { id: string; label: string; hint?: string; error?: string; required?: boolean; children?: ReactNode; className?: string };

export function Field({ id, label, hint, error, required, children, className = "" }: Base) {
  return (
    <div className={[styles.field, error ? styles.hasError : "", className].join(" ")}>
      <label htmlFor={id} className={styles.label}>
        {label} {required ? <span className={styles.req} aria-hidden="true">*</span> : <span className={styles.optional}>(optional)</span>}
      </label>
      {hint && <p id={`${id}-hint`} className={styles.hint}>{hint}</p>}
      {children}
      {error && <p id={`${id}-error`} className={styles.error} role="alert"><svg aria-hidden="true" width="14" height="14" viewBox="0 0 14 14" fill="currentColor"><path d="M7 0a7 7 0 100 14A7 7 0 007 0zm-.75 3.5h1.5v4.5h-1.5zM7 9.25a.9.9 0 110 1.8.9.9 0 010-1.8z"/></svg>{error}</p>}
    </div>
  );
}

export function describedBy(id: string, hint?: string, error?: string) {
  const ids = [hint ? `${id}-hint` : null, error ? `${id}-error` : null].filter(Boolean);
  return ids.length ? ids.join(" ") : undefined;
}

export function Input({ id, hint, error, ...rest }: ComponentProps<"input"> & { id: string; hint?: string; error?: string }) {
  return <input id={id} name={id} className={styles.input} aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} {...rest} />;
}

export function Textarea({ id, hint, error, ...rest }: ComponentProps<"textarea"> & { id: string; hint?: string; error?: string }) {
  return <textarea id={id} name={id} className={styles.textarea} rows={5} aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} {...rest} />;
}

export function Select({ id, hint, error, options, placeholder = "Select…", ...rest }: ComponentProps<"select"> & { id: string; hint?: string; error?: string; options: { value: string; label: string }[] | string[]; placeholder?: string }) {
  return (
    <select id={id} name={id} className={styles.select} aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} defaultValue="" {...rest}>
      <option value="" disabled>{placeholder}</option>
      {options.map((o) => {
        const opt = typeof o === "string" ? { value: o, label: o } : o;
        return <option key={opt.value} value={opt.value}>{opt.label}</option>;
      })}
    </select>
  );
}

export function Checkbox({ id, label, error, hint, ...rest }: ComponentProps<"input"> & { id: string; label: ReactNode; error?: string; hint?: string }) {
  return (
    <div className={[styles.checkWrap, error ? styles.hasError : ""].join(" ")}>
      <div className={styles.check}>
        <input type="checkbox" id={id} name={id} aria-invalid={error ? true : undefined} aria-describedby={describedBy(id, hint, error)} {...rest} />
        <label htmlFor={id}>{label}</label>
      </div>
      {hint && <p id={`${id}-hint`} className={styles.hint}>{hint}</p>}
      {error && <p id={`${id}-error`} className={styles.error} role="alert">{error}</p>}
    </div>
  );
}

export function Fieldset({ legend, children, hint }: { legend: string; children: ReactNode; hint?: string }) {
  return (
    <fieldset className={styles.fieldset}>
      <legend className={styles.legend}>{legend}</legend>
      {hint && <p className={styles.hint}>{hint}</p>}
      <div className={styles.fieldsetGrid}>{children}</div>
    </fieldset>
  );
}
