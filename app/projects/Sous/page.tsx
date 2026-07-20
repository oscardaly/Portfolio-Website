import Image from "next/image";

import { ArticleLayout } from "@/components/article";

const Sous = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2026"
      title="Sous"
      lead="A recipe platform with an AI sous-chef that plans your week around your tastes, allergies and nutrition targets — then hands you the shopping list. Built as a Turborepo monorepo with a typed ElysiaJS API, subscription billing and an MCP server, shipped on Vercel."
      meta={[
        { label: "Year", value: "2026" },
        { label: "Role", value: "Design & Build" },
      ]}
      links={[
        { label: "Live Site", href: "https://sous.oscardaly.tech" },
        { label: "Source", href: "https://github.com/oscardaly/sous" },
      ]}
    >
      <h2>Background</h2>
      <p>
        Sous is a recipe site with an AI meal-planner at its centre. You browse
        recipes with full nutrition, save the ones you like and author your own;
        then you describe the week you want &mdash; &ldquo;high-protein, mostly
        vegetarian, quick dinners&rdquo; &mdash; and an agent builds a balanced
        seven-day plan around your preferences and allergies, aggregates every
        ingredient into a shopping list, and unlocks a curated premium recipe
        library for subscribers. It is a full subscription product rather than a
        toy: accounts, three paid tiers, metered usage, and the observability to
        run it in production.
      </p>

      <figure>
        <Image
          src="/sous.webp"
          alt="The Sous landing page — 'A sous-chef for the way you eat', with the AI sous-chef mascot and a sample recipe card."
          width={1600}
          height={1039}
          sizes="(min-width: 768px) 48rem, 100vw"
          priority
        />
        <figcaption>The Sous landing page — sous.oscardaly.tech</figcaption>
      </figure>

      <h2>A Turborepo monorepo on Vercel</h2>
      <p>
        The codebase is a Bun-powered Turborepo. A Next.js 16 App Router front
        end and an ElysiaJS API deploy as two separate Vercel projects from one
        repo, over a set of shared packages &mdash; database, auth, AI, email,
        analytics and a contracts package that every layer imports. Splitting
        the API out from the site keeps the stateful, long-running work behind
        its own origin while the public, cacheable front end gets image
        optimisation and the edge CDN. Data lives in Neon Postgres, accessed
        through Drizzle with code-first migrations.
      </p>

      <h2>End-to-end type safety</h2>
      <p>
        The keystone is a single contracts package of Zod schemas, shared by the
        API for runtime validation, the web app for its forms and the AI agent
        for its tool I/O. On top of that the web talks to the API through Eden
        Treaty &mdash; a client inferred from the API&rsquo;s exported type
        &mdash; so every request and response is typed end to end with no
        codegen step. One source of truth for shapes, checked everywhere: a
        change to an API route surfaces as a type error in the web app before it
        ships.
      </p>

      <h2>Accounts and subscriptions</h2>
      <p>
        Authentication is BetterAuth, mounted inside the Elysia API and shared
        with the web app through a cross-subdomain session cookie, with social
        sign-in. Billing is Stripe through BetterAuth&rsquo;s Stripe plugin:
        three paid tiers, each registered by its Stripe Price ID, with Checkout
        and the customer billing portal. A user&rsquo;s tier is derived from
        their live subscription and drives what they can do &mdash; how many
        recipes they can author, how many AI plans they get a month, and whether
        the premium library is unlocked.
      </p>

      <h2>The AI sous-chef</h2>
      <p>
        The planner is an agent built with the Vercel AI SDK, running inside the
        API against an OpenAI-compatible model that is swappable by environment.
        It is a tool-calling loop: the agent searches recipes, reads the
        user&rsquo;s preferences, checks a recipe&rsquo;s ingredients and
        nutrition, and finally writes a structured plan &mdash; every tool
        scoped server-side to the signed-in user, so the model can never widen
        its own privileges. The system prompt anchors the week to globally
        recognised daily nutrition guidance while always deferring to the
        user&rsquo;s own targets and allergies.
      </p>
      <p>
        The shopping list is deliberately not left to the model: once a plan is
        saved, the API aggregates the real ingredients across every recipe,
        scaled by servings and de-duplicated, so the quantities are correct
        rather than merely plausible. Generations are metered as credits per
        tier and rate-limited &mdash; the free plan gets one a month.
      </p>

      <h2>Security, observability and MCP</h2>
      <p>
        Because the planner takes free-text input and calls tools, it is built
        against the OWASP Top 10 for LLM Applications: user text is treated as
        data, validated and length-capped; tool privileges are bound to the
        session, never the prompt; model output is schema-validated before any
        write; and generation is bounded by token, step and rate limits. Every
        AI call, tool span and business event flows to PostHog over
        OpenTelemetry, so token cost and latency are visible in production, and
        transactional email runs on Resend with React Email.
      </p>
      <p>
        The same recipe data is exposed through a Model Context Protocol server,
        so an external AI client can search and read recipes with the exact
        tools the in-app agent uses &mdash; the product is usable by an agent,
        not just a browser.
      </p>
    </ArticleLayout>
  );
};

export default Sous;
