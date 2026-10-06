import type { ReactNode } from "react";
import { Reveal } from "@/components/animation/Reveal";

type Props = {
  id: string;
  eyebrow: string;
  title: ReactNode;
  intro?: string;
  align?: "left" | "center";
};

/** Eyebrow + h2 + intro. `id` labels the parent <section> via aria-labelledby. */
export function SectionHeading({ id, eyebrow, title, intro, align = "left" }: Props) {
  const centered = align === "center";
  return (
    <Reveal className={centered ? "mx-auto max-w-2xl text-center" : "max-w-2xl"}>
      <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-brand-text">{eyebrow}</p>
      <h2 id={id} className="font-display text-4xl leading-[1.05] font-semibold text-balance md:text-5xl">
        {title}
      </h2>
      {intro && <p className="mt-5 text-lg leading-relaxed text-muted">{intro}</p>}
    </Reveal>
  );
}
