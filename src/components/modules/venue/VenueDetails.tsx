"use client";

import { TVenue } from "@/types/venue";
import Image from "next/image";
import Link from "next/link";
import { FaLocationDot } from "react-icons/fa6";
import { IoCall } from "react-icons/io5";
import { ImageGallery } from "./ImageGallery";
import { Calendar, Users, Car, Coffee, ShirtIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { MdOutlineStarPurple500 } from "react-icons/md";
import { FaClock } from "react-icons/fa";

// ------------------------- Static Data -------------------------
import mapImg from "../../../assets/images/contact-map.png";
import { ShareModal } from "./ShareModal";
import { useEffect, useState } from "react";
import NSNotifyModal from "@/components/ui/core/NSNotifyModal";

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <MdOutlineStarPurple500
      key={i}
      className={`w-5 h-5 ${
        i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
      }`}
    />
  ));
};
const getAmenityIcon = (iconType: string) => {
  switch (iconType) {
    case "changing-rooms":
      return <ShirtIcon className="w-6 h-6 text-ns-secondary" />;
    case "cafe":
      return <Coffee className="w-6 h-6 text-ns-secondary" />;
    case "parking":
      return <Car className="w-6 h-6 text-ns-secondary" />;
    default:
      return <Users className="w-6 h-6 text-ns-secondary" />;
  }
};

const VenueDetails = ({ venueDetails }: { venueDetails: TVenue }) => {
  const [url, setUrl] = useState("");

  const {
    title,
    location,
    images,
    about,
    rating,
    price,
    contactInfo,
    amenities,
    reviews,
    _id,
  } = venueDetails || {};

  // console.log("venueDetails", reviews);

  useEffect(() => {
    setUrl(window.location.href);
  }, []);

  const user = false;

  return (
    <>
      {/* ---------------- Details Header Section ---------------- */}
      <section className=" flex items-center justify-between">
        <div className=" flex flex-col  items-start">
          <h2 className=" text-2xl font-bold uppercase font-openSans text-ns-title">
            {title}
          </h2>
          <div className="mt-[10px] flex items-center gap-[10px]">
            <FaLocationDot className=" size-6 text-ns-secondary" />
            <p className=" font-openSans font-normal text-ns-foreground">
              {location}
            </p>
          </div>
        </div>
        <div>
          <ShareModal url={url} />
        </div>
      </section>

      {/* ---------------- Details Image Grid Gallery Section ---------------- */}
      <section className=" mt-6 bg-white p-6 rounded-xl">
        <ImageGallery images={images} title={title} />
      </section>

      {/* ---------------- Details About Layout Section ---------------- */}
      <section className=" mt-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8">
          {/* Left Column - Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* About Section */}
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-2xl font-extrabold text-ns-title font-openSans">
                  About this venue
                </CardTitle>
                <p className=" mt-2 text-ns-foreground font-openSans leading-relaxed text-sm sm:text-base">
                  {about?.description}
                </p>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="relative rounded-lg overflow-hidden">
                  <Image
                    src={about?.image || "/placeholder.svg"}
                    alt={title}
                    width={1000}
                    height={700}
                    className="w-full h-[200px] sm:h-[300px] md:h-[435px] object-cover"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Amenities Section */}
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-2xl font-extrabold text-ns-title font-openSans">
                  Amenities
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4 w-full lg:max-w-3xl">
                  {amenities?.map((amenity, index) => (
                    <div key={index} className="flex items-center gap-3 p-2">
                      {getAmenityIcon(amenity.icon)}
                      <span className="text-sm font-normal font-openSans text-black">
                        {amenity.name}
                      </span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Reviews Section */}
            <Card className=" border-none shadow-none">
              <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className=" text-2xl font-extrabold text-ns-title font-openSans">
                  Reviews
                </CardTitle>
                <Link href={{ pathname: "/all-reviews", query: { id: _id } }}>
                  <p className=" text-ns-secondary font-openSans text-center font-normal hover:underline">
                    See all 2,145 reviews
                  </p>
                </Link>
              </CardHeader>
              <CardContent className="space-y-4">
                {reviews?.map((review, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex items-center gap-4">
                      <Avatar className="w-12 h-12">
                        <AvatarImage
                          src={review?.profileImg || "/placeholder.svg"}
                        />
                        <AvatarFallback>
                          {review?.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="font-medium text-sm font-openSans text-ns-title">
                          {review?.name}
                        </p>
                        <div className="flex items-start gap-0.5 mt-1">
                          {renderStars(review?.rating)}
                        </div>
                      </div>
                    </div>
                    <p className=" text-ns-foreground font-openSans text-sm leading-relaxed mt-3">
                      {review?.comment}
                    </p>
                    {index < reviews?.length - 1 && (
                      <Separator className="mt-4" />
                    )}
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Booking & Info */}
          <div className="space-y-6">
            {/* Pricing & Booking Card */}
            <Card className="sticky top-6 border-none shadow-none">
              <CardContent className="">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <span className="text-2xl font-bold font-openSans text-ns-title">
                      ${price}
                    </span>
                    <span className=" text-ns-foreground font-openSans mt-2">
                      /hour
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    <MdOutlineStarPurple500 className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                    <span className="font-medium">{rating}</span>
                  </div>
                </div>

                <div className="space-y-4 border border-neutral-200 rounded-xl px-[13px] py-3">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Check-in
                      </label>
                      <div className="relative">
                        <input
                          type="text"
                          // value={selectedDate}
                          // onChange={(e) => setSelectedDate(e.target.value)}
                          className="w-full p-2 border rounded-md text-sm"
                          placeholder="mm/dd/yy"
                        />
                        <Calendar className="absolute right-2 top-2.5 w-4 h-4 text-gray-400" />
                      </div>
                    </div>
                    <div>
                      <label className="text-sm font-medium text-gray-700 mb-1 block">
                        Duration
                      </label>
                      <Select
                      // value={selectedDuration}
                      // onValueChange={setSelectedDuration}
                      >
                        <SelectTrigger className="text-sm w-full">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent className=" w-full">
                          <SelectItem value="1 hour">1 hour</SelectItem>
                          <SelectItem value="2 hours">2 hours</SelectItem>
                          <SelectItem value="3 hours">3 hours</SelectItem>
                          <SelectItem value="4 hours">4 hours</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {user ? (
                    <Button className="w-full bg-ns-secondary hover:cursor-pointer hover:bg-blue-700 text-white py-6 font-openSans">
                      Book Now
                    </Button>
                  ) : (
                    <NSNotifyModal
                      className=" bg-ns-secondary"
                      title="To order a Venue, please log in to your account."
                    >
                      <Button className="w-full bg-ns-secondary hover:cursor-pointer hover:bg-blue-700 text-white py-6 font-openSans">
                        Book Now
                      </Button>
                    </NSNotifyModal>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Contact & Location */}
            <Card className=" border-none shadow-none">
              <CardContent className="font-openSans">
                <h3 className=" text-xl text-ns-title font-openSans">
                  Contact & Location
                </h3>
                <div className=" space-y-4 mt-4">
                  <div className="flex items-start gap-3">
                    <FaLocationDot className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-sm text-black">
                      {contactInfo?.location}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <IoCall className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-black">
                      {contactInfo?.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <FaClock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                    <span className="text-sm text-black">
                      {contactInfo?.openTime}
                    </span>
                  </div>

                  {/* Stadium Map */}
                  <div className="rounded-lg overflow-hidden mt-5">
                    <Image
                      src={mapImg}
                      alt="Stadium seating chart"
                      width={600}
                      height={600}
                      className="w-full h-[350px] object-cover rounded-lg"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Available Times */}
            <Card className=" border-none shadow-none">
              <CardContent className="">
                <h3 className="text-lg font-semibold">Available Times</h3>
                <div className="mt-3 space-y-1">
                  {contactInfo?.availableTimes?.map((time, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 p-2 hover:bg-gray-50 rounded-md cursor-pointer"
                    >
                      <div className="">
                        <FaClock className="w-5 h-5 text-blue-600 flex-shrink-0" />
                      </div>
                      <span className="text-sm text-gray-700">{time}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </>
  );
};

export default VenueDetails;
