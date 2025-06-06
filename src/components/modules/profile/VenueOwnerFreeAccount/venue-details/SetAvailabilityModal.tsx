"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Clock, Plus } from "lucide-react";
import NSButton from "@/components/ui/core/NSButton";

export default function SetAvailabilityModal() {
  const [isOpen, setIsOpen] = useState(false);
  const [startTime, setStartTime] = useState("9:00 AM - 11:00 AM");
  const [endTime, setEndTime] = useState("9:00 AM - 11:00 AM");
  const [availability, setAvailability] = useState("available");

  const handleSaveChanges = () => {
    // Handle save logic here
    console.log("Saving changes:", { startTime, endTime, availability });
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <NSButton className="bg-blue-600 hover:bg-blue-700 flex items-center space-x-1 rounded-lg">
          <Plus className="h-4 w-4 mr-1" />
          Add New Time
        </NSButton>
      </DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader className="flex flex-row border-b border-gray-300 items-center justify-between space-y-0 pb-1">
          <DialogTitle className="text-2xl font-extrabold text-ns-title">
            Set Availability
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Start Time */}
          <div className="space-y-2">
            <Label
              htmlFor="start-time"
              className=" text-ns-title font-semibold text-[16px]"
            >
              Start Time
            </Label>
            <div className="relative">
              <Input
                id="start-time"
                value={startTime}
                onChange={(e) => setStartTime(e.target.value)}
                className="pr-10  px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200 "
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* End Time */}
          <div className="space-y-2">
            <Label
              htmlFor="end-time"
              className=" text-ns-title font-semibold text-[16px]"
            >
              End Time
            </Label>
            <div className="relative">
              <Input
                id="end-time"
                value={endTime}
                onChange={(e) => setEndTime(e.target.value)}
                className="pr-10  px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
              />
              <Clock className="absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* Availability */}
          <div className="space-y-3">
            <Label className=" text-ns-title font-semibold text-[16px]">
              Availability
            </Label>
            <RadioGroup
              value={availability}
              onValueChange={setAvailability}
              className="flex items-center gap-3"
            >
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="available" id="available" />
                <Label htmlFor="available" className="text-sm font-normal">
                  Available
                </Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="unavailable" id="unavailable" />
                <Label htmlFor="unavailable" className="text-sm font-normal">
                  Unavailable
                </Label>
              </div>
            </RadioGroup>
            <p className="text-xs text-muted-foreground">
              Choose whether the time slot will be available or unavailable for
              bookings
            </p>
          </div>

          {/* Save Button */}
          <NSButton
            onClick={handleSaveChanges}
            className="w-full rounded-xl bg-ns-primary hover:bg-green-700 text-white font-medium py-3"
          >
            SAVE CHANGES
          </NSButton>
        </div>
      </DialogContent>
    </Dialog>
  );
}
