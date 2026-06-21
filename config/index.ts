export const site = {
  name: "Oscar Daly",
  title: "Oscar Daly — Software Engineer",
  role: "Software Engineer",
  location: "London",
  url: "https://oscardaly.tech",
  description:
    "Oscar Daly — full-stack software engineer specialising in AI: RAG pipelines, semantic search and LLM-powered products, plus the cloud infrastructure to ship them. Selected works, field notes and talks.",
  intro:
    "I build AI-powered products end to end — RAG pipelines, semantic search and LLM apps, plus the cloud infrastructure to run them in production. I care about learning in the open, working alongside good people, and the dent a well-made product leaves on the people who use it.",
};

export const navLinks = [
  { href: "/", text: "Index", index: "00" },
  { href: "/#work", text: "Work", index: "01" },
  { href: "/#writing", text: "Writing", index: "02" },
  { href: "/#talks", text: "Talks", index: "03" },
];

export const socials = [
  {
    label: "GitHub",
    handle: "@oscardaly",
    href: "https://github.com/oscardaly",
  },
  {
    label: "LinkedIn",
    handle: "in/oscar-daly",
    href: "https://linkedin.com/in/oscar-daly",
  },
];

export const contactHref = "https://linkedin.com/in/oscar-daly";

export interface Project {
  slug: string;
  name: string;
  year: string;
  blurb: string;
  stack: string[];
  href?: string; // internal case-study route
  status?: "live" | "wip";
}

export const projects: Project[] = [
  {
    slug: "PartnerForGood",
    name: "Partner For Good",
    year: "2025",
    blurb:
      "An AI-powered marketplace pairing government suppliers with social-value brokers — semantic search over pgvector, deployed on AWS via SST & OpenNext.",
    stack: ["Next.js", "SST v3", "pgvector", "AWS"],
    href: "/projects/PartnerForGood",
    status: "live",
  },
  {
    slug: "Travel-Blog",
    name: "Travel Blog",
    year: "2026",
    blurb:
      "A photo-led travel journal with an interactive 3D globe of everywhere I've been — plus a widget that prices a weekend away in the month ahead, monetised through affiliate booking links.",
    stack: ["Next.js", "React Three Fiber", "Vercel"],
    href: "/projects/Travel-Blog",
    status: "live",
  },
  {
    slug: "R3F-Galaxy",
    name: "R3F Galaxy",
    year: "2023",
    blurb:
      "A generative, interactive galaxy rendered in the browser with React Three Fiber — thousands of GPU-driven particles you can fly through.",
    stack: ["React Three Fiber", "WebGL", "GLSL"],
    href: "/projects/R3F-Galaxy",
    status: "live",
  },
  {
    slug: "Portfolio",
    name: "This Website",
    year: "2025",
    blurb:
      "A self-hosted portfolio on the Next.js App Router — containerised with Docker Compose, fronted by Nginx with Certbot-managed SSL.",
    stack: ["Next.js", "Docker", "Nginx"],
    href: "/projects/Portfolio",
    status: "live",
  },
];

export interface WritingEntry {
  slug: string;
  title: string;
  date: string;
  readingTime: string;
  blurb: string;
  comingSoon?: boolean;
}

export const writing: WritingEntry[] = [
  {
    slug: "an-ai-driven-sdlc",
    title: "Rebuilding the SDLC Around AI",
    date: "2025",
    readingTime: "7 min",
    blurb:
      "Reshaping the software lifecycle around one shared context and a fleet of Claude skills — the engineering principles, the human-led product pipeline and the autonomous engineering loop.",
  },
  {
    slug: "a-dummys-guide-to-leading-teams",
    title: "A Dummy's Guide to Leading Teams",
    date: "2025",
    readingTime: "12 min",
    blurb:
      "An apprentice's field notes on the processes worth stealing — pull requests, CI/CD, pairing and the small rituals that make a team click.",
  },
  {
    slug: "what-I-stole-from-atlassian",
    title: "What I Stole from Atlassian",
    date: "2024",
    readingTime: "6 min",
    blurb:
      "QA kickoffs, QA demos, quality cards and PR automation — the practices I carried out of Atlassian and back to my own teams.",
  },
  {
    slug: "culture-as-a-service",
    title: "Culture as a Service (CAAS)",
    date: "2024",
    readingTime: "5 min",
    blurb:
      "Notes from the NI Chamber of Commerce Future Workforce Summit — on leading loudly, mentorship, and why people really leave.",
  },
  {
    slug: "reducing-playwright-flakiness",
    title: "Reducing Flakiness in Your Playwright E2E Suite",
    date: "Soon",
    readingTime: "—",
    blurb: "Taming flaky end-to-end tests so a green build means what it says.",
    comingSoon: true,
  },
  {
    slug: "dialogflow-vs-vertex-ai",
    title: "Building a Chatbot with GCP — DialogFlow vs Vertex AI",
    date: "Soon",
    readingTime: "—",
    blurb: "Two routes to a conversational agent on Google Cloud, weighed up.",
    comingSoon: true,
  },
];

export interface Talk {
  title: string;
  venue: string;
  year: string;
}

export const talks: Talk[] = [
  {
    title: "AI & TinyML: Solving LEDC Food Insecurity",
    venue: "NI Dev Conf",
    year: "2024",
  },
  {
    title: "Replacing Google Images with AI",
    venue: "InstilConf",
    year: "2024",
  },
  {
    title: "Building Interactive 3D Web Apps with React Three Fiber",
    venue: "NI Dev Conf",
    year: "2023",
  },
  {
    title: "Pair Programming Effectively",
    venue: "SISTEM Conference",
    year: "2023",
  },
];
