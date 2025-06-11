"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Clock } from "lucide-react";

import { Button } from "@/components/ui/button";
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
import { Card } from "@/components/ui/card";
import NSBackButton from "@/components/ui/core/NSBackButton";
import NSInput from "@/components/ui/core/NSInput";
import NSButton from "@/components/ui/core/NSButton";

const formSchema = z.object({
  templateName: z.string().min(1, {
    message: "Template name is required.",
  }),
  gameFormat: z.string().min(1, {
    message: "Please select a game format.",
  }),
  venueSelection: z.string().min(1, {
    message: "Please select a venue.",
  }),
  time: z.string().min(1, {
    message: "Please select a time.",
  }),
  gameRules: z.string().optional(),
  requestMessage: z.string().min(1, {
    message: "Request message is required.",
  }),
});

export default function CreateTemplateForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      templateName: "",
      gameFormat: "",
      venueSelection: "",
      time: "",
      gameRules: "",
      requestMessage: "Hi [Team Name], we would like to schedule a match...",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    // Handle form submission here
  }

  return (
    <Card className="border-none shadow-none p-6">
      <div className="">
        <NSBackButton label="Create Template" />

        {/* Form */}
        <div className="mt-6">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
              {/* Template Name */}
              <FormField
                control={form.control}
                name="templateName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Template Name
                    </FormLabel>
                    <FormControl>
                      <NSInput
                        className=" py-6"
                        placeholder="Thursday Night Regulars"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Game Format */}
              <FormField
                control={form.control}
                name="gameFormat"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Game Format
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                          <SelectValue placeholder="Select game format" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="5-a-side">5-a-side</SelectItem>
                        <SelectItem value="7-a-side">7-a-side</SelectItem>
                        <SelectItem value="11-a-side">11-a-side</SelectItem>
                        <SelectItem value="futsal">Futsal</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Venue Selection */}
              <FormField
                control={form.control}
                name="venueSelection"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Venue Selection
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger className="w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200">
                          <SelectValue placeholder="Select Venue" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="central-park">
                          Central Park Sports Complex
                        </SelectItem>
                        <SelectItem value="riverside-fc">
                          Riverside FC Ground
                        </SelectItem>
                        <SelectItem value="city-stadium">
                          City Stadium
                        </SelectItem>
                        <SelectItem value="community-center">
                          Community Center Field
                        </SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Time */}
              <FormField
                control={form.control}
                name="time"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Time
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
                        <SelectItem value="18:00">6:00 PM</SelectItem>
                        <SelectItem value="18:30">6:30 PM</SelectItem>
                        <SelectItem value="19:00">7:00 PM</SelectItem>
                        <SelectItem value="19:30">7:30 PM</SelectItem>
                        <SelectItem value="20:00">8:00 PM</SelectItem>
                        <SelectItem value="20:30">8:30 PM</SelectItem>
                        <SelectItem value="21:00">9:00 PM</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Game Rules */}
              <FormField
                control={form.control}
                name="gameRules"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Game Rules
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        placeholder="Enter match details, special requirements, etc."
                        className="min-h-[100px] resize-none w-full px-3 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Request Message */}
              <FormField
                control={form.control}
                name="requestMessage"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-[16px] font-medium text-ns-neutral-dark">
                      Request Message
                    </FormLabel>
                    <FormControl>
                      <Textarea
                        className="min-h-[80px] resize-none w-full px-3 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit Button */}
              <NSButton
                type="submit"
                className="w-full bg-blue-600 py-3 text-white hover:bg-blue-700 rounded-lg"
              >
                Save Template
              </NSButton>
            </form>
          </Form>
        </div>
      </div>
    </Card>
  );
}
