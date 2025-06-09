"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {  ChevronLeft, ChevronRight } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import NSButton from "@/components/ui/core/NSButton";
import { Button } from "@/components/ui/button";
import PlayerListsCards from "./player-cards";

const TeamManagerPlayers = () => {
  return (
    <>
      <div className="w-full bg-white rounded-lg">
        <div className="p-6">
          <h1 className="text-xl font-semibold mb-6">Player List</h1>

          <Tabs defaultValue="my-teams" className="w-full">
            <div className="flex flex-wrap md:flex-nowrap gap-6 md:gap-0 items-center justify-between mb-6">
              <TabsList className="grid w-full max-w-md grid-cols-2 h-10 p-0 bg-transparent border-gray-200">
                <TabsTrigger
                  value="my-teams"
                  className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b-2 rounded-none data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
                >
                  Player List
                </TabsTrigger>
                <TabsTrigger
                  value="all-teams"
                  className=" font-semibold rounded-none px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
                >
                  Top Ranking Player
                </TabsTrigger>
              </TabsList>
            </div>

            {/* ------------------------ Filter ------------------------ */}
            <div className="flex flex-col sm:flex-row items-center gap-4 mb-6">
              {/* ------------------------ All Status ------------------------ */}
              <Select>
                <SelectTrigger className="w-full py-5 shadow-none">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="unpublished">Unpublished</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              {/* ------------------------ Age Filter ------------------------ */}
              <Select>
                <SelectTrigger className="w-full py-5 shadow-none">
                  <SelectValue placeholder="Age" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">20</SelectItem>
                  <SelectItem value="upcoming">23</SelectItem>
                  <SelectItem value="unpublished">24</SelectItem>
                  <SelectItem value="archived">25</SelectItem>
                  <SelectItem value="completed">26</SelectItem>
                </SelectContent>
              </Select>
              {/* ------------------------ Position Filter ------------------------ */}
              <Select>
                <SelectTrigger className="w-full py-5 shadow-none">
                  <SelectValue placeholder="Position" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">Forward</SelectItem>
                  <SelectItem value="upcoming">Mid Filed</SelectItem>
                  <SelectItem value="unpublished">Defend</SelectItem>
                  <SelectItem value="archived">Goalkeeper</SelectItem>
                </SelectContent>
              </Select>
              {/* ------------------------ Skill Level Filter ------------------------ */}
              <Select>
                <SelectTrigger className="py-5 shadow-none w-full">
                  <SelectValue placeholder="Skill Level" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="upcoming">Upcoming</SelectItem>
                  <SelectItem value="unpublished">Unpublished</SelectItem>
                  <SelectItem value="archived">Archived</SelectItem>
                  <SelectItem value="completed">Completed</SelectItem>
                </SelectContent>
              </Select>
              <div className="w-full">
                <NSButton className="bg-blue-600 hover:bg-blue-700 text-white w-full rounded-md">
                  Apply Filter
                </NSButton>
              </div>
            </div>

            <TabsContent value="my-teams" className="mt-0 p-0">
              <PlayerListsCards />
            </TabsContent>

            <TabsContent value="all-teams" className="mt-0 p-0">
              {/* <AllTeamStatus /> */}
            </TabsContent>

            {/* ------------------ Pagination ---------------- */}
            <div className="flex items-center justify-end mt-6 space-x-1">
              <Button variant="ghost" size="icon" className="h-8 w-8 border">
                <ChevronLeft className="h-4 w-4" />
              </Button>

              {Array.from({ length: Math.min(10, 4) }).map((_, i) => {
                const page = i + 1;
                return (
                  <Button key={page} size="sm" className={`h-8 w-8 border`}>
                    {page}
                  </Button>
                );
              })}

              <Button variant="ghost" size="icon" className="h-8 w-8 border">
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default TeamManagerPlayers;
