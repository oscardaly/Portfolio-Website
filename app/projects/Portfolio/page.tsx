import { ArticleLayout } from "@/components/article";

const Portfolio = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2025"
      title="This Website"
      lead="The site you're reading. A self-hosted Next.js portfolio, containerised and served from my own infrastructure rather than a managed platform."
      meta={[
        { label: "Year", value: "2025" },
        { label: "Stack", value: "Next.js · Docker · Nginx" },
      ]}
      links={[
        { label: "Live Site", href: "https://oscardaly.tech" },
        {
          label: "GitHub",
          href: "https://github.com/oscardaly/Portfolio-Website",
        },
      ]}
    >
      <h2>Overview</h2>
      <p>
        This project is a Next.js personal portfolio built on the App Router,
        styled with Tailwind CSS and a hand-rolled editorial design system. It
        is designed to be deployed using Docker containers managed by Docker
        Compose, with Nginx acting as a reverse proxy and handling SSL via
        Certbot.
      </p>

      <h2>Why self-host</h2>
      <p>
        Deploying to a managed platform would have been faster, but running the
        site myself — containers behind an Nginx reverse proxy, automatic
        certificate renewal with Certbot — keeps me close to the parts of the
        stack I otherwise only touch through an abstraction. It&rsquo;s a small
        site, but it doubles as a place to keep those muscles warm.
      </p>

      <h2>The redesign</h2>
      <p>
        The current look is an &ldquo;engineering broadsheet&rdquo; — warm paper
        and ink, Fraunces for display, Newsreader for reading and JetBrains Mono
        for the technical annotation, with a single vermillion accent. The goal
        was something that reads like a designed publication rather than a
        template.
      </p>
    </ArticleLayout>
  );
};

export default Portfolio;
