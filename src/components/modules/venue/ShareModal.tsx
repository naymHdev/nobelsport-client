"use client";

import React, { useState } from "react";
import {
  FacebookShareButton,
  FacebookIcon,
  WhatsappShareButton,
  WhatsappIcon,
  TelegramShareButton,
  TelegramIcon,
  FacebookMessengerShareButton,
  FacebookMessengerIcon,
} from "react-share";

import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";
import { IoShareSocialOutline } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";

interface ShareModalProps {
  url?: string | null;
  title?: string;
  description?: string;
  children?: React.ReactNode;
}

export function ShareModal({
  url,
  title = "Check this out!",

  children,
}: ShareModalProps) {
  const [copied, setCopied] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleCopyLink = async () => {
    try {
      await navigator.clipboard.writeText(url as string);
      setCopied(true);
      toast.success("Link copied to clipboard!");
      setTimeout(() => setCopied(false), 2000);
    } catch {
      toast.error("Failed to copy. Please copy manually.");
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>
        {children || (
          <div className=" px-[14px] py-3 bg-[#FAFAFA] text-center hover:cursor-pointer">
            <IoShareSocialOutline className="text-ns-secondary w-6 h-6" />
          </div>
        )}
      </DialogTrigger>

      <DialogContent showCloseButton={false} className="">
        <div className=" border-b pb-2 flex font-openSans items-center justify-between">
          <h3 className="text-xl font-semibold">Share</h3>
          <button
            onClick={() => setIsOpen(false)}
            className=" hover:cursor-pointer border-none shadow-none bg-transparent"
          >
            <RxCross2 className=" h-6 w-6 text-ns-title" />
          </button>
        </div>

        <div className="space-y-6 mt-3">
          {/* Social Share Buttons */}
          <div className="">
            <Label className="mb-4 block font-bold text-ns-foreground font-openSans">
              Share this link via
            </Label>
            <div className="flex items-center justify-center gap-6">
              <FacebookShareButton
                url={url || ""}
                title={title}
                aria-label="Share on Facebook"
              >
                <FacebookIcon size={48} round />
              </FacebookShareButton>

              <FacebookMessengerShareButton
                url={url || ""}
                appId="YOUR_FACEBOOK_APP_ID"
                aria-label="Share on Messenger"
              >
                <FacebookMessengerIcon size={48} round />
              </FacebookMessengerShareButton>

              <WhatsappShareButton
                url={url || ""}
                title={title}
                aria-label="Share on WhatsApp"
              >
                <WhatsappIcon size={48} round />
              </WhatsappShareButton>

              <TelegramShareButton
                url={url || ""}
                title={title}
                aria-label="Share on Telegram"
              >
                <TelegramIcon size={48} round />
              </TelegramShareButton>
            </div>
          </div>

          {/* URL Copy Section */}
          <div className="space-y-2 mt-4">
            <Label
              htmlFor="url-input"
              className="font-bold text-ns-foreground font-openSans"
            >
              URL link
            </Label>
            <div className="flex gap-2">
              <Input
                id="url-input"
                value={url || ""}
                readOnly
                className="flex-1 bg-gray-50 px-2 py-6"
                aria-label="Share URL"
              />
              <Button
                onClick={handleCopyLink}
                className="bg-green-600 hover:bg-green-700 text-white px-6 py-6"
                aria-label="Copy URL to clipboard"
              >
                {copied ? "Copied" : "Copy"}
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}
