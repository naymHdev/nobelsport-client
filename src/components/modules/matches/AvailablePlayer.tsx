import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import NSNotifyModal from "@/components/ui/core/NSNotifyModal";
import Image from "next/image";
import { CiCirclePlus } from "react-icons/ci";
import playerFormation from "../../../assets/images/player-view.png";
import { TMatch, TTeam } from "@/types/match";
import JoinTeamModal from "./JoinTeamModal";

const fixedPositions = [
  "Goalkeeper",
  "Defender-1",
  "Defender-2",
  "Defender-3",
  "Defender-4",
  "Midfielder-1",
  "Midfielder-2",
  "Midfielder-3",
  "Forward-1",
  "Forward-2",
  "Forward-3",
];

type AvailablePlayerProps = {
  team: TTeam;
  matchData: TMatch;
};

const AvailablePlayer = ({ team, matchData }: AvailablePlayerProps) => {
  const players = team?.available_players || [];
  //   console.log("players", players);

  const user = true;

  return (
    <>
      <div className=" mt-8">
        <div className=" grid grid-cols-1 lg:grid-cols-5 gap-4">
          <div className=" col-span-full lg:col-span-2 md:p-6">
            <h2 className=" text-ns-title font-bold text-2xl">
              Available Players
            </h2>
            {/* Existing Players */}
            <div className="mt-6 space-y-3">
              {fixedPositions.map((position) => {
                const player = players.find(
                  (p) =>
                    p.play_position.toLowerCase() === position.toLowerCase()
                );

                if (player) {
                  // Render player slot
                  return (
                    <div
                      key={player._id}
                      className="rounded-md flex items-center gap-2 bg-[#F3F4F6] font-openSans p-3"
                    >
                      <Avatar className="w-12 h-12 rounded-full border">
                        {player.player_image ? (
                          <AvatarImage
                            src={player.player_image}
                            alt={player.player_name}
                            className="object-cover"
                          />
                        ) : (
                          <AvatarFallback>
                            {player.player_name
                              ?.split(" ")
                              .map((n) => n[0])
                              .join("")
                              .toUpperCase()}
                          </AvatarFallback>
                        )}
                      </Avatar>
                      <div>
                        <h2 className="text-ns-title text-lg font-semibold">
                          {player.player_name}
                        </h2>
                        <p className="text-sm text-ns-primary mt-1">
                          {player.play_position}
                        </p>
                      </div>
                    </div>
                  );
                } else {
                  // Render empty slot with Join button
                  return (
                    <div
                      key={position}
                      className="rounded-md flex items-center justify-between bg-[#F3F4F6] font-openSans p-3"
                    >
                      <div>
                        <h3 className="text-black text-base font-semibold">
                          New Player
                        </h3>
                        <p className="text-blue-600 text-sm font-medium mt-1">
                          {position}
                        </p>
                      </div>

                      {user ? (
                        <JoinTeamModal
                          position={position}
                          matchData={matchData}
                        />
                      ) : (
                        <NSNotifyModal>
                          <Button
                            variant="outline"
                            size="sm"
                            className="text-ns-secondary bg-blue-100 hover:bg-blue-50 hover:cursor-pointer"
                          >
                            <CiCirclePlus className="size-5 mr-1" />
                            Join
                          </Button>
                        </NSNotifyModal>
                      )}
                    </div>
                  );
                }
              })}
            </div>
          </div>
          <div className=" col-span-full lg:col-span-3">
            <div className="relative w-full max-w-4xl mx-auto aspect-[4/3]">
              <Image
                src={playerFormation}
                alt="Player Field Formation"
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1280px) 75vw, 50vw"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AvailablePlayer;
