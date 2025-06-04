import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import GoalAssistsChart from "./GoalAssistsChart";
import WinRateChart from "./WinRateChart";
import MatchResultsTable from "./MatchResultsTable";
import PlayerStatsComparison from "./PlayerStatsComparison";

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
          <Card className="bg-white shadow-none border-none py-0">
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
            <>
              <MatchResultsTable />
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

        {/* Player Chemistry Insights */}
        <Card className="bg-white shadow-none border-none">
          <CardHeader className="">
            <CardTitle className="text-xl text-ns-title font-semibold">
              Player Chemistry Insights
            </CardTitle>
            <p className=" text-ns-foreground text-sm">
              Goals per game average when playing together
            </p>
          </CardHeader>
          {role === "pro" ? (
            <>
              <PlayerStatsComparison />
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
    </div>
  );
}
