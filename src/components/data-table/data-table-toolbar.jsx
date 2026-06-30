"use client";

import { Bell, Download, Search, Trash2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export default function DataTableToolbar({
  table,
  totalData,
  searchPlaceholder = "Cari data...",
  toolbarAction,
  onExport,
  onDelete,
  onNotify,
}) {
  const selectedRows = table.getFilteredSelectedRowModel().rows.length;

  return (
    <div className="border-b bg-muted/20 p-4">
      <div className="flex flex-col gap-4">
        {/* Search */}
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="relative w-full lg:max-w-sm">
            <Search
              size={18}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
            />

            <Input
              placeholder={searchPlaceholder}
              value={table.getState().globalFilter ?? ""}
              onChange={(e) => table.setGlobalFilter(e.target.value)}
              className="pl-10"
            />
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="outline" onClick={onExport}>
              <Download className="mr-2 h-4 w-4" />
              Export Excel
            </Button>

            {toolbarAction}
          </div>
        </div>

        {/* Bulk Action */}
        {selectedRows > 0 && (
          <div className="flex flex-col gap-3 rounded-lg border bg-background p-3 md:flex-row md:items-center md:justify-between">
            <span className="text-sm font-medium">
              {selectedRows} data dipilih
            </span>

            <div className="flex flex-wrap gap-2">
              <Button size="sm" variant="destructive" onClick={onDelete}>
                <Trash2 className="mr-2 h-4 w-4" />
                Hapus
              </Button>

              <Button size="sm" variant="outline" onClick={onNotify}>
                <Bell className="mr-2 h-4 w-4" />
                Kirim Notifikasi
              </Button>

              <Button
                size="sm"
                variant="secondary"
                onClick={() => table.resetRowSelection()}
              >
                Batal Pilih
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
