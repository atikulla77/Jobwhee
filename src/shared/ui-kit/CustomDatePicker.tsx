import React, { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getYear, getMonth } from "date-fns";
import Select from "react-select";
import { enGB } from "date-fns/locale";
import { BlackArrow } from "../../../public/icons/BlackArrow";
import { GreenArrow } from "../../../public/icons/GreenArrow";
import { UserIcon } from "../../../public/icons/userIcon";
import Image from "next/image";

interface DatePickerProps {
  onChangeDate: (date: Date | null) => void;
  milestoneId?: number;
  milestoneDate?: Date | null;
  isIcon: boolean;
  width?: string;
  height?: string;
}

const CustomDatePicker: React.FC<DatePickerProps> = ({
  onChangeDate,
  milestoneId,
  milestoneDate,
  isIcon = false,
  width = "350px",
  height = "42px",
}) => {
  const [dueDate, setDueDate] = useState<Date | null>(null);
  const [isCalendarOpen, setIsCalendarOpen] = useState(false);
  const years = Array.from({ length: 26 }, (_, i) => {
    const year = getYear(new Date()) + i;
    return { value: year };
  });
  const defaultYear = { value: 2025, label: "2025" };

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const customStyles = {
    control: (base: any, state: any) => ({
      ...base,
      width: "93px",
      height: "42px",
      borderRadius: "12px",
      border: `1px solid ${
        state.menuIsOpen ? "#18470D !important" : "#AEB3BC !important"
      }`,
      outline: "none",
      fontSize: "16px",
      backgroundImage: "none",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      boxShadow: "none",
      ":focus": {
        outline: "none",
        borderColor: "#AEB3BC",
      },
      ":focus-visible": {
        outline: "none",
        borderColor: "#AEB3BC",
      },
    }),
    menu: (base: any) => ({
      ...base,
      maxHeight: "300px",
      borderRadius: "12px",
      overflow: "hidden",
    }),
    menuList: (base: any) => ({
      ...base,
      borderRadius: "12px",
      "::-webkit-scrollbar": {
        width: "4px",
        height: "0px",
      },
      "::-webkit-scrollbar-track": {
        background: "#f1f1f1",
      },
      "::-webkit-scrollbar-thumb": {
        borderRadius: "20px",
        background: "#888",
      },
      "::-webkit-scrollbar-thumb:hover": {
        background: "#555",
      },
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isSelected ? "#F5FFD3" : "white",
      color: state.isSelected ? "black" : "#8B939F",
      padding: "10px",
      ":hover": {
        background: "#F5FFD3",
      },
    }),
    input: (base: any) => ({
      ...base,
      width: "0px",
      opacity: 0,
      padding: 0,
      margin: 0,
    }),
    singleValue: (base: any) => ({
      ...base,
      width: "fit-content",
      fontSize: "14px",
    }),
  };

  const customStylesMonths = {
    ...customStyles,
    control: (base: any, state: any) => ({
      ...base,
      width: "125px",
      height: "42px",
      borderRadius: "12px",
      border: `1px solid ${
        state.menuIsOpen ? "#18470D !important" : "#AEB3BC !important"
      }`,
      outline: "none",
      fontSize: "16px",
      backgroundImage: "none",
      appearance: "none",
      WebkitAppearance: "none",
      MozAppearance: "none",
      boxShadow: "none",
      ":focus": {
        outline: "none",
        borderColor: "#AEB3BC",
      },
      ":focus-visible": {
        outline: "none",
        borderColor: "#AEB3BC",
      },
    }),
  };

  return (
    <div
      className={`border-[1px] border-[#AEB3BC] rounded-[12px] h-[${height}] p-[8px] flex items-center w-[${width}] max-w-[${width}] relative ${
        isCalendarOpen ? " border-[#18470D] blue-shadow" : ""
      }`}
    >
      {isIcon && (
        <div className="absolute right-2 top-0 h-full flex items-center">
          <Image
            src={"/images/icon-images/calendar.png"}
            width={16}
            height={16}
            alt=""
            className=""
          />
        </div>
      )}
      <div className="flex flex-col items-center space-y-4 w-full h-[48px]">
        <DatePicker
          placeholderText="00/00/00"
          selected={milestoneDate}
          onChange={(date) => {
            if (date) {
              setDueDate(new Date(date));
              onChangeDate(new Date(date));
            } else {
              setDueDate(null);
            }
          }}
          onKeyDown={(e) => {
            e.preventDefault();
          }}
          onCalendarOpen={() => setIsCalendarOpen(true)}
          onCalendarClose={() => setIsCalendarOpen(false)}
          locale={enGB}
          dateFormat="dd/MM/yyyy"
          className={`focus:outline-none outline-none flex-grow text-[#8B939F] md:text-[16px] text-[14px] block md:my-[12px] my-[14px] w-full placeholder:text-[#8B939F]`}
          calendarClassName="translate-x-[8px] bg-white border border-gray-200 !rounded-[12px] p-[12px_25px] w-full max-w-[350px] min-h-[350px] !flex flex-col items-center shadow-[2px_2px_5px_0px_rgba(0,0,0,0.1)]"
          dayClassName={(date) =>
            "max-w-[25px] h-[25px] !m-0 text-[13px] hover:!bg-[#F0F1F4] rounded-[4px] hover:text-red-200   flex items-center justify-center"
          }
          todayButton="Today"
          renderCustomHeader={({
            date,
            changeYear,
            changeMonth,
            decreaseMonth,
            increaseMonth,
            prevMonthButtonDisabled,
            nextMonthButtonDisabled,
          }) => (
            <div className="flex justify-between items-center p-2 pt-0 pb-[5px] rounded-t-lg">
              <button
                onClick={decreaseMonth}
                disabled={prevMonthButtonDisabled}
                className="mr-[3px] cursor-pointer"
              >
                <GreenArrow />
              </button>

              <div className="flex items-center space-x-2">
                <div className="relative">
                  <Select
                    options={years.map((year) => ({
                      value: year.value,
                      label: String(year.value),
                    }))}
                    styles={customStyles}
                    onChange={(selectedOption: any) =>
                      changeYear(selectedOption?.value)
                    }
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    defaultValue={defaultYear}
                  />

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <BlackArrow />
                  </div>
                </div>

                <div className="relative">
                  <Select
                    options={months.map((month, index) => ({
                      value: month,
                      label: month,
                    }))}
                    styles={customStylesMonths}
                    onChange={(selectedOption: any) =>
                      changeMonth(months.indexOf(selectedOption?.value))
                    }
                    components={{
                      DropdownIndicator: () => null,
                      IndicatorSeparator: () => null,
                    }}
                    defaultValue={{
                      value: months[getMonth(date)],
                      label: months[getMonth(date)],
                    }}
                  />

                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <BlackArrow />
                  </div>
                </div>
              </div>

              <button
                onClick={increaseMonth}
                disabled={nextMonthButtonDisabled}
                className="ml-[3px] rotate-180 cursor-pointer"
              >
                <GreenArrow />
              </button>
            </div>
          )}
        />
      </div>
    </div>
  );
};

export default CustomDatePicker;
