"use client";

import { useState } from "react";
import {
  Search,
  Calendar,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const leaderboardData = [
  {
    rank: 1,
    team: "Thunder FC",
    mp: 1,
    w: 1,
    d: 0,
    l: 0,
    gf: 2,
    ga: 1,
    gd: "+1",
    pts: 3,
    rankColor: "bg-green-500",
  },
  {
    rank: 2,
    team: "Red Titans",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 3,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 4,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 5,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 6,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 7,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 8,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 9,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 10,
    team: "Desert Eagles",
    mp: 1,
    w: 0,
    d: 1,
    l: 0,
    gf: 1,
    ga: 1,
    gd: "0",
    pts: 1,
    rankColor: "bg-blue-500",
  },
  {
    rank: 11,
    team: "Striker United",
    mp: 1,
    w: 0,
    d: 0,
    l: 1,
    gf: 1,
    ga: 2,
    gd: "-1",
    pts: 0,
    rankColor: "bg-red-500",
  },
];

const TeamManagerLeaderBoard = () => {
  const [currentPage, setCurrentPage] = useState(1);

  return (
    <Card className="p-6 bg-white border-none shadow-none">
      <h1 className="text-2xl font-bold text-ns-title">LeaderBoard</h1>

      {/* Search and Filter Controls */}
      <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
        <div className="relative w-full">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <Input
            placeholder="Search"
            className="pl-10 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-[23px]"
          />
        </div>

        <div className="flex w-full items-center gap-2 border border-gray-300 rounded-md px-3 py-3">
          <Calendar className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-600">Filter by Date</span>
        </div>

        <div className="flex w-full items-center gap-2 border border-gray-300 rounded-md px-3 py-3">
          <span className="text-sm text-gray-600">Single March</span>
          <ChevronDown className="w-4 h-4 text-gray-400" />
        </div>

        <div className=" w-full">
          <Button className="bg-blue-500 w-full hover:bg-blue-600 text-ns-white px-6 py-[23px]">
            Apply Filter
          </Button>
        </div>
      </div>

      {/* ------------------------- Leaderboard Table ------------------------- */}
      <Table className="min-w-full rounded-lg">
        <TableHeader className=" text-ns-white bg-ns-primary rounded-lg">
          <TableRow>
            <TableHead className="px-4 py-3 text-ns-white">Ranking</TableHead>
            <TableHead className="px-4 py-3 text-ns-white">Team</TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              MP
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              W
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              D
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              L
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              GF
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              GA
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              GD
            </TableHead>
            <TableHead className="px-2 py-3 text-center text-ns-white">
              Pts
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {leaderboardData.map((team, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-white" : "bg-gray-50"}
            >
              <TableCell className="px-4 py-3">
                <div
                  className={`w-6 h-6 rounded-full ${team.rankColor} text-ns-white text-xs flex items-center justify-center font-medium`}
                >
                  {team.rank}
                </div>
              </TableCell>
              <TableCell className="px-4 py-3 font-medium">
                {team.team}
              </TableCell>
              <TableCell className="px-2 py-3 text-center">{team.mp}</TableCell>
              <TableCell className="px-2 py-3 text-center">{team.w}</TableCell>
              <TableCell className="px-2 py-3 text-center">{team.d}</TableCell>
              <TableCell className="px-2 py-3 text-center">{team.l}</TableCell>
              <TableCell className="px-2 py-3 text-center">{team.gf}</TableCell>
              <TableCell className="px-2 py-3 text-center">{team.ga}</TableCell>
              <TableCell
                className={`px-2 py-3 text-center ${
                  team.gd.startsWith("+")
                    ? "text-green-600"
                    : team.gd.startsWith("-")
                    ? "text-red-600"
                    : "text-gray-700"
                }`}
              >
                {team.gd}
              </TableCell>
              <TableCell className="px-2 py-3 text-center font-medium">
                {team.pts}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* Pagination */}
      <div className="flex items-center justify-end gap-2 mt-6">
        <Button variant="ghost" size="sm" className="p-2 border">
          <ChevronLeft className="w-4 h-4" />
        </Button>

        <Button
          size="sm"
          className={`w-8 h-8 p-0 ${
            currentPage === 1
              ? "bg-blue-500 text-ns-white"
              : "bg-white text-gray-600 border"
          }`}
          onClick={() => setCurrentPage(1)}
        >
          1
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="w-8 h-8 p-0 text-gray-600 border"
          onClick={() => setCurrentPage(2)}
        >
          2
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="w-8 h-8 p-0 text-gray-600 border"
          onClick={() => setCurrentPage(3)}
        >
          3
        </Button>
        <Button
          size="sm"
          variant="ghost"
          className="w-8 h-8 p-0 text-gray-600 border"
          onClick={() => setCurrentPage(4)}
        >
          4
        </Button>

        <Button variant="ghost" size="sm" className="p-2 border">
          <ChevronRight className="w-4 h-4" />
        </Button>
      </div>
    </Card>
  );
};

export default TeamManagerLeaderBoard;
