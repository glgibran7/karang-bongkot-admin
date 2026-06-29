"use client";

import { Bell, Moon, Sun, Search, Menu } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

import { useSidebarStore } from "@/stores/sidebarStore";

export default function Header() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  const toggleMobile = useSidebarStore((state) => state.toggleMobile);

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <header className="h-16 border-b bg-background px-4 md:px-6 flex items-center justify-between">
      {/* Left side */}
      <div className="flex items-center gap-3">
        {/* Hamburger (mobile only) */}
        <button
          onClick={toggleMobile}
          className="md:hidden border rounded-lg p-2 hover:bg-accent transition"
        >
          <Menu size={20} />
        </button>

        {/* Search */}
        <div className="relative hidden sm:block">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
          />

          <input
            placeholder="Cari..."
            className="
              w-56
              md:w-80
              h-10
              rounded-lg
              border
              bg-background
              pl-10
              pr-3
              outline-none
              focus:ring-2
              focus:ring-primary
            "
          />
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center gap-3 md:gap-5">
        {/* Notification */}
        <button className="border rounded-lg p-2 hover:bg-accent transition">
          <Bell size={20} />
        </button>

        {/* Theme toggle */}
        <button
          onClick={toggleTheme}
          className="border rounded-lg p-2 hover:bg-accent transition"
        >
          {mounted &&
            (theme === "dark" ? <Sun size={20} /> : <Moon size={20} />)}
        </button>

        {/* User info */}
        <div className="hidden md:block text-right">
          <p className="font-semibold">Gibran</p>
          <p className="text-xs text-muted-foreground">Administrator</p>
        </div>
      </div>
    </header>
  );
}
