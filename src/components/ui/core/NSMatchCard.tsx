"use client";

import NSButton from "./NSButton";
import { Clock, MapPin, UserRound } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";
import { TTournament } from "@/types/match";

const NSMatchCard = ({ match }: { match: TTournament }) => {
  const {
    tournament_status,
    tournament_title,
    tournament_start_time,
    matches,
    tournament_venue,
    tournament_level,
    _id,
  } = match as TTournament;

  return (
    <>
      <div className=" border rounded-2xl p-6 flex-col justify-start bg-white">
        <div className=" flex items-center justify-between">
          <NSButton
            className={clsx(
              " p-3 py-1 rounded-full",
              tournament_status === "Upcoming" && "bg-[#D1FAE5] text-[#059669]",
              tournament_status === "Almost Full" &&
                "bg-[rgba(251,191,36,0.14)] text-[#F6AD0E]",
              tournament_status === "New" &&
                "bg-[rgba(59,130,246,0.19)] text-[#2563EB]"
            )}
          >
            {tournament_status}
          </NSButton>
          <p className=" font-openSans text-ns-foreground font-normal leading-4">
            {matches.length} sports left
          </p>
        </div>
        <div className=" mt-5">
          <h1 className=" font-bold leading-normal font-openSans text-xl text-ns-title">
            {tournament_title}
          </h1>
          <div className=" mt-4 space-y-[14px]">
            <div className=" flex items-center gap-1.5">
              <Clock size={18} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {tournament_start_time}
              </p>
            </div>
            <div className=" flex items-center gap-1.5">
              <MapPin size={18} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {tournament_venue}
              </p>
            </div>
            <div className=" flex items-center gap-1.5">
              <UserRound size={18} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {tournament_level}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <Link href={`/matches/${_id}`}>
            <NSButton className=" block rounded-full bg-ns-secondary text-white font-openSans text-center font-extrabold leading-normal w-full py-2">
              Join Match
            </NSButton>
          </Link>
        </div>
      </div>
    </>
  );
};

export default NSMatchCard;
