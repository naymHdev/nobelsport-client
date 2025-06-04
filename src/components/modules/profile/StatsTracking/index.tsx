"use client";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import { SkillRating } from "./SkillRating";
import { Progress } from "@/components/ui/progress";

import Stats from "./Stats";
import PremiumFeatures from "./premium-features";

const StatsTrack = () => {
  return (
    <>
      <div className=" relative font-openSans">
        <section>
          <h2 className=" text-3xl font-bold text-ns-title">Basic Stats</h2>
          <p className=" text-ns-foreground font-medium mt-3">
            Track your progress and see how you're improving with every match
            you play!
          </p>
        </section>

        {/* ----------------- User Avatar ---------------- */}
        <section className=" flex items-center justify-start gap-3 mt-12 relative">
          <div>
            <Avatar className="w-[89px] h-[89px]">
              <AvatarImage src="https://res.cloudinary.com/dgrg4lmww/image/upload/v1748922029/Ellipse_961_tsyc71.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </div>
          <div className=" absolute top-14 left-14  w-[36px] h-[36px] rounded-full bg-[#10B981] flex flex-col items-center justify-center text-white font-bold text-sm">
            7.3
          </div>
          <div>
            <h2 className=" text-2xl font-bold text-ns-title">
              David Rodriguez
            </h2>
            <p className=" text-ns-foreground font-medium mt-2">7.3 Rating</p>
          </div>
        </section>

        <div className="mt-6 space-y-6">
          {/* ----------------- Skill Level ---------------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Skill Level
                </CardTitle>
              </CardHeader>
              <div className="px-6 -mt-2">
                <SkillRating />
              </div>
            </Card>
          </section>

          {/* ----------------- Match History ---------------- */}
          <Stats />

          {/* ----------------- Your Stats ---------------- */}
          <section>
            <Card className=" border-none shadow-none px-6">
              <div className=" flex items-center justify-between">
                <h3 className="text-xl text-ns-title font-semibold">
                  Your Stats
                </h3>
                <p className="text-[#4F46E5] text-sm font-normal">
                  5 Goals, 2 Assists
                </p>
              </div>
              <div>
                <Progress value={20} />
              </div>
            </Card>
          </section>

          {/* ----------------- Premium Features ---------------- */}
          <section>
            <PremiumFeatures />
          </section>
        </div>
      </div>
    </>
  );
};

export default StatsTrack;
