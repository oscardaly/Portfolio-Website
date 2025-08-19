import Link from "next/link";

const Portfolio = () => {
  return (
    <div>
      <h1>Portfolio</h1>
      <ul>
        <li>
          <Link href="https://github.com/oscardaly/Portfolio-Website">
            Github
          </Link>
        </li>
        <li>
          <Link href="https://oscardaly.tech">Website</Link>
        </li>
      </ul>
      <p>
        This project is a Next.js personal portfolio website for Oscar Daly.
        It's built using the App Router structure, styled with Tailwind CSS and
        Shadcn/ui, and designed to be deployed using Docker containers managed
        by Docker Compose, with Nginx acting as a reverse proxy and handling SSL
        via Certbot.
      </p>
    </div>
  );
};

export default Portfolio;
