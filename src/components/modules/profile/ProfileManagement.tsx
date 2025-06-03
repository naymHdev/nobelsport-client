"use client";

import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { SportsPreferences } from "./SportsPreferences";
import { SkillLevel } from "./SkillLevel";
import SimpleAvailabilityCalendar from "./SimpleAvailabilityCalendar";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ProfileManagement = () => {
  return (
    <>
      <div className=" font-openSans">
        <form className=" space-y-8">
          {/* ----------- Personal Info ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Personal Information
                </CardTitle>
              </CardHeader>

              <div className="-mt-2 px-6">
                <div className=" grid md:grid-cols-2 gap-4">
                  <div>
                    <p className=" text-sm text-ns-foreground">Full Name</p>
                    <p className=" text-ns-title mt-1">Robert Fox</p>
                  </div>
                  <div>
                    <p className=" text-sm text-ns-foreground">Location</p>
                    <p className=" text-ns-title mt-1">San Francisco, CA</p>
                  </div>
                </div>
                <div className=" grid md:grid-cols-2 gap-4 mt-4">
                  <div>
                    <p className=" text-sm text-ns-foreground">Email</p>
                    <p className=" text-ns-title mt-1">
                      robert.fox@example.com
                    </p>
                  </div>
                  <div>
                    <p className=" text-sm text-ns-foreground">Player Type</p>
                    <p className=" text-ns-title mt-1">Free Player</p>
                  </div>
                </div>
                <div className=" flex flex-col gap-4 mt-4">
                  <div>
                    <p className=" text-sm text-ns-foreground">Phone Number</p>
                    <p className=" text-ns-title mt-1">123-456-7890</p>
                  </div>
                  <div>
                    <p className=" text-sm text-ns-foreground">Bio</p>
                    <p className=" text-ns-title mt-1">
                      Team Members Only - Only my team members can view my
                      profile
                    </p>
                  </div>
                </div>
                <div className=" mt-8">
                  <NSButton className=" bg-ns-secondary text-white rounded-lg py-3">
                    Edit Profile
                  </NSButton>
                </div>
              </div>
            </Card>
          </section>

          {/* ----------- Sports Preferences ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Sports Preferences
                </CardTitle>
              </CardHeader>
              <div className=" px-6 -mt-2">
                <SportsPreferences />
              </div>
            </Card>
          </section>

          {/* ----------- Skill Level ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Skill Level
                </CardTitle>
              </CardHeader>
              <div className=" px-6 -mt-2">
                <SkillLevel />
              </div>
            </Card>
          </section>

          {/* ----------- Availability Calendar ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Availability Calendar
                </CardTitle>
                <p className=" text-ns-foreground text-sm mt-3">
                  Select the days you are available for matches.
                </p>
              </CardHeader>

              <div className=" px-6 -mt-2">
                <SimpleAvailabilityCalendar />
              </div>
            </Card>
          </section>

          {/* ----------- Profile Visibility ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Profile Visibility
                </CardTitle>
              </CardHeader>
              <div className=" px-6 -mt-2">
                <RadioGroup
                  defaultValue="public"
                  className=" space-y-3 text-ns-title"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="default"
                      id="r1"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="public">
                      Public - Everyone can view my profile
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="comfortable"
                      id="r2"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r2">
                      Team Members Only - Only my team members can view my
                      profile
                    </Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="compact"
                      id="r3"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r3">
                      Private - Only I can view my profile
                    </Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>
          </section>

          {/* ----------- Status ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Status
                </CardTitle>
              </CardHeader>
              <div className=" px-6 -mt-2">
                <RadioGroup
                  defaultValue="active"
                  className=" space-y-3 text-ns-title"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="active"
                      id="r1"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="active">Active</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="injured"
                      id="r2"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r2">Injured</Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>
          </section>

          {/* ----------- Position ----------- */}
          <section>
            <Card className=" border-none shadow-none">
              <CardHeader>
                <CardTitle className=" text-xl text-ns-title font-semibold">
                  Position
                </CardTitle>
              </CardHeader>
              <div className=" px-6 -mt-2">
                <RadioGroup
                  defaultValue="forward"
                  className=" space-y-3 text-ns-title"
                >
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="forward"
                      id="r1"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="forward">Forward</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="midfielder"
                      id="r2"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r2">Midfielder</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="goalkeeper"
                      id="r2"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r2">Goalkeeper</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem
                      value="defense"
                      id="r2"
                      className=" w-5 h-5"
                    />
                    <Label htmlFor="r2">Defense</Label>
                  </div>
                </RadioGroup>
              </div>
            </Card>
          </section>

          <div className=" flex items-center justify-end">
            <NSButton className=" bg-ns-secondary text-white rounded-lg py-3">
              Save Changes
            </NSButton>
          </div>
        </form>
      </div>
    </>
  );
};

export default ProfileManagement;
