import {useState} from 'react';
import ClickOutside from '@/shared/widgets/ClickOutside/ClickOutside';

interface skillsDropDownInputProps {
    skillsList: string[];
}

export const SkillsDropDownInput: React.FC<skillsDropDownInputProps> = ({
                                                                            skillsList,
                                                                        }) => {
    const [inputValue, setInputValue] = useState('');
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [filteredSkills, setFilteredSkills] = useState<string[]>([]);
    return (
        <div className="relative">
            <input
                value={inputValue}
                onChange={(e) => {
                    setInputValue(e.target.value);
                    setDropdownOpen(e.target.value ? true : false);
                    setFilteredSkills(skillsList.filter((skill) => skill.toLowerCase().includes(e.target.value.toLocaleLowerCase())))
                }}
                onFocus={() => {
                    inputValue ? setDropdownOpen(true) : null;
                }}
                className="outline-none text-[14px] sm:text-[16px] lg:max-w-[595px] h-[42px] w-full border border-[#242524] rounded-[12px] mt-[3px] sm:mt-2 pl-2"
                placeholder="Required skills"
            />
            {dropdownOpen && (
                <ClickOutside onClick={() => setDropdownOpen(false)}>
                    <div className="absolute w-full top-[58px] left-0 bg-white z-10">
                        <ul className="bg-white p-[8px] max-h-[250px] overflow-y-auto border rounded-[12px] border-[#EAEAEA]">
                            {filteredSkills.length ? (
                                filteredSkills.map((item, i) => (
                                    <li
                                        className={`select-none text-[#2B2C2D]  flex ${
                                            i !== skillsList.length - 1
                                                ? ' mb-[8px] pb-[10px] border-b border-[#EAEAEA] '
                                                : ''
                                        }`}
                                        key={i}
                                    >
                                        <div
                                            className="flex hover:bg-[#F5FFD3] rounded-[8px] w-full cursor-pointer py-[2px] px-[8px]">
                                            <div className="text-[14px] lg:text-[16px] flex gap-[10px] cursor-pointer">
                                                {item}
                                            </div>
                                        </div>
                                    </li>
                                ))
                            ) : (
                                <li className="text-[#8B939F]">Not found</li>
                            )}
                        </ul>
                    </div>
                </ClickOutside>
            )}
        </div>
    );
};
