import { ArrowRight, Phone } from "lucide-react";
import { contact } from "@/data/content";
import { Reveal } from "@/components/animation/Reveal";
import { ButtonLink } from "@/components/ui/ButtonLink";

export function AdmissionsCTA() {
  return (
    <section id="contact" aria-labelledby="cta-title" className="px-4 pb-24 md:px-8 md:pb-32">
      <Reveal className="relative mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] bg-brand px-6 py-16 text-center text-white md:px-16 md:py-24">
        <div
          aria-hidden
          className="absolute -top-24 -right-24 size-80 rounded-full border-[40px] border-white/10"
        />
        <div aria-hidden className="absolute -bottom-32 -left-20 size-96 rounded-full bg-gold/20 blur-3xl" />

        <p className="relative text-sm font-semibold uppercase tracking-[0.25em] text-white/80">
          Admissions open · Class IV to XII
        </p>
        <h2
          id="cta-title"
          className="relative mx-auto mt-5 max-w-3xl font-display text-4xl leading-tight font-semibold md:text-6xl"
        >
          Tula&apos;s is made for the <em>future.</em>
        </h2>
        <p className="relative mx-auto mt-6 max-w-xl text-lg text-white/85">
          Join TIS to be part of a community that encourages leadership, innovation, and lifelong learning.
        </p>

        <div className="relative mt-10 flex flex-col justify-center gap-3 sm:flex-row">
          <ButtonLink href={contact.applyHref} variant="light">
            Apply now <ArrowRight className="size-4" />
          </ButtonLink>
          <ButtonLink href={contact.helplineHref} variant="outlineLight">
            <Phone className="size-4" /> {contact.helpline}
          </ButtonLink>
        </div>
      </Reveal>
    </section>
  );
}
