import StarRating from "@/shared/ui-kit/StarRating";
import Image from "next/image";
import verifyTalentIcon from "../../../public/images/icon-images/verifyTalentIcons.png";

interface ClientData {
	logo: string;
	name: string;
	memberSince: string;
	paymentVerified: boolean;
	rating: number;
	reviewScore: string;
	country: string;
	cityTime: string;
	jobsPosted: number;
	openJobs: number;
	totalSpent: string;
	hires: number;
	activeHires: number;
}

interface ContractDetailsClientProps {
	client: ClientData;
}

const ContractDetailsClient = ({ client }: ContractDetailsClientProps) => {
	return (
		<div className="w-full xl:h-[564px] md:h-[549px] h-[529px] text-[#545454] rounded-[16px] border border-[#CBEC5E] 2xl:px-[24px] xl:px-[28px] md:px-[20px] px-[14px] xl:py-[24px] md:py-[20px] py-[14px]">
			<h2 className="md:text-[30px] text-[28px] font-[500] text-black mb-[27px] md:mt-[4px] mt-0 2xl:pl-[3px] pl-0">
				About the client
			</h2>
			<div className="flex items-center mb-[24px]">
				<Image
					src={client.logo}
					width={78}
					height={78}
					alt=""
					className="w-[78px] h-[78px]"
				/>
				<div className="pl-[10px]">
					<p className="md:text-[20px] text-[16px] font-semibold text-black md:pb-[3px] pb-[10px]">
						{client.name}
					</p>
					<p className="md:text-[16px] text-[14px] text-gray-600 font-[400]">
						Member since {client.memberSince}
					</p>
				</div>
			</div>
			<div className="flex items-center mb-[6px]">
				<Image
					src={verifyTalentIcon}
					width={24}
					height={24}
					alt=""
					className="w-[24px] h-[24px]"
				/>
				<p className="text-[16px] pl-[7px]">
					{client.paymentVerified
						? "Payment Method Verified"
						: "Payment Method Not Verified"}
				</p>
			</div>
			<div className="flex items-center gap-[7px] md:pb-[10px] pb-[7px]">
				<StarRating
					rating={client.rating}
					width={16}
					height={16}
					responsiveWidthHeight="md:w-[16px] !w-[16px]"
				/>
				<p className="text-[16px]">{client.rating.toFixed(1)}</p>
			</div>

			<div className="flex items-center md:pb-[23px] pb-[20px]">
				<p className="text-gray-600">{client.reviewScore}</p>
			</div>

			<div className="space-y-[7px] md:pb-[21px] pb-[21px]">
				<p className="text-[18px] font-[500]">{client.country}</p>
				<p className="text-[18px]">{client.cityTime}</p>
			</div>
			<div className="space-y-[7px] md:pb-[21px] pb-[24px]">
				<p className="text-[18px] font-[500]">
					{client.jobsPosted} jobs posted
				</p>
				<p className="text-[18px]">
					{client.openJobs} open job{client.openJobs !== 1 ? "s" : ""}
				</p>
			</div>
			<div className="space-y-[7px]">
				<p className="text-[18px] font-[500]">
					{client.totalSpent} total spent
				</p>
				<p className="text-[18px]">
					{client.hires} hires, {client.activeHires} active
				</p>
			</div>
		</div>
	);
};

export default ContractDetailsClient;
