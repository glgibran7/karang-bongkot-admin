"use client";

import { Inbox, Plus } from "lucide-react";

import { Button } from "@/components/ui/button";

export default function DataTableEmpty({
  title = "Belum ada data",
  description = "Data akan muncul di sini setelah ditambahkan.",
  actionLabel,
  onAction,
}) {
  return (
    <div className="flex flex-col items-center justify-center py-20 px-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-muted">
        <Inbox className="h-8 w-8 text-muted-foreground" />
      </div>

      <h3 className="mt-6 text-lg font-semibold">{title}</h3>

      <p className="mt-2 max-w-sm text-sm text-muted-foreground">
        {description}
      </p>

      {actionLabel && (
        <Button onClick={onAction} className="mt-6">
          <Plus className="mr-2 h-4 w-4" />
          {actionLabel}
        </Button>
      )}
    </div>
  );
}
