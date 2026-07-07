import { ArticleLayout } from "@/components/article";

const PRReviewAgent = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2026"
      title="Leo — PR Review Agent"
      lead="An agentic pull-request reviewer that reviews style, architecture and security in a single pass, cites its sources, teaches instead of gating the merge — and opens a PR against its own knowledge base when you tell it it's wrong. Built on LangGraph, LangChain and LangSmith."
      meta={[
        { label: "Year", value: "2026" },
        { label: "Role", value: "Design & Build" },
      ]}
      links={[
        {
          label: "Source",
          href: "https://github.com/oscardaly/pr-review-agent",
        },
      ]}
    >
      <h2>Background</h2>
      <p>
        Leo &mdash; named after Leonardo da Vinci, because he sees everything
        &mdash; is a PR review agent designed to plausibly live inside a real
        engineering team. Give him a diff and he reviews it across several lenses
        in a single pass: code style, clean architecture, security, and whether
        the user documentation went stale. Every comment explains <em>why</em>,
        cites an official source, and ends with a takeaway &mdash; the
        transferable rule the author keeps after this PR. Like a good mentor, he
        would rather teach you something than gate your merge.
      </p>

      <h2>A graph, not a prompt</h2>
      <p>
        Leo is built as a LangGraph state machine rather than one mega-prompt. The
        graph gives explicit control flow and shared state across discrete nodes
        &mdash; ingest, redact, the review passes, validation, publish &mdash; so
        each concern is isolated, testable and observable. LangChain supplies the
        models, tools and retrieval; LangSmith traces every run and backs the
        evaluation suite. The whole graph also runs offline against a scripted
        model, so a full test suite exercises every node without an API key or a
        network call.
      </p>

      <h2>Reviewing across dimensions</h2>
      <p>
        Style and architecture are reviewed with retrieval-augmented generation
        against a markdown knowledge base of clean-code and design principles, so
        Leo&rsquo;s opinions are grounded in a curated rulebook rather than the
        model&rsquo;s whims. Security is reviewed against the OWASP Top 10 &mdash;
        and, for diffs that build on LLMs, the OWASP Top 10 for LLM Applications
        (prompt injection, excessive agency, improper output handling) &mdash;
        seeded by a Semgrep run so static findings and model reasoning reinforce
        each other. His comments cite the official docs &mdash; TypeScript,
        Next.js, OWASP &mdash; so the author can follow the reference.
      </p>

      <h2>Safety and self-restraint</h2>
      <p>
        Because Leo reads real diffs, secrets and PII are redacted before any
        model or trace ever sees the code. And because an over-confident reviewer
        is worse than none, every draft comment is sent through a validator
        subagent before it is published &mdash; a second opinion that culls the
        noise. Suggested fixes are written under a vendored skill that favours the
        laziest change that works, never at the cost of validation or security.
      </p>

      <h2>Teaching, and learning from being wrong</h2>
      <p>
        The part I am proudest of is the feedback loop. Every comment is framed to
        teach rather than police, ending in a takeaway the author keeps. And when
        Leo gets it wrong, you tell him so &mdash; reply &ldquo;you&rsquo;re
        wrong&rdquo; to a comment and he opens a pull request against his own
        knowledge base recording the lesson. The reviewer improves the same way
        the people he reviews do: by being corrected, and writing the rule down.
      </p>
    </ArticleLayout>
  );
};

export default PRReviewAgent;
