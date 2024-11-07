import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://youssefifkiren.dev",
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1
        }
    ]
}