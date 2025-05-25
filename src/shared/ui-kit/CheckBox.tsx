import { useId } from "react";
import { WhiteCheckIcon } from "../../../public/icons/WhiteCheckIcon";

interface CheckBoxProps {
  checked: boolean;
  setChecked: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
  labelPosition?: "left" | "right";
}
const CheckBox: React.FC<CheckBoxProps> = ({ checked, label, setChecked, labelPosition="right" }) => {
  const id = useId();
  return (
    <label className="flex items-center cursor-pointer w-fit" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked?.(e.target.checked)}
        className="hidden"
      />
      <div
        className={`min-w-[24px] h-[24px] flex items-center justify-center border rounded-[6px] ${
          checked ? "bg-[#18470D] border-[#18470D]" : "bg-none border-[#AEB3BC]"
        }`}
      >
        {checked && <WhiteCheckIcon />}
      </div>
      <span className={`text-gray-800 select-none ${labelPosition === "right" ? "ml-[8px]" : "order-[-1] mr-[8px]"}`}>{label}</span>
    </label>
  );
};

export default CheckBox;
