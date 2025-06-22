"use client";

import { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Paperclip, Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface Message {
  id: string;
  sender: string;
  avatar: string;
  content: string;
  timestamp: string;
  isOwn: boolean;
}

interface Conversation {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  timestamp: string;
  isOnline?: boolean;
  isActive?: boolean;
}

const conversations: Conversation[] = [
  {
    id: "1",
    name: "Team Message",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750521838/cody_pztde1.png",
    lastMessage: "Haha oh man 🔥",
    timestamp: "12m",
    isActive: false,
  },
  {
    id: "2",
    name: "Sarah Adams",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750521787/sarah_qhxmsd.png",
    lastMessage: "omg, this is amazing 🔥",
    timestamp: "2m",
    isOnline: true,
    isActive: true,
  },
  {
    id: "3",
    name: "Leslie Alexander",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    lastMessage: "perfect!",
    timestamp: "5h",
    isActive: false,
  },
  {
    id: "4",
    name: "Cody Fisher",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1749102654/Ellipse_134_nrnbkp.png",
    lastMessage: "aww 😊",
    timestamp: "2d",
    isActive: false,
  },
];

const messages: Message[] = [
  {
    id: "1",
    sender: "Sarah Adams",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1749102654/Ellipse_134_nrnbkp.png",
    content: "omg, this is amazing",
    timestamp: "2m",
    isOwn: false,
  },
  {
    id: "2",
    sender: "Sarah Adams",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1749102654/Ellipse_134_nrnbkp.png",
    content: "perfect! ✅",
    timestamp: "2m",
    isOwn: false,
  },
  {
    id: "3",
    sender: "Sarah Adams",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750521787/sarah_qhxmsd.png",
    content: "Wow, this is really epic",
    timestamp: "2m",
    isOwn: false,
  },
  {
    id: "4",
    sender: "Leslie Alexander",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "omg, this is amazing",
    timestamp: "1m",
    isOwn: false,
  },
  {
    id: "5",
    sender: "You",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "How are you?",
    timestamp: "1m",
    isOwn: true,
  },
  {
    id: "6",
    sender: "Cody Fisher",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "just ideas for next time",
    timestamp: "30s",
    isOwn: false,
  },
  {
    id: "7",
    sender: "Cody Fisher",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1749102654/Ellipse_134_nrnbkp.png",
    content: "I'll be there in 2 mins ❤️",
    timestamp: "30s",
    isOwn: false,
  },
  {
    id: "8",
    sender: "You",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748919229/profile-icon_sdaqtt.png",
    content: "woohoooo",
    timestamp: "20s",
    isOwn: true,
  },
  {
    id: "9",
    sender: "You",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748919229/profile-icon_sdaqtt.png",
    content: "Haha oh man",
    timestamp: "15s",
    isOwn: true,
  },
  {
    id: "10",
    sender: "You",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1748919229/profile-icon_sdaqtt.png",
    content: "Haha that's terrifying 😊",
    timestamp: "10s",
    isOwn: true,
  },
  {
    id: "11",
    sender: "Leslie Alexander",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "aww",
    timestamp: "5s",
    isOwn: false,
  },
  {
    id: "12",
    sender: "Leslie Alexander",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "omg, this is amazing",
    timestamp: "3s",
    isOwn: false,
  },
  {
    id: "13",
    sender: "Leslie Alexander",
    avatar:
      "https://res.cloudinary.com/dgrg4lmww/image/upload/v1750244804/eeysn7xif3e-1750244800156-profile_image-db-profile.png",
    content: "woohoooo 🔥",
    timestamp: "1s",
    isOwn: false,
  },
];

const GroupMessage = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [messageInput, setMessageInput] = useState("");
  const activeConversation = conversations.find((c) => c.isActive);

  const handleSendMessage = () => {
    if (messageInput.trim()) {
      // Handle sending message
      setMessageInput("");
    }
  };

  return (
    <div className="flex h-screen bg-white">
      {/* Mobile Sidebar Overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div
        className={cn(
          "fixed lg:relative lg:translate-x-0 transition-transform duration-300 ease-in-out z-50",
          "w-80 h-full bg-white border-r border-gray-200 flex flex-col",
          sidebarOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Sidebar Header */}
        <div className="p-4 border-b border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center gap-2">
              <h1 className="text-xl font-semibold">Messages</h1>
              <Badge variant="secondary" className="bg-gray-100 text-gray-600">
                12
              </Badge>
            </div>
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-5 w-5" />
            </Button>
          </div>

          {/* Search */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <Input
              placeholder="Search messages"
              className="pl-10 bg-gray-50 border-gray-200"
            />
          </div>
        </div>

        {/* Conversations List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {conversations.map((conversation) => (
              <div
                key={conversation.id}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors",
                  conversation.isActive
                    ? "bg-green-500 text-white"
                    : "hover:bg-gray-50"
                )}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={conversation.avatar || "/placeholder.svg"}
                    />
                    <AvatarFallback>
                      {conversation.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {conversation.isOnline && (
                    <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 rounded-full border-2 border-white" />
                  )}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p
                      className={cn(
                        "font-medium truncate",
                        conversation.isActive ? "text-white" : "text-gray-900"
                      )}
                    >
                      {conversation.name}
                    </p>
                    <span
                      className={cn(
                        "text-sm",
                        conversation.isActive
                          ? "text-green-100"
                          : "text-gray-500"
                      )}
                    >
                      {conversation.timestamp}
                    </span>
                  </div>
                  <p
                    className={cn(
                      "text-sm truncate",
                      conversation.isActive ? "text-green-100" : "text-gray-600"
                    )}
                  >
                    {conversation.lastMessage}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollArea>
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setSidebarOpen(true)}
            >
              <Menu className="h-5 w-5" />
            </Button>

            <div className="relative">
              <Avatar className="h-10 w-10">
                <AvatarImage
                  src={activeConversation?.avatar || "/placeholder.svg"}
                />
                <AvatarFallback>SA</AvatarFallback>
              </Avatar>
              {activeConversation?.isOnline && (
                <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 rounded-full border-2 border-white" />
              )}
            </div>

            <div>
              <h2 className="font-semibold text-gray-900">
                {activeConversation?.name || "Sarah Adams"}
              </h2>
              <p className="text-sm text-green-600">Online</p>
            </div>
          </div>

          <Button variant="ghost" className="text-gray-600 hover:text-gray-900">
            🚫 Block
          </Button>
        </div>

        {/* Messages Area */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            {messages.map((message, index) => {
              const showAvatar =
                index === 0 || messages[index - 1].sender !== message.sender;
              const isLastFromSender =
                index === messages.length - 1 ||
                messages[index + 1].sender !== message.sender;

              return (
                <div
                  key={message.id}
                  className={cn(
                    "flex gap-2",
                    message.isOwn ? "justify-end" : "justify-start"
                  )}
                >
                  {!message.isOwn && (
                    <div className="w-8">
                      {showAvatar && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={message.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>
                            {message.sender
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  )}

                  <div
                    className={cn(
                      "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
                      message.isOwn
                        ? "bg-black text-white rounded-br-md"
                        : "bg-gray-100 text-gray-900 rounded-bl-md"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>

                  {message.isOwn && (
                    <div className="w-8">
                      {showAvatar && (
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={message.avatar || "/placeholder.svg"}
                          />
                          <AvatarFallback>You</AvatarFallback>
                        </Avatar>
                      )}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </ScrollArea>

        {/* Message Input */}
        <div className="p-4 border-t border-gray-200 bg-white">
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="icon" className="text-gray-500">
              <Paperclip className="h-5 w-5" />
            </Button>

            <div className="flex-1 relative">
              <Input
                placeholder="Type a message"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                className="pr-12 rounded-full border-gray-300 px-2 py-2 focus-visible:border-none"
              />
              <Button
                size="icon"
                onClick={handleSendMessage}
                disabled={!messageInput.trim()}
                className="absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 rounded-full"
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GroupMessage;
