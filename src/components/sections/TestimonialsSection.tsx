import Image from "next/image";
import { Star } from "lucide-react";
import { testimonials } from "@/data/content";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function TestimonialsSection() {
  return (
    <section
      id="parents"
      aria-labelledby="parents-title"
      className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        id="parents-title"
        eyebrow="From the parents"
        title="A remarkable improvement in confidence and skills"
        intro="We have seen a remarkable improvement in our child's confidence and skills since joining Tulas. The teachers here are genuinely dedicated to bringing out the best in every student."
      />

      <RevealGroup as="ul" className="mt-16 grid gap-6 md:grid-cols-3">
        {testimonials.map((t) => (
          <RevealItem as="li" key={t.name}>
            <figure className="flex h-full flex-col rounded-3xl border border-line bg-surface p-8 transition-transform duration-300 hover:-translate-y-1">
              <div
                className="flex gap-1 text-gold"
                role="img"
                aria-label="Rated 5 out of 5 on Google Reviews"
              >
                {Array.from({ length: 5 }, (_, i) => (
                  <Star key={i} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-5 flex-1 leading-relaxed">“{t.quote}”</blockquote>
              <figcaption className="mt-8 flex items-center gap-4">
                <Image
                  src={t.avatar}
                  alt=""
                  width={48}
                  height={48}
                  className="size-12 rounded-full object-cover"
                />
                <span>
                  <strong className="block">{t.name}</strong>
                  <span className="text-sm text-muted">{t.relation}</span>
                </span>
              </figcaption>
            </figure>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
