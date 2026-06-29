"use client";

import {
  ResponsiveContainer,
  AreaChart,
  Area,
  CartesianGrid,
  Tooltip,
  XAxis,
} from "recharts";

import { penggunaAktif } from "@/mock/chart";

export default function ActiveUserChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <AreaChart data={penggunaAktif}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="bulan" />

        <Tooltip />

        <Area
          type="monotone"
          dataKey="pengguna"
          stroke="#22C55E"
          fill="#22C55E33"
        />
      </AreaChart>
    </ResponsiveContainer>
  );
}
