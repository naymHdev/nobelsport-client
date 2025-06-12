"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardContent } from "@/components/ui/card";
import NSBackButton from "@/components/ui/core/NSBackButton";
import NSButton from "@/components/ui/core/NSButton";

export default function TeamManagerSetPlayerPerformance() {
  const [goalsScored, setGoalsScored] = useState("");
  const [assists, setAssists] = useState("");
  const [yellowCards, setYellowCards] = useState("");
  const [redCards, setRedCards] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      goalsScored,
      assists,
      yellowCards,
      redCards,
    });
  };

  return (
    <Card className=" p-6 border-none shadow-none">
      <NSBackButton label="Set Player Performance" />
      <CardContent className="">
        {/* Form */}
        <div className="space-y-6">
          {/* Goals Scored */}
          <div className="space-y-2">
            <Label
              htmlFor="goals-scored"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Goals Scored
            </Label>
            <Select value={goalsScored} onValueChange={setGoalsScored}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Assists */}
          <div className="space-y-2">
            <Label
              htmlFor="assists"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Assists
            </Label>
            <Select value={assists} onValueChange={setAssists}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
                <SelectItem value="3">3</SelectItem>
                <SelectItem value="4">4</SelectItem>
                <SelectItem value="5">5</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Yellow Cards */}
          <div className="space-y-2">
            <Label
              htmlFor="yellow-cards"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Yellow Cards
            </Label>
            <Select value={yellowCards} onValueChange={setYellowCards}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
                <SelectItem value="2">2</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Red Cards */}
          <div className="space-y-2">
            <Label
              htmlFor="red-cards"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Red Cards
            </Label>
            <Select value={redCards} onValueChange={setRedCards}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="0">0</SelectItem>
                <SelectItem value="1">1</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <NSButton
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Set Player Performance
          </NSButton>
        </div>
      </CardContent>
    </Card>
  );
}
