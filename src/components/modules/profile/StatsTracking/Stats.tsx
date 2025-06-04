import {
  IoIosArrowRoundDown,
  IoIosArrowRoundUp,
  IoIosFootball,
  IoLogoGameControllerB,
} from "react-icons/io";
import { FaHandsHelping } from "react-icons/fa";
import { TfiStatsUp } from "react-icons/tfi";
import { Card } from "@/components/ui/card";

const Stats = () => {
  return (
    <>
      <section className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 items-center justify-between">
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Goals</p>
            <IoIosFootball className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">18</h2>
            <div className=" text-green-600 flex items-center gap-0.5">
              <IoIosArrowRoundUp /> +3 this month
            </div>
          </div>
        </Card>
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Assists</p>
            <FaHandsHelping className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">7</h2>
            <div className=" text-green-600 flex items-center gap-0.5">
              <IoIosArrowRoundUp /> +3 this month
            </div>
          </div>
        </Card>
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Win Rate</p>
            <TfiStatsUp className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">75%</h2>
            <div className=" text-red-600 flex items-center gap-0.5">
              <IoIosArrowRoundDown /> -5 this month
            </div>
          </div>
        </Card>
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Total Matches</p>
            <IoLogoGameControllerB className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">18</h2>
            <div className=" text-green-600 flex items-center gap-0.5">
              <IoIosArrowRoundUp /> +3 this month
            </div>
          </div>
        </Card>
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Shoot Accuracy</p>
            <TfiStatsUp className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">7</h2>
            <div className=" text-green-600 flex items-center gap-0.5">
              <IoIosArrowRoundUp /> +3 this month
            </div>
          </div>
        </Card>
        <Card className=" border-none shadow-none px-6">
          <div className=" flex items-center justify-between">
            <p className=" text-ns-foreground font-medium">Pass Accuracy</p>
            <TfiStatsUp className="text-[#4F46E5] text-xl" />
          </div>
          <div className="mt-2">
            <h2 className=" font-bold tex3xl text-ns-title">75%</h2>
            <div className=" text-red-600 flex items-center gap-0.5">
              <IoIosArrowRoundDown /> -5 this month
            </div>
          </div>
        </Card>
      </section>
    </>
  );
};

export default Stats;
