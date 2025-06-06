"use client";

import { CardContent } from "@/components/ui/card";
import Image from "next/image";
import fbLogo from "@/assets/images/fb-logo.png";
import venueBanner from "@/assets/images/fb-venue-banner.png";

const VenueLogoBannerSection = () => {
  return (
    <>
      {/* ------------------ Logo section ---------------- */}
      <CardContent>
        <h2 className="text-2xl font-extrabold text-ns-title mb-4">
          Venue Logo
        </h2>
        <div className=" flex items-center gap-4">
          <Image
            src={fbLogo}
            alt="Venue Logo"
            width={100}
            height={100}
            className=" w-12 h-12 object-cover rounded-lg"
          />
          <p className=" text-xl font-semibold text-ns-title">
            The Premier Football Field
          </p>
        </div>
      </CardContent>

      {/* ------------------ Banner section ---------------- */}
      <CardContent>
        <h2 className="text-2xl font-extrabold text-ns-title mb-4">
          Venue Banner
        </h2>
        <div className=" rounded-lg mt-6">
          <Image
            src={venueBanner}
            alt="Venue Banner"
            width={1000}
            height={700}
            className="w-full h-[390px] object-cover rounded-lg"
          />
        </div>
      </CardContent>
    </>
  );
};

export default VenueLogoBannerSection;
