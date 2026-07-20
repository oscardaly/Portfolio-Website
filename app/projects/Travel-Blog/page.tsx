import { ArticleLayout } from "@/components/article";

const TravelBlog = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2026"
      title="Travel Blog"
      lead="A photo-led travel journal that doubles as a deal-finder — an interactive 3D globe of everywhere I've been, and a widget that prices out a weekend away in the month ahead, monetised through affiliate booking links."
      meta={[
        { label: "Year", value: "2026" },
        { label: "Role", value: "Design & Build" },
      ]}
      links={[{ label: "Live Site", href: "https://travel.oscardaly.tech" }]}
    >
      <h2>Background</h2>
      <p>
        I wanted somewhere to keep the photos and notes from my trips that
        didn&rsquo;t feel like every other travel blog &mdash; and, since I was
        building it anyway, somewhere that could pay for itself. The result is
        two ideas in one site: a personal journal of the cities I&rsquo;ve
        visited, each with a hero photo, a gallery and my own shortlist of
        restaurants, bars and things to do; and a pricing widget that works out
        what a weekend away in the month ahead would actually cost, where the
        booking links pay affiliate commission.
      </p>
      <p>
        The brief I set myself was simple. It had to be fast, it had to make a
        photo-heavy site feel effortless, and the home page had to make you want
        to go somewhere.
      </p>

      <h2>Next.js on Vercel</h2>
      <p>
        The whole site is a Next.js 16 App Router project on React 19, deployed
        to Vercel. For a site that is mostly large photographs, Vercel earns its
        place: built-in image optimisation resizes and re-encodes every photo to
        modern formats on the fly, the global CDN serves them from the edge, and
        Incremental Static Regeneration keeps pages static and fast while still
        letting content refresh on a timer. Git-push deploys mean shipping a
        change is just a commit.
      </p>
      <p>
        Source photos live in Vercel Blob storage and are referenced by absolute
        URL, with the allowed hosts pinned in <code>remotePatterns</code>
        &nbsp;so the image optimiser will serve them. That keeps the repository
        light &mdash; no binary assets committed &mdash; while still letting
        Next.js do the heavy lifting on delivery.
      </p>

      <h2>An interactive 3D globe</h2>
      <p>
        The hero is a real-time 3D globe built with React Three Fiber, drei and
        the postprocessing pipeline on top of Three.js. Every city I&rsquo;ve
        written about is stored with latitude and longitude, and those
        coordinates are projected onto the sphere as interactive markers, so the
        globe is a live index of the content rather than a decorative loop. A
        bloom pass gives the markers and atmosphere their glow.
      </p>
      <p>
        The challenge with WebGL in a hero slot is that it cannot get in the way
        of the page loading or of someone who just wants to scroll. The scene is
        isolated in its own client component and kept deliberately lean &mdash;
        a single sphere, instanced markers and a tight render loop &mdash; so
        the spectacle never costs the rest of the site its speed.
      </p>

      <h2>Content as typed data</h2>
      <p>
        Rather than stand up a CMS on day one, the content lives as typed
        TypeScript consts validated against a small Zod-backed model: a{" "}
        <code>Place</code>&nbsp;per city, each owning its highlights,
        restaurants, bars and things to do. It is the pragmatic choice for a
        site only I edit &mdash; full type-safety, no database to run, no
        network on the hot path &mdash; and it let me build the whole front end
        before committing to any particular backend.
      </p>
      <p>
        The important detail is the seam. Every component reads content through
        a single <code>queries</code>&nbsp;module, and the content model
        deliberately mirrors the schema of a headless CMS. When the writing
        volume justifies it, that one data-access layer can be swapped to fetch
        from the CMS without touching a single component &mdash; the
        architecture is CMS-ready without paying the cost of one yet.
      </p>

      <h2>Pricing a weekend away</h2>
      <p>
        The monetisation feature is a widget that answers a real question: how
        much would it cost to go to this city this weekend? A small date helper
        computes the next handful of weekend date-pairs in the month ahead, and
        for each one a route handler queries Travelpayouts &mdash; Aviasales for
        the cheapest flight and Hotellook for hotel rates &mdash; then surfaces
        the cheapest option as &ldquo;from £X flights + £Y a night&rdquo;.
      </p>
      <p>
        Travelpayouts was a deliberate choice over going direct to Skyscanner or
        Booking.com, both of which gate their APIs behind approved-partner
        status a brand-new personal blog is unlikely to clear quickly.
        Travelpayouts is one free affiliate API that returns both flight and
        hotel pricing <em>and</em> hands back affiliate deep-links. Each Book
        button is an Aviasales search URL built from the origin, destination and
        dates with my affiliate marker attached, so a booking made off the
        widget pays commission.
      </p>
      <p>
        Those upstream calls are slow and rate-limited, so they cannot run on
        every request. The route handler leans on Next.js&rsquo;s caching
        primitives &mdash; a long cache lifetime and a cache tag per city
        &mdash; so the prices are fetched occasionally in the background and
        served instantly from cache, with the tag giving a clean way to
        revalidate a single city when I want fresh numbers.
      </p>
    </ArticleLayout>
  );
};

export default TravelBlog;
