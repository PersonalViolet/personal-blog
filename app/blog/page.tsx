import Link from "next/link";
import { getBlogPosts } from "@/lib/blog";
import { BlogCard } from "@/components/blog-card";

export const metadata = {
  title: "博客",
};

export default function BlogPage() {
  const posts = getBlogPosts();

  if (posts.length === 0) {
    return (
      <div className="mx-auto max-w-3xl px-6 py-20 text-center">
        <h1 className="text-2xl font-bold text-text-primary">博客</h1>
        <p className="mt-4 text-text-secondary">
          暂无文章。新的文章将会陆续发布。
        </p>
        <Link
          href="/"
          className="mt-6 inline-flex items-center gap-2 text-sm text-accent hover:text-accent-hover transition-colors"
        >
          返回首页
        </Link>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-6 py-12">
      <h1 className="text-2xl font-bold text-text-primary">博客</h1>
      <p className="mt-2 text-text-secondary">
        技术思考与学习记录。
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  );
}
