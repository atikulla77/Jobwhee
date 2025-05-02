import { BlackRowIcon } from "../../../../public/icons/talent-client/BlackRowIcon";
interface ArrowDropDown {
	title: string;
	hasBg?: boolean;
	insideElement: React.ReactNode;
	open: boolean;
	setOpen: () => void;
}

const ArrowDropDown = (card: ArrowDropDown) => {
	return (
		<div
			onClick={() => card.setOpen()}
			className={`cursor-pointer  rounded-t-[20px] px-[15px]  hover:scale-105  sm:px-8 py-[18px] duration-200
                ${
									card.hasBg && card.open
										? ` h-[99px] sm:h-[146px] bg-white`
										: card.hasBg
										? "border-b border-b-[#E2E2E2]"
										: "bg-transparent sm:h-[108px]"
								}`}>
			<div className=" w-full flex justify-between items-center">
				<h2 className=" text-[14px] sm:text-[22px] lg:text-[26px] font-medium text-black">
					{card.title}
				</h2>
				<div
					className={` lg:w-12 lg:h-12 sm:w-10 sm:h-10 bg-[#C1EC05] rounded-full flex items-center transition-all duration-300 justify-center ${
						card.open ? " " : " -rotate-90"
					} `}>
					<BlackRowIcon />
				</div>
			</div>
			{card.open && card.insideElement}
		</div>
	);
};
export default ArrowDropDown;
