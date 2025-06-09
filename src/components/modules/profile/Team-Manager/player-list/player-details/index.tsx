"use client";

import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useRouter } from "next/navigation";
import PlayerInfo from "./player-information";
import PerformanceStats from "./performance-stats";
import PlayerRating from "./player-rating";

const TeamManagerPlayerDetails = () => {
  const router = useRouter();

  return (
    <div className=" bg-ns-white rounded-lg p-6 font-openSans">
      {/* Header */}
      <div className="flex items-center gap-3">
        <Button variant="ghost" size="icon" onClick={() => router.back()}>
          <ArrowLeft className="h-4 w-4" />
        </Button>
        <h1 className="text-xl font-semibold">View Details</h1>
      </div>

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
