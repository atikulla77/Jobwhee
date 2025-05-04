import Image from "next/image";
import { SecuredButton } from "../../../../public/icons/SecuredButton";
import { HeartIcon } from "../../../../public/icons/HeartIcon copy";
import { LetterIcon } from "../../../../public/icons/LetterIcon";
import Link from "next/link";
import { StartIcon } from "../../../../public/icons/talent-client/StartIcon";
import { useState } from "react";

 

const TalentProfileCard = ({talentInfo}:any) => {
		const topTalentPortfolioCard = useState(true);
	
	return (
		<div className="2xl:w-[533px] xl:w-[414px] w-full md:h-[534px] h-[458px] rounded-[16px] shadow-[0px_0px_15px_0px_#00000017] overflow-hidden relative 2xl:mt-0 xl:mt-[57px] mt-[20px]">
			<div className="w-full md:h-[528px] h-[454px] text-center bg-white rounded-[16px] relative z-[1] xl:pt-[38px] md:pt-[58px] pt-[20px] 2xl:pb-[74px] md:pb-[30px] pb-[20px] md:mb-0 mb-[6px]">
				<div
					className={`w-[123px] h-[123px] mx-auto relative ${
						topTalentPortfolioCard
							? "2xl:mb-[45px] md:mb-[28px] mb-[40px]"
							: "2xl:mb-[42px] mb-[20px]"
					} `}>
					<Image
						src={"/images/topTalents/userPhoto.png"}
						width={123}
						height={123}
						alt=""
						className="rounded-[50%]"
					/>
					<div className="w-[26.65px] h-[26.65px] absolute left-[2px] top-[2px] flex justify-center items-center bg-[#fff] rounded-[50%]">
						<div className="w-[21.8px] h-[21.8px] bg-[#00FF4D] rounded-[50%]"></div>
					</div>

					<div
						className={`${
							topTalentPortfolioCard ? "flex" : "hidden"
						} absolute left-0 bottom-[-25px] w-full justify-center`}>
						<Image
							src={"/images/icon-images/topTalentBatch.png"}
							width={36.68}
							height={46.01}
							alt=""
							className=""
						/>
					</div>
				</div>
				<h1 className="text-[20px] font-[600] mb-[10px]">{talentInfo?.name}</h1>
				<div className="flex justify-center items-center gap-[8px] mb-[16px]">
					<Image
						src={"/images/icon-images/map-pin.png"}
						width={20}
						height={20}
						alt=""
						className="rounded-[50%]"
					/>
					<h2 className="text-[18px] text-[#64748B] font-[500]">
						{talentInfo?.location}
					</h2>
				</div>
				<div className="w-[98px] h-[36px] flex items-center justify-center border-[1px] border-[#AEB3BC] rounded-[40px] mx-auto gap-[7px] md:mb-[22px] mb-[42px]">
					<StartIcon />

					<p className="text-[18px] font-[500]">{talentInfo?.rating}</p>
				</div>
				<div className="flex justify-center items-center 2xl:gap-[28px] xl:gap-[12px] md:gap-[20px] gap-[12px]">
					<div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] ">
						<h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
							{talentInfo?.earnings}
						</h2>
						<p className="text-[14px] font-[500]">Total Earning</p>
					</div>
					<div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] ">
						<h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
							{talentInfo?.totalJobs}
						</h2>
						<p className="text-[14px] font-[500]">Total Jobs</p>
					</div>
					<div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] ">
						<h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
							{talentInfo?.totalHours}
						</h2>
						<p className="text-[14px] font-[500]">Total Hours</p>
					</div>
				</div>
			</div>

			<div className="absolute left-0 bottom-0 w-full h-[20px] bg-[#CBEC5E] z-0"></div>
		</div>
	);
};

export default TalentProfileCard;
	// <Link href={`/client/${talentInfo.id}/talentPublicPage`}>
	// 		<div className="p-[14px_20px] w-[285px] h-[403px] border border-[#EAEAEA] rounded-[20px] flex justify-center card-shadow">
	// 			<div className="flex items-center flex-col">
	// 				<div className="w-[113px] h-[113px] rounded-full overflow-hidden border-[2px] border-[#CBEC5E]">
	// 					<Image src={talentInfo.imgUrl} alt="person-avatar" />
	// 				</div>
	// 				<div className="flex gap-[4px] mt-[7px] items-center">
	// 					<span className="text-[18px] font-semibold">{talentInfo.name}</span>
	// 					<div className="w-[20px] h-[20px]">
	// 						<SecuredButton />
	// 					</div>
	// 				</div>
	// 				<span className="text-[#A5A5A5] text-[14px]">
	// 					{talentInfo.profession}
	// 				</span>
	// 				<div className="flex mt-[7px] justify-between w-full">
	// 					<div className="text-center">
	// 						<p className="text-[16px]">{talentInfo.totalEarning}</p>
	// 						<p className="text-[12px] text-[#545454]">Total Earning</p>
	// 					</div>
	// 					<div className="text-center">
	// 						<p className="text-[16px]">{talentInfo.totalJobs}</p>
	// 						<p className="text-[12px] text-[#545454]">Total Jobs</p>
	// 					</div>
	// 					<div className="text-center">
	// 						<p className="text-[16px]">{talentInfo.totalHours}</p>
	// 						<p className="text-[12px] text-[#545454]">Total Hours</p>
	// 					</div>
	// 				</div>
	// 				<div className="mt-[13px] leading-[25px]">
	// 					<p className="text-[12px]">Last contract together:</p>
	// 					<p className="text-[12px]">{talentInfo.lastContractTogether}</p>
	// 				</div>
	// 				<div className="flex gap-[8px] mt-[28px] sm:mt-[32px] lg:mt-[29px] 2xl:mt-[28px]">
	// 					<button className="w-[149px] h-[40px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium">
	// 						Rehire
	// 					</button>
	// 					<div className="w-[40px] h-[40px] border border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center">
	// 						<HeartIcon />
	// 					</div>
	// 					<div className="w-[40px] h-[40px] border border-[#CCCCCC] rounded-full cursor-pointer flex justify-center items-center">
	// 						<LetterIcon />
	// 					</div>
	// 				</div>
	// 			</div>
	// 		</div>
	// 	</Link>