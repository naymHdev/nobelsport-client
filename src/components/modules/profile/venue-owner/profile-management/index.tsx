"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Mail, Phone, User, Eye, Users, Lock } from "lucide-react";
import { toast } from "sonner";

interface ProfileData {
  fullName: string;
  email: string;
  phoneNumber: string;
  location: string;
  ownerType: string;
  bio: string;
  visibility: "public" | "team" | "private";
}

export default function VenueOwnerProfileM() {
  const [profileData, setProfileData] = useState<ProfileData>({
    fullName: "Robert Fox",
    email: "robert.fox@example.com",
    phoneNumber: "123-456-7890",
    location: "San Francisco, CA",
    ownerType: "Free Owner",
    bio: "123-456-7890",
    visibility: "public",
  });

  const [isEditing, setIsEditing] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (field: keyof ProfileData, value: string) => {
    setProfileData((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSaveProfile = async () => {
    setIsLoading(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1000));

    setIsLoading(false);
    setIsEditing(false);

    toast.success("Your profile has been successfully updated.");
  };

  return (
    <div className="space-y-8 font-openSans">
      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className=" text-ns-title text-xl font-semibold">
            Personal Information
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="fullName" className="text-sm font-medium">
                Full Name
              </Label>
              {isEditing ? (
                <Input
                  id="fullName"
                  value={profileData.fullName}
                  onChange={(e) =>
                    handleInputChange("fullName", e.target.value)
                  }
                  className="transition-all duration-200 px-3"
                />
              ) : (
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                  <span className="font-medium">{profileData.fullName}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="text-sm font-medium">
                Location
              </Label>
              {isEditing ? (
                <Input
                  id="location"
                  value={profileData.location}
                  onChange={(e) =>
                    handleInputChange("location", e.target.value)
                  }
                  className="transition-all duration-200 px-3"
                />
              ) : (
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                  <MapPin className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.location}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="email" className="text-sm font-medium">
                Email
              </Label>
              {isEditing ? (
                <Input
                  id="email"
                  type="email"
                  value={profileData.email}
                  onChange={(e) => handleInputChange("email", e.target.value)}
                  className="transition-all duration-200 px-3"
                />
              ) : (
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                  <Mail className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.email}</span>
                </div>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="ownerType" className="text-sm font-medium">
                Owner Type
              </Label>
              <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                <Badge variant="outline">{profileData.ownerType}</Badge>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="phoneNumber" className="text-sm font-medium">
                Phone Number
              </Label>
              {isEditing ? (
                <Input
                  id="phoneNumber"
                  value={profileData.phoneNumber}
                  onChange={(e) =>
                    handleInputChange("phoneNumber", e.target.value)
                  }
                  className="transition-all duration-200 px-3"
                />
              ) : (
                <div className="flex items-center gap-2 p-3 bg-muted/50 rounded-md">
                  <Phone className="w-4 h-4 text-muted-foreground" />
                  <span>{profileData.phoneNumber}</span>
                </div>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio" className="text-sm font-medium">
              Bio
            </Label>
            {isEditing ? (
              <Textarea
                id="bio"
                value={profileData.bio}
                onChange={(e) => handleInputChange("bio", e.target.value)}
                placeholder="Tell us about yourself..."
                className="min-h-[100px] transition-all duration-200 px-3"
              />
            ) : (
              <div className="p-3 bg-muted/50 rounded-md min-h-[100px]">
                <span className="text-muted-foreground">
                  {profileData.bio || "No bio provided"}
                </span>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <Card className="border-none shadow-none">
        <CardHeader>
          <CardTitle className="text-ns-title text-xl font-semibold">
            Profile Visibility
          </CardTitle>
        </CardHeader>
        <CardContent>
          <RadioGroup
            value={profileData.visibility}
            onValueChange={(value) => handleInputChange("visibility", value)}
            className="space-y-4"
            disabled={!isEditing}
          >
            <div className="flex items-start space-x-3 p-4 rounded-lg border transition-colors hover:bg-muted/50">
              <RadioGroupItem value="public" id="public" className="mt-1" />
              <div className="space-y-1 flex-1">
                <Label
                  htmlFor="public"
                  className="flex items-center gap-2 font-medium cursor-pointer"
                >
                  <Eye className="w-4 h-4" />
                  Public
                </Label>
                <p className="text-sm text-muted-foreground">
                  Everyone can view my profile
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg border transition-colors hover:bg-muted/50">
              <RadioGroupItem value="team" id="team" className="mt-1" />
              <div className="space-y-1 flex-1">
                <Label
                  htmlFor="team"
                  className="flex items-center gap-2 font-medium cursor-pointer"
                >
                  <Users className="w-4 h-4" />
                  Team Members Only
                </Label>
                <p className="text-sm text-muted-foreground">
                  Only my team members can view my profile
                </p>
              </div>
            </div>

            <div className="flex items-start space-x-3 p-4 rounded-lg border transition-colors hover:bg-muted/50">
              <RadioGroupItem value="private" id="private" className="mt-1" />
              <div className="space-y-1 flex-1">
                <Label
                  htmlFor="private"
                  className="flex items-center gap-2 font-medium cursor-pointer"
                >
                  <Lock className="w-4 h-4" />
                  Private
                </Label>
                <p className="text-sm text-muted-foreground">
                  Only I can view my profile
                </p>
              </div>
            </div>
          </RadioGroup>
        </CardContent>
      </Card>

      <div className="flex items-center justify-between">
        <div className="flex gap-3">
          {isEditing ? (
            <>
              <Button
                className="min-w-[120px] p-6 bg-red-500 text-white"
                variant="outline"
                onClick={() => setIsEditing(false)}
                disabled={isLoading}
              >
                Cancel
              </Button>
              <Button
                onClick={handleSaveProfile}
                disabled={isLoading}
                className="min-w-[120px] p-6"
              >
                {isLoading ? "Saving..." : "Save Changes"}
              </Button>
            </>
          ) : (
            <Button className=" p-6" onClick={() => setIsEditing(true)}>
              Edit Profile
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
