"use client";

import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import locationImg from "@/assets/images/venue-location.png";
import aboutVenue from "@/assets/images/venue-about.png";
import { amenitiesOverview, availableTimes, galleryImages } from "../constant";
import NSButton from "@/components/ui/core/NSButton";
import { FaClock } from "react-icons/fa";
import VenueLogoBannerSection from "../../buisness-account/venue-logo-banner";

export default function VenueOverview() {
  return (
    <div className="">
      <Card className=" border-none shadow-none">
        <VenueLogoBannerSection />
        {/* ------------------ Image Overview Section ---------------- */}
        <CardContent className="">
          <h2 className="text-2xl font-extrabold text-ns-title mb-4">
            Venue Overview
          </h2>

          <p className=" text-ns-foreground mb-6 leading-relaxed">
            The Football Factory is Manchester's premier indoor football
            facility, featuring state-of-the-art artificial turf and
            professional-grade amenities. Recently renovated in 2024, our venue
            offers an The Football Factory is Manchester's premier indoor
            football facility, featuring state-of-the-art artificial turf and
            professional-grade amenities. Recently renovated in 2024, our venue
            offers an
          </p>

          {/* Main Hero Image */}
          <div className="mb-6">
            <Image
              src={aboutVenue}
              alt="Aerial view of The Football Factory showing multiple football pitches and stadium"
              width={1000}
              height={700}
              className="w-full h-[400px] object-cover rounded-lg"
            />
          </div>

          {/* Image Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 relative">
            {galleryImages.map((image, index) => (
              <div key={index} className="relative">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={700}
                  height={600}
                  className="w-full h-[288px] object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </CardContent>

        {/* ---------- Location Section ---------- */}
        <CardContent>
          <h2 className="text-2xl font-extrabold text-ns-title mb-4">
            Location
          </h2>

          <div>
            <Image
              src={locationImg}
              alt="Aerial view of The Football Factory showing multiple football pitches and stadium"
              width={1000}
              height={700}
              className="w-full h-[377px] object-cover rounded-lg"
            />
          </div>
        </CardContent>

        {/* ---------- Pricing - Contact - Availability - Amenities ---------- */}
        <CardContent>
          <div className="pt-6 space-y-6">
            {/* ---------------- Pricing Section ---------------- */}
            <div>
              <h3 className="text-2xl font-extrabold text-ns-title mb-4">
                Pricing
              </h3>
              <div>
                <p className=" text-ns-title font-semibold mb-3">Hourly Rate</p>
                <p className="text-ns-foreground">$50</p>
              </div>
            </div>

            {/*--------------------  Contact Section ---------------- */}
            <div>
              <h3 className="text-2xl font-extrabold text-ns-title mb-4">
                Contact
              </h3>
              <div className="space-y-3">
                <div>
                  <p className="text-ns-title font-semibold mb-3">
                    Phone Number
                  </p>
                  <p className="text-ns-foreground">(123) 456-7890</p>
                </div>
                <div>
                  <p className="text-ns-title font-semibold mb-3">Email</p>
                  <p className="text-ns-foreground">example@host.com</p>
                </div>
                <div>
                  <p className="text-ns-title font-semibold mb-3">
                    Operating hour
                  </p>
                  <p className="text-ns-foreground">9:00 AM - 8:00 PM</p>
                </div>
              </div>
            </div>

            {/*--------------------  Available Section ---------------- */}
            <div>
              <h3 className="text-2xl font-extrabold text-ns-title mb-4">
                Available
              </h3>
              <div className="space-y-2">
                {availableTimes.map((slot, index) => (
                  <div key={index} className="flex items-center gap-3">
                    <div className="">
                      <FaClock className=" text-ns-secondary md:size-6" />
                    </div>
                    <p className=" text-[16px] text-ns-title">{slot}</p>
                  </div>
                ))}
              </div>
            </div>

            {/*  -------------------- Amenities Section ---------------- */}
            <div>
              <h3 className="text-2xl font-extrabold text-ns-title mb-4">
                Amenities
              </h3>
              <div className="grid md:grid-cols-2 gap-3">
                {amenitiesOverview.map((amenity, index) => {
                  const IconComponent = amenity.icon;
                  return (
                    <div key={index} className="flex items-center space-x-2">
                      <IconComponent className="h-4 w-4 text-blue-600" />
                      <span className=" md:text-[16px] text-ns-title">
                        {amenity.label}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <NSButton className="w-full bg-ns-secondary hover:bg-blue-700 rounded-xl py-3">
              Edit Details
            </NSButton>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
