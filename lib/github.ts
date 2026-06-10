export interface GitHubRepo {
  id: number;
  name: string;
  full_name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  topics: string[];
  updated_at: string;
  created_at: string;
}

export interface GitHubUser {
  login: string;
  name: string | null;
  avatar_url: string;
  bio: string | null;
  public_repos: number;
  followers: number;
  following: number;
  html_url: string;
}

const GITHUB_API = "https://api.github.com";
const USERNAME = "PersonalViolet";

// Featured repos - highlighted on homepage
const FEATURED_REPOS = new Set([
  "nexus_cli",
  "OSTI",
  "violet-agents",
  "Python-Encryption-Tool",
]);

async function githubFetch<T>(path: string): Promise<T | null> {
  try {
    const res = await fetch(`${GITHUB_API}${path}`, {
      headers: {
        Accept: "application/vnd.github.v3+json",
        ...(process.env.GITHUB_TOKEN
          ? { Authorization: `Bearer ${process.env.GITHUB_TOKEN}` }
          : {}),
      },
      next: { revalidate: 3600 },
    });

    if (!res.ok) return null;
    return res.json();
  } catch {
    return null;
  }
}

export async function getUser(): Promise<GitHubUser | null> {
  return githubFetch<GitHubUser>(`/users/${USERNAME}`);
}

export async function getRepos(): Promise<GitHubRepo[]> {
  const repos = await githubFetch<GitHubRepo[]>(
    `/users/${USERNAME}/repos?sort=updated&per_page=30&type=owner`
  );
  return repos || [];
}

export function isFeatured(repo: GitHubRepo): boolean {
  return FEATURED_REPOS.has(repo.name);
}

export function getFeaturedRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.filter((r) => FEATURED_REPOS.has(r.name));
}

export function getNormalRepos(repos: GitHubRepo[]): GitHubRepo[] {
  return repos.filter((r) => !FEATURED_REPOS.has(r.name));
}

// Fallback data for when API is unavailable
export function getFallbackUser(): GitHubUser {
  return {
    login: "PersonalViolet",
    name: "VIOLET",
    avatar_url: "https://avatars.githubusercontent.com/u/172555007?v=4",
    bio: "Do more, say less",
    public_repos: 13,
    followers: 2,
    following: 2,
    html_url: "https://github.com/PersonalViolet",
  };
}

export function getFallbackRepos(): GitHubRepo[] {
  return [
    {
      id: 1264966512,
      name: "nexus_cli_website",
      full_name: "PersonalViolet/nexus_cli_website",
      description: "NexusOpenCLI 静态介绍网站 — 可扩展 CLI 生态基础设施",
      html_url: "https://github.com/PersonalViolet/nexus_cli_website",
      language: "JavaScript",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-06-10T11:14:13Z",
      created_at: "2026-06-10T10:43:15Z",
    },
    {
      id: 1210260722,
      name: "OSTI",
      full_name: "PersonalViolet/OSTI",
      description: null,
      html_url: "https://github.com/PersonalViolet/OSTI",
      language: "TypeScript",
      stargazers_count: 1,
      forks_count: 0,
      topics: [],
      updated_at: "2026-06-10T02:09:40Z",
      created_at: "2026-04-14T08:34:03Z",
    },
    {
      id: 1247407598,
      name: "violet-agents",
      full_name: "PersonalViolet/violet-agents",
      description: null,
      html_url: "https://github.com/PersonalViolet/violet-agents",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-06-07T09:45:27Z",
      created_at: "2026-05-23T09:18:01Z",
    },
    {
      id: 1148789191,
      name: "PersonalViolet",
      full_name: "PersonalViolet/PersonalViolet",
      description: null,
      html_url: "https://github.com/PersonalViolet/PersonalViolet",
      language: null,
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-05-21T06:30:21Z",
      created_at: "2026-02-03T11:17:40Z",
    },
    {
      id: 1236847697,
      name: "openai-agents",
      full_name: "PersonalViolet/openai-agents",
      description: null,
      html_url: "https://github.com/PersonalViolet/openai-agents",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-05-14T08:54:11Z",
      created_at: "2026-05-12T16:20:49Z",
    },
    {
      id: 1236860898,
      name: "nexus-open-cli-lanvoicechat",
      full_name: "PersonalViolet/nexus-open-cli-lanvoicechat",
      description: null,
      html_url: "https://github.com/PersonalViolet/nexus-open-cli-lanvoicechat",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-05-12T17:08:11Z",
      created_at: "2026-05-12T16:35:46Z",
    },
    {
      id: 1232035087,
      name: "springboot-pagination-optimization-demo",
      full_name: "PersonalViolet/springboot-pagination-optimization-demo",
      description: null,
      html_url: "https://github.com/PersonalViolet/springboot-pagination-optimization-demo",
      language: "Java",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-05-07T16:37:58Z",
      created_at: "2026-05-07T14:23:09Z",
    },
    {
      id: 1227299696,
      name: "nexus_cli",
      full_name: "PersonalViolet/nexus_cli",
      description: "Extensible Typer CLI with hot-pluggable commands.",
      html_url: "https://github.com/PersonalViolet/nexus_cli",
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      topics: ["cli"],
      updated_at: "2026-05-04T12:54:07Z",
      created_at: "2026-05-02T13:45:24Z",
    },
    {
      id: 1228182890,
      name: "NexusOpenCLI-plugins-registry",
      full_name: "PersonalViolet/NexusOpenCLI-plugins-registry",
      description: null,
      html_url: "https://github.com/PersonalViolet/NexusOpenCLI-plugins-registry",
      language: "Python",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-05-04T10:09:06Z",
      created_at: "2026-05-03T17:48:26Z",
    },
    {
      id: 1223548248,
      name: "test_babel",
      full_name: "PersonalViolet/test_babel",
      description: null,
      html_url: "https://github.com/PersonalViolet/test_babel",
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      topics: [],
      updated_at: "2026-06-05T08:09:12Z",
      created_at: "2026-04-28T12:31:47Z",
    },
    {
      id: 1181748918,
      name: "Vue3-MyBlog-frontend",
      full_name: "PersonalViolet/Vue3-MyBlog-frontend",
      description: "🚧 Work in Progress 🚧",
      html_url: "https://github.com/PersonalViolet/Vue3-MyBlog-frontend",
      language: "Vue",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-04-12T09:16:32Z",
      created_at: "2026-03-14T15:16:46Z",
    },
    {
      id: 1138077051,
      name: "Python-Encryption-Tool",
      full_name: "PersonalViolet/Python-Encryption-Tool",
      description: "GUI-based encryption tool with AES and PBKDF2.",
      html_url: "https://github.com/PersonalViolet/Python-Encryption-Tool",
      language: "Python",
      stargazers_count: 1,
      forks_count: 0,
      topics: ["aes-encryption", "beginner-friendly", "python3", "visual-interface"],
      updated_at: "2026-03-10T01:16:48Z",
      created_at: "2026-01-20T08:04:13Z",
    },
    {
      id: 1175849414,
      name: "elasticsearch-learning-beginner",
      full_name: "PersonalViolet/elasticsearch-learning-beginner",
      description: "从零带你在docker部署elasticsearch，并学会在springboot的简单使用",
      html_url: "https://github.com/PersonalViolet/elasticsearch-learning-beginner",
      language: "Java",
      stargazers_count: 0,
      forks_count: 0,
      topics: [],
      updated_at: "2026-03-08T09:21:44Z",
      created_at: "2026-03-08T09:02:33Z",
    },
  ];
}
