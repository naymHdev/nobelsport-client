"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { format } from "date-fns";
import { CalendarIcon, Plus, Trash2 } from "lucide-react";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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
import NSBackButton from "@/components/ui/core/NSBackButton";
import { Card, CardContent } from "@/components/ui/card";
import NSInput from "@/components/ui/core/NSInput";

// Define the schema for a single match
const matchSchema = z.object({
  teamName: z.string().min(1, "Team name is required"),
  matchDate: z.date({
    required_error: "Match date is required",
  }),
  venue: z.string().min(1, "Venue is required"),
  description: z.string().optional(),
  requestMessage: z.string().optional(),
});

// Define the schema for the entire form
const formSchema = z.object({
  matchName: z.string().min(1, "Match name is required"),
  matchType: z.string().min(1, "Match type is required"),
  matches: z.array(matchSchema).min(1, "At least one match is required"),
});

type MatchFormValues = z.infer<typeof formSchema>;

export default function MatchManagementCreateMatchForm() {
  // Initialize form with default values
  const form = useForm<MatchFormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      matchName: "",
      matchType: "Group Match",
      matches: [
        {
          teamName: "",
          matchDate: undefined as unknown as Date,
          venue: "",
          description: "",
          requestMessage:
            "Hi [Team Name], we would like to schedule a match...",
        },
      ],
    },
  });

  const { fields, append, remove } = form.control._formValues.matches;

  // Handle form submission
  function onSubmit(data: MatchFormValues) {
    console.log("Form submitted:", data);
    // Here you would typically send the data to your API
  }

  return (
    <Card className="p-6 border-none shadow-none font-openSans">
      <NSBackButton label="Create Match" />

      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            <FormField
              control={form.control}
              name="matchName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-[16px] text-ns-title font-normal">
                    Match Name
                  </FormLabel>
                  <FormControl>
                    <NSInput placeholder="Summer League Match" {...field} />
                  </FormControl>
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="matchType"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className=" text-[16px] text-ns-title font-normal">
                    Match Type
                  </FormLabel>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger className=" py-5 w-full">
                        <SelectValue placeholder="Select match type" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="Group Match">Group Match</SelectItem>
                      <SelectItem value="Knockout">Knockout</SelectItem>
                      <SelectItem value="Friendly">Friendly</SelectItem>
                      <SelectItem value="Tournament">Tournament</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />

            {/* Matches Section */}
            {form.watch("matches")?.map((match, index) => (
              <div key={index} className="space-y-4 pt-4 border-t">
                <div className="flex justify-between items-center">
                  <h2 className=" font-bold text-ns-title">
                    Match {index + 1}
                  </h2>
                </div>

                <FormField
                  control={form.control}
                  name={`matches.${index}.teamName`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-[16px] text-ns-title font-normal">
                        Team Name
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" py-5 w-full">
                            <SelectValue placeholder="Select Team" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="team1">Team Alpha</SelectItem>
                          <SelectItem value="team2">Team Beta</SelectItem>
                          <SelectItem value="team3">Team Gamma</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`matches.${index}.matchDate`}
                  render={({ field }) => (
                    <FormItem className="flex flex-col">
                      <FormLabel className=" text-[16px] text-ns-title font-normal">
                        Match Date
                      </FormLabel>
                      <Popover>
                        <PopoverTrigger asChild>
                          <FormControl>
                            <Button
                              variant={"outline"}
                              className={cn(
                                "w-full pl-3 text-left font-normal py-5",
                                !field.value && "text-muted-foreground"
                              )}
                            >
                              {field.value ? (
                                format(field.value, "PPP")
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
                            selected={field.value}
                            onSelect={field.onChange}
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`matches.${index}.venue`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-[16px] text-ns-title font-normal">
                        Venue Selection
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                      >
                        <FormControl>
                          <SelectTrigger className=" py-5 w-full">
                            <SelectValue placeholder="Select Venue" />
                          </SelectTrigger>
                        </FormControl>
                        <SelectContent>
                          <SelectItem value="venue1">Main Stadium</SelectItem>
                          <SelectItem value="venue2">Practice Field</SelectItem>
                          <SelectItem value="venue3">
                            Community Center
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`matches.${index}.description`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-[16px] text-ns-title font-normal">
                        Match Description
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Enter match details, special requirements, etc."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name={`matches.${index}.requestMessage`}
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className=" text-[16px] text-ns-title font-normal">
                        Request Message
                      </FormLabel>
                      <FormControl>
                        <Textarea
                          placeholder="Hi [Team Name], we would like to schedule a match..."
                          className="resize-none"
                          {...field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                {index > 0 && (
                  <Button
                    type="button"
                    variant="destructive"
                    className="w-full"
                    onClick={() => {
                      const matches = form.getValues("matches");
                      form.setValue(
                        "matches",
                        matches.filter((_, i) => i !== index)
                      );
                    }}
                  >
                    <Trash2 className="mr-2 h-4 w-4" /> Remove
                  </Button>
                )}
              </div>
            ))}

            <div className="flex flex-col gap-2">
              <Button
                type="button"
                variant="outline"
                className="w-full py-5"
                onClick={() => {
                  const matches = form.getValues("matches") || [];
                  form.setValue("matches", [
                    ...matches,
                    {
                      teamName: "",
                      matchDate: undefined as unknown as Date,
                      venue: "",
                      description: "",
                      requestMessage:
                        "Hi [Team Name], we would like to schedule a match...",
                    },
                  ]);
                }}
              >
                <Plus className="mr-2 h-4 w-4" /> Add New Match
              </Button>
              <Button type="submit" className="w-full py-6 rounded-lg">
                Send Request
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
