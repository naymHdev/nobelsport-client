"use client";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Eye, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import profileImg from "@/assets/images/john_smith.png";
import MatchFeeBreakdownModal from "./match-fee-breakdown";

// Status style map
const statusMap = {
  Paid: "text-green-600 font-medium",
  Pending: "text-yellow-500 font-medium",
  "Pay at Venue": "text-blue-600 font-medium underline cursor-pointer",
};

// Dummy data
const rows = Array.from({ length: 12 }, () => ({
  id: "2244",
  name: "Eleanor Pena",
  fee: "$20.00",
  paid: "£0",
  outstanding: "£0",
  status: ["Paid", "Pending", "Pay at Venue"][Math.floor(Math.random() * 3)],
}));

export default function TransactionList() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const itemsPerPage = 13;
  const totalPages = Math.ceil(rows.length / itemsPerPage);
  const paginatedRows = rows.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  return (
    <div className="w-full overflow-auto bg-white rounded-lg">
      {/* Search */}
      <div className="flex justify-end mb-4">
        <div className="flex items-center w-80 rounded-md shadow-sm bg-white overflow-hidden">
          <div className="pl-3 flex items-center text-muted-foreground">
            <Search className="h-4 w-4 mr-2" />
          </div>
          <Input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="border-none focus-visible:ring-0 focus-visible:ring-offset-0 h-10 rounded-none px-0"
          />
          <Button
            type="button"
            size="icon"
            className="h-10 rounded-none rounded-r-md bg-green-700 hover:bg-green-800"
          >
            <PiSlidersHorizontalLight className=" size-7 text-white" />
          </Button>
        </div>
      </div>
      <Table>
        <TableHeader>
          <TableRow className="bg-green-700 hover:bg-ns-primary text-white">
            <TableHead className="text-white">Trans. ID</TableHead>
            <TableHead className="text-white">Player Name</TableHead>
            <TableHead className="text-white">Match Fee</TableHead>
            <TableHead className="text-white">Amount Paid</TableHead>
            <TableHead className="text-white">Amount Outstanding</TableHead>
            <TableHead className="text-white">Status</TableHead>
            <TableHead className="text-white">Action</TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {rows.map((row, i) => (
            <TableRow key={i}>
              <TableCell>{row.id}</TableCell>
              <TableCell className="flex items-center gap-2">
                <Image
                  src={profileImg}
                  alt="Avatar"
                  width={24}
                  height={24}
                  className="rounded-full"
                />
                <span className="font-medium">{row.name}</span>
              </TableCell>
              <TableCell>{row.fee}</TableCell>
              <TableCell>{row.paid}</TableCell>
              <TableCell>{row.outstanding}</TableCell>
              <TableCell
                className={statusMap[row.status as keyof typeof statusMap]}
              >
                {row.status}
              </TableCell>
              <TableCell>
                <MatchFeeBreakdownModal />
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      {/* ------------------ Pagination ---------------- */}
      <div className="flex items-center justify-end space-x-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        {[...Array(Math.min(totalPages, 4))].map((_, i) => (
          <Button
            key={i}
            variant={currentPage === i + 1 ? "default" : "outline"}
            className={currentPage === i + 1 ? "bg-blue-600" : ""}
            onClick={() => setCurrentPage(i + 1)}
          >
            {i + 1}
          </Button>
        ))}
        <Button
          variant="outline"
          size="icon"
          onClick={() =>
            setCurrentPage((prev) => Math.min(prev + 1, totalPages))
          }
          disabled={currentPage === totalPages}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
