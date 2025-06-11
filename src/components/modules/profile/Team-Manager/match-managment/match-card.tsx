"use client";

import { Calendar, MapPin, Clock, Eye, Trash } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Match } from "./match";
import fbLogo from "@/assets/images/fb-logo.png";
import Image from "next/image";
import Link from "next/link";

interface MatchCardProps {
  match: Match;
  onBookVenue?: (matchId: string) => void;
  onSendLineup?: (matchId: string) => void;
  onViewBalance?: (matchId: string) => void;
  onPublishMatch?: (matchId: string) => void;
  onUnpublishMatch?: (matchId: string) => void;
  onMarkCompleted?: (matchId: string) => void;
  onWriteAnnouncements?: (matchId: string) => void;
  onViewPerformance?: (matchId: string) => void;
}

export function MatchCard({ match, ...handlers }: MatchCardProps) {
  const getStatusBadge = () => {
    switch (match.status) {
      case "unpublished":
        return (
          <Badge variant="secondary" className="bg-purple-100 text-purple-700">
            Unpublish Match
          </Badge>
        );
      case "archived":
        return (
          <Badge variant="secondary" className="bg-gray-100 text-gray-700">
            Archived Match
          </Badge>
        );
      case "completed":
        return (
          <Badge variant="secondary" className="bg-green-100 text-green-700">
            Completed Match
          </Badge>
        );
      default:
        return null;
    }
  };

  const getActionButtons = () => {
    switch (match.status) {
      case "upcoming":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => handlers.onBookVenue?.(match.id)}
            >
              Book Venue
            </Button>
            <Button
              size="sm"
              className="bg-orange-500 hover:bg-orange-600"
              onClick={() => handlers.onSendLineup?.(match.id)}
            >
              Send Line-up
            </Button>
          </div>
        );
      case "unpublished":
        return (
          <div className="flex gap-2">
            <Link href={`/profile/match-management/team-balance`}>
              <Button
                className="hover:cursor-pointer"
                size="sm"
                variant="default"
                onClick={() => handlers.onViewBalance?.(match.id)}
              >
                View Team Balance
              </Button>
            </Link>
            <Link href={`/profile/match-management/create-match`}>
              <Button
                size="sm"
                variant="default"
                onClick={() => handlers.onPublishMatch?.(match.id)}
              >
                Publish Match
              </Button>
            </Link>
          </div>
        );
      case "archived":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={() => handlers.onMarkCompleted?.(match.id)}
            >
              Mark as Completed
            </Button>
            <Button
              size="sm"
              className="bg-purple-600 hover:bg-purple-700"
              onClick={() => handlers.onWriteAnnouncements?.(match.id)}
            >
              Write Match Announcements
            </Button>
          </div>
        );
      case "completed":
        return (
          <Button
            size="sm"
            variant="default"
            onClick={() => handlers.onViewPerformance?.(match.id)}
          >
            See Player's Performance
          </Button>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full shadow-none">
      <CardContent className="p-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-4 flex-1">
            <div className="flex items-center gap-3">
              <Avatar className="h-10 w-10">
                <Image
                  src={fbLogo}
                  alt="fb-logo"
                  width={100}
                  height={100}
                  className=" w-10 h-10 object-cover rounded-lg"
                />
                <AvatarFallback>
                  {match.homeTeam.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
              <span className="font-semibold text-2xl text-ns-title">
                {match.homeTeam.name}
              </span>
            </div>

            <span className="text-lg font-bold text-gray-600">VS</span>

            <div className="flex items-center gap-3">
              <span className="font-semibold text-2xl text-ns-title">
                {match.awayTeam.name}
              </span>
              <Avatar className="h-10 w-10">
                <Image
                  src={fbLogo}
                  alt="fb-logo"
                  width={100}
                  height={100}
                  className=" w-10 h-10 object-cover rounded-lg"
                />
                <AvatarFallback>
                  {match.awayTeam.name.slice(0, 2)}
                </AvatarFallback>
              </Avatar>
            </div>
          </div>

          <div className="flex items-center">
            <Link href={`/profile/match-management/match-details`}>
              <Button variant="ghost" size="icon" className="h-8 w-8">
                <Eye className="h-4 w-4 text-yellow-500" />
              </Button>
            </Link>
            <Button variant="ghost" size="icon" className="h-8 w-8">
              <Trash className="h-4 w-4 text-red-500" />
            </Button>
          </div>
        </div>

        {getStatusBadge() && <div className="mb-3">{getStatusBadge()}</div>}

        <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
          <div className="flex items-center gap-1">
            <Calendar className="h-4 w-4" />
            <span>{match.date}</span>
          </div>
          <div className="flex items-center gap-1">
            <MapPin className="h-4 w-4" />
            <span>{match.venue}</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="h-4 w-4" />
            <span>Pitch Reservation time {match.time}</span>
          </div>
        </div>

        <div className="flex justify-start">{getActionButtons()}</div>
      </CardContent>
    </Card>
  );
}
