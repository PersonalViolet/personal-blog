"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { FileText, FolderGit2, Home } from "lucide-react";
import { ThemeToggle } from "./theme-toggle";

const links = [
  { href: "/", label: "首页", icon: Home },
  { href: "/blog", label: "博客", icon: FileText },
  { href: "/projects", label: "项目", icon: FolderGit2 },
];

export function Header() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg-primary/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
        <Link
          href="/"
          className="text-lg font-semibold tracking-tight text-text-primary hover:text-accent"
        >
          VIOLET
        </Link>

        <nav className="flex items-center gap-1">
          {links.map(({ href, label, icon: Icon }) => {
            const active = href === "/" ? pathname === "/" : pathname.startsWith(href);
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-1.5 rounded-lg px-3 py-2 text-sm font-medium transition-colors ${active ? "bg-accent-subtle text-accent" : "text-text-secondary hover:text-text-primary hover:bg-bg-tertiary"}`}
              >
                <Icon size={16} />
                <span className="hidden sm:inline">{label}</span>
              </Link>
            );
          })}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}
