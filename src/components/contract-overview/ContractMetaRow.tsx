const ContractMetaRow = ({ contract }: any) => {
	return (
		<div className="w-full md:h-[235px] xl:h-[104px]  flex xl:flex-row flex-col justify-between items-center border-[1.5px] border-[#CBEC5E] rounded-2xl md:text-center text-left text-black 2xl:px-[30px] xl:px-[25px] md:px-[30px] px-[14px] xl:text-[20px] text-[16px] font-[500] xl:py-0 md:py-[30px] py-[15px]">
			<div className="w-full flex md:flex-row flex-col md:justify-between justify-start  pr-0 xl:pb-0 pb-[13px] md:gap-0 gap-[22px]">
				<div className="flex flex-col xl:gap-[12px] gap-[14px]">
					<h1 className="">Project Price</h1>
					<p className="text-[16px] font-normal md:text-center">
						€ {contract?.projectPrice}
					</p>
				</div>
				<div className="flex flex-col xl:gap-[12px] gap-[14px]">
					<h1 className="">Money in Secure</h1>
					<p className="text-[16px] font-normal md:text-center">
						€ {contract?.inEscrow}
					</p>
				</div>
				{contract?.milestonesPaid && (
					<div className="flex flex-col xl:gap-[12px] gap-[14px]">
						<h1 className="">Milestones Paid ({contract?.milestonesPaid})</h1>
						<p className="text-[16px] font-normal md:text-center">
							€ {contract?.milestonesPaid}
						</p>
					</div>
				)}
				{contract?.milestonesRemaining && (
					<div className="flex flex-col xl:gap-[12px] gap-[14px]">
						<h1 className="">
							Milestones Remaining ({contract?.milestonesRemaining})
						</h1>
						<p className="text-[16px] font-normal md:text-center">€ 500</p>
					</div>
				)}
				<div className="xl:block hidden   border-l 2xl:pl-[70px] pl-[30px] border-[#CBEC5E]">
					<div>
						<h1 className="">Total Spend</h1>
						<p className="text-[16px] font-normal md:text-center">
							{" "}
							€ {contract?.totalSpend}
						</p>
					</div>
				</div>
			</div>
			<div className="xl:hidden  flex flex-col  md:items-center xl:gap-[12px] gap-[14px] md:pl-3 md:pt-0 w-full  border-t border-[#CBEC5E]">
				<h1 className="pt-[21px]">Total Spend</h1>
				<p className="text-[16px] font-normal md:text-center">
					{" "}
					€ {contract?.totalSpend}
				</p>
			</div>
		</div>
	);
};

export default ContractMetaRow;
