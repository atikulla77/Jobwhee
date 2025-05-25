import { useState } from "react";
import { EyeCloseIcon } from "../../../public/icons/EyeCloseIcon";
import { EyeOpenIcon } from "../../../public/icons/eyeOpenIcon";
import { UserIcon } from "../../../public/icons/userIcon";

interface InputProps {
  width?: string;
  height?: string;
  type?: string;
  isIcon?: boolean;
  placeholder?: string;
  value?: string;
  disabled?: boolean;
  onChange?: any;
}

export const Input = ({
  width = "350px",
  height = "42px",
  type = "text",
  isIcon = true,
  placeholder = "",
  value,
  disabled = false,
  onChange,
}: InputProps) => {
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  return (
    <div style={{ width, height }} className="relative">
      <input
        type={type === "password" && !isPasswordVisible ? "password" : "text"}
        style={{ width, height }}
        className={`border border-[#AEB3BC] rounded-[12px] outline-[#18470D] relative ${
          isIcon ? "pl-8" : "pl-2"
        }`}
        placeholder={placeholder}
        value={value}
        disabled={disabled}
        onChange={onChange}
      />
      {isIcon && type === "text" && (
        <div className="absolute left-2 top-[13px]">
          <UserIcon />
        </div>
      )}
      {type === "password" && (
        <div
          className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-30"
          onClick={togglePasswordVisibility}
        >
          {isPasswordVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
        </div>
      )}
    </div>
  );
};
