interface RadioButtonsProps {
  selectedOption: number;
  setSelectedOption: React.Dispatch<React.SetStateAction<number>>;
  radioButtonsData?: string[];
  radioButtonsDescription?: string[];
  labelPosition?: "left" | "right";
  gapy?: string;
}

const RadioButtons: React.FC<RadioButtonsProps> = ({
  selectedOption,
  setSelectedOption,
  radioButtonsData,
  labelPosition = "right",
  radioButtonsDescription,
  gapy = "gap-y-[10px]",
}) => {
  const handleRadioChange = (index: number) => {
    setSelectedOption(index);
  };

  const options = radioButtonsData?.length ? radioButtonsData : ["", ""];

  return (
    <ul className={`flex flex-col ${gapy} max-w-fit`}>
      {options.map((option, i) => (
        <li
          key={i}
          className={`${selectedOption === i ? "" : "opacity-[32%]"}`}
          onClick={() => handleRadioChange(i)}
        >
          <div
            className={`flex items-center gap-[8px] text-[16px] text-[#545454] ${
              labelPosition !== "right" ? "justify-end" : ""
            }`}
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
              }  text-[#000]`}
            >
              {option}
            </span>
          </div>

          <p
            className={`${
              radioButtonsDescription ? "" : "hidden"
            } text-[#545454] pt-[12px]`}
          >
            {radioButtonsDescription?.[i]}
          </p>
        </li>
      ))}
    </ul>
  );
};

export default RadioButtons;
