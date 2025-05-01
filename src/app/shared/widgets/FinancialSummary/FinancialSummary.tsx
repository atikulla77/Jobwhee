const FinancialSummary = ({ contract }: any) => {
	return (
		<div className="w-full sm:h-[114px] md:h-[104px]  flex xl:flex-row flex-col justify-between items-center border-[1.5px] border-[#CBEC5E] rounded-2xl md:text-center text-left text-black 2xl:px-[30px] xl:px-[25px] md:px-[30px] px-[14px] xl:text-[20px] text-[16px] font-[500] xl:py-0 md:py-[30px] py-[15px]">
			<div className="w-full flex sm:flex-row flex-col sm:justify-between justify-start 2xl:pr-[60px] xl:pr-[37px] pr-0 xl:pb-0 pb-[13px] md:gap-0 gap-[22px]">
				<div className="flex flex-col xl:gap-[12px] gap-[14px]">
					<h1 className="">Project Price</h1>
					<p className="text-[16px] font-normal">€ {contract?.projectPrice}</p>
				</div>
				<div className="flex flex-col xl:gap-[12px] gap-[14px]">
					<h1 className="">Money in Secure</h1>
					<p className="text-[16px] font-normal">€ {contract?.inEscrow}</p>
				</div>
				{contract?.milestonesPaid && (
					<div className="flex flex-col xl:gap-[12px] gap-[14px]">
						<h1 className="">Milestones Paid ({contract?.milestonesPaid})</h1>
						<p className="text-[16px] font-normal">
							€ {contract?.milestonesPaid}
						</p>
					</div>
				)}
				{contract?.milestonesRemaining && (
					<div className="flex flex-col xl:gap-[12px] gap-[14px]">
						<h1 className="">
							Milestones Remaining ({contract?.milestonesRemaining})
						</h1>
						<p className="text-[16px] font-normal">€ 500</p>
					</div>
				)}

				<div className="flex flex-col xl:gap-[12px] gap-[14px] sm:pl-3 sm:pt-0 pt-4 sm:border-l sm:border-t-0 border-t border-[#CBEC5E]">
					<h1 className="">Total Spend</h1>
					<p className="text-[16px] font-normal"> € {contract?.totalSpend}</p>
				</div>
			</div>
		</div>
	);
};

export default FinancialSummary;
