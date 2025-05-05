"use client";

import Button from "@/shared/ui-kit/Button";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";
import { Input } from "@/shared/ui-kit/Input";
import { GlobalModal } from "@/shared/widgets/GlobalModal/GlobalModal";
import ManageMilestoneModal from "@/shared/widgets/ManageMilestoneModal/ManageMilestoneModal";
import { useState } from "react";
import CloseMilestoneItemCard from "./CloseMilestoneItemCard";
import OngoingMilestoneItemCard from "./OngoingMilestoneItemCard";
import NotStartedMilestoneItemCard from "./NotStartedMilestoneItemCard";
import { PlusIcon } from "../../../public/icons/talent-client/PlusIcon";

const MilestoneItem = ({ contract }: any) => {
	const [showPaymentModal, setPaymentModal] = useState(false);
	const [showAddMilestoneModal, setShowAddMilestoneModal] = useState(false);
	const [showMilestoneModal, setShowMilestoneModal] = useState(false);
	const [date, setDate] = useState<Date | null>(null);
	const handleButton = (action: string) => {
		alert(action);
	};
	return (
		<div>
			<div className="w-full xl:pb-0 md:pb-[40px] pb-[52px] md:pt-[33px] pt-[20px]">
				<div className="md:w-[593px] w-[100%] 2xl:ml-[8.2rem] ml-0">
					{contract?.milestones &&
						contract?.milestones.map((item: any) => (
							<div key={item.id} className="">
								{item?.status === "closed" ? (
									<CloseMilestoneItemCard item={item} />
								) : item?.status === "ongoing" ? (
									<OngoingMilestoneItemCard
										item={item}
										showPaymentModal={showPaymentModal}
										setPaymentModal={setPaymentModal}
									/>
								) : item?.status === "not_started" ? (
									<NotStartedMilestoneItemCard item={item} />
								) : (
									<></>
								)}
							</div>
						))}
					<div className="w-full flex md:justify-center justify-end">
						<div className="w-[1px] md:h-[30px] h-[20px] bg-[#c6c2c2a6] relative">
							<div className="absolute bottom-0 left-[-2.75px] w-[5.5px] h-[5.5px] rounded-[50%] bg-[#c6c2c2a6] "></div>
						</div>
					</div>
					<div className="w-full flex md:justify-center justify-end md:mt-[11px] mt-[50px] relative">
						<div className=" flex justify-center items-center md:mr-0 mr-[-18px]">
							<button
								onClick={() => setShowAddMilestoneModal(true)}
								className="w-[36px] h-[36px] rounded-[50%] border-[1px] border-[#CBEC5E] hover:bg-[#CBEC5E] text-[18px] z-10 cursor-pointer  ">
								<PlusIcon />
							</button>
						</div>
						<div className="absolute right-0 top-0 w-full h-full flex md:items-center items-end md:justify-center justify-start">
							<h3 className="text-[16px] font-[500] text-[#18470D] md:ml-[13.7rem] ml-0">
								Add new milestone
							</h3>
						</div>
					</div>
					<div className="w-[233px] xl:h-[48px] h-[40px] flex md:!mx-auto mx-0 2xl:mt-[110px] xl:mt-[120px] mt-[48px] text-[15px] font-[500] text-[#18470D] md:ml-0 ml-[51px]">
						<Button
							onClick={() => setShowMilestoneModal(true)}
							type="transparent"
							action="Manage Milestones"
						/>
					</div>
				</div>
			</div>

			{/* add milestone modal  */}
			{showAddMilestoneModal && (
				<GlobalModal
					isOpen={showAddMilestoneModal}
					onClose={() => setShowAddMilestoneModal(false)}
					classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[517px] h-[524px] md:px-[38px]  px-[24px] xl:py-[24px] md:py-[38px] py-[24px]">
					<>
						<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] 2xl:mb-[53px] xl:mb-[37px] md:mb-[40px] mb-[30px]">
							Add new milestone
						</h1>

						<div className="w-full xl:mb-[29px] md:mb-[16px] mb-[20px]">
							<p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
								Name of Milestone 3*
							</p>
							<Input
								width="100%"
								height="42px"
								type="text"
								isIcon={false}
								value=""
								placeholder="Milestone name"
							/>
						</div>

						<div className="w-full xl:mb-[29px] md:mb-[16px] mb-[20px]">
							<p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
								Amount*
							</p>
							<Input
								width="100%"
								height="42px"
								type="number"
								isIcon={false}
								value="0.0"
								icon="Amount"
								placeholder=""
							/>
						</div>
						<div className="w-full">
							<p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
								Due Date
							</p>
							<div className="w-[100%] h-[42px]">
								<CustomDatePicker
									onChangeDate={setDate}
									isIcon={true}
									width="100%"
									height="100%"
								/>
							</div>
						</div>
						<div className="absolute xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
							<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
								<Button
									onClick={() => setShowAddMilestoneModal(false)}
									action={"Cancel"}
									type={"nonBorder"}
								/>
							</div>
							<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
								<Button action={"Save"} type={""} />
							</div>
						</div>
					</>
				</GlobalModal>
			)}

			{/* milestone modal  */}
			{showMilestoneModal && (
				<GlobalModal
					isOpen={showMilestoneModal}
					onClose={() => setShowMilestoneModal(false)}
					classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[768px] md:h-[590px] h-[665px] xl:px-[38px] px-[24px] xl:py-[28px] py-[24px]">
					<ManageMilestoneModal
						setShowMilestoneModal={setShowMilestoneModal}
						setDate={setDate}
						date={date}
						milestones={contract?.milestones}
					/>
				</GlobalModal>
			)}
		</div>
	);
};

export default MilestoneItem;
