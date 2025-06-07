"use client";

import { useState, useEffect, useCallback } from "react";
import {
  Calendar,
  ChevronLeft,
  ChevronRight,
  Eye,
  MessageSquare,
  PenSquare,
  Plus,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { cn } from "@/lib/utils";
import { useDebounce } from "@/hooks/use-debounce";
import NSButton from "@/components/ui/core/NSButton";

// Types
interface Team {
  id: string;
  name: string;
  logo: string;
  createdAt: Date;
  isVisible: boolean;
}

// Mock data
const mockTeams: Team[] = Array.from({ length: 20 }).map((_, i) => ({
  id: `team-${i + 1}`,
  name: "Victory FC",
  logo: "/placeholder.svg?height=40&width=40",
  createdAt: new Date(2025, 0, i + 1),
  isVisible: true,
}));

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

  const handleCreateTeam = () => {
    console.log("Create team clicked");
  };

  const handleEditTeam = (teamId: string) => {
    console.log("Edit team:", teamId);
  };

  const handleMessageTeam = (teamId: string) => {
    console.log("Message team:", teamId);
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
          <div className="flex items-center justify-between mb-6">
            <TabsList className="grid w-full max-w-md grid-cols-2 h-10 p-0 bg-transparent border-b border-gray-200">
              <TabsTrigger
                value="my-teams"
                className={cn(
                  "data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none h-10",
                  "text-gray-600 data-[state=active]:text-blue-600 font-medium"
                )}
              >
                My Team List
              </TabsTrigger>
              <TabsTrigger
                value="all-teams"
                className={cn(
                  "data-[state=active]:border-b-2 data-[state=active]:border-blue-600 data-[state=active]:shadow-none rounded-none h-10",
                  "text-gray-600 data-[state=active]:text-blue-600 font-medium"
                )}
              >
                All Team Status
              </TabsTrigger>
            </TabsList>

            <Button
              onClick={handleCreateTeam}
              className="bg-green-600 hover:bg-green-700 text-white"
            >
              <Plus className="h-4 w-4 mr-2" />
              Create Team
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
            <div className="relative flex-1">
              <Input
                type="date"
                placeholder="Filter by Date"
                value={filterDate}
                onChange={(e) => setFilterDate(e.target.value)}
                className="w-full pr-10 px-2 py-5"
              />
              <Calendar
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={18}
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
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
              </div>
            ) : getCurrentPageItems().length > 0 ? (
              <div className="space-y-4">
                {getCurrentPageItems().map((team) => (
                  <div
                    key={team.id}
                    className="border border-gray-200 rounded-lg p-4 flex items-center justify-between"
                  >
                    <div className="flex items-center space-x-3">
                      <img
                        src={team.logo || "/placeholder.svg"}
                        alt={`${team.name} logo`}
                        className="w-10 h-10 rounded-full bg-yellow-400"
                      />
                      <span className="font-medium">{team.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Button
                        variant="ghost"
                        size="icon"
                        onClick={() => handleToggleVisibility(team.id)}
                        className="text-amber-500 hover:text-amber-600"
                      >
                        <Eye className="h-5 w-5" />
                      </Button>
                      <Button
                        onClick={() => handleEditTeam(team.id)}
                        className="bg-amber-500 hover:bg-amber-600 text-white"
                        size="sm"
                      >
                        <PenSquare className="h-4 w-4 mr-1" />
                        Edit Team
                      </Button>
                      <Button
                        onClick={() => handleMessageTeam(team.id)}
                        className="bg-blue-600 hover:bg-blue-700 text-white"
                        size="sm"
                      >
                        <MessageSquare className="h-4 w-4 mr-1" />
                        Message Team
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-12 text-gray-500">
                No teams found. Try adjusting your filter or create a new team.
              </div>
            )}
          </TabsContent>

          <TabsContent value="all-teams" className="mt-0 p-0">
            <div className="text-center py-12 text-gray-500">
              All team status information would be displayed here.
            </div>
          </TabsContent>

          {/* Pagination */}
          {filteredTeams.length > 0 && (
            <div className="flex items-center justify-center mt-6 space-x-1">
              <Button
                variant="ghost"
                size="icon"
                onClick={() => handlePageChange(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="h-8 w-8"
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
                    className={`h-8 w-8 ${
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
                className="h-8 w-8"
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
