import { ReactNode } from "react";

interface NSContainerProps {
  children: ReactNode;
  className?: string;
}

const NSContainer = ({ children, className = "" }: NSContainerProps) => {
  return (
    <div className={`container mx-auto px-5 border border-red-500 ${className}`}>{children}</div>
  );
};

export default NSContainer;
