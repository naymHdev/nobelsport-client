"use client";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { TMatch } from "@/types/match";
import { useState } from "react";
import { CiCirclePlus } from "react-icons/ci";
import Image from "next/image";
import football from "@/assets/icons/footbal.png";
import calender from "@/assets/icons/calender-group.png";
import location from "@/assets/icons/location.png";
import dollar from "@/assets/icons/dollar-sign.png";
import positionIcon from "@/assets/icons/positions.png";
import Link from "next/link";

type JoinTeamModalProps = {
  matchData: TMatch;
  position: string;
};

const JoinTeamModal = ({ matchData, position }: JoinTeamModalProps) => {
  //   console.log("matchData", matchData);

  const [isPositionSelected, setIsPositionSelected] = useState("");

  const { match_status, match_play_time, match_venue, match_fee, _id } =
    matchData || {};

  const onJoin = (position: string) => {
    setIsPositionSelected(position);
  };

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger>
            <Button
              variant="outline"
              size="sm"
              className="text-ns-secondary bg-blue-100 hover:bg-blue-50 hover:cursor-pointer"
              onClick={() => onJoin(position)}
            >
              <CiCirclePlus className="size-5 mr-1" />
              Join
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader className=" border-b p-3">
              <DialogTitle>Match Details</DialogTitle>
            </DialogHeader>
            <div className=" flex flex-col items-start justify-start gap-6 font-openSans mt-8 border-b pb-10">
              <div className=" flex  items-start justify-start gap-3">
                <Image
                  src={football}
                  alt={match_status}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-ns-foreground">Match Type</p>
                  <p className=" text-ns-title font-semibold">{match_status}</p>
                </div>
              </div>
              <div className=" flex  items-start justify-start gap-3">
                <Image
                  src={calender}
                  alt={match_play_time}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-ns-foreground">Date & Time</p>
                  <p className=" text-ns-title font-semibold">
                    {match_play_time}
                  </p>
                </div>
              </div>
              <div className=" flex  items-start justify-start gap-3">
                <Image
                  src={location}
                  alt={match_venue}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-ns-foreground">Location</p>
                  <p className=" text-ns-title font-semibold">{match_venue}</p>
                </div>
              </div>
              <div className=" flex  items-start justify-start gap-3">
                <Image
                  src={dollar}
                  alt={match_fee}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-ns-foreground">Match Fee</p>
                  <p className=" text-ns-title font-semibold">{match_fee}</p>
                </div>
              </div>
              <div className=" flex  items-start justify-start gap-3">
                <Image
                  src={positionIcon}
                  alt={isPositionSelected}
                  width={100}
                  height={100}
                  className="w-12 h-12 object-cover"
                />
                <div>
                  <p className="mb-1 text-sm text-ns-foreground">Position</p>
                  <p className=" text-ns-title font-semibold">
                    {isPositionSelected}
                  </p>
                </div>
              </div>
            </div>

            <Link href={`/booking/${_id}`}>
              <Button className="w-full hover:cursor-pointer py-6 bg-ns-secondary hover:bg-blue-700 text-white font-semibold">
                Book Now
              </Button>
            </Link>

            <p className=" text-center text-ns-foreground text-sm mt-2">
              By joining, you agree to our Terms and Conditions
            </p>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default JoinTeamModal;
