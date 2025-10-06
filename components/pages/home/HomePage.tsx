import { FC } from "react";
import Link from "next/link";
import { Button } from "../../button";
import { Github, Linkedin } from "lucide-react";

const HomePage: FC = () => {
  return (
    <section>
      <div className="bg-white">
        <div className="relative isolate px-6 lg:px-8">
          <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
            />
          </div>
          <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="hidden sm:mb-8 sm:flex sm:justify-center">
              <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
                Full Stack Developer
              </div>
            </div>
            <div className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
                Oscar Daly
              </h1>
              <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                I'm a software engineer with experience across many technologies
                and processes. I love learning, working with others, and seeing
                the impact products we create can have on users.
              </p>
              <div className="mt-10 flex items-center justify-center gap-x-6">
                <Link href="https://github.com/oscardaly" target="_blank">
                  <Button variant="outline">
                    <Github className="h-4 w-4" />
                    <p>GitHub</p>
                  </Button>
                </Link>
                <Link href="https://linkedin.com/in/oscar-daly" target="_blank">
                  <Button variant="outline">
                    <Linkedin className="h-4 w-4" />
                    <p>LinkedIn</p>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
          <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%+3rem)] aspect-1155/678 w-144.5 -translate-x-1/2 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%+36rem)] sm:w-288.75"
            />
          </div>
          <div>
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Projects
            </h1>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <Button variant="link">
                  <Link href="/projects/R3F-Galaxy" className="button">
                    R3F Galaxy
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="/projects/PartnerForGood" className="button">
                    Partner For Good
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="/projects/Portfolio" className="button">
                    Portfolio
                  </Link>
                </Button>
              </li>
              <li>
                <p>Events Manager</p>
              </li>
            </ul>
          </div>

          <div className="space-x-4 flex flex-col">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Blogs
            </h1>
            <ul className="my-6 ml-6 list-disc [&>li]:mt-2">
              <li>
                <Button variant="link">
                  <Link
                    href="/blogs/a-dummys-guide-to-leading-teams"
                    className="button"
                  >
                    A dummy's guide to leading teams.
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link
                    href="/blogs/what-I-stole-from-atlassian"
                    className="button"
                  >
                    What I stole from Atlassian.
                  </Link>
                </Button>
              </li>
              <li>
                <Button variant="link">
                  <Link href="/blogs/culture-as-a-service" className="button">
                    Culture as a Service (CAAS).
                  </Link>
                </Button>
              </li>
              <li>
                <p>
                  Reducing flakiness within your Playwright E2E test suite.
                  (Coming Soon)
                </p>
              </li>
              <li>
                <p>
                  Building a chatbot with GCP - DialogFlow vs VertexAI. (Coming
                  Soon)
                </p>
              </li>
            </ul>
          </div>

          <div className="space-x-4 flex flex-col">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight text-balance">
              Conferences...
            </h1>
            <p>More info coming soon!</p>
            <ul>
              <li>
                <p>
                  AI & TinyML: Solving LEDC Food Insecurity - NI Dev Conf 2024
                </p>
              </li>
              <li>
                <p>
                  Building Interactive 3D Web Apps with React Three Fiber - NI
                  Dev Conf 2023
                </p>
              </li>
              <li>
                <p>Replacing Google Images with AI - InstilConf 2024</p>
              </li>
              <li>
                <p>Pair Programming Effectively - SISTEM Conference 2023</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomePage;
