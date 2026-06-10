import Image from "next/image";
import Link from "next/link";
import { ArrowRight, MapPin, BookOpen, Users } from "lucide-react";
import { getUser, getRepos, getFeaturedRepos, getNormalRepos, getFallbackUser } from "@/lib/github";
import { getBlogPosts } from "@/lib/blog";
import { FeaturedRepo } from "@/components/featured-repo";
import { RepoCard } from "@/components/repo-card";
import { BlogCard } from "@/components/blog-card";

export default async function Home() {
  const [user, repos, posts] = await Promise.all([
    getUser().catch(() => null),
    getRepos().catch(() => []),
    Promise.resolve(getBlogPosts()),
  ]);

  const displayUser = user || getFallbackUser();
  const featured = getFeaturedRepos(repos);
  const normal = getNormalRepos(repos).slice(0, 6);

  return (
    <div className="mx-auto max-w-3xl px-6 pb-16">
      {/* Hero */}
      <section className="flex flex-col items-center pt-16 pb-12 text-center">
        <div className="relative">
          <Image
            src={displayUser.avatar_url}
            alt={displayUser.name || displayUser.login}
            width={96}
            height={96}
            priority
            className="rounded-full ring-4 ring-accent-subtle"
          />
          <div className="absolute -bottom-1 -right-1 h-7 w-7 rounded-full bg-accent flex items-center justify-center">
            <svg width={14} height={14} viewBox="0 0 24 24" fill="currentColor" className="text-white">
              <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
            </svg>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-bold tracking-tight text-text-primary">
          {displayUser.name || displayUser.login}
        </h1>
        <p className="mt-2 text-lg text-text-secondary max-w-md">
          {displayUser.bio}
        </p>

        <div className="mt-5 flex items-center gap-5 text-sm text-text-tertiary">
          <span className="flex items-center gap-1.5">
            <MapPin size={14} />
            GuangZhou, China
          </span>
          <span className="flex items-center gap-1.5">
            <BookOpen size={14} />
            {displayUser.public_repos} repos
          </span>
          <span className="flex items-center gap-1.5">
            <Users size={14} />
            {displayUser.followers} followers
          </span>
        </div>
      </section>

      {/* Featured Repos */}
      {featured.length > 0 && (
        <section className="mt-4">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-primary">
              精选项目
            </h2>
            <Link
              href="/projects"
              className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((repo) => (
              <FeaturedRepo key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* All Repos */}
      {normal.length > 0 && (
        <section className="mt-14">
          <h2 className="text-lg font-semibold text-text-primary mb-6">
            更多项目
          </h2>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {normal.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {/* Recent Blog Posts */}
      {posts.length > 0 && (
        <section className="mt-14">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-semibold text-text-primary">
              最新文章
            </h2>
            <Link
              href="/blog"
              className="flex items-center gap-1 text-sm text-accent hover:text-accent-hover transition-colors"
            >
              查看全部 <ArrowRight size={14} />
            </Link>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {posts.slice(0, 4).map((post) => (
              <BlogCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
