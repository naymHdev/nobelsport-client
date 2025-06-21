import NSContainer from "@/components/ui/core/NSContainer";
import addBg from "../../../assets/images/add_banner.jpg";
import Image from "next/image";

const Advertisement = () => {
  return (
    <>
      <div className="relative bg-gray-900 overflow-hidden shadow-xl p-6 md:p-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10 min-h-[200px]">
        <Image
          src={addBg}
          alt="Tech background"
          width={800}
          height={400}
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />

        <NSContainer className=" flex flex-col md:flex-row gap-6 md:gap-0 items-center justify-between">
          {/* Content Section */}
          <div className="relative z-10 text-white text-center md:text-left flex-grow">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 leading-tight">
              Discover <span className="text-blue-400">TechHub</span> Exclusive
              Offer!
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-2xl mx-auto md:mx-0">
              Premium tech solutions for modern athletes and sports enthusiasts.
            </p>
          </div>

          {/* Button Section */}
          <div className="relative z-10 flex-shrink-0">
            <button className=" bg-ns-supportive-yellow hover:bg-ns-supportive-yellow/95 text-ns-title font-semibold py-3 px-6 md:py-4 md:px-8 rounded-lg shadow-lg transition duration-300 ease-in-out transform hover:scale-105 flex items-center justify-center space-x-2 hover:cursor-pointer">
              {/* External link icon (SVG) */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                />
              </svg>
              <span>Visit TechHub Now</span>
            </button>
          </div>
        </NSContainer>
      </div>
    </>
  );
};

export default Advertisement;
