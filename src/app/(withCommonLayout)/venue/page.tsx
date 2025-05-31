"use client";

import NSContainer from "@/components/ui/core/NSContainer";
import cover from "@/assets/images/venue-cover.png";
import TopRatedVenues from "@/components/modules/venue/TopRatedVenues";
import VenueFilter from "@/components/modules/venue";
import NSBanner from "@/components/ui/core/NSBanner";

const VenuePage = () => {
  return (
    <>
      <div className=" relative w-full mb-10">
        <NSBanner
          cover={cover}
          title="Search, Explore, and Book the Best Sports Venues Near You —
          Perfect for Every Sport and Skill Level"
        />
        <NSContainer className="relative z-10 -mt-36">
          <VenueFilter />
          <TopRatedVenues />
        </NSContainer>
      </div>
    </>
  );
};

export default VenuePage;
