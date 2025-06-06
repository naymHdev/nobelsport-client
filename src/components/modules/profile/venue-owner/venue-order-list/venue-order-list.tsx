"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Search,
  ChevronDown,
  ChevronLeft,
  ChevronRight,
  SlidersHorizontal,
} from "lucide-react";
import ViewDetailsModal from "./view-details-modal";
import NSButton from "@/components/ui/core/NSButton";
import { GoPlus } from "react-icons/go";
import Link from "next/link";

interface BookingData {
  id: string;
  teamName: string;
  bookingDate: string;
  accountType: string;
  status: "Pending" | "Confirmed" | "Canceled";
}

export default function VenueOrderList() {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);

  const bookings: BookingData[] = [
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Pending",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Canceled",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Canceled",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Canceled",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Pending",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Pending",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
    {
      id: "#1234",
      teamName: "Dragons FC Lineup",
      bookingDate: "28th Oct 2023",
      accountType: "Free",
      status: "Confirmed",
    },
  ];

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "Pending":
        return (
          <Badge
            variant="secondary"
            className="bg-yellow-100 text-yellow-800 hover:bg-yellow-100"
          >
            Pending
          </Badge>
        );
      case "Confirmed":
        return (
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Confirmed
          </Badge>
        );
      case "Canceled":
        return (
          <Badge
            variant="secondary"
            className="bg-red-100 text-red-800 hover:bg-red-100"
          >
            Canceled
          </Badge>
        );
      default:
        return <Badge variant="secondary">{status}</Badge>;
    }
  };

  const totalPages = 4;

  return (
    <Card className="w-full border-none shadow-none mx-auto">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 lg:pb-8">
        <h2 className="text-2xl font-extrabold text-ns-title">
          Venue Order List
        </h2>
        <section className=" flex flex-col md:flex-row justify-end md:items-center gap-6">
          <div className="flex items-center">
            {/* Search Input Wrapper */}
            <div className="relative flex-grow">
              <Input
                placeholder="Search"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 pr-16 py-3 rounded-l-lg border-none rounded-r-none bg-white  text-gray-700 focus:outline-none ring-0 focus-visible:ring-0 focus-visible:border-gray-200 w-full"
              />
              <Search className="absolute left-3 top-1/2 h-5 w-5 text-gray-400 -translate-y-1/2" />
            </div>

            {/* Right Green Filter Button */}
            <Button className="rounded-l-none rounded-r-full bg-green-700 hover:bg-green-800 p-3">
              <SlidersHorizontal className="h-5 w-5 text-white" />
            </Button>
          </div>
          <Link href={"/profile/venue-order-list/create-venue"}>
            <NSButton className=" flex items-center gap-1 rounded-lg py-3 px-4">
              <GoPlus size={25} /> Create Venue
            </NSButton>
          </Link>
        </section>
      </CardHeader>
      <div className="overflow-x-auto px-6">
        <div className="">
          <Table>
            <TableHeader>
              <TableRow className="bg-green-600 hover:bg-green-600 rounded-t-lg">
                <TableHead className="text-white font-medium">
                  Booking ID
                </TableHead>
                <TableHead className="text-white font-medium">
                  Team Name
                </TableHead>
                <TableHead className="text-white font-medium">
                  Booking Date
                </TableHead>
                <TableHead className="text-white font-medium">
                  <div className="flex items-center space-x-1">
                    <span>Account Type</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-white font-medium">
                  <div className="flex items-center space-x-1">
                    <span>Status</span>
                    <ChevronDown className="h-4 w-4" />
                  </div>
                </TableHead>
                <TableHead className="text-white font-medium">Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {bookings.map((booking, index) => (
                <TableRow key={index} className="hover:bg-muted/50">
                  <TableCell className="font-medium">{booking.id}</TableCell>
                  <TableCell>
                    <Link href={`/profile/venue-order-list/venue-details`}>
                      {booking.teamName}
                    </Link>
                  </TableCell>
                  <TableCell>{booking.bookingDate}</TableCell>
                  <TableCell>{booking.accountType}</TableCell>
                  <TableCell>{getStatusBadge(booking.status)}</TableCell>
                  <TableCell>
                    <ViewDetailsModal />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {/* ---------------------- Pagination ----------------- */}
        <div className="flex items-center justify-center space-x-2 mt-4">
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
            disabled={currentPage === 1}
            className=" border"
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          {[1, 2, 3, 4].map((page) => (
            <Button
              key={page}
              variant={currentPage === page ? "default" : "ghost"}
              size="sm"
              onClick={() => setCurrentPage(page)}
              className={
                currentPage === page
                  ? "bg-blue-600 hover:bg-blue-700"
                  : "border"
              }
            >
              {page}
            </Button>
          ))}

          <Button
            variant="ghost"
            size="icon"
            className=" border"
            onClick={() =>
              setCurrentPage(Math.min(totalPages, currentPage + 1))
            }
            disabled={currentPage === totalPages}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </Card>
  );
}
