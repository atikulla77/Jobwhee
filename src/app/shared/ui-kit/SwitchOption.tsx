import { useId } from "react";

interface SwitchOptionProps {
  enabled?: boolean;
  setEnabled?: React.Dispatch<React.SetStateAction<boolean>>;
  label?: string;
  labelPosition?: "left" | "right";
}
const SwitchOption: React.FC<SwitchOptionProps> = ({
  enabled,
  label,
  setEnabled,
  labelPosition = "right",
}) => {
  const id = useId();
  return (
    <label className="flex items-center cursor-pointer w-fit" htmlFor={id}>
      <input
        id={id}
        type="checkbox"
        checked={enabled}
        onChange={(e) => setEnabled?.(e.target.checked)}
        className="hidden"
      />
      <div className={`h-[24px] w-12 flex items-center px-[2px] rounded-full  ${enabled ? "bg-[#18470D]" : "bg-[#D0D4D9]"}`}>
        <div className={`bg-white w-[20px] h-[20px] rounded-full ${enabled ? "ml-auto" : ""}`}></div>
      </div>
      <span
        className={`text-[#545454] select-none ${
          labelPosition === "right" ? "ml-[8px]" : "order-[-1] mr-[8px]"
        }`}
      >
        {label}
      </span>
    </label>
  );
};

export default SwitchOption;
