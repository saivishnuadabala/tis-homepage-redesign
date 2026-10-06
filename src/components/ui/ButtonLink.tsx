import type { ComponentProps } from "react";

const variants = {
  primary: "bg-brand text-white shadow-lg shadow-brand/25 hover:bg-brand-strong hover:shadow-brand/40",
  outline: "border border-line text-ink hover:border-brand hover:text-brand-text",
  light: "bg-white text-brand hover:bg-white/90",
  outlineLight: "border border-white/40 text-white hover:bg-white/10",
};

type Props = ComponentProps<"a"> & { variant?: keyof typeof variants };

/** Every CTA on the page is a link (to a section, the admission portal or a phone number). */
export function ButtonLink({ variant = "primary", className = "", ...props }: Props) {
  const external = props.href?.startsWith("http");
  return (
    <a
      {...(external && { target: "_blank", rel: "noopener noreferrer" })}
      {...props}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-6 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand ${variants[variant]} ${className}`}
    />
  );
}
