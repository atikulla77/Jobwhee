import ContractActionMenu from "@/app/shared/widgets/ContractActionMenu/ContractActionMenu";
import ContractDropdownMenu from "@/app/shared/widgets/ContractDropdownMenu/ContractDropdownMenu";

const ContractHeader = ({ contract }: any) => {
	return (
		<div className="mt-8 2xl:mb-[50px] xl:mb-[40px] md:mb-[50px] mb-[30px] md:max-w-full mx-auto flex flex-wrap md:justify-between justify-start items-center xl:pl-[26px] md:pl-[19px] pl-[15px] 2xl:pr-8 xl:pr-[29px] pr-[23px] border-2 border-[#CBEC5E] rounded-2xl xl:h-[116px] md:h-[82px] h-[85px] md:py-0 py-[10px]">
			<h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
				{contract.title}
			</h1>
			<ContractDropdownMenu contract={contract} />
		</div>
	);
};

export default ContractHeader;
