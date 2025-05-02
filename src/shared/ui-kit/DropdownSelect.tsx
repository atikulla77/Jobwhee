import { useState, useRef, useEffect } from 'react';
import { Check, X } from 'lucide-react';
import { FilterIcon } from '../../../public/icons/FilterIcon';
import RadioButtons from './RadioButtons';

type DropdownSelectProps = {
    options: string[];
    selected: string;
    onSelect: (option: string) => void;
};

const DropdownSelect: React.FC<DropdownSelectProps> = ({ options, selected, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [isMobile, setIsMobile] = useState(false);
    const [selectedOption, setSelectedOption] = useState(0)
    const dropdownRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768); // mobile breakpoint
        };
        handleResize(); // set on mount
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div className="relative inline-block text-center" ref={dropdownRef}>
            <div onClick={() => setIsOpen((prev) => !prev)} className='cursor-pointer'>
                <FilterIcon />
            </div>

            {/* Desktop Dropdown */}
            {!isMobile && isOpen && (
                <div className="absolute z-50 mt-2 w-36 left-[-50px]">
                    <div className="flex justify-center">
                        <div className="w-2 h-2 border-l-8 border-r-8 border-b-8 border-transparent border-b-white shadow-2xl"></div>
                    </div>
                    <div className="bg-white rounded-lg shadow-2xl ring-opacity-5">
                        <ul className="py-1">
                            {options.map((option) => (
                                <li
                                    key={option}
                                    onClick={() => {
                                        onSelect(option);
                                        setIsOpen(false);
                                    }}
                                    className={`px-4 py-2 cursor-pointer hover:bg-gray-100 flex justify-start items-center ${option === selected ? 'text-[#18470D] font-semibold' : 'text-gray-700'}`}
                                >
                                    {option}
                                    {option === selected && <Check className="w-5 h-5 m-2" />}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            )}

            {/* Mobile Modal */}
            {isMobile && isOpen && (
                <div className="fixed inset-0 bg-black/20 z-50 flex justify-center items-center">
                    <div className="bg-white rounded-[20px] shadow-xl w-11/12 max-w-[335px] p-4">
                        <div className='flex justify-between items-center'>
                            <h2 className="text-lg text-start text-[#18470D] text-[14px] font-medium">Filter by</h2>
                            <X className='text-[#2A2E34]' onClick={() => setIsOpen(false)} />
                        </div>
                        <form className="flex flex-col gap-3 py-6">
                            <RadioButtons
                                radioButtonsData={options}
                                selectedOption={selectedOption}
                                setSelectedOption={(e) => {
                                    setSelectedOption(e);
                                    onSelect(e == 0 ? "All" : "Unread");
                                    setIsOpen(false)
                                }}
                                labelPosition="right"
                            />
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DropdownSelect;
