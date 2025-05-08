" use client";

import { TVenue } from "@/types/venue";
import Image from "next/image";
import Link from "next/link";
import { FaLongArrowAltRight, FaStar } from "react-icons/fa";

const NSVenueCard = ({ venue }: { venue: TVenue }) => {
  //   console.log(venue);
  return (
    <>
      <div className=" rounded-2xl border-none shadow-[0px_4px_60px_0px_#04060F08]">
        <div className="h-[200px] rounded-2xl">
          <Image
            src={venue.images[0]}
            alt={venue.title}
            priority
            className="rounded-t-2xl h-[200px] w-full"
          />
        </div>
        <div className="p-6">
          <div className=" flex justify-between">
            <div>
              <div className=" flex items-center justify-between">
                <div>
                  <h2 className=" text-xl font-sequel font-bold leading-5 text-ns-title">
                    {venue.title}
                  </h2>
                </div>
                <div className=" flex items-center gap-0.5">
                  <FaStar className="w-[16px] h-[15.258px] text-[#FFC850]" />
                  <p>{venue.rating}</p>
                </div>
              </div>
              <p className="line-clamp-2 font-sans font-normal text-ns-foreground leading-6 align-middle mt-2">
                {venue.description}
              </p>
            </div>
          </div>
          <div className="mt-7 flex items-center justify-between">
            <div>
              <h3 className=" text-ns-secondary font-extrabold leading-normal font-openSans">
                ${venue.price}/hour
              </h3>
            </div>
            <div>
              <Link
                className=" flex items-center gap-1 text-ns-secondary font-openSans font-semibold leading-normal"
                href={`/venue/${venue._id}`}
              >
                <p>View Details</p>
                <FaLongArrowAltRight />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NSVenueCard;
