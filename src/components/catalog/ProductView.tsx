"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
export function ProductView({ slug, availability }: { slug: string; availability: string }) {
  useEffect(() => { track("product_view", { product: slug, availability }); }, [slug, availability]);
  return null;
}
