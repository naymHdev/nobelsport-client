"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Eye } from "lucide-react";

interface OrderDetails {
  orderId: string;
  customerName: string;
  email: string;
  phoneNumber: string;
  orderDate: string;
  bookingDate: string;
  timeSlot: string;
  orderStatus: "Pending" | "Confirmed" | "Canceled";
  basePrice: number;
  totalAmount: number;
  paymentStatus: string;
  paymentMethod: string;
  transactionId: string;
}

export default function ViewDetailsModal() {
  const [isOpen, setIsOpen] = useState(false);

  // Sample order data
  const orderDetails: OrderDetails = {
    orderId: "#12345",
    customerName: "John D.",
    email: "johndoe@example.com",
    phoneNumber: "(123) 456-7890",
    orderDate: "12th March 2025",
    bookingDate: "March 25, 2025",
    timeSlot: "9:00 AM - 11:00 AM",
    orderStatus: "Pending",
    basePrice: 50,
    totalAmount: 60,
    paymentStatus: "Paid",
    paymentMethod: "Credit Card",
    transactionId: "ABC123XYZ",
  };

  const handleApprove = () => {
    console.log("Order approved");
    setIsOpen(false);
  };

  const handleReject = () => {
    console.log("Order rejected");
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-lg">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold text-ns-title">
            View Details
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-6">
          {/* Order Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ns-title">
              Order {orderDetails.orderId}
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Customer Name: </span>
                <span>{orderDetails.customerName}</span>
              </div>
              <div>
                <span className="font-medium">Email: </span>
                <span>{orderDetails.email}</span>
              </div>
              <div>
                <span className="font-medium">Phone Number: </span>
                <span>{orderDetails.phoneNumber}</span>
              </div>
              <div>
                <span className="font-medium">Order Date: </span>
                <span>{orderDetails.orderDate}</span>
              </div>
              <div>
                <span className="font-medium">Booking Date: </span>
                <span>{orderDetails.bookingDate}</span>
              </div>
              <div>
                <span className="font-medium">Time Slot: </span>
                <span>{orderDetails.timeSlot}</span>
              </div>
              <div className="flex items-center space-x-2">
                <span className="font-medium">Order Status: </span>
                <Badge
                  variant="secondary"
                  className={
                    orderDetails.orderStatus === "Pending"
                      ? "bg-yellow-100 text-yellow-800"
                      : orderDetails.orderStatus === "Confirmed"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }
                >
                  {orderDetails.orderStatus}
                </Badge>
              </div>
            </div>
          </div>

          {/* Payment Information */}
          <div className="space-y-3">
            <h3 className="text-lg font-semibold text-ns-title">
              Payment Information
            </h3>
            <div className="space-y-2 text-sm">
              <div>
                <span className="font-medium">Base Price: </span>
                <span>${orderDetails.basePrice}</span>
              </div>
              <div>
                <span className="font-medium">Total Amount: </span>
                <span>${orderDetails.totalAmount}</span>
              </div>
              <div>
                <span className="font-medium">Payment Status: </span>
                <span className="font-semibold">
                  {orderDetails.paymentStatus}
                </span>
              </div>
              <div>
                <span className="font-medium">Payment Method: </span>
                <span>{orderDetails.paymentMethod}</span>
              </div>
              <div>
                <span className="font-medium">Transaction ID: </span>
                <span>{orderDetails.transactionId}</span>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex space-x-3 pt-4">
            <Button
              onClick={handleApprove}
              className="flex-1 bg-green-600 hover:bg-green-700 text-white py-5"
            >
              Approve
            </Button>
            <Button
              onClick={handleReject}
              variant="destructive"
              className="flex-1 py-5"
            >
              Reject
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
