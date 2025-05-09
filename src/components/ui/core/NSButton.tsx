import React from "react";
import { cn } from "@/lib/utils";

type NSButtonProps = {
  children: React.ReactNode;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  className?: string;
};

const NSButton: React.FC<NSButtonProps> = ({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}) => {
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={cn(
        "px-6 py-2 rounded-full font-semibold transition-all duration-200 hover:cursor-pointer",
        "bg-green-600 text-white  disabled:bg-gray-400 disabled:cursor-not-allowed",
        className
      )}
    >
      {children}
    </button>
  );
};

export default NSButton;
