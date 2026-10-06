type Props = { items: string[]; reverse?: boolean; className?: string };

/**
 * Infinite ticker. The list is rendered twice and the track slides by -50%,
 * so the loop is seamless. Pure CSS animation, so it costs no JS per frame.
 */
export function Marquee({ items, reverse = false, className = "" }: Props) {
  return (
    <div
      className={`flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)] ${className}`}
    >
      <ul className={`flex w-max shrink-0 ${reverse ? "animate-marquee-reverse" : "animate-marquee"}`}>
        {[...items, ...items].map((item, i) => (
          <li
            key={i}
            aria-hidden={i >= items.length}
            className="flex items-center gap-8 pr-8 whitespace-nowrap"
          >
            {item}
            <span className="size-2 rotate-45 bg-gold" />
          </li>
        ))}
      </ul>
    </div>
  );
}
