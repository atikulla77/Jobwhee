'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowIcon } from '../../../../public/icons/ArrowIcon';

type DropdownProps = {
  list: string[];
  label?: string;
  onSelect?: (value: string) => void;
};

const DropdownInput: React.FC<DropdownProps> = ({ list, label, onSelect }) => {
  const inputId = useId();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [openMenu, setOpenMenu] = useState(false);
  const [selectedCountry, setSelectedCountry] = useState('');

  useEffect(() => {
    if (selectedCountry && onSelect) {
      onSelect(selectedCountry);
    }
  }, [selectedCountry, onSelect]);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setOpenMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div className="w-full" ref={dropdownRef}>
      {label && (
        <label
          className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]"
          htmlFor={inputId}
        >
          {label}
        </label>
      )}
      <div className="mt-[16px] sm:mt-[23px] lg:mt-[35px] 2xl:mt-[40px]">
        <div
          onClick={() => setOpenMenu((prev) => !prev)}
          className={
            'shadow-[0px_0px_5px_0px_#2871e626] border-[2px] lg:min-h-[33px] 2xl:min-h-[42px] rounded-[12px] flex items-center px-[8px] py-[10px] sm:pl-[6px] lg:px-[8px] lg:py-[4px] sm:pt-[12px] 2xl:p-[9px] 2xl:pl-[7px] cursor-pointer' +
            (openMenu ? ' border-[#18470D]' : ' border-[#EAEAEA]')
          }
        >
          <div className="select-none w-full min-h-[24px] text-[#414750] text-[14px] 2xl:text-[16px]">
            {selectedCountry || list[0]}
          </div>
          <div className={openMenu ? 'rotate-180' : ''}>
            <ArrowIcon />
          </div>
        </div>

        {openMenu && (
          <div className="shadow-[2px_2px_5px_0px_#0000001A] border-[0.5px] border-[#EAEAEA] mt-[8px] rounded-[12px]">
            <ul className="px-[8px] py-[12px] max-h-[250px] overflow-y-auto">
              {list.map((country, i) => (
                <li
                  key={i}
                  className={`select-none text-[#414750] ${
                    i !== list.length - 1
                      ? 'mb-[10px] pb-[10px] border-b  border-[#EAEAEA]'
                      : ''
                  }`}
                >
                  <div
                    className="text-[14px] 2xl:text-[16px] flex gap-[10px] hover:bg-[#F5FFD3] pl-[8px] cursor-pointer"
                    onClick={() => {
                      setSelectedCountry(country);
                      setOpenMenu(false);
                    }}
                  >
                    {country}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default DropdownInput;
