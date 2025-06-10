import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import avatar from "../../../../../../assets/images/john_smith.png";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import TacticalAwareness from "./tactical-awareness";

const skills = [
  { label: "Speed", rating: 3 },
  { label: "Technical", rating: 3 },
  { label: "Finishing", rating: 5 },
  { label: "Defending", rating: 8 },
];

const PlayerRating = () => {
  const role = "premiumManager";

  return (
    <>
      {role == "premiumManager" ? (
        <Card className=" border-none shadow-none p-6 font-openSans">
          {/* ----------------- User Avatar & Name ---------------- */}
          <div className=" relative flex items-center gap-6">
            <div>
              <Image
                src={avatar}
                alt="avatar"
                width={89}
                height={89}
                className=" rounded-full"
              />
              <div className=" h-9 w-9 rounded-full absolute top-12 left-16 bg-[#10B981] flex flex-col justify-center items-center text-center font-bold text-ns-white text-[16px] ">
                7.3
              </div>
            </div>
            <div>
              <h2 className=" text-2xl font-bold text-ns-title">
                David Rodriguez
              </h2>
              <p className=" text-sm text-ns-neutral-dark mt-1">7.3 Rating</p>
            </div>
          </div>

          {/* ----------------- Skill Rating---------------- */}
          <div className="w-full max-w-md">
            <h4 className="text-lg font-bold text-ns-title  mb-4">
              Skill Rating
            </h4>
            <div className="space-y-3">
              {skills.map((skill) => (
                <div key={skill.label} className="flex items-center">
                  <div className="w-24 font-medium text-[16px] text-ns-neutral-dark">
                    {skill.label}
                  </div>
                  <div className="flex gap-1">
                    {Array.from({ length: 10 }).map((_, i) => (
                      <AiFillStar
                        key={i}
                        className={
                          i < skill.rating ? "text-yellow-400" : "text-gray-300"
                        }
                        size={26}
                      />
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ----------------- Tactical awareness over last 5 games ---------------- */}
          <TacticalAwareness />
        </Card>
      ) : (
        <Card className=" border-none shadow-none p-6">
          <h2 className=" text-2xl font-bold text-ns-title mt-3">
            Player Rating
          </h2>
          <p className=" text-ns-foreground font-semibold text-sm">
            Your current plan is free,Upgrade to enable this feature
          </p>
          <div className=" mt-4">
            <NSButton className=" bg-ns-secondary text-white rounded-xl px-4 py-3">
              Upgrade Now
            </NSButton>
          </div>
        </Card>
      )}
    </>
  );
};

export default PlayerRating;
