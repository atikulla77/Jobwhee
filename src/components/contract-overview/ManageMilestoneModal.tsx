import { useEffect, useState } from "react";
import { DndContext } from "@dnd-kit/core";
import {
	SortableContext,
	useSortable,
	verticalListSortingStrategy,
	arrayMove,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";
import Button from "@/shared/ui-kit/Button";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";
import Image from "next/image";

const ManageMilestoneModal = ({
	setShowMilestoneModal,
	handleDeleteMilestone,
	setDate,
	date,
	milestones,
}:any) => {
	const [milestoneList, setMilestoneList] = useState([]);

	useEffect(() => {
		setMilestoneList(milestones || []);
	}, [milestones]);

	const handleDragEnd = event => {
		const { active, over } = event;
		if (!over || active.id === over.id) return;

		// Filter not_started milestones
		const notStartedItems = milestoneList
			.map((item, index) => ({
				item,
				index,
				id: item.id || `milestone-${index}`,
			}))
			.filter(({ item }) => item.status === "not_started");

		const activeItem = notStartedItems.find(({ id }) => id === active.id);
		const overItem = notStartedItems.find(({ id }) => id === over.id);

		if (!activeItem || !overItem) return;

		// Reorder not_started items
		const notStartedList = notStartedItems.map(({ item }) => item);
		const activeIndex = notStartedItems.findIndex(({ id }) => id === active.id);
		const overIndex = notStartedItems.findIndex(({ id }) => id === over.id);
		const reorderedNotStarted = arrayMove(
			notStartedList,
			activeIndex,
			overIndex
		);

		// Rebuild list, preserving closed/ongoing positions
		let notStartedIndex = 0;
		const newList = milestoneList.map((item, index) => {
			if (item.status === "closed" || item.status === "ongoing") return item;
			const reorderedItem = reorderedNotStarted[notStartedIndex];
			notStartedIndex++;
			return reorderedItem;
		});

		setMilestoneList(newList);
	};

	const MilestoneItem = ({ milestone, index }) => {
		const isSortable = milestone?.status === "not_started";
		const { attributes, listeners, setNodeRef, transform } = useSortable({
			id: milestone.id || `milestone-${index}`,
			disabled: !isSortable,
		});

		const style = {
			transform: CSS.Transform.toString(transform),
		};

		return (
			<div
				ref={isSortable ? setNodeRef : null}
				style={isSortable ? style : {}}
				{...(isSortable ? attributes : {})}
				{...(isSortable ? listeners : {})}
				className={`xl:w-[762px] md:w-[470px] w-[263px] xl:h-[171px] md:h-[162px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] md:mb-[10px] mb-[8px] relative ${
					isSortable ? "cursor-move" : "cursor-default"
				} bg-white`}>
				<div
					className={`absolute md:top-[18px] md:right-[39px] right-[14px] capitalize rounded-[50px] h-[32px] px-[15px] flex justify-center items-center ${
						milestone?.status === "closed"
							? "bg-[#E2E2E2] text-[#5B5B5B]"
							: milestone?.status === "ongoing"
							? "bg-[#EEF6DB] text-[#5A7D06]"
							: "bg-[#F6EED9] text-[#CAAC00]"
					}`}>
					<p>
						{milestone?.status === "not_started"
							? "Not Started"
							: milestone?.status}
					</p>
				</div>
				<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
					<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
						{index + 1}
					</h3>
					<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
						{milestone?.title}
					</h1>
				</div>
				<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-[47px] mt-[10px]">
					<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
						Change due date
					</h2>
					<div className="w-full flex justify-between gap-[15px]">
						<div
							className={`${
								milestone?.status === "closed" ||
								milestone?.status === "ongoing"
									? "w-full"
									: "w-[calc(100%-51px)]"
							} h-[42px]`}>
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
						<button
							disabled={
								milestone?.status === "closed" ||
								milestone?.status === "ongoing"
							}
							onClick={() => handleDeleteMilestone(milestone?.id)}
							className={`${
								milestone?.status === "closed" ||
								milestone?.status === "ongoing"
									? "hidden"
									: "cursor-pointer"
							} rounded-full border-[1px] border-[#CBEC5E] bg-white flex justify-center items-center w-[36px] h-[36px]`}>
							<Image
								src={"/images/icon-images/trash.png"}
								width={36}
								height={36}
								alt=""
								className="w-[36px] h-[36px]"
							/>
						</button>
					</div>
				</div>
			</div>
		);
	};

	// Split milestones  
	const notStartedItems = milestoneList
		.map((item, index) => ({
			item,
			index,
			id: item.id || `milestone-${index}`,
		}))
		.filter(({ item }) => item.status === "not_started");

	const fixedItems = milestoneList
		.map((item, index) => ({
			item,
			index,
			id: item.id || `milestone-${index}`,
		}))
		.filter(
			({ item }) => item.status === "closed" || item.status === "ongoing"
		);

	return (
		<div>
			<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] xl:mt-[8px] mt-0 xl:mb-[21px] md:mb-[27px] mb-[19px]">
				Manage Milestones
			</h1>
			<DndContext onDragEnd={handleDragEnd}>
				<SortableContext
					items={notStartedItems.map(({ id }) => id)}
					strategy={verticalListSortingStrategy}>
					<div className="xl:h-[547px] md:h-[500px] h-[440px] pt-[10px] relative overflow-y-scroll">
						{milestoneList.map((milestone, index) => (
							<MilestoneItem
								key={milestone.id || `milestone-${index}`}
								milestone={milestone}
								index={index}
							/>
						))}
					</div>
				</SortableContext>
			</DndContext>
			<div className="w-full h-[1px] bg-[#18470D] mt-4"></div>
			<div className="absolute xl:bottom-[40px] bottom-[24px] xl:right-[38px] md:right-[24px] right-0 w-full flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
				<div className="xl:w-[200px] md:w-[150px] w-full xl:h-[48px] h-[40px]">
					<Button
						onClick={() => setShowMilestoneModal(false)}
						action="Cancel"
						type="nonBorder"
					/>
				</div>
				<div className="xl:w-[200px] md:w-[150px] w-full xl:h-[48px] h-[40px]">
					<Button
						action="Save"
						type="active"
						onClick={() => {
							console.log("Updated milestone order:", milestoneList);
							setShowMilestoneModal(false);
						}}
					/>
				</div>
			</div>
		</div>
	);
};

export default ManageMilestoneModal;
