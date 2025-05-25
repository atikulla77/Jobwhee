"use client"

import ContractRefund from "@/components/contracts/ContractRefund";
import GiveRefund from "@/components/contracts/GiveRefund";

const page = () => {
	return (
		<div className="max-w-[335px] md:max-w-[780px] xl:max-w-[1200px] 2xl:max-w-[1472px] mx-auto [@media(min-width:835px)]:px-0 md:px-[10px] px-0 space-y-[50px]">
			<GiveRefund />
			<ContractRefund />
		</div>
	);
};

export default page;
