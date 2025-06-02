"use client";

import type React from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import authBg from "../../../assets/images/auth-bg.png";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import forgotIcon from "../../../assets/icons/Forgot Password.png";

export default function ForgotPassForm() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit: SubmitHandler<FieldValues> = (data) => console.log(data);

  return (
    <div className="min-h-screen relative flex items-center justify-center p-4">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src={authBg}
          alt="Runner on road background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Login Form */}
      <Card className="relative z-10 w-full max-w-md bg-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Email Field */}
            <div className="space-y-2">
              <div className=" flex flex-col items-center justify-center gap-5 mb-8">
                <Image
                  src={forgotIcon}
                  alt="Runner on road background"
                  width={100}
                  height={100}
                  className=" w-24 h-24 object-cover"
                  priority
                />
                <p className=" text-2xl font-openSans font-semibold text-center text-ns-foreground">
                  Forgot Password
                </p>
              </div>
              <Label htmlFor="email" className="text-sm font-medium">
                Email Address
              </Label>
              <Input
                id="email"
                type="email"
                placeholder="your@email.com"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-transparent focus:ring-transparent"
                required
                {...register("email")}
              />
              {errors.email && (
                <p className="text-red-500 text-xs mt-1">
                  Write the email address correctly
                </p>
              )}
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-md font-medium transition-colors"
            >
              Send Code
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
