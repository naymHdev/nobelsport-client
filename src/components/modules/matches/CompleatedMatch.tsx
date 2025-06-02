import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NSContainer from "@/components/ui/core/NSContainer";
import { MapPin, Calendar, Clock } from "lucide-react";
import clubLogo from "../../../assets/images/Dragons FC logo.png";
import Image from "next/image";

export default function ComplectedMatch() {
  return (
    <>
      <NSContainer>
        <div className="space-y-6 mb-10">
          {/* Header Section */}
          <div className="text-center space-y-4">
            <Badge
              variant="destructive"
              className="bg-[#E5E7EB] text-ns-title text-sm"
            >
              Completed
            </Badge>

            <h1 className="text-2xl font-bold text-gray-900">
              5 vs 5 Friendly Match
            </h1>

            <div className="flex items-center justify-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-1">
                <Calendar className="w-4 h-4" />
                <span>March 26, 2024</span>
              </div>
              <div className="flex items-center gap-1">
                <Clock className="w-4 h-4" />
                <span>18:00</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-1 text-sm">
              <MapPin className="w-4 h-4" />
              <span className="text-blue-600">Sports Arena Central</span>
            </div>
          </div>

          {/* Score Section */}
          <div className="flex items-center justify-center gap-8 py-6">
            <div className="text-center">
              <div className=" flex items-center justify-center mb-2 mx-auto">
                <Image
                  src={clubLogo}
                  alt="Dragons FC logo"
                  width={50}
                  height={50}
                  className="rounded-full h-16 w-16 object-cover"
                />
              </div>
              <p className="text-sm font-black">Team A</p>
            </div>

            <div className="text-center">
              <div className="text-4xl font-bold text-gray-900">3 - 2</div>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 flex items-center justify-center mb-2 mx-auto">
                <Image
                  src={clubLogo}
                  alt="Dragons FC logo"
                  width={50}
                  height={50}
                  className="rounded-full h-16 w-16 object-cover"
                />
              </div>
              <p className="text-sm font-black text-ns-title">Team B</p>
            </div>
          </div>

          {/* Match Overview */}
          <Card className=" border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-lg text-ns-title font-bold">
                Match Overview
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className=" text-ns-foreground text-sm leading-relaxed -mt-4">
                Team Alpha secured a 3-2 victory after an intense second half,
                with Alex Thompson scoring the game-winning goal in the 89th
                minute.
              </p>
            </CardContent>
          </Card>

          {/* Key Events */}
          <Card className=" border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-lg text-ns-title font-bold">
                Key Events
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">15'</span>
                  <span className="text-sm text-gray-900">
                    Goal by John Smith (Team A)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-yellow-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">32'</span>
                  <span className="text-sm text-gray-900">
                    Yellow Card - Mike Johnson (Team B)
                  </span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center">
                    <div className="w-3 h-3 bg-green-600 rounded-full"></div>
                  </div>
                  <span className="text-sm text-gray-600">67'</span>
                  <span className="text-sm text-gray-900">
                    Goal by John Smith (Team B)
                  </span>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Match Stats */}
          <Card className=" border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-lg text-ns-title font-bold">
                Match Stats
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Possession */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">
                    Phoenix United
                  </span>
                  <span className="text-sm text-gray-600">Possession</span>
                  <span className="text-sm font-medium text-gray-900">
                    Dragons FC Lineup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">55%</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "55%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold">45%</span>
                </div>
              </div>

              {/* Shots on Target */}
              <div>
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-blue-600">
                    Phoenix United
                  </span>
                  <span className="text-sm text-gray-600">Shots on Target</span>
                  <span className="text-sm font-medium text-gray-900">
                    Dragons FC Lineup
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold">5</span>
                  <div className="flex-1 bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-500 h-2 rounded-full"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                  <span className="text-sm font-bold">6</span>
                </div>
              </div>

              {/* Team Logos */}
              <div className="flex justify-between items-center pt-4">
                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Image
                      src={clubLogo}
                      alt="Dragons FC logo"
                      width={50}
                      height={50}
                      className="rounded-full h-16 w-16 object-cover"
                    />
                  </div>
                  <p className=" text-sm text-ns-title font-semibold">
                    Dragons FC Lineup
                  </p>
                </div>

                <div className="text-center">
                  <div className="w-12 h-12 rounded-full flex items-center justify-center mb-2 mx-auto">
                    <Image
                      src={clubLogo}
                      alt="Dragons FC logo"
                      width={50}
                      height={50}
                      className="rounded-full h-16 w-16 object-cover"
                    />
                  </div>
                  <p className=" text-sm text-ns-title font-semibold">
                    Phoenix United
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Player Performance */}
          <Card className=" border-none shadow-none">
            <CardHeader>
              <CardTitle className="text-lg text-ns-title font-bold">
                Player Performance
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className=" bg-ns-primary text-white">
                      <th className="text-left py-3 px-4 font-medium">
                        Player
                      </th>
                      <th className="text-left py-3 px-4 font-medium">Team</th>
                      <th className="text-left py-3 px-4 font-medium">Goals</th>
                      <th className="text-left py-3 px-4 font-medium">
                        Assists
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">
                            John Smith
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-blue-600 font-medium">
                          Phoenix United
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">2</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">1</span>
                      </td>
                    </tr>
                    <tr className="border-b border-gray-200">
                      <td className="py-3 px-4">
                        <div className="flex items-center gap-2">
                          <Avatar className="w-8 h-8">
                            <AvatarImage src="/placeholder.svg?height=32&width=32" />
                            <AvatarFallback>JS</AvatarFallback>
                          </Avatar>
                          <span className="text-sm font-medium">
                            John Smith
                          </span>
                        </div>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm text-blue-600 font-medium">
                          Phoenix United
                        </span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">2</span>
                      </td>
                      <td className="py-3 px-4">
                        <span className="text-sm">1</span>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </CardContent>
          </Card>
        </div>
      </NSContainer>
    </>
  );
}
