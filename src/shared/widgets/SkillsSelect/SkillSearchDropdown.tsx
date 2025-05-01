"use client";

import {useState, useRef, useEffect} from "react";
import {Search} from "lucide-react";

interface SearchDropdownProps {
    skills: any[];
    onSelectSkill: (id: number) => void;
}

const SkillSearchDropdown: React.FC<SearchDropdownProps> = ({
                                                                skills,
                                                                onSelectSkill,
                                                            }) => {
    const [query, setQuery] = useState("");
    const [isOpen, setIsOpen] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const filteredOptions = skills.filter((skill) =>
        skill.translation.name.toLowerCase().includes(query.toLowerCase())
    );

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (
                containerRef.current &&
                !containerRef.current.contains(event.target as Node)
            ) {
                setIsOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    return (
        <div className="relative w-[165px] max-w-sm" ref={containerRef}>
            <div className="relative flex items-center">
                <input
                    type="text"
                    placeholder="Search skills"
                    className="h-[36px] md:h-[44px] max-w-[165px] w-full rounded-[30px] border border-black pl-8 pr-3 text-xs md:text-base placeholder:text-[#18470D] placeholder:font-normal placeholder:text-[18px] focus:outline-none"
                    onFocus={() => setIsOpen(true)}
                    onChange={(e) => setQuery(e.target.value)}
                    value={query}
                />
                <Search
                    className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-black"
                    style={{left: "14.5px", width: "16px", height: "16px"}}
                />
            </div>

            {isOpen && (
                <div
                    className="absolute z-[1000] bg-white mt-1 w-[200px] rounded-[12px] border border-[#AEB3BC] shadow-lg max-h-48 overflow-y-auto scrollbar-thin scrollbar-thumb-transparent scrollbar-track-transparent"
                >
                    {filteredOptions.length > 0 ? (
                        filteredOptions.map((skill, idx) => (
                            <div
                                key={skill.id}
                                onClick={() => {
                                    onSelectSkill(skill.id);
                                    setIsOpen(false);
                                }}
                                className="cursor-pointer ml-[10px] mr-[18px] py-2 hover:bg-gray-100 text-sm text-[#545454] border-b border-[#AEB3BC]"
                            >
                                {skill.translation.name}
                            </div>
                        ))
                    ) : (
                        <div className="px-4 py-2 text-sm text-gray-500">
                            No results found
                        </div>
                    )}
                </div>
            )}
        </div>
    );
};

export default SkillSearchDropdown;
