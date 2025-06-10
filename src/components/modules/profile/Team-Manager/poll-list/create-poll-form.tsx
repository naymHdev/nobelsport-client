"use client";

import React, { useState } from "react";
import { Plus, Trash2, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card } from "@/components/ui/card";
import NSBackButton from "@/components/ui/core/NSBackButton";
import NSButton from "@/components/ui/core/NSButton";

export default function CreatePollForm() {
  const [pollOptions, setPollOptions] = useState([
    "7 PM at Victory Park",
    "8 PM at Sports Center",
    "9 PM at Community Center",
  ]);
  const [selectedOption, setSelectedOption] = useState("");
  const [duration, setDuration] = useState("24 hours");
  const [endDate, setEndDate] = useState("");

  const addOption = () => {
    setPollOptions([...pollOptions, ""]);
  };

  const removeOption = (index: number) => {
    if (pollOptions.length > 1) {
      const newOptions = pollOptions.filter((_, i) => i !== index);
      setPollOptions(newOptions);
    }
  };

  const updateOption = (index: number, value: string) => {
    const newOptions = [...pollOptions];
    newOptions[index] = value;
    setPollOptions(newOptions);
  };

  return (
    <Card className="min-h-screen bg-ns-white rounded-lg p-6 border-none shadow-none font-openSans">
      <div className="space-y-6">
        {/* Header */}
        <NSBackButton label="Create New Poll" />

        {/* Poll Options */}
        <div className="space-y-4">
          <Label className=" font-semibold text-ns-neutral-dark">
            Poll Options
          </Label>
          <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
            {pollOptions.map((option, index) => (
              <div key={index} className="flex items-center gap-3">
                <div className="flex items-center space-x-2 flex-1">
                  <RadioGroupItem value={option} id={`option-${index}`} />
                  <Input
                    value={option}
                    onChange={(e) => updateOption(index, e.target.value)}
                    className="border py-5 bg-transparent px-3 text-sm focus-visible:ring-0"
                    placeholder="Enter poll option"
                  />
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-8 w-8 text-gray-400 hover:text-gray-600"
                  onClick={() => removeOption(index)}
                >
                  <Trash2 className=" size-6" />
                </Button>
              </div>
            ))}
          </RadioGroup>

          <Button
            variant="ghost"
            onClick={addOption}
            className="flex items-center gap-2 text-blue-600 hover:text-blue-700 p-0 h-auto font-normal"
          >
            <Plus className="h-4 w-4" />
            Add Another Option
          </Button>
        </div>

        {/* Poll Duration */}
        <div className="space-y-4">
          <Label className="text-sm font-medium text-gray-700">
            Poll Duration
          </Label>
          <div className="flex gap-3">
            <Select value={duration} onValueChange={setDuration}>
              <SelectTrigger className="w-32 py-5">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="1 hour">1 hour</SelectItem>
                <SelectItem value="6 hours">6 hours</SelectItem>
                <SelectItem value="12 hours">12 hours</SelectItem>
                <SelectItem value="24 hours">24 hours</SelectItem>
                <SelectItem value="3 days">3 days</SelectItem>
                <SelectItem value="1 week">1 week</SelectItem>
              </SelectContent>
            </Select>

            <div className="relative">
              <Input
                type="text"
                placeholder="mm/dd/yyyy"
                value={endDate}
                // onChange={(e) => setEndDate(e.target.value)}
                className="pr-10 px-3 py-5"
              />
              <Calendar className="absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            </div>
          </div>
        </div>

        {/* Create Poll Button */}
        <NSButton className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg">
          Create Poll
        </NSButton>
      </div>
    </Card>
  );
}
