import NSContainer from "@/components/ui/core/NSContainer";
import banner from "../../../assets/images/h-banner-with-image.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";

const Banner = () => {
  return (
    <>
      <div className="relative h-[600px]">
        <div className=" h-fit w-full bg-cover overflow-hidden">
          <Image
            src={banner}
            alt="Banner"
            fill
            className="object-cover object-center"
            priority
          />
        </div>
        <NSContainer>
          <div className=" absolute">
            <h1 className="font-sequel  font-extrabold text-[48px] leading-[60px] tracking-[0px] text-center uppercase text-white ml-[320px] mt-[200px]">
              Organize & Join Community <br /> Sports with Ease
            </h1>
            <div className=" w-[473px] h-[473px] mt-[60px]">
              <p className=" text-[16px] font-openSans text-white leading-6 font-normal tracking-normal capitalize">
                Play Smarter. Connect Faster. NobleSport makes <br /> organizing
                and joining community sports <br /> events easier than ever.
              </p>
              <NSButton className="mt-[26px] bg-[#FFB81C] w-[278px] h-[62px] gap-[10px] pt-[12px] pr-[32px] pb-[12px] pl-[32px] rounded-[6px] font-openSans font-bold text-xl uppercase leading-9 tracking-tight">
                Explore Matches
              </NSButton>
            </div>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default Banner;
