import React from "react";
import { cn } from "../../utils/helper";

interface Props {
  children?: React.ReactNode;
  className?: string;
  isElevated?: boolean;
}

export default function Card({ children, isElevated, className }: Props) {
  return (
    <div
      className={cn(
        "bg-white p-4 rounded-md  border border-gray-300 transition-all duration-100",
        isElevated && "hover:shadow-md",
        className
      )}
    >
      <div>{children}</div>
    </div>
  );
}
