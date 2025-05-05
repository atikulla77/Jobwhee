 

const NotStartedMilestoneItemCard = ({item}:any) => {
  return (
		<div>
				<div className="w-full flex justify-start">
					<div className="w-[297px] h-fit pb-[40px] flex justify-start relative">
						<div className="absolute right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
						<div className="w-[290px] h-[128px] flex justify-start items-center relative">
							<div className="absolute right-[-14px] top-0 h-full z-[1] flex items-center">
								<div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
							</div>
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
									<p className="text-[14px]">{item.dueDate.split(" ")[0]}</p>{" "}
									<h1 className="text-[35px] font-[400]">
										{item.dueDate.split(" ")[1]}
									</h1>{" "}
									<p className="text-[14px]">{item.dueDate.split(" ")[2]}</p>{" "}
								</div>
							</div>
						</div>
					</div>
				</div>
		</div>
	);
}

export default NotStartedMilestoneItemCard
