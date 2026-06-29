"use client";

import {
  ResponsiveContainer,
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  Tooltip,
  Legend,
} from "recharts";

import { suratChart } from "@/mock/chart";

export default function SuratChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart data={suratChart}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="bulan" />

        <Tooltip />

        <Legend />

        <Bar dataKey="selesai" fill="#22c55e" radius={[6, 6, 0, 0]} />

        <Bar dataKey="diproses" fill="#3b82f6" radius={[6, 6, 0, 0]} />

        <Bar dataKey="menunggu" fill="#f59e0b" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
