import { create } from "zustand";

export const useSidebarStore = create((set) => ({
  // Desktop state
  collapsed: false,

  // Mobile state
  mobileOpen: false,

  // Desktop actions
  toggle: () =>
    set((state) => ({
      collapsed: !state.collapsed,
    })),

  open: () =>
    set({
      collapsed: false,
    }),

  close: () =>
    set({
      collapsed: true,
    }),

  // Mobile actions
  toggleMobile: () =>
    set((state) => ({
      mobileOpen: !state.mobileOpen,
    })),

  openMobile: () =>
    set({
      mobileOpen: true,
    }),

  closeMobile: () =>
    set({
      mobileOpen: false,
    }),
}));
