import Image from 'next/image';
import React from 'react';

interface TermCardProps {
  title: string;
  cardData: {
    title: string;
  }[];
  iconSrc: string;
  selected: boolean;
  OnSelectingOption: (id: number) => void;
  selectedOption: number;
}

const TermCardComponent: React.FC<TermCardProps> = ({
  title,
  cardData,
  iconSrc,
  selected,
  OnSelectingOption,
  selectedOption,
}) => {
  const handleRadioChange = (index: number) => {
    OnSelectingOption(index);
  };

  return (
    <div
      className={
        'pb-[9px] pt-[6px] w-[335px] 2xl:w-[282px] sm:w-[335px] lg:w-[254px] h-[164px] rounded-[16px] border lg:pl-[10px] lg:pb-[11px] lg:pt-[9px] 2xl:py-[10px] px-[15px] lg:pr-[14px] 2xl:pl-[11px] 2xl:pr-[13px] cursor-pointer' +
        (selected ? ' border-[#000000] ' : 'border-[#C8C8C8]')
      }
    >
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <div
            className={`min-w-[24px] min-h-[24px] max-w-[24px] lg:w-[24px] lg:h-[24px] rounded-[50%]  ${
              selected
                ? 'border-[5px] border-[#18470D]'
                : 'border-[2px] border-[#AEB3BC]'
            } cursor-pointer`}
          ></div>
          <span className="text-nowrap ml-[14px] mt-[5px] sm:mt-0 sm:ml-[13px] sm:mt-[6px] 2xl:ml-[8px] sm:text-[16px] lg:mt-[2px] 2xl:mt-0 2xl:text-[18px] text-[#000] font-medium">
            {title}
          </span>
        </div>
        <Image
          className="ml-auto sm:ml-[11px] w-[30px] h-[30px] lg:w-[40px] lg:h-[40px] object-contain"
          src={iconSrc}
          alt="card-icon"
          unoptimized
          width={40}
          height={40}
        />
      </div>
      <div className="pl-[48px] mt-[25px] sm:pl-[34px] lg:pl-[41px] flex flex-col gap-[10px] sm:mt-[24px] lg:mt-[17px] 2xl:pl-[30px] 2xl:mt-[15px]">
        {
          <ul className="flex flex-col gap-y-[10px]">
            {cardData.map((option, i) => (
              <li
                key={i}
                className="flex items-center gap-[8px] text-[14px] 2xl:text-[16px] text-[#545454]"
              >
                <div className="relative">
                  <input
                    type="radio"
                    name="reason"
                    checked={selectedOption === i && selected}
                    onChange={() => handleRadioChange(i)}
                    className="absolute h-[24px] w-[24px] cursor-pointer opacity-0"
                  />
                  <div
                    className={`flex h-[24px] w-[24px] items-center justify-center rounded-full ${
                      selectedOption === i && selected
                        ? 'bg-[#18470D]'
                        : 'border-2 border-[#AEB3BC]'
                    }`}
                  >
                    {selectedOption === i && selected && (
                      <div className="h-[12px] w-[12px] rounded-full bg-white"></div>
                    )}
                  </div>
                </div>
                <span
                  onClick={() => handleRadioChange(i)}
                  className="cursor-pointer"
                >
                  {option.title}
                </span>
              </li>
            ))}
          </ul>
        }
      </div>
    </div>
  );
};
export const TermCard = React.memo(
  TermCardComponent,
  (prevProps, nextProps) => {
    return (
      prevProps.title === nextProps.title &&
      prevProps.iconSrc === nextProps.iconSrc &&
      prevProps.selected === nextProps.selected &&
      prevProps.OnSelectingOption === nextProps.OnSelectingOption &&
      prevProps.selectedOption === nextProps.selectedOption &&
      JSON.stringify(prevProps.cardData) === JSON.stringify(nextProps.cardData)
    );
  }
);