"use client";

import { ArrowLeft, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Card, CardHeader } from "@/components/ui/card";
import { useRouter } from "next/navigation";
import fieldFormation from "../../../../../assets/images/player-view.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";

const TeamManagerTeamDetails = () => {
  const router = useRouter();

  return (
    <Card className=" bg-white shadow-none border-none font-openSans">
      {/* Header */}
      <CardHeader className=" flex gap-3">
        <Button
          size="icon"
          onClick={() => router.back()}
          className="mr-2 rounded-full bg-[#F8F8F8CC] text-ns-title hover:bg-[#ddd9d9cc] hover:cursor-pointer"
        >
          <ArrowLeft className=" size-6" />
        </Button>
        <h1 className="text-2xl font-bold text-ns-title">Team Details</h1>
      </CardHeader>

      <div className="p-4 space-y-6">
        <div className="space-y-2">
          <label className="text-[16px] text-ns-title">Formation</label>
          <Select defaultValue="4-4-2">
            <SelectTrigger className="w-full px-4 py-5 rounded focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="4-4-2">4-4-2</SelectItem>
              <SelectItem value="4-3-3">4-3-3</SelectItem>
              <SelectItem value="3-5-2">3-5-2</SelectItem>
              <SelectItem value="4-5-1">4-5-1</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Total Players */}
        <div className="space-y-2">
          <label className="text-[16px] text-ns-title">
            Total Number of players
          </label>
          <Select defaultValue="10">
            <SelectTrigger className="w-full px-4 py-5 rounded focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 mt-1">
              <SelectValue />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="10">10 Players</SelectItem>
              <SelectItem value="11">11 Players</SelectItem>
              <SelectItem value="9">9 Players</SelectItem>
              <SelectItem value="8">8 Players</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* ----------- Soccer Field -----------*/}
        <div>
          <Image
            src={fieldFormation}
            alt="Soccer Field"
            width={800}
            height={800}
            className="w-full h-[800px] rounded-lg"
          />
        </div>

        {/* ----------------- Player List ---------------- */}
        <div className="space-y-4">
          <h3 className=" font-bold text-ns-title text-[16px]">Player List</h3>

          {/* Goalkeeper Section */}
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">
              Goalkeeper
            </h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">
              Defenders 1
            </h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">
              Defenders 2
            </h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">
              Midfielders
            </h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">Forwards</h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>
          <div className="space-y-2 bg-ns-light p-3 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">
              Substitute Player
            </h4>
            <div className="flex gap-2">
              <Input
                placeholder="Search player"
                className="flex-1 px-4 py-5 rounded focus:outline-none bg-ns-white focus-visible:ring-0 focus-visible:border-neutral-200"
              />
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-4 py-5">
                <Send className="w-4 h-4 mr-2" />
                Send Invitation
              </Button>
            </div>
          </div>

          {/* ----------------- Set timer for substitution---------------- */}
          <h4 className="text-[16px] text-ns-title font-bold">
            Set timer for substitution
          </h4>
          <div className="space-y-2 bg-ns-light p-4 rounded-lg">
            <h4 className="text-sm font-medium text-ns-foreground">Set time</h4>
            <div className="flex gap-3">
              <Select defaultValue="10">
                <SelectTrigger className="flex-1 h-12 w-full px-4 py-5 rounded focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="5">5 Min</SelectItem>
                  <SelectItem value="10">10 Min</SelectItem>
                  <SelectItem value="15">15 Min</SelectItem>
                  <SelectItem value="20">20 Min</SelectItem>
                  <SelectItem value="30">30 Min</SelectItem>
                  <SelectItem value="45">45 Min</SelectItem>
                  <SelectItem value="60">60 Min</SelectItem>
                </SelectContent>
              </Select>

              {/* Set Time Button */}
              <Button className=" bg-ns-primary hover:bg-green-700 text-white px-5 py-5">
                <Clock className="w-4 h-4 mr-2" />
                Set Time
              </Button>
            </div>
          </div>
        </div>
        <NSButton className=" w-full uppercase font-semibold text-lg bg-ns-secondary text-white rounded-md py-3">
          Save
        </NSButton>
      </div>
    </Card>
  );
};

export default TeamManagerTeamDetails;
