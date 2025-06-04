import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer } from "recharts";

const goalsAssistsData = [
  { year: "2025", goals: 2, assists: 1 },
  { year: "2026", goals: 2, assists: 2 },
  { year: "2027", goals: 3, assists: 1 },
  { year: "2028", goals: 1, assists: 2 },
  { year: "2029", goals: 2, assists: 3 },
  { year: "2030", goals: 1, assists: 0.5 },
  { year: "2031", goals: 2, assists: 1 },
];

const GoalAssistsChart = () => {
  return (
    <>
      <div className=" -mt-12">
        <Card className=" border-none shadow-none bg-transparent">
          <CardHeader className="pb-4">
            <div className="flex items-center justify-center gap-6 mt-4">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                <span className="text-sm text-gray-600">Goal</span>
                <span className="text-sm font-medium text-green-600">
                  +11.4%
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                <span className="text-sm text-gray-600">Assist</span>
                <span className="text-sm font-medium text-green-600">
                  +11.4%
                </span>
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart
                  data={goalsAssistsData}
                  margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                >
                  <XAxis
                    dataKey="year"
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                  />
                  <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{ fontSize: 12, fill: "#6B7280" }}
                    domain={[0, 4]}
                    ticks={[0, 1, 2, 3, 4]}
                  />
                  <Bar
                    dataKey="goals"
                    stackId="a"
                    fill="#FCD34D"
                    radius={[0, 0, 4, 4]}
                  />
                  <Bar
                    dataKey="assists"
                    stackId="a"
                    fill="#3B82F6"
                    radius={[4, 4, 0, 0]}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default GoalAssistsChart;
