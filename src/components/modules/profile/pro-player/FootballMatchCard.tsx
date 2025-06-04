"use client";

import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { IoSettings } from "react-icons/io5";
import { FaCalendarAlt, FaClock } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { Star } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PlayerStats from "./PlayerStats";
import TeamDetails from "./team-details";

export default function FootballMatchCard() {
  return (
    <>
      <Card className=" p-0 border-none shadow-none bg-white">
        <Card className="w-full overflow-hidden p-0 border-none shadow-none">
          {/* Header Section */}
          <div className=" bg-ns-primary text-white p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-6 h-6  rounded-full flex bg-white items-center justify-center">
                  <IoSettings className="w-5 h-5 text-ns-primary" />
                </div>
                <h1 className="text-xl font-semibold">Football Match</h1>
              </div>
              <Badge className="bg-green-400 hover:bg-green-600 text-white border-0 rounded-full">
                Completed
              </Badge>
            </div>

            <div className=" grid grid-cols-1 md:grid-cols-3 items-center gap-6 md:gap-0 text-sm">
              <div className="flex items-center gap-2">
                <FaCalendarAlt className="w-4 h-4" />
                <span>March 15, 2025</span>
              </div>
              <div className="flex items-center gap-2">
                <FaClock className="w-4 h-4" />
                <span>3:00 PM</span>
              </div>
              <div className="flex items-center gap-2">
                <FaLocationDot className="w-4 h-4" />
                <span>Central Park, New York</span>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <CardContent className="mt-6 space-y-6">
            {/* Match Details */}
            <div>
              <h2 className="text-xl font-semibold text-ns-title mb-4">
                Match Details
              </h2>
              <div className="space-y-3">
                <div>
                  <span className=" font-semibold text-ns-title">
                    Match Description:
                  </span>
                  <p className="text-gray-600 mt-1">
                    A friendly match to practice basic skills.
                  </p>
                </div>
                <div>
                  <span className=" text-ns-title font-semibold">
                    Opponent:
                  </span>
                  <span className="text-gray-600 ml-1">Team Red</span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Separator className=" w-full bg-gray-300" />

        {/* ------------------- Match Stats ---------------- */}
        <Card className="mt-6 p-0 border-none shadow-none bg-transparent">
          <CardContent>
            <div>
              <h2 className="text-xl font-semibold text-ns-title mb-4">
                Match Stats
              </h2>
              <div className="space-y-3">
                <div className="flex justify-between md:justify-start md:gap-56 items-center">
                  <span className="text-gray-700">Team Total Goals</span>
                  <span className="font-semibold text-gray-900">2</span>
                </div>
                <div className="flex justify-between md:justify-start md:gap-56 items-center">
                  <span className="text-gray-700">Total Team Shots</span>
                  <span className="font-semibold text-gray-900">6</span>
                </div>

                {/* Achievement Highlight */}
                <div className="flex items-center gap-2 mt-4 p-3 bg-yellow-50 rounded-lg">
                  <Star className="w-5 h-5 text-yellow-500 fill-current" />
                  <span className="text-gray-700">
                    Scored 2 goals in one match
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <Separator className=" w-full bg-gray-300" />

        {/* ------------------- Players Stats ---------------- */}
        <Card className=" border-none shadow-none p-0 mt-6">
          <CardHeader>
            <h2 className="text-xl font-semibold text-ns-title mb-4">
              Players Stats
            </h2>
          </CardHeader>
          <CardContent className="p-0 -mt-5">
            <PlayerStats />

            {/* Achievement Highlight */}
            <div className="px-6">
              <div className="flex items-center gap-2 mt-4 p-3 bg-yellow-50 rounded-lg">
                <Star className="w-5 h-5 text-yellow-500 fill-current" />
                <span className="text-gray-700">
                  Scored 2 goals in one match
                </span>
              </div>
            </div>
          </CardContent>
        </Card>
        <Separator className=" w-full bg-gray-300" />
        <TeamDetails />
      </Card>
    </>
  );
}
