import Image from "next/image";
import { SecuredButton } from "../../../public/icons/SecuredButton";
import { HeartIcon } from "../../../public/icons/HeartIcon copy";
import { LetterIcon } from "../../../public/icons/LetterIcon";
import Link from "next/link";

interface TalentProfileCardProps {
	id: number;
	name: string;
	profession: string;
	totalEarning: string;
	totalJobs: number;
	totalHours: number;
	lastContractTogether: string;
	imgUrl: string;
}

const TalentProfileCard = (talentInfo: TalentProfileCardProps) => {
	return (
		<Link href={`/client/${talentInfo.id}/talentPublicPage`}>
			<div className="p-[14px_20px] w-[285px] h-[403px] border border-[#EAEAEA] rounded-[20px] flex justify-center card-shadow">
				<div className="flex items-center flex-col">
					<div className="w-[113px] h-[113px] rounded-full overflow-hidden border-[2px] border-[#CBEC5E]">
						<Image
							src={talentInfo.imgUrl}
							alt="person-avatar"
							width={116}
							height={109}
						/>
					</div>
					<div className="flex gap-[4px] mt-[7px] items-center">
						<span className="text-[18px] font-semibold">{talentInfo.name}</span>
						<div className="w-[20px] h-[20px]">
							<SecuredButton />
						</div>
					</div>
					<span className="text-[#A5A5A5] text-[14px]">
						{talentInfo.profession}
					</span>
					<div className="flex mt-[7px] justify-between w-full">
						<div className="text-center">
							<p className="text-[16px]">{talentInfo.totalEarning}</p>
							<p className="text-[12px] text-[#545454]">Total Earning</p>
						</div>
						<div className="text-center">
							<p className="text-[16px]">{talentInfo.totalJobs}</p>
							<p className="text-[12px] text-[#545454]">Total Jobs</p>
						</div>
						<div className="text-center">
							<p className="text-[16px]">{talentInfo.totalHours}</p>
							<p className="text-[12px] text-[#545454]">Total Hours</p>
						</div>
					</div>
					<div className="mt-[13px] leading-[25px]">
						<p className="text-[12px]">Last contract together:</p>
						<p className="text-[12px]">{talentInfo.lastContractTogether}</p>
					</div>
					<div className="flex gap-[8px] mt-[28px] sm:mt-[32px] lg:mt-[29px] 2xl:mt-[28px]">
						<button className="w-[149px] h-[40px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
							Rehire
						</button>
						<div className="w-[40px] h-[40px] border border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center">
							<HeartIcon />
						</div>
						<div className="w-[40px] h-[40px] border border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center">
							<LetterIcon />
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};

export default TalentProfileCard;
