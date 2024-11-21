import React from "react";
import { cn } from "../../utils/helper";
import { baseClass, colorStyle, disabledClass, loadingSpinnerClass, radiusStyle, sizes } from "./button.style";

type ButtonPropsType = React.ComponentPropsWithoutRef<"button">;

interface IButton extends ButtonPropsType {
  size?: "sm" | "md" | "lg" | "xl";
  variant?: "solid" | "light" | "outline" | "link";
  type?: "submit" | "reset" | "button";
  radius?: "sm" | "md" | "lg" | "full";
  color?: "red" | "green" | "blue" | "gray";
  onClick?: () => void;
  disabled?: boolean;
  loading?: boolean;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  className?: string;
  children?: React.ReactNode;
  fullWidth?: boolean;
}

export default function Button({
  size = "md",
  variant = "solid",
  radius = "md",
  color = "blue",
  type,
  onClick,
  disabled,
  loading,
  startIcon,
  endIcon,
  className,
  children,
  fullWidth = false,
}: IButton) {
  const sizeClass = sizes[size];
  const colorClass = colorStyle[color || "blue"][variant || "solid"];
  const radiusClass = radiusStyle[radius];

  return (
    <>
      <button
        className={cn(
          baseClass,
          sizeClass,
          colorClass,
          radiusClass,
          (disabled || loading) && disabledClass,
          fullWidth && "w-full",
          className
        )}
        onClick={disabled || loading ? undefined : onClick}
        type={type}
        disabled={disabled || loading}
        data-loading={loading}
        aria-busy={loading || disabled}
        aria-disabled={disabled || loading}
        aria-label={children?.toString()}
      >
        <div className="flex justify-center items-center gap-2">
          {loading && <div className={cn(loadingSpinnerClass)} />}
          {startIcon && <div>{startIcon}</div>}
          {children && <div>{children}</div>}
          {endIcon && <div>{endIcon}</div>}
        </div>
      </button>
    </>
  );
}
