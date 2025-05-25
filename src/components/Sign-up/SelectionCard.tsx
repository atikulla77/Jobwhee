import Image from "next/image";

type SelectionCardProps = {
  selected: boolean;
  imgSrc: string;
  text: string;
};

const SelectionCard: React.FC<SelectionCardProps> = ({
  selected,
  imgSrc,
  text,
}) => {
  return (
    <div
      className={`flex justify-between sm:w-[282px] sm:h-[60px] lg:w-[420px] lg:h-[90px] w-[274px] h-[66px] ${
        selected ? "sm:border-[#000]" : "border-[#C8C8C8]"
      } border-[1px] border-[#C8C8C8] rounded-[12px] sm:rounded-[10px] lg:rounded-[16px] cursor-pointer `}
    >
      <div className="flex py-[10px] sm:pt-[11px] lg:py-[17px] lg:pl-[21px] sm:pl-[13px] pl-[15px] items-center ">
        <div
          className={`min-w-[18px] sm:min-w-[16px] sm:w-[16px] sm:h-[16px] lg:min-h-[24px] lg:min-w-[24px] lg:w-[24px] lg:h-[24px] w-[18px] h-[18px] rounded-[50%]  ${
            selected
              ? "border-[5px] border-[#18470D]"
              : "border-[2px] border-[#AEB3BC]"
          } cursor-pointer"`}
        ></div>
        <span className="text-black ml-[12px] sm:ml-[13px] font-medium lg:text-[18px] lg:ml-[22px] 2xl:ml-[22px] text-[14px] whitespace-pre-line">
          {text}
        </span>
      </div>
      <Image
        className="w-[36px] h-[36px] ml-auto sm:w-[52px] sm:h-[52px] 2xl:mt-[5px] lg:w-[80px] lg:h-[80px] mr-[8px] lg:mr-[3px] mt-[14px] sm:mr-[2px] sm:mt-[4px]"
        src={imgSrc}
        width={57}
        height={57}
        alt="card-icon"
      />
    </div>
  );
};

export default SelectionCard;
