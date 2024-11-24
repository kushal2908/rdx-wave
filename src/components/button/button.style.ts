export const baseClass = "font-medium active:scale-[0.98] transition-transform";
export const loadingClass = "rounded-full animate-spin";
export const disabledClass = "opacity-50 hover:cursor-not-allowed";
export const loadingSpinnerClass =
  "inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-current border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite]";

export const sizes = {
  sm: "px-[8px] py-1 text-xs",
  md: "px-[12px] py-2 text-sm",
  lg: "px-[16px] py-2 text-lg",
  xl: "px-[24px] py-3 text-xl",
};
export const colorStyle = {
  blue: {
    solid: "bg-blue-600 hover:bg-blue-700 text-white",
    light: "bg-blue-0 hover:bg-blue-100 text-blue-600",
    outline: "border border-blue-600 text-blue-600 hover:bg-blue-50",
    link: "text-blue-600 underline hover:text-blue-800 font-medium",
  },
  red: {
    solid: "bg-red-600 hover:bg-red-700 text-white",
    light: "bg-red-0 hover:bg-red-100 text-red-600",
    outline: "border border-red-600 text-red-600 hover:bg-red-50",
    link: "text-red-600 underline hover:text-red-800",
  },
  green: {
    solid: "bg-green-600 hover:bg-green-700 text-white",
    light: "bg-green-0 hover:bg-green-100 text-green-600",
    outline: "border border-green-600 text-green-600 hover:bg-green-50",
    link: "text-green-600 underline hover:text-green-800",
  },
  gray: {
    solid: "bg-gray-500 hover:bg-gray-600 text-white",
    light: "bg-gray-0 hover:bg-gray-100 text-gray-600",
    outline: "border border-gray-500 text-gray-500 hover:bg-gray-50",
    link: "text-gray-500 underline hover:text-gray-700",
  },
};

export const radiusStyle = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
  full: "rounded-full",
};
