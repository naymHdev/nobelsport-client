"use client";

import { Phone, Mail, MapPin, Users } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import fbLogo from "@/assets/images/fb-logo.png";
import Image from "next/image";
import NSBackButton from "@/components/ui/core/NSBackButton";

interface ProfileDetailsProps {
  onBack?: () => void;
  onAccept?: () => void;
  onReject?: () => void;
  onMessage?: () => void;
}

export default function TeamManagerTeamDetails({
  onAccept,
  onReject,
  onMessage,
}: ProfileDetailsProps) {
  return (
    <div className="space-y-6 bg-white rounded-xl p-6 font-openSans">
      {/* Header */}
      <NSBackButton label="View Details" />

      {/* Profile Header */}
      <Card className=" border-none">
        <CardContent className="flex justify-between">
          <div className="flex items-center gap-4">
            <Avatar className="h-16 w-16">
              <AvatarImage
                src="/placeholder.svg?height=64&width=64"
                alt="Darrell Steward"
              />
              <AvatarFallback>DS</AvatarFallback>
            </Avatar>
            <div>
              <h2 className="text-2xl font-bold">Darrell Steward</h2>
              <p className="text-purple-600 font-medium">Team Manager</p>
            </div>
          </div>
          <div>
            <Badge
              variant="secondary"
              className="bg-orange-100 text-orange-700 hover:bg-orange-100"
            >
              Pending
            </Badge>
          </div>
        </CardContent>
      </Card>

      {/* Personal Information */}
      <Card className=" border-none">
        <CardHeader>
          <CardTitle className=" text-xl font-semibold text-ns-title">
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Team Manager Name
                </label>
                <p className="text-base font-medium">Robert Fox</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Email
                </label>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 text-gray-500" />
                  <p className="text-base">robert.fox@example.com</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 text-gray-500" />
                  <p className="text-base">123-456-7890</p>
                </div>
              </div>
            </div>
            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Location
                </label>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-gray-500" />
                  <p className="text-base">San Francisco, CA</p>
                </div>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Team admin type
                </label>
                <p className="text-base font-medium">Free Account</p>
              </div>
              <div>
                <label className="text-sm font-medium text-gray-600">
                  Total team
                </label>
                <div className="flex items-center gap-2">
                  <Users className="h-4 w-4 text-gray-500" />
                  <p className="text-base">12 team</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-6">
            <label className="text-sm font-medium text-gray-600">Bio</label>
            <p className="text-base mt-2 leading-relaxed">
              I'm a results-oriented Team Manager with a passion for leading
              teams, improving processes, and driving performance. With a strong
              background in team development and operations, I focus on creating
              positive work environments where people thrive. I enjoy solving
              challenges, building strong team culture, and aligning goals to
              deliver real business impact. Always learning, always improving —
              I bring energy, structure, and commitment to everything I do.
            </p>
          </div>
        </CardContent>
      </Card>

      {/* Team Request Section */}
      <Card className=" border-none">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-lg font-semibold">Send Request to My TEAM</h3>
            <div className="flex items-center gap-2">
              <span className="font-semibold text-ns-title">Victory FC</span>
              <Avatar className="h-8 w-8">
                <Image
                  src={fbLogo}
                  alt="Darrell Steward"
                  width={40}
                  height={40}
                  className="h-8 w-8"
                />
                <AvatarFallback>VFC</AvatarFallback>
              </Avatar>
            </div>
          </div>
          <div className="flex gap-3">
            <Button
              className="bg-green-600 hover:bg-green-700"
              onClick={onAccept}
            >
              Accept
            </Button>
            <Button variant="destructive" onClick={onReject}>
              Reject
            </Button>
            <Button variant="default" onClick={onMessage}>
              Message Team
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
