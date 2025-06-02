import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import football from "../../../assets/icons//footbal.png";
import manager from "../../../assets/icons/manager.png";
import owner from "../../../assets/icons/owner.png";
import Image from "next/image";
import Link from "next/link";

export default function NoblesportLanding() {
  return (
    <div className=" py-16 font-openSans">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-ns-title">
            Join the Game with Noblesport
          </h1>
          <p className=" text-xl text-ns-foreground max-w-2xl mx-auto leading-relaxed mt-6">
            Whether you're a player, team manager, or venue owner, join the
            community and manage matches, teams, and venues effortlessly!
          </p>
        </div>

        {/* Role Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Player Card */}
          <Card className=" border-none shadow-none">
            <CardContent className="p-8 text-center">
              <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src={football}
                  alt="Football"
                  width={50}
                  height={50}
                  className="w-20 h-20 object-cover"
                />
              </div>

              <h3 className=" text-2xl font-semibold mt-4">Join as Player</h3>

              <p className="leading-relaxed text-sm text-ns-foreground mt-4">
                Find teams, join matches, and track your sports journey with
                ease
              </p>

              <Link href="/sign-up">
                <Button className=" mt-8 w-full bg-ns-secondary hover:bg-blue-700 hover:cursor-pointer text-white py-6 rounded-lg font-medium">
                  Join as Player
                </Button>
              </Link>
            </CardContent>
          </Card>

          {/* Manager Card */}
          <Card className=" border-none shadow-none">
            <CardContent className="p-8 text-center">
              <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src={manager}
                  alt="Manager"
                  width={50}
                  height={50}
                  className="w-20 h-20 object-cover"
                />
              </div>

              <h3 className=" text-2xl font-semibold mt-4">
                Join as Team Manager
              </h3>

              <p className="leading-relaxed text-sm text-ns-foreground mt-4">
                Manage your team, schedule matches, and track performance
              </p>

              <Button className=" mt-8 w-full bg-ns-primary hover:bg-green-900 hover:cursor-pointer text-white py-6 rounded-lg font-medium">
                Join as Manager
              </Button>
            </CardContent>
          </Card>

          {/* Owner Card */}
          <Card className=" border-none shadow-none">
            <CardContent className="p-8 text-center">
              <div className=" rounded-full flex items-center justify-center mx-auto mb-6">
                <Image
                  src={owner}
                  alt="Owner Icon"
                  width={50}
                  height={50}
                  className="w-20 h-20 object-cover"
                />
              </div>

              <h3 className=" text-2xl font-semibold mt-4">
                Join as Venue Owner
              </h3>

              <p className="leading-relaxed text-sm text-ns-foreground mt-4">
                List your venue, manage bookings, and grow your business
              </p>

              <Button className=" mt-8 w-full bg-[#F6AD0E] hover:bg-yellow-700 hover:cursor-pointer text-white py-6 rounded-lg font-medium">
                Join as Owner
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
