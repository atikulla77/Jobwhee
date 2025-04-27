interface ContractActionsDropDownProps {
  menuOptions: string[];
  setDropdownOpen: (open: boolean) => void;
  dropdownOpen: boolean;
}

const ContractActionsDropDown: React.FC<ContractActionsDropDownProps> = ({
  menuOptions,
  setDropdownOpen,
  dropdownOpen,
}) => {
  return (
    <div className="relative">
      {dropdownOpen && (
        <div className="absolute xl:!right-0 sm:right-[-113px] right-0 top-[12px] z-50">
          <ul className="bg-[#ffffff] rounded-[6px] p-2 shadow-[0px_3px_15px_0px_#e4e4e494] transition-all duration-200 sm:w-[269px] w-[215px] mt-1 relative">
            <div className="absolute right-[0px] top-[-12px] w-full z-[0] flex xl:!justify-end sm:justify-center justify-end cursor-default">
              <div className="w-[27px] h-[13px] relative overflow-hidden xl:!mr-[10px] sm:mr-0 mr-[10px]">
                <div className="absolute left-0 top-[6px] w-[27px] h-[27px] bg-white shadow-[0px_0px_2px_0px_#e4e4e494] rotate-[47deg]"></div>
              </div>
            </div>
            {menuOptions.map((option, index) => (
              <li key={index}>
                <button
                  className="w-full text-left px-4 sm:py-[10px] py-[6px] sm:text-[16px] text-[14px] font-[500] text-[#545454] rounded-md"
                  onClick={() => setDropdownOpen(false)}
                >
                  {option}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default ContractActionsDropDown;
