"use client";

import Button from "@/shared/ui-kit/Button";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";
import { Input } from "@/shared/ui-kit/Input";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { GlobalModal } from "@/shared/widgets/GlobalModal/GlobalModal";
import { useState } from "react";

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
									<>
										<div className="w-full flex justify-start">
											<div className="w-[297px] h-fit pb-[40px] flex justify-start relative">
												<div className="absolute right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
												<div className="w-[290px] h-[128px] flex justify-start items-center relative">
													<div className="absolute right-[-14px] top-0 h-full z-[1] flex items-center">
														<div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
													</div>
													<div className="absolute right-[0px] top-0 h-full z-[0] flex items-center">
														<div
															className="w-[27px] h-[22px] rotate-[90deg] bg-[#F5F5F5]"
															style={{
																clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
															}}></div>
													</div>
													{/* content */}
													<div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#F5F5F5] rounded-[16px] relative">
														<div className="space-y-[8px] opacity-50">
															<h4 className="text-[16px] font-medium text-[#18470D] ">
																{item?.title}
															</h4>
															<p className="text-[16px] font-[400] text-[#000000]">
																€ {item?.amount}
															</p>
															<p className="text-[15px] font-[500] text-[#5B5B5B] bg-[#e2e2e27a] rounded-[30px] px-[17px] py-[5px] capitalize">
																{item?.status}
															</p>
														</div>
														<div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
															<div className="w-full h-[80%] bg-white"></div>
														</div>
														<div className="font-[500] text-[#00000078] flex flex-col items-center leading-[30px]">
															<p className="text-[14px]">March</p>
															<h1 className="text-[35px] font-[400]">01</h1>
															<p className="text-[14px]">2025</p>
														</div>
													</div>
												</div>
											</div>
										</div>
									</>
								) : item?.status === "ongoing" ? (
									<>
										<div className="w-full flex md:justify-end justify-start">
											{/* --------------------------------40px----------- */}
											<div className="w-[297px] h-fit pb-[80px] flex md:justify-end justify-start relative">
												{/* Middle Line */}
												<div className="absolute md:left-0 left-[] md:right-[] right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
												<div className="w-[290px] h-[128px] flex md:justify-end justify-start items-center relative">
													{/* Middle Line cercle */}
													<div className="absolute md:left-[-14px] left-[] md:right-[] right-[-14px] top-0 h-full z-[1] flex items-center">
														<div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
													</div>
													{/* left Arrow */}
													<div className="absolute md:left-0 left-[] md:right-[] right-0 top-0 h-full z-[0] flex items-center">
														<div
															className="w-[27px] h-[22px] md:rotate-[270deg] rotate-[90deg] bg-[#CBEC5E]"
															style={{
																clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
															}}></div>
													</div>
													{/* content */}
													<div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#CBEC5E] rounded-[16px] relative">
														<div className="space-y-[8px]">
															<h4 className="text-[16px] font-medium text-[#18470D] ">
																{item?.title}
															</h4>
															<p className="text-[16px] font-[400] text-[#000000]">
																€ {item?.amount}
															</p>
															<p className="text-[15px] font-[500] text-[#5A7D06] bg-[#EEF6DB] rounded-[30px] px-[17px] py-[5px] capitalize">
																{item?.status}
															</p>
														</div>
														<div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
															<div className="w-full h-[80%] bg-white"></div>
														</div>
														<div className="font-[500] text-[#000000] flex flex-col items-center leading-[30px]">
															<p className="text-[14px]">March</p>
															<h1 className="text-[35px] font-[400]">01</h1>
															<p className="text-[14px]">2025</p>
														</div>
													</div>
													{/* Button */}
													<div className="absolute md:bottom-[-50px] bottom-[-45px]    w-[266px] mx-auto h-[38px] z-50 text-[15px] font-[500] text-[#18470D] bg-[#CBEC5E] rounded-[30px]">
														<Button
															onClick={() => setPaymentModal(true)}
															type="active"
															action={"Submit the payment"}
														/>
													</div>
												</div>
											</div>
										</div>
									</>
								) : item?.status === "not_started" ? (
									<>
										<div className="w-full flex justify-start">
											<div className="w-[297px] h-fit pb-[40px] flex justify-start relative">
												{/* Middle Line */}
												<div className="absolute right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
												<div className="w-[290px] h-[128px] flex justify-start items-center relative">
													{/* Middle Line cercle */}
													<div className="absolute right-[-14px] top-0 h-full z-[1] flex items-center">
														<div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
													</div>
													{/* left Arrow */}
													<div className="absolute right-[0px] top-0 h-full z-[0] flex items-center">
														<div
															className="w-[27px] h-[22px] rotate-[90deg] bg-[#F0F1F4]"
															style={{
																clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
															}}></div>
													</div>
													{/* content */}
													<div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#F0F1F4] rounded-[16px] relative">
														<div className="space-y-[8px]">
															<h4 className="text-[16px] font-medium text-[#18470D] ">
																{item?.title}
															</h4>
															<p className="text-[16px] font-[400] text-[#000000]">
																€ {item?.amount}
															</p>
															<p className="text-[15px] font-[500] text-[#CAAC00] bg-[#F6EED9] rounded-[30px] px-[17px] py-[5px] capitalize">
																{item?.status === "not_started"
																	? "Not Started"
																	: item?.status}
															</p>
														</div>
														<div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
															<div className="w-full h-[80%] bg-white"></div>
														</div>
														<div className="font-[500] text-[#000000] flex flex-col items-center leading-[30px]">
															<p className="text-[14px]">
																{item.dueDate.split(" ")[0]}
															</p>{" "}
															<h1 className="text-[35px] font-[400]">
																{item.dueDate.split(" ")[1]}
															</h1>{" "}
															<p className="text-[14px]">
																{item.dueDate.split(" ")[2]}
															</p>{" "}
														</div>
													</div>
												</div>
											</div>
										</div>
									</>
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
								className="w-[36px] h-[36px] rounded-[50%] border-[1px] border-[#CBEC5E] hover:bg-[#CBEC5E] text-[18px] z-50 cursor-pointer  text-[#18470D]">
								+
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
			{/* payment modal  */}
			{showPaymentModal && (
				<GlobalModal
					isOpen={showPaymentModal}
					onClose={() => setPaymentModal(false)}
					width="w-[678px]"
					height="h-[687px]">
					<>
						<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] mb-[30px]">
							Submit the payment
						</h1>

						<p className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
							Name of the milestone
						</p>

						<div className="h-[42px] bg-[#EAEAEA] rounded-[12px] flex items-center p-[8px]">
							<p className="text-[#8B939F]">Week 2</p>
						</div>

						<div className="w-full flex md:flex-row flex-col justify-between xl:gap-[46px] gap-[12px] xl:mt-[20px] mt-[23px] xl:mb-[20px] mb-[26px]">
							<div className="w-[100%] space-y-[8px]">
								<h2 className="xl:text-[18px] text-[16px] text-[#545454]">
									Amount
								</h2>
								<Input
									width="100%"
									height="42px"
									type="text"
									placeholder=""
									isIcon={false}
									value="500.0"
								/>
							</div>
							<div className="w-[100%] space-y-[8px]">
								<h2 className="xl:text-[18px] text-[16px] text-[#545454]">
									Due date
								</h2>
								<Input
									width="100%"
									height="42px"
									type="text"
									isIcon={false}
									placeholder=""
									value="22.03.2025"
									disabled={true}
								/>
							</div>
						</div>

						<h2 className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
							Note (Optional)
						</h2>
						<TextArea
							placeholder="Write additional note"
							width={"100%"}
							height={"146px"}
							responsiveWidthHeight="w-[100%] h-[146px]"
						/>

						<div className="absolute xl:bottom-[36px] md:bottom-[65px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
							<div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
								<Button
									onClick={() => setPaymentModal(false)}
									action={"Reject"}
									type={"nonBorder"}
								/>
							</div>
							<div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
								<Button action={"Release payment"} type={"active"} />
							</div>
						</div>
					</>
				</GlobalModal>
			)}

			{/* add milestone modal  */}
			{showAddMilestoneModal && (
				<GlobalModal
					isOpen={showAddMilestoneModal}
					onClose={() => setShowAddMilestoneModal(false)}
					width="w-[678px]"
					height="h-[687px]">
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
								type="text"
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
					width="w-[678px] "
					height="h-[687px]">
					<>
						<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] px-[10px] xl:mb-[21px] md:mb-[27px] mb-[19px]">
							Manage Milestones
						</h1>

						<div className="xl:h-[527px] md:h-[392px] h-[440px] px-[10px] pt-[10px]  relative overflow-y-auto">
							<div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
								<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
									<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
										1
									</h3>
									<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
										Week 1
									</h1>
								</div>

								<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
									<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
										Change due date
									</h2>
									<div className="w-[100%] h-[42px]">
										<CustomDatePicker
											onChangeDate={setDate}
											isIcon={true}
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</div>
							<div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
								<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
									<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
										1
									</h3>
									<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
										Week 1
									</h1>
								</div>

								<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
									<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
										Change due date
									</h2>
									<div className="w-[100%] h-[42px]">
										<CustomDatePicker
											onChangeDate={setDate}
											isIcon={true}
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</div>
							<div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
								<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
									<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
										1
									</h3>
									<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
										Week 1
									</h1>
								</div>

								<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
									<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
										Change due date
									</h2>
									<div className="w-[100%] h-[42px]">
										<CustomDatePicker
											onChangeDate={setDate}
											isIcon={true}
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</div>
							<div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
								<div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
									<h3 className="xl:text-[16px] text-[14px] text-[#000000]">
										1
									</h3>
									<h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
										Week 1
									</h1>
								</div>

								<div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
									<h2 className="xl:text-[18px] text-[13px] text-[#414750]">
										Change due date
									</h2>
									<div className="w-[100%] h-[42px]">
										<CustomDatePicker
											onChangeDate={setDate}
											isIcon={true}
											width="100%"
											height="100%"
										/>
									</div>
								</div>
							</div>
						</div>
						<div className="xl:w-[774px] md:w-[508px] w-[287px] h-[1px] md:ml-[8px] ml-[10px] bg-[#18470D]"></div>

						<div className="absolute xl:bottom-[49px] bottom-[24px] xl:right-[38px] md:right-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
							<div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
								<Button
									onClick={() => setShowMilestoneModal(false)}
									action={"Cancel"}
									type={"nonBorder"}
								/>
							</div>
							<div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
								<Button action={"Save"} type={"active"} />
							</div>
						</div>
					</>
				</GlobalModal>
			)}
		</div>
	);
};

export default MilestoneItem;
