import { SearchIcon } from "../../../../public/icons/talent-client/SearchIcon";

import { Dispatch, SetStateAction } from "react";

interface SearchProps {
	setSearch: Dispatch<SetStateAction<string>>;
}

export const Search: React.FC<SearchProps> = ({ setSearch }) => {
	return (
		<div className="h-[46px] w-full max-w-[1080px] border border-[#EAEAEA] rounded-[73px] flex sm:gap-[20px] gap-3 pl-[1px] items-center">
			<SearchIcon />
			<input
				onChange={e => setSearch(e.target.value)}
				className="  w-full h-6 text-base font-medium sm:text-[16px] text-[13px] outline-none text-[#737373] placeholder:text-[#737373]"
				placeholder="Search contract"
			/>
		</div>
	);
};
