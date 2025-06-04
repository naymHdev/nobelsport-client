import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import GoalAssistsChart from "./GoalAssistsChart";
import WinRateChart from "./WinRateChart";

export default function PremiumFeatures() {
  const role = "pro";

  return (
    <div className="">
      <div className="space-y-6">
        {/* Top Row - Goals & Assists and Win Rate */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Goals & Assists Over Time */}
          <Card className="bg-white shadow-none border-none">
            <CardHeader className="">
              <CardTitle className="text-xl text-ns-title font-semibold">
                Goals & Assists Over Time
              </CardTitle>
            </CardHeader>
            {role === "pro" ? (
              <>
                <GoalAssistsChart />
              </>
            ) : (
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Your current plan is free,Upgrade to enable this feature
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                  Upgrade Now
                </Button>
              </CardContent>
            )}
          </Card>

          {/* Win Rate Compared */}
          <Card className="bg-white shadow-none border-none">
            <CardHeader className="flex flex-row items-center justify-between">
              <CardTitle className="text-xl text-ns-title font-semibold">
                Win rate compared
              </CardTitle>
              <Select defaultValue="2024">
                <SelectTrigger className="w-20 h-8 text-sm">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="2024">2024</SelectItem>
                  <SelectItem value="2023">2023</SelectItem>
                  <SelectItem value="2022">2022</SelectItem>
                </SelectContent>
              </Select>
            </CardHeader>
            {role === "pro" ? (
              <>
                <WinRateChart />
              </>
            ) : (
              <CardContent className="space-y-4">
                <p className="text-sm text-gray-600">
                  Your current plan is free,Upgrade to enable this feature
                </p>
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                  Upgrade Now
                </Button>
              </CardContent>
            )}
          </Card>
        </div>

        {/* Recent Matches Stats */}
        <Card className="bg-white shadow-none border-none">
          <CardHeader className="">
            <CardTitle className="text-xl text-ns-title font-semibold">
              Recent Matches Stats
            </CardTitle>
          </CardHeader>
          {role === "pro" ? (
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Your current plan is free,Upgrade to enable this feature
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                Upgrade Now
              </Button>
            </CardContent>
          ) : (
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Your current plan is free,Upgrade to enable this feature
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                Upgrade Now
              </Button>
            </CardContent>
          )}
        </Card>

        {/* Player Chemistry Insights */}
        <Card className="bg-white shadow-none border-none">
          <CardHeader className="">
            <CardTitle className="text-xl text-ns-title font-semibold">
              Player Chemistry Insights
            </CardTitle>
          </CardHeader>
          {role === "pro" ? (
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Your current plan is free,Upgrade to enable this feature
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                Upgrade Now
              </Button>
            </CardContent>
          ) : (
            <CardContent className="space-y-4">
              <p className="text-sm text-gray-600">
                Your current plan is free,Upgrade to enable this feature
              </p>
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 lg:py-5 rounded-md">
                Upgrade Now
              </Button>
            </CardContent>
          )}
        </Card>
      </div>
    </div>
  );
}
