"use client";

import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { useForm } from "react-hook-form";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Form, FormControl, FormField, FormItem } from "@/components/ui/form";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import NSButton from "@/components/ui/core/NSButton";
const VenueFilter = () => {
  const form = useForm();

  return (
    <>
      <div>
        {/*  --------------------------- Filtering Section --------------------------- */}
        <section className="bg-white p-8 rounded-[16px] shadow-[0px 4px 60px 0px rgba(4, 6, 15, 0.03)]">
          <h2 className=" text-2xl font-bold leading-normal font-openSans text-ns-title">
            Search and Filter Venues
          </h2>
          <div className="mt-8 relative w-full">
            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
              <Search className="w-5 h-5" />
            </span>
            <Input
              type="search"
              placeholder="Search venues, locations, or sports..."
              className="w-full pl-10 py-6"
            />
          </div>
          <div className=" mt-6 flex items-center gap-4">
            {/* --------------- Match Fee filter -------------- */}
            <div className=" w-full">
              <Select>
                <SelectTrigger className=" w-full px-3 py-[21px] rounded-[8px]">
                  <SelectValue placeholder="Match fee" />
                </SelectTrigger>
                <SelectContent className=" w-full">
                  <SelectGroup className=" w-full">
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* -------------- Sports Type filter -------------- */}
            <div className=" w-full">
              <Select>
                <SelectTrigger className=" w-full px-3 py-[21px] rounded-[8px]">
                  <SelectValue placeholder="Sports Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>North America</SelectLabel>
                    <SelectItem value="est">
                      Eastern Standard Time (EST)
                    </SelectItem>
                    <SelectItem value="cst">
                      Central Standard Time (CST)
                    </SelectItem>
                    <SelectItem value="mst">
                      Mountain Standard Time (MST)
                    </SelectItem>
                    <SelectItem value="pst">
                      Pacific Standard Time (PST)
                    </SelectItem>
                    <SelectItem value="akst">
                      Alaska Standard Time (AKST)
                    </SelectItem>
                    <SelectItem value="hst">
                      Hawaii Standard Time (HST)
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>

            {/* -------------- Date base filter -------------- */}
            <div className=" w-full ">
              <Form {...form}>
                <form className="space-y-8">
                  <FormField
                    control={form.control}
                    name="dob"
                    render={({ field }) => (
                      <FormItem className="flex flex-col">
                        <Popover>
                          <PopoverTrigger asChild>
                            <FormControl>
                              <Button
                                variant={"outline"}
                                className={cn(
                                  " w-full px-3 py-[21px] rounded-[8px] pl-3 text-left font-normal",
                                  !field.value && "text-muted-foreground"
                                )}
                              >
                                {field.value ? (
                                  format(field.value, "PPP")
                                ) : (
                                  <span>mm/dd/yy</span>
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
                              disabled={(date) =>
                                date > new Date() ||
                                date < new Date("1900-01-01")
                              }
                              initialFocus
                            />
                          </PopoverContent>
                        </Popover>
                      </FormItem>
                    )}
                  />
                </form>
              </Form>
            </div>

            {/* -------------- Search button -------------- */}
            <div className=" w-full">
              <NSButton className=" text-white font-normal font-openSans text-center bg-ns-secondary px-3 py-[11px] w-full rounded-xl">
                Apply Filter
              </NSButton>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default VenueFilter;
