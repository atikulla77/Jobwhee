import Button from "@/shared/ui-kit/Button";

const ContractRefund = () => {
	return (
		<div className="w-full">
			<div className="mt-8 2xl:mb-[50px] xl:mb-[40px] md:mb-[50px] mb-[30px] md:max-w-full mx-auto flex items-center xl:pl-[26px] md:pl-[19px] pl-[15px] 2xl:pr-8 xl:pr-[29px] pr-[23px] border-2 border-[#CBEC5E] rounded-2xl xl:h-[116px] md:h-[82px] h-[85px] md:py-0 py-[10px]">
				<h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
					Refund Request
				</h1>
			</div>
			<div className="    rounded-xl border border-[#CBEC5E] p-6">
				<div className="flex justify-between mb-2">
					<h3 className="text-md font-semibold">Request</h3>
					<h3 className="text-md font-semibold">Note</h3>
				</div>

				<div className="flex justify-between mb-2">
					<div>
						<p className="text-sm text-gray-600">Contract</p>
						<p className="text-sm bg-gray-200 p-1 rounded">
							Hairstylist Needed for Special Events
						</p>
						<div className="  mb-2">
							<div>
								<p className="text-sm text-gray-600">Invoice</p>
								<p className="text-sm bg-gray-200 p-1 rounded">Week 1</p>
							</div>
							<div>
								<p className="text-sm text-gray-600">Amount</p>
								<p className="text-sm bg-gray-200 p-1 rounded">€500.0</p>
							</div>
						</div>
					</div>
					<div className="text-sm">
						I’m requesting a refund for the milestone payment of €500 made for
						the Hairstylist Needed for Special Events project due to the
						following reasons:
						<br />
						<br />
						Incomplete Work: The deliverables did not meet the expectations
						outlined in the project scope. Specifically, the required
						hairstyling concepts and designs were not completed as agreed. The
						final deliverables didn’t reflect the style we discussed for the
						special events, and some of the proposed styles were missing key
						details.
						<br />
						<br />
						Delayed Delivery: The work was not completed within the agreed
						timeframe, which impacted our ability to move forward with the event
						planning and caused significant delays in our project schedule.
						<br />
						<br />
						Please process the refund for the milestone amount of €500. Let me
						know if you have any questions or if further clarification is
						needed. I appreciate your prompt attention to this matter.
						<br />
						<br />
						Best regards,
						<br />
						Eleni C.
					</div>
				</div>
			</div>
			<div className=" pt-4 xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Reject"} type={"nonBorder"} />
				</div>
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Give Refund"} type="active" />
				</div>
			</div>
		</div>
	);
};

export default ContractRefund;
