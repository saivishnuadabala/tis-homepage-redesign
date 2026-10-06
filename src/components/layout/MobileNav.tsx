"use client";

import { useEffect } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Phone, X } from "lucide-react";
import { contact, navLinks } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

type Props = { open: boolean; onClose: () => void };

export function MobileNav({ open, onClose }: Props) {
  // Lock page scroll and allow Escape to close while the menu is open.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          id="mobile-nav"
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
          initial={{ clipPath: "circle(0% at 100% 0%)" }}
          animate={{ clipPath: "circle(150% at 100% 0%)" }}
          exit={{ clipPath: "circle(0% at 100% 0%)" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="fixed inset-0 z-50 flex flex-col bg-brand px-6 py-6 text-white lg:hidden"
        >
          <button
            type="button"
            onClick={onClose}
            aria-label="Close menu"
            autoFocus
            className="ml-auto grid size-11 place-items-center rounded-full border border-white/30"
          >
            <X className="size-5" />
          </button>

          <motion.ul
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.06, delayChildren: 0.15 } } }}
            className="mt-10 flex flex-col gap-2"
          >
            {navLinks.map((link) => (
              <motion.li
                key={link.href}
                variants={{ hidden: { opacity: 0, x: 24 }, show: { opacity: 1, x: 0 } }}
              >
                <a
                  href={link.href}
                  onClick={onClose}
                  className="block py-2 font-display text-4xl font-semibold"
                >
                  {link.label}
                </a>
              </motion.li>
            ))}
          </motion.ul>

          <div className="mt-auto flex flex-col gap-3">
            <ButtonLink href={contact.applyHref} variant="light">
              Apply now
            </ButtonLink>
            <a
              href={contact.helplineHref}
              className="flex min-h-12 items-center justify-center gap-2 text-sm font-medium"
            >
              <Phone className="size-4" /> {contact.helpline}
            </a>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
