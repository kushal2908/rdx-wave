// create a select component
import React, { useState } from "react";
import { cn } from "../../utils/helper";

interface SelectProps {
  label?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  className?: string;
  children?: React.ReactNode;
}

export default function Select({ label, size = "md", radius = "md", className, children }: SelectProps) {
  return (
    <div className="relative">
      <div className="flex items-baseline justify-between">
        {label && <label className="text-[15px] font-medium leading-[35px] text-white">{label}</label>}
      </div>
      <div className="relative">
        <select className="bg-white border border-gray-300 text-dark text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2">
          <option value="option1">Option 1</option>
          <option value="option2">Option 2</option>
          <option value="option3">Option 3</option>
        </select>
      </div>
    </div>
  );
}
