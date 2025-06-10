"use client";

import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Eye, X } from "lucide-react";
import { Separator } from "@radix-ui/react-separator";

export function PaymentDetailsModal() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="ghost" size="icon" className="h-8 w-8">
          <Eye className="h-4 w-4 text-yellow-500" />
        </Button>
      </DialogTrigger>

      <DialogContent className="rounded-lg font-openSans">
        <DialogHeader>
          <DialogTitle className="text-2xl font-semibold text-ns-title">
            View Details
          </DialogTitle>
          <DialogClose className="absolute right-4 top-4">
            <X className="h-4 w-4" />
          </DialogClose>
        </DialogHeader>
        <Separator className=" -mt-3 border-b" />

        <div className="mt-2 space-y-2 text-sm">
          <h4 className=" font-bold text-ns-title text-xl">
            Payment Information
          </h4>
          <p>
            Share Price: <span className="text-muted-foreground">$50</span>
          </p>
          <p>
            Total Amount: <span className="text-muted-foreground">$60</span>
          </p>
          <p>
            <span className="font-semibold">Payment Status:</span> Paid
          </p>
          <p>
            Payment Method:{" "}
            <span className="text-muted-foreground">Credit Card</span>
          </p>
          <p>
            Transaction ID:{" "}
            <span className="text-muted-foreground">ABC123XYZ</span>
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
