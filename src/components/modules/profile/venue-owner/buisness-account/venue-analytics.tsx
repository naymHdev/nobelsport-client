"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { TrendingUp } from "lucide-react";

export default function VenueAnalytics() {
  const [selectedYear, setSelectedYear] = useState("2024");

  // Sample data for the chart
  const chartData = [
    { year: "2020", value: 280 },
    { year: "2021", value: 320 },
    { year: "2022", value: 300 },
    { year: "2023", value: 380 },
    { year: "2024", value: 420 },
  ];

  // Create SVG path for the line chart
  const createPath = (data: typeof chartData) => {
    const width = 600;
    const height = 200;
    const padding = 40;

    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = Math.min(...data.map((d) => d.value));
    const valueRange = maxValue - minValue;

    const points = data.map((point, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y =
        height -
        padding -
        ((point.value - minValue) / valueRange) * (height - 2 * padding);
      return `${x},${y}`;
    });

    return `M ${points.join(" L ")}`;
  };

  // Create area path (same as line but closed to bottom)
  const createAreaPath = (data: typeof chartData) => {
    const width = 600;
    const height = 200;
    const padding = 40;

    const maxValue = Math.max(...data.map((d) => d.value));
    const minValue = Math.min(...data.map((d) => d.value));
    const valueRange = maxValue - minValue;

    const points = data.map((point, index) => {
      const x = padding + (index * (width - 2 * padding)) / (data.length - 1);
      const y =
        height -
        padding -
        ((point.value - minValue) / valueRange) * (height - 2 * padding);
      return `${x},${y}`;
    });

    const firstX = padding;
    const lastX =
      padding + ((data.length - 1) * (width - 2 * padding)) / (data.length - 1);
    const bottomY = height - padding;

    return `M ${firstX},${bottomY} L ${points.join(
      " L "
    )} L ${lastX},${bottomY} Z`;
  };

  return (
    <div className="space-y-6 p-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className=" border-none shadow-none bg-[#FAFAFA]">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Booking</p>
              <p className="text-3xl font-bold">5</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+3 this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className=" border-none shadow-none bg-[#FAFAFA]">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-3xl font-bold">$450</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+3 this month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Chart Section */}
      <Card className="border-none shadow-none bg-transparent">
        <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
          <CardTitle className="text-lg font-semibold">
            Earning Overview
          </CardTitle>
          <Select value={selectedYear} onValueChange={setSelectedYear}>
            <SelectTrigger className="w-24">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="2020">2020</SelectItem>
              <SelectItem value="2021">2021</SelectItem>
              <SelectItem value="2022">2022</SelectItem>
              <SelectItem value="2023">2023</SelectItem>
              <SelectItem value="2024">2024</SelectItem>
            </SelectContent>
          </Select>
        </CardHeader>
        <CardContent>
          <div className="w-full h-64">
            <svg
              width="100%"
              height="100%"
              viewBox="0 0 600 200"
              className="overflow-visible"
            >
              {/* Grid lines */}
              <defs>
                <linearGradient
                  id="areaGradient"
                  x1="0%"
                  y1="0%"
                  x2="0%"
                  y2="100%"
                >
                  <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#10B981" stopOpacity="0.1" />
                </linearGradient>
              </defs>

              {/* Area fill */}
              <path
                d={createAreaPath(chartData)}
                fill="url(#areaGradient)"
                stroke="none"
              />

              {/* Line */}
              <path
                d={createPath(chartData)}
                fill="none"
                stroke="#10B981"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />

              {/* Data points */}
              {chartData.map((point, index) => {
                const width = 600;
                const height = 200;
                const padding = 40;
                const maxValue = Math.max(...chartData.map((d) => d.value));
                const minValue = Math.min(...chartData.map((d) => d.value));
                const valueRange = maxValue - minValue;

                const x =
                  padding +
                  (index * (width - 2 * padding)) / (chartData.length - 1);
                const y =
                  height -
                  padding -
                  ((point.value - minValue) / valueRange) *
                    (height - 2 * padding);

                return (
                  <circle
                    key={index}
                    cx={x}
                    cy={y}
                    r="4"
                    fill="#10B981"
                    stroke="white"
                    strokeWidth="2"
                  />
                );
              })}

              {/* X-axis labels */}
              {chartData.map((point, index) => {
                const width = 600;
                const padding = 40;
                const x =
                  padding +
                  (index * (width - 2 * padding)) / (chartData.length - 1);

                return (
                  <text
                    key={index}
                    x={x}
                    y={190}
                    textAnchor="middle"
                    className="text-xs fill-gray-500"
                  >
                    {point.year}
                  </text>
                );
              })}
            </svg>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
