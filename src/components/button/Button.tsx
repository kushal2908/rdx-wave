import React from "react";
import { cn } from "../../utils/helper";
import { radiusStyle, sizes, variantStyle } from "./button.style";

type Props = {
  children?: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "light" | "outline" | "link";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  type?: "submit" | "reset" | "button";
  radius?: "sm" | "md" | "lg";
  color?: "red" | "green" | "blue" | "gray";
};

export default function Button({
  children,
  size,
  variant,
  onClick,
  disabled,
  loading,
  startIcon,
  endIcon,
  className,
  type,
  radius,
  color,
}: Props) {
  const sizeClass = sizes[size || "md"];
  const variantClass = variantStyle(color || "blue")[variant || "solid"];
  const radiusClass = radiusStyle[radius || "md"];

  return (
    <button
      className={cn(sizeClass, variantClass, className, radiusClass)}
      onClick={onClick}
      type={type || "button"}
      disabled={disabled || loading}
      aria-disabled={disabled || loading}
    >
      <div className="flex items-between justify-center gap-2">
        {startIcon}
        <span>{children}</span>
        {endIcon}
      </div>
    </button>
  );
}
