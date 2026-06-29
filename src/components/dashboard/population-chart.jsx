"use client";

import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

import { pendudukChart } from "@/mock/chart";

const COLORS = ["#3B82F6", "#EC4899"];

export default function PopulationChart() {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <PieChart>
        <Pie
          data={pendudukChart}
          dataKey="value"
          nameKey="name"
          outerRadius={110}
          label
        >
          {pendudukChart.map((_, index) => (
            <Cell key={index} fill={COLORS[index]} />
          ))}
        </Pie>

        <Tooltip />

        <Legend />
      </PieChart>
    </ResponsiveContainer>
  );
}
