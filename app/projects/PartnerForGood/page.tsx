import Link from "next/link";

const PartnerForGood = () => {
  return (
    <div>
      <h1>Partner For Good</h1>
      <Link href="https://d3g0k4e3dbyc40.cloudfront.net/">Website</Link>
      <p>
        As of the 5th of December 2024, to contribute to the UN’s Sustainability
        Development Goals, the NI Government reviewed and revised The
        Procurement Act. This government policy aims to achieve social and
        environmental progress through government spending. Consequently, for
        service contracts exceeding £500,000, social value impact is considered
        one of the top 3 deciding factors for bids, alongside quality and cost
        (Department of Finance NI, 2024). Therefore, it is crucial that a
        supplier - a business who supply their services to the government,
        hoping to bid for a government contract – demonstrate a strong element
        of social value in their bid. Given that social value is now key to the
        success of a supplier’s bid for a government contract, it is imperative
        for suppliers to get their social value proposition right. This can be
        achieved by partnering with brokers: third sector organisations with the
        skills and experience to support businesses in delivering their social
        value requirements (Social Value NI, 2023). Therefore, ensuring that
        suppliers can find suitable brokers for their specific projects is
        essential. My aim is to build a website which will help suppliers create
        more impactful social value contributions by facilitating connections
        with relevant and appropriate brokers. Stakeholder feedback gathered in
        my AT2 report indicated that some brokers found the user experience of
        current solutions unsatisfactory, and that as small businesses, they
        were infrequently selected as a partner on the current platform. My AI
        search aims to help smaller brokers who reported they have never been
        contacted through the current platform to be found as the search will be
        based of relevance rather than big names or fancy branding.{" "}
      </p>
      <h2>NextJS</h2>
      <p>
        NextJs is an open-source framework built on top of React which is poplar
        due to the high- performance sites it can create, and fast build times
        powered by Rust-based JavaScript tooling (Vercel, 2024). As a web
        development framework, it can simplify development due to its file-based
        routing system invalidating the need for react-router and built in
        tooling like Tailwind which makes it easy to get started. However, there
        are a lot of specific NextJs concepts which you must understand in order
        to make the most of the extra features. For example, the data fetching
        paradigms and react server components which create a steep learning
        curve. The reason I decided to use NextJs in this project was due to the
        need for a framework which would scale well and have fast load times.
        Taking advantage of features like server- side rendering, static site
        generation and prefetching links allowed me to ensure the website would
        load data and pages quickly. This was important in our directory pages
        as I could be loading large amounts of data at once.
      </p>
      <h2>SST</h2>
      <p>
        SST v3 is an infrastructure as code (IaC) framework which has been
        completely rebuilt since v2 to leverage Pulumi and Terraform instead of
        CDK and CloudFormation (V, 2024). This means that instead of generating
        CloudFormation templates to deploy AWS resources, SST now uses AWS SDK
        calls to create resources which makes it much faster. I used SST to
        define all of my AWS resources and create different stages in
        deployment. One of the pros is that SST v3 is now cloud agnostic, this
        means that if I finished development and found that AWS pricing was too
        expensive, I could use SST to move our cloud infrastructure to Azure or
        Google Cloud Platform. An IaC framework like CDK would restrict us to
        using only AWS. One of the cons of SST is that because it is quite new,
        some resources are not available yet, and if they are unavailable you
        need to use Pulumi or Terraform to create them which can be confusing to
        mix these frameworks. However, because I was using lots of popular
        resources and nothing too obscure, I never came into this problem. The
        reason why I used SST v3 specifically for this project was because of
        OpenNext, an open-source tool which allowed me to take advantage of
        NextJs features like server-side rendering, whilst deploying on AWS
        services instead of Vercel (OpenNext, 2025). Usually, to get these
        features you have to deploy using Vercel, or forsake these features and
        use static web hosting in an S3 bucket in AWS. Fortunately, OpenNext
        makes it possible to have the flexibility of AWS and novel features of
        NextJs. I wanted to do this to give me the flexibility to use other AWS
        services within my project and have a single dashboard to see all my
        cloud resources. Using OpenNext, we can take advantage of the benefits
        of using NextJs while also deploying my website on AWS which makes it
        the perfect combination for this project especially since we need these
        extra features for their performance enhancements.{" "}
      </p>
      <h2>AI Search Using Pgvector</h2>
      <p>
        Pgvector is an open-source Postgres plugin which allows users to store
        vector data alongside traditional relational data, giving us the ability
        to perform similarity searches on data directly in our table (pgvector,
        2024). The biggest advantage of using pgvector is that I’m able to store
        vector data in my Postgres table as another column instead of needing to
        provision a separate vector store and therefore duplicating the number
        of api calls necessary when performing a similarity search. This reduces
        costs as we don’t need an extra table specifically for vector data. A
        possible disadvantage of using the pgvector plugin is that we may miss
        out on specialised features included in dedicated vector stores. Using
        pgvector was an easy choice for this project for many reasons. Firstly,
        I needed to perform hybrid searches, only performing a similarity search
        on brokers whose status is “active”. Using pgvector I was able to
        perform complex filtering on other values in the database and then
        return the full row when I found similar vectors, all using one SQL
        command and API call. This was fantastic as it reduced costs and
        complexity, and the easier I could make this specialised section of
        code, the easier it would be to debug and maintain in the future. In
        order to enable the pgvector extension in my deployed Postgres database
        in AWS, I had to create a tunnel to allow secure access to the Virtual
        Private Cloud, and directly run an SQL command. Then, to set up the
        vector column, I created a column of type “vector” with dimensions of
        size 1024, to give high accuracy without taking up as much storage as a
        larger vector would. Finally, to finish setting up the table, I created
        a function which would use a Hierarchical Navigable Small World (HNSW)
        algorithm for Approximate Nearest Neighbour (ANN) search, commonly used
        with high-dimensional vectors. It allows for fast similarity lookups
        without needing to compare a query vector against every single vector in
        the table (Malkov and Yashunin, 2016). To perform the similarity search,
        I would take a vector embedding and perform a cosine similarity search
        on the vectors in the database. Then I would return those which had a
        similarity of greater than 10% (due to the small number of brokers I had
        in my database), order these by highest to lowest and return the top 3.
        I specifically used a cosine similarity search because this works best
        for natural language processing, measuring similarity between items
        without consideration of the length of text, referred to as magnitude
        (Cardenas, 2023). This was especially valuable in our use case as a user
        could enter a prompt which is very short but very similar to a broker
        and other types of similarity search which take the magnitude into
        consideration, for example Squared Euclidean, would not consider these
        as similar.
      </p>
      <h2>Security</h2>
      <p>
        One of the ways I prevent vulnerabilities in my database is by using
        GitHub’s Dependabot to automatically run Static Code Analysis scans once
        a week and create a pr to bump the version if there is a security
        vulnerability present. Static Code Analysis scans will check if there
        are any vulnerabilities in my direct or indirect dependencies and
        prevent me from using vulnerable and outdated components, A06 in the
        OWASP Top 10 (OWASP, 2021b). Figure 14 - Automatic prs created by
        Dependabot To prevent sensitive data being leaked and “A02 Cryptographic
        Failures” (OWASP, 2021a), I use AWS Secrets Manager and GitHub Action
        Secrets. I use these services to hide environment variables like
        secrets, so they are never stored as plaintext in my GitHub code or
        compiled deployed application. This means that if anyone searched for
        secrets or keys in my compiled application or my GitHub account was ever
        hacked, they couldn’t use the secrets found to access user data or my
        cloud services.
      </p>
      <h2>Accessability</h2>
      <p>
        My application was developed with a strong focus on accessibility,
        aiming to meet Web Content Accessibility Guidelines (WCAG) standards and
        ensure ease of use for all users. To help me achieve this goal, I
        integrated accessibility checks directly into my development process. I
        used the eslint-plugin-jsx-a11y package which is built into Next.js
        (NextJs, 2025a). This tool automatically flags potential accessibility
        problems while I'm coding, for example, missing alt text for images,
        incorrect aria attributes, or form inputs without proper labels. This
        helped me catch and fix issues early on. A key part of making the
        application accessible was using semantic HTML elements correctly (like
        nav, main, header, footer, and button). These give the pages proper
        structure, which is important for screen readers. Additionally, I made
        sure form controls like inputs, selects, and buttons are accessible,
        ensuring every control has a correctly associated label. I also
        implemented full keyboard navigation support, making sure the tab order
        is logical and that there is a clear visual indicator showing which
        element is focused. This allows people to use the site without a mouse,
        therefore accomplishing Principle 2.1 from the WCAG standards (W3C,
        2023).
      </p>
    </div>
  );
};

export default PartnerForGood;
