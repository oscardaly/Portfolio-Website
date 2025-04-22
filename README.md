# Portfolio Website

This repository contains the source code for a personal portfolio website, built with Next.js and styled using Tailwind CSS and shadcn/ui. The site is designed to showcase projects, experience, and conference talks. It uses a PostgreSQL database for persistent data storage and is containerized with Docker for easy deployment. The recommended production setup runs on an Ubuntu Linux server, using Docker Compose to orchestrate the Next.js app and database, with Nginx serving as a reverse proxy.

## Running Locally

If you want to run this setup locally using Docker, you can follow these steps:

```bash
docker-compose up -d
```

This will start both services and make your Next.js app available at `http://localhost:3000` with the PostgreSQL database running in the background. We also create a network so that our two containers can communicate with each other.

If you want to view the contents of the local database, you can use Drizzle Studio:

```bash
bun run db:studio
```

## TODO
- Remove unused files and configurations
- Fix tailwind/shadcn config and improve design
- Add unit/integration/E2E tests
- Add husky pre-commit hooks with Prettier
- Create CI/CD Github Actions with tests, linting and deployments
- Update Drizzle schema to persist data for experience, projects & conference talks
- Add open source CMS to allow for CRUD database functionality directly from client