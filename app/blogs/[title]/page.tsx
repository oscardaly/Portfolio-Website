"use server";

import {blogPosts} from "@/app/blogs/data";

// export default async function BlogPostPage({
//                                             params,
//                                         }: {
//     params: Promise<{ id: string }>;
// }): Promise<JSX.Element> {
//     const blogPostId = (await params).id;
export default async function BlogPostPage() {
    const blogPostId: string = "a-dummys-guide-to-leading-teams"; // Replace with dynamic params
    const blogPost = blogPosts.get(blogPostId);

    if (!blogPost) {
        return <div className="max-w-3xl mx-auto px-4 py-8">Blog post not found. - {blogPostId}</div>;
    }

    return (
        <div className="max-w-3xl mx-auto px-4 py-8">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">{blogPost.title}</h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
                {blogPost.content}
            </p>
        </div>
    );
};