import clsx from "clsx";
import { ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * A version of `clsx` that uses Tailwind's `twMerge` under the hood.
 * This is useful for when you want to use `clsx` but still take advantage
 * of Tailwind's automatic class merging.
 *
 * @example
 * import { cn } from "@app/utils/helper";
 *
 * const classes = cn("bg-red-500", "px-4", "text-white");
 * // classes is now "bg-red-500 px-4 text-white"
 */
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args));
}
