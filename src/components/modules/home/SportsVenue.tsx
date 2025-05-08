"use client";

import NSButton from "@/components/ui/core/NSButton";
import NSContainer from "@/components/ui/core/NSContainer";
import NSSectionTitle from "@/components/ui/core/NSSectionTitle";
import NSVenueCard from "@/components/ui/core/NSVenueCard";
import { venues } from "@/data/data";
import { TVenue } from "@/types/venue";
import Link from "next/link";

const SportsVenue = () => {
  const maltyVenues: TVenue[] | undefined = Array.from(
    { length: 3 },
    (_, index) => ({
      ...venues[0],
      _id: `${index + 1}`,
    })
  );

  return (
    <>
      <div>
        <NSContainer>
          <NSSectionTitle
            section="SPORTS vENUE"
            leftTitle="eXPLORE VENUESTOP"
            rightTitle="SPORTS VENUES"
            subTitle="Discover the best sports venues around you, rated by fellow players. Book your next game at one of the top-rated locations and enjoy a seamless experience with NobleSport."
          />
          <div className="mt-20 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {maltyVenues?.map((venue, idx) => (
              <NSVenueCard key={`${idx + 1}`} venue={venue} />
            ))}
          </div>

          <div className=" flex items-center justify-center mt-14">
            <Link href={"/venue"}>
              <NSButton className=" text-center text-ns-secondary font-openSans text-lg font-normal leading-normal border border-ns-secondary rounded-full px-[34px] py-[14px] bg-transparent hover:bg-transparent ">
                View All Venues
              </NSButton>
            </Link>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default SportsVenue;
