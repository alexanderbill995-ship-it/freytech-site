"use client";
import Link from "next/link";
import type { ComponentProps } from "react";
import { track } from "@/lib/analytics";

/** Homepage link that records which CTA and section produced the click (qualified acquisition metric). */
export function HomeCta({ section, label, children, ...rest }: ComponentProps<typeof Link> & { section: string; label: string }) {
  return <Link {...rest} onClick={() => track("homepage_cta", { section, label })}>{children}</Link>;
}
