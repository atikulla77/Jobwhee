import React, { useState } from 'react';
import { ArrowIcon } from '../../../../../public/icons/ArrowIcon'; // Import your arrow icon

interface CustomDropdownProps {
  languages: string[];
  selectedLanguage: string;
  onSelect: (language: string) => void;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({
  languages,
  selectedLanguage,
  onSelect,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => setIsOpen((prev) => !prev);

  const handleOptionClick = (language: string) => {
    onSelect(language);
    setIsOpen(false);
  };

  return (
    <div className="relative">
      {/* Dropdown Button */}
      <button
        onClick={toggleDropdown}
        className="text-[#8B939F] w-[252px] xl:w-[340px] p-2 border rounded-[12px] focus:border-[#545454] border-[#AEB3BC] mt-1 appearance-none pr-10 flex justify-between items-center"
      >
        <span>{selectedLanguage || 'Select Language'}</span>
        <span className="absolute right-2">
          <ArrowIcon />
        </span>
      </button>

      {/* Dropdown Options */}
      {isOpen && (
        <div className="absolute z-[9999] left-0 right-0 mt-1 bg-white border border-[#AEB3BC] rounded-md shadow-md max-h-[200px] overflow-y-auto">
          {languages.map((language) => (
            <div
              key={language}
              onClick={() => handleOptionClick(language)}
              className="p-2 hover:bg-gray-100 cursor-pointer"
            >
              {language}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
