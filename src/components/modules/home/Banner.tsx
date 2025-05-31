import NSContainer from "@/components/ui/core/NSContainer";
import banner from "../../../assets/images/h-banner-with-image.png";
import Image from "next/image";
import NSButton from "@/components/ui/core/NSButton";

const Banner = () => {
  return (
    <>
      <div className="relative h-[400px] md:h-[500px] lg:h-[600px] w-full overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src={banner}
            alt="Banner"
            fill
            className="object-cover object-center"
            priority
          />
          {/* Dark overlay for better text readability */}
          {/* <div className="absolute inset-0 bg-black/40" /> */}
        </div>

        {/* Content Container */}
        <div className="relative z-10 h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col justify-center items-center h-full text-center">
            {/* Main Heading */}
            <h1 className="font-extrabold text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl leading-tight tracking-tight text-white mb-4 md:mb-6 uppercase">
              Organize & Join Community <br className="hidden sm:block" />
              Sports with Ease
            </h1>

            {/* Description */}
            <div className="block xl:hidden">
              <p className="text-sm sm:text-base md:text-lg text-white/90 leading-relaxed font-normal max-w-2xl mb-6 md:mb-8 px-4">
                Play Smarter. Connect Faster. NobleSport makes organizing and
                joining community sports events easier than ever.
              </p>

              {/* Call to Action Button */}
              <button className="bg-[#FFB81C] hover:bg-[#e6a519] transition-colors duration-200 text-[#E1E8F0] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-md tracking-tight shadow-lg hover:shadow-xl transform hover:scale-105 ">
                Explore Matches
              </button>
            </div>
          </div>
        </div>
        {/* Description */}
        <div className=" absolute bottom-10 left-1/9 hidden xl:block ">
          <p className="text-sm text-start sm:text-base md:text-lg text-white/90 leading-relaxed font-normal max-w-md mb-6 md:mb-8">
            Play Smarter. Connect Faster. NobleSport makes organizing and
            joining community sports events easier than ever.
          </p>

          {/* Call to Action Button */}
          <button className="bg-[#FFB81C] hover:bg-[#e6a519] transition-colors duration-200 text-[#E1E8F0] font-bold text-sm sm:text-base md:text-lg lg:text-xl uppercase px-6 sm:px-8 md:px-12 py-3 sm:py-4 md:py-5 rounded-md tracking-tight shadow-lg hover:shadow-xl transform hover:scale-105 ">
            Explore Matches
          </button>
        </div>
      </div>
    </>
  );
};

export default Banner;
