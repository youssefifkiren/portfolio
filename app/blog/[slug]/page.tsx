import { Metadata } from 'next';
import { getBlogPost } from '@/lib/blog';

type pageProps = {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: pageProps): Promise<Metadata> {
  const { slug } = await params;
  const {frontmatter} = await getBlogPost(slug);

  return {
    title: frontmatter.title,
    description: frontmatter.description,
  }
}

export default async function BlogPostPage({ params }: pageProps) {
  const { slug } = await params;
  const {frontmatter, content} = await getBlogPost(slug);




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