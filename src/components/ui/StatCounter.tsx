"use client";

import { useCountUp } from "@/hooks/useCountUp";

type Props = { value: number; suffix: string; label: string };

export function StatCounter({ value, suffix, label }: Props) {
  const ref = useCountUp<HTMLSpanElement>(value);
  return (
    <div className="text-center">
      <p className="font-display text-5xl font-semibold text-white md:text-6xl">
        {/* Server renders the final number, so it is correct without JS. */}
        <span ref={ref}>{value}</span>
        {suffix}
      </p>
      <p className="mt-2 text-sm font-medium uppercase tracking-widest text-white/80">{label}</p>
    </div>
  );
}
