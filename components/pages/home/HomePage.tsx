import { FC } from "react";
import Link from "next/link";
import { Button } from "../../button";
import { Github, Linkedin } from "lucide-react";

const HomePage: FC = () => {
  return (
    <section>
      <p className="text-green-200">Full Stack Developer</p>
      <h1>Oscar Daly</h1>
      <p>
        I'm a software engineer with experience across many technologies and
        processes. I love learning, working with others, and seeing the impact
        products we create can have on users.
      </p>
      <div className="space-x-4">
        <Link href="https://github.com/oscardaly" target="_blank">
          <Button variant="outline" size="icon">
            <Github className="h-4 w-4" />
            <span className="sr-only">GitHub</span>
          </Button>
        </Link>
        <Link href="https://linkedin.com/in/oscar-daly" target="_blank">
          <Button variant="outline" size="icon">
            <Linkedin className="h-4 w-4" />
            <span className="sr-only">LinkedIn</span>
          </Button>
        </Link>
      </div>

      <div>
        <h1>Projects...</h1>
        <ul>
          <li>
            <Link href="/projects/R3F-Galaxy" className="button">
              R3F Galaxy
            </Link>
          </li>
          <li>
            <Link href="/projects/PartnerForGood" className="button">
              Partner For Good
            </Link>
          </li>
          <li>
            <Link href="/projects/Portfolio" className="button">
              Portfolio
            </Link>
          </li>
          <li>
            <p>Events Manager</p>
          </li>
        </ul>
      </div>

      <div className="space-x-4 flex flex-col">
        <h1>Blogs...</h1>
        <ul>
          <li>
            <Link
              href="/blogs/a-dummys-guide-to-leading-teams"
              className="button"
            >
              A dummy's guide to leading teams.
            </Link>
          </li>
          <li>
            <Link href="/blogs/what-I-stole-from-atlassian" className="button">
              What I stole from Atlassian.
            </Link>
          </li>
          <li>
            <Link href="/blogs/culture-as-a-service" className="button">
              Culture as a Service (CAAS).
            </Link>
          </li>
          <li>
            <p>
              Reducing flakiness within your Playwright E2E test suite. (Coming
              Soon)
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
        <h1>Conferences...</h1>
        <p>More info coming soon!</p>
        <ul>
          <li>
            <p>AI & TinyML: Solving LEDC Food Insecurity - NI Dev Conf 2024</p>
          </li>
          <li>
            <p>
              Building Interactive 3D Web Apps with React Three Fiber - NI Dev
              Conf 2023
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
    </section>
  );
};

export default HomePage;
