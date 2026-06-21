export interface BlogSection {
  heading?: string;
  level?: 2 | 3;
  paragraphs?: string[];
  list?: string[];
}

export interface BlogPost {
  title: string;
  date: string;
  readingTime: string;
  lead: string;
  sections: BlogSection[];
}

export const blogPosts: Map<string, BlogPost> = new Map<string, BlogPost>([
  [
    "getting-the-most-out-of-claude-code",
    {
      title: "Getting the Most Out of Claude Code ⚡",
      date: "2025",
      readingTime: "10 min read",
      lead: "I’ve basically been living inside Claude Code for a while now, and the Anthropic team recently shared a pile of tips on how they actually use it day to day. A lot of them genuinely changed how I work — so here are the ones worth knowing, distilled, with a bit of my own colour. Grab a coffee, this is a chunky one. ☕",
      sections: [
        {
          heading: "Parallel workflows with git worktrees 🌳",
          paragraphs: [
            "The team’s pick for the single biggest productivity unlock — and I’m inclined to agree. Instead of one Claude session, spin up three to five git worktrees at once, each running its own Claude in parallel (git worktree add ../project-feature-a feature-a, and away you go).",
            "A few patterns keep it sane: keep one dedicated worktree on main that’s read-only — purely for reading logs, running queries and analysis, never for writing code. Wire up shell aliases (za, zb, zc) so you can hop between worktrees in a single keystroke. And colour-code your terminal tabs so you don’t accidentally commit feature A’s work onto feature B. Native worktree support is built into the Claude desktop app now too.",
          ],
        },
        {
          heading: "Plan mode first 🗺️",
          paragraphs: [
            "Start every complex task in plan mode — Shift+Tab twice. Pour your energy into the plan so Claude can one-shot the implementation, then flip to auto-accept edits to build. The hour you spend on a solid plan saves you three on a bad one.",
          ],
          list: [
            "Two-Claude review — have one Claude write the plan, then spin up a second to review it as a staff engineer.",
            "Re-plan when stuck — the moment something goes sideways, drop back into plan mode. Don’t just keep pushing.",
            "Plan for verification — explicitly ask Claude to plan the verification steps, not only the build.",
          ],
        },
        {
          heading: "Invest in your CLAUDE.md 🧠",
          paragraphs: [
            "Your CLAUDE.md is Claude’s long-term memory, so make it earn its keep. The killer habit: after every correction, end with “update your CLAUDE.md so you don’t make that mistake again.” It’s remarkably good at writing rules for itself.",
            "Ruthlessly edit it over time until the mistake rate measurably drops. Check it into git so the whole team shares one and contributes multiple times a week. And keep a notes directory that Claude maintains per task or project, updated after every PR. Mine has sections for code style, common mistakes to avoid, and project-specific context that just points at ./notes/.",
          ],
        },
        {
          heading: "Create custom skills and commands 🛠️",
          paragraphs: [
            "Rule of thumb: if you do something more than once a day, turn it into a skill or command. Skills live in .claude/skills/<name>/SKILL.md — a name and description up top, the instructions underneath. The description is the bit that matters; it’s the activation signal.",
            "Ideas the team actually use: a /techdebt skill to run at the end of a session and hunt down duplicated or dead code; /sync-context to pull the last 7 days of Slack, GDrive, Asana and GitHub into one dump; /commit-push-pr to commit, push and open a PR in one go; and analytics agents that write dbt models, review code and test changes.",
            "There’s also an open ecosystem at skills.sh — npx skills add <owner/repo> installs community skills in one command, and they work across Claude Code, Cursor, Copilot, Windsurf and more. Worth a browse: Vercel’s React best practices, Anthropic’s frontend-design, and obra’s systematic-debugging and git-worktrees skills. (I used the frontend-design one on a project recently — it’s good.)",
          ],
        },
        {
          heading: "Let Claude fix bugs 🐛",
          paragraphs: [
            "Claude fixes most bugs by itself if you let it. Enable the Slack MCP, paste a bug thread, and just say “fix” — zero context switching. For CI, say “go fix the failing CI tests” and don’t micromanage how. And it’s shockingly capable at distributed-systems debugging: pipe your docker logs straight into it and ask what’s going wrong.",
          ],
        },
        {
          heading: "Level up your prompting 💬",
          paragraphs: [
            "A handful of prompts that punch well above their weight:",
          ],
          list: [
            "Make Claude the reviewer — “grill me on these changes and don’t make a PR until I pass your test.”",
            "Demand proof — “prove to me this works,” and have it diff behaviour between main and your feature branch.",
            "Chase elegance — after a mediocre fix, “knowing everything you know now, scrap this and implement the elegant solution.”",
            "Reduce ambiguity — write detailed specs before handing work off. The more specific you are, the better the output.",
          ],
        },
        {
          heading: "Terminal & environment setup ⌨️",
          paragraphs: [
            "The team likes Ghostty for its synchronised rendering, 24-bit colour and proper unicode. Use /statusline to keep context usage, your git branch and the current model on screen at all times. Colour-code and name your terminal tabs to match your worktrees, and lean on tmux — one tab per task.",
            "The sleeper hit, though, is voice dictation (double-tap fn on macOS). You speak roughly 3x faster than you type, and the happy side effect is that your prompts come out far more detailed.",
          ],
        },
        {
          heading: "Use subagents 🧩",
          paragraphs: [
            "Append “use subagents” to any request where you want Claude to throw more compute at the problem. They keep your main context clean by offloading individual tasks, and let you explore several approaches in parallel. You can even route permission requests through a hook to Opus and have it scan for attacks and auto-approve the safe ones.",
          ],
        },
        {
          heading: "Data & analytics 📊",
          paragraphs: [
            "Point Claude Code at a database CLI — like bq for BigQuery — and let it pull and analyse metrics on the fly: “query BigQuery for daily active users over the last 30 days and visualise the trend.” Check a database skill into the repo so the whole team queries straight from Claude Code; it works for anything with a CLI, MCP or API. Boris Cherny reckons he hasn’t written a line of SQL in 6+ months.",
          ],
        },
        {
          heading: "Learning with Claude 📚",
          paragraphs: [
            "Flip on the Explanatory or Learning output style in /config and Claude explains the why behind its changes. It also makes surprisingly good visual HTML presentations of unfamiliar code and decent ASCII diagrams of new protocols and codebases. You can even build a spaced-repetition skill: you explain your understanding, Claude probes the gaps with follow-ups, then stores the result for later review.",
          ],
        },
        {
          heading: "Code review 👀",
          paragraphs: [
            "Use the Claude Code GitHub Action to auto-review every PR — code quality, potential bugs, security and performance. Tag @claude in PR comments to ask specific questions or raise concerns, and tag it on teammates’ PRs to fold the learnings back into CLAUDE.md as part of the review.",
          ],
        },
        {
          heading: "Model selection 🎯",
          paragraphs: [
            "The team’s blunt advice: use Opus 4.5 with thinking for basically everything. Yes, it’s bigger and slower than Sonnet — but you steer it less and it’s better at tool use, so it almost always finishes faster overall. Keep Sonnet for quick questions and simple edits.",
          ],
        },
        {
          heading: "Team collaboration 🤝",
          paragraphs: [
            "Most of this comes down to: share the config. Check your CLAUDE.md into git and have the whole team contributing multiple times a week — any time you catch Claude doing something wrong, add it. Do the same with your .mcp.json so everyone gets the same MCP servers (Slack and friends) out of the box.",
          ],
        },
        {
          heading: "Verification & quality ✅",
          paragraphs: [
            "This is the big one. Probably the most important single thing for great results is giving Claude a way to verify its own work — open a browser and test the UI, run the test suite, execute bash to check behaviour. With that feedback loop, the quality of the final result jumps two to three times. Back it up with a PostToolUse hook that auto-formats every Write and Edit (e.g. bun run format) so you’re never cleaning up after it.",
          ],
        },
        {
          heading: "Long-running tasks ⏳",
          paragraphs: [
            "For the marathon jobs: have Claude verify its work with a background agent when it finishes, use an Agent Stop hook to make that verification more deterministic, and lean on monitoring plugins for the really long-haul stuff.",
          ],
        },
        {
          heading: "The thread running through all of it 🧵",
          paragraphs: [
            "Do the thinking up front (plan mode, detailed specs), give Claude a feedback loop so it can check itself, and capture every lesson back into your CLAUDE.md and skills so the whole system compounds. That’s the difference between treating Claude Code as fancy autocomplete and treating it as a teammate.",
            "If you want to go deeper: the official docs cover skills, hooks, terminal config and memory; skills.sh and awesome-claude are great for community skills and tooling. 🚀",
          ],
        },
      ],
    },
  ],
  [
    "an-ai-driven-sdlc",
    {
      title: "Rebuilding the SDLC Around AI 🤖",
      date: "2025",
      readingTime: "7 min read",
      lead: "The tools we build software with now change every few weeks — a new model here, a new framework there, an agent that suddenly does half your job. Instead of fighting that, we’ve been rebuilding our whole software development lifecycle around it: one shared context that everything feeds from, and a fleet of Claude skills doing the heavy lifting between the humans. Here’s the shape of it.",
      sections: [
        {
          heading: "The continuous context loop 🔄",
          paragraphs: [
            "The core idea is a single, shared context that everyone builds from. Strategy feeds it, product and engineering both build from it, and — crucially — whatever ships flows back into it. Architecture decisions, business strategy, personas, the product roadmap: it all lives in one place (for us that’s Notion, Linear and Figma), and Claude skills run across the whole thing.",
            "Product turns that context into specs and tickets; engineering turns tickets into shipped code; and the loop closes when shipped work updates the shared context — so the next spec is written against what’s actually live, not what we hoped was live six months ago. Strategy just keeps feeding the top of the loop.",
          ],
        },
        {
          heading: "Engineering principles for an AI-driven SDLC",
          paragraphs: [
            "Before automating anything, we wrote down the principles we didn’t want to lose. Building resilient, production-grade systems in an era of monthly framework, language and model change means being deliberate about what’s allowed to change and what isn’t.",
          ],
        },
        {
          heading: "Build decoupled & agnostic",
          level: 3,
          paragraphs: [
            "Keep everything model- and platform-agnostic — we lean on things like the AI SDK and OpenTelemetry so we’re never married to a single vendor. Reserve the right to pivot your stack and your models, use production signals to decide when, and be ready to swap out large parts of the stack quickly to stay competitive.",
          ],
        },
        {
          heading: "Best practices still apply",
          level: 3,
          paragraphs: [
            "Agents writing the code doesn’t magically make the product stable, secure or scalable. Scaling, logging, security, readable classes and testable code are still the groundwork. We start the process at the CLAUDE.md level and build on it — encoding the lessons from Clean Code, Clean Architecture and Systems Design straight into the CLAUDE.md so every agent inherits them.",
          ],
        },
        {
          heading: "Introduce AI with guardrails",
          level: 3,
          paragraphs: [
            "Define the steps every agent must take to inform itself before a task, and back them with a skills system plus evals — linters, security tests, the lot. Version your skills and prompts, manually traffic-light your PR-review skills, and retrain them on good and bad examples.",
            "And own your prompts: if it isn’t in the repo, the rules aren’t yours. Build that feedback loop on day one, not day one hundred.",
          ],
        },
        {
          heading: "Build good skills",
          level: 3,
          paragraphs: [
            "A skill is only as good as how reliably it fires and how little damage it can do when it does. Four things matter:",
          ],
          list: [
            "Descriptive — the description is the activation signal. No match, no skill, and an invisible skill is a useless one.",
            "Specific — one skill trying to cover too many workflows either fires for the wrong task or never fires at all.",
            "Concise — keep a skill’s markdown under ~500 lines; they burn context just like code does.",
            "Secure — be careful with credentials, files, environment variables and database access.",
          ],
        },
        {
          heading: "The product side: humans own intent, AI accelerates 🧭",
          paragraphs: [
            "On the product side, humans stay firmly in charge of intent and the AI skills just make execution faster. Every feature flows through the same human-directed, observable pipeline:",
          ],
          list: [
            "Author product strategy — the PM sets where to play and how to win, pressure-tested against proven strategy frameworks. (Notion)",
            "Create spec — a create-spec skill shapes a structured spec from strategy and live context, gated on any open questions. (Notion · Claude Code)",
            "Critique spec — a critique-spec skill scores every spec against a quality rubric. Quality at speed. (Claude Code)",
            "Shape & approve — the PM owns scope and intent, then locks the spec for build.",
            "Generate wireframes — new screens, including edge, error and empty states, generated from the live design system over MCP. (Figma · Claude Code)",
            "Approve & polish designs — the designer polishes the screens and the PM signs off before any engineering begins. (Figma)",
            "Generate tickets — well-crafted, complete tickets handed to engineering against shared standards and rubrics. (Linear · Claude Code)",
            "Adjust & publish — the PM owns the work and stays accountable for quality and strategic alignment.",
          ],
        },
        {
          heading: "The engineering side: 3 checkpoints, 5 agents 🛠️",
          paragraphs: [
            "Once tickets exist, engineering runs as a mostly-autonomous pipeline with humans at just three checkpoints and agents doing the rest — five of them, end to end:",
          ],
          list: [
            "Break down tickets (AI) — Claude Code turns product tickets into technical tasks. (Linear · Claude Code)",
            "Approve tickets (human) — the tech lead signs off before any code is written. (Linear)",
            "Scaffold tests (AI) — a test agent pulls the acceptance criteria straight from the ticket and writes the tests first, TDD-style.",
            "Plan implementation (AI) — a planning agent drafts an implementation plan with security and architecture context baked in.",
            "Review & iterate on the plan (human) — the engineer refines the plan and pair-programs with Claude to build it. (IDE/CLI)",
            "Security scan (AI) — SAST and DAST analysis catches vulnerabilities before merge.",
            "Code review (human) — an engineer validates logic, security and architectural fit, then sends feedback. (GitHub)",
            "Deploy & monitor (AI) — continuous deployment with AI-driven observability and bug fixes. (CI/CD · AI Ops)",
          ],
        },
        {
          heading: "So what does this actually buy us?",
          paragraphs: [
            "None of this removes the humans — it concentrates them where judgement actually matters: strategy, scope, the plan, and the final review. The agents handle the mechanical middle, and because everything they touch flows back into the shared context, the system gets a little sharper every time something ships.",
            "That’s the whole bet: keep the taste and the accountability human, and let the loop do the grind. 🔁",
          ],
        },
      ],
    },
  ],
  [
    "a-dummys-guide-to-leading-teams",
    {
      title: "A Dummy's Guide to Leading Teams",
      date: "2025",
      readingTime: "12 min read",
      lead: "I know what you’re thinking… and the answer is yes, an apprentice has just written a blogpost on leading teams. This is a quick review of the processes I’ve come across that I liked, their pros and cons, and how I attempted to wrangle my academy team into doing them. As you can already tell, this will be an emotional journey, so buckle up. 💺",
      sections: [
        {
          heading: "Pull Requests 🔗",
          paragraphs: [
            "PR’s are a valuable part of code quality assurance, a good way to train junior members of the team and give other team members insight into parts of the codebase they aren’t working on. But as with everything, it aint worth doing unless you’re doing it right. The aim of the game is to keep code as clean as possible, and we can do this by taking as much mental load from developers so they can focus on developing.",
            "One of the things that the Jira Bug Fixers and Platform 6 team found really difficult was flaky builds. We would put up a pr in an area we weren’t usually familiar with and would almost always find multiple builds failing. This made it very difficult to have confidence in our code or trust the pipelines that were there to help show us when our code had caused regressions. This meant basically re-running builds until they 🪄 magically passed sometimes… not good.",
            "Fast forward a few months and we’re starting to work on the Atlassian Frontend repo where they keep components for reuse in their products. We put up a pr and are greeted by an array of automations set up to speed the process up and make sure reviews were thorough. The git history was used to find who had written code in the same area and automatically add them as a reviewer. They had apps that would check your code for security concerns or code smells, and used Landkid to avoid merge issues by creating a merge queue and rebasing your branch on master automatically.",
            "Not all was smooth sailing in the land of Atlassian Frontend pr automation: every time it detected changes across multiple files, all of your reviews would be reset. This happened a lotttt and meant it was very common to have to badger people for re-reviews. A good idea in theory, but because the threshold was too small on how many changes needed a re-review, I feel like you could’ve been tempted to avoid answering NIT comments just so you didn’t have to badger people again.",
          ],
        },
        {
          heading: "PR Templates 📑",
          paragraphs: [
            "In our AI project we used PR templates, and it was a pretty big win — so something I wanted to take over to our academy project. When you go to put up a pr, there’s a template there for you to just fill out. This makes sure pr’s have enough detail in their description and that they’ve thought about everything they need beforehand, for example testing and security. One more thing for developers to not have to think about.",
          ],
        },
        {
          heading: "Don’t leave designers out 😢",
          paragraphs: [
            "Something that was slowing us down was having to set up meetings with the designers once or twice a week to run the product for them and let them check over our changes. The real issue was that designers were being left out of a crucial part of the review process and couldn’t easily, incrementally critique our front-end changes.",
            "The idea was to run preview deploys in our GitHub prs and add the designers to them. That meant we didn’t have to run the product on each branch every time, and they could ask for adjustments at the pr stage instead of a new ticket being created for lots of little design changes. The only trouble is that deploying a preview on every pr can cost a lotta dolla — so in the AI project we only ran the deploy-preview workflow when we added a label, which worked really well.",
          ],
        },
        {
          heading: "Stop sending me messages, GitHub 🚫",
          paragraphs: [
            "A lot of teams have GitHub set up to automatically post a PR link whenever the PR is opened, and again when it’s merged. Call me a bad person, but I rarely saw that message and immediately went to review. Instead of context-switching and breaking focus on my own ticket, I’d set aside time in the day to review prs. Those massive messages were also clogging up the channel, which meant I was missing important messages!",
            "How did we try to fix it? We used Slack Reminders to have Slackbot send us a message twice a day — once before standup (9am) and once at the end of the day (4pm) — with a link to our prs. These times were chosen so we could start and end the day reviewing, without jumping back and forth, and so the author could do a QA demo in standup. Stroll send these to a separate channel, which is a good idea to avoid cluttering the main team channel.",
          ],
        },
        {
          heading: "CI/CD 🚨",
          paragraphs: [
            "There’s a lot of argument about what should go in your CI, how it should be ordered, and what is actually of value. Here’s what we used, which ran every time someone pushed code.",
          ],
        },
        {
          heading: "Tests ✅",
          level: 3,
          paragraphs: [
            "Hopefully not much explanation needed: every time a dev pushed code it ran our entire test suite to make sure the changes hadn’t caused errors somewhere unexpected.",
          ],
        },
        {
          heading: "Linting 🧹",
          level: 3,
          paragraphs: ["We used ESLint to keep good code patterns."],
        },
        {
          heading: "Prettier 💅",
          level: 3,
          paragraphs: [
            "We used Prettier to make sure our code stayed consistent across the team.",
          ],
        },
        {
          heading: "Lighthouse CI 💡",
          level: 3,
          paragraphs: [
            "We used Lighthouse CI to review our pages and bring back a report with scores and recommendations for performance, accessibility, SEO, best practices and PWA. A really helpful tool that picks up on little things you forget about — although while a page was only half-built the scores were terrible, so we turned off the score assertions that would fail the build. Lighthouse took ~7 minutes across our 4 pages, so to save on GitHub build minutes we only ran it when we attached a label, after all comments were resolved. Apparently there’s a much easier way to do this with a Lighthouse CI GitHub App… oops.",
          ],
        },
        {
          heading: "Restrictions 🚦",
          level: 3,
          paragraphs: [
            "We used two merge restrictions: prs could only be merged when 2 or more people had approved, and when all builds had passed. This made sure code was thoroughly checked and that everyone got to see more of the codebase. On a team of 4 this slowed things slightly, but with set review times things still merged within a day — a worthwhile trade for the learning. We discussed CodeCov but decided against gating on it, as we didn’t want to write low-value tests just to move a metric. We also considered Snyk, but the free tier only gave 100 tests a month.",
          ],
        },
        {
          heading: "Teamwork = Dreamwork 🍻",
          paragraphs: [
            "The requirements for pair programming are minimal: two developers and a shared editor. From the “Ping Pong Pattern” to much looser forms, they all share two things: turn-taking and open communication. Pairing is a great way to learn or be onboarded — developers share domain knowledge and best practices, and fewer bugs reach production because errors are caught as they’re typed.",
            "A few things to bear in mind: it’s easier to burn out when pairing, so set timers and take breaks. It’s not something you can force. It’s highly social, so watch for pairs that clash. And it’s easy for a senior to take over and leave the junior doing nothing — which defeats the point. Pairs need patience with each other.",
          ],
        },
        {
          heading: "Ways of working doc 📄",
          level: 3,
          paragraphs: [
            "A set of guidelines outlining the processes, practices and principles the team follows. It serves as a reference for how work is organised, executed and delivered — typically covering the development process, roles and responsibilities, communication, tools and environments, coding standards, testing and QA, CI/CD, collaboration, retrospectives, security and compliance, and onboarding.",
          ],
        },
        {
          heading: "Leave-me-alone time 🏝",
          level: 3,
          paragraphs: [
            "I’d seen this on one of those “day in the life of an SE” videos and really liked it. As a team we mapped out two 2hr+ blocks of “dev time” where we don’t schedule meetings or anything that would make devs context switch. It let everyone spend that time uninterrupted and be much more productive.",
          ],
        },
        {
          heading: "Don’t-leave-me-alone time 🥹",
          level: 3,
          paragraphs: [
            "Working as a team is key to a team being happy and successful, so one office day a week was a good chance to get together in person. There was no pressure to come in — we didn’t want anyone to feel guilty if they couldn’t make it.",
          ],
        },
        {
          heading: "Standup is for more than just tickets 🤝",
          level: 3,
          paragraphs: [
            "Standup is a good opportunity for the team to get to know each other — a team that can talk about their lives and have a laugh in standup is a team that works well together. Don’t take it too seriously: get someone to tell a joke every morning (thanks Hannah McKee!), and don’t cut standup off 10 minutes early to kill the conversations that actually make your team more collaborative.",
          ],
        },
      ],
    },
  ],
  [
    "what-I-stole-from-atlassian",
    {
      title: "What I Stole from Atlassian 🥷",
      date: "2024",
      readingTime: "6 min read",
      lead: "There were a lot of Atlassian processes that, as a more junior developer, I appreciated and thought would be worth using again… so here’s a list of them.",
      sections: [
        {
          heading: "QA Kickoff",
          paragraphs: [
            "A QA Kickoff is when a developer first picks up a ticket and wants to discuss their approach with the rest of the team. It’s a chance to talk through anything that could be a potential hurdle, how you might test it, and how you want to implement the change. The team can then offer constructive criticism and suggestions for things that might work better.",
            "Atlassian guidance was that a ticket needs a QA Kickoff if you answer “yes” to any of: does this affect the app UI/UX? does this affect the data layer? might there be regressions? We were fairly lax about kickoffs, but they were encouraged and useful for gaining context in unfamiliar areas. For a junior dev who hasn’t seen a problem before, it’s a great way to steer them toward a good approach — and explain why it’s the best option — rather than just handing them instructions on a ticket.",
          ],
        },
        {
          heading: "QA Demo",
          paragraphs: [
            "After a feature is built, it gets demoed to the wider team before it goes up for pull request or merge. This helps catch anything missed from the agreed scope, and surfaces things that weren’t accounted for in the initial QA Kickoff.",
          ],
        },
        {
          heading: "Still in the notebook",
          paragraphs: [
            "There are a few more I’m still writing up — Continuous Retro, Quality Cards, PR Automations and Pair Programming. More on each of these soon.",
          ],
        },
      ],
    },
  ],
  [
    "culture-as-a-service",
    {
      title: "Culture as a Service (CAAS)",
      date: "2024",
      readingTime: "5 min read",
      lead: "On Thursday the 26th I was invited to speak on the panel of the first-ever NI Chamber of Commerce Future Workforce Summit in Titanic Belfast. There were some really interesting talks throughout the morning — the notes below aren’t my own opinions, just things worth extracting value from.",
      sections: [
        {
          heading: "Notes from the floor",
          list: [
            "Change culture from the top — “leading by example by leaving loudly.” Leadership needs to openly use the benefits and flexibility a company offers, because it shows employees they don’t need to feel bad for doing the same.",
            "Remote-first isn’t just for parents — it also means hiring from a much larger, more diverse group of people, for example those with a disability or who are older.",
            "Alchemy grew to 160 people in 5 years and put it down to mentoring and a flat structure — giving employees a mentor only ~1 year ahead of them helped retain staff and let them grow fast.",
            "Too much competition — structure the organisation so employees collaborate rather than compete for the next promotion. Supportive, collaborative teams are where the most growth comes from.",
            "We can’t grow if we don’t know what’s wrong — we’re too nice in 1-to-1s because mentors aren’t trained on how to give negative feedback. Train mentors to give it, and employees to take it and grow.",
            "Higher retention from being open about salary — one company found that posting salaries, so everyone knows they’re paid the same, led to a big increase in retention.",
            "People don’t leave jobs for more money — research shows most people leave because the work doesn’t feel like it has purpose. How do we make people feel their project matters?",
            "Mentoring training for any leaders — a recurring theme was people celebrating mentorship programmes for their leaders: “it has totally transformed our retention rate.”",
            "We can’t just train on technical skills — no organisation works with people who are all technically brilliant but have no soft skills. Training needs to cover soft skills, not just technical ones.",
          ],
        },
      ],
    },
  ],
]);
