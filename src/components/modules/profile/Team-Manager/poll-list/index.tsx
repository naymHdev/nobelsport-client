"use client";

import { useState } from "react";
import {
  Search,
  Plus,
  Edit,
  Trash2,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Card } from "@/components/ui/card";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import NSButton from "@/components/ui/core/NSButton";
import Link from "next/link";

interface Poll {
  id: number;
  title: string;
  status: "Active" | "Closed";
  createdDate: string;
}

const pollData: Poll[] = [
  {
    id: 1,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 2,
    title: "Vote for Match Time and Venue",
    status: "Closed",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 3,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 4,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 5,
    title: "Vote for Match Time and Venue",
    status: "Closed",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 6,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 7,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 8,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 9,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 10,
    title: "Vote for Match Time and Venue",
    status: "Closed",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 11,
    title: "Vote for Match Time and Venue",
    status: "Closed",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 12,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
  {
    id: 13,
    title: "Vote for Match Time and Venue",
    status: "Active",
    createdDate: "Jan 15, 2025",
  },
];

const PollList = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const filteredPolls = pollData.filter((poll) =>
    poll.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const totalPages = Math.ceil(filteredPolls.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentPolls = filteredPolls.slice(startIndex, endIndex);

  const handleEdit = (id: number) => {
    console.log("Edit poll:", id);
  };

  const handleDelete = (id: number) => {
    console.log("Delete poll:", id);
  };

  return (
    <>
      <Card className="p-6 border-none shadow-none">
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-6">
          <h1 className="text-2xl font-bold text-ns-title">Poll List</h1>
          <div className="flex flex-col justify-end mb-4 mt-6 md:mt-0">
            <div className=" flex flex-col md:flex-row items-center gap-3">
              <div className="flex items-center w-full md:w-80 rounded-md shadow-sm bg-white overflow-hidden">
                <div className="pl-3 flex flex-col items-center text-muted-foreground">
                  <Search className="h-4 w-4 mr-2" />
                </div>
                <Input
                  type="text"
                  placeholder="Search"
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
              <div className="w-full md:w-auto">
                <Link href="/profile/poll-list/create-poll">
                  <NSButton className="w-full md:w-auto flex items-center gap-1 rounded-md">
                    <Plus className="mr-2 h-4 w-4" />
                    Create Poll
                  </NSButton>
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-lg overflow-hidden">
          <Table>
            <TableHeader>
              <TableRow className="bg-ns-primary hover:bg-green-600">
                <TableHead className="text-white font-semibold py-5">
                  Poll Title
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Status
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Created Date
                </TableHead>
                <TableHead className="text-white font-semibold">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {currentPolls.map((poll) => (
                <TableRow key={poll.id} className="hover:bg-gray-50">
                  <TableCell className="font-medium py-5">
                    {poll.title}
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant={
                        poll.status === "Active" ? "default" : "destructive"
                      }
                      className={
                        poll.status === "Active"
                          ? "bg-green-100 text-green-800 hover:bg-green-100"
                          : "bg-red-100 text-red-800 hover:bg-red-100"
                      }
                    >
                      {poll.status}
                    </Badge>
                  </TableCell>
                  <TableCell>{poll.createdDate}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-2">
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleEdit(poll.id)}
                        className="h-8 w-8 p-0 text-orange-500 hover:text-orange-600 hover:bg-orange-50"
                      >
                        <Edit className="h-4 w-4" />
                      </Button>
                      <Button
                        variant="ghost"
                        size="sm"
                        onClick={() => handleDelete(poll.id)}
                        className="h-8 w-8 p-0 text-red-500 hover:text-red-600 hover:bg-red-50"
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                    </div>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </div>

        {totalPages > 1 && (
          <div className="flex items-center justify-end gap-2 mt-6">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
              disabled={currentPage === 1}
              className="h-8 w-8 p-0 border"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <Button
                key={page}
                variant={currentPage === page ? "default" : "ghost"}
                size="sm"
                onClick={() => setCurrentPage(page)}
                className={`h-8 w-8 p-0 border ${
                  currentPage === page
                    ? "bg-blue-600 hover:bg-blue-700 text-white"
                    : "hover:bg-gray-100"
                }`}
              >
                {page}
              </Button>
            ))}

            <Button
              variant="ghost"
              size="sm"
              onClick={() =>
                setCurrentPage((prev) => Math.min(prev + 1, totalPages))
              }
              disabled={currentPage === totalPages}
              className="h-8 w-8 p-0 border"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
        )}
      </Card>
    </>
  );
};

export default PollList;
