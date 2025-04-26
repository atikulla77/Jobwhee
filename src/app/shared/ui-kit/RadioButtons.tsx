interface RadioButtonsProps {
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  radioButtonsData?: string[];
  labelPosition?: "left" | "right";
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  selectedOption,
  setSelectedOption,
  radioButtonsData,
  labelPosition = "right",
}) => {
  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  const options = radioButtonsData?.length
    ? radioButtonsData
    : ["", ""];

  return (
    <ul className="flex flex-col gap-y-[10px] max-w-fit">
      {options.map((option, i) => (
        <li
          key={i}
          className={`flex items-center gap-[8px] text-[16px] text-[#545454] ${
            labelPosition !== "right" ? "justify-end" : ""
          }`}
          onClick={() => handleRadioChange(i)}
        >
          <div className="relative">
            <input
              type="radio"
              name="reason"
              checked={selectedOption === i}
              className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
              readOnly
            />
            <div
              className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                selectedOption === i
                  ? "bg-[#18470D]"
                  : "border-2 border-[#AEB3BC]"
              }`}
            >
              {selectedOption === i && (
                <div className="h-[12px] w-[12px] rounded-full bg-white"></div>
              )}
            </div>
          </div>
          <span
            className={`cursor-pointer ${
              labelPosition !== "right" ? "order-[-1]" : ""
            }`}
          >
            {option}
          </span>
        </li>
      ))}
    </ul>
  );
};


export default RadioButtons