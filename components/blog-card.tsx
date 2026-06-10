import Link from "next/link";
import { Calendar } from "lucide-react";
import type { BlogPost } from "@/lib/blog";

export function BlogCard({ post }: { post: BlogPost }) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group block rounded-xl border border-border bg-bg-secondary p-5 hover:border-accent/40 hover:shadow-sm transition-all"
    >
      <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors">
        {post.title}
      </h3>

      {post.description && (
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {post.description}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs text-text-tertiary">
        <span className="flex items-center gap-1.5">
          <Calendar size={13} />
          {post.date}
        </span>
        {post.tags && post.tags.length > 0 && (
          <div className="flex gap-1.5">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full bg-accent-subtle px-2 py-0.5 text-accent"
              >
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </Link>
  );
}
