import createMDX from '@next/mdx'
import rehypePrettyCode from 'rehype-pretty-code'
import remarkGfm from 'remark-gfm';
const nextConfig = {
  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({
  options: {
    remarkPlugins: [remarkGfm],
    rehypePlugins: [[rehypePrettyCode, { theme: 'github-dark', keepBackground: false }]],
  },
  extension: /\.mdx?$/,
});

/** @type {import('next').NextConfig} */
export default withMDX({
  ...nextConfig,
  pageExtensions: ['ts', 'tsx', 'md', 'mdx'],
});
