" use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import NSButton from "@/components/ui/core/NSButton";

const profileSchema = z.object({
  fullName: z.string().min(2, "Full name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  phoneNumber: z.string().min(10, "Please enter a valid phone number"),
  location: z.string().min(5, "Please enter a valid location"),
  bio: z.string().optional(),
});

type ProfileFormData = z.infer<typeof profileSchema>;

const EditProfileModal = () => {
  const form = useForm<ProfileFormData>({
    resolver: zodResolver(profileSchema),
    defaultValues: {
      fullName: "joylawson",
      email: "joylawson@gmail.com",
      phoneNumber: "(201) 830-8210",
      location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
      bio: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    },
  });

  return (
    <>
      <div>
        <Dialog>
          <DialogTrigger>
            <NSButton className=" bg-ns-secondary text-white rounded-lg py-3">
              Edit Profile
            </NSButton>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[500px] p-0">
            {/* Form Content */}
            <div className="p-6">
              <div className=" border-b pb-2">
                <h2 className=" text-2xl font-semibold text-ns-title">
                  Edit Profile
                </h2>
              </div>
              <Form {...form}>
                <form
                  //   onSubmit={form.handleSubmit(onSubmit)}
                  className="space-y-6 mt-8"
                >
                  <FormField
                    control={form.control}
                    name="fullName"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-ns-title">
                          Full Name
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="px-4 shadow-none rounded-lg py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                            placeholder="Enter your full name"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Email */}
                  <FormField
                    control={form.control}
                    name="email"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-ns-title">
                          Email
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email"
                            className="px-4 shadow-none rounded-lg py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                            placeholder="Enter your email"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Phone Number */}
                  <FormField
                    control={form.control}
                    name="phoneNumber"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-ns-title">
                          Phone number
                        </FormLabel>
                        <FormControl>
                          <div className="relative">
                            <div className="absolute left-3 top-1/2 transform -translate-y-1/2 flex items-center">
                              <span className="text-lg mr-2">🇺🇸</span>
                            </div>
                            <Input
                              {...field}
                              className="px-4 shadow-none rounded-lg py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 pl-8"
                              placeholder="Enter your phone number"
                            />
                          </div>
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Location */}
                  <FormField
                    control={form.control}
                    name="location"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-ns-title">
                          Location
                        </FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            className="px-4 shadow-none rounded-lg py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                            placeholder="Enter your location"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Bio */}
                  <FormField
                    control={form.control}
                    name="bio"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-sm font-bold text-ns-title">
                          Bio
                        </FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            className="focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 focus:bg-white min-h-[80px] resize-none"
                            placeholder="Tell us about yourself"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  {/* Submit Button */}
                  <button
                    className="w-full bg-black hover:bg-gray-800 hover:cursor-pointer text-white font-medium py-3 text-sm rounded-md"
                    disabled={form.formState.isSubmitting}
                  >
                    {form.formState.isSubmitting ? "SAVING..." : "SAVE CHANGES"}
                  </button>
                </form>
              </Form>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </>
  );
};

export default EditProfileModal;
