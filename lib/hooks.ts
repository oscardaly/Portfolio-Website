"use client";

import { useSyncExternalStore } from "react";

const noopSubscribe = () => () => {};

/** True only after client hydration — SSR-safe gate for client-only widgets (e.g. WebGL). */
export function useMounted() {
  return useSyncExternalStore(
    noopSubscribe,
    () => true,
    () => false,
  );
}

/** Tracks the user's reduced-motion preference without setState-in-effect. */
export function useReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
      mq.addEventListener("change", onChange);
      return () => mq.removeEventListener("change", onChange);
    },
    () => window.matchMedia("(prefers-reduced-motion: reduce)").matches,
    () => false,
  );
}
