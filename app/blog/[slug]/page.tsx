import { Metadata } from 'next';
import { readFile } from 'node:fs/promises';
import path from 'node:path';
import { type Frontmatter } from '@/lib/types';
import { CodeBlock } from '@/components/ui/code-block';
import { compileMDX } from 'next-mdx-remote/rsc';
import remarkGfm from 'remark-gfm';
import rehypePrettyCode from 'rehype-pretty-code';
import MdImg from '@/components/blog/MdImg';

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  const postPath = path.join(process.cwd(), 'content/blog', `${params.slug}.mdx`);
  const mdxSource = await readFile(postPath, 'utf-8');

  // const frontmatter = {} as Frontmatter;
  const { frontmatter, content } = await compileMDX<Frontmatter>({
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



  return (
    <div className="container py-12 prose prose-invert max-w-4xl">
      <h1 className="text-4xl font-bold mb-2">{frontmatter.title}</h1>
      <div className="flex gap-4 text-muted-foreground mb-8">
        <time dateTime={frontmatter.date}>
          {new Date(frontmatter.date).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })}
        </time>
        <div className="flex gap-2">
          {frontmatter.tags?.map((tag: string) => (
            <span key={tag} className="px-2 py-1 bg-teal-900/20 border border-teal-400/30 rounded-full text-xs text-teal-300">
              {tag}
            </span>
          ))}
        </div>
      </div>
      {content}
      
    </div>
  );
}