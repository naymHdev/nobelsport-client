"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";

type DateStatus = "available" | "unavailable" | null;

export default function AvailabilityCalendar() {
  const [selectedDates, setSelectedDates] = useState<
    Record<number, DateStatus>
  >({
    10: "available",
    11: "unavailable",
    22: "unavailable",
    24: "available",
  });

  const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const daysInMonth = 31;

  const handleDateClick = (date: number) => {
    setSelectedDates((prev) => {
      const current = prev[date];
      let next: DateStatus;

      if (current === null || current === undefined) {
        next = "available";
      } else if (current === "available") {
        next = "unavailable";
      } else {
        next = null;
      }

      const updated = { ...prev };
      if (next === null) {
        delete updated[date];
      } else {
        updated[date] = next;
      }

      return updated;
    });
  };

  const getDateClassName = (date: number) => {
    const status = selectedDates[date];
    return cn(
      "w-10 h-10 flex items-center justify-center cursor-pointer hover:bg-gray-100 text-ns-title",
      {
        "bg-green-200 text-green-800": status === "available",
        "bg-red-200 text-red-800": status === "unavailable",
        "text-gray-700": !status,
      }
    );
  };

  // Generate calendar grid starting from day 1 being on a Monday (index 1)
  const generateCalendarGrid = () => {
    const grid = [];
    const firstDayOfMonth = 1; // Monday (0=Sun, 1=Mon, etc.)

    // Add empty cells for days before the 1st
    for (let i = 0; i < firstDayOfMonth; i++) {
      grid.push(<div key={`empty-${i}`} className="w-10 h-10"></div>);
    }

    // Add all days of the month
    for (let date = 1; date <= daysInMonth; date++) {
      grid.push(
        <div
          key={date}
          className={getDateClassName(date)}
          onClick={() => handleDateClick(date)}
        >
          {date}
        </div>
      );
    }

    return grid;
  };

  return (
    <div className=" -mt-10">
      {/* Left decorative stripe */}
      <div className="w-8 bg-gradient-to-br from-pink-300 to-pink-400 relative overflow-hidden">
        <div
          className="absolute inset-0 bg-white bg-opacity-20"
          style={{
            backgroundImage:
              "repeating-linear-gradient(45deg, transparent, transparent 4px, rgba(255,255,255,0.3) 4px, rgba(255,255,255,0.3) 8px)",
          }}
        ></div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8 font-openSans text-ns-title">
        <Card className=" border-none shadow-none bg-transparent">
          <CardContent className="space-y-4">
            {/* Days of week header */}
            <div className="grid grid-cols-7 gap-1 mb-2">
              {daysOfWeek.map((day) => (
                <div
                  key={day}
                  className="w-10 h-8 flex items-center justify-center text-sm font-medium text-gray-500"
                >
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar grid */}
            <div className="grid grid-cols-7 gap-1">
              {generateCalendarGrid()}
            </div>

            {/* Legend */}
            <div className="flex items-center gap-4 pt-4 text-sm">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-green-200 rounded"></div>
                <span className="text-gray-700">Available</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 bg-red-200 rounded"></div>
                <span className="text-gray-700">Unavailable</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
