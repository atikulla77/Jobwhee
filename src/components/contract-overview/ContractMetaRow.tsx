const ContractMetaRow = ({ contract }: any) => {
	return (
		<div className="w-full md:h-[235px] xl:h-[104px]  flex xl:flex-row flex-col justify-between items-center border-[1.5px] border-[#CBEC5E] rounded-2xl md:text-center text-left text-black 2xl:pl-[30px] xl:pl-[27px] md:pl-[30px] pl-[14px] 2xl:pr-[30px] xl:pr-[50px] md:pr-[30px] pr-[14px] xl:text-[20px] text-[16px] font-[500] xl:pt-0 md:pt-[30px] pt-[15px] xl:pb-0 md:pb-[30px] pb-[11px]">
			<div className="w-full flex md:flex-row flex-col md:justify-between justify-start  pr-0 xl:pb-0 md:pb-[30px] pb-[22px]">
				<div className="2xl:w-[calc(100%-190.85px)] xl:w-[calc(100%-150.85px)] w-full flex md:flex-row flex-col md:justify-between justify-start items-center 2xl:pr-[58px] xl:pr-[36px] pr-0 md:gap-0 gap-[22px]">
					<div className="md:w-fit w-full flex flex-col gap-[14px]">
						<h1 className="">Project Price</h1>
						<p className="text-[16px] font-normal md:text-center">
							€ {contract?.projectPrice}
						</p>
					</div>
					<div className="md:w-fit w-full flex flex-col gap-[14px]">
						<h1 className="">Money in Secure</h1>
						<p className="text-[16px] font-normal md:text-center">
							€ {contract?.inEscrow}
						</p>
					</div>
					{contract?.milestonesPaid && (
						<div className="md:w-fit w-full flex flex-col gap-[14px]">
							<h1 className="">Milestones Paid ({contract?.milestonesPaid})</h1>
							<p className="text-[16px] font-normal md:text-center">€ 500</p>
						</div>
					)}
					{contract?.milestonesRemaining && (
						<div className="md:w-fit w-full flex flex-col gap-[14px]">
							<h1 className="">
								Milestones Remaining ({contract?.milestonesRemaining})
							</h1>
							<p className="text-[16px] font-normal md:text-center">€ 500</p>
						</div>
					)}
				</div>
				<div className="xl:flex hidden flex-col gap-[14px] border-l 2xl:pl-[70px] pl-[30px] border-[#CBEC5E]">
					<h1 className="inline-block text-base">Total Spend</h1>
					<p className="inline-block text-[16px] font-normal md:text-center">
						€ {contract?.totalSpend}
					</p>
				</div>
			</div>
			<div className="xl:hidden flex flex-col md:items-center gap-[11px] w-full border-t border-[#CBEC5E]">
				<h1 className="text-[20px] md:pt-[18px] pt-[15px]">Total Spend</h1>
				<p className="text-[16px] font-normal md:text-center">
					€ {contract?.totalSpend}
				</p>
			</div>
		</div>
	);
};

export default ContractMetaRow;
