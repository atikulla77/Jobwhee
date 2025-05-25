import { SearchIcon } from "../../../public/icons/talent-client/SearchIcon";

export const Search = ({ width = "w-[1080px]", placeholder } : {width?: string, placeholder?: string}) => {
    return (
      <div
        className={`h-[46px]   border border-[#EAEAEA] rounded-[73px] flex gap-[10px] items-center ${width}`}
      >
        <SearchIcon/>
        <input className=" w-full h-6 text-base font-medium  outline-none text-[#737373] placeholder:text-[#737373]" placeholder={placeholder}/>
      </div>
    );
  };