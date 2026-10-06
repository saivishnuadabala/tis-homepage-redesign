import Image from "next/image";
import { awards, campusVisitors, rankings } from "@/data/content";
import { Reveal, RevealGroup, RevealItem } from "@/components/animation/Reveal";
import { Marquee } from "@/components/ui/Marquee";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function RankingsSection() {
  return (
    // `dark` scopes the dark palette to this band so accent text keeps its contrast in both themes.
    <section
      id="rankings"
      aria-labelledby="rankings-title"
      className="dark bg-[#141112] py-24 text-white md:py-32"
    >
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <SectionHeading
          id="rankings-title"
          eyebrow="Rankings & awards"
          title="We believe in celebrating the hard work and perseverance of the best!"
        />

        <RevealGroup as="ul" className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {rankings.map((r) => (
            <RevealItem
              as="li"
              key={r.detail + r.source}
              className="rounded-3xl border border-white/10 bg-white/5 p-7 transition-colors duration-300 hover:border-gold/60 hover:bg-white/10"
            >
              <p className="font-display text-6xl font-semibold text-gold">{r.rank}</p>
              <p className="mt-2 text-sm font-semibold uppercase tracking-widest">In {r.region}</p>
              <p className="mt-4 text-white/70">
                {r.detail} by <span className="text-white">{r.source}</span>
              </p>
            </RevealItem>
          ))}
        </RevealGroup>

        <RevealGroup as="ul" className="mt-6 grid gap-4 md:grid-cols-3">
          {awards.map((award) => (
            <RevealItem
              as="li"
              key={award.src}
              className="relative aspect-[16/10] overflow-hidden rounded-3xl"
            >
              <Image
                src={award.src}
                alt={award.alt}
                fill
                sizes="(min-width: 768px) 33vw, 100vw"
                className="object-cover"
              />
            </RevealItem>
          ))}
        </RevealGroup>
      </div>

      <Reveal className="mt-24">
        <h3 className="px-4 text-center text-sm font-semibold uppercase tracking-[0.25em] text-gold">
          Influential personalities on campus
        </h3>
        <Marquee items={campusVisitors} className="mt-8 font-display text-2xl text-white/80 md:text-3xl" />
      </Reveal>
    </section>
  );
}
