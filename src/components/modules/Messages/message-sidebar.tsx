"use client";

import { useState } from "react";
import { Avatar } from "@/components/ui/avatar";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  unread?: boolean;
  emoji?: string;
}

interface MessageSidebarProps {
  activeContactId: string;
}

export default function MessageSidebar({
  activeContactId,
}: MessageSidebarProps) {
  const [searchQuery, setSearchQuery] = useState("");

  const contacts: Contact[] = [
    {
      id: "user3",
      name: "Ronald Richards",
      avatar: "https://shorturl.at/Ge8HU",
      lastMessage: "Haha oh man 🔥",
      time: "12m",
    },
    {
      id: "user2",
      name: "Sarah Adams",
      avatar: "https://shorturl.at/bRLOC",
      lastMessage: "omg, this is amazing 🔥",
      time: "12m",
      unread: true,
    },
    {
      id: "user4",
      name: "Leslie Alexander",
      avatar: "https://shorturl.at/Ge8HU",
      lastMessage: "perfect!",
      time: "5h",
    },
    {
      id: "user5",
      name: "Cody Fisher",
      avatar: "https://shorturl.at/bRLOC",
      lastMessage: "aww 🧡",
      time: "2d",
    },
  ];

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="w-80 border-r flex flex-col">
      <div className="p-6 border-b">
        <h1 className="text-xl font-semibold flex items-center text-ns-title">
          Messages
          <span className="ml-2 text-xs bg-gray-100 text-gray-700 px-2 py-0.5 rounded-full">
            12
          </span>
        </h1>
      </div>
      <div className="p-4">
        <Input
          placeholder="Search messages"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="pr-10 rounded-lg border-ns-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ns-foreground px-3 py-5 focus-visible:border-none"
        />
      </div>
      <div className="flex-1 overflow-y-auto">
        {filteredContacts.map((contact) => (
          <div
            key={contact.id}
            className={cn(
              "flex items-center gap-3 p-4 hover:bg-gray-50 cursor-pointer",
              contact.id === activeContactId &&
                "bg-green-600 hover:bg-green-600 text-white"
            )}
          >
            <Avatar className="h-10 w-10 flex-shrink-0">
              <img
                src={contact.avatar || "/placeholder.svg"}
                alt={contact.name}
              />
            </Avatar>
            <div className="flex-1 min-w-0">
              <div className="flex justify-between items-center">
                <h3 className=" font-semibold text-ns-title truncate">
                  {contact.name}
                </h3>
                <span
                  className={cn(
                    "text-xs",
                    contact.id === activeContactId
                      ? "text-white font-semibold"
                      : " text-ns-foreground font-semibold"
                  )}
                >
                  {contact.time}
                </span>
              </div>
              <p
                className={cn(
                  "text-sm truncate",
                  contact.id === activeContactId
                    ? "text-white"
                    : " text-ns-foreground font-medium"
                )}
              >
                {contact.lastMessage}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
