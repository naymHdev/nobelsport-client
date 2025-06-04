"use client";

import { GoArrowLeft } from "react-icons/go";
import FootballMatchCard from "./FootballMatchCard";

const CompletedMatchDetails = () => {
  return (
    <>
      <div>
        <div className=" flex items-center gap-3 text-ns-title">
          <GoArrowLeft className=" text-2xl" />
          <h3 className=" text-xl font-semibold">View Details</h3>
        </div>

        <div className=" mt-8">
          {/* ------------------ Match Details Card ---------------- */}
          <section>
            <FootballMatchCard />
          </section>
        </div>
      </div>
    </>
  );
};

export default CompletedMatchDetails;
