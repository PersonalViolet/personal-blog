import { describe, it, expect, vi } from "vitest";
import { render, screen } from "@testing-library/react";
import React from "react";

vi.mock("lucide-react", () => ({
  Github: () => <svg data-testid="icon-github" />,
  Moon: () => <svg data-testid="icon-moon" />,
  Sun: () => <svg data-testid="icon-sun" />,
  ArrowLeft: () => <svg data-testid="icon-arrow-left" />,
  ArrowRight: () => <svg data-testid="icon-arrow-right" />,
  ExternalLink: () => <svg data-testid="icon-external-link" />,
  Star: () => <svg data-testid="icon-star" />,
  GitFork: () => <svg data-testid="icon-git-fork" />,
  Calendar: () => <svg data-testid="icon-calendar" />,
  Sparkles: () => <svg data-testid="icon-sparkles" />,
  FileText: () => <svg data-testid="icon-file-text" />,
  FolderGit2: () => <svg data-testid="icon-folder-git" />,
  Home: () => <svg data-testid="icon-home" />,
  MapPin: () => <svg data-testid="icon-map-pin" />,
  BookOpen: () => <svg data-testid="icon-book-open" />,
  Users: () => <svg data-testid="icon-users" />,
  Tag: () => <svg data-testid="icon-tag" />,
}));

import { Footer } from "@/components/footer";

describe("Footer", () => {
  it("renders copyright text", () => {
    render(<Footer />);
    expect(screen.getByText(/VIOLET/)).toBeDefined();
  });

  it("renders navigation links", () => {
    render(<Footer />);
    expect(screen.getByText("博客")).toBeDefined();
    expect(screen.getByText("项目")).toBeDefined();
  });

  it("has GitHub link", () => {
    render(<Footer />);
    const githubLink = screen.getByLabelText("GitHub");
    expect(githubLink).toBeDefined();
  });
});
