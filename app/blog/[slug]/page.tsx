import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Calendar, Tag } from "lucide-react";
import { getBlogPost, getBlogPosts } from "@/lib/blog";
import { MarkdownRenderer } from "@/components/markdown-renderer";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const posts = getBlogPosts();
  return posts.map((post) => ({ slug: post.slug }));
}

export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);
  if (!post) return { title: "文章未找到" };
  return {
    title: post.title,
    description: post.description,
  };
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getBlogPost(slug);

  if (!post) {
    notFound();
  }

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <Link
        href="/blog"
        className="inline-flex items-center gap-1.5 text-sm text-text-tertiary hover:text-accent transition-colors mb-8"
      >
        <ArrowLeft size={15} />
        返回博客列表
      </Link>

      <article>
        <header className="mb-10">
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-text-primary leading-tight">
            {post.title}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-4 text-sm text-text-tertiary">
            <span className="flex items-center gap-1.5">
              <Calendar size={14} />
              {post.date}
            </span>
            {post.tags && post.tags.length > 0 && (
              <span className="flex items-center gap-2">
                <Tag size={14} />
                {post.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-accent-subtle px-2 py-0.5 text-xs text-accent"
                  >
                    {tag}
                  </span>
                ))}
              </span>
            )}
          </div>
        </header>

        <div className="blog-content">
          <MarkdownRenderer content={post.content} />
        </div>
      </article>
    </div>
  );
}
