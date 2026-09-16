"use client";
import { useEffect } from "react";
import { track } from "@/lib/analytics";
export function ManufacturerView({ slug }: { slug: string }) { useEffect(() => { track("manufacturer_view", { manufacturer: slug }); }, [slug]); return null; }
