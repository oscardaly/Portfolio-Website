import { FC, ReactNode } from "react";
import Link from "next/link";

interface MetaItem {
  label: string;
  value: string;
}

interface ArticleLink {
  label: string;
  href: string;
}

interface ArticleLayoutProps {
  kicker: string;
  title: string;
  lead?: string;
  meta?: MetaItem[];
  links?: ArticleLink[];
  backHref?: string;
  backLabel?: string;
  children: ReactNode;
  leadDropcap?: boolean;
}

/**
 * Shared editorial article shell — used by both project case studies
 * and field-note (blog) pages so they read as one publication.
 */
export const ArticleLayout: FC<ArticleLayoutProps> = ({
  kicker,
  title,
  lead,
  meta = [],
  links = [],
  backHref = "/",
  backLabel = "Index",
  children,
  leadDropcap = true,
}) => {
  return (
    <article className="mx-auto max-w-3xl px-5 pt-12 pb-8 sm:px-8 sm:pt-16">
      {/* back */}
      <Link
        href={backHref}
        className="group inline-flex items-center gap-2 mono text-[0.72rem] uppercase tracking-[0.2em] text-ink-faint transition-colors hover:text-accent-deep"
      >
        <span className="transition-transform duration-300 group-hover:-translate-x-1">
          ←
        </span>
        {backLabel}
      </Link>

      <header className="mt-9">
        <div className="reveal" style={{ "--d": "0s" } as React.CSSProperties}>
          <p className="kicker kicker--accent">{kicker}</p>
        </div>

        <h1
          className="reveal-wipe mt-5 display text-[clamp(2.6rem,8vw,5rem)] text-ink"
          style={{ "--d": "0.1s" } as React.CSSProperties}
        >
          {title}
        </h1>

        {(meta.length > 0 || links.length > 0) && (
          <div
            className="reveal mt-8 flex flex-wrap items-center gap-x-6 gap-y-3 border-y border-line py-4"
            style={{ "--d": "0.24s" } as React.CSSProperties}
          >
            {meta.map((m) => (
              <span
                key={m.label}
                className="inline-flex items-baseline gap-2 mono text-[0.74rem]"
              >
                <span className="uppercase tracking-[0.18em] text-ink-faint">
                  {m.label}
                </span>
                <span className="text-ink">{m.value}</span>
              </span>
            ))}
            {links.length > 0 && (
              <span className="ml-auto flex flex-wrap gap-x-4 gap-y-2">
                {links.map((l) => (
                  <Link
                    key={l.label}
                    href={l.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-1.5 mono text-[0.74rem] uppercase tracking-[0.14em] text-accent-deep"
                  >
                    {l.label}
                    <span className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5">
                      ↗
                    </span>
                  </Link>
                ))}
              </span>
            )}
          </div>
        )}

        {lead && (
          <p
            className="reveal mt-8 [font-family:var(--font-text)] text-[1.4rem] leading-relaxed text-ink"
            style={{ "--d": "0.32s" } as React.CSSProperties}
          >
            {lead}
          </p>
        )}
      </header>

      <div
        className={`reveal mt-10 prose ${leadDropcap && !lead ? "prose--lead" : ""}`}
        style={{ "--d": "0.4s" } as React.CSSProperties}
      >
        {children}
      </div>
    </article>
  );
};
