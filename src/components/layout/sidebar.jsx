"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

import {
  LayoutDashboard,
  Users,
  FileText,
  Megaphone,
  Calendar,
  Bell,
  Settings,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

import { useSidebarStore } from "@/stores/sidebarStore";

const menus = [
  {
    title: "Dashboard",
    href: "/dashboard",
    icon: LayoutDashboard,
  },
  {
    title: "Warga",
    href: "/warga",
    icon: Users,
  },
  {
    title: "Surat",
    href: "/surat",
    icon: FileText,
  },
  {
    title: "Agenda",
    href: "/agenda",
    icon: Calendar,
  },
  {
    title: "Pengumuman",
    href: "/pengumuman",
    icon: Megaphone,
  },
  {
    title: "Notifikasi",
    href: "/notifikasi",
    icon: Bell,
  },
  {
    title: "Pengaturan",
    href: "/pengaturan",
    icon: Settings,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  const collapsed = useSidebarStore((state) => state.collapsed);
  const toggle = useSidebarStore((state) => state.toggle);

  const mobileOpen = useSidebarStore((state) => state.mobileOpen);
  const closeMobile = useSidebarStore((state) => state.closeMobile);

  return (
    <>
      {/* Overlay mobile */}
      {mobileOpen && (
        <div
          onClick={closeMobile}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
        />
      )}

      <aside
        className={`
          fixed md:static
          top-0 left-0
          z-50
          h-screen
          border-r
          bg-background
          transition-transform duration-300

          w-72

          ${mobileOpen ? "translate-x-0" : "-translate-x-full"}

          md:translate-x-0

          ${collapsed ? "md:w-20" : "md:w-72"}
        `}
      >
        {/* Header sidebar */}
        <div className="h-16 px-4 flex items-center justify-between border-b">
          {!collapsed && (
            <div>
              <h2 className="font-bold">Karang Bongkot</h2>
              <p className="text-xs text-muted-foreground">Admin Panel</p>
            </div>
          )}

          {/* Collapse button (desktop only) */}
          <button
            onClick={toggle}
            className="hidden md:flex border rounded-lg p-2 hover:bg-accent transition"
          >
            {collapsed ? <ChevronRight size={18} /> : <ChevronLeft size={18} />}
          </button>
        </div>

        {/* Menu */}
        <div className="p-3">
          {menus.map((item) => {
            const Icon = item.icon;
            const active = pathname === item.href;

            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={closeMobile}
                className={`
                  mb-2
                  rounded-xl
                  flex
                  items-center
                  gap-3
                  p-3
                  transition

                  ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-muted"
                  }
                `}
              >
                <Icon size={18} />

                {!collapsed && <span>{item.title}</span>}
              </Link>
            );
          })}
        </div>
      </aside>
    </>
  );
}
