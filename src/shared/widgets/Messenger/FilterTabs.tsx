'use client';

import { useState } from 'react';

interface FilterTabsProps {
  options: string[];
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export default function FilterTabs({
  options,
  defaultValue = '',
  onChange,
}: FilterTabsProps) {
  const [active, setActive] = useState<string>(defaultValue || options[0]);

  const handleClick = (option: string) => {
    setActive(option);
    if (onChange) {
      onChange(option);
    }
  };

  return (
    <div className="flex gap-6 w-full">
      {options.map((option) => (
        <button
          key={option}
          onClick={() => handleClick(option)}
          className={`pb-2 text-sm md:text-base font-medium transition-colors relative cursor-pointer
            ${active === option ? 'text-[#18470D]' : 'text-gray-500 hover:text-black'}
          `}
        >
          {option}
          {active === option && (
            <span className="absolute -bottom-[1px] -left-1.5 h-[2px] w-[150%] bg-[#18470D]" />
          )}
        </button>
      ))}
    </div>
  );
}
