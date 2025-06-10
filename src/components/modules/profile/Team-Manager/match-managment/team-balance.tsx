"use client";

import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import clubLogo from "@/assets/images/Dragons FC logo.png";
import Image from "next/image";
import NSBackButton from "@/components/ui/core/NSBackButton";
import { Card } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import TeamBuilderModal from "./team-builder-modal";


export default function TeamManagerTeamBalance() {
  return (
    <div className="rounded-lg p-6 bg-white font-openSans">
      {/* Header */}
      <NSBackButton label="View Team Balance" />

      {/* Team Strength Analysis */}
      <div className="my-8">
        <Card className="px-6 border-none">
          <h2 className="text-xl font-bold mb-6">Team Strength Analysis</h2>
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <div className=" flex items-center justify-center">
                <Image
                  src={clubLogo}
                  alt="Dragons FC logo"
                  width={100}
                  height={100}
                  className=" w-[68px] h-[68px] object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-4">Dragons FC Lineup</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 font-semibold">
                      Attack Rating
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      6.9
                    </span>
                  </div>
                  <Progress value={69} className="h-2" />
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 font-semibold">
                      Defense Rating
                    </span>
                    <span className="text-sm font-semibold text-blue-600">
                      6.9
                    </span>
                  </div>
                  <Progress value={69} className="h-2" />
                </div>
              </div>
            </div>
            <div className="text-center">
              <div className=" flex items-center justify-center">
                <Image
                  src={clubLogo}
                  alt="Dragons FC logo"
                  width={100}
                  height={100}
                  className=" w-[68px] h-[68px] object-cover rounded-lg"
                />
              </div>
              <h3 className="font-semibold mb-4">Phoenix United</h3>

              <div className="space-y-4">
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 font-semibold">
                      Attack Rating
                    </span>
                    <span className="text-sm font-semibold text-red-600">
                      7.8
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-sm text-gray-600 font-semibold">
                      Defense Rating
                    </span>
                    <span className="text-sm font-semibold text-red-600">
                      7.8
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-red-600 h-2 rounded-full"
                      style={{ width: "78%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>

      {/* Improvement Recommendation */}
      <Card className="mb-8 p-6 border-none">
        <h2 className="text-xl font-bold mb-6">Improvement Recommendation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Dragons FC Recommendations */}
          <Card className="p-6 border-none">
            <div className=" flex items-center justify-start">
              <Image
                src={clubLogo}
                alt="Dragons FC logo"
                width={100}
                height={100}
                className=" w-[68px] h-[68px] object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-ns-title -mt-4">
              Dragons FC Lineup
            </h3>

            <div className="space-y-2 text-sm text-gray-600 font-semibold text-left">
              <p>Improve defensive coordination</p>
              <p>Maintain attacking advantage</p>
              <p>Work on ball possession</p>
            </div>
          </Card>

          {/* Phoenix United Recommendations */}
          <Card className=" p-6 border-none">
            <div className=" flex items-center justify-start">
              <Image
                src={clubLogo}
                alt="Dragons FC logo"
                width={100}
                height={100}
                className=" w-[68px] h-[68px] object-cover rounded-lg"
              />
            </div>
            <h3 className="font-semibold text-ns-title -mt-4">
              Phoenix United
            </h3>

            <div className="space-y-2 text-sm text-gray-600 font-semibold text-left">
              <p>Improve defensive coordination</p>
              <p>Maintain attacking advantage</p>
              <p>Work on ball possession</p>
            </div>
          </Card>
        </div>
      </Card>

      {/* Balance Modal */}
      <TeamBuilderModal />
    </div>
  );
}
