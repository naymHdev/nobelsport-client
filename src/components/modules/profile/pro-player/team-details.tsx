"use client";

import { MessageCircle, Check } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { AiOutlineMessage } from "react-icons/ai";
import NSButton from "@/components/ui/core/NSButton";

const teamMembers = [
  { name: "Robert Fox", avatar: "/placeholder.svg?height=60&width=60" },
  { name: "James Smith", avatar: "/placeholder.svg?height=60&width=60" },
  { name: "Chris Brown", avatar: "/placeholder.svg?height=60&width=60" },
];

const coachFeedback = [
  "Practice through balls",
  "Focus on defensive positioning",
  "Focus on improving passing accuracy and defensive positioning.",
];

export default function TeamDetails() {
  return (
    <Card className=" bg-transparent border-none shadow-none">
      <CardContent className=" space-y-6">
        {/* Team Details Header */}
        <div>
          <h1 className="text-xl font-semibold text-ns-title mb-6">
            Team Details
          </h1>

          {/* Team Information */}
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-gray-600">Team Name:</span>
              <span className="font-semibold text-ns-title">Red Foxes</span>
            </div>

            <div className="flex items-center gap-3">
              <span className="text-gray-600">Team Leader:</span>
              <div className="flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="/placeholder.svg?height=24&width=24" />
                  <AvatarFallback>JD</AvatarFallback>
                </Avatar>
                <span className="font-semibold text-ns-title">John Doe</span>
              </div>
            </div>
          </div>
        </div>

        {/* Team Members */}
        <div>
          <h2 className="text-lg font-medium text-gray-900 mb-4">
            Team Members
          </h2>
          <div className="flex gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="flex flex-col items-center">
                <Avatar className="w-15 h-15 mb-2">
                  <AvatarImage src={member.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {member.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <span className="text-sm text-ns-title text-center">
                  {member.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Send Message Button */}
        <div>
          <NSButton className=" flex items-center gap-1 bg-ns-secondary rounded-lg">
            <AiOutlineMessage className="w-4 h-4" />
            Send Message
          </NSButton>
        </div>

        {/* Coach's Feedback */}
        <div className="md:mt-10">
          <h2 className=" text-xl font-bold text-ns-title mb-4">
            Coach's Feedback
          </h2>
          <div className="space-y-3 bg-[#EFF6FF] rounded-lg p-4">
            {coachFeedback.map((feedback, index) => (
              <div key={index} className="flex items-start gap-3">
                <div className="w-5 h-5 bg-blue-600 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <Check className="w-3 h-3 text-white" />
                </div>
                <span className="text-gray-700">{feedback}</span>
              </div>
            ))}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
