import Button from "@/shared/ui-kit/Button";
import { DropDownArrowIcon } from "../../../public/icons/DropDownArrowIcon";
import { ReloadIcon } from "../../../public/icons/ReloadIcon";

const FileUploadTimeline = () => {
	const handleButton = (action: string) => {
		alert(action);
	};
	return (
		<>
			<div className="w-full flex flex-wrap justify-between items-center relative">
				<h1 className="text-[20px] font-[500] text-[#000000]">
					Milestone Timeline
				</h1>

					<div className="cursor-pointer w-[38px] h-[38px] border-[1px] border-[#CBEC5E] flex items-center justify-center rounded-[100%]">
						<ReloadIcon />
					</div>
			</div>
			<div className="w-full md:pt-[27px] pt-[30px]">
				<p className="text-[16px] font-[400] text-[#B9B9B9]">Fri, 14 March</p>
				<div className="flex items-center pt-[8px] md:pb-[21px] pb-[30px]">
					<img src={"/images/maria.png"} className="w-[48px] h-[48px]" />
					<div className="text-[16px] pl-[10px] ">
						<h3 className="text-[#000000] font-[500]">Eleni C.</h3>
						<p className="text-[#B9B9B9] font-[400] pt-[3px]">2:25 PM</p>
					</div>
				</div>
				<div className="flex items-center">
					<h3 className="text-[16px] font-[400] text-[#B9B9B9] pr-[8px]">
						2 files
					</h3>
					<div className="w-[20px] h-[20px]">
						<DropDownArrowIcon color="#c9c9c9" />
					</div>
				</div>

				<div className="flex justify-between items-start pt-[12px]">
					<div className="flex">
						<img src={"/images/image373.png"} className="w-[80px] h-[80px]" />
						<div className="font-[400] pl-[8px]">
							<h2 className="text-[16px] font-[500] text-[#000000] tracking-[-0.3px] pb-[10px]">
								image 1.jpg
							</h2>
							<p className="text-[14px] text-[#B9B9B9]">915KB</p>
						</div>
					</div>
					<div className="flex items-center md:gap-[24px] gap-[16px]">
						<img
							src="/images/icon-images/link.png"
							className="w-[24px] h-[24px]"
						/>
						<img
							src="/images/icon-images/download-cloud.png"
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>
				<div className="flex justify-between items-start pt-[12px]">
					<div className="flex">
						<img src={"/images/image373.png"} className="w-[80px] h-[80px]" />
						<div className="font-[400] pl-[8px]">
							<h2 className="text-[16px] font-[500] text-[#000000] tracking-[-0.3px] pb-[10px]">
								image 2.jpg
							</h2>
							<p className="text-[14px] text-[#B9B9B9]">915KB</p>
						</div>
					</div>
					<div className="flex items-center md:gap-[24px] gap-[16px]">
						<img
							src="/images/icon-images/link.png"
							className="w-[24px] h-[24px]"
						/>
						<img
							src="/images/icon-images/download-cloud.png"
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>

				<div className="w-full h-[1px] bg-[#CBEC5E] opacity-[50%] 2xl:mt-[32px] xl:mt-[20px] mt-[30px] 2xl:mb-[2px] mb-0"></div>
			</div>

			<div className="w-full md:pt-[27px] pt-[30px]">
				<p className="text-[16px] font-[400] text-[#B9B9B9]">Fri, 14 March</p>
				<div className="flex items-center pt-[8px] md:pb-[21px] pb-[30px]">
					<img src={"/images/maria.png"} className="w-[48px] h-[48px]" />
					<div className="text-[16px] pl-[10px] ">
						<h3 className="text-[#000000] font-[500]">Eleni C.</h3>
						<p className="text-[#B9B9B9] font-[400] pt-[3px]">2:25 PM</p>
					</div>
				</div>
				<div className="flex items-center">
					<h3 className="text-[16px] font-[400] text-[#B9B9B9] pr-[8px]">
						2 files
					</h3>
					<div className="w-[20px] h-[20px]">
						<DropDownArrowIcon color="#c9c9c9" />
					</div>
				</div>

				<div className="flex justify-between items-start pt-[12px]">
					<div className="flex">
						<img src={"/images/image373.png"} className="w-[80px] h-[80px]" />
						<div className="font-[400] pl-[8px]">
							<h2 className="text-[16px] font-[500] text-[#000000] tracking-[-0.3px] pb-[10px]">
								image 1.jpg
							</h2>
							<p className="text-[14px] text-[#B9B9B9]">915KB</p>
						</div>
					</div>
					<div className="flex items-center md:gap-[24px] gap-[16px]">
						<img
							src="/images/icon-images/link.png"
							className="w-[24px] h-[24px]"
						/>
						<img
							src="/images/icon-images/download-cloud.png"
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>
				<div className="flex justify-between items-start pt-[12px]">
					<div className="flex">
						<img src={"/images/image373.png"} className="w-[80px] h-[80px]" />
						<div className="font-[400] pl-[8px]">
							<h2 className="text-[16px] font-[500] text-[#000000] tracking-[-0.3px] pb-[10px]">
								image 2.jpg
							</h2>
							<p className="text-[14px] text-[#B9B9B9]">915KB</p>
						</div>
					</div>
					<div className="flex items-center md:gap-[24px] gap-[16px]">
						<img
							src="/images/icon-images/link.png"
							className="w-[24px] h-[24px]"
						/>
						<img
							src="/images/icon-images/download-cloud.png"
							className="w-[24px] h-[24px]"
						/>
					</div>
				</div>
			</div>

			<div className="w-[233px] xl:h-[48px] h-[40px] mx-auto 2xl:mt-[44px] md:mt-[69px] mt-[55px] xl:mb-0 md:mb-[8px] mb-[4px]">
				<Button
					type="transparent"
					action="Show More Files"
					handleButton={handleButton}
				/>
			</div>
		</>
	);
};

export default FileUploadTimeline;
