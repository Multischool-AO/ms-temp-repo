"use client";

import { formatCurrency } from "@/lib/utils";
import {
  Bar,
  BarChart,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip,
  Cell
} from "recharts";

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="min-w-[100px] rounded-lg border bg-white px-2 py-3 text-xs text-black dark:bg-dark dark:text-zinc-200">
        <p>
          {label}:{" "}
          <span className="font-medium">
            {formatCurrency(payload[0].value)}
          </span>
        </p>
      </div>
    );
  }
  return null;
};
const colors = [
  "#6c5f8d",
  "#81759e",
  "#958caf",
  "#aaa2c1",
  "#beb9d3",
  "#d3cfe4",
  "#e7e6f5",
];


const RevenueGraph = ({ data }: { data: any[] }) => {
  return (
    <>
      <ResponsiveContainer width="100%" height={350}>
        <BarChart data={data}>
          <XAxis
            dataKey="name"
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
          />
          <YAxis
            stroke="#888888"
            fontSize={12}
            tickLine={false}
            axisLine={false}
            fontFamily="Roboto"
            tickFormatter={(value) => ` ${value}`}
          />

          <Bar dataKey="total" radius={[24, 24, 24, 24]}>
            {data.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={colors[index % colors.length]}
              />
            ))}
          </Bar>
          <Tooltip content={<CustomTooltip />} cursor={false} />
        </BarChart>
      </ResponsiveContainer>
    </>
  );
};

export default RevenueGraph;
