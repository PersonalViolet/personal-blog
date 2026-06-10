import { describe, it, expect } from "vitest";
import { isFeatured, getFeaturedRepos, getNormalRepos, getFallbackUser, getFallbackRepos } from "@/lib/github";
import type { GitHubRepo } from "@/lib/github";

const mockRepos: GitHubRepo[] = [
  {
    id: 1,
    name: "nexus_cli",
    full_name: "PersonalViolet/nexus_cli",
    description: "Extensible CLI",
    html_url: "https://github.com/PersonalViolet/nexus_cli",
    language: "Python",
    stargazers_count: 1,
    forks_count: 0,
    topics: ["cli"],
    updated_at: "2026-05-01T00:00:00Z",
    created_at: "2026-04-01T00:00:00Z",
  },
  {
    id: 2,
    name: "random-project",
    full_name: "PersonalViolet/random-project",
    description: "Just a test",
    html_url: "https://github.com/PersonalViolet/random-project",
    language: "JavaScript",
    stargazers_count: 0,
    forks_count: 0,
    topics: [],
    updated_at: "2026-05-01T00:00:00Z",
    created_at: "2026-04-01T00:00:00Z",
  },
];

describe("GitHub utilities", () => {
  it("should identify featured repos correctly", () => {
    expect(isFeatured(mockRepos[0])).toBe(true);
    expect(isFeatured(mockRepos[1])).toBe(false);
  });

  it("should filter featured repos", () => {
    const featured = getFeaturedRepos(mockRepos);
    expect(featured).toHaveLength(1);
    expect(featured[0].name).toBe("nexus_cli");
  });

  it("should filter normal repos", () => {
    const normal = getNormalRepos(mockRepos);
    expect(normal).toHaveLength(1);
    expect(normal[0].name).toBe("random-project");
  });

  it("should provide fallback user data", () => {
    const user = getFallbackUser();
    expect(user.login).toBe("PersonalViolet");
    expect(user.avatar_url).toBeDefined();
    expect(user.bio).toBeDefined();
  });

  it("should provide fallback repos", () => {
    const repos = getFallbackRepos();
    expect(repos.length).toBeGreaterThan(0);
    repos.forEach((repo) => {
      expect(repo.name).toBeTruthy();
    });
  });
});
