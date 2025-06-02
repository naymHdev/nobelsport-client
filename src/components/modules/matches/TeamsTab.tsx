"use client";

import playerFormation from "../../../assets/images/player-view.png";
import clubLogo from "../../../assets/images/Dragons FC logo.png";

import { TPlayer, TTeam } from "@/types/match";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CiCirclePlus } from "react-icons/ci";
import NSNotifyModal from "@/components/ui/core/NSNotifyModal";

const TeamsTab = ({ availableTeams }: { availableTeams: TTeam[] }) => {
  //   console.log("availableTeams", availableTeams);
  if (!availableTeams || availableTeams.length === 0) return null;

  return (
    <>
      <div>
        <Tabs defaultValue={availableTeams[0].team_name ?? ""}>
          <TabsList className="flex px-6 space-x-6 bg-transparent">
            {availableTeams?.map((team: TTeam) => (
              <TabsTrigger
                key={team._id}
                value={team.team_name}
                className=" font-semibold px-4 py-2 text-gray-700 data-[state=active]:border-b-2 data-[state=active]:border-b-ns-title data-[state=active]:font-semibold focus:outline-none whitespace-nowrap shadow-none data-[state=active]:shadow-none data-[state=active]:rounded-none transition-colors"
              >
                {team.team_name}
              </TabsTrigger>
            ))}
          </TabsList>

          {availableTeams?.map((team: TTeam) => {
            return (
              <TabsContent
                key={team?._id}
                value={team?.team_name}
                className="mt-12 shadow rounded-xl mx-3 md:mx-6 p-3 md:p-6"
              >
                <Card className="px-6 border-none  rounded-xl">
                  <div className=" flex flex-col md:flex-row items-center justify-between">
                    <div className=" flex md:gap-3">
                      <div>
                        <Image
                          src={clubLogo}
                          alt={team?.team_name}
                          width={100}
                          height={100}
                          className="w-[68px] h-[68px]"
                        />
                      </div>
                      <div>
                        <p className=" font-semibold font-openSans text-ns-title">
                          {team?.team_name}
                        </p>
                        <p className=" text-ns-foreground text-sm font-openSans mt-1">
                          {team?.available_players?.length}
                          <span className="px-1">Memebr Remaining</span>
                        </p>
                      </div>
                    </div>
                    <div>
                      <button className=" rounded-full text-sm md:text-base px-3 py-1 font-medium bg-[#FEE2E2] text-[#B91C1C] font-openSans">
                        {team?.playable_match} <span>spots Left</span>
                      </button>
                    </div>
                  </div>

                  {/* ----------- Player Avatars ----------- */}
                  <div className="*:data-[slot=avatar]:ring-background flex -space-x-2 *:data-[slot=avatar]:ring-2 *:data-[slot=avatar]:grayscale">
                    {team?.available_players.length > 0 &&
                      team?.available_players?.map((player: TPlayer) => {
                        return (
                          <Avatar key={player?._id} className="w-10 h-10">
                            <AvatarImage
                              src={player?.player_image}
                              alt={player?.player_name}
                              className="object-cover"
                            />
                            <AvatarFallback>
                              {player?.player_name
                                ?.split(" ")
                                .map((n) => n[0])
                                .join("")
                                .toUpperCase()}
                            </AvatarFallback>
                          </Avatar>
                        );
                      })}
                  </div>
                </Card>

                {/* ----------- Available Players ----------- */}
                <div className=" mt-8">
                  <div className=" grid grid-cols-1 lg:grid-cols-5 gap-4">
                    <div className=" col-span-full lg:col-span-2 md:p-6">
                      <h2 className=" text-ns-title font-bold text-2xl">
                        Available Players
                      </h2>
                      {/* Existing Players */}
                      <div className=" mt-6 space-y-3">
                        {team?.available_players?.length > 0 &&
                          team?.available_players?.map((player) => (
                            <div
                              key={player?._id}
                              className=" rounded-md flex items-center gap-2 bg-[#F3F4F6] font-openSans p-3"
                            >
                              <div>
                                <Avatar className="w-12 h-12 rounded-full border">
                                  <AvatarImage
                                    src={player?.player_image}
                                    alt={player?.player_name}
                                    className="object-cover"
                                  />
                                  <AvatarFallback>
                                    {player?.player_name
                                      ?.split(" ")
                                      .map((n) => n[0])
                                      .join("")
                                      .toUpperCase()}
                                  </AvatarFallback>
                                </Avatar>
                              </div>
                              <div>
                                <h2 className=" text-ns-title text-lg font-semibold">
                                  {player?.player_name}
                                </h2>
                                <p className=" text-sm text-ns-primary mt-1">
                                  {player?.play_position}
                                </p>
                              </div>
                            </div>
                          ))}

                        {/* New Player Slots */}
                        <div className="rounded-md flex items-center justify-between bg-[#F3F4F6] font-openSans p-3">
                          <div>
                            <h3 className="text-black text-base font-semibold">
                              New Player
                            </h3>
                            <p className="text-blue-600 text-sm font-medium mt-1">
                              Defender-6
                            </p>
                          </div>
                          <NSNotifyModal>
                            <Button
                              variant="outline"
                              size="sm"
                              className=" text-ns-secondary bg-blue-100 hover:bg-blue-50 hover:cursor-pointer"
                              // onClick={onAddPlayer}
                            >
                              <CiCirclePlus className=" size-5 mr-1" />
                              Join
                            </Button>
                          </NSNotifyModal>
                        </div>
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
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </>
  );
};

export default TeamsTab;
