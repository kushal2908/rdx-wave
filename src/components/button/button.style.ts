export const sizes = {
  sm: "px-2 py-1 text-xs",
  md: "px-4 py-2 text-sm",
  lg: "px-6 py-3 text-lg",
  xl: "px-8 py-4 text-xl",
};
export const variantStyle = (color: string) => {
  return {
    solid: `bg-${color}-600 hover:bg-${color}-700 text-white`,
    light: `bg-${color}-100 hover:bg-${color}-200 text-${color}-700`,
    outline: `border border-${color}-500 hover:border-${color}-700 text-${color}-700`,
    link: `text-${color}-700 underline`,
  };
};

export const radiusStyle = {
  sm: "rounded-sm",
  md: "rounded-md",
  lg: "rounded-lg",
};
