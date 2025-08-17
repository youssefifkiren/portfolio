import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { compileMDX } from 'next-mdx-remote/rsc';
import { type Frontmatter } from '@/lib/types';
import { Card } from '@/components/ui/card';

export default async function BlogPage() {
  const postsDir = path.join(process.cwd(), 'content/blog');
  const postFiles = (await readdir(postsDir)).filter((file) => file.endsWith('.mdx'));

  // this is a memory draining solution walakin there is no alternative so far :v
  const posts = await Promise.all(
    postFiles.map(async (filename) => {
      const filePath = path.join(postsDir, filename);
      const fileContents = await readFile(filePath, 'utf-8');

      const { frontmatter } = await compileMDX<Frontmatter>({
        source: fileContents,
        options: { parseFrontmatter: true },
      });

      return {
        slug: filename.replace(/\.mdx$/, ''),
        title: frontmatter.title,
        date: frontmatter.date,
        description: frontmatter.description,
        tags: frontmatter.tags || [],
      };
    })
  );
  posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  return (
    <div className="container py-12">
      <h1 className="text-4xl font-bold text-teal-100 mb-8">My Blog</h1>
      
      <div className="grid gap-6">
        {posts.map((post) => (
          <Card key={post.slug} className="p-4 transition-transform hover:scale-[1.01] hover:shadow-lg bg-[#1e1e2e]/60 border border-teal-200 rounded-xl">
            <a href={`/blog/${post.slug}`}>
              <h2 className="text-2xl font-semibold text-teal-100 mb-2">{post.title}</h2>
              <p className="text-teal-50 mb-2">{post.description}</p>
              <div className="flex gap-2 text-sm text-teal-300">
                <time dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric',
                  })}
                </time>
                <span>•</span>
                <div className="flex gap-2">
                  {post.tags.map((tag: string) => (
                    <span key={tag} className="px-2 py-1 bg-teal-900/20 border border-teal-400/30 rounded-full text-xs text-teal-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </a>
          </Card>
        ))}
      </div>
    </div>
  );
}