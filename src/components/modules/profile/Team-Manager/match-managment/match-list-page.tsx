"use client";

import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useMatches } from "@/hooks/use-matches";
import { MatchFilters } from "./match-filters";
import { MatchCard } from "./match-card";
import { Pagination } from "./pagination";
import Link from "next/link";
import MatchManagementAllMatchList from "./all-match-list";

export default function MatchListPage() {
  const {
    matches,
    filters,
    pagination,
    activeTab,
    setActiveTab,
    updateFilters,
    applyFilters,
    setCurrentPage,
  } = useMatches();

  const handleMatchAction = (action: string, matchId: string) => {
    console.log(`${action} for match ${matchId}`);
    // Implement specific action logic here
  };

  return (
    <div className="p-6 space-y-6 bg-white rounded-lg">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold">Match List</h1>
        <Link href={"/profile/match-management/create-team"}>
          <Button className="bg-green-600 hover:bg-green-700">
            <Plus className="h-4 w-4 mr-2" />
            Create Team
          </Button>
        </Link>
      </div>

      {/* Tabs */}
      <Tabs
        value={activeTab}
        onValueChange={(value) => setActiveTab(value as "my" | "all")}
      >
        <TabsList className=" bg-transparent">
          <TabsTrigger
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold rounded-none focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
            value="my"
          >
            My Match List
          </TabsTrigger>
          <TabsTrigger
            className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none rounded-none data-[state=active]:rounded-none transition-colors"
            value="all"
          >
            All Match
          </TabsTrigger>
        </TabsList>

        <TabsContent defaultValue={"my"} value="my" className="space-y-6 mt-8">
          {/* Filters */}
          <MatchFilters
            filters={filters}
            onFiltersChange={updateFilters}
            onApplyFilters={applyFilters}
          />

          {/* Match Cards */}
          <div className="space-y-4">
            {matches.map((match) => (
              <MatchCard
                key={match.id}
                match={match}
                onBookVenue={(id) => handleMatchAction("Book Venue", id)}
                onSendLineup={(id) => handleMatchAction("Send Line-up", id)}
                onViewBalance={(id) =>
                  handleMatchAction("View Team Balance", id)
                }
                onPublishMatch={(id) => handleMatchAction("Publish Match", id)}
                onUnpublishMatch={(id) =>
                  handleMatchAction("Unpublish Match", id)
                }
                onMarkCompleted={(id) =>
                  handleMatchAction("Mark as Completed", id)
                }
                onWriteAnnouncements={(id) =>
                  handleMatchAction("Write Match Announcements", id)
                }
                onViewPerformance={(id) =>
                  handleMatchAction("See Player's Performance", id)
                }
              />
            ))}
          </div>

          {/* Pagination */}
          {pagination.totalPages > 1 && (
            <Pagination pagination={pagination} onPageChange={setCurrentPage} />
          )}
        </TabsContent>

        {/* ---------------------- All Match List ---------------------- */}
        <TabsContent value="all">
          <MatchManagementAllMatchList />
        </TabsContent>
      </Tabs>
    </div>
  );
}
