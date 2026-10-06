import { stats } from "@/data/content";
import { StatCounter } from "@/components/ui/StatCounter";

export function StatsSection() {
  return (
    <section aria-label="TIS at a glance" className="bg-brand">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-4 py-14 md:grid-cols-4 md:px-8">
        {stats.map((stat) => (
          <StatCounter key={stat.label} {...stat} />
        ))}
      </div>
    </section>
  );
}
