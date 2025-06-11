"use client";

import * as React from "react";
import { Input } from "../input";
import { cn } from "@/lib/utils";

export interface NSInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  name?: string;
  placeholder?: string;
  className?: string;
}

const NSInput = React.forwardRef<HTMLInputElement, NSInputProps>(
  ({ placeholder, name, className, ...props }, ref) => {
    return (
      <Input
        ref={ref}
        name={name}
        placeholder={placeholder}
        className={cn(
          "w-full px-3 py-5 focus:outline-none focus-visible:ring-0 focus-visible:border-neutral-200",
          className
        )}
        {...props}
      />
    );
  }
);

NSInput.displayName = "NSInput";

export default NSInput;
