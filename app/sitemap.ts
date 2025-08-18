import type { MetadataRoute } from "next";
import { getAllBlogPosts } from "@/lib/blog";
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = "https://youssefifkiren.dev";

    const posts = await getAllBlogPosts();
    const blogUrls: MetadataRoute.Sitemap = posts.map((post) => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: post.frontmatter.date,
        changeFrequency: 'weekly',
        priority: 0.8
    }));

    return [
        {
            url: "https://youssefifkiren.dev",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        },
        {
            url: `${baseUrl}/blog`,
            lastModified: new Date(),
            changeFrequency: 'weekly',
            priority: 0.9
        },
        ...blogUrls,

    ]
}