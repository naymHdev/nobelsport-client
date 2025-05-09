import NSContainer from "@/components/ui/core/NSContainer";
import NSSectionTitle from "@/components/ui/core/NSSectionTitle";
import sh from "../../../assets/icons/search.png";
import cr from "../../../assets/icons/calender.png";
import te from "../../../assets/icons/troffe.png";
import Image from "next/image";

const ThreeSteps = () => {
  return (
    <>
      <div>
        <NSContainer>
          <NSSectionTitle
            leftTitle="How Noble"
            rightTitle="Sport Works"
            subTitle="Get started in three simple steps"
          />
          <div className="mt-16 flex items-center justify-between gap-10">
            <div className=" flex flex-col justify-center items-center text-center gap-6">
              <div className="bg-[#DBEAFE] rounded-full p-6 flex items-center justify-center flex-col">
                <Image src={sh} alt="" width={30} height={30} />
              </div>
              <h3 className=" font-bold text-black text-xl leading-5 font-openSans">
                Search for Venues
              </h3>
              <p className=" text-ns-foreground font-normal font-openSans text-xl leading-6">
                Browse through our collection of top-rated sports venues in your
                area
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center text-center gap-6">
              <div className="bg-[#DBEAFE] rounded-full p-6 flex items-center justify-center flex-col">
                <Image src={cr} alt="" width={30} height={30} />
              </div>
              <h3 className=" font-bold text-black text-xl leading-5 font-openSans">
                Book Your Match
              </h3>
              <p className=" text-ns-foreground font-normal font-openSans text-xl leading-6">
                Select your preferred time slot and book instantly with secure
                payment
              </p>
            </div>
            <div className=" flex flex-col justify-center items-center text-center gap-6">
              <div className="bg-[#DBEAFE] rounded-full p-6 flex items-center justify-center flex-col">
                <Image src={te} alt="" width={30} height={30} />
              </div>
              <h3 className=" font-bold text-black text-xl leading-5 font-openSans">
                Play and Enjoy
              </h3>
              <p className=" text-ns-foreground font-normal font-openSans text-xl leading-6">
                Show up at the venue and enjoy your game with other sports
                enthusiasts
              </p>
            </div>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default ThreeSteps;
