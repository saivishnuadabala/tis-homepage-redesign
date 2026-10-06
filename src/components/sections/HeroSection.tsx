"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform, type MotionValue, type Variants } from "framer-motion";
import { ArrowRight, Award, Play } from "lucide-react";
import { contact, heroStudents } from "@/data/content";
import { ButtonLink } from "@/components/ui/ButtonLink";

const EASE = [0.22, 1, 0.36, 1] as const;

const container: Variants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};
const rise: Variants = {
  hidden: { opacity: 0, y: 32 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: EASE } },
};

// Each portrait gets its own accent ring and drifts at a different speed on scroll.
const portraitStyles = [
  { ring: "bg-gold", className: "left-0 top-10 w-[38%]", depth: -40 },
  { ring: "bg-brand", className: "left-[31%] top-0 z-10 w-[40%]", depth: -90 },
  { ring: "bg-teal", className: "right-0 top-16 w-[36%]", depth: -60 },
];

export function HeroSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });

  return (
    <section
      ref={ref}
      id="top"
      aria-labelledby="hero-title"
      className="relative overflow-hidden pt-28 pb-16 md:pt-36 lg:pb-24"
    >
      {/* Soft brand glow behind the headline */}
      <div aria-hidden className="absolute -top-40 -left-40 size-[36rem] rounded-full bg-brand/10 blur-3xl" />
      <div aria-hidden className="absolute top-40 -right-40 size-[28rem] rounded-full bg-gold/15 blur-3xl" />

      <div className="relative mx-auto grid max-w-7xl items-center gap-14 px-4 md:px-8 lg:grid-cols-[1.05fr_1fr]">
        <motion.div variants={container} initial="hidden" animate="show">
          <motion.p
            variants={rise}
            className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-4 py-2 text-xs font-semibold uppercase tracking-widest text-muted"
          >
            <span className="size-2 animate-pulse rounded-full bg-brand" />
            CBSE · Co-ed · Boarding &amp; Day · Dehradun
          </motion.p>

          <h1
            id="hero-title"
            className="mt-6 font-display text-5xl leading-[0.95] font-semibold sm:text-6xl xl:text-7xl"
          >
            <motion.span variants={rise} className="block">
              Let&apos;s do it
            </motion.span>
            <motion.span variants={rise} className="block">
              with <em className="text-brand-text">Tulas.</em>
            </motion.span>
          </h1>

          <motion.p variants={rise} className="mt-6 max-w-xl text-lg leading-relaxed text-muted md:text-xl">
            Welcome to Tulas International School (TIS), one of India&apos;s top boarding and day schools in
            Dehradun, preparing students to be global leaders.
          </motion.p>

          <motion.div variants={rise} className="mt-9 flex flex-col gap-3 sm:flex-row">
            <ButtonLink href={contact.applyHref}>
              Apply now <ArrowRight className="size-4" />
            </ButtonLink>
            <ButtonLink href={contact.virtualTourHref} variant="outline">
              <Play className="size-4" /> Virtual tour
            </ButtonLink>
          </motion.div>
        </motion.div>

        <div className="relative mx-auto aspect-[5/4] w-full max-w-xl">
          {heroStudents.map((student, i) => (
            <Portrait key={student.src} student={student} index={i} progress={scrollYProgress} />
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.8, ease: EASE }}
            className="absolute bottom-0 left-1/2 z-20 flex -translate-x-1/2 items-center gap-3 rounded-2xl border border-line bg-surface/90 px-5 py-3 shadow-xl backdrop-blur"
          >
            <Award className="size-8 shrink-0 text-gold" />
            <p className="text-sm leading-tight whitespace-nowrap">
              <strong className="block text-base">#1 in North India</strong>
              <span className="text-muted">Co-ed boarding school · Outlook</span>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

type PortraitProps = {
  student: (typeof heroStudents)[number];
  index: number;
  progress: MotionValue<number>;
};

function Portrait({ student, index, progress }: PortraitProps) {
  const style = portraitStyles[index];
  const y = useTransform(progress, [0, 1], [0, style.depth]);

  return (
    <motion.div style={{ y }} className={`absolute ${style.className}`}>
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 + index * 0.12, ease: EASE }}
        className="relative"
      >
        <div className={`absolute inset-x-0 bottom-0 aspect-square rounded-full ${style.ring}`} />
        <Image
          src={student.src}
          alt={student.alt}
          width={student.width}
          height={student.height}
          priority
          sizes="(min-width: 1024px) 230px, 40vw"
          className="relative h-auto w-full"
        />
      </motion.div>
    </motion.div>
  );
}
