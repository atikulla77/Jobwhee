import React from "react";
import MilestoneItem from "./MilestoneItem";
import FileUploadTimeline from "./FileUploadTimeline";

const MilestoneTimeline = ({ contract, setShowContractMetaData }: any) => {
	return (
		<div className="w-full flex flex-wrap xl:justify-between md:justify-center justify-start">
			<div className="md:pt-[20px] pt-0">
				<h1 className="xl:text-[30px] text-[28px]  font-medium xl:text-left md:text-center text-left text-[#18470D]">
					Milestone Timeline
				</h1>
				<MilestoneItem contract={contract} setShowContractMetaData={setShowContractMetaData} />
			</div>
			<div className="2xl:w-[538px] xl:w-[460px] w-full h-fit md:pt-[30px] pt-[19px] 2xl:pb-[30px] md:pb-[15px] pb-[10px] 2xl:px-[27px] md:px-[30px] px-[14px] border-[1.5px] border-[#CBEC5E] rounded-2xl">
				<FileUploadTimeline />
			</div>
		</div>
	);
};

export default MilestoneTimeline;
