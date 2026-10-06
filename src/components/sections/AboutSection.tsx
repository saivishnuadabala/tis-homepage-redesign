import Image from "next/image";
import { pillars } from "@/data/content";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section
      id="about"
      aria-labelledby="about-title"
      className="mx-auto max-w-7xl px-4 py-24 md:px-8 md:py-32"
    >
      <SectionHeading
        id="about-title"
        eyebrow="About TIS"
        title={
          <>
            Boarding and day school <span className="text-brand-text italic">excellence</span>
          </>
        }
        intro="Explore our programs, campus life, achievements, and why TIS is the preferred choice for parents across India."
      />

      <RevealGroup as="ul" className="mt-16 grid gap-6 md:grid-cols-3">
        {pillars.map((pillar, i) => (
          <RevealItem as="li" key={pillar.title}>
            <article className="group h-full overflow-hidden rounded-3xl border border-line bg-surface transition-shadow duration-300 hover:shadow-2xl hover:shadow-brand/10">
              <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-gold/20 to-brand/10">
                <Image
                  src={pillar.image}
                  alt=""
                  fill
                  sizes="(min-width: 768px) 33vw, 100vw"
                  className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
                />
              </div>
              <div className="p-7">
                <p className="font-display text-sm text-brand-text">0{i + 1}</p>
                <h3 className="mt-2 font-display text-2xl font-semibold">{pillar.title}</h3>
                <p className="mt-3 leading-relaxed text-muted">{pillar.body}</p>
              </div>
            </article>
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
