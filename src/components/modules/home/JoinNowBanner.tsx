import NSContainer from "@/components/ui/core/NSContainer";
import bg from "../../../assets/images/join-now-background.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";

const JoinNowBanner = () => {
  return (
    <div>
      <NSContainer className="relative">
        <div className="w-full rounded-3xl">
          <Image
            src={bg}
            alt="Banner Join Now"
            priority
            className="rounded-3xl w-full"
          />
        </div>

        {/* Overlay */}
        <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center px-4">
          <div className=" flex items-center justify-between w-full px-14">
            <div>
              <h1 className="text-[54px] font-normal leading-[54px] font-bebas text-ns-title">
                Upcoming Matches <br /> You Don’t Want to Miss
              </h1>
              <p className="mt-4 max-w-xl">
                Join live and upcoming games happening near you. Secure your
                spot <br /> before they fill up!
              </p>
            </div>
            <div>
              <NSButton className="mt-6 px-[61px] py-[23px] bg-ns-secondary text-white text-center rounded-[12px] font-semibold font-openSans leading-5 uppercase">
                Join NOW
              </NSButton>
            </div>
          </div>
        </div>
      </NSContainer>
    </div>
  );
};

export default JoinNowBanner;
