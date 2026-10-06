import Image from "next/image";
import { campusLife } from "@/data/content";
import { Reveal } from "@/components/animation/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function CampusLifeSection() {
  return (
    <section id="campus" aria-labelledby="campus-title" className="bg-surface py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="campus-title"
          eyebrow="Campus life"
          align="center"
          title={
            <>
              What&apos;s the secret to making school <span className="text-brand-text italic">awesome?</span>
            </>
          }
          intro="It’s all about making learning feel like an adventure, where curiosity leads, creativity thrives, and every day brings something new to discover. There, we cracked it!"
        />

        <div className="mt-20 space-y-20 md:space-y-28">
          {campusLife.map((item, i) => (
            <article key={item.quote} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <Reveal className={i % 2 ? "md:order-2" : ""}>
                <div className="relative aspect-[4/3] overflow-hidden rounded-3xl">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </Reveal>
              <Reveal>
                <blockquote className="font-display text-3xl leading-tight font-semibold md:text-4xl">
                  <span aria-hidden className="text-brand-text">
                    “
                  </span>
                  {item.quote}
                  <span aria-hidden className="text-brand-text">
                    ”
                  </span>
                </blockquote>
                <p className="mt-6 text-lg leading-relaxed text-muted">{item.body}</p>
              </Reveal>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
