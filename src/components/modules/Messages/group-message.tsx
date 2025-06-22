"use client";

import React, { useState, useRef, useEffect } from "react";

// Mock Avatar Component
const Avatar = ({
  src,
  alt,
  fallback,
}: {
  src?: string;
  alt?: string;
  fallback: string;
}) => (
  <div className="relative flex h-10 w-10 shrink-0 overflow-hidden rounded-full">
    {src ? (
      <img
        className="aspect-square h-full w-full object-cover"
        alt={alt}
        src={src}
      />
    ) : (
      <div className="flex h-full w-full items-center justify-center rounded-full bg-blue-200 text-blue-800 font-medium text-lg">
        {fallback}
      </div>
    )}
  </div>
);

// Mock Input Component
const Input = ({
  className,
  ...props
}: React.InputHTMLAttributes<HTMLInputElement>) => (
  <input
    className={`flex h-10 w-full rounded-md border border-gray-200 bg-gray-50 px-3 py-2 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:cursor-not-allowed disabled:opacity-50 ${className}`}
    {...props}
  />
);

// Mock Button Component
const Button = ({
  className,
  variant = "default",
  size = "default",
  children,
  ...props
}: React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "default" | "ghost" | "outline";
  size?: "default" | "icon" | "sm";
}) => {
  let variantClasses = "";
  switch (variant) {
    case "default":
      variantClasses = "bg-blue-500 text-white hover:bg-blue-600";
      break;
    case "ghost":
      variantClasses = "hover:bg-gray-100 text-gray-700";
      break;
    case "outline":
      variantClasses =
        "border border-gray-300 bg-white text-gray-700 hover:bg-gray-100";
      break;
  }
  let sizeClasses = "";
  switch (size) {
    case "default":
      sizeClasses = "h-10 px-4 py-2";
      break;
    case "icon":
      sizeClasses = "h-10 w-10 flex items-center justify-center";
      break;
    case "sm":
      sizeClasses = "h-9 rounded-md px-3";
      break;
  }
  return (
    <button
      className={`inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 ${variantClasses} ${sizeClasses} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

// Mock ScrollArea Component
const ScrollArea = ({
  className,
  children,
}: {
  className?: string;
  children: React.ReactNode;
}) => (
  <div className={`relative overflow-hidden ${className}`}>
    <div className="h-full w-full rounded-[inherit]">
      <div className="h-full w-full p-1 overflow-y-auto scrollbar-thin scrollbar-thumb-gray-300 scrollbar-track-gray-100">
        {children}
      </div>
    </div>
  </div>
);

// Data Types for messages and chats
interface Message {
  id: string;
  senderId: string;
  senderName: string;
  senderAvatar: string;
  content: string;
  timestamp: string;
  isMyMessage: boolean;
}

interface Chat {
  id: string;
  name: string;
  avatar: string;
  lastMessage: string;
  lastMessageTime: string;
  online: boolean;
  messages: Message[];
}

// Mock Data for the chat application
const MOCK_CURRENT_USER_ID = "user-1"; // Represents the current user (Sarah Adams)

const MOCK_CHATS: Chat[] = [
  {
    id: "chat-1",
    name: "Team Message",
    avatar: "https://placehold.co/40x40/FF5733/FFFFFF?text=TM",
    lastMessage: "Haha oh man 🔥",
    lastMessageTime: "12m",
    online: true,
    messages: [
      {
        id: "m1",
        senderId: "user-2",
        senderName: "Team Message",
        senderAvatar: "https://placehold.co/40x40/FF5733/FFFFFF?text=TM",
        content: "Hey team, anyone seen the new design mockups?",
        timestamp: "1h",
        isMyMessage: false,
      },
      {
        id: "m2",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "Yes, just reviewed them! They look great. 🔥",
        timestamp: "50m",
        isMyMessage: true,
      },
      {
        id: "m3",
        senderId: "user-2",
        senderName: "Team Message",
        senderAvatar: "https://placehold.co/40x40/FF5733/FFFFFF?text=TM",
        content: "Haha oh man 🔥",
        timestamp: "12m",
        isMyMessage: false,
      },
    ],
  },
  {
    id: "chat-2",
    name: "Sarah Adams",
    avatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
    lastMessage: "omg, this is amazing 🔥",
    lastMessageTime: "12m",
    online: true,
    messages: [
      {
        id: "m4",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "omg, this is amazing",
        timestamp: "15m",
        isMyMessage: true,
      },
      {
        id: "m5",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "perfect! ✅",
        timestamp: "14m",
        isMyMessage: true,
      },
      {
        id: "m6",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "Wow, this is really epic",
        timestamp: "13m",
        isMyMessage: true,
      },
      {
        id: "m7",
        senderId: "user-3",
        senderName: "Other User",
        senderAvatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=OU",
        content: "omg, this is amazing",
        timestamp: "12m",
        isMyMessage: false,
      },
      {
        id: "m8",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "just ideas for next time",
        timestamp: "10m",
        isMyMessage: true,
      },
      {
        id: "m9",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "I'll be there in 2 mins ⏰",
        timestamp: "9m",
        isMyMessage: true,
      },
      {
        id: "m10",
        senderId: "user-3",
        senderName: "Other User",
        senderAvatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=OU",
        content: "How are you?",
        timestamp: "5m",
        isMyMessage: false,
      },
      {
        id: "m11",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "wooohooo",
        timestamp: "4m",
        isMyMessage: true,
      },
      {
        id: "m12",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "Haha oh man",
        timestamp: "3m",
        isMyMessage: true,
      },
      {
        id: "m13",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "Haha that's terrifying 😱",
        timestamp: "2m",
        isMyMessage: true,
      },
      {
        id: "m14",
        senderId: "user-3",
        senderName: "Other User",
        senderAvatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=OU",
        content: "aww",
        timestamp: "1m",
        isMyMessage: false,
      },
      {
        id: "m15",
        senderId: "user-3",
        senderName: "Other User",
        senderAvatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=OU",
        content: "omg, this is amazing",
        timestamp: "30s",
        isMyMessage: false,
      },
      {
        id: "m16",
        senderId: "user-3",
        senderName: "Other User",
        senderAvatar: "https://placehold.co/40x40/33FF57/FFFFFF?text=OU",
        content: "wooohooo 🔥",
        timestamp: "10s",
        isMyMessage: false,
      },
    ],
  },
  {
    id: "chat-3",
    name: "Leslie Alexander",
    avatar: "https://placehold.co/40x40/5A33FF/FFFFFF?text=LA",
    lastMessage: "perfect!",
    lastMessageTime: "5h",
    online: false,
    messages: [
      {
        id: "m17",
        senderId: "user-4",
        senderName: "Leslie Alexander",
        senderAvatar: "https://placehold.co/40x40/5A33FF/FFFFFF?text=LA",
        content: "Hi, how are you doing?",
        timestamp: "6h",
        isMyMessage: false,
      },
      {
        id: "m18",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "I'm good, thanks! And you?",
        timestamp: "5h 30m",
        isMyMessage: true,
      },
      {
        id: "m19",
        senderId: "user-4",
        senderName: "Leslie Alexander",
        senderAvatar: "https://placehold.co/40x40/5A33FF/FFFFFF?text=LA",
        content: "perfect!",
        timestamp: "5h",
        isMyMessage: false,
      },
    ],
  },
  {
    id: "chat-4",
    name: "Cody Fisher",
    avatar: "https://placehold.co/40x40/FF33A3/FFFFFF?text=CF",
    lastMessage: "aww 🥰",
    lastMessageTime: "2d",
    online: false,
    messages: [
      {
        id: "m20",
        senderId: "user-5",
        senderName: "Cody Fisher",
        senderAvatar: "https://placehold.co/40x40/FF33A3/FFFFFF?text=CF",
        content: "Hey, long time no see!",
        timestamp: "3d",
        isMyMessage: false,
      },
      {
        id: "m21",
        senderId: "user-1",
        senderName: "Sarah Adams",
        senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA",
        content: "Yes! How have you been?",
        timestamp: "2d 12h",
        isMyMessage: true,
      },
      {
        id: "m22",
        senderId: "user-5",
        senderName: "Cody Fisher",
        senderAvatar: "https://placehold.co/40x40/FF33A3/FFFFFF?text=CF",
        content: "aww 🥰",
        timestamp: "2d",
        isMyMessage: false,
      },
    ],
  },
];

const GroupMessage: React.FC = () => {
  // State to manage the currently active chat, defaulting to the first chat
  const [activeChatId, setActiveChatId] = useState<string | null>(
    MOCK_CHATS[0].id
  );
  // State for the message input field
  const [messageInput, setMessageInput] = useState<string>("");
  // Ref for auto-scrolling to the latest message
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Find the active chat object from the mock data
  const activeChat = MOCK_CHATS.find((chat) => chat.id === activeChatId);

  // Effect to scroll to the bottom of the messages whenever messages update or active chat changes
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [activeChat?.messages.length, activeChatId]); // Dependency array: re-run when message count changes or a new chat is selected

  // Function to handle sending a new message
  const handleSendMessage = () => {
    if (messageInput.trim() === "" || !activeChat) return; // Prevent sending empty messages

    // Create a new message object
    const newMessage: Message = {
      id: `m-${Date.now()}`, // Unique ID based on timestamp
      senderId: MOCK_CURRENT_USER_ID,
      senderName: "Sarah Adams", // Hardcoded for current user in mock data
      senderAvatar: "https://placehold.co/40x40/0A84FF/FFFFFF?text=SA", // Hardcoded avatar
      content: messageInput,
      timestamp: "Just now", // Set timestamp to 'Just now'
      isMyMessage: true, // Mark as current user's message
    };

    // Find the active chat in the mock data array and add the new message to it
    const chatIndex = MOCK_CHATS.findIndex((chat) => chat.id === activeChatId);
    if (chatIndex > -1) {
      MOCK_CHATS[chatIndex].messages.push(newMessage); // Mutate the array directly for simplicity in mock
      MOCK_CHATS[chatIndex].lastMessage = messageInput; // Update last message
      MOCK_CHATS[chatIndex].lastMessageTime = "Just now"; // Update last message time
    }

    setMessageInput(""); // Clear the input field after sending

    // HACK: In a real application, you would manage state properly (e.g., using Redux, Zustand,
    // or a more robust `useState` for `MOCK_CHATS` or `activeChat.messages`).
    // This line forces a re-render to reflect the message addition.
    setActiveChatId(activeChatId);
  };

  return (
    // Main container for the chat application, taking full screen height and width
    <div className="flex h-screen w-full font-inter antialiased bg-gray-50 text-gray-800">
      <div className="flex w-full overflow-hidden">
        {/* Sidebar for Chat List */}
        {/* Hidden on small screens if a chat is active, otherwise takes full width */}
        {/* Shown as a fixed width sidebar on medium and larger screens */}
        <div
          className={`
          relative flex-col bg-white border-r border-gray-200
          md:flex md:w-80 lg:w-96
          ${activeChatId ? "hidden md:flex" : "flex w-full"}
          `}
        >
          {/* Messages Header in Sidebar */}
          <div className="p-4 border-b border-gray-200 flex items-center justify-between">
            <h2 className="text-2xl font-bold">Messages</h2>
            <span className="text-gray-500 text-lg">
              {MOCK_CHATS.length} {/* Displays the total number of chats */}
            </span>
          </div>

          {/* Search Input in Sidebar */}
          <div className="p-4">
            <Input
              type="text"
              placeholder="Search messages"
              className="w-full rounded-full bg-gray-100 border-none px-4 py-2 focus:ring-0 focus:border-0"
            />
          </div>

          {/* Scrollable Area for Chat List */}
          <ScrollArea className="flex-1 overflow-y-auto">
            <nav className="flex flex-col p-2">
              {MOCK_CHATS.map((chat) => (
                <div
                  key={chat.id}
                  onClick={() => setActiveChatId(chat.id)} // Set active chat on click
                  className={`
                    flex items-center gap-3 p-3 rounded-xl cursor-pointer transition-colors duration-200
                    ${
                      activeChatId === chat.id
                        ? "bg-blue-500 text-white shadow-lg"
                        : "hover:bg-gray-100"
                    }
                  `}
                >
                  <div className="relative">
                    <Avatar
                      src={chat.avatar}
                      alt={chat.name}
                      fallback={chat.name.charAt(0)}
                    />
                    {/* Online status indicator */}
                    {chat.online && (
                      <span className="absolute bottom-0 right-0 block h-3 w-3 rounded-full bg-green-500 ring-2 ring-white" />
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    {/* Chat name */}
                    <h3
                      className={`font-semibold text-lg truncate ${
                        activeChatId === chat.id
                          ? "text-white"
                          : "text-gray-900"
                      }`}
                    >
                      {chat.name}
                    </h3>
                    {/* Last message */}
                    <p
                      className={`text-sm truncate ${
                        activeChatId === chat.id
                          ? "text-blue-100"
                          : "text-gray-600"
                      }`}
                    >
                      {chat.lastMessage}
                    </p>
                  </div>
                  {/* Last message timestamp */}
                  <span
                    className={`text-xs ${
                      activeChatId === chat.id
                        ? "text-blue-200"
                        : "text-gray-500"
                    }`}
                  >
                    {chat.lastMessageTime}
                  </span>
                </div>
              ))}
            </nav>
          </ScrollArea>
        </div>

        {/* Chat Area (Main Content Panel) */}
        {activeChat ? (
          <div
            className={`flex flex-col flex-1 bg-gray-50 ${
              activeChatId ? "flex" : "hidden md:flex"
            }`}
          >
            {/* Chat Header for the active chat */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white shadow-sm">
              <div className="flex items-center gap-3">
                {/* Back button visible only on small screens */}
                <Button
                  variant="ghost"
                  size="icon"
                  className="md:hidden"
                  onClick={() => setActiveChatId(null)}
                >
                  {/* SVG for a back arrow icon */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
                    />
                  </svg>
                </Button>
                <Avatar
                  src={activeChat.avatar}
                  alt={activeChat.name}
                  fallback={activeChat.name.charAt(0)}
                />
                <div className="flex flex-col">
                  <h2 className="text-xl font-bold">{activeChat.name}</h2>
                  {activeChat.online ? (
                    <span className="text-sm text-green-500 flex items-center gap-1">
                      <span className="h-2 w-2 rounded-full bg-green-500" />{" "}
                      Online
                    </span>
                  ) : (
                    <span className="text-sm text-gray-500">Offline</span>
                  )}
                </div>
              </div>
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 text-red-600 border-red-200 hover:bg-red-50 hover:text-red-700"
              >
                Block
              </Button>
            </div>

            {/* Messages Display Area */}
            <ScrollArea className="flex-1 p-4 overflow-y-auto bg-gray-100">
              <div className="flex flex-col space-y-4">
                {activeChat.messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex items-start gap-3 ${
                      message.isMyMessage ? "justify-end" : "justify-start"
                    }`}
                  >
                    {/* Sender's avatar for incoming messages */}
                    {!message.isMyMessage && (
                      <Avatar
                        src={message.senderAvatar}
                        alt={message.senderName}
                        fallback={message.senderName.charAt(0)}
                      />
                    )}
                    {/* Message bubble */}
                    <div
                      className={`
                      max-w-[70%] p-3 rounded-xl shadow-sm relative
                      ${
                        message.isMyMessage
                          ? "bg-blue-500 text-white rounded-br-none" // Style for current user's messages
                          : "bg-white text-gray-900 rounded-bl-none" // Style for other users' messages
                      }
                      `}
                    >
                      <p className="text-sm">{message.content}</p>
                      <span
                        className={`text-xs mt-1 block ${
                          message.isMyMessage
                            ? "text-blue-100"
                            : "text-gray-500"
                        }`}
                      >
                        {message.timestamp}
                      </span>
                    </div>
                    {/* Current user's avatar for outgoing messages */}
                    {message.isMyMessage && (
                      <Avatar
                        src={message.senderAvatar}
                        alt={message.senderName}
                        fallback={message.senderName.charAt(0)}
                      />
                    )}
                  </div>
                ))}
                <div ref={messagesEndRef} />{" "}
                {/* Element to scroll into view for latest messages */}
              </div>
            </ScrollArea>

            {/* Message Input Area */}
            <div className="p-4 border-t border-gray-200 bg-white flex items-center gap-2">
              {/* Attachment button */}
              <Button
                variant="ghost"
                size="icon"
                className="text-gray-500 hover:text-gray-700"
              >
                {/* SVG for an attachment icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M18.375 12.739c.216.035.437.048.658.048 1.583 0 2.953-1.037 3.33-2.417a.75.75 0 0 0-.001-.001h-.006l-.003-.001V12c0 2.898-2.35 5.248-5.248 5.248H12V21l-4.781-4.781c-1.516-.913-2.679-2.385-3.418-4.103a.75.75 0 0 0-.001-.001h-.006l-.003-.001V12c0-2.898 2.35-5.248 5.248-5.248h4.502c.216.035.437.048.658.048 1.583 0 2.953-1.037 3.33-2.417a.75.75 0 0 0-.001-.001h-.006l-.003-.001"
                  />
                </svg>
              </Button>
              {/* Message input field */}
              <Input
                type="text"
                placeholder="Type a message..."
                className="flex-1 rounded-full px-4 py-2 bg-gray-100 border-none focus:ring-0 focus:border-0"
                value={messageInput}
                onChange={(e) => setMessageInput(e.target.value)}
                onKeyPress={(e) => {
                  if (e.key === "Enter") {
                    handleSendMessage();
                  }
                }}
              />
              {/* Send message button */}
              <Button
                onClick={handleSendMessage}
                size="icon"
                className="rounded-full bg-blue-500 hover:bg-blue-600"
              >
                {/* SVG for a send icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5"
                  />
                </svg>
              </Button>
            </div>
          </div>
        ) : (
          /* Placeholder displayed when no chat is selected on desktop (hidden on mobile) */
          <div className="hidden md:flex flex-1 items-center justify-center bg-gray-100 text-gray-500 text-xl">
            Select a chat to start messaging
          </div>
        )}
      </div>
    </div>
  );
};

export default GroupMessage;
