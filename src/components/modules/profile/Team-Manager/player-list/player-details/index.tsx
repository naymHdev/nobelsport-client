"use client";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import PlayerInfo from "./player-information";
import PerformanceStats from "./performance-stats";
import PlayerRating from "./player-rating";
import NSBackButton from "@/components/ui/core/NSBackButton";

const TeamManagerPlayerDetails = () => {
  return (
    <div className=" bg-ns-white rounded-lg p-6 font-openSans">
      {/* Header */}
      <NSBackButton label="Player Details" />

      {/* Navigation Tabs */}
      <Tabs defaultValue="player-info" className="mt-6">
        <TabsList className="flex flex-wrap space-x-6 bg-transparent">
          <TabsTrigger
            value="player-info"
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
          >
            Player Information
          </TabsTrigger>
          <TabsTrigger
            value="performance"
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
          >
            Performance Stats
          </TabsTrigger>
          <TabsTrigger
            value="rating"
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
          >
            Player Rating
          </TabsTrigger>
        </TabsList>

        <TabsContent value="player-info">
          <PlayerInfo />
        </TabsContent>

        <TabsContent value="performance">
          <PerformanceStats />
        </TabsContent>

        <TabsContent value="rating">
          <PlayerRating />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default TeamManagerPlayerDetails;
