"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  Calendar,
  MapPin,
  Clock,
  MessageCircle,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import clubLogo from "@/assets/images/Dragons FC logo.png";
import Image from "next/image";
import NSInput from "@/components/ui/core/NSInput";
import { AiOutlineMessage } from "react-icons/ai";
import { Input } from "@/components/ui/input";

interface Match {
  id: number;
  title: string;
  homeTeam: string;
  awayTeam: string;
  date: string;
  venue: string;
  time: string;
  note: string;
  status: "send-request" | "pending" | "accepted" | "rejected";
  homeTeamLogo: string;
  awayTeamLogo: string;
}

export default function MatchManagementAllMatchList() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState("all");
  const [seasonFilter, setSeasonFilter] = useState("all");
  const [currentPage, setCurrentPage] = useState(1);

  const matches: Match[] = [
    {
      id: 1,
      title: "Summer League Season Match 2025 - Match #1",
      homeTeam: "Victory FC",
      awayTeam: "Dragons FC",
      date: "20th Nov 2025",
      venue: "Victory Park Stadium",
      time: "Pitch Reservation time 3:00 PM",
      note: "We would like to schedule a friendly match",
      status: "send-request",
      homeTeamLogo: "/placeholder.svg?height=40&width=40",
      awayTeamLogo: "/placeholder.svg?height=40&width=40",
    },
    {
      id: 2,
      title: "Summer League Season Match 2025 - Match #1",
      homeTeam: "Victory FC",
      awayTeam: "Dragons FC",
      date: "20th Nov 2025",
      venue: "Victory Park Stadium",
      time: "Pitch Reservation time 3:00 PM",
      note: "We would like to schedule a friendly match",
      status: "pending",
      homeTeamLogo: "/placeholder.svg?height=40&width=40",
      awayTeamLogo: "/placeholder.svg?height=40&width=40",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "send-request":
        return (
          <Badge className=" rounded-full px-3 py-1 bg-purple-100 text-purple-700 hover:bg-purple-200">
            Send Request
          </Badge>
        );
      case "pending":
        return (
          <Badge className=" rounded-full px-3 py-1 bg-orange-100 text-orange-700 hover:bg-orange-200">
            Pending
          </Badge>
        );
      case "accepted":
        return (
          <Badge className=" rounded-full px-3 py-1 bg-green-100 text-green-700 hover:bg-green-200">
            Accepted
          </Badge>
        );
      case "rejected":
        return (
          <Badge className=" rounded-full px-3 py-1 bg-red-100 text-red-700 hover:bg-red-200">
            Rejected
          </Badge>
        );
      default:
        return null;
    }
  };

  const getActionButtons = (status: string) => {
    if (status === "send-request") {
      return (
        <div className="flex flex-wrap gap-2">
          <Button
            size="sm"
            className="bg-green-600 hover:bg-green-700 text-white"
          >
            Accept
          </Button>
          <Button size="sm" variant="destructive">
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <AiOutlineMessage className="w-4 h-4" />
            Message Team
          </Button>
        </div>
      );
    } else if (status === "pending") {
      return (
        <div className="flex flex-wrap gap-2">
          <Button size="sm" variant="destructive">
            Reject
          </Button>
          <Button
            size="sm"
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <AiOutlineMessage className="w-4 h-4" />
            Message Team
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      <div className=" w-full font-openSans">
        {/* Header */}
        <div className="mb-6">
          {/* Filters */}
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-4">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
              <NSInput
                placeholder="Search"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10"
              />
            </div>

            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Select value={statusFilter} onValueChange={setStatusFilter}>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder="All Status" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Status</SelectItem>
                  <SelectItem value="pending">Pending</SelectItem>
                  <SelectItem value="accepted">Accepted</SelectItem>
                  <SelectItem value="rejected">Rejected</SelectItem>
                </SelectContent>
              </Select>

              <div className="flex items-center gap-2 w-full">
                <Input
                  type="date"
                  className="w-full py-5 px-2 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 shadow-none"
                />
              </div>

              <Select value={seasonFilter} onValueChange={setSeasonFilter}>
                <SelectTrigger className="w-full py-5">
                  <SelectValue placeholder="Season Match" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Seasons</SelectItem>
                  <SelectItem value="summer-2025">Summer 2025</SelectItem>
                  <SelectItem value="winter-2025">Winter 2025</SelectItem>
                </SelectContent>
              </Select>

              <Button className="bg-blue-600 hover:bg-blue-700 text-white py-5">
                Apply Filter
              </Button>
            </div>
          </div>
        </div>

        {/* Match Cards */}
        <div className="space-y-4 mb-8">
          {matches.map((match) => (
            <Card key={match.id} className="shadow-none">
              <CardContent className="">
                <div className="flex flex-col gap-4">
                  {/* Header with title and status */}
                  <div className="flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                    <h3 className=" text-2xl font-semibold text-ns-title">
                      {match.title}
                    </h3>
                    {getStatusBadge(match.status)}
                  </div>

                  {/* Teams */}
                  <div className="flex items-center gap-4">
                    <div className="flex flex-col items-center gap-3">
                      <Image
                        src={clubLogo}
                        alt={`${match.homeTeam} logo`}
                        className="rounded-full border-gray-200"
                      />
                      <span className=" font-bold md:font-semibold text-xs md:text-2xl text-ns-title">
                        {match.homeTeam}
                      </span>
                    </div>
                    <span className="text-gray-500 font-extrabold">Vs</span>
                    <div className="flex flex-col items-center gap-3">
                      <span className=" font-bold md:font-semibold text-xs md:text-2xl text-ns-title order-last">
                        {match.awayTeam}
                      </span>
                      <Image
                        src={clubLogo}
                        alt={`${match.awayTeam} logo`}
                        className=" border-gray-200"
                      />
                    </div>
                  </div>

                  {/* Match Details */}
                  <div className="flex flex-col gap-2 text-sm text-gray-600">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{match.date}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{match.venue}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      <span>{match.time}</span>
                    </div>
                  </div>

                  {/* Note */}
                  <div className="bg-blue-50 p-3 rounded-lg">
                    <p className="text-sm text-blue-800">
                      <span className="font-medium">Note: </span>
                      {match.note}
                    </p>
                  </div>

                  {/* Action Buttons */}
                  <div className="pt-2">{getActionButtons(match.status)}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-end gap-2">
          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="w-4 h-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page ? "bg-blue-600 hover:bg-blue-700" : ""
              }
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="sm"
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            disabled={currentPage === 4}
          >
            <ChevronRight className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
