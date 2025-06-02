"use client";

import { Card, CardHeader } from "@/components/ui/card";
import { matchesData } from "@/data/data";
import { TTournament } from "@/types/match";
import Link from "next/link";
import { FaArrowRightLong, FaRegFileLines } from "react-icons/fa6";
import { IoShareSocialOutline } from "react-icons/io5";

const TournamentDetails = () => {
  // const tournamentDetails = matchesData.find((match) => match._id === "1");
  const tournamentDetails = matchesData[0];
  // console.log("tournaments", tournamentDetails);

  const {
    tournament_title,
    matches,
    tournament_format,
    tournament_formation,
    tournament_guidelines,
  } = (tournamentDetails as TTournament) || {};

  return (
    <>
      <div className=" relative">
        {/* ------------ Tournament Details Section ------------ */}
        <section className=" -mt-20">
          <Card className=" border-none shadow-none">
            <CardHeader>
              <div className=" flex items-center justify-between">
                <h1 className="lg:text-3xl text-xl font-semibold lg:font-bold font-openSans text-ns-title">
                  {tournament_title}
                </h1>
                <button className="flex items-center justify-center text-center bg-[#D1FAE5] text-ns-primary text-sm md:text-base px-3 md:px-4 py-1.5 md:py-2 rounded-full font-openSans font-semibold hover:bg-[#b7f4d4] transition-all duration-200">
                  {matches?.length} Match
                </button>
              </div>
              <div className="flex justify-end mt-6">
                <div className="rounded-md bg-gray-100 p-2">
                  <IoShareSocialOutline className="text-ns-secondary w-6 h-6" />
                </div>
              </div>
            </CardHeader>
          </Card>
        </section>

        {/* ------------ Tournament Formation Section ------------ */}
        <section className=" mt-7">
          <Card className=" border-none shadow-none font-openSans">
            <CardHeader>
              <h1 className="lg:text-xl text-lg font-semibold lg:font-bold text-ns-title">
                Tournament Formation
              </h1>
            </CardHeader>
            <div className=" bg-[#F9FAFB] p-4 mx-6 rounded-md -mt-1">
              <p className=" text-ns-foreground text-sm">{tournament_format}</p>
              <div className=" flex flex-wrap md:flex-nowrap items-center justify-start gap-5 mt-3">
                {tournament_formation &&
                  tournament_formation.map((formation, index) => (
                    <div
                      key={index}
                      className="bg-[#DBEAFE] text-ns-secondary px-2 py-1 rounded"
                    >
                      {formation}
                    </div>
                  ))}
              </div>
            </div>
          </Card>
        </section>

        {/* ------------ Tournament Rules & Guidelines Section ------------ */}
        <section className=" mt-7">
          <Card className=" border-none shadow-none font-openSans">
            <CardHeader>
              <h1 className="lg:text-xl text-lg font-semibold lg:font-bold text-ns-title">
                Rules & Guidelines
              </h1>
            </CardHeader>
            <div className=" bg-[#F9FAFB] p-4 mx-6 rounded-md -mt-1">
              <div className=" flex items-center justify-between">
                <div className=" flex items-center gap-2">
                  <FaRegFileLines className=" size-6 text-ns-secondary" />{" "}
                  <p>{tournament_guidelines}</p>
                </div>
                <div>
                  <FaArrowRightLong className=" text-ns-foreground size-4" />
                </div>
              </div>
            </div>
          </Card>
        </section>

        {/* ------------ Tournament Matches Section ------------ */}
        <section className=" mt-7 font-openSans">
          <div className=" space-y-6">
            {matches?.length > 0 &&
              matches?.map((match, idx) => {
                return (
                  <div key={`${idx + 1}`} className="">
                    <Card className=" border-none shadow-none font-openSans">
                      <CardHeader>
                        <h1 className="lg:text-xl text-lg font-semibold lg:font-bold text-ns-title">
                          Match {idx + 1}
                        </h1>
                      </CardHeader>
                      <div className="md:mx-10 mx-4 rounded-xl border shadow-sm py-4 px-6 flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
                        <div className=" flex items-center text-center md:gap-5 gap-8">
                          <div>
                            <h2 className=" text-ns-title font-semibold md:font-bold">
                              {match?.available_teams[0]?.team_name}
                            </h2>
                            <p className=" text-ns-foreground mt-2">Team A</p>
                          </div>
                          <div className=" text-ns-foreground text-xl md:text-2xl font-semibold md:font-bold">
                            VS
                          </div>
                          <div>
                            <h2 className=" text-ns-title font-semibold md:font-bold">
                              {match?.available_teams[1]?.team_name}
                            </h2>
                            <p className=" text-ns-foreground mt-2">Team B</p>
                          </div>
                        </div>
                        <div className=" text-center md:text-right font-openSans">
                          <p className=" text-ns-foreground">
                            {match?.match_play_time}
                          </p>
                          <Link href={`/matches/match/${match?._id}`}>
                            <h3 className="mt-2 clear-start font-semibold md:font-bold text-ns-secondary flex items-center gap-1 text-center">
                              View Match Details
                              <span>
                                <FaArrowRightLong />
                              </span>
                            </h3>
                          </Link>
                        </div>
                      </div>
                    </Card>
                  </div>
                );
              })}
          </div>
        </section>
      </div>
    </>
  );
};

export default TournamentDetails;
