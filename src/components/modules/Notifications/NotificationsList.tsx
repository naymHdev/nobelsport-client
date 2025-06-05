"use client";

import { Calendar, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useState } from "react";
import PollModal from "./poll-modal";

interface Notification {
  id: string;
  type: "match" | "poll";
  title: string;
  description: string;
  date: string;
  actionText: string;
  actionHref?: string;
}

export default function NotificationsList() {
  const [isPollModalOpen, setIsPollModalOpen] = useState(false);

  const notifications: Notification[] = [
    {
      id: "1",
      type: "match",
      title: "Match Confirmation",
      description:
        "You have been confirmed for the match against Team Blue on March 15, 2025.",
      date: "March 1, 2025",
      actionText: "Go to Match",
      actionHref: "/match/1",
    },
    {
      id: "2",
      type: "poll",
      title: "Choose you Poll",
      description:
        "A poll has been created for next week's match. Choose your preferred time and venue.",
      date: "March 1, 2025",
      actionText: "Vote Now",
      actionHref: "/poll/1",
    },
    {
      id: "3",
      type: "match",
      title: "Match Confirmation",
      description:
        "You have been confirmed for the match against Team Blue on March 15, 2025.",
      date: "March 1, 2025",
      actionText: "Go to Match",
      actionHref: "/match/2",
    },
    {
      id: "4",
      type: "match",
      title: "Match Confirmation",
      description:
        "You have been confirmed for the match against Team Blue on March 15, 2025.",
      date: "March 1, 2025",
      actionText: "Go to Match",
      actionHref: "/match/3",
    },
  ];

  const getIcon = (type: string) => {
    switch (type) {
      case "match":
        return <Calendar className="h-5 w-5 text-blue-600" />;
      case "poll":
        return <Users className="h-5 w-5 text-blue-600" />;
      default:
        return <Calendar className="h-5 w-5 text-blue-600" />;
    }
  };

  const handleNotificationAction = (notification: Notification) => {
    if (notification.type === "poll") {
      setIsPollModalOpen(true);
    } else {
      console.log(`Navigate to: ${notification.actionHref}`);
    }
  };

  const handlePollSubmit = (selectedOption: string) => {
    console.log("Poll submitted with option:", selectedOption);
  };

  return (
    <>
      <div className="space-y-4">
        {notifications.map((notification) => (
          <Card
            key={notification.id}
            className="p-6 bg-white border-none shadow-none"
          >
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 bg-blue-50 rounded-lg flex items-center justify-center">
                {getIcon(notification.type)}
              </div>
              <div className="flex-1 min-w-0">
                <h3 className="text-lg font-semibold text-ns-title mb-2">
                  {notification.title}
                </h3>
                <p className=" text-ns-foreground mb-3 leading-relaxed">
                  {notification.description}
                </p>
                <p className="text-sm text-gray-500 mb-4">
                  {notification.date}
                </p>
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white px-6"
                  onClick={() => handleNotificationAction(notification)}
                >
                  {notification.actionText}
                </Button>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <PollModal
        isOpen={isPollModalOpen}
        onClose={() => setIsPollModalOpen(false)}
        onSubmit={handlePollSubmit}
      />
    </>
  );
}
