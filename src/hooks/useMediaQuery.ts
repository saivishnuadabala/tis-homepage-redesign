import { useCallback, useSyncExternalStore } from "react";

/**
 * Subscribes to a CSS media query. Returns false during SSR so the server
 * markup never includes client-only UI such as the custom cursor.
 */
export function useMediaQuery(query: string): boolean {
  const subscribe = useCallback(
    (onChange: () => void) => {
      const mql = window.matchMedia(query);
      mql.addEventListener("change", onChange);
      return () => mql.removeEventListener("change", onChange);
    },
    [query],
  );

  return useSyncExternalStore(
    subscribe,
    () => window.matchMedia(query).matches,
    () => false,
  );
}
