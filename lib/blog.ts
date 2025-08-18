import { cache } from 'react';
import path from 'node:path';
import { readdir, readFile } from 'node:fs/promises'
import { compileMDX } from 'next-mdx-remote/rsc';
import { Frontmatter } from './types';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import { CodeBlock } from '@/components/ui/code-block';
import MdImg from '@/components/blog/MdImg';

export async function getBlogPostUncached(slug: string) {
    const postPath = path.join(process.cwd(), 'content/blog', `${slug}.mdx`);
    const mdxSource = await readFile(postPath, 'utf-8');
    const compiled = await compileMDX<Frontmatter>({
    source: mdxSource,
    options: {
        parseFrontmatter: true,
        mdxOptions: {
        remarkPlugins: [remarkGfm],
        rehypePlugins: [[rehypePrettyCode, { theme: "github-dark", keepBackground: false }]],
        }
    },
    components: {
        pre: CodeBlock,
        MdImg,
    }
    });
    return compiled;
}

export const getBlogPost = cache(getBlogPostUncached);

export const getAllBlogPosts = async () => {
    const postsDir = path.join(process.cwd(), 'content/blog');
    const files = await readdir(postsDir);
    const posts = files.map(async (f) => {
        const slug = f.replace('.mdx', '');
        const { frontmatter } = await getBlogPostUncached(slug);
        return {
            slug,
            frontmatter: {
                ...frontmatter,
                date: new Date(frontmatter.date).toISOString(),
            } as Frontmatter
        };
    });
    return Promise.all(posts);
}