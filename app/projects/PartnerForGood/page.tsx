import { ArticleLayout } from "@/components/article";

const PartnerForGood = () => {
  return (
    <ArticleLayout
      kicker="Case Study · 2025"
      title="Partner For Good"
      lead="An AI-powered marketplace that helps government suppliers build more impactful bids by matching them with the right social-value brokers — search ranked on relevance, not big names or fancy branding."
      meta={[
        { label: "Year", value: "2025" },
        { label: "Role", value: "Design & Build" },
      ]}
      links={[
        { label: "Live Site", href: "https://d3g0k4e3dbyc40.cloudfront.net/" },
      ]}
    >
      <h2>Background</h2>
      <p>
        As of the 5th of December 2024, to contribute to the UN&rsquo;s
        Sustainability Development Goals, the NI Government reviewed and revised
        The Procurement Act. This government policy aims to achieve social and
        environmental progress through government spending. Consequently, for
        service contracts exceeding £500,000, social value impact is considered
        one of the top 3 deciding factors for bids, alongside quality and cost
        (Department of Finance NI, 2024).
      </p>
      <p>
        It is therefore crucial that a supplier — a business who supply their
        services to the government, hoping to bid for a government contract —
        demonstrate a strong element of social value in their bid. This can be
        achieved by partnering with brokers: third sector organisations with the
        skills and experience to support businesses in delivering their social
        value requirements (Social Value NI, 2023). My aim is to build a website
        which helps suppliers create more impactful social value contributions
        by facilitating connections with relevant and appropriate brokers.
      </p>
      <p>
        Stakeholder feedback indicated that some brokers found the user
        experience of current solutions unsatisfactory, and that as small
        businesses, they were infrequently selected as a partner on the current
        platform. My AI search aims to help smaller brokers who reported they
        have never been contacted through the current platform to be found —
        because the search is based on relevance rather than big names or fancy
        branding.
      </p>

      <h2>Next.js</h2>
      <p>
        Next.js is an open-source framework built on top of React, popular for
        the high-performance sites it can create and fast build times powered by
        Rust-based JavaScript tooling (Vercel, 2024). Its file-based routing
        invalidates the need for react-router, and built-in tooling like
        Tailwind makes it easy to get started. The trade-off is a steep learning
        curve around its data-fetching paradigms and React Server Components.
      </p>
      <p>
        I chose Next.js because I needed a framework that would scale well with
        fast load times. Server-side rendering, static site generation and
        prefetching links let me ensure the site loaded data and pages quickly —
        important on the directory pages, where I could be loading large amounts
        of data at once.
      </p>

      <h2>SST</h2>
      <p>
        SST v3 is an infrastructure-as-code framework, completely rebuilt since
        v2 to leverage Pulumi and Terraform instead of CDK and CloudFormation
        (V, 2024). Instead of generating CloudFormation templates, SST now uses
        AWS SDK calls to create resources, which makes it much faster. I used
        SST to define all of my AWS resources and create different deployment
        stages.
      </p>
      <p>
        One advantage is that SST v3 is now cloud-agnostic: if AWS pricing
        became too expensive, I could move the infrastructure to Azure or GCP —
        a CDK approach would lock me to AWS. The reason I used SST specifically
        was OpenNext, an open-source tool that let me take advantage of Next.js
        features like server-side rendering while deploying on AWS services
        instead of Vercel (OpenNext, 2025). That gave me the flexibility of AWS,
        the novel features of Next.js, and a single dashboard for all my cloud
        resources.
      </p>

      <h2>AI Search with pgvector</h2>
      <p>
        pgvector is an open-source Postgres plugin that allows users to store
        vector data alongside traditional relational data, giving the ability to
        perform similarity searches directly in the table (pgvector, 2024). The
        biggest advantage is storing vector data as just another column rather
        than provisioning a separate vector store — reducing both cost and the
        number of API calls needed for a similarity search.
      </p>
      <p>
        pgvector was an easy choice here. I needed hybrid search — only running
        a similarity search on brokers whose status is &ldquo;active&rdquo; —
        and with pgvector I could filter on other columns and return the full
        row in a single SQL command and API call. To enable the extension on my
        deployed Postgres database, I created a tunnel into the VPC and ran the
        SQL directly. I set up a 1024-dimension vector column for high accuracy
        without excessive storage, then a function using a Hierarchical
        Navigable Small World (HNSW) algorithm for Approximate Nearest Neighbour
        search (Malkov and Yashunin, 2016).
      </p>
      <p>
        To search, I take a vector embedding and run a cosine similarity search,
        returning results above 10% similarity, ordered highest to lowest, top
        3. I chose cosine similarity specifically because it works best for
        natural language — measuring similarity without consideration of the
        length of text (magnitude). A user could enter a very short prompt that
        is very similar to a broker; magnitude-sensitive measures like Squared
        Euclidean would not consider these similar (Cardenas, 2023).
      </p>

      <h2>Security</h2>
      <p>
        I use GitHub&rsquo;s Dependabot to run Static Code Analysis scans weekly
        and open a PR to bump versions when a vulnerability is present —
        guarding against vulnerable and outdated components, A06 in the OWASP
        Top 10 (OWASP, 2021b). To prevent sensitive data leaks and A02
        Cryptographic Failures (OWASP, 2021a), I use AWS Secrets Manager and
        GitHub Action Secrets so secrets are never stored as plaintext in code
        or in the compiled application. If anyone searched the compiled app — or
        my GitHub were ever compromised — they couldn&rsquo;t use what they
        found to reach user data or my cloud services.
      </p>

      <h2>Accessibility</h2>
      <p>
        The application was built with a strong focus on accessibility, aiming
        to meet WCAG standards. I integrated accessibility checks into
        development with eslint-plugin-jsx-a11y, built into Next.js (Next.js,
        2025a), which flags issues like missing alt text, incorrect aria
        attributes, or inputs without labels as I code. I used semantic HTML
        (nav, main, header, footer, button) for proper structure that matters to
        screen readers, made sure every form control has an associated label,
        and implemented full keyboard navigation with a logical tab order and
        clear focus indicators — accomplishing Principle 2.1 of the WCAG
        standards (W3C, 2023).
      </p>
    </ArticleLayout>
  );
};

export default PartnerForGood;
