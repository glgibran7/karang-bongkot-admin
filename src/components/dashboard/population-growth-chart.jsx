"use client";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  Tooltip,
  CartesianGrid,
  XAxis,
} from "recharts";

import { pertumbuhanPenduduk } from "@/mock/chart";

export default function PopulationGrowthChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <LineChart data={pertumbuhanPenduduk}>
        <CartesianGrid strokeDasharray="3 3" />

        <XAxis dataKey="bulan" />

        <Tooltip />

        <Line
          type="monotone"
          dataKey="total"
          stroke="#3B82F6"
          strokeWidth={3}
        />
      </LineChart>
    </ResponsiveContainer>
  );
}
