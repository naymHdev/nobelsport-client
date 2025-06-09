"use client";

import { Search, Filter } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { FilterOptions } from "./match";

interface MatchFiltersProps {
  filters: FilterOptions;
  onFiltersChange: (filters: FilterOptions) => void;
  onApplyFilters: () => void;
}

export function MatchFilters({
  filters,
  onFiltersChange,
  onApplyFilters,
}: MatchFiltersProps) {
  const updateFilter = (key: keyof FilterOptions, value: string) => {
    onFiltersChange({ ...filters, [key]: value });
  };

  return (
    <div className="flex flex-wrap items-center gap-4 bg-white rounded-lg">
      <div className="relative flex-1 min-w-[200px]">
        <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
        <Input
          placeholder="Search"
          value={filters.search}
          onChange={(e) => updateFilter("search", e.target.value)}
          className="pl-10 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 shadow-none"
        />
      </div>

      <Select
        value={filters.status}
        onValueChange={(value) => updateFilter("status", value)}
      >
        <SelectTrigger className="w-[140px] py-5 shadow-none">
          <SelectValue placeholder="All Status" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="all">All Status</SelectItem>
          <SelectItem value="upcoming">Upcoming</SelectItem>
          <SelectItem value="unpublished">Unpublished</SelectItem>
          <SelectItem value="archived">Archived</SelectItem>
          <SelectItem value="completed">Completed</SelectItem>
        </SelectContent>
      </Select>

      <div className="flex items-center gap-2">
        <Input
          type="date"
          value={filters.date}
          onChange={(e) => updateFilter("date", e.target.value)}
          className="w-[140px] py-5 px-2 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200 shadow-none"
        />
      </div>

      <Select
        value={filters.matchType}
        onValueChange={(value) => updateFilter("matchType", value)}
      >
        <SelectTrigger className="w-[140px] py-5 shadow-none">
          <SelectValue placeholder="Single Match" />
        </SelectTrigger>
        <SelectContent>
          <SelectItem value="single">Single Match</SelectItem>
          <SelectItem value="tournament">Tournament</SelectItem>
          <SelectItem value="league">League</SelectItem>
        </SelectContent>
      </Select>

      <Button
        onClick={onApplyFilters}
        className="bg-blue-600 hover:bg-blue-700 py-5"
      >
        <Filter className="h-4 w-4 mr-2" />
        Apply Filter
      </Button>
    </div>
  );
}
