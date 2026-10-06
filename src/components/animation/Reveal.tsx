"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";

// Entrance timing stays inside the 0.3s–0.6s range from the brief.
const EASE = [0.22, 1, 0.36, 1] as const;

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

const groupVariants: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08 } },
};

const viewport = { once: true, margin: "0px 0px -10% 0px" };

type Props = { children: ReactNode; className?: string };
type ListProps = Props & { as?: "div" | "ul" | "li" };

/** Fades a single block up as it scrolls into view. */
export function Reveal({ children, className }: Props) {
  return (
    <motion.div
      variants={itemVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/** Parent that staggers each RevealItem inside it. */
export function RevealGroup({ children, className, as = "div" }: ListProps) {
  const Tag = motion[as];
  return (
    <Tag
      variants={groupVariants}
      initial="hidden"
      whileInView="show"
      viewport={viewport}
      className={className}
    >
      {children}
    </Tag>
  );
}

export function RevealItem({ children, className, as = "div" }: ListProps) {
  const Tag = motion[as];
  return (
    <Tag variants={itemVariants} className={className}>
      {children}
    </Tag>
  );
}
