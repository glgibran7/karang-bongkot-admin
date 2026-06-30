"use client";

import DataTableActions from "@/components/data-table/data-table-actions";
import StatusBadge from "@/components/dashboard/status-badge";
import { Checkbox } from "@/components/ui/checkbox";

export const columns = [
  {
    id: "select",
    size: 55,
    meta: {
      sticky: "left",
    },
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },

  {
    id: "no",
    size: 70,
    meta: {
      sticky: "left",
    },
    header: "No",
    cell: ({ row, table }) =>
      table.getSortedRowModel().flatRows.indexOf(row) + 1,
    enableSorting: false,
  },

  {
    accessorKey: "nik",
    header: "NIK",
    size: 180,
    cell: ({ row }) => <div className="font-mono">{row.original.nik}</div>,
  },

  {
    accessorKey: "kk",
    header: "No. KK",
    size: 180,
  },

  {
    accessorKey: "nama",
    header: "Nama",
    size: 250,
    meta: {
      sticky: "left",
    },
    cell: ({ row }) => (
      <div>
        <p className="font-medium">{row.original.nama}</p>

        {row.original.email && (
          <p className="text-xs text-muted-foreground">{row.original.email}</p>
        )}
      </div>
    ),
  },

  {
    accessorKey: "jk",
    header: "Jenis Kelamin",
    size: 150,
  },

  {
    accessorKey: "ttl",
    header: "TTL",
    size: 250,
  },

  {
    accessorKey: "agama",
    header: "Agama",
    size: 150,
  },

  {
    accessorKey: "pendidikan",
    header: "Pendidikan",
    size: 180,
  },

  {
    accessorKey: "pekerjaan",
    header: "Pekerjaan",
    size: 220,
  },

  {
    accessorKey: "dusun",
    header: "Dusun",
    size: 180,
  },

  {
    id: "rtrw",
    header: "RT / RW",
    size: 120,
    cell: ({ row }) => (
      <>
        {row.original.rt}/{row.original.rw}
      </>
    ),
  },

  {
    accessorKey: "status",
    header: "Status",
    size: 130,
    cell: ({ row }) => <StatusBadge status={row.original.status} />,
  },

  {
    id: "actions",
    size: 80,
    meta: {
      sticky: "right",
    },
    header: "Aksi",
    enableSorting: false,
    enableHiding: false,
    cell: ({ row }) => (
      <DataTableActions
        detailHref={`/warga/${row.original.id}`}
        editHref={`/warga/${row.original.id}/edit`}
        onDelete={() => console.log(row.original)}
      />
    ),
  },
];
