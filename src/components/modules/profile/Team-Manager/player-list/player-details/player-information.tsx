import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import profileImg from "@/assets/images/john_smith.png";
import { FaClock, FaStar } from "react-icons/fa";
import { AiOutlineMessage } from "react-icons/ai";
const PlayerInfo = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <FaStar
        className={`w-8 h-8 ${
          i < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
  };

  return (
    <>
      <div className="p-4 space-y-6 mt-6 md:mt-0">
        {/* Player Profile */}
        <div className="flex items-center justify-between">
          <div className="flex flex-wrap items-center gap-3">
            <div className="relative">
              <Image
                src={profileImg}
                alt="David Rodriguez"
                width={89}
                height={89}
                className="rounded-full"
              />
              <div className="absolute -bottom-0 -right-0 bg-green-500 text-white text-xs rounded-full w-6 h-6 flex items-center justify-center font-medium">
                7.5
              </div>
            </div>
            <div>
              <h2 className="text-2xl font-bold text-ns-title">
                David Rodriguez
              </h2>
              <p className="text-sm text-ns-gray">7.5 Rating</p>
            </div>
          </div>
          <Button className="bg-blue-500 hover:bg-blue-600">
            <AiOutlineMessage className="w-4 h-4" />
            Message
          </Button>
        </div>

        <div className="flex justify-between items-center gap-3">
          <div className="self-stretch h-16 p-3 bg-ns-light rounded-lg justify-start items-center gap-2 w-full">
            <p className="text-sm text-gray-600">Position</p>
            <p className="font-medium">Forward</p>
          </div>
          <div className="w-full self-stretch h-16 p-3 bg-ns-light rounded-lg justify-start items-center gap-2">
            <p className="text-sm text-gray-600">Status</p>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              <span className="text-sm text-green-600">Available</span>
            </div>
          </div>
        </div>

        {/* Personal Information */}
        <Card className="p-0 border-none  shadow-none">
          <CardHeader className="p-0">
            <CardTitle className="text-lg font-bold text-ns-title">
              Personal Information
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4 p-0">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Full Name</p>
                <p className="font-medium">Robert Fox</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Location</p>
                <p className="font-medium">San Francisco, CA</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Email</p>
                <p className="font-medium">robert.fox@example.com</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Player Type</p>
                <p className="font-medium">Free Player</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Phone Number</p>
                <p className="font-medium">123-456-7890</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Position</p>
                <p className="font-medium">Forward</p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Bio</p>
                <p className="font-medium">123-456-7890</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Status</p>
                <p className="font-medium">Active</p>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Sports Preferences */}
        <Card className="p-0 border-none shadow-none">
          <CardHeader className=" p-0">
            <CardTitle className="text-lg font-bold text-ns-title">
              Sports Preferences
            </CardTitle>
          </CardHeader>
          <CardContent className=" p-0 -mt-4">
            <div className="grid grid-cols-3 gap-2">
              <Badge className="justify-center py-2 bg-transparent text-ns-title border-none text-[16px] shadow-none">
                Football
              </Badge>
              <Badge className="justify-center py-2 bg-transparent text-ns-title border-none text-[16px] shadow-none">
                Basketball
              </Badge>
              <Badge className="justify-center py-2 bg-transparent text-ns-title border-none text-[16px] shadow-none">
                Tennis
              </Badge>
              <Badge className="justify-center py-2 bg-transparent text-ns-title border-none text-[16px] shadow-none">
                Baseball
              </Badge>
              <Badge className="justify-center py-2 bg-transparent text-ns-title border-none text-[16px] shadow-none">
                Swimming
              </Badge>
            </div>
          </CardContent>
        </Card>

        {/* Skill Level and Available Time */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className=" p-6 border-none">
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-bold text-ns-title">
                Skill Level
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-0">
              <div className=" grid grid-cols-2 items-center">
                <span className="text-sm">Football</span>
                <div className="flex gap-1">{renderStars(3)}</div>
              </div>
              <div className=" grid grid-cols-2 items-center">
                <span className="text-sm">Basketball</span>
                <div className="flex gap-1">{renderStars(2)}</div>
              </div>
              <div className=" grid grid-cols-2 items-center">
                <span className="text-sm">Tennis</span>
                <div className="flex gap-1">{renderStars(3)}</div>
              </div>
            </CardContent>
          </Card>

          <Card className="p-6 border-none">
            <CardHeader className="p-0">
              <CardTitle className="text-lg font-bold text-ns-title">
                Available time
              </CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 p-0">
              {[1, 2, 3].map((_, index) => (
                <div key={index} className="flex items-center gap-2">
                  <FaClock className=" text-ns-secondary w-6 h-6" />
                  <span className="text-[16px] text-ns-title">
                    March 25, 9:00 AM - 10:00 PM
                  </span>
                </div>
              ))}
            </CardContent>
          </Card>
        </div>
      </div>
    </>
  );
};

export default PlayerInfo;
