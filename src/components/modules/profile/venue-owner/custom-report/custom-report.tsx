"use client";

import { useState } from "react";
import { Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { venues } from "./constant";
import BookingChart from "./bookings-chart";
import RevenueChart from "./revenue-chart";

export default function CustomReport() {
  const [selectedVenue, setSelectedVenue] = useState("");
  const [selectedDate, setSelectedDate] = useState("");

  const handleApplyFilter = () => {
    console.log("Applying filters:", {
      venue: selectedVenue,
      date: selectedDate,
    });
  };

  return (
    <div className="w-full p-8 bg-white rounded-lg">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Venue Analytics</h1>

      {/* -------------------- Filters -------------------- */}
      <div className="flex flex-col md:flex-row gap-4 mb-8">
        <Select value={selectedVenue} onValueChange={setSelectedVenue}>
          <SelectTrigger className="w-full py-5">
            <SelectValue placeholder="Venue Select" />
          </SelectTrigger>
          <SelectContent>
            {venues.map((venue) => (
              <SelectItem key={venue.id} value={venue.id}>
                {venue.name}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>

        <div className="relative w-full">
          <Input
            type="text"
            placeholder="mm/dd/yy"
            value={selectedDate}
            onChange={(e) => setSelectedDate(e.target.value)}
            className="w-full border border-gray-200 pr-10 px-3 py-5 focus:ring-0 focus-visible:ring-0 focus:border-transparent focus-visible:border-gray-300"
          />
          <Calendar
            className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
            size={18}
          />
        </div>

        <Button
          onClick={handleApplyFilter}
          className="w-full md:w-auto bg-blue-600 hover:bg-blue-700 text-white py-5 rounded-lg"
        >
          Apply Filter
        </Button>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-6 mb-8">
        <div className="p-6 bg-[#FAFAFA] rounded-xl">
          <div className="text-gray-500 text-sm mb-1">Total Booking</div>
          <div className="text-4xl font-bold mb-2">5</div>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            +3 this month
          </div>
        </div>

        <div className="p-6 bg-[#FAFAFA] rounded-xl">
          <div className="text-gray-500 text-sm mb-1">Total Revenue</div>
          <div className="text-4xl font-bold mb-2">$450</div>
          <div className="flex items-center text-green-500 text-sm">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="mr-1"
            >
              <path d="m5 12 7-7 7 7"></path>
              <path d="M12 19V5"></path>
            </svg>
            +3 this month
          </div>
        </div>
      </div>

      {/* Charts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <BookingChart />
        <RevenueChart />6
      </div>
    </div>
  );
}
