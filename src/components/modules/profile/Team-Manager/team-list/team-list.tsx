"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  ChevronDownIcon,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { useDebounce } from "@/hooks/use-debounce";
import NSButton from "@/components/ui/core/NSButton";
import { mockTeams, Team } from "./constant";
import MyTeams from "./my-teams";
import CreateTeamModal from "./create-team-modal";
import AllTeamStatus from "./all-team-status";

export default function MyTeamList() {
  // State
  const [activeTab, setActiveTab] = useState("my-teams");
  const [teams, setTeams] = useState<Team[]>([]);
  const [filteredTeams, setFilteredTeams] = useState<Team[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [filterDate, setFilterDate] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const debouncedFilterDate = useDebounce(filterDate, 300);

  const ITEMS_PER_PAGE = 4;
  const TOTAL_PAGES = Math.ceil(filteredTeams.length / ITEMS_PER_PAGE);

  // Fetch teams (simulated)
  useEffect(() => {
    const fetchTeams = async () => {
      setIsLoading(true);
      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 500));
      setTeams(mockTeams);
      setFilteredTeams(mockTeams);
      setIsLoading(false);
    };

    fetchTeams();
  }, []);

  // Filter teams based on date
  useEffect(() => {
    if (!debouncedFilterDate) {
      setFilteredTeams(teams);
      return;
    }

    const filtered = teams.filter((team) => {
      const date = new Date(debouncedFilterDate);
      const teamDate = team.createdAt;
      return (
        teamDate.getFullYear() === date.getFullYear() &&
        teamDate.getMonth() === date.getMonth() &&
        teamDate.getDate() === date.getDate()
      );
    });

    setFilteredTeams(filtered);
    setCurrentPage(1); // Reset to first page when filtering
  }, [debouncedFilterDate, teams]);

  // Get current page items
  const getCurrentPageItems = useCallback(() => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;
    return filteredTeams.slice(startIndex, endIndex);
  }, [currentPage, filteredTeams]);

  // Handlers
  const handleApplyFilter = () => {
    // Filter is already applied via useEffect, this just provides feedback
    console.log("Filter applied:", filterDate);
  };

  const handleToggleVisibility = (teamId: string) => {
    setTeams((prev) =>
      prev.map((team) =>
        team.id === teamId ? { ...team, isVisible: !team.isVisible } : team
      )
    );
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <div className="w-full bg-white rounded-lg">
      <div className="p-6">
        <h1 className="text-xl font-semibold mb-6">Team List</h1>

        <Tabs
          defaultValue="my-teams"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full"
        >
          <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-0 items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-10 p-0 bg-transparent border-gray-200">
              <TabsTrigger
                value="my-teams"
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
              >
                My Team List
              </TabsTrigger>
              <TabsTrigger
                value="all-teams"
                className=" font-semibold rounded-none px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
              >
                All Team Status
              </TabsTrigger>
            </TabsList>

            <CreateTeamModal />
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1 w-full">
              <Input
                type="date"
                placeholder="Filter by Date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full pr-10 px-2 py-5"
              />
            </div>
            <div className=" flex-1 w-full">
              <NSButton
                onClick={handleApplyFilter}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-md"
              >
                Apply Filter
              </NSButton>
            </div>
          </div>

          <TabsContent value="my-teams" className="mt-0 p-0">
            <MyTeams
              getCurrentPageItems={getCurrentPageItems}
              isLoading={isLoading}
              handleToggleVisibility={handleToggleVisibility}
            />
          </TabsContent>

          <TabsContent value="all-teams" className="mt-0 p-0">
            <AllTeamStatus />
          </TabsContent>

          {/* ------------------ Pagination ---------------- */}
          {filteredTeams.length > 0 && (
            <div className="flex items-center justify-end mt-6 space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="h-8 w-8 border"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: Math.min(4, TOTAL_PAGES) }).map((_, i) => {
                const page = i + 1;
                return (
                  <Button
                    key={page}
                    variant={currentPage === page ? "default" : "ghost"}
                    size="sm"
                    onClick={() => handlePageChange(page)}
                    className={`h-8 w-8 border ${
                      currentPage === page
                        ? "bg-blue-600 text-white hover:bg-blue-700"
                        : "text-gray-600 hover:text-gray-900"
                    }`}
                  >
                    {page}
                  </Button>
                );
              })}

              <Button
                variant="ghost"
                size="icon"
                onClick={() =>
                  handlePageChange(Math.min(TOTAL_PAGES, currentPage + 1))
                }
                disabled={currentPage === TOTAL_PAGES}
                className="h-8 w-8 border"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          )}
        </Tabs>
      </div>
    </div>
  );
}
