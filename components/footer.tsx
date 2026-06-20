import Link from "next/link";
import { ArrowUpRight, Github, Linkedin } from "lucide-react";

import { socials, site, contactHref } from "@/config";

const iconFor = (label: string) => {
  if (label === "GitHub") return Github;
  if (label === "LinkedIn") return Linkedin;
  return ArrowUpRight;
};

export const Footer = () => {
  return (
    <footer className="relative z-10 mt-28 border-t border-line bg-paper-2/40">
      {/* top glow line */}
      <div className="mx-auto h-px max-w-6xl bg-gradient-to-r from-transparent via-accent/50 to-transparent" />

      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8 sm:py-20">
        <div className="flex flex-col gap-10 border-b border-line pb-12 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="kicker kicker--accent">Let&rsquo;s build something</p>
            <Link
              href={contactHref}
              target="_blank"
              rel="noreferrer"
              className="display mt-4 inline-flex items-center gap-3 text-4xl text-ink transition-colors duration-300 hover:text-accent-deep sm:text-6xl"
            >
              Start a conversation
              <ArrowUpRight className="h-8 w-8 text-accent sm:h-12 sm:w-12" />
            </Link>
          </div>
          <p className="max-w-xs text-ink-soft leading-relaxed">
            Based in {site.location} — open to interesting problems and good
            teams.
          </p>
        </div>

        <div className="flex flex-col gap-8 pt-10 sm:flex-row sm:items-center sm:justify-between">
          <ul className="flex flex-wrap gap-3">
            {socials.map((s) => {
              const Icon = iconFor(s.label);
              return (
                <li key={s.label}>
                  <Link
                    href={s.href}
                    target="_blank"
                    rel="noreferrer"
                    className="group inline-flex items-center gap-2.5 rounded-full border border-line bg-paper-2/60 px-4 py-2 text-[0.85rem] text-ink-soft transition-all duration-300 hover:border-accent/40 hover:text-ink"
                  >
                    <Icon className="h-4 w-4 text-accent" />
                    <span className="mono text-[0.78rem]">{s.handle}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
          <p className="mono text-[0.66rem] uppercase tracking-[0.22em] text-ink-faint">
            © {new Date().getFullYear()} {site.name} — built with Next.js &amp;
            three.js
          </p>
        </div>
      </div>
    </footer>
  );
};
