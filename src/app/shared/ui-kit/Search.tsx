import { SearchIcon } from "../../../../public/icons/talent-client/SearchIcon";

import { Dispatch, SetStateAction } from "react";

interface SearchProps {
	setSearch: Dispatch<SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({ setSearch }) => {
	return (
		<div className="h-[46px] w-full max-w-[1080px] border border-[#EAEAEA] rounded-[73px] flex xl:gap-[20px] md:gap-[15px] gap-[10px] xl:pl-[1px] pl-[2px] items-center">
			<SearchIcon />
			<input
				onChange={e => setSearch(e.target.value)}
				className="  w-full h-6 font-medium xl:text-[16px] text-[14px] outline-none text-[#737373] placeholder:text-[#737373]"
				placeholder="Search for jobs"
			/>
		</div>
	);
};
