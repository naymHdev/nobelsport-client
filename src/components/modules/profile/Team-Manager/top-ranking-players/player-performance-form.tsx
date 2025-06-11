"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import NSBackButton from "@/components/ui/core/NSBackButton";
import NSButton from "@/components/ui/core/NSButton";
import { FaStar } from "react-icons/fa";

const formSchema = z.object({
  passCompletion: z.string().min(1, {
    message: "Please select pass completion rate.",
  }),
  distanceCovered: z.string().min(1, {
    message: "Please select distance covered.",
  }),
  goalsScored: z.string().min(1, {
    message: "Please select goals scored.",
  }),
  assists: z.string().min(1, {
    message: "Please select assists.",
  }),
  tacklesMade: z.string().min(1, {
    message: "Please select tackles made.",
  }),
  yellowCards: z.string().min(1, {
    message: "Please select yellow cards.",
  }),
  redCards: z.string().min(1, {
    message: "Please select red cards.",
  }),
  offensiveRating: z.number().min(1).max(10),
  defensiveRating: z.number().min(1).max(10),
  improvementNotes: z.string().min(10, {
    message: "Improvement notes must be at least 10 characters.",
  }),
});

const performanceOptions = [
  { value: "excellent", label: "Excellent" },
  { value: "good", label: "Good" },
  { value: "average", label: "Average" },
  { value: "below-average", label: "Below Average" },
  { value: "poor", label: "Poor" },
];

const numberOptions = Array.from({ length: 11 }, (_, i) => ({
  value: i.toString(),
  label: i.toString(),
}));

interface StarRatingProps {
  rating: number;
  onRatingChange: (rating: number) => void;
  label: string;
}

function StarRating({ rating, onRatingChange, label }: StarRatingProps) {
  const [hoverRating, setHoverRating] = useState(0);

  return (
    <div className="flex flex-col md:flex-row items-center md:gap-20">
      <label className="font-medium text-ns-neutral-dark">
        {label}
      </label>
      <div className="flex gap-1">
        {[1, 2, 3, 4, 5].map((star) => (
          <button
            key={star}
            type="button"
            className="p-0 hover:scale-110 transition-transform"
            onMouseEnter={() => setHoverRating(star)}
            onMouseLeave={() => setHoverRating(0)}
            onClick={() => onRatingChange(star)}
          >
            <FaStar
              className={`md:w-8 md:h-8 ${
                star <= (hoverRating || rating)
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-gray-300"
              }`}
            />
          </button>
        ))}
      </div>
    </div>
  );
}

export default function PlayerPerformanceForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      passCompletion: "",
      distanceCovered: "",
      goalsScored: "",
      assists: "",
      tacklesMade: "",
      yellowCards: "",
      redCards: "",
      offensiveRating: 3,
      defensiveRating: 3,
      improvementNotes: "Player showed improvement in tackling skills",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Form submitted:", values);
    // Handle form submission here
  }

  return (
    <div className="">
      <Card className=" border-none shadow-none font-openSans">
        <CardHeader className="pb-4">
          <NSBackButton label="Set Player Performance" />
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Performance Metrics */}
              <div className="space-y-4">
                <FormField
                  control={form.control}
                  name="passCompletion"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-ns-neutral-dark text-[16px]">
                        Pass Completion
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {performanceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="distanceCovered"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Distance Covered
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {performanceOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="goalsScored"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Goals Scored
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {numberOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="assists"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Assists
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {numberOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="tacklesMade"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Tackles Made
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {numberOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="yellowCards"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Yellow Cards
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {numberOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="redCards"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-ns-neutral-dark text-[16px]">
                        Red Cards
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                            <SelectValue placeholder="Select" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          {numberOptions.map((option) => (
                            <SelectItem key={option.value} value={option.value}>
                              {option.label}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Skill Rating Section */}
              <div className="space-y-4 p-6 border rounded-xl shadow-sm">
                <h3 className="text-lg text-ns-title font-bold">
                  Skill Rating
                </h3>

                <FormField
                  control={form.control}
                  name="offensiveRating"
                  render={({ field }) => (
                    <FormItem>
                      <StarRating
                        rating={field.value}
                        onRatingChange={field.onChange}
                        label="Offensive Rating"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="defensiveRating"
                  render={({ field }) => (
                    <FormItem>
                      <StarRating
                        rating={field.value}
                        onRatingChange={field.onChange}
                        label="Defensive Rating"
                      />
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              {/* Improvement Notes */}
              <FormField
                control={form.control}
                name="improvementNotes"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-ns-neutral-dark text-[16px]">
                      Improvement Notes
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter improvement notes..."
                        className="min-h-[100px] resize-none focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <NSButton
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg"
              >
                Set
              </NSButton>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
