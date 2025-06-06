"use client";

import type React from "react";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  MapPin,
  X,
  ImageIcon,
  ArrowUpDown,
  ChevronRight,
  ChevronLeft,
  Trash2,
  Plus,
  Save,
} from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import NSButton from "@/components/ui/core/NSButton";
import { IoMdCloudUpload } from "react-icons/io";
import { TbCloudDownload } from "react-icons/tb";
import { amenities, calendarDays, venueTypes, weekDays } from "./constant";
import { Checkbox } from "@/components/ui/checkbox";
import SetAvailabilityModal from "./SetAvailabilityModal";
import LogoUpload from "../buisness-account/add-logo";
import BannerColorSettings from "../buisness-account/banner-color-settings";
import VenueDescription from "../enterprise-account/venue-description";

// Form validation schema
const venueSchema = z.object({
  venueName: z.string().min(2, "Venue name must be at least 2 characters"),
  venueNameSecondary: z.string().optional(),
  venueType: z.string().min(1, "Please select a venue type"),
  venueAddress: z.string().min(5, "Address must be at least 5 characters"),
  mapLocation: z.string().min(5, "Map location is required"),
  city: z.string().min(2, "City is required"),
  venueDescription: z
    .string()
    .min(20, "Description must be at least 20 characters"),
  photos: z.array(z.instanceof(File)).optional(),
});
type VenueFormData = z.infer<typeof venueSchema>;

export default function VenueDetails() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState(4);

  const {
    register,
    handleSubmit,
    control,
    formState: { errors, isValid },
    watch,
    setValue,
    reset,
  } = useForm<VenueFormData>({
    resolver: zodResolver(venueSchema),
    mode: "onChange",
    defaultValues: {
      venueName: "The Football Factory",
      venueNameSecondary: "The Football Factory",
      venueAddress: "New York, USA",
      mapLocation: "New York, USA",
      city: "New York, USA",
      venueDescription:
        "The Premier Football Field offers a spacious outdoor area, perfect for football matches, with ample seating, parking, and premium amenities such as free Wi-Fi and on-site equipment rental.",
    },
  });

  const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const files = Array.from(e.target.files);
      const imageFiles = files.filter((file) => file.type.startsWith("image/"));
      setUploadedFiles((prev) => [...prev, ...imageFiles]);
      setValue("photos", [...uploadedFiles, ...imageFiles]);
    }
  };

  const removeFile = (index: number) => {
    const newFiles = uploadedFiles.filter((_, i) => i !== index);
    setUploadedFiles(newFiles);
    setValue("photos", newFiles);
  };

  const onSubmit = async (data: VenueFormData) => {
    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 2000));

    console.log("Form Data:", data);
    console.log("Uploaded Files:", uploadedFiles);

    toast.success(`${data.venueName} has been added to your venues.`);

    setIsSubmitting(false);
  };

  return (
    <div className="space-y-8 font-openSans">
      {/* ----------------- Venue Overview ---------------- */}
      {/* <VenueOverview /> */}
      <Card className=" p-6 shadow-none border-none">
        <h1 className=" text-2xl font-extrabold text-ns-title">
          Add Multiple Venue
        </h1>
        {/* <p className="text-muted-foreground mt-2">
          Your current plan is free,Upgrade to enable this feature
        </p>

        <div className="">
          <NSButton className=" font-semibold bg-ns-secondary rounded-lg py-3 px-3">
            Upgrade Now
          </NSButton>
        </div> */}
        <LogoUpload />
      </Card>

      <Card className=" p-6 shadow-none border-none">
        <h1 className=" text-2xl font-extrabold">
          Branding & Design Customization
        </h1>
        {/* <p className="text-muted-foreground mt-2">
          Your current plan is free,Upgrade to enable this feature
        </p>

        <div className="">
          <NSButton className=" font-semibold bg-ns-secondary rounded-lg p-3">
            Upgrade Now
          </NSButton>
        </div> */}
        <BannerColorSettings />
      </Card>

      <Card className=" border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-2xl font-extrabold text-ns-title">
            Venue Overview
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  className=" text-ns-title font-semibold text-[16px]"
                  htmlFor="venueName"
                >
                  Venue Name
                </Label>
                <Input
                  id="venueName"
                  {...register("venueName")}
                  className={
                    " px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                  }
                />
                {errors.venueName && (
                  <p className="text-sm text-red-500">
                    {errors.venueName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  className=" text-ns-title font-semibold text-[16px]"
                  htmlFor="venueNameSecondary"
                >
                  Venue Name (Secondary)
                </Label>
                <Input
                  id="venueNameSecondary"
                  {...register("venueNameSecondary")}
                  className="px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label
                className=" text-ns-title font-semibold text-[16px]"
                htmlFor="venueType"
              >
                Venue Type
              </Label>
              <Controller
                name="venueType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className={
                        "px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                      }
                    >
                      <SelectValue placeholder="Select venue type" />
                    </SelectTrigger>
                    <SelectContent>
                      {venueTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.venueType && (
                <p className="text-sm text-red-500">
                  {errors.venueType.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label
                className=" text-ns-title font-semibold text-[16px]"
                htmlFor="venueAddress"
              >
                Venue Address
              </Label>
              <Input
                id="venueAddress"
                {...register("venueAddress")}
                className={
                  "px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                }
              />
              {errors.venueAddress && (
                <p className="text-sm text-red-500">
                  {errors.venueAddress.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label
                  className=" text-ns-title font-semibold text-[16px]"
                  htmlFor="mapLocation"
                >
                  Map Location
                </Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="mapLocation"
                    {...register("mapLocation")}
                    className={
                      "pl-8 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                    }
                  />
                </div>
                {errors.mapLocation && (
                  <p className="text-sm text-red-500">
                    {errors.mapLocation.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label
                  className=" text-ns-title font-semibold text-[16px]"
                  htmlFor="city"
                >
                  City
                </Label>
                <Input
                  id="city"
                  {...register("city")}
                  className={
                    "px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                  }
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label
                className=" text-ns-title font-semibold text-[16px]"
                htmlFor="venueDescription"
              >
                Venue Description
              </Label>
              {/* <Textarea
                id="venueDescription"
                {...register("venueDescription")}
                className={
                  " min-h-[120px] px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                }
                placeholder="Describe your venue, amenities, and what makes it special..."
              />
              {errors.venueDescription && (
                <p className="text-sm text-red-500">
                  {errors.venueDescription.message}
                </p>
              )} */}
              <VenueDescription />
            </div>

            {/* ------------ Upload Photos ------------ */}

            <div className="space-y-4">
              <div className=" flex items-center gap-1">
                <TbCloudDownload />
                <Label className=" text-ns-title font-semibold text-[16px]">
                  Upload Photos
                </Label>
              </div>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors relative ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-muted-foreground/25 hover:border-muted-foreground/50"
                }`}
              >
                <IoMdCloudUpload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <div className="space-y-2">
                  <div>
                    <NSButton className="text-lg font-medium rounded-lg bg-ns-secondary py-3 px-4">
                      Choose File
                    </NSButton>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    PNG, JPG up to 2MB
                  </p>
                </div>
                <input
                  type="file"
                  multiple
                  accept="image/*"
                  onChange={handleFileInput}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                />
              </div>

              {uploadedFiles.length > 0 && (
                <div className="space-y-3">
                  <Label>Uploaded Photos ({uploadedFiles.length})</Label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {uploadedFiles.map((file, index) => (
                      <div key={index} className="relative group">
                        <div className="aspect-square bg-muted rounded-lg flex items-center justify-center overflow-hidden">
                          <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <Button
                          type="button"
                          variant="destructive"
                          size="sm"
                          className="absolute -top-2 -right-2 w-6 h-6 rounded-full p-0 opacity-0 group-hover:opacity-100 transition-opacity"
                          onClick={() => removeFile(index)}
                        >
                          <X className="w-3 h-3" />
                        </Button>
                        <p className="text-xs text-center mt-1 truncate">
                          {file.name}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {!isValid && Object.keys(errors).length > 0 && (
              <Alert variant="destructive">
                <AlertDescription>
                  Please fix the errors above before submitting the form.
                </AlertDescription>
              </Alert>
            )}

            <div className="w-full mx-auto border-none shadow-none bg-transparent p-0">
              <div className="pt-6">
                <div className="space-y-8">
                  {/* ----------------- Pricing  --------------- */}
                  <div>
                    <h2 className="text-2xl font-extrabold text-ns-title mb-4">
                      Pricing
                    </h2>

                    <div className="space-y-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="hourly-rate"
                          className=" text-ns-title font-semibold text-[16px]"
                        >
                          Hourly Rate
                        </label>
                        <div className="relative mt-2">
                          <Input
                            id="hourly-rate"
                            type="text"
                            defaultValue="$50"
                            className="pr-10 px-3 py-5 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                          />
                          <button className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600">
                            <ArrowUpDown className="h-4 w-4" />
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="weekly-hourly-rate"
                          className=" text-ns-title font-semibold text-[16px]"
                        >
                          Weekly Hourly Rate
                        </label>
                        <p className="text-sm text-muted-foreground">
                          Your current plan is free. Upgrade to enable this
                          feature
                        </p>
                        <NSButton className="mt-2 rounded-lg bg-ns-secondary py-3 px-3">
                          Upgrade Now
                        </NSButton>
                      </div>
                    </div>
                  </div>

                  {/* ------------------------- Contact Information Section------------------ */}
                  <div>
                    <h2 className="text-2xl font-extrabold text-ns-title mb-4">
                      Contact Information
                    </h2>

                    <div className="space-y-4">
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className=" text-ns-title font-semibold text-[16px]"
                        >
                          Phone Number
                        </label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="(123) 456-7890"
                          className="px-3 py-5 mt-2 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="email"
                          className=" text-ns-title font-semibold text-[16px]"
                        >
                          Email
                        </label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="email@example.com"
                          className="px-3 py-5 mt-2 rounded-md focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                        />
                      </div>

                      <div className="space-y-2">
                        <label
                          htmlFor="hours"
                          className=" text-ns-title font-semibold text-[16px]"
                        >
                          Operating Hours
                        </label>
                        <Input
                          id="hours"
                          type="text"
                          defaultValue="9:00 AM - 8:00 PM"
                          className="px-3 py-5 rounded-md focus:outline-none mt-2 ring-0 focus-visible:ring-0 focus-visible:border-gray-200"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ------------------------- Availability Information ------------------ */}
            <div>
              <div className="pt-6">
                <h2 className="text-2xl font-extrabold text-ns-title mb-4">
                  Availability Information
                </h2>

                {/* Month Navigation */}
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center space-x-2">
                    <span className=" font-bold text-ns-title text-xl">
                      Month 2025
                    </span>
                    <ChevronRight className="h-4 w-4" />
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronLeft className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="icon" className="h-8 w-8">
                      <ChevronRight className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <p className="text-sm text-muted-foreground mb-4">
                  Click on any day to edit
                </p>

                {/* --------------------- Calendar Component ---------------- */}
                <div className="overflow-hidden">
                  <div className="grid grid-cols-7 text-center">
                    {weekDays.map((day, index) => (
                      <div key={index} className="py-2 text-xs font-medium">
                        {day}
                      </div>
                    ))}
                  </div>

                  {/* Calendar Body */}
                  <div>
                    {calendarDays.map((week, weekIndex) => (
                      <div
                        key={weekIndex}
                        className="grid grid-cols-7 text-center"
                      >
                        {week.map((day, dayIndex) => {
                          const isCurrentMonth =
                            (weekIndex > 0 && weekIndex < 5) ||
                            (weekIndex === 0 && day >= 20) ||
                            (weekIndex === 5 && day <= 10);
                          const isSelected =
                            day === selectedDate && weekIndex === 1;

                          return (
                            <button
                              key={dayIndex}
                              className={`py-3 hover:bg-muted/50 ${
                                isCurrentMonth
                                  ? "text-foreground"
                                  : "text-muted-foreground"
                              } ${isSelected ? "bg-amber-100" : ""}`}
                              onClick={() => setSelectedDate(day)}
                            >
                              {day}
                            </button>
                          );
                        })}
                      </div>
                    ))}
                  </div>
                </div>

                {/*  ------------ Available Time ------------- */}
                <div className="mt-6 space-y-4">
                  <h3 className="text-sm font-semibold text-ns-title">
                    Available time
                  </h3>

                  <div className="flex items-center justify-between">
                    <span className="text-sm">March 25, 9:00 AM - 8:00 PM</span>
                    <NSButton className="flex items-center space-x-1 bg-red-500 text-white rounded-lg px-4">
                      <Trash2 className="h-4 w-4 mr-1" />
                      Delete
                    </NSButton>
                  </div>

                  <SetAvailabilityModal />
                </div>
              </div>
            </div>

            {/* Second Availability Information Section */}
            <div>
              <div className="pt-6">
                <h2 className="text-2xl font-extrabold text-ns-title mb-4">
                  Availability Information
                </h2>

                <div className="space-y-4">
                  {amenities.map((amenity) => (
                    <div
                      key={amenity.id}
                      className="flex items-center space-x-2 border p-3 rounded-lg"
                    >
                      <Checkbox id={amenity.id} />
                      <label
                        htmlFor={amenity.id}
                        className="text-sm font-medium"
                      >
                        {amenity.label}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="flex items-center justify-between pt-6">
              <NSButton className=" w-full bg-ns-secondary rounded-lg py-3 flex items-center justify-center gap-1">
                <Save />
                Save Changes
              </NSButton>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
