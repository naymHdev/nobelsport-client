"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { XAxis, YAxis, ResponsiveContainer, Area, AreaChart } from "recharts";

const revenueData = [
  { year: "Game 1", value: 500 },
  { year: "Game 2", value: 650 },
  { year: "Game 3", value: 480 },
  { year: "Game 4", value: 920 },
  { year: "Game 5", value: 450 },
  { year: "Game 6", value: 701 },
  { year: "Game 7", value: 280 },
  { year: "Game 8", value: 680 },
  { year: "Game 9", value: 580 },
  { year: "Game 10", value: 880 },
  { year: "Game 11", value: 980 },
  { year: "Game 12", value: 380 },
];

const TacticalAwareness = () => {
  const [selectedVenue, setSelectedVenue] = useState("");

  const currentYear = new Date().getFullYear();
  return (
    <>
      <div>
        <div className=" flex items-center justify-between mt-4">
          <h3 className="text-sm font-semibold text-ns-title mb-4">
            Tactical awareness over last 5 games
          </h3>
          <Select value={selectedVenue} onValueChange={setSelectedVenue}>
            <SelectTrigger className="border-none bg-ns-light">
              <SelectValue placeholder={currentYear} />
            </SelectTrigger>
            <SelectContent>
              {revenueData.map((venue) => (
                <SelectItem key={venue.value} value={venue.year}>
                  {venue.year}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* -------------- Chart ------------ */}
        <div className="h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={revenueData}
              margin={{
                left: 15,
                right: 15,
              }}
            >
              <defs>
                <linearGradient
                  id="revenueGradient"
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor="#10b981" stopOpacity={0.3} />
                  <stop offset="100%" stopColor="#10b981" stopOpacity={0.05} />
                </linearGradient>
              </defs>
              <XAxis
                dataKey="year"
                scale="point"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280", dy: 10 }}
                padding={{ left: 0, right: 0 }}
              />
              <YAxis hide />
              <Area
                type="linear"
                dataKey="value"
                stroke="#10b981"
                strokeWidth={2}
                fill="url(#revenueGradient)"
                dot={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>
    </>
  );
};

export default TacticalAwareness;
