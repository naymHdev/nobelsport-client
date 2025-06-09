"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MessageCircle, Check, X, Send, Eye } from "lucide-react";
import Link from "next/link";
import { IoEye } from "react-icons/io5";

interface TeamCardProps {
  id: string;
  name: string;
  subtitle?: string;
  avatar: string;
  status: "pending" | "sent-request" | "accepted" | "available";
  onAccept?: () => void;
  onReject?: () => void;
  onMessage?: () => void;
  onSendRequest?: () => void;
  onCancelRequest?: () => void;
  onAddTeam?: () => void;
}

export function TeamCard({
  name,
  subtitle,
  avatar,
  status,
  onAccept,
  onReject,
  onMessage,
  onSendRequest,
  onCancelRequest,
}: TeamCardProps) {
  const getStatusBadge = () => {
    switch (status) {
      case "pending":
        return (
          <Badge
            variant="secondary"
            className="bg-orange-100 text-orange-700 hover:bg-orange-100"
          >
            Pending
          </Badge>
        );
      case "sent-request":
        return (
          <span className="text-sm text-blue-600 font-medium">
            Send Request
          </span>
        );
      case "accepted":
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-700 hover:bg-green-100"
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

  const getActionButtons = () => {
    switch (status) {
      case "pending":
        return (
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={onAccept}
            >
              <Check className="w-4 h-4 mr-1" />
              Accept
            </Button>
            <Button size="sm" variant="destructive" onClick={onReject}>
              <X className="w-4 h-4 mr-1" />
              Reject
            </Button>
            <Button size="sm" variant="default" onClick={onMessage}>
              <MessageCircle className="w-4 h-4 mr-1" />
              Message Team
            </Button>
          </div>
        );
      case "sent-request":
        return (
          <div className="flex gap-2">
            <Button size="sm" variant="destructive" onClick={onCancelRequest}>
              Cancel Request
            </Button>
            <Button size="sm" variant="default" onClick={onMessage}>
              <MessageCircle className="w-4 h-4 mr-1" />
              Message
            </Button>
          </div>
        );
      case "accepted":
        return (
          <Button size="sm" variant="default" onClick={onMessage}>
            <MessageCircle className="w-4 h-4 mr-1" />
            Message
          </Button>
        );
      case "available":
        return (
          <div className="flex gap-2">
            <Button
              size="sm"
              className="bg-green-600 hover:bg-green-700"
              onClick={onSendRequest}
            >
              <Send className="w-4 h-4 mr-1" />
              Send Request
            </Button>
            <Button size="sm" variant="default" onClick={onMessage}>
              <MessageCircle className="w-4 h-4 mr-1" />
              Message
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Card className="w-full border-none">
      <CardContent className="px-6">
        <div className="flex justify-between">
          <div className="flex items-center gap-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src={avatar || "/placeholder.svg"} alt={name} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <div>
              <h3 className="font-semibold text-base">{name}</h3>
              {subtitle && <p className="text-sm text-gray-600">{subtitle}</p>}
            </div>
          </div>
          <div className="flex flex-col items-end gap-2">
            <Link href={`/profile/team-management/team-details`}>
              <Button
                variant="ghost"
                size="icon"
                className="text-amber-500 hover:text-amber-600 hover:cursor-pointer"
              >
                <IoEye className="h-5 w-5" />
              </Button>
            </Link>
            {getStatusBadge()}
          </div>
        </div>
        <div className="mt-14 flex justify-start">{getActionButtons()}</div>
      </CardContent>
    </Card>
  );
}
