"use client";

import { Area, AreaChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { RevenuePoint } from "@/types";

export const RevenueChart = ({ data }: { data: RevenuePoint[] }) => (
  <div className="h-72 w-full">
    <ResponsiveContainer>
      <AreaChart data={data}>
        <defs>
          <linearGradient id="colorRev" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#6f72ff" stopOpacity={0.35} />
            <stop offset="95%" stopColor="#6f72ff" stopOpacity={0.02} />
          </linearGradient>
        </defs>
        <XAxis dataKey="month" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="revenue" stroke="#5e5ff0" fillOpacity={1} fill="url(#colorRev)" />
      </AreaChart>
    </ResponsiveContainer>
  </div>
);
