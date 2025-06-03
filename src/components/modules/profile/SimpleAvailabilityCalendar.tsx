"use client";

import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";

export default function SimpleAvailabilityCalendar() {
  const [availability] = useState<Map<string, "available" | "unavailable">>(
    new Map([
      ["2024-01-10", "available"],
      ["2024-01-11", "unavailable"],
      ["2024-01-22", "unavailable"],
      ["2024-01-24", "available"],
    ])
  );

  const formatDateKey = (date: Date) => {
    return date.toISOString().split("T")[0];
  };

  const modifiers = {
    available: (date: Date) =>
      availability.get(formatDateKey(date)) === "available",
    unavailable: (date: Date) =>
      availability.get(formatDateKey(date)) === "unavailable",
  };

  const modifiersStyles = {
    available: {
      backgroundColor: "#dcfce7",
      color: "#166534",
      fontWeight: "500",
    },
    unavailable: {
      backgroundColor: "#fecaca",
      color: "#dc2626",
      fontWeight: "500",
    },
  };

  return ( 
    <div className="space-y-4">
      <Calendar
        mode="single"
        modifiers={modifiers}
        modifiersStyles={modifiersStyles}
        className="w-full"
      /> m

      {/* Legend */}
      <div className="flex items-center gap-6 text-sm">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-green-200"></div>
          <span>Available</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded bg-red-200"></div>
          <span>Unavailable</span>
        </div>
      </div>
    </div>
  );
}
