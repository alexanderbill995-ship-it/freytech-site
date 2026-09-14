"use client";
import type { ComponentProps } from "react";
import { track, type AnalyticsEvent, type EventPayload } from "@/lib/analytics";

type Props = ComponentProps<"a"> & { event: AnalyticsEvent; payload?: EventPayload };

/** Plain anchor (tel:, mailto:, external, downloads) that records an analytics event on click. */
export function TrackedLink({ event, payload, onClick, children, ...rest }: Props) {
  return (
    <a
      {...rest}
      onClick={(e) => {
        track(event, { href: typeof rest.href === "string" ? rest.href : undefined, ...payload });
        onClick?.(e);
      }}
    >
      {children}
    </a>
  );
}
