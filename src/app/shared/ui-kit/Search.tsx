import { SearchIcon } from "../../../../public/icons/talent-client/SearchIcon";

export const Search = ({ width = "" }) => {
	return (
		<div
			className="h-[46px] w-full max-w-[1080px] border border-[#EAEAEA] rounded-[73px] flex gap-5 items-center"
			style={{ width }}>
			<SearchIcon />
			<input
				className="  w-full h-6 text-base font-medium  outline-none text-[#737373] placeholder:text-[#737373]"
				placeholder="Search contract"
			/>
		</div>
	);
};
