"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Sun } from "lucide-react";
import { setTheme, useTheme } from "@/hooks/useTheme";
import { useMediaQuery } from "@/hooks/useMediaQuery";

export function ThemeToggle() {
  const theme = useTheme();
  const isDark = theme === "dark";
  const reduceMotion = useMediaQuery("(prefers-reduced-motion: reduce)");

  const toggle = () => {
    const root = document.documentElement;
    if (!reduceMotion) {
      // Fade colours for this one switch only, so normal hovers stay snappy.
      root.classList.add("theme-transition");
      window.setTimeout(() => root.classList.remove("theme-transition"), 450);
    }
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={isDark ? "Switch to light theme" : "Switch to dark theme"}
      className="relative grid size-11 place-items-center overflow-hidden rounded-full border border-line text-ink transition-colors hover:border-brand hover:text-brand-text"
    >
      {/* theme is null until hydration, so server and client markup match. */}
      {theme && (
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={theme}
            initial={{ y: 18, rotate: -90, opacity: 0 }}
            animate={{ y: 0, rotate: 0, opacity: 1 }}
            exit={{ y: -18, rotate: 90, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            {isDark ? <Moon className="size-5" /> : <Sun className="size-5" />}
          </motion.span>
        </AnimatePresence>
      )}
    </button>
  );
}
