import React, {useState} from 'react';
import {ArrowIcon} from '../../../../../public/icons/ArrowIcon copy';


interface MonthSelectorProps {
    title: string;
    value: string;
    onChange: (value: string) => void;
}

const MonthSelector: React.FC<MonthSelectorProps> = ({title, value, onChange}) => {


    const handleMonthChange = (event: any) => {
        onChange(event.target.value);
    };

    return (
        <div className="md:flex justify-between ">
            <div className="max-w-[338px] lg:max-w-[370px] w-full">
                <p>Start Month</p>

                <div className="flex flex-col mb-[20px]">
                    <div className="relative flex-1">
                        <select
                            value={value}
                            onChange={handleMonthChange}
                            className="text-[#8B939F] w-[252px] xl:w-[370px] p-2 border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 placeholder-[#8B939F] placeholder:text-[16px] placeholder:leading-[24px] appearance-none pr-10 bg-white cursor-pointer"
                        >
                            <option value="" disabled>
                                {title}
                            </option>
                            <option value="January">January</option>
                            <option value="February">February</option>
                            <option value="March">March</option>
                            <option value="April">April</option>
                            <option value="May">May</option>
                            <option value="June">June</option>
                            <option value="July">July</option>
                            <option value="August">August</option>
                            <option value="September">September</option>
                            <option value="October">October</option>
                            <option value="November">November</option>
                            <option value="December">December</option>
                        </select>
                        <span className="absolute top-[18px] right-[20px] text-gray-500 hover:text-[#18470D] transition-colors duration-200 pointer-events-none">
                            <ArrowIcon />
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MonthSelector;
