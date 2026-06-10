import { describe, it, expect } from "vitest";
import { getBlogPosts, getBlogPost } from "@/lib/blog";

describe("Blog utilities", () => {
  it("should load all blog posts", () => {
    const posts = getBlogPosts();
    expect(posts.length).toBeGreaterThanOrEqual(0);
    posts.forEach((post) => {
      expect(post).toHaveProperty("slug");
      expect(post).toHaveProperty("title");
      expect(post).toHaveProperty("date");
      expect(post).toHaveProperty("content");
    });
  });

  it("should load a specific blog post by slug", () => {
    const posts = getBlogPosts();
    if (posts.length > 0) {
      const post = getBlogPost(posts[0].slug);
      expect(post).not.toBeNull();
      expect(post!.title).toBe(posts[0].title);
      expect(post!.content).toBe(posts[0].content);
    }
  });

  it("should return null for non-existent post", () => {
    const post = getBlogPost("non-existent-post-slug");
    expect(post).toBeNull();
  });

  it("should sort posts by date in descending order", () => {
    const posts = getBlogPosts();
    for (let i = 0; i < posts.length - 1; i++) {
      expect(
        new Date(posts[i].date).getTime()
      ).toBeGreaterThanOrEqual(
        new Date(posts[i + 1].date).getTime()
      );
    }
  });

  it("should parse frontmatter correctly for hello-world", () => {
    const post = getBlogPost("hello-world");
    expect(post).not.toBeNull();
    expect(post!.title).toBe("个人博客上线了");
    expect(post!.date).toBe("2026-06-10");
    expect(post!.description).toBeDefined();
    expect(post!.tags).toContain("博客");
    expect(post!.content).toContain("Next.js");
  });
});
