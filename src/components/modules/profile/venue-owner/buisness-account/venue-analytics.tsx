"use client";

import { Card, CardContent } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import EarningOverview from "./earning-overview";

export default function VenueAnalytics() {
  return (
    <div className="space-y-6 p-6">
      {/* Metrics Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className=" border-none shadow-none bg-[#FAFAFA]">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Booking</p>
              <p className="text-3xl font-bold">5</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+3 this month</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className=" border-none shadow-none bg-[#FAFAFA]">
          <CardContent className="pt-6">
            <div className="space-y-2">
              <p className="text-sm text-muted-foreground">Total Revenue</p>
              <p className="text-3xl font-bold">$450</p>
              <div className="flex items-center text-sm text-green-600">
                <TrendingUp className="h-4 w-4 mr-1" />
                <span>+3 this month</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* ------------- Just for Enterprise Accounts ------------------ */}
      <Card className=" border-none shadow-none bg-[#FAFAFA]">
        <CardContent className="pt-6">
          <div className="space-y-2">
            <p className="text-sm text-muted-foreground">Peak Booking Time</p>
            <p className="text-3xl font-bold">3:00 PM - 5:00 PM</p>
            <div className="flex items-center text-sm text-green-600">
              <TrendingUp className="h-4 w-4 mr-1" />
              <span>+3 this month</span>
            </div>
          </div>
        </CardContent>

        {/* --------------- Earning Overview Chart --------------- */}
      </Card>
      <EarningOverview />
    </div>
  );
}
