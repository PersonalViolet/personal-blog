"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "./theme-provider";

export function ThemeToggle() {
  const { theme, toggle } = useTheme();

  return (
    <button
      onClick={toggle}
      aria-label={theme === "light" ? "切换到深色模式" : "切换到浅色模式"}
      className="relative flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-bg-secondary text-text-secondary hover:text-accent hover:border-accent focus:outline-none focus:ring-2 focus:ring-accent/30"
    >
      <Sun
        size={18}
        className={`absolute transition-all duration-300 ${theme === "light" ? "rotate-0 scale-100 opacity-100" : "rotate-90 scale-0 opacity-0"}`}
      />
      <Moon
        size={18}
        className={`absolute transition-all duration-300 ${theme === "dark" ? "rotate-0 scale-100 opacity-100" : "-rotate-90 scale-0 opacity-0"}`}
      />
    </button>
  );
}
