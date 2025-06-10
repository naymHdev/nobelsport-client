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
import { Eye } from "lucide-react";

interface FeeBreakdownProps {
  venueCost: number;
  refereeFee: number;
  amountOutstanding: number;
  amountPaid: number;
  onMarkAsPaid?: () => void;
  onSendReminder?: () => void;
}

function MatchFeeBreakdown({
  venueCost = 5,
  refereeFee = 5,
  amountOutstanding = 10,
  amountPaid = 10,
  onMarkAsPaid,
  onSendReminder,
}: FeeBreakdownProps) {
  return (
    <div className="space-y-6">
      {/* Fee breakdown items */}
      <div className="space-y-4">
        <div className="flex justify-between items-center border-b pb-1">
          <span className="text-gray-900 font-medium">Venue Cost</span>
          <span className="text-gray-900 font-medium">£{venueCost}</span>
        </div>

        <div className="flex justify-between items-center border-b pb-1">
          <span className="text-gray-900 font-medium">Referee Fee</span>
          <span className="text-gray-900 font-medium">£{refereeFee}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Amount Outstanding</span>
          <span className="text-gray-700">${amountOutstanding}</span>
        </div>

        <div className="flex justify-between items-center">
          <span className="text-gray-700">Amount Paid</span>
          <span className="text-gray-700">${amountPaid}</span>
        </div>
      </div>

      {/* Action buttons */}
      <div className="flex gap-3 pt-4">
        <Button
          className="flex-1 bg-green-600 hover:bg-green-700 text-white"
          onClick={onMarkAsPaid}
        >
          Mark as Paid
        </Button>
        <Button
          className="flex-1 bg-red-500 hover:bg-red-600 text-white"
          onClick={onSendReminder}
        >
          Send Reminder
        </Button>
      </div>
    </div>
  );
}

export default function MatchFeeBreakdownModal() {
  const [isOpen, setIsOpen] = useState(false);

  const handleMarkAsPaid = () => {
    console.log("Marked as paid");
    setIsOpen(false);
  };

  const handleSendReminder = () => {
    console.log("Reminder sent");
    setIsOpen(false);
  };

  return (
    <div className="">
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant="ghost"
            size="icon"
            className="text-orange-500 hover:text-orange-600"
          >
            <Eye className="h-4 w-4" />
          </Button>
        </DialogTrigger>
        <DialogContent className="">
          <DialogHeader>
            <DialogTitle className="text-xl font-semibold text-gray-900">
              Match Fee Breakdown
            </DialogTitle>
          </DialogHeader>
          <MatchFeeBreakdown
            venueCost={5}
            refereeFee={5}
            amountOutstanding={10}
            amountPaid={10}
            onMarkAsPaid={handleMarkAsPaid}
            onSendReminder={handleSendReminder}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
}
