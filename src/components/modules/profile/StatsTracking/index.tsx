"use client";

import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { FaCheck } from "react-icons/fa";
import { GoArrowLeft } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
const StatsTracking = () => {
  return (
    <>
      <div className=" font-openSans">
        <div className=" flex items-center gap-3 text-ns-title">
          <GoArrowLeft className=" text-2xl" />
          <h3 className=" text-xl font-semibold">Upgrade Now</h3>
        </div>

        {/* ----------------- Pricing Card ---------------- */}
        <div className=" grid grid-cols-1 lg:grid-cols-2 4xl:grid-cols-3 justify-center gap-6 md:gap-10 mt-7">
          <section>
            <Card className="border-none shadow-none p-9 text-center flex flex-col h-full">
              <div className="flex-grow">
                <h2 className="text-2xl font-bold text-ns-title">Free</h2>
                <div className="mt-4">
                  <h2 className="text-ns-title text-4xl font-bold">
                    $0
                    <span className="text-ns-foreground text-sm font-bold">
                      /month
                    </span>
                  </h2>
                  <p className="text-ns-foreground mt-2">
                    Perfect to get started
                  </p>
                </div>

                <div className="mt-8 space-y-4">
                  {/* Features */}
                  <div className=" mt-8 space-y-4">
                    <div className=" flex items-center gap-3">
                      <FaCheck className=" text-ns-primary" />
                      <p className=" text-ns-title">Profile Creation</p>
                    </div>
                    <div className=" flex items-center gap-3">
                      <FaCheck className=" text-ns-primary" />
                      <p className=" text-ns-title">Join Matches</p>
                    </div>
                    <div className=" flex items-center gap-3">
                      <FaCheck className=" text-ns-primary" />
                      <p className=" text-ns-title">Basic Stats</p>
                    </div>
                    <div className=" flex items-center gap-3 text-ns-foreground">
                      <RxCross2 className="" />
                      <p className="">Ad-free Experience</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-auto">
                <NSButton className="block w-full bg-[#F3F4F6] text-ns-title py-3 rounded-lg">
                  Get Started
                </NSButton>
              </div>
            </Card>
          </section>
          <section>
            <Card className=" border-none shadow-none p-9 text-center flex flex-col h-full">
              <div>
                <div>
                  <NSButton className=" px-3 py-1 uppercase text-ns-secondary text-sm font-semibold bg-[#DBEAFE]">
                    POPULAR
                  </NSButton>
                </div>
                <h2 className=" text-2xl font-bold text-ns-title mt-4">
                  Amateur
                </h2>
                <div className=" mt-4">
                  <h2 className=" text-ns-title text-4xl font-bold">
                    $4.99
                    <span className=" text-ns-foreground text-sm font-bold">
                      /month
                    </span>
                  </h2>
                  <p className=" text-ns-foreground mt-2">
                    For the dedicated player
                  </p>
                </div>
              </div>

              <div className=" mt-8 space-y-4">
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">All Free Features</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Ad-free Experience</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Enhanced Stats Tracking</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Match Recommendations</p>
                </div>
              </div>

              <div className=" mt-8">
                <NSButton className=" block w-full bg-ns-secondary text-white  py-3 rounded-lg">
                  Subscribe Now
                </NSButton>
              </div>
            </Card>
          </section>
          <section>
            <Card className=" border-none shadow-none p-9 text-center">
              <div>
                <h2 className=" text-2xl font-bold text-ns-title ">Pro</h2>
                <div className=" mt-4">
                  <h2 className=" text-ns-title text-4xl font-bold">
                    $9.99
                    <span className=" text-ns-foreground text-sm font-bold">
                      /month
                    </span>
                  </h2>
                  <p className=" text-ns-foreground mt-2">
                    For the dedicated player
                  </p>
                </div>
              </div>

              <div className=" mt-8 space-y-4">
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">All Amateur Features</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Performance Analytics</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Priority Booking</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Coaching Tips</p>
                </div>
                <div className=" flex items-center gap-3">
                  <FaCheck className=" text-ns-primary" />
                  <p className=" text-ns-title">Tournament Access</p>
                </div>
              </div>

              <div className=" mt-8">
                <NSButton className=" block w-full bg-ns-title py-3 rounded-lg">
                  Go Pro
                </NSButton>
              </div>
            </Card>
          </section>
        </div>
      </div>
    </>
  );
};

export default StatsTracking;
