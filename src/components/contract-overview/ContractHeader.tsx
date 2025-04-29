import ContractActionMenu from "@/app/shared/widgets/ContractActionMenu/ContractActionMenu";
import ContractDropdownMenu from "@/app/shared/widgets/ContractDropdownMenu/ContractDropdownMenu";

const ContractHeader = ({ contract }: any) => {
	return (
		<div className="md:max-w-full mx-auto flex flex-wrap justify-between items-center xl:pl-[26px] md:pl-[19px] pl-[10px] xl:pr-[29px] md:pr-[23px] pr-[15px] border-[1.5px] border-[#CBEC5E] md:rounded-2xl rounded-[14px] 2xl:h-[116px] xl:h-[144px] md:h-[124px] h-[114px]">
			<h1 className="2xl:w-fit xl:w-[744px] md:w-[521px] w-[243px] xl:text-[40px] md:text-[28px] text-[20px] font-medium">
				{contract.title}
			</h1>
			<ContractDropdownMenu contract={contract} />
		</div>
	);
};

export default ContractHeader;
