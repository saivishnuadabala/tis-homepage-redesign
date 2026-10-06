import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

/**
 * True once the page has scrolled past `threshold` pixels. State only flips
 * when the boolean changes, so scrolling does not re-render on every frame.
 */
export function useScrolled(threshold = 24): boolean {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const next = y > threshold;
    if (next !== scrolled) setScrolled(next);
  });

  return scrolled;
}
