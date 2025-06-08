"use client";

import type React from "react";
import { useState } from "react";
import { Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import fbLogo from "@/assets/images/fb-logo.png";
import Image from "next/image";

export default function TeamDetailsModal() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        variant="ghost"
        size="icon"
        className="text-amber-500 hover:text-amber-600"
      >
        <Eye className="h-5 w-5" />
      </Button>

      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="sm:max-w-md font-openSans">
          <DialogHeader className="flex flex-row items-center justify-between">
            <DialogTitle className=" text-[16px] font-semibold font-openSans text-ns-title">
              View Details
            </DialogTitle>
          </DialogHeader>
          <section className=" space-y-6">
            <div>
              <Label className="text-sm font-semibold text-ns-title">
                Team Name
              </Label>
              <h2 className=" text-sm font-semibold text-ns-foreground mt-2">
                Victory FC
              </h2>
            </div>
            <div>
              <Label className="text-sm font-semibold text-ns-title">
                Team Manager
              </Label>
              <div className="mt-2 flex items-center gap-2">
                <Avatar className="w-6 h-6">
                  <AvatarImage src="https://github.com/shadcn.png" />
                  <AvatarFallback>CN</AvatarFallback>
                </Avatar>
                <h2 className=" text-sm font-semibold text-ns-foreground">
                  John Smith
                </h2>
              </div>
            </div>

            <div>
              <Label className="text-sm font-semibold text-ns-title">
                Team Logo
              </Label>
              <div className=" mt-2">
                <Image
                  src={fbLogo}
                  alt="Team Logo"
                  width={150}
                  height={150}
                  className=" w-24 h-24 object-cover rounded-lg"
                />
              </div>
            </div>
          </section>
        </DialogContent>
      </Dialog>
    </>
  );
}
