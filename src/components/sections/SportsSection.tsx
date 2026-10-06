import Image from "next/image";
import { sports, sportsGallery } from "@/data/content";
import { RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function SportsSection() {
  return (
    <section id="sports" aria-labelledby="sports-title" className="overflow-hidden py-24 md:py-32">
      <div className="mx-auto grid max-w-7xl items-end gap-10 px-4 md:grid-cols-[1.4fr_1fr] md:px-8">
        <SectionHeading
          id="sports-title"
          eyebrow="Sports"
          title={
            <>
              It&apos;s not just a facility. At Tulas it&apos;s the{" "}
              <span className="text-brand-text italic">foundation!</span>
            </>
          }
        />
        <p className="text-lg text-muted md:text-right">
          <strong className="block font-display text-7xl text-ink">16+</strong>
          sports curated to bring joy and discipline to your life.
        </p>
      </div>

      <div className="mt-14 space-y-4 font-display text-3xl font-semibold md:text-5xl">
        <Marquee items={sports.slice(0, 8)} />
        <Marquee items={sports.slice(8)} reverse className="text-brand-text" />
      </div>

      <RevealGroup as="ul" className="mx-auto mt-16 grid max-w-7xl gap-6 px-4 sm:grid-cols-3 md:px-8">
        {sportsGallery.map((photo) => (
          <RevealItem
            as="li"
            key={photo.src}
            className="group relative aspect-[4/3] overflow-hidden rounded-3xl bg-gradient-to-br from-gold/25 to-brand/15"
          >
            <Image
              src={photo.src}
              alt={photo.alt}
              fill
              sizes="(min-width: 640px) 33vw, 100vw"
              // Cut-out portraits sit inside the card; full photos fill it.
              className={`transition-transform duration-500 group-hover:scale-105 ${
                photo.cutout ? "object-contain p-4" : "object-cover"
              }`}
            />
          </RevealItem>
        ))}
      </RevealGroup>
    </section>
  );
}
