"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface PlayerCombination {
  players: string;
  goals: number;
  color: "orange" | "blue";
}

const playerData: PlayerCombination[] = [
  { players: "Carlos + Ahmed", goals: 2.3, color: "orange" },
  { players: "Carlos + Liam", goals: 1.8, color: "blue" },
  { players: "Carlos + Ahmed", goals: 1.5, color: "blue" },
];

const maxGoals = Math.max(...playerData.map((p) => p.goals));

export default function PlayerChemistryInsights() {
  return (
    <div className="">
      <Card className="w-full p-0 border-none shadow-none">
        <CardHeader className="pb-4 p-0">
          <CardTitle className="text-xl font-semibold text-gray-900">
            Player Chemistry Insights
          </CardTitle>
          <p className="text-sm text-gray-600 mt-1">
            Goals per game average when playing together
          </p>
        </CardHeader>
        <CardContent className="space-y-6 p-0">
          {/* Player Combinations */}
          <div className="space-y-4">
            {playerData.map((combination, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className=" text-lg font-semibold text-ns-neutral-dark">
                    {combination.players}
                  </span>
                </div>
                <div className="relative">
                  <Progress
                    value={(combination.goals / maxGoals) * 100}
                    className="h-8 bg-transparent"
                  />
                  <div
                    className={`absolute inset-0 rounded-r-full ${
                      combination.color === "orange"
                        ? "bg-gradient-to-r from-yellow-400 to-orange-500"
                        : "bg-gradient-to-r from-blue-400 to-blue-600"
                    }`}
                    style={{
                      width: `${(combination.goals / maxGoals) * 100}%`,
                    }}
                  />
                  <div className="absolute inset-0 flex items-center pl-3">
                    <span className="text-xs font-medium text-white">
                      {combination.goals} goals
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Insight Highlight */}
          <div className="bg-blue-50 border-blue-200 rounded-lg p-4 mt-6">
            <p className="text-sm text-blue-800 font-medium">
              <span className="font-semibold">Carlos + Ahmed</span> in midfield:
              <span className="font-bold text-blue-900 ml-1">
                67% higher scoring rate
              </span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
