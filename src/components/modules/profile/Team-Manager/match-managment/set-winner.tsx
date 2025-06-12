"use client";

import { useState } from "react";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import NSBackButton from "@/components/ui/core/NSBackButton";
import { Card } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";
import NSButton from "@/components/ui/core/NSButton";

export default function TeamManagerSetWinner() {
  const [teamAGoal, setTeamAGoal] = useState("");
  const [teamAPlayer, setTeamAPlayer] = useState("");
  const [teamBGoal, setTeamBGoal] = useState("1");
  const [winnerTeam, setWinnerTeam] = useState("");

  const handleSubmit = () => {
    // Handle form submission logic here
    console.log({
      teamAGoal,
      teamAPlayer,
      teamBGoal,
      winnerTeam,
    });
  };

  return (
    <div className=" bg-ns-white rounded-lg p-6">
      <div className="">
        {/* Header */}
        <NSBackButton label="Set Winner" />

        {/* Form */}
        <Card className=" p-6 border-none mt-6">
          {/* Team A Goal */}
          <div className="space-y-2">
            <Label
              htmlFor="team-a-goal"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Team A Goal
            </Label>
            <Select value={teamAGoal} onValueChange={setTeamAGoal}>
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

          {/* Team A Player/Selection */}
          <div className="space-y-2">
            <Select value={teamAPlayer} onValueChange={setTeamAPlayer}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="player1">Player 1</SelectItem>
                <SelectItem value="player2">Player 2</SelectItem>
                <SelectItem value="player3">Player 3</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Team B Goal */}
          <div className="space-y-2">
            <Label
              htmlFor="team-b-goal"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Team B Goal
            </Label>
            <NSInput
              id="team-b-goal"
              type="number"
              value={teamBGoal}
              onChange={(e) => setTeamBGoal(e.target.value)}
              className="w-full"
              min="0"
              max="10"
            />
          </div>

          {/* Winner Team */}
          <div className="space-y-2">
            <Label
              htmlFor="winner-team"
              className="text-sm font-semibold text-ns-neutral-dark"
            >
              Winner Team
            </Label>
            <Select value={winnerTeam} onValueChange={setWinnerTeam}>
              <SelectTrigger className="w-full focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 py-5">
                <SelectValue placeholder="Select" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="team-a">Team A</SelectItem>
                <SelectItem value="team-b">Team B</SelectItem>
                <SelectItem value="draw">Draw</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Submit Button */}
          <NSButton
            onClick={handleSubmit}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium"
          >
            Set Winner
          </NSButton>
        </Card>
      </div>
    </div>
  );
}
