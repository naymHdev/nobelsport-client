"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import MatchList from "./match-list";
import TeamList from "./team-list";

export default function TeamAndMatchHistory() {
  const [activeTab, setActiveTab] = useState<"team" | "match">("match");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("this-week");

  return (
    <div className=" bg-white rounded-xl">
      {/* Header with Tabs */}
      <div className="bg-white rounded-lg">
        <div className="border-b border-gray-200">
          <div className="flex">
            <button
              onClick={() => setActiveTab("team")}
              className={cn(
                "px-6 py-4 text-sm font-medium border-b-2 transition-colors",
                activeTab === "team"
                  ? "border-ns-title text-ns-title"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              Team List
            </button>
            <button
              onClick={() => setActiveTab("match")}
              className={cn(
                "px-6 py-4 text-sm font-medium border-b-2 transition-colors",
                activeTab === "match"
                  ? "border-ns-title text-ns-title"
                  : "border-transparent text-gray-500 hover:text-gray-700"
              )}
            >
              Match List
            </button>
          </div>
        </div>

        {/* Filters */}
        <div className="p-6 flex flex-col md:flex-row items-center gap-4 overflow-hidden">
          <div className="w-full">
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full shadow-none">
                <SelectValue placeholder="All Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="accepted">Accepted</SelectItem>
                <SelectItem value="pending">Pending</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Select value={timeFilter} onValueChange={setTimeFilter}>
              <SelectTrigger className="w-full shadow-none">
                <SelectValue placeholder="This Week" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="this-week">This Week</SelectItem>
                <SelectItem value="this-month">This Month</SelectItem>
                <SelectItem value="all-time">All Time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="w-full">
            <Button className="bg-blue-500 hover:bg-blue-600 w-full">
              Apply Filter
            </Button>
          </div>
        </div>
      </div>

      {/* Display content based on active tab */}
      <div>
        {activeTab === "team" ? (
          <div>
            <TeamList />
          </div>
        ) : (
          <div>
            <MatchList />
          </div>
        )}
      </div>
    </div>
  );
}
