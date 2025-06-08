"use client";

import { useState } from "react";
import { TeamCard } from "./team-card";

export default function AllTeamStatus() {
  const [teams, setTeams] = useState([
    {
      id: "1",
      name: "Darrell Steward",
      subtitle: "Team Manager",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "pending" as const,
    },
    {
      id: "2",
      name: "Victory FC",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "sent-request" as const,
    },
    {
      id: "3",
      name: "Victory FC",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "accepted" as const,
    },
    {
      id: "4",
      name: "Victory FC",
      avatar: "/placeholder.svg?height=40&width=40",
      status: "available" as const,
    },
  ]);

  return (
    <div className="w-full space-y-4">
      {teams.map((team) => (
        <TeamCard
          key={team.id}
          id={team.id}
          name={team.name}
          subtitle={team.subtitle}
          avatar={team.avatar}
          status={team.status}
        />
      ))}
    </div>
  );
}
