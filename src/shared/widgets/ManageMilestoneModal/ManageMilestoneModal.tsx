import { useEffect, useState } from "react";
import Button from "@/shared/ui-kit/Button";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";

const ManageMilestoneModal = ({
	setShowMilestoneModal,
	handleDeleteMilestone,
	setDate,
	date,
	milestones,
}: any) => {
	const [milestoneList, setMilestoneList] = useState([]);
	const [dragItemIndex, setDragItemIndex] = useState<number | null>(null);

	useEffect(() => {
		setMilestoneList(milestones || []);
	}, [milestones]);

	const handleDragStart = (index: number) => {
		setDragItemIndex(index);
	};

	const handleDragEnter = (enterIndex: number) => {
		if (dragItemIndex === null || dragItemIndex === enterIndex) return;

		const updatedList = [...milestoneList];
		const draggedItem = updatedList.splice(dragItemIndex, 1)[0];
		updatedList.splice(enterIndex, 0, draggedItem);

		setDragItemIndex(enterIndex);
		setMilestoneList(updatedList);
	};

	const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
		e.preventDefault();
	};

	const handleSave = () => {
		console.log("Updated milestone order:", milestoneList);
		// here will be called api
		setShowMilestoneModal(false);
	};

	return (
		<div>
			<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] xl:mt-[8px] mt-0 xl:mb-[21px] md:mb-[27px] mb-[19px]">
				Manage Milestones
			</h1>

			<div className="xl:h-[536px] md:h-[392px] h-[440px] pt-[10px] relative overflow-y-scroll">
				{milestoneList?.map((milestone: any, index: number) => (
					<div
						key={milestone.id || index}
						draggable={milestone?.status === "not_started"}
						onDragStart={() =>
							milestone?.status === "not_started" && handleDragStart(index)
						}
						onDragEnter={() =>
							milestone?.status === "not_started" && handleDragEnter(index)
						}
						onDragOver={
							milestone?.status === "not_started" ? handleDragOver : undefined
						}
						className={`xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] md:mb-[10px] mb-[8px] ${
							milestone?.status === "not_started"
								? "cursor-move"
								: "cursor-default"
						} bg-white`}>
						<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
							<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
								{index + 1}
							</h3>
							<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
								{milestone?.title}
							</h1>
						</div>

						<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
							<div className="flex justify-between">
								<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
									Change due date
								</h2>
								<button
									disabled={
										milestone?.status === "closed" ||
										milestone?.status === "ongoing"
									}
									onClick={() => handleDeleteMilestone(milestone?.id)}
									className={`${
										milestone?.status === "closed" ||
										milestone?.status === "ongoing"
											? "bg-[#c6c2c2a6]"
											: "cursor-pointer bg-amber-400 "
									} px-2 rounded-full`}>
									X
								</button>
							</div>
							<div className="w-[100%] h-[42px]">
								<CustomDatePicker
									milestoneId={index}
									onChangeDate={setDate}
									milestoneDate={date}
									isIcon={true}
									width="100%"
									height="100%"
									disabled={
										milestone?.status === "closed" ||
										milestone?.status === "ongoing"
									}
								/>
							</div>
						</div>
					</div>
				))}
			</div>

			<div className="w-[100%] h-[1px] bg-[#18470D] mt-4"></div>

			<div className="absolute xl:bottom-[49px] bottom-[24px] xl:right-[38px] md:right-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
				<div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
					<Button
						onClick={() => setShowMilestoneModal(false)}
						action={"Cancel"}
						type={"nonBorder"}
					/>
				</div>
				<div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Save"} type={"active"} onClick={handleSave} />
				</div>
			</div>
		</div>
	);
};

export default ManageMilestoneModal;
