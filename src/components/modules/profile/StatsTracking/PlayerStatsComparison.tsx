"use client";

import { Card, CardContent } from "@/components/ui/card";

interface StatBarProps {
  label: string;
  value: number;
  maxValue: number;
  color: string;
}

const StatBar = ({ label, value, maxValue, color }: StatBarProps) => {
  const percentage = (value / maxValue) * 100;

  return (
    <div className="flex items-center w-full mb-4">
      <div className="w-[120px] text-sm text-gray-700">{label}</div>
      <div className="flex-1">
        <div
          className="h-8 rounded-sm flex items-center pl-3 text-white font-medium"
          style={{
            width: `${percentage}%`,
            backgroundColor: color,
          }}
        >
          {value} goals
        </div>
      </div>
    </div>
  );
};

export default function PlayerStatsComparison() {
  const stats = [
    { label: "Carlos + Ahmed", value: 2.3, color: "#f59e0b" },
    { label: "Carlos + Liam", value: 1.8, color: "#3b82f6" },
    { label: "Carlos + Liam", value: 1.5, color: "#3b82f6" },
  ];

  const maxValue = Math.max(...stats.map((stat) => stat.value));

  return (
    <Card className="w-full bg-transparent border-none shadow-none p-0">
      <CardContent className="p-6">
        {stats.map((stat, index) => (
          <StatBar
            key={index}
            label={stat.label}
            value={stat.value}
            maxValue={maxValue}
            color={stat.color}
          />
        ))}

        <div className="mt-2 bg-blue-50 p-3 rounded-sm">
          <p className="text-sm">
            <span className="font-medium">Carlos + Ahmed in midfield:</span>
            <span className="text-indigo-600 font-medium">
              67% higher scoring rate
            </span>
          </p>
        </div>
      </CardContent>
    </Card>
  );
}
