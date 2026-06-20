import { notFound } from "next/navigation";
import type { Metadata } from "next";

import { blogPosts } from "@/app/blogs/data";
import { ArticleLayout } from "@/components/article";

export function generateStaticParams() {
  return Array.from(blogPosts.keys()).map((title) => ({ title }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ title: string }>;
}): Promise<Metadata> {
  const { title } = await params;
  const post = blogPosts.get(title);
  if (!post) return { title: "Not found" };
  return { title: post.title, description: post.lead };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ title: string }>;
}) {
  const { title } = await params;
  const post = blogPosts.get(title);

  if (!post) notFound();

  return (
    <ArticleLayout
      kicker={`Field Note · ${post.date}`}
      title={post.title}
      lead={post.lead}
      backLabel="Writing"
      backHref="/#writing"
      meta={[
        { label: "Filed", value: post.date },
        { label: "Read", value: post.readingTime },
      ]}
    >
      {post.sections.map((section, i) => (
        <section key={section.heading ?? i}>
          {section.heading &&
            (section.level === 3 ? (
              <h3>{section.heading}</h3>
            ) : (
              <h2>{section.heading}</h2>
            ))}
          {section.paragraphs?.map((p, j) => (
            <p key={j}>{p}</p>
          ))}
          {section.list && (
            <ul>
              {section.list.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          )}
        </section>
      ))}
    </ArticleLayout>
  );
}
