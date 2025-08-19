import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div>
      <h1>A Dummy's Guide to Leading Teams</h1>
      <p>
        I know what you’re thinking… and the answer is yes, an apprentice has
        just written a blogpost on leading teams… what a d***. This blog post is
        meant to be a quick review of the processes I’ve come across that I
        liked, their pros and cons and how I attempted to wrangle my academy
        team into doing them. As you can already tell, this will be an emotional
        journey, so buckle up. 💺
      </p>
      <h2>Pull Requests 🔗</h2>
      <p>
        PR’s are a valuable part of code quality assurance, a good way to train
        junior members of the team and give other team members insight into
        parts of the codebase they aren’t working on. But as with everything, it
        aint worth doing unless you’re doing it right…. The aim of the game is
        to keep code as clean as possible and we can do this by taking as much
        mental load from developers so they can focus on developing. One of the
        things that the Jira Bug Fixers and Platform 6 team found really
        difficult was flaky builds. We would put up a pr in an area we weren’t
        usually familiar with and would almost always find multiple builds
        failing. This made it very difficult to have confidence in our code or
        trust the pipelines that were there to help show us when our code had
        caused regressions. This meant basically re-running builds until they 🪄
        magically passed sometimes… not good. However, fast forward a few months
        and we’re starting to work on the Atlassian Frontend repo where they
        keep components for reuse in their products. We put up a pr and are
        greeted by an array of different automations set up on the pr to speed
        the process up and make sure reviews were thorough. For example, the git
        history was used to find who had written code in the same area and
        automatically add them as a reviewer. Additionally, they had apps that
        would check your code for security concerns or code smells if it wasn’t
        written to a high enough standard which helped keep the code secure and
        clean. Or using Landkid to avoid issues with merging pull requests as it
        created a merge queue and rebased your branch on master automatically.
        Although not all was smooth sailing in the land of Atlassian Frontend pr
        automation, as every time it detected changes across multiple files, all
        of your reviews would be reset. This happened a lotttt and meant that it
        was very common to have to badger people for re-reviews. Although this
        was a good idea in theory, because the threshold was too small on how
        many changes needed a re-review, I feel like you could’ve been tempted
        to avoid answering any NIT comments so you didn’t have to badger people
        again for re-reviews.
      </p>
      <h2>PR Templates 📑</h2>
      <p>
        In our AI project something we used was PR templates and it was a pretty
        big win for me so something I wanted to take over to our academy
        project. Basically, when you go to put up a pr, there’s a template there
        for you to just fill out. This makes sure pr’s have enough detail in
        their description and that they’ve thought about everything they need
        before putting the pr up, for example, testing and security. One more
        thing for developers to not have to think about.
      </p>
      <h2>Don’t leave designers out 😢</h2>
      <p>
        Something I found that was slowing us down was having to set up meetings
        with the designers once or twice a week to run the product for them and
        let them check over our changes… boo designers! 👎 Only joking don’t
        worry! The real issue was that the designers were being left out on a
        crucial part of the development/review process and couldn’t easily
        incrementally critique our front-end changes. A lot of big words, but
        what does this mean and how do we actually fix it? Well, the idea was
        that we should have preview deploys running in our github prs and add
        the designers to these prs. This means that we didn’t have to run the
        product on each branch every time we wanted the designers to check our
        work, and it means they can ask for adjustments at the pr stage instead
        of a new ticket having to be created for lots of little design changes.
        Sounds great in practice, the only trouble with this is that deploying a
        preview on every pr can cost a lotta dolla. To fix this in the AI
        project we would only run the deploy preview workflow when we added a
        label and this seemed to work really well so you weren’t re-deploying
        every time you addressed a nit comment.
      </p>
      <h2>Stop sending me messages Github 🚫</h2>
      <p>
        Something a lot of teams do is have Github set up to automatically send
        in the link for a PR whenever the PR is opened and then also to send in
        a link whenever the PR is merged. Call me a bad person… but I rarely saw
        that message come in and open the pr and review immediately. Instead of
        context-switching and breaking my focus on the work I was doing on my
        ticket, I’d save time in the day to go and review these prs when I was
        taking a break from my ticket. As well as breaking focus, I found that
        these massive messages were clogging up the channel (because my teams
        were always so productive there were loads of them 💪) which meant that
        I was missing important messages! So how did we try to fix this? Well,
        we used Slack Reminders to have Slackbot send us a message twice a day,
        once before standup (9am) and once at the end of the day (4pm), with a
        link to our prs to remind us to take the time to put in reviews. These
        times were specifically chosen so we could start and end the day
        reviewing prs and didn’t have to jump back and forth between things and
        to allow the author of the pr to do a QA demo in standup/EOD to explain
        things. In fairness, I'm pretty sure Stroll has it set up that these
        messages are sent to a different channel which is a good idea to stop
        cluttering up your main team channel, but I’m also not sure if I would
        still ignore the messages and just set the time aside in my day. Maybe
        this is just a me problem though and it doesn’t make a difference!
      </p>
      <h2>CI/CD 🚨</h2>
      <p>
        There’s a lot of argument about what should go in your CI, how it should
        be ordered and what is actually of value and what isn’t. Well, below is
        what we used for our CI which would run every time someone pushed code…
      </p>
      <h3>Tests ✅</h3>
      <p>
        Hopefully not much explanation needed here, every time a dev pushed code
        it would run our entire test suite to make sure the changes hadn’t
        caused any errors somewhere unexpected.
      </p>
      <h3>Linting 🧹</h3>
      <p>
        For our linter, we used ESLint to make sure we kept good code patterns.
      </p>
      <h3>Prettier 💅</h3>
      <p>
        We used prettier to make sure our code stayed consistent across the
        team.
      </p>
      <h3>Lighthouse CI 💡🏠</h3>
      <p>
        We used Lighthouse CI in our Github workflow to review our pages and
        bring back a report with scores and recommendations on how to improve
        the pages' performance, accessibility, SEO, best practices and PWA. This
        was a really helpful tool that would pick up on little things you’d
        forget about, however, whenever the website was only being built the
        scores would be terrible as pages were only half complete. Furthermore,
        we decided to turn off the score assertions which would check if our
        website pages were a high enough score in each category and fail the
        build if they weren’t. Additionally, Lighthouse would take around 7
        minutes to run on our 4 pages so to save Instil from paying massive
        money on Github build minutes we decided to only run this build when we
        attached a label to the pr. This meant that we would only run the build
        on frontend changes and after all comments had been resolved.
        Apparently, there is a much easier way to do this using a Lighthouse CI
        GitHub App, oops…
      </p>
      <h3>Restrictions 🚦</h3>
      <p>
        PR restrictions aren’t new to Instil, they’re used across teams in the
        company. The 2 types of restrictions that we decided to use were that
        prs could only be merged when; 2 or more people have approved the pr and
        when all the builds have passed. This was to make sure the code had been
        thoroughly checked and so that everyone was getting to see more of the
        codebase and learning from the other devs. On a team of 4, this
        definitely slowed things down slightly but with our set times to review
        prs, things were still getting merged within 1 day and I think for the
        learning this was a worthwhile tradeoff. There are a lot more pr
        restrictions we could have used but didn't, for example, we discussed
        adding CodeCov as a restriction but decided against it as even though we
        wanted code coverage to be high, we didn’t want to create tests which
        weren’t valuable just to get a metric higher. Another option was to use
        Snyk, a code security analysis tool which will find possible
        vulnerabilities in your code and leave a comment to highlight these in
        your pr. However, on the free package we only got 100 tests per month so
        decided against it.
      </p>
      <h2>Teamwork = Dreamwork 🍻</h2>
      <h3>Pairing 👥</h3>
      <p>
        The requirements for pair programming are minimal: two developers and a
        shared command line or code editor. With these basic ingredients in
        place, there are many ways to pair program, from the “Ping Pong Pattern”
        to much less structured forms, they all have two critical things in
        common: turn-taking and open communication. Pair programming is a great
        way to learn or be onboarded on a new project, developers learn domain
        knowledge from each other and general best practices. Therefore, fewer
        bugs get through to production as errors are caught as they're being
        typed, this level of continuous code reviews means code is more thought
        out. However, pair programming should be a programming out loud process,
        where the pair is verbally detailing what it is doing and this can be
        difficult. Additionally, the pair should be equally engaged otherwise it
        will be draining to stay focused. A couple of things to bear in mind
        when pairing: It’s a lot easier to burn out when pairing so make sure to
        set timers and take breaks. It’s not something that you can force your
        team to do. It’s highly social and interactive, so you should be able to
        detect pairs that may have problems with each other, such as clashing
        personalities. It’s easy for a senior dev to completely take over and
        leave the junior dev doing nothing, but this goes against the whole
        point of pairing, pairs need to have patience with each other.
      </p>
      <h3>Ways of working doc 📄</h3>
      <p>
        This doc is a set of guidelines that outline the processes, practices,
        and principles the team follows to achieve its goals efficiently and
        effectively. This document serves as a reference for team members to
        understand how work is organised, executed, and delivered within the
        team. These typically include: Development Process, Roles and
        Responsibilities, Communication Guidelines, Development Tools and
        Environments, Coding Standards and Best Practices, Testing and Quality
        Assurance, Continuous Integration/Continuous Deployment (CI/CD),
        Workflow and Collaboration, Feedback and Retrospectives, Security and
        Compliance, Onboarding and Training
      </p>
      <h3>Leave me alone time 🏝</h3>
      <p>
        This was something new to me but I’d seen it on one of those… “day in
        the life of a SE at TikTok in Chicago” videos on YouTube and I really
        liked the idea. As a team we mapped out times in our calendar for “dev
        time”, this is 2 x 2hr+ periods where we don’t put in meetings or
        anything to distract devs or make them context switch. It allowed
        everyone to spend this time uninterrupted and be much more productive in
        that time.{" "}
      </p>
      <h3>Don’t leave me alone time 🥹</h3>
      <p>
        Working as a team is key to the team being happy and successful.
        Therefore, we thought that 1 office day a week would be a good
        opportunity to get together and work as a team in person. There was no
        pressure for team members to come in as we didn’t want the team to feel
        guilty if they couldn't make it.
      </p>
      <h3>Standup is for more than just tickets 🤝</h3>
      <p>
        Similar to the office day once a week, standup is a good opportunity for
        the team to get to know each other, a team that can talk about their
        lives and have a laugh in standup is a team that will work well
        together. Don’t take it too seriously, for example, get someone to tell
        a joke every morning in standup - thanks Hannah McKee! And don’t cut
        standup off 10 minutes early to stop those conversations which will make
        your team work better together and be more collaborative. The Bose team
        only do standup twice a week which is something I really like but I also
        like the opportunity to catch up with the team every day since we
        otherwise don’t see each other when we’re remote.
      </p>
    </div>
  );
};

export default Page;
