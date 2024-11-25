import * as Form from "@radix-ui/react-form";
import { cn } from "../../utils/helper";
import { baseStyle, radiusStyle, sizesStyle } from "./input.style";
import { useEffect, useState } from "react";
import PasswordToggle from "./PasswordToggle";

type InputProps = {
  label?: string;
  type?: string;
  size?: "sm" | "md" | "lg" | "xl";
  radius?: "sm" | "md" | "lg" | "full";
  placeholder?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  value?: string;
  className?: string;
};

export default function Input({ label, type = "text", size = "md", radius = "md", className, ...rest }: InputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [inputType, setInputType] = useState(type);

  useEffect(() => {
    if (type === "password") {
      setInputType(showPassword ? "text" : "password");
    }
  }, [showPassword]);
  return (
    <div>
      <div className="flex items-baseline justify-between">
        {label && <Form.Label className="text-[15px] font-medium leading-[35px] text-white">{label}</Form.Label>}
      </div>
      <div className="relative">
        <input className={cn(baseStyle, sizesStyle[size], radiusStyle[radius], className)} type={inputType} {...rest} />
        {type === "password" && <PasswordToggle showPassword={showPassword} setShowPassword={setShowPassword} />}
      </div>
    </div>
  );
}
