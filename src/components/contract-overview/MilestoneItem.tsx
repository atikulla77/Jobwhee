"use client";

import Button from "@/shared/ui-kit/Button";

const MilestoneItem = ({ contract }: any) => {
	const handleButton = (action: string) => {
		alert(action);
	};
	return (
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
														handleButton={handleButton}
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
							onClick={() => alert("add milestone")}
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
						type="transparent"
						action="Manage Milestones"
						handleButton={handleButton}
					/>
				</div>
			</div>
		</div>
	);
};

export default MilestoneItem;
