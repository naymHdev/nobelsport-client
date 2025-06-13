// PlayerListsCards.tsx
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { PlayerCardData } from "./types";
import profileImg from "@/assets/images/john_smith.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";
import Link from "next/link";
import { IoEye } from "react-icons/io5";
import { AiOutlineMessage } from "react-icons/ai";
import { GoPlusCircle } from "react-icons/go";

const players: PlayerCardData[] = [
  {
    id: "1",
    name: "John Smith",
    initials: "JS",
    position: "Forward",
    status: "Available",
    actions: ["add", "sendRequest", "message"],
  },
  {
    id: "2",
    name: "John Smith",
    initials: "JS",
    position: "Forward",
    status: "Available",
    teamName: "Victory FC",
    accountType: "Pro Account",
    badgeStatus: "pending",
    actions: ["accept", "reject", "message"],
  },
  {
    id: "3",
    name: "John Smith",
    initials: "JS",
    position: "Forward",
    status: "Available",
    badgeStatus: "sent-request",
    actions: ["cancel", "message", "sendRequest"],
  },
];

export default function PlayerListsCards() {
  const uniqueBadgeStatuses = players.reduce<string[]>((acc, player) => {
    if (player.badgeStatus && !acc.includes(player.badgeStatus)) {
      acc.push(player.badgeStatus);
    }
    return acc;
  }, []);

  const getStatusBadge = (uniqueBadgeStatuses: string) => {
    switch (uniqueBadgeStatuses) {
      case "pending":
        return (
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-700 hover:bg-orange-100 rounded-full"
          >
            Pending
          </Badge>
        );
      case "sent-request":
        return (
          <span className="text-sm text-[#9747FF] bg-purple-100 font-medium rounded-full px-2 py-1">
            Send Request
          </span>
        );
      case "accepted":
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 hover:bg-green-100 rounded-full"
          >
            Accepted
          </Badge>
        );
      case "available":
        return (
          <span className="text-sm text-blue-600 font-medium">Add Team</span>
        );
      default:
        return null;
    }
  };

  return (
    <div className="space-y-6 font-openSans">
      {players.map((player) => (
        <Card className="relative">
          <Link
            href={`/profile/players-list/player-details`}
            key={player.id}
            className=""
          >
            <CardContent className="md:p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex flex-col md:flex-row items-start md:items-center gap-1 md:gap-3">
                  <Avatar className="h-12 w-12">
                    <Image
                      src={profileImg}
                      alt="Profile"
                      width={40}
                      height={40}
                      className="w-12 h-12 object-cover"
                    />
                    <AvatarFallback>{player.initials}</AvatarFallback>
                  </Avatar>
                  <h3 className=" text-sm md:text-2xl font-bold text-ns-title">
                    {player.name}
                  </h3>
                </div>
                <div className="flex flex-col items-end justify-end md:gap-2">
                  <Link href={`#`}>
                    <Button variant="ghost" size="icon">
                      <IoEye className=" size-5 text-ns-supportive-yellow" />
                    </Button>
                  </Link>

                  <div>
                    {player.badgeStatus == null ? (
                      <NSButton className="rounded-full px-2 py-1 text-xs md:text-sm bg-blue-100 text-ns-secondary">
                        Add Player
                      </NSButton>
                    ) : (
                      <div>{getStatusBadge(player.badgeStatus as string)}</div>
                    )}
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 md:gap-4 gap-2 mb-4">
                {player.teamName && (
                  <div className="self-stretch h-16 md:p-3 p-2 bg-ns-light rounded-lg justify-start items-center gap-2">
                    <p className="text-sm text-gray-500 mb-1">Team Name</p>
                    <p className="font-medium text-gray-900 text-xs md:text-sm">
                      {player.teamName}
                    </p>
                  </div>
                )}
                {player.accountType && (
                  <div className="self-stretch h-16md:p-3 p-2 bg-ns-light rounded-lg justify-start items-center gap-2">
                    <p className="text-sm text-gray-500 mb-1">Account Type</p>
                    <div className="flex items-center gap-2">
                      <div className="h-2 w-2 bg-yellow-500 rounded-full"></div>
                      <span className="text-yellow-600 font-medium text-xs md:text-sm">
                        {player.accountType}
                      </span>
                    </div>
                  </div>
                )}
                <div className="self-stretch h-16 md:p-3 p-2 bg-ns-light rounded-lg justify-start items-center gap-2">
                  <p className="text-sm text-gray-500 mb-1">Position</p>
                  <p className="font-medium text-gray-900 text-xs md:text-sm">{player.position}</p>
                </div>
                <div className="self-stretch h-16 md:p-3 p-2 bg-ns-light rounded-lg justify-start items-center gap-2">
                  <p className="text-sm text-gray-500 mb-1">Status</p>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 bg-green-500 rounded-full"></div>
                    <span className="text-green-600 font-medium text-xs md:text-sm">
                      {player.status}
                    </span>
                  </div>
                </div>
              </div>

              {/* ------------------- Actions Button ---------------- */}
              <div className="flex gap-2 flex-wrap mt-6">
                {player.actions.includes("sendRequest") && (
                  <NSButton className=" flex items-center gap-2 bg-ns-primary text-ns-white rounded-lg px-3 text-xs md:text-base">
                    <GoPlusCircle className="h-5 w-5" />
                    Send Request
                  </NSButton>
                )}
                {player.actions.includes("accept") && (
                  <NSButton className="bg-green-600 hover:bg-green-700 text-white rounded-lg px-3 text-xs md:text-sm">
                    Accept
                  </NSButton>
                )}
                {player.actions.includes("reject") && (
                  <NSButton className="bg-red-600 hover:bg-red-700 rounded-lg px-3 text-xs md:text-sm">
                    Reject
                  </NSButton>
                )}
                {player.actions.includes("cancel") && (
                  <NSButton className="bg-red-600 hover:bg-red-700 rounded-lg px-3 text-xs md:text-sm">
                    Cancel Request
                  </NSButton>
                )}
                {player.actions.includes("message") && (
                  <NSButton className=" flex items-center rounded-lg px-3 text-xs md:text-sm gap-1 bg-ns-secondary">
                    <AiOutlineMessage className="h-5 w-5" />
                    Message Team
                  </NSButton>
                )}
              </div>
            </CardContent>
          </Link>
        </Card>
      ))}
    </div>
  );
}
