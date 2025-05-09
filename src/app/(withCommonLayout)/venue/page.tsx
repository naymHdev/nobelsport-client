import VenueComponents from "@/components/modules/venue";
import NSContainer from "@/components/ui/core/NSContainer";
import cover from "@/assets/images/venue-cover.png";
import Image from "next/image";

const VenuePage = () => {
  return (
    <>
      <div className=" relative w-full mb-10">
        <div className="relative w-full h-[388px]">
          <Image
            src={cover}
            alt="Website banner cover image"
            fill
            className="object-cover"
            priority
          />
        </div>
        <h1 className=" absolute top-20 text-white font-extrabold text-[40px] text-center w-full uppercase leading-14 font-openSans">
          Search, Explore, and Book the Best Sports Venues <br /> Near You —
          Perfect for Every Sport and Skill Level
        </h1>
        <NSContainer className="relative z-10 -mt-36">
          <VenueComponents />
        </NSContainer>
      </div>
    </>
  );
};

export default VenuePage;
