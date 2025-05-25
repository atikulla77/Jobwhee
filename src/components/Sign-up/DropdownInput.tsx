import {useId, useState} from "react";
import {ArrowIcon} from "../../../public/icons/ArrowIcon";

type DropdownProps = {
    list: Array<string>;
    label: string;
    onChange: (selectedCountry: string) => void; // Add onChange prop
};

const DropdownInput: React.FC<DropdownProps> = ({list, label, onChange}) => {
    const inputId = useId();
    const [openMenu, setOpenMenu] = useState(false);
    const [selectedCountry, setSelectedCountry] = useState("");

    const handleSelect = (country: string) => {
        setSelectedCountry(country);
        onChange(country); // Call the onChange function
        setOpenMenu(false);
    };

    return (
        <div className="w-full">
            <div>
                <label className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px]" htmlFor={inputId}>
                    {label}
                </label>
            </div>
            <div className="border-[2px] border-[#AEB3BC] mt-[8px] rounded-[8px]"
                 onClick={() => setOpenMenu(!openMenu)}>
                <div className="h-[42px] rounded-[8px] flex items-center p-[9px] cursor-pointer">
                    <div
                        className="select-none w-full h-[24px] placeholder:text-[#8B939F] 2xl:placeholder:text-[16px] placeholder:text-[14px] focus:outline-0 text-[#8B939F]">
                        {selectedCountry || list[0]}
                    </div>
                    <div>
                        <ArrowIcon/>
                    </div>
                </div>
                {openMenu && (
                    <ul className="px-[8px] bg-white border border-gray-300 rounded shadow-md">
                        {list.map((country, i) => (
                            <li
                                key={i}
                                className="mt-[5px] select-none text-[#8B939F] cursor-pointer hover:bg-gray-100 p-2"
                                onClick={() => handleSelect(country)}
                            >
                                {country}
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default DropdownInput;
