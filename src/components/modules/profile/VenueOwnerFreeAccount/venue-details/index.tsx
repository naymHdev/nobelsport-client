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
import { Badge } from "@/components/ui/badge";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Upload, MapPin, X, ImageIcon } from "lucide-react";
import { toast } from "sonner";
import { Alert, AlertDescription } from "@/components/ui/alert";
import NSButton from "@/components/ui/core/NSButton";

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

const venueTypes = [
  "Sports Complex",
  "Football Field",
  "Basketball Court",
  "Tennis Court",
  "Swimming Pool",
  "Gym & Fitness",
  "Multi-purpose Hall",
  "Outdoor Recreation",
];

export default function VenueDetails() {
  const [uploadedFiles, setUploadedFiles] = useState<File[]>([]);
  const [dragActive, setDragActive] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

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
      <Card className=" p-6 shadow-none border-none">
        <h1 className=" text-2xl font-extrabold text-ns-title">
          Add Multiple Venue
        </h1>
        <p className="text-muted-foreground mt-2">
          Your current plan is free,Upgrade to enable this feature
        </p>

        <div className="">
          <NSButton className=" font-semibold bg-ns-secondary rounded-lg py-3">
            Upgrade Now
          </NSButton>
        </div>
      </Card>

      <Card className=" p-6 shadow-none border-none">
        <h1 className=" text-2xl font-extrabold">
          Branding & Design Customization
        </h1>
        <p className="text-muted-foreground mt-2">
          Your current plan is free,Upgrade to enable this feature
        </p>

        <div className="">
          <NSButton className=" font-semibold bg-ns-secondary rounded-lg py-3">
            Upgrade Now
          </NSButton>
        </div>
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
                <Label htmlFor="venueName">Venue Name</Label>
                <Input
                  id="venueName"
                  {...register("venueName")}
                  className={errors.venueName ? "border-red-500" : ""}
                />
                {errors.venueName && (
                  <p className="text-sm text-red-500">
                    {errors.venueName.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="venueNameSecondary">
                  Venue Name (Secondary)
                </Label>
                <Input
                  id="venueNameSecondary"
                  {...register("venueNameSecondary")}
                />
              </div>
            </div>

            {/* <div className="space-y-2">
              <Label htmlFor="venueType">Venue Type</Label>
              <Controller
                name="venueType"
                control={control}
                render={({ field }) => (
                  <Select onValueChange={field.onChange} value={field.value}>
                    <SelectTrigger
                      className={errors.venueType ? "border-red-500" : ""}
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
            </div> */}

            <div className="space-y-2">
              <Label htmlFor="venueAddress">Venue Address</Label>
              <Input
                id="venueAddress"
                {...register("venueAddress")}
                className={errors.venueAddress ? "border-red-500" : ""}
              />
              {errors.venueAddress && (
                <p className="text-sm text-red-500">
                  {errors.venueAddress.message}
                </p>
              )}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <Label htmlFor="mapLocation">Map Location</Label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-3 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="mapLocation"
                    {...register("mapLocation")}
                    className={`pl-10 ${
                      errors.mapLocation ? "border-red-500" : ""
                    }`}
                  />
                </div>
                {errors.mapLocation && (
                  <p className="text-sm text-red-500">
                    {errors.mapLocation.message}
                  </p>
                )}
              </div>

              <div className="space-y-2">
                <Label htmlFor="city">City</Label>
                <Input
                  id="city"
                  {...register("city")}
                  className={errors.city ? "border-red-500" : ""}
                />
                {errors.city && (
                  <p className="text-sm text-red-500">{errors.city.message}</p>
                )}
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="venueDescription">Venue Description</Label>
              <Textarea
                id="venueDescription"
                {...register("venueDescription")}
                className={`min-h-[120px] ${
                  errors.venueDescription ? "border-red-500" : ""
                }`}
                placeholder="Describe your venue, amenities, and what makes it special..."
              />
              {errors.venueDescription && (
                <p className="text-sm text-red-500">
                  {errors.venueDescription.message}
                </p>
              )}
            </div>

            <div className="space-y-4">
              <Label>Upload Photos</Label>
              <div
                className={`border-2 border-dashed rounded-lg p-8 text-center transition-colors relative ${
                  dragActive
                    ? "border-blue-500 bg-blue-50"
                    : "border-muted-foreground/25 hover:border-muted-foreground/50"
                }`}
              >
                <Upload className="w-12 h-12 mx-auto mb-4 text-muted-foreground" />
                <div className="space-y-2">
                  <p className="text-lg font-medium">Choose File</p>
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

            <div className="flex items-center justify-between pt-6">
              <Button
                type="button"
                variant="outline"
                onClick={() => {
                  reset();
                  setUploadedFiles([]);
                }}
              >
                Reset Form
              </Button>
              <div className="flex gap-3">
                <Button type="button" variant="secondary">
                  Save as Draft
                </Button>
                <Button
                  type="submit"
                  disabled={!isValid || isSubmitting}
                  className="min-w-[140px]"
                >
                  {isSubmitting ? "Creating Venue..." : "Create Venue"}
                </Button>
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
