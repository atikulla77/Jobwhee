import React, {useState} from 'react';
import {ArrowIcon} from '../../../../../public/icons/ArrowIcon copy';


interface YearSelectorProps {
    title: string;
    value: string;
    onChange: (value: string) => void;
}

const YearSelector: React.FC<YearSelectorProps> = ({title, value, onChange}) => {

    const handleYearChange = (event: any) => {
        onChange(event.target.value);
    };

    const years = [];
    for (let year = 1950; year <= 2030; year++) {
        years.push(year);
    }

    return (
        <div className="md:flex justify-between">
            <div className="max-w-[338px] lg:max-w-[370px] w-full">
                <p>{title}</p>

                <div className="flex flex-col mb-[20px]">
                    <div className="relative flex-1">
                        <select
                            value={value}
                            onChange={handleYearChange}
                            className="text-[#8B939F] w-[252px]  xl:w-[370px] p-2 border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 placeholder-[#8B939F] placeholder:text-[16px] placeholder:leading-[24px] appearance-none pr-10 bg-white cursor-pointer"
                        >
                            <option value="" disabled>
                                From Year
                            </option>
                            {years.map((year) => (
                                <option key={year} value={year}>
                                    {year}
                                </option>
                            ))}
                        </select>
                        <span
                            className="absolute top-[18px] right-[20px] text-gray-500 hover:text-[#18470D] transition-colors duration-200 pointer-events-none">
                            <ArrowIcon/>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default YearSelector;
