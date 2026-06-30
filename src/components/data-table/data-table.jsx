"use client";

import { useState } from "react";

import {
  flexRender,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  getColumnPinningRowModel,
  useReactTable,
} from "@tanstack/react-table";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import { getHeaderStyles, getCellStyles } from "@/lib/table-culomn";

import DataTableToolbar from "./data-table-toolbar";
import DataTablePagination from "./data-table-pagination";
import DataTableEmpty from "./data-table-empty";

import { exportExcel } from "@/lib/export-excel";

export default function DataTable({
  columns,
  data,
  searchPlaceholder = "Cari data...",
  toolbarAction,
}) {
  const [sorting, setSorting] = useState([]);
  const [globalFilter, setGlobalFilter] = useState("");
  const [rowSelection, setRowSelection] = useState({});
  const [columnPinning, setColumnPinning] = useState({
    left: ["select", "no", "nama"],
    right: ["actions"],
  });

  const table = useReactTable({
    data,
    columns,

    state: {
      sorting,
      globalFilter,
      rowSelection,
      columnPinning,
    },

    onSortingChange: setSorting,
    onGlobalFilterChange: setGlobalFilter,
    onRowSelectionChange: setRowSelection,
    onColumnPinningChange: setColumnPinning,

    getCoreRowModel: getCoreRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getPaginationRowModel: getPaginationRowModel(),

    enableRowSelection: true,

    initialState: {
      pagination: {
        pageSize: 10,
      },
    },
  });

  return (
    <div className="overflow-hidden rounded-xl border bg-card shadow-sm">
      <DataTableToolbar
        table={table}
        totalData={data.length}
        searchPlaceholder={searchPlaceholder}
        toolbarAction={toolbarAction}
        onExport={() => exportExcel(data, "Data")}
        onDelete={() => console.log(table.getSelectedRowModel().rows)}
        onNotify={() => console.log(table.getSelectedRowModel().rows)}
      />

      {table.getRowModel().rows.length === 0 ? (
        <DataTableEmpty
          title="Data tidak ditemukan"
          description="Coba ubah kata kunci pencarian atau tambahkan data baru."
          actionLabel="Tambah Data"
          onAction={() => console.log("Tambah")}
        />
      ) : (
        <>
          <div className="overflow-auto max-h-[250px]">
            <Table
              style={{
                width: table.getTotalSize(),
              }}
            >
              <TableHeader>
                {table.getHeaderGroups().map((headerGroup) => (
                  <TableRow key={headerGroup.id}>
                    {headerGroup.headers.map((header) => (
                      <TableHead
                        key={header.id}
                        style={getHeaderStyles(header.column)}
                        className="whitespace-nowrap bg-background font-semibold"
                      >
                        {header.isPlaceholder
                          ? null
                          : flexRender(
                              header.column.columnDef.header,
                              header.getContext()
                            )}
                      </TableHead>
                    ))}
                  </TableRow>
                ))}
              </TableHeader>

              <TableBody>
                {table.getRowModel().rows.map((row) => (
                  <TableRow
                    key={row.id}
                    data-state={row.getIsSelected() && "selected"}
                    className="transition-colors hover:bg-muted/40"
                  >
                    {row.getVisibleCells().map((cell) => (
                      <TableCell
                        key={cell.id}
                        style={getCellStyles(cell.column)}
                        className="whitespace-nowrap"
                      >
                        {flexRender(
                          cell.column.columnDef.cell,
                          cell.getContext()
                        )}
                      </TableCell>
                    ))}
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          <DataTablePagination table={table} />
        </>
      )}
    </div>
  );
}
