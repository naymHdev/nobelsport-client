"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

interface PollOption {
  id: string;
  time: string;
  venue: string;
  label: string;
}

interface PollModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (selectedOption: string) => void;
}

export default function PollModal({
  isOpen,
  onClose,
  onSubmit,
}: PollModalProps) {
  const [selectedOption, setSelectedOption] = useState<string>("");

  const pollOptions: PollOption[] = [
    {
      id: "option1",
      time: "7 PM",
      venue: "Victory Park",
      label: "7 PM at Victory Park",
    },
    {
      id: "option2",
      time: "8 PM",
      venue: "Sports Center",
      label: "8 PM at Sports Center",
    },
    {
      id: "option3",
      time: "9 PM",
      venue: "Community Center",
      label: "9 PM at Community Center",
    },
  ];

  const handleSubmit = () => {
    if (selectedOption) {
      onSubmit(selectedOption);
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 backdrop-blur-sm flex items-center justify-center p-4 z-50">
      <Card className="w-full  bg-white max-w-md mx-auto border-none p-6 relative">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-xl font-semibold text-gray-900">
            New Poll Available!
          </h2>
          <div className="flex items-center gap-2">
            <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium">
              Active
            </span>
            {/* <Button
              variant="ghost"
              size="icon"
              onClick={onClose}
              className="h-8 w-8 rounded-full hover:bg-gray-100"
            >
              <X className="h-4 w-4" />
            </Button> */}
          </div>
        </div>

        <div className=" -mt-4">
          <h3 className="text-lg font-medium text-gray-900 mb-2">
            Vote for Match Time and Venue
          </h3>
          <p className="text-gray-600">
            Please select your preferred time and venue for the match on March
            10th
          </p>
        </div>

        <div className="space-y-3 mb-6">
          {pollOptions.map((option) => (
            <label
              key={option.id}
              className="flex items-center p-4 border border-gray-200 rounded-lg cursor-pointer hover:bg-gray-50 transition-colors"
            >
              <input
                type="radio"
                name="pollOption"
                value={option.id}
                checked={selectedOption === option.id}
                onChange={(e) => setSelectedOption(e.target.value)}
                className="h-4 w-4 text-blue-600 border-gray-300 focus:ring-blue-500"
              />
              <span className="ml-3 text-gray-700 font-medium">
                {option.label}
              </span>
            </label>
          ))}
        </div>

        <Button
          onClick={handleSubmit}
          disabled={!selectedOption}
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Submit
        </Button>

        <p className="text-center text-sm text-gray-500 mt-4">
          Poll closes in 23 hours
        </p>
      </Card>
    </div>
  );
}
