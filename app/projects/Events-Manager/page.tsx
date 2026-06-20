import Link from "next/link";

const EventsManager = () => {
  return (
    <div className="mx-auto max-w-3xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
      <Link
        href="/"
        className="group inline-flex items-center gap-2 mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint transition-colors hover:text-accent-deep"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        Index
      </Link>

      <div className="mt-16 border-y border-line py-20 text-center sm:py-28">
        <p
          className="reveal kicker kicker--accent"
          style={{ "--d": "0s" } as React.CSSProperties}
        >
          Case Study · 2024
        </p>
        <h1
          className="reveal-wipe mt-5 display text-[clamp(2.6rem,9vw,5.5rem)] text-ink"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          Events Manager
        </h1>
        <p
          className="reveal mx-auto mt-7 max-w-md [font-family:var(--font-text)] text-[1.25rem] leading-relaxed text-ink-soft"
          style={{ "--d": "0.24s" } as React.CSSProperties}
        >
          A tool for planning, scheduling and tracking events. It&rsquo;s being
          rebuilt right now — a proper write-up is on the way.
        </p>
        <div
          className="reveal mt-9 inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-2 px-4 py-2"
          style={{ "--d": "0.34s" } as React.CSSProperties}
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-70" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
          </span>
          <span className="mono text-[0.68rem] uppercase tracking-[0.2em] text-ink-soft">
            Work in progress
          </span>
        </div>
      </div>
    </div>
  );
};

export default EventsManager;
