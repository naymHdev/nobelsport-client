"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";
import { AiOutlineMessage } from "react-icons/ai";

type MatchStatus = "accepted" | "send-request" | "pending" | "completed";

interface Match {
  id: string;
  title: string;
  date: string;
  time: string;
  status: MatchStatus;
}

const matches: Match[] = [
  {
    id: "1",
    title: "Football at Central Park",
    date: "March 15, 2025",
    time: "3:00 PM",
    status: "accepted",
  },
  {
    id: "2",
    title: "Football at Central Park",
    date: "March 15, 2025",
    time: "3:00 PM",
    status: "send-request",
  },
  {
    id: "3",
    title: "Football at Central Park",
    date: "March 15, 2025",
    time: "3:00 PM",
    status: "pending",
  },
  {
    id: "4",
    title: "Football at Central Park",
    date: "March 15, 2025",
    time: "3:00 PM",
    status: "completed",
  },
];

export default function TeamAndMatchHistory() {
  const [activeTab, setActiveTab] = useState<"team" | "match">("match");
  const [statusFilter, setStatusFilter] = useState("all");
  const [timeFilter, setTimeFilter] = useState("this-week");
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (status: MatchStatus) => {
    const statusConfig = {
      accepted: {
        label: "Accepted",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      "send-request": {
        label: "Send Request",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      pending: {
        label: "Pending",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      completed: {
        label: "Completed",
        className: "bg-green-100 text-green-800 hover:bg-green-100",
      },
    };
    return statusConfig[status];
  };

  const getActionButtons = (status: MatchStatus) => {
    switch (status) {
      case "accepted":
        return (
          <div className="flex gap-2">
            <Button size="sm" className=" bg-ns-primary hover:bg-green-600">
              Accept
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "send-request":
        return (
          <div className="flex gap-2">
            <Button size="sm" className=" bg-ns-primary hover:bg-green-600">
              Accept
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Reject
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "pending":
        return (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Reject
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "completed":
        return (
          <div className="flex flex-wrap gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="">
        {/* Header with Tabs */}
        <div className="bg-white rounded-lg mb-6">
          <div className="border-b border-gray-200">
            <div className="flex">
              <button
                onClick={() => setActiveTab("team")}
                className={cn(
                  "px-6 py-4 text-sm font-medium border-b-2 transition-colors",
                  activeTab === "team"
                    ? " border-ns-title text-ns-title"
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
            <div className=" w-full">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className=" w-full shadow-none">
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

            <div className=" w-full">
              <Select value={timeFilter} onValueChange={setTimeFilter}>
                <SelectTrigger className=" w-full shadow-none">
                  <SelectValue placeholder="This Week" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="this-week">This Week</SelectItem>
                  <SelectItem value="this-month">This Month</SelectItem>
                  <SelectItem value="all-time">All Time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className=" w-full">
              <Button className=" bg-blue-500 hover:bg-blue-600 w-full">
                Apply Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Match Cards */}
        <div className="space-y-4 mb-8">
          {matches.map((match) => {
            const statusConfig = getStatusBadge(match.status);
            return (
              <Card
                key={match.id}
                className="p-6 bg-white shadow-none border-none"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">
                      {match.title}
                    </h3>
                    <div className="flex items-center text-gray-500 text-sm">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>
                        {match.date} • {match.time}
                      </span>
                    </div>
                  </div>
                  <Badge className={statusConfig.className}>
                    {statusConfig.label}
                  </Badge>
                </div>

                <div className="flex items-center justify-start">
                  {getActionButtons(match.status)}
                </div>
              </Card>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={cn(
                "h-8 w-8",
                currentPage === page && "bg-blue-500 hover:bg-blue-600"
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            disabled={currentPage === 4}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
