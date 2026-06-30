"use client";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import DataTable from "@/components/data-table/data-table";
import { columns } from "@/components/data-table/columns/warga-columns";

import { warga } from "@/mock/warga";

export default function WargaPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col gap-2 md:flex-row md:items-center md:justify-between">
        <div>
          <h1 className="text-xl font-bold tracking-tight">Data Warga</h1>

          <p className="text-muted-foreground">
            Kelola seluruh data penduduk desa.
          </p>
        </div>
      </div>

      <DataTable
        columns={columns}
        data={warga}
        searchPlaceholder="Cari data.."
        toolbarAction={
          <Button asChild>
            <Link href="/dashboard/warga/create">Tambah Warga</Link>
          </Button>
        }
      />
    </div>
  );
}
