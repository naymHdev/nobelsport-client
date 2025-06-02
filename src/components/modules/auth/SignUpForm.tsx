"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import authBg from "../../../assets/images/auth-bg.png";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import Link from "next/link";

export default function SignUpForm() {
  const [rememberMe, setRememberMe] = useState(false);

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
      <Card className="relative z-10 w-full max-w-lg bg-white shadow-2xl">
        <CardContent className="p-6 sm:p-8">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            {/* Name Field */}
            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Full Name
              </Label>
              <Input
                id="name"
                type="text"
                placeholder="Ex: John Doe"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none  focus:border-transparent focus:ring-transparent"
                required
                {...register("name")}
              />
              {errors.name && (
                <p className="text-red-500 text-xs mt-1">
                  Write the name address correctly
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
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

            {/* Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="password"
                className="text-sm font-medium text-gray-700"
              >
                Password
              </Label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                {...register("password")}
              />
            </div>

            {/* Confirm Password Field */}
            <div className="space-y-2">
              <Label
                htmlFor="confirmedPassword"
                className="text-sm font-medium text-gray-700"
              >
                Confirmed Password
              </Label>
              <Input
                id="confirmedPassword"
                type="confirmedPassword"
                placeholder="••••••••"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                required
                {...register("confirmedPassword")}
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Checkbox
                  id="remember"
                  checked={rememberMe}
                  onCheckedChange={(checked) =>
                    setRememberMe(checked as boolean)
                  }
                />
                <div className=" text-xs text-gray-600 cursor-pointer">
                  I agree to the
                  <span className=" text-ns-primary px-1">
                    Terms and Conditions
                  </span>
                  and{" "}
                  <span className=" text-ns-primary px-1">Privacy Policy</span>
                </div>
              </div>
            </div>

            {/* Sign In Button */}
            <Button
              type="submit"
              className="w-full bg-green-600 hover:bg-green-700 text-white py-6 rounded-md font-medium transition-colors"
            >
              Sign Up
            </Button>

            {/* Divider */}
            <div className="relative flex items-center justify-center gap-1">
              <p className="text-center text-sm text-ns-foreground">
                Already have an account?
              </p>
              <Link className=" text-sm text-ns-primary" href={"/sign-in"}>
                Log In
              </Link>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
