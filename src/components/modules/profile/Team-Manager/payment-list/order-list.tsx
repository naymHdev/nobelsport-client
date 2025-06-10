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
import { ChevronLeft, ChevronRight, Search, Trash2 } from "lucide-react";
import { PiSlidersHorizontalLight } from "react-icons/pi";
import { PaymentDetailsModal } from "./payment-details-modal";

interface Order {
  id: number;
  venueName: string;
  location: string;
  amountPaid: string;
  status: "Pending" | "Completed" | "Cancelled";
}

const OrderList = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const orders: Order[] = Array.from({ length: 13 }, (_, i) => ({
    id: i + 1,
    venueName: "Premier Football Field",
    location: "New York, USA",
    amountPaid: "£23",
    status: "Pending",
  }));

  const itemsPerPage = 13;
  const totalPages = Math.ceil(orders.length / itemsPerPage);
  const paginatedOrders = orders.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );
  return (
    <>
      <div>
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

        {/* Table */}
        <div className="overflow-x-auto rounded-lg">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-green-700 text-white font-medium">
                  Venue Name
                </TableHead>
                <TableHead className="bg-green-700 text-white font-medium">
                  Location
                </TableHead>
                <TableHead className="bg-green-700 text-white font-medium">
                  Amount Paid
                </TableHead>
                <TableHead className="bg-green-700 text-white font-medium">
                  Status <ChevronRight className="ml-1 h-4 w-4 inline" />
                </TableHead>
                <TableHead className="bg-green-700 text-white font-medium">
                  Action
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedOrders.map((order) => (
                <TableRow key={order.id}>
                  <TableCell className=" py-4">{order.venueName}</TableCell>
                  <TableCell>{order.location}</TableCell>
                  <TableCell>{order.amountPaid}</TableCell>
                  <TableCell>
                    <span className="text-amber-500 font-medium">
                      {order.status}
                    </span>
                  </TableCell>
                  <TableCell>
                    <div className="flex space-x-2">
                      <PaymentDetailsModal />
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-8 w-8 text-red-500 hover:text-red-700"
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

        {/* Pagination */}
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
    </>
  );
};

export default OrderList;
