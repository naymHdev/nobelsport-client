"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NSButton from "@/components/ui/core/NSButton";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { IoEye, IoEyeOff } from "react-icons/io5";

const ProfileSetting = () => {
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <>
      <div>
        <Card className=" border-none shadow-none">
          <CardHeader>
            <CardTitle className="text-xl text-ns-title font-semibold">
              Change Password
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className=" space-y-6">
              <div className="relative">
                <Label className="text-ns-title font-semibold">
                  Current Password
                </Label>
                <Input
                  type={showCurrentPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="mt-2 w-full px-4 py-5 shadow-none rounded-lg focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-200"
                  placeholder="********"
                />
                <div
                  onClick={() => setShowCurrentPassword((prev) => !prev)}
                  className="absolute top-5 right-0 translate-y-1/2 mr-4 cursor-pointer"
                >
                  {showCurrentPassword ? (
                    <IoEyeOff className="size-6 text-[#AEAEAE]" />
                  ) : (
                    <IoEye className="size-6 text-[#AEAEAE]" />
                  )}
                </div>
              </div>
              <div className="relative">
                <Label className="text-ns-title font-semibold">
                  New Password
                </Label>
                <Input
                  type={showNewPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="mt-2 w-full px-4 py-5 shadow-none rounded-lg focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-200"
                  placeholder="********"
                />
                <div
                  onClick={() => setShowNewPassword((prev) => !prev)}
                  className="absolute top-5 right-0 translate-y-1/2 mr-4 cursor-pointer"
                >
                  {showNewPassword ? (
                    <IoEyeOff className="size-6 text-[#AEAEAE]" />
                  ) : (
                    <IoEye className="size-6 text-[#AEAEAE]" />
                  )}
                </div>
              </div>
              <div className="relative">
                <Label className="text-ns-title font-semibold">
                  Confirm Password
                </Label>
                <Input
                  type={showConfirmPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  className="mt-2 w-full px-4 py-5 shadow-none rounded-lg focus-visible:ring-0 focus-visible:outline-none focus-visible:border-neutral-200"
                  placeholder="********"
                />
                <div
                  onClick={() => setShowConfirmPassword((prev) => !prev)}
                  className="absolute top-5 right-0 translate-y-1/2 mr-4 cursor-pointer"
                >
                  {showConfirmPassword ? (
                    <IoEyeOff className="size-6 text-[#AEAEAE]" />
                  ) : (
                    <IoEye className="size-6 text-[#AEAEAE]" />
                  )}
                </div>
              </div>
              <div className="">
                <NSButton className=" bg-ns-secondary uppercase w-full rounded-md py-3">
                  save changes
                </NSButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default ProfileSetting;
