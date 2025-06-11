"use client";

import { Search, Trophy } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import { SlBadge } from "react-icons/sl";
import playerImg from "@/assets/images/john_smith.png";
import NSButton from "@/components/ui/core/NSButton";
import Link from "next/link";

const players = [
  {
    id: 1,
    name: "Jerome Bell",
    goals: 12,
    assists: 8,
    yellowCards: 2,
    redCards: 1,
  },
  {
    id: 2,
    name: "Cody Fisher",
    goals: 10,
    assists: 7,
    yellowCards: 3,
    redCards: 0,
  },
  {
    id: 3,
    name: "Jenny Wilson",
    goals: 9,
    assists: 9,
    yellowCards: 1,
    redCards: 1,
  },
  {
    id: 4,
    name: "Ronald Richards",
    goals: 8,
    assists: 6,
    yellowCards: 0,
    redCards: 0,
  },
  {
    id: 5,
    name: "Floyd Miles",
    goals: 7,
    assists: 5,
    yellowCards: 2,
    redCards: 1,
  },
];

const TopRankingPlayers = () => {
  return (
    <Card className="p-6 bg-white border-none shadow-none font-openSans">
      <div className="space-y-6">
        {/* Header */}
        <h1 className="text-2xl font-bold text-ns-title">Player List</h1>

        {/* Search Bar */}
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
          <Input
            placeholder="Search"
            className="pl-10 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5"
          />
        </div>

        {/* Top Players Section */}
        <div className="space-y-4">
          <div className="flex items-center gap-2  text-ns-title">
            <Trophy className="h-6 w-6" />
            <h2 className="text-xl font-semibold">
              Top Players - Goals & Assists
            </h2>
          </div>

          {/* Players Table */}
          <div className=" rounded-lg">
            <Table>
              <TableHeader>
                <TableRow className="bg-ns-primary hover:bg-green-800 rounded-lg">
                  <TableHead className="text-white font-medium">
                    Ranking
                  </TableHead>
                  <TableHead className="text-white font-medium">
                    Player Name
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Goals Scored
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Assists
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Yellow Cards
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Red Cards
                  </TableHead>
                  <TableHead className="text-white font-medium text-center">
                    Action
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {players.map((player) => (
                  <TableRow key={player.id} className="hover:bg-gray-50">
                    <TableCell className="w-20 py-4">
                      {player ? (
                        <div className="flex items-center justify-center w-8 h-8 rounded font-medium">
                          <SlBadge className=" size-6 text-ns-supportive-yellow" />
                        </div>
                      ) : (
                        <div className="flex items-center justify-center w-8 h-8 bg-blue-500 rounded-full text-white font-medium">
                          1
                        </div>
                      )}
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 bg-gray-300 rounded-full overflow-hidden">
                          <Image
                            src={playerImg}
                            alt={`${player.name} avatar`}
                            width={32}
                            height={32}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <span className="font-medium text-gray-900">
                          {player.name}
                        </span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="text-teal-600 font-medium">
                        {player.goals}
                      </span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-medium">{player.assists}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-medium">{player.yellowCards}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <span className="font-medium">{player.redCards}</span>
                    </TableCell>
                    <TableCell className="text-center">
                      <Link
                        href={
                          "/profile/top-ranking-player/set-player-performance"
                        }
                      >
                        <NSButton className=" rounded-lg bg-ns-light-blue">
                          Set Performance
                        </NSButton>
                      </Link>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>

          {/* Pagination */}
          <div className="flex items-center justify-end gap-2 pt-4">
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Previous page</span>‹
            </Button>
            <Button
              size="sm"
              className="h-8 w-8 p-0 bg-blue-600 hover:bg-blue-700"
            >
              1
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              2
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              3
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              4
            </Button>
            <Button variant="outline" size="sm" className="h-8 w-8 p-0">
              <span className="sr-only">Next page</span>›
            </Button>
          </div>
        </div>
      </div>
    </Card>
  );
};

export default TopRankingPlayers;
