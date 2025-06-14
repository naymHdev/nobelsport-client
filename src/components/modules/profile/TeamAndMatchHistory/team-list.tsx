"use client";

import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";
import { AiOutlineMessage } from "react-icons/ai";
import Link from "next/link";
import clubLogo from "@/assets/images/Dragons FC logo.png";
import Image from "next/image";

type MatchStatus = "accepted" | "send-request" | "pending" | "completed";

interface Match {
  id: string;
  title: string;
  club_logo: string;
  status: MatchStatus;
}

const matches: Match[] = [
  {
    id: "1",
    title: "Dragons FC ",
    club_logo: "",
    status: "accepted",
  },
  {
    id: "2",
    title: "Dragons FC ",
    club_logo: "",
    status: "send-request",
  },
  {
    id: "3",
    title: "Dragons FC ",
    club_logo: "",
    status: "pending",
  },
  {
    id: "4",
    title: "Dragons FC ",
    club_logo: "",
    status: "completed",
  },
];

export default function TeamList() {
  const [currentPage, setCurrentPage] = useState(1);

  const getStatusBadge = (status: MatchStatus) => {
    const statusConfig = {
      accepted: {
        label: "Accepted",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      "send-request": {
        label: "Send Request",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      pending: {
        label: "Pending",
        className: "bg-orange-100 text-orange-800 hover:bg-orange-100",
      },
      completed: {
        label: "Completed",
        className: "bg-green-100 text-green-800 hover:bg-green-100",
      },
    };
    return statusConfig[status];
  };

  const getActionButtons = (status: MatchStatus) => {
    switch (status) {
      case "accepted":
        return (
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <Button size="sm" className=" bg-ns-primary hover:bg-green-600">
              Accept
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "send-request":
        return (
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <Button size="sm" className=" bg-ns-primary hover:bg-green-600">
              Accept
            </Button>
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Reject
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "pending":
        return (
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Reject
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      case "completed":
        return (
          <div className="flex flex-wrap md:flex-nowrap gap-2">
            <Button
              variant="destructive"
              size="sm"
              className="bg-red-500 hover:bg-red-600"
            >
              Remove
            </Button>
            <Button size="sm" className="bg-blue-500 hover:bg-blue-600">
              <AiOutlineMessage /> Message Team
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="">
      <div className="">
        {/* Match Cards */}
        <div className="space-y-4 px-6">
          {matches.map((match) => {
            const statusConfig = getStatusBadge(match.status);
            return (
              <Link
                className="p-6"
                key={match.id}
                href={`${
                  match.status === "completed"
                    ? `/profile/completed-team-details/${match.id}`
                    : "#"
                }`}
                style={{
                  pointerEvents: match.status === "completed" ? "auto" : "none",
                }}
              >
                <Card className="px-6 bg-white shadow-none">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className=" flex items-center gap-3">
                        <Image
                          src={clubLogo}
                          width={100}
                          height={100}
                          alt="club logo"
                        />
                        <h3 className=" text-2xl font-bold text-ns-title mb-2">
                          {match.title}
                        </h3>
                      </div>
                    </div>
                    <Badge className={statusConfig.className}>
                      {statusConfig.label}
                    </Badge>
                  </div>

                  <div className="flex flex-wrap md:flex-nowrap items-center justify-start">
                    {getActionButtons(match.status)}
                  </div>
                </Card>
              </Link>
            );
          })}
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-center md:justify-end gap-2 p-6">
          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "outline"}
              size="icon"
              className={cn(
                "h-8 w-8",
                currentPage === page && "bg-blue-500 hover:bg-blue-600"
              )}
              onClick={() => setCurrentPage(page)}
            >
              {page}
            </Button>
          ))}

          <Button
            variant="outline"
            size="icon"
            className="h-8 w-8"
            onClick={() => setCurrentPage(Math.min(4, currentPage + 1))}
            disabled={currentPage === 4}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </div>
  );
}
