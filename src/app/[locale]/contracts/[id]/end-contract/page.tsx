"use client";
import EndContractExperience from "@/components/end-contract/EndContractExperience";
import TalentProfileCard from "@/shared/widgets/TalentProfileCard/TalentProfileCard";
import { talent } from "./data/talent";

const page = () => {
	return (
		<div className="">
			<div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] flex flex-wrap justify-between mx-auto pt-[52px] pb-[50px]">
				<EndContractExperience />
				<TalentProfileCard talentInfo={talent.talent} />
			</div>
		</div>
	);
};

export default page;
 