"use client";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface BookingDetailsProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function EnterpriseVenueDetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-md mx-auto p-0 gap-0">
        <DialogHeader className="p-6 pb-4">
          <div className="flex items-center justify-between">
            <DialogTitle className="text-lg font-bold text-ns-title">
              View Details
            </DialogTitle>
          </div>
        </DialogHeader>

        <div className="px-6 space-y-4">
          <Badge
            variant="secondary"
            className="bg-green-100 text-green-800 hover:bg-green-100"
          >
            Completed
          </Badge>

          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Order ID</span>
              <span className="text-sm font-medium">#12345</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Venue Name</span>
              <span className="text-sm font-medium">
                Premier Football Field
              </span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Booking Date</span>
              <span className="text-sm font-medium">March 25, 2025</span>
            </div>

            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-600">Booking Time</span>
              <span className="text-sm font-medium">2:00 PM - 4:00 PM</span>
            </div>
          </div>

          <div className="flex items-center justify-center py-4">
            <div className="flex items-center space-x-4 text-sm">
              <span className="px-3 py-1 bg-gray-100 rounded-md">Team A</span>
              <span className="text-gray-500">VS</span>
              <span className="px-3 py-1 bg-gray-100 rounded-md">Team B</span>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold text-base">Payment Information</h3>

            <div className="space-y-4">
              <div className="space-y-2">
                <div className="font-medium text-sm">Team B</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Amount Paid</span>
                  <span className="text-sm font-medium">$100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Payment Method</span>
                  <span className="text-sm font-medium">Paypal</span>
                </div>
              </div>

              <div className="space-y-2">
                <div className="font-medium text-sm">Team A</div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Amount Paid</span>
                  <span className="text-sm font-medium">$100</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm text-gray-600">Payment Method</span>
                  <span className="text-sm font-medium">Credit Card</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex gap-3 p-6 pt-6">
          <Button
            // onClick={handleApprove}
            className="flex-1 bg-green-500 hover:bg-green-600 text-white"
          >
            Approve
          </Button>
          <Button
            // onClick={handleReject}
            variant="destructive"
            className="flex-1"
          >
            Reject
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
