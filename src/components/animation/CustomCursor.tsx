"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useMediaQuery } from "@/hooks/useMediaQuery";

const INTERACTIVE = "a, button, [role='button'], input, select, textarea, label";

export function CustomCursor() {
  // Only mice and trackpads get the custom cursor; touch devices keep native behaviour.
  const hasFinePointer = useMediaQuery("(pointer: fine)");
  const [visible, setVisible] = useState(false);
  const [hovering, setHovering] = useState(false);

  const x = useMotionValue(-100);
  const y = useMotionValue(-100);
  // The dot tracks the pointer exactly; the ring trails behind on a spring.
  const ringX = useSpring(x, { stiffness: 350, damping: 30, mass: 0.5 });
  const ringY = useSpring(y, { stiffness: 350, damping: 30, mass: 0.5 });

  useEffect(() => {
    if (!hasFinePointer) return;

    const onMove = (e: PointerEvent) => {
      x.set(e.clientX);
      y.set(e.clientY);
      setVisible(true);
    };
    const onOver = (e: PointerEvent) => {
      setHovering(e.target instanceof Element && e.target.closest(INTERACTIVE) !== null);
    };
    const onLeave = () => setVisible(false);

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("pointerover", onOver, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("pointerover", onOver);
      document.documentElement.removeEventListener("pointerleave", onLeave);
    };
  }, [hasFinePointer, x, y]);

  if (!hasFinePointer) return null;

  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 z-[70]">
      <motion.div style={{ x: ringX, y: ringY }} className="absolute left-0 top-0">
        <motion.div
          animate={{ scale: hovering ? 1.8 : 1, opacity: visible ? 1 : 0 }}
          transition={{ duration: 0.2 }}
          className={`-ml-5 -mt-5 size-10 rounded-full border-2 ${
            hovering ? "border-brand bg-brand/10" : "border-ink/40"
          }`}
        />
      </motion.div>
      <motion.div
        style={{ x, y }}
        animate={{ opacity: visible && !hovering ? 1 : 0 }}
        transition={{ duration: 0.15 }}
        className="absolute -ml-1 -mt-1 size-2 rounded-full bg-brand"
      />
    </div>
  );
}
