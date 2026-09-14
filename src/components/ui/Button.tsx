import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";
import styles from "./Button.module.css";

type Variant = "primary" | "secondary" | "ghost" | "onDark" | "onDarkGhost";
type Size = "md" | "lg" | "sm";

type Common = { variant?: Variant; size?: Size; children: ReactNode; className?: string; icon?: boolean };
type AsLink = Common & { href: string } & Omit<ComponentProps<typeof Link>, "href" | "className" | "children">;
type AsButton = Common & { href?: undefined } & Omit<ComponentProps<"button">, "className" | "children">;

export function Button(props: AsLink | AsButton) {
  const { variant = "primary", size = "md", children, className = "", icon = true } = props;
  const cls = [styles.btn, styles[variant], styles[size], className].join(" ");
  const arrow = icon ? (
    <svg aria-hidden="true" width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 8h10M9 4l4 4-4 4" />
    </svg>
  ) : null;
  if ("href" in props && props.href) {
    const { href, variant: _v, size: _s, children: _c, className: _cl, icon: _i, ...rest } = props;
    void _v; void _s; void _c; void _cl; void _i;
    return (
      <Link href={href} className={cls} {...rest}>
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }
  const { variant: _v, size: _s, children: _c, className: _cl, icon: _i, href: _h, ...rest } = props as AsButton;
  void _v; void _s; void _c; void _cl; void _i; void _h;
  return (
    <button className={cls} {...rest}>
      <span>{children}</span>
      {arrow}
    </button>
  );
}
