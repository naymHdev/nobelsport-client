"use client";

import { useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format } from "date-fns";
import { CalendarIcon, ArrowLeft } from "lucide-react";
import { useRouter } from "next/navigation";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
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
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import NSButton from "@/components/ui/core/NSButton";

// Mock data for teams and venues
const teams = [
  { id: "1", name: "Victory FC" },
  { id: "2", name: "Dragons FC" },
  { id: "3", name: "Phoenix United" },
];

const venues = [
  { id: "1", name: "Victory Park Stadium", address: "123 Main St" },
  { id: "2", name: "Dragons Arena", address: "456 Oak Ave" },
  { id: "3", name: "Phoenix Stadium", address: "789 Pine Rd" },
];

const matchTypes = [
  { id: "single", name: "Single Match" },
  { id: "tournament", name: "Tournament" },
  { id: "friendly", name: "Friendly Match" },
  { id: "league", name: "League Match" },
];

// Form validation schema
const formSchema = z.object({
  matchName: z
    .string()
    .min(3, { message: "Match name must be at least 3 characters" }),
  matchType: z.string({ required_error: "Please select a match type" }),
  teamId: z.string({ required_error: "Please select a team" }),
  venueId: z.string({ required_error: "Please select a venue" }),
  matchDate: z.string({ required_error: "Please select a date" }),
  matchDescription: z.string().optional(),
  requestMessage: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});

export default function CreateMatchForm() {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Initialize form with React Hook Form
  const form = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matchName: "",
      matchType: "single",
      teamId: "",
      venueId: "",
      matchDate: "",
      matchDescription: "",
      requestMessage: "Hi [Team Name], we would like to schedule a match...",
    },
  });

  // Form submission handler
  const onSubmit: SubmitHandler<FieldValues> = async (values) => {
    try {
      setIsSubmitting(true);

      // In a real app, you would send this data to your API
      console.log("Form submitted:", values);

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 1000));

      // Show success message or redirect
      alert("Match request sent successfully!");
      router.push("/matches");
    } catch (error) {
      console.error("Error submitting form:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="p-6 bg-white rounded-lg">
      <div className="flex items-center mb-6">
        <Button
          size="icon"
          onClick={() => router.back()}
          className="mr-2 rounded-full bg-[#F8F8F8CC] text-ns-title hover:bg-[#ddd9d9cc] hover:cursor-pointer"
        >
          <ArrowLeft className=" size-6" />
        </Button>
        <h1 className="text-2xl font-bold">Create Match</h1>
      </div>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="matchName"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Match Name</FormLabel>
                <FormControl>
                  <Input
                    placeholder="5v5 Football"
                    {...field}
                    className="focus:outline-none shadow-none focus-visible:ring-0 focus-visible:border-neutral-200 px-3 py-5"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid md:grid-cols-2 gap-4 md:gap-6">
            <FormField
              control={form.control}
              name="matchType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Match Type</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" w-full py-5 shadow-none">
                        <SelectValue placeholder="Select match type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {matchTypes.map((type) => (
                        <SelectItem key={type.id} value={type.id}>
                          {type.name}
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
              name="teamId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Select</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" w-full py-5 shadow-none">
                        <SelectValue placeholder="Select Team" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {teams.map((team) => (
                        <SelectItem key={team.id} value={team.id}>
                          {team.name}
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
              name="venueId"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Venue Selection</FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" w-full py-5 shadow-none">
                        <SelectValue placeholder="Select Venue" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {venues.map((venue) => (
                        <SelectItem key={venue.id} value={venue.id}>
                          {venue.name}
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
              name="matchDate"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel>Match Date</FormLabel>
                  <Popover>
                    <PopoverTrigger asChild>
                      <FormControl>
                        <Button
                          variant="outline"
                          className={`w-full justify-start text-left font-normal py-5 ${
                            !field.value && "text-muted-foreground"
                          }`}
                        >
                          {field.value ? (
                            format(new Date(field.value), "PPP")
                          ) : (
                            <span>Select</span>
                          )}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={
                          field.value ? new Date(field.value) : undefined
                        }
                        onSelect={(date) =>
                          field.onChange(date ? date.toISOString() : "")
                        }
                        disabled={(date) => date < new Date()}
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <FormField
            control={form.control}
            name="matchDescription"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Match Description</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Enter match details, special requirements, etc."
                    className="min-h-[100px] focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 px-3 py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="requestMessage"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Request Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Hi [Team Name], we would like to schedule a match..."
                    className="min-h-[100px] focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 px-3 py-5"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <NSButton
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 rounded-lg py-3"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Request"}
          </NSButton>
        </form>
      </Form>
    </div>
  );
}
