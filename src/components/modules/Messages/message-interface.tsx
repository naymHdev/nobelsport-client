"use client";

import type React from "react";

import { useState } from "react";
import { Send } from "lucide-react";
import { Avatar } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { RiAttachmentLine } from "react-icons/ri";

export default function MessageInterface() {
  const [message, setMessage] = useState("");

  const currentUser = {
    id: "user1",
    name: "You",
    avatar: "https://shorturl.at/Ge8HU",
  };

  const activeContact = {
    id: "user2",
    name: "Sarah Adams",
    avatar: "https://shorturl.at/bRLOC",
    status: "online",
  };

  const messages = [
    {
      id: 1,
      senderId: "user2",
      content: "omg, this is amazing",
      timestamp: new Date(),
    },
    {
      id: 2,
      senderId: "user2",
      content: "perfect! ✅",
      timestamp: new Date(),
    },
    {
      id: 3,
      senderId: "user2",
      content: "Wow, this is really epic",
      timestamp: new Date(),
    },
    {
      id: 4,
      senderId: "user1",
      content: "How are you?",
      timestamp: new Date(),
    },
    {
      id: 5,
      senderId: "user2",
      content: "just ideas for next time",
      timestamp: new Date(),
    },
    {
      id: 6,
      senderId: "user2",
      content: "I'll be there in 2 mins ⏰",
      timestamp: new Date(),
    },
    {
      id: 7,
      senderId: "user1",
      content: "woohoooo",
      timestamp: new Date(),
    },
    {
      id: 8,
      senderId: "user1",
      content: "Haha oh man",
      timestamp: new Date(),
    },
    {
      id: 9,
      senderId: "user1",
      content: "Haha that's terrifying 😱",
      timestamp: new Date(),
    },
    {
      id: 10,
      senderId: "user2",
      content: "aww",
      timestamp: new Date(),
    },
    {
      id: 11,
      senderId: "user2",
      content: "omg, this is amazing",
      timestamp: new Date(),
    },
    {
      id: 12,
      senderId: "user2",
      content: "woohoooo 🔥",
      timestamp: new Date(),
    },
    {
      id: 13,
      senderId: "user1",
      content: "woohoooo",
      timestamp: new Date(),
    },
    {
      id: 14,
      senderId: "user1",
      content: "Haha oh man",
      timestamp: new Date(),
    },
    {
      id: 15,
      senderId: "user1",
      content: "Haha that's terrifying 😱",
      timestamp: new Date(),
    },
  ];

  const handleSendMessage = () => {
    if (message.trim()) {
      // In a real app, you would add the message to your messages state
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  return (
    <>
      <div className="flex flex-col flex-1 border-l">
        {/* <MessageHeader contact={activeContact} /> */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((msg) => (
            <div
              key={msg.id}
              className={`flex ${
                msg.senderId === currentUser.id
                  ? "justify-end"
                  : "justify-start"
              }`}
            >
              {msg.senderId !== currentUser.id && (
                <Avatar className="h-8 w-8 mr-2">
                  <img
                    src={activeContact.avatar || "/placeholder.svg"}
                    alt={activeContact.name}
                  />
                </Avatar>
              )}
              <div
                className={`max-w-[70%] px-4 py-2 rounded-2xl ${
                  msg.senderId === currentUser.id
                    ? "bg-black text-white rounded-br-none"
                    : "bg-[#dfdcdc] text-black rounded-bl-none"
                }`}
              >
                {msg.content}
              </div>
              {msg.senderId === currentUser.id && (
                <Avatar className="h-8 w-8 ml-2">
                  <img
                    src={currentUser.avatar || "/placeholder.svg"}
                    alt={currentUser.name}
                  />
                </Avatar>
              )}
            </div>
          ))}
        </div>
        <div className="p-4">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="rounded-full">
              <span className="sr-only">Add attachment</span>
              <span>
                <RiAttachmentLine className=" text-ns-title size-7" />
              </span>
            </Button>
            <div className="relative flex-1">
              <Input
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Type a message"
                className="pr-10 rounded-lg border-ns-foreground focus:outline-none focus-visible:ring-1 focus-visible:ring-ns-foreground px-3 py-5 focus-visible:border-none"
              />
            </div>
            <Button
              onClick={handleSendMessage}
              size="icon"
              className="rounded-full bg-transparent text-ns-title shadow-none border-none"
            >
              <Send className=" text-ns-title size-7" />
              <span className="sr-only">Send message</span>
            </Button>
          </div>
        </div>
      </div>
    </>
  );
}
