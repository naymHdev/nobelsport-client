"use client";

import { TMatchData } from "@/types/match";
import NSButton from "./NSButton";
import { Clock, MapPin, UserRound } from "lucide-react";
import clsx from "clsx";
import Link from "next/link";

const NSMatchCard = ({ match }: { match: TMatchData }) => {
  // console.log(match);

  return (
    <>
      <div className=" border rounded-2xl p-6 flex-col justify-start bg-white">
        <div className=" flex items-center justify-between">
          <NSButton
            className={clsx(
              " p-3 py-1 rounded-full",
              match.match_status === "Upcoming" &&
                "bg-[#D1FAE5] text-[#059669]",
              match.match_status === "Almost Full" &&
                "bg-[rgba(251,191,36,0.14)] text-[#F6AD0E]",
              match.match_status === "New" &&
                "bg-[rgba(59,130,246,0.19)] text-[#2563EB]"
            )}
          >
            {match.match_status}
          </NSButton>
          <p className=" font-openSans text-ns-foreground font-normal leading-4">
            {match.matches} sports left
          </p>
        </div>
        <div className=" mt-5">
          <h1 className=" font-bold leading-normal font-openSans text-xl text-ns-title">
            {match.match_title}
          </h1>
          <div className=" mt-2 space-y-2">
            <div className=" flex items-center gap-1">
              <Clock size={16} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {match.match_start_time}
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <MapPin size={16} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {match.match_location}
              </p>
            </div>
            <div className=" flex items-center gap-1">
              <UserRound size={16} />
              <p className=" text-ns-foreground font-normal font-openSans leading-4 text-lg">
                {match.ground_level}
              </p>
            </div>
          </div>
        </div>
        <div className=" mt-4">
          <Link href={`/matches/${match._id}`}>
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
