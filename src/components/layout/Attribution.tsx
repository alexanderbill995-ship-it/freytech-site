"use client";
import { useEffect } from "react";
import { captureAttribution } from "@/lib/analytics";

/** Captures UTM/landing-page attribution once per session (sessionStorage only; nothing is transmitted). */
export function Attribution() {
  useEffect(() => { captureAttribution(); }, []);
  return null;
}
