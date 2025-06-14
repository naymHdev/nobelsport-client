"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import { Search, Send, Phone, Video, Info } from "lucide-react";
import { cn } from "@/lib/utils";
import { RiAttachmentLine } from "react-icons/ri";

interface Contact {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  time: string;
  online: boolean;
  unread?: number;
}

interface Message {
  id: string;
  content: string;
  time: string;
  sent: boolean;
  reaction?: string;
}

const contacts: Contact[] = [
  {
    id: "1",
    name: "Ronald Richards",
    avatar: "https://shorturl.at/Ge8HU",
    lastMessage: "haha oh man 🔥",
    time: "12m",
    online: false,
  },
  {
    id: "2",
    name: "Sarah Adams",
    avatar: "https://shorturl.at/Ge8HU",
    lastMessage: "omg, this is amazing 🔥",
    time: "1:20",
    online: true,
  },
  {
    id: "3",
    name: "Leslie Alexander",
    avatar: "https://shorturl.at/Ge8HU",
    lastMessage: "perfect!",
    time: "5h",
    online: false,
  },
  {
    id: "4",
    name: "Cody Fisher",
    avatar: "https://shorturl.at/Ge8HU",
    lastMessage: "aww 😊",
    time: "2d",
    online: false,
  },
];

const messages: Message[] = [
  {
    id: "1",
    content: "omg, this is amazing",
    time: "2:30 PM",
    sent: false,
  },
  {
    id: "2",
    content: "perfect! ✅",
    time: "2:31 PM",
    sent: false,
  },
  {
    id: "3",
    content: "Wow, this is really epic",
    time: "2:32 PM",
    sent: false,
  },
  {
    id: "4",
    content: "How are you?",
    time: "2:35 PM",
    sent: true,
  },
  {
    id: "5",
    content: "just ideas for next time",
    time: "2:40 PM",
    sent: false,
  },
  {
    id: "6",
    content: "I'll be there in 2 mins ⏰",
    time: "2:41 PM",
    sent: false,
  },
  {
    id: "7",
    content: "woohoooo",
    time: "2:45 PM",
    sent: true,
  },
  {
    id: "8",
    content: "Haha oh man",
    time: "2:46 PM",
    sent: true,
  },
  {
    id: "9",
    content: "Haha that's terrifying 😱",
    time: "2:47 PM",
    sent: true,
  },
  {
    id: "10",
    content: "aww",
    time: "2:50 PM",
    sent: false,
  },
  {
    id: "11",
    content: "omg, this is amazing",
    time: "2:51 PM",
    sent: false,
  },
  {
    id: "12",
    content: "woohoooo 🔥",
    time: "2:52 PM",
    sent: false,
  },
  {
    id: "13",
    content: "woohoooo",
    time: "2:55 PM",
    sent: true,
  },
  {
    id: "14",
    content: "Haha oh man",
    time: "2:56 PM",
    sent: true,
  },
  {
    id: "15",
    content: "Haha that's terrifying 😱",
    time: "2:57 PM",
    sent: true,
  },
];

export default function MessagingApp() {
  const [selectedContact, setSelectedContact] = useState(contacts[1]);
  const [newMessage, setNewMessage] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleSendMessage = () => {
    if (newMessage.trim()) {
      // Add message logic here
      setNewMessage("");
    }
  };

  return (
    <div className="flex min-h-screen bg-background mt-20">
      {/* Sidebar */}
      <motion.div
        initial={{ x: -300 }}
        animate={{ x: 0 }}
        className={cn(
          "w-80 border-r bg-card flex flex-col",
          "max-md:absolute max-md:z-50 max-md:h-full max-md:shadow-lg",
          !isMobileMenuOpen && "max-md:hidden"
        )}
      >
        {/* Header */}
        <div className="p-4 border-b">
          <div className="flex items-center justify-between mb-4">
            <h1 className="text-xl font-semibold">Messages</h1>
            <Badge variant="secondary" className="text-xs">
              12
            </Badge>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
            <Input placeholder="Search messages" className="pl-10" />
          </div>
        </div>

        {/* Contacts List */}
        <ScrollArea className="flex-1">
          <div className="p-2">
            {contacts.map((contact, index) => (
              <motion.div
                key={contact.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={cn(
                  "flex items-center gap-3 p-3 rounded-lg cursor-pointer transition-colors hover:bg-accent",
                  selectedContact.id === contact.id &&
                    "bg-primary text-primary-foreground hover:bg-primary/90"
                )}
                onClick={() => {
                  setSelectedContact(contact);
                  setIsMobileMenuOpen(false);
                }}
              >
                <div className="relative">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src={contact.avatar || "/placeholder.svg"} />
                    <AvatarFallback>
                      {contact.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  {contact.online && (
                    <div className="absolute -bottom-1 -right-1 h-4 w-4 bg-green-500 border-2 border-background rounded-full" />
                  )}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <p className="font-medium truncate">{contact.name}</p>
                    <span className="text-xs text-muted-foreground">
                      {contact.time}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground truncate">
                    {contact.lastMessage}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </ScrollArea>
      </motion.div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        {/* Chat Header */}
        <motion.div
          initial={{ y: -50 }}
          animate={{ y: 0 }}
          className="p-4 border-b bg-card flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <Button
              variant="ghost"
              size="sm"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(true)}
            >
              ☰
            </Button>
            <div className="relative">
              <Avatar className="h-9 lg:w-10 w-9 lg:h-10">
                <AvatarImage src="https://shorturl.at/Ge8HU" />
                <AvatarFallback>
                  {selectedContact.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>
              {selectedContact.online && (
                <div className="absolute -bottom-1 -right-1 h-3 w-3 bg-green-500 border-2 border-background rounded-full" />
              )}
            </div>
            <div>
              <h2 className="font-semibold text-xs md:text-base">
                {selectedContact.name}
              </h2>
              <p className="text-xs md:text-sm text-muted-foreground">
                {selectedContact.online ? "Online" : "Offline"}
              </p>
            </div>
          </div>
          <div className="flex items-center lg:gap-2">
            <Button variant="ghost" size="sm">
              <Phone className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Video className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Info className="h-4 w-4" />
            </Button>
            <Button variant="ghost" size="sm">
              Block
            </Button>
          </div>
        </motion.div>

        {/* Messages */}
        <ScrollArea className="flex-1 p-4">
          <div className="space-y-4">
            <AnimatePresence>
              {messages.map((message, index) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className={cn(
                    "flex gap-3",
                    message.sent ? "justify-end" : "justify-start"
                  )}
                >
                  {!message.sent && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="https://shorturl.at/Ge8HU" />
                      <AvatarFallback>
                        {selectedContact.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                  )}
                  <div
                    className={cn(
                      "max-w-xs lg:max-w-md px-4 py-2 rounded-2xl",
                      message.sent
                        ? "bg-primary text-primary-foreground rounded-br-md"
                        : "bg-muted rounded-bl-md"
                    )}
                  >
                    <p className="text-sm">{message.content}</p>
                  </div>
                  {message.sent && (
                    <Avatar className="h-8 w-8 mt-1">
                      <AvatarImage src="https://shorturl.at/bRLOC" />
                      <AvatarFallback>You</AvatarFallback>
                    </Avatar>
                  )}
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </ScrollArea>

        {/* Message Input */}
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

      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/50 z-40 md:hidden"
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </div>
  );
}
