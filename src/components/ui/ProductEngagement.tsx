"use client";
import { useEffect } from "react";
import { track, type AnalyticsEvent } from "@/lib/analytics";

/** Fires an engagement event once the visitor has scrolled 50% of a product page or stayed 30 seconds. */
export function ProductEngagement({ event, product }: { event: AnalyticsEvent; product: string }) {
  useEffect(() => {
    let fired = false;
    const fire = (reason: string) => { if (fired) return; fired = true; track(event, { product, reason }); cleanup(); };
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      if (max > 0 && window.scrollY / max >= 0.5) fire("scroll_50");
    };
    const t = window.setTimeout(() => fire("time_30s"), 30000);
    window.addEventListener("scroll", onScroll, { passive: true });
    function cleanup() { window.clearTimeout(t); window.removeEventListener("scroll", onScroll); }
    return cleanup;
  }, [event, product]);
  return null;
}
