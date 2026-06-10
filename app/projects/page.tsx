import { getRepos, getFeaturedRepos, getNormalRepos, getFallbackRepos } from "@/lib/github";
import { FeaturedRepo } from "@/components/featured-repo";
import { RepoCard } from "@/components/repo-card";

export const metadata = {
  title: "项目",
};

export default async function ProjectsPage() {
  const repos = (await getRepos().catch(() => [])) || [];

  const displayRepos = repos.length > 0 ? repos : getFallbackRepos();
  const featured = getFeaturedRepos(displayRepos);
  const normal = getNormalRepos(displayRepos);

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6 py-8 sm:py-12">
      <h1 className="text-2xl font-bold text-text-primary">项目</h1>
      <p className="mt-2 text-text-secondary">
        精选开源项目与作品展示。
      </p>

      {featured.length > 0 && (
        <section className="mt-8">
          <h2 className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
            精选项目
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {featured.map((repo) => (
              <FeaturedRepo key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      )}

      {normal.length > 0 && (
        <section className="mt-12">
          <h2 className="text-sm font-medium uppercase tracking-wider text-accent mb-4">
            全部项目
          </h2>
          <div className="grid gap-4 sm:grid-cols-2">
            {normal.map((repo) => (
              <RepoCard key={repo.id} repo={repo} />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
