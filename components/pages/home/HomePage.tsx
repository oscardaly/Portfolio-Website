import { FC } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUpRight,
  Github,
  Linkedin,
  type LucideIcon,
} from "lucide-react";

import { site, socials, projects, writing, talks, contactHref } from "@/config";
import { Reveal } from "@/components/reveal";
import HeroCanvas from "@/components/hero-canvas";
import WireOrb from "@/components/wire-orb";

const SOCIAL_ICONS: Record<string, LucideIcon> = {
  GitHub: Github,
  LinkedIn: Linkedin,
};

const capabilities = [
  "AI Engineering",
  "RAG & LLMs",
  "Vector Search",
  "Full-stack",
  "AWS · SST",
];

const HomePage: FC = () => {
  const featured =
    projects.find((p) => p.slug === "Travel-Blog") ?? projects[0];
  const rest = projects.filter((p) => p !== featured);

  return (
    <div>
      {/* ===================== HERO ===================== */}
      <section className="relative isolate flex min-h-[90vh] items-center overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <HeroCanvas />
        </div>
        <div
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "linear-gradient(to bottom, oklch(0.158 0.018 264 / 0.55) 0%, transparent 32%, transparent 50%, oklch(0.158 0.018 264 / 0.85) 80%, var(--color-paper) 96%)",
          }}
        />

        <div className="mx-auto w-full max-w-6xl px-5 py-24 sm:px-8">
          <div className="max-w-3xl">
            <div
              className="reveal chip"
              style={{ "--d": "0s" } as React.CSSProperties}
            >
              <span className="pulse-dot" />
              Available for new work · {site.location}
            </div>

            <h1 className="mt-7 display text-[clamp(3rem,9.5vw,7.5rem)] text-ink">
              <span
                className="reveal-wipe block"
                style={{ "--d": "0.12s" } as React.CSSProperties}
              >
                Oscar
              </span>
              <span
                className="reveal-wipe block"
                style={{ "--d": "0.24s" } as React.CSSProperties}
              >
                <span className="text-gradient">Daly.</span>
              </span>
            </h1>

            <p
              className="reveal mt-7 max-w-2xl text-xl leading-relaxed text-ink-soft sm:text-2xl"
              style={{ "--d": "0.4s" } as React.CSSProperties}
            >
              Full-stack software engineer building{" "}
              <span className="font-medium text-ink">AI-powered products</span>{" "}
              —{" "}
              <span className="font-medium text-ink">
                RAG &amp; semantic search
              </span>
              , LLM apps and the{" "}
              <span className="font-medium text-ink">cloud infrastructure</span>{" "}
              to run them — end to end.
            </p>

            <div
              className="reveal mt-9 flex flex-wrap items-center gap-3"
              style={{ "--d": "0.52s" } as React.CSSProperties}
            >
              <Link href="#work" className="btn btn-primary">
                View work
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={contactHref}
                target="_blank"
                rel="noreferrer"
                className="btn btn-ghost"
              >
                Get in touch
                <ArrowUpRight className="h-4 w-4" />
              </Link>
              <div className="ml-1 flex gap-2">
                {socials.map((s) => {
                  const Icon = SOCIAL_ICONS[s.label] ?? ArrowUpRight;
                  return (
                    <Link
                      key={s.label}
                      href={s.href}
                      target="_blank"
                      rel="noreferrer"
                      aria-label={s.label}
                      className="btn btn-ghost !px-3"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>

            <div
              className="reveal mt-12 flex flex-wrap gap-2"
              style={{ "--d": "0.64s" } as React.CSSProperties}
            >
              {capabilities.map((c) => (
                <span key={c} className="chip">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {/* ===================== WORK — featured + bento ===================== */}
        <Section
          id="work"
          eyebrow="01 — Selected Work"
          title="Things I've shipped"
          lead="A few projects that show how I think — from generative graphics to production cloud systems."
        >
          {/* Featured */}
          <Reveal>
            <Link
              href={featured.href ?? "#"}
              className="card group block overflow-hidden"
            >
              <div className="grid lg:grid-cols-2">
                <div className="flex flex-col p-8 sm:p-10">
                  <div className="flex items-center gap-3">
                    <span className="chip border-accent/30 !text-accent-deep">
                      Featured
                    </span>
                    <span className="mono text-xs text-ink-faint">
                      {featured.year}
                    </span>
                  </div>
                  <h3 className="display mt-6 text-3xl text-ink transition-colors duration-300 group-hover:text-accent-deep sm:text-4xl">
                    {featured.name}
                  </h3>
                  <p className="mt-4 max-w-md leading-relaxed text-ink-soft">
                    {featured.blurb}
                  </p>
                  <div className="mt-6 flex flex-wrap gap-1.5">
                    {featured.stack.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-line bg-paper/40 px-2 py-0.5 mono text-[0.62rem] uppercase tracking-[0.1em] text-ink-faint"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="mt-8 flex items-center gap-1.5 text-sm font-medium text-accent-deep">
                    View case study
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>

                {/* preview / decorative panel */}
                <div className="relative min-h-[240px] overflow-hidden border-t border-line bg-paper/40 lg:border-l lg:border-t-0">
                  {featured.image ? (
                    <>
                      <Image
                        src={featured.image}
                        alt={`${featured.name} preview`}
                        fill
                        sizes="(min-width: 1024px) 50vw, 100vw"
                        className="object-cover object-top"
                        priority
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, oklch(0.158 0.018 264 / 0.9), transparent 55%)",
                        }}
                      />
                    </>
                  ) : (
                    <>
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "radial-gradient(80% 80% at 70% 30%, var(--color-accent-glow), transparent 60%), radial-gradient(70% 70% at 20% 90%, oklch(0.62 0.2 292 / 0.22), transparent 60%)",
                        }}
                      />
                      <div
                        className="absolute inset-0 opacity-[0.18]"
                        style={{
                          backgroundImage:
                            "linear-gradient(var(--color-line) 1px, transparent 1px), linear-gradient(90deg, var(--color-line) 1px, transparent 1px)",
                          backgroundSize: "32px 32px",
                        }}
                      />
                      <span className="num-outline absolute -right-4 top-1/2 -translate-y-1/2 text-[7rem] leading-none sm:text-[9rem]">
                        {featured.year}
                      </span>
                    </>
                  )}
                  <div className="absolute bottom-6 left-6 flex items-center gap-2">
                    <span className="pulse-dot" />
                    <span className="mono text-[0.66rem] uppercase tracking-[0.18em] text-ink-soft">
                      {featured.status === "live"
                        ? "Live in production"
                        : "In build"}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </Reveal>

          {/* Remaining — compact 3-up */}
          <div className="mt-5 grid gap-5 sm:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.06}>
                <Link
                  href={p.href ?? "#"}
                  className="card group flex h-full flex-col overflow-hidden p-6"
                >
                  {p.image && (
                    <div className="relative -mx-6 -mt-6 mb-5 aspect-[16/10] overflow-hidden border-b border-line">
                      <Image
                        src={p.image}
                        alt={`${p.name} preview`}
                        fill
                        sizes="(min-width: 640px) 33vw, 100vw"
                        className="object-cover"
                      />
                    </div>
                  )}
                  <div className="flex items-center justify-between">
                    <span className="folio">{`0${i + 2}`}</span>
                    <span className="flex items-center gap-2 mono text-xs text-ink-faint">
                      {p.status === "wip" && (
                        <span className="rounded-full border border-accent-2/40 px-2 py-0.5 text-[0.6rem] uppercase tracking-[0.15em] text-accent-deep">
                          WIP
                        </span>
                      )}
                      {p.year}
                    </span>
                  </div>
                  <h3 className="display mt-4 text-xl text-ink transition-colors duration-300 group-hover:text-accent-deep">
                    {p.name}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-relaxed text-ink-faint">
                    {p.blurb}
                  </p>
                  <div className="mt-5 flex items-center gap-1.5 text-[0.82rem] font-medium text-accent-deep">
                    Case study
                    <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </Section>

        {/* ===================== WRITING — editorial timeline ===================== */}
        <Section
          id="writing"
          eyebrow="02 — Field Notes"
          title="Writing on building & leading"
          lead="Notes on the processes, tools and team rituals I've found worth keeping."
        >
          <Reveal className="relative">
            {/* spine */}
            <div
              aria-hidden
              className="absolute bottom-3 left-[1.55rem] top-3 w-px bg-line sm:left-[2.4rem]"
            />
            <ol>
              {writing.map((post, i) => {
                const inner = (
                  <div className="group grid grid-cols-[auto_1fr] items-baseline gap-5 rounded-xl px-2 py-5 transition-colors duration-300 hover:bg-paper-2/40 sm:gap-8">
                    <div className="relative flex w-9 justify-center sm:w-16">
                      <span className="num-outline text-3xl sm:text-5xl">
                        {i + 1}
                      </span>
                    </div>
                    <div className="min-w-0 border-b border-line pb-5">
                      <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                        <h3
                          className={`display text-xl text-ink sm:text-2xl ${
                            post.comingSoon
                              ? ""
                              : "transition-colors duration-300 group-hover:text-accent-deep"
                          }`}
                        >
                          {post.title}
                          {post.comingSoon && (
                            <span className="ml-2.5 align-middle mono text-[0.56rem] uppercase tracking-[0.18em] text-ink-faint">
                              Soon
                            </span>
                          )}
                        </h3>
                        <span className="flex items-center gap-3 mono text-[0.72rem] uppercase tracking-[0.12em] text-ink-faint">
                          {post.date} · {post.readingTime}
                          {!post.comingSoon && (
                            <ArrowUpRight className="h-4 w-4 text-accent transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                          )}
                        </span>
                      </div>
                      <p className="mt-2 max-w-2xl text-[0.95rem] leading-snug text-ink-soft">
                        {post.blurb}
                      </p>
                    </div>
                  </div>
                );
                return (
                  <li
                    key={post.slug}
                    className={post.comingSoon ? "opacity-55" : ""}
                  >
                    {post.comingSoon ? (
                      inner
                    ) : (
                      <Link href={`/blogs/${post.slug}`}>{inner}</Link>
                    )}
                  </li>
                );
              })}
            </ol>
          </Reveal>
        </Section>

        {/* ===================== TALKS — split with 3D orb ===================== */}
        <Section
          id="talks"
          eyebrow="03 — On Stage"
          title="Conference talks"
          lead="Sharing what I've learned with the local dev community and beyond."
        >
          <div className="grid items-center gap-10 lg:grid-cols-[1.25fr_1fr]">
            <Reveal>
              <ol>
                {talks.map((talk, i) => (
                  <li
                    key={`${talk.title}-${i}`}
                    className="group flex items-center gap-5 border-t border-line py-5 last:border-b"
                  >
                    <span className="folio w-7 shrink-0">{`0${i + 1}`}</span>
                    <div className="min-w-0 flex-1">
                      <h3 className="display text-lg text-ink transition-colors duration-300 group-hover:text-accent-deep sm:text-2xl">
                        {talk.title}
                      </h3>
                      <div className="mt-2 flex items-center gap-3">
                        <span className="chip !py-0.5 !text-[0.58rem] !text-accent-deep">
                          {talk.venue}
                        </span>
                        <span className="mono text-xs text-ink-faint">
                          {talk.year}
                        </span>
                      </div>
                    </div>
                  </li>
                ))}
              </ol>
            </Reveal>

            <Reveal
              delay={0.1}
              className="relative order-first mx-auto aspect-square w-full max-w-sm lg:order-last"
            >
              <div
                aria-hidden
                className="absolute inset-[12%] rounded-full"
                style={{
                  background:
                    "radial-gradient(circle, var(--color-accent-glow), transparent 68%)",
                }}
              />
              <WireOrb />
            </Reveal>
          </div>
        </Section>
      </div>
    </div>
  );
};

/* ---- shared section wrapper ---- */
const Section: FC<{
  id: string;
  eyebrow: string;
  title: string;
  lead: string;
  children: React.ReactNode;
}> = ({ id, eyebrow, title, lead, children }) => (
  <section id={id} className="scroll-mt-24 py-16 sm:py-24">
    <Reveal className="mb-10 max-w-2xl">
      <p className="kicker kicker--accent">{eyebrow}</p>
      <h2 className="display mt-4 text-4xl text-ink sm:text-5xl">{title}</h2>
      <p className="mt-4 text-lg leading-relaxed text-ink-soft">{lead}</p>
    </Reveal>
    {children}
  </section>
);

export default HomePage;
