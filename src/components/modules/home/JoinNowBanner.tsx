import NSContainer from "@/components/ui/core/NSContainer";
import bg from "../../../assets/images/join-now-background.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";

const JoinNowBanner = () => {
  return (
    <div>
      <NSContainer className="relative mb-52 lg:mb-0">
        {/* Image Background */}
        <div className="w-full rounded-3xl overflow-hidden">
          <Image
            src={bg}
            alt="Banner Join Now"
            className="w-full h-auto rounded-3xl hidden lg:block"
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw"
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 flex flex-col lg:flex-row items-center justify-between px-6 lg:px-14 gap-6">
          <div className="text-center lg:text-left max-w-lg lg:max-w-xl">
            <h1 className="text-sm sm:text-lg md:text-2xl lg:text-[54px] font-normal lg:leading-[54px] font-bebas text-ns-title">
              Upcoming Matches You Don’t Want to Miss
            </h1>
            <p className="mt-4 text-xs sm:text-sm md:text-base max-w-md mx-auto lg:mx-0">
              Join live and upcoming games happening near you. Secure your spot
              before they fill up!
            </p>
          </div>

          <div>
            <NSButton
              className="mt-4 lg:mt-0 px-6 py-3 lg:px-[61px] lg:py-[23px] bg-ns-secondary text-white rounded-[12px] font-semibold font-openSans leading-5 uppercase"
              aria-label="Join Now"
            >
              Join NOW
            </NSButton>
          </div>
        </div>
      </NSContainer>
    </div>
  );
};

export default JoinNowBanner;
