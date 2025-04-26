import { SearchIcon } from "../../../../public/icons/talent-client/SearchIcon";

export const Search = ({ width = "" }) => {
    return (
      <div
        className="h-[46px] 2xl:!w-[1080px] xl:w-[873px] w-full min-w-[375px] max-w-[1080px] border border-[#EAEAEA] rounded-[73px] flex gap-5 items-center"
        style={{ width }}
      >
        <SearchIcon/>
        <input className="  min-w-[430px] h-6 text-base font-medium  outline-none text-[#737373] placeholder:text-[#737373]" placeholder="Search contract"/>
      </div>
    );
  };