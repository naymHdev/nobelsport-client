"use client";

import { Area, AreaChart, XAxis } from "recharts";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { years } from "./constant";

export const description = "A linear area chart";

const chartData = Array.from({ length: 11 }, (_, i) => {
  const year = 2020 + i;
  return {
    year: String(year),
    desktop: Math.floor(Math.random() * 300) + 50, // example values
  };
});

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

const EarningOverview = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <Card className=" border-none shadow-none">
        {/* --------------- Header --------------- */}
        <CardHeader>
          <div className=" flex items-center justify-between">
            <h2 className=" font-semibold text-ns-title text-sm">
              Earning Overview
            </h2>

            <div>
              <Select>
                <SelectTrigger className="w-[80px] shadow-none border-none rounded-xl text-ns-title font-semibold bg-blue-50">
                  <SelectValue placeholder={String(currentYear)} />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Years</SelectLabel>
                    {years.map((year, idx) => (
                      <SelectItem key={`${idx + 1}`} value={year.label}>
                        {year.value}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </CardHeader>

        {/*  -------------- Chart Content --------------- */}
        <CardContent>
          <ChartContainer config={chartConfig}>
            <AreaChart
              accessibilityLayer
              data={chartData}
              margin={{
                left: 15,
                right: 12,
              }}
            >
              <defs>
                <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#A7F3D0" stopOpacity={0.7} />
                  <stop offset="100%" stopColor="#ffffff" stopOpacity={0} />
                </linearGradient>
              </defs>
              <XAxis dataKey="year" tickLine={false} axisLine={false} />

              <ChartTooltip
                cursor={false}
                content={<ChartTooltipContent indicator="dot" hideLabel />}
              />
              <Area
                dataKey="desktop"
                type="linear"
                stroke="#007F36" // deep green stroke
                strokeWidth={2}
                fill="url(#gradient)"
              />
            </AreaChart>
          </ChartContainer>
        </CardContent>
      </Card>
    </>
  );
};

export default EarningOverview;
