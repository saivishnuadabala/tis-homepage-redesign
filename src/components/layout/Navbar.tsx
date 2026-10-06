"use client";

import { useCallback, useState } from "react";
import Image from "next/image";
import { Menu } from "lucide-react";
import { contact, navLinks } from "@/data/content";
import { useScrolled } from "@/hooks/useScrolled";
import { ThemeToggle } from "@/components/animation/ThemeToggle";
import { ButtonLink } from "@/components/ui/ButtonLink";
import { MobileNav } from "./MobileNav";

export function Navbar() {
  const scrolled = useScrolled();
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = useCallback(() => setMenuOpen(false), []);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
          scrolled ? "border-b border-line bg-bg/80 py-2 backdrop-blur-lg" : "py-4"
        }`}
      >
        <nav
          aria-label="Main"
          className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 md:px-8"
        >
          <a
            href="#top"
            className="flex items-center gap-3"
            aria-label="Tulas International School, back to top"
          >
            <Image
              src="/images/logo.webp"
              alt=""
              width={56}
              height={56}
              priority
              className="size-12 rounded-full bg-white md:size-14"
            />
            <span className="font-display text-lg leading-tight font-semibold">
              Tula&apos;s
              <span className="block text-xs font-sans font-medium uppercase tracking-[0.2em] text-muted">
                International School
              </span>
            </span>
          </a>

          <ul className="hidden items-center gap-1 lg:flex">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="relative rounded-full px-4 py-2 text-sm font-medium text-muted transition-colors hover:text-ink after:absolute after:inset-x-4 after:bottom-1 after:h-px after:origin-left after:scale-x-0 after:bg-brand after:transition-transform hover:after:scale-x-100"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <div className="flex items-center gap-2">
            <ThemeToggle />
            {/* Wrapper owns the breakpoint so it can't fight the button's own display class. */}
            <div className="hidden sm:block">
              <ButtonLink href={contact.applyHref}>Apply now</ButtonLink>
            </div>
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Open menu"
              aria-expanded={menuOpen}
              aria-controls="mobile-nav"
              className="grid size-11 place-items-center rounded-full border border-line lg:hidden"
            >
              <Menu className="size-5" />
            </button>
          </div>
        </nav>
      </header>
      {/* Sibling, not child: the header's backdrop-filter would trap a fixed overlay inside it. */}
      <MobileNav open={menuOpen} onClose={closeMenu} />
    </>
  );
}
