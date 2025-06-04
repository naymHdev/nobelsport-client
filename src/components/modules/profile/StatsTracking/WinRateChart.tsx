"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Area, AreaChart, CartesianGrid, XAxis } from "recharts";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import { useState } from "react";

const chartData = [
  { year: "2001", desktop: 45, mobile: 100 },
  { year: "2002", desktop: 58, mobile: 150 },
  { year: "2003", desktop: 63, mobile: 180 },
  { year: "2004", desktop: 77, mobile: 190 },
  { year: "2005", desktop: 89, mobile: 205 },
  { year: "2006", desktop: 95, mobile: 215 },
  { year: "2007", desktop: 101, mobile: 230 },
  { year: "2008", desktop: 115, mobile: 245 },
  { year: "2009", desktop: 124, mobile: 260 },
  { year: "2010", desktop: 139, mobile: 275 },
  { year: "2011", desktop: 148, mobile: 290 },
  { year: "2012", desktop: 152, mobile: 310 },
  { year: "2013", desktop: 167, mobile: 320 },
  { year: "2014", desktop: 175, mobile: 335 },
  { year: "2015", desktop: 182, mobile: 350 },
  { year: "2016", desktop: 190, mobile: 365 },
  { year: "2017", desktop: 203, mobile: 385 },
  { year: "2018", desktop: 211, mobile: 400 },
  { year: "2019", desktop: 219, mobile: 420 },
  { year: "2020", desktop: 186, mobile: 440 },
  { year: "2021", desktop: 305, mobile: 460 },
  { year: "2022", desktop: 237, mobile: 480 },
  { year: "2023", desktop: 73, mobile: 495 },
  { year: "2024", desktop: 209, mobile: 510 },
  { year: "2025", desktop: 214, mobile: 525 },
  { year: "2026", desktop: 228, mobile: 540 },
  { year: "2027", desktop: 234, mobile: 555 },
  { year: "2028", desktop: 249, mobile: 570 },
  { year: "2029", desktop: 256, mobile: 585 },
  { year: "2030", desktop: 267, mobile: 600 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#007A33",
  },
} satisfies ChartConfig;

export default function WinRateChart() {
  const [selectedYear, setSelectedYear] = useState("2024");

  const filteredData = chartData.filter((item) => item.year === selectedYear);

  return (
    <Card className="border-none shadow-none">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-xl text-ns-title font-semibold">
          Win rate compared
        </CardTitle>
        <Select defaultValue="2024" onValueChange={setSelectedYear}>
          <SelectTrigger className=" text-sm shadow-none">
            <SelectValue />
          </SelectTrigger>
          <SelectContent className=" shadow-none">
            {chartData.map((item) => (
              <SelectItem key={item.year} value={item.year}>
                {item.year}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </CardHeader>
      <CardContent className="mt-8">
        <ChartContainer config={chartConfig}>
          <AreaChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <defs>
              <linearGradient
                id="desktopGradient"
                x1="0%"
                y1="0%"
                x2="100%"
                y2="100%"
              >
                <stop offset="0%" stopColor="#007A33" stopOpacity={0.8} />
                <stop offset="100%" stopColor="#00B88C" stopOpacity={0.4} />
              </linearGradient>
            </defs>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="year"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              // tickFormatter={(value) => value.slice(0, 4)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dot" hideLabel />}
            />
            <Area
              dataKey="desktop"
              type="linear"
              fill="url(#desktopGradient)"
              fillOpacity={0.6}
              stroke="#007A33"
            />
          </AreaChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
