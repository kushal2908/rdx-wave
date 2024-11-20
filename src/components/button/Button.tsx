import React from "react";
import { cn } from "../../utils/helper";
import { radiusStyle, sizes, variantStyle } from "./button.style";

type Props = {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "light" | "outline" | "link";
  type?: "submit" | "reset" | "button";
  radius?: "sm" | "md" | "lg";
  color?: "red" | "green" | "blue" | "gray";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
};

export default function Button({
  size = "md",
  variant = "solid",
  type = "button",
  radius = "md",
  color = "blue",
  onClick,
  disabled,
  loading,
  startIcon,
  endIcon,
  className,
  children,
}: Props) {
  const sizeClass = sizes[size];
  const variantClass = variantStyle(color)[variant];
  const radiusClass = radiusStyle[radius];

  return (
    <button
      className={cn(sizeClass, variantClass, radiusClass, className)}
      onClick={onClick}
      type={type}
      disabled={disabled || loading}
    >
      <div className="flex justify-between items-center gap-2">
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </div>
    </button>
  );
}
