"use client";
import Image from "next/image";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { useEffect, useRef, useState } from "react";

const ThreeDotDropdown = ({
  children,
}: {
  children: (close: () => void) => React.ReactNode;
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!wrapperRef.current?.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
    };
    document.addEventListener("click", handleClick);
    return () => document.removeEventListener("click", handleClick);
  }, []);

  return (
    <div ref={wrapperRef} className="relative z-50 h-fit flex justify-center">
      <div
        className={`${
          dropdownOpen ? "bg-[#FBFFED]" : "bg-white"
        } ml-auto min-w-[20px] w-[20px] h-[20px] sm:w-[36px] sm:h-[36px] border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        <div className="w-[12px] h-[12px] sm:w-[16px] sm:h-[16px]">
          <ThreeDotIcon />
        </div>
      </div>

      {dropdownOpen && (
        <div className="rounded-[6px] w-[227px] p-[16px] bg-white h-fit top-[calc(100%_+_22px)] absolute shadow-[0px_5px_24.5px_0px_rgba(97,124,174,0.15)]">
          <Image
            src={"/images/all-images/threeDotsTop.png"}
            width={27}
            height={20}
            alt="dropdown-top"
            className="absolute -top-[20px] left-2/4 -translate-x-[50%]"
          />
          {children(() => setDropdownOpen(false))}
        </div>
      )}
    </div>
  );
};

export default ThreeDotDropdown;
