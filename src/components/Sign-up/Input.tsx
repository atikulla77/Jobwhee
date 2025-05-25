import { useState } from "react";
import { EyeIcon } from "../../../public/icons/EyeIcon";
import { EyeIconClosed } from "../../../public/icons/EyeIconClosed";

type InputProps = {
  name: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  label: string;
  icon?: React.ReactNode;
  type?: string;
  inValid?: boolean;
  id?: string;
  disabled?: boolean;
};

const Input: React.FC<InputProps> = ({
  name,
  value,
  onChange,
  placeholder,
  label,
  icon,
  type = "text",
  inValid,
  id = "",
  disabled,
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="w-full">
      <label
        className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]"
        htmlFor={id}
      >
        {label}
      </label>

      <div
        className={
          "border-[2px] mt-[8px] sm:mt-[5px] h-[42px] 2xl:mt-[8px] rounded-[8px] flex items-center p-[9px_8px] " +
          (inValid ? "border-[#DD331D]" : "border-[#AEB3BC]")
        }
      >
        {icon && <div className="mr-[10px]">{icon}</div>}
        <input
          id={id}
          name={name}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full h-[24px] placeholder:text-[#8B939F] 2xl:placeholder:text-[16px] placeholder:text-[14px] focus:outline-0 text-[#8B939F]"
          type={type === "password" && !showPassword ? "password" : "text"}
          required
          disabled={disabled}
        />
        {type === "password" && (
          <div
            className="cursor-pointer"
            onClick={() => setShowPassword(!showPassword)}
          >
            {showPassword ? <EyeIcon /> : <EyeIconClosed />}
          </div>
        )}
      </div>
    </div>
  );
};

export default Input;
