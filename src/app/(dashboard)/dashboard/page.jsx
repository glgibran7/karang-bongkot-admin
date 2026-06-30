import StatsCard from "@/components/dashboard/stats-card";
import QuickAction from "@/components/dashboard/quick-actions";
import ActivityCard from "@/components/dashboard/activity-card";
import ActiveUserChart from "@/components/dashboard/active-user-chart";
import StatusBadge from "@/components/dashboard/status-badge";
import SuratChart from "@/components/dashboard/surat-chart";
import PopulationChart from "@/components/dashboard/population-chart";
import PopulationGrowthChart from "@/components/dashboard/population-growth-chart";
import { recentActivity } from "@/mock/recent-activity";
import { Bell, Calendar, FileText, Users } from "lucide-react";
import SectionHeader from "@/components/dashboard/section-header";

import {
  latestLetters,
  latestComplaints,
  todayAgenda,
  dashboardStats,
} from "@/mock/dashboard";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function Dashboard() {
  const date = new Date();

  const hari = ["Minggu", "Senin", "Selasa", "Rabu", "Kamis", "Jumat", "Sabtu"];

  const currentDate = `${hari[date.getDay()]}, ${String(
    date.getDate()
  ).padStart(2, "0")}-${String(date.getMonth() + 1).padStart(
    2,
    "0"
  )}-${date.getFullYear()}`;
  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>

          <p className="text-muted-foreground">
            Ringkasan aktivitas Desa Digital.
          </p>
        </div>

        <div className="text-sm text-muted-foreground font-medium">
          {currentDate}
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        <StatsCard
          title="Total Warga"
          value={dashboardStats.totalWarga}
          description={dashboardStats.pertumbuhanWarga}
          icon={<Users />}
        />

        <StatsCard
          title="Pengajuan Surat"
          value={dashboardStats.totalSurat}
          description={dashboardStats.suratMenunggu}
          icon={<FileText />}
        />

        <StatsCard
          title="Agenda"
          value={dashboardStats.totalAgenda}
          description={dashboardStats.agendaHariIni}
          icon={<Calendar />}
        />

        <StatsCard
          title="Notifikasi"
          value={dashboardStats.totalNotifikasi}
          description={dashboardStats.notifikasiBelumDibaca}
          icon={<Bell />}
        />
      </div>

      <div className="grid lg:grid-cols-3 gap-6 mt-8">
        <Card className="lg:col-span-2">
          <CardHeader>
            <CardTitle>Statistik Pengajuan Surat</CardTitle>
          </CardHeader>

          <CardContent>
            <SuratChart></SuratChart>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Quick Action</CardTitle>
          </CardHeader>

          <CardContent className="space-y-3">
            <QuickAction
              title="Tambah Warga"
              href="/warga/create"
              color="bg-blue-500"
            />

            <QuickAction
              title="Tambah Agenda"
              href="/agenda/create"
              color="bg-green-500"
            />

            <QuickAction
              title="Tambah Berita"
              href="/berita/create"
              color="bg-orange-500"
            />

            <QuickAction
              title="Kirim Notifikasi"
              href="/notifikasi/create"
              color="bg-red-500"
            />
          </CardContent>
        </Card>
      </div>

      <div className="grid lg:grid-cols-2 gap-6 mt-8">
        <Card>
          <CardHeader>
            <SectionHeader title="Pengajuan Surat Terbaru" href="/surat" />
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3">Nama</th>

                  <th className="text-left">Surat</th>

                  <th className="text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {latestLetters.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3">{item.nama}</td>
                    <td>{item.surat}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionHeader title="Agenda Hari Ini" href="/agenda" />
          </CardHeader>
          <CardContent className="space-y-4">
            {todayAgenda.map((item) => (
              <div key={item.id}>
                <p className="font-semibold">{item.jam}</p>

                <p className="text-sm text-muted-foreground">{item.kegiatan}</p>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionHeader title="Aduan Terbaru" href="/aduan" />
          </CardHeader>
          <CardContent>
            <table className="w-full text-sm">
              <thead className="border-b">
                <tr>
                  <th className="text-left py-3">Judul</th>

                  <th className="text-left">Pelapor</th>

                  <th className="text-left">Status</th>
                </tr>
              </thead>

              <tbody>
                {latestComplaints.map((item) => (
                  <tr key={item.id} className="border-b">
                    <td className="py-3">{item.judul}</td>
                    <td>{item.pelapor}</td>
                    <td>
                      <StatusBadge status={item.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <SectionHeader title="Aktivitas Terbaru" href="/aktivitas" />
          </CardHeader>

          <CardContent className="space-y-3">
            {recentActivity.map((item) => (
              <ActivityCard key={item.id} activity={item} />
            ))}
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Komposisi Penduduk</CardTitle>
          </CardHeader>

          <CardContent>
            <PopulationChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pertumbuhan Penduduk</CardTitle>
          </CardHeader>

          <CardContent>
            <PopulationGrowthChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pengguna Aplikasi Aktif</CardTitle>
          </CardHeader>

          <CardContent>
            <ActiveUserChart />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Pengajuan Surat per Bulan</CardTitle>
          </CardHeader>

          <CardContent>
            <SuratChart />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
