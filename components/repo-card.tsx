import { Star, GitFork, ExternalLink } from "lucide-react";
import type { GitHubRepo } from "@/lib/github";

export function RepoCard({ repo }: { repo: GitHubRepo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block rounded-xl border border-border bg-bg-secondary p-5 hover:border-accent/40 hover:shadow-sm transition-all"
    >
      <div className="flex items-start justify-between gap-2">
        <h3 className="font-semibold text-text-primary group-hover:text-accent transition-colors truncate">
          {repo.name}
        </h3>
        <ExternalLink size={14} className="mt-0.5 shrink-0 text-text-tertiary opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>

      {repo.description && (
        <p className="mt-2 text-sm text-text-secondary line-clamp-2">
          {repo.description}
        </p>
      )}

      <div className="mt-4 flex items-center gap-4 text-xs text-text-tertiary">
        {repo.language && (
          <span className="flex items-center gap-1">
            <span className="h-2.5 w-2.5 rounded-full bg-accent" />
            {repo.language}
          </span>
        )}
        <span className="flex items-center gap-1">
          <Star size={13} />
          {repo.stargazers_count}
        </span>
        <span className="flex items-center gap-1">
          <GitFork size={13} />
          {repo.forks_count}
        </span>
      </div>
    </a>
  );
}
