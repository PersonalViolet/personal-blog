import { Star, GitFork, ExternalLink, Sparkles } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

export function FeaturedRepo({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative block overflow-hidden rounded-2xl border border-border bg-bg-secondary p-6 hover:border-accent/50 transition-all hover:shadow-md"
    >
      <div className="absolute top-0 right-0 h-24 w-24 translate-x-8 -translate-y-8 rounded-full bg-accent/5 group-hover:bg-accent/10 transition-colors" />

      <div className="relative">
        <div className="flex items-center gap-2 mb-3">
          <Sparkles size={16} className="text-accent" />
          <span className="text-xs font-medium uppercase tracking-wider text-accent">
            精选项目
          </span>
        </div>

        <h3 className="text-xl font-bold text-text-primary group-hover:text-accent transition-colors">
          {repo.name}
        </h3>

        <p className="mt-3 text-text-secondary leading-relaxed">
          {repo.description || "暂无简介"}
        </p>

        {repo.topics.length > 0 && (
          <div className="mt-4 flex flex-wrap gap-2">
            {repo.topics.map((topic) => (
              <span
                key={topic}
                className="rounded-full bg-accent-subtle px-3 py-1 text-xs font-medium text-accent"
              >
                {topic}
              </span>
            ))}
          </div>
        )}

        <div className="mt-5 flex items-center justify-between">
          <div className="flex items-center gap-4 text-sm text-text-tertiary">
            {repo.language && (
              <span className="flex items-center gap-1.5">
                <span className="h-3 w-3 rounded-full bg-accent" />
                {repo.language}
              </span>
            )}
            <span className="flex items-center gap-1.5">
              <Star size={15} />
              {repo.stargazers_count}
            </span>
            <span className="flex items-center gap-1.5">
              <GitFork size={15} />
              {repo.forks_count}
            </span>
          </div>

          <ExternalLink
            size={16}
            className="text-text-tertiary opacity-0 group-hover:opacity-100 transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </div>
      </div>
    </a>
  );
}
