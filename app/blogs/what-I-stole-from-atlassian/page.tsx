import { NextPage } from "next";

const Page: NextPage = () => {
  return (
    <div>
      <h1>What I Stole From Atlassian 🥷</h1>
      <p>
        There were a lot of Atlassian processes that as a more Junior developer
        I appreciated and thought would be worth using again… so here’s a list
        of them!
      </p>
      <h2>QA Kickoff</h2>
      <p>
        A QA Kickoff is when a developer first picks up a ticket and wants to
        discuss their approach with the rest of the team. This gives you the
        opportunity to discuss anything you think could be a potential hurdle,
        how you might test it and how you want to implement the change. The rest
        of the team can then give constructive criticism of your plan and
        suggestions for things that might work better. On one of the official
        Atlassian pages they specified that if any of the following questions
        were answered by a “yes” then your ticket need a QA Kickoff: If you’re
        wondering whether your project will require a QA Kickoff, consider the
        following: does this project affect the app UI/UX? does this project
        affect the data layer might there be any ripples (regressions)? In the
        Atlassian team, we were pretty lax about QA Kickoffs, but they were
        encouraged and something I thought was beneficial for gaining context
        when working in areas we were new to. Additionally, for a junior dev who
        may not know exactly how to approach a problem as they haven’t seen it
        before this can be helpful to work with them to steer them towards a
        correct approach and explain why this approach is the best option
        instead of seeing it on a ticket and just following instructions.
      </p>
      <h2>QA Demo</h2>
      <p>
        After the feature has been built, it needs to be Quality Demoed to the
        wider team before it can be put up for pull request / merged. This helps
        catch anything that may have been missed from the agreed scope and
        identify things that were missed in the initial QA Kickoff that need to
        be accounted for.
      </p>
      <h2>Continuous Retro</h2>
      <h2>Quality Cards</h2>
      <h2>PR Automatons</h2>
      <h2>Pair Programming</h2>
    </div>
  );
};

export default Page;
