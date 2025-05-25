import Feedback from "@/shared/widgets/Feedback/Feedback";
import ContractDetailsClient from "./ContractDetailsClient";

const ContractSidebar = () => {
	const clientData = {
		logo: "/images/maria.png",
		name: "Eleni C.",
		memberSince: "Sep 4, 2025",
		paymentVerified: true,
		rating: 5,
		reviewScore: "5.0 of 3 reviews",
		country: "Greece",
		cityTime: "Athens 12:51 pm",
		jobsPosted: 32,
		openJobs: 1,
		totalSpent: "$80",
		hires: 3,
		activeHires: 0,
	};

	const feedbackData = [
		{
			name: "Maria T.",
			rating: 5,
			text: "Great experience working with Maria S! <br />She provided clear instructions, timely <br />feedback, and were very professional <br />throughout the project. The communication <br />was smooth, and they valued quality work. <br />I would love to collaborate again in the <br />future!",
		},
		{
			name: "Eleni C.",
			rating: 3.5,
			text: "The hairstylist was amazing! She created the perfect bridal updo that lasted all day. Professional, friendly, and truly talented!",
		},
	];

	return (
		<div className="w-full h-full 2xl:space-y-[30px] xl:space-y-[20px] space-y-[10px]">
			<ContractDetailsClient client={clientData} />
			<Feedback feedbackList={feedbackData} />
		</div>
	);
};

export default ContractSidebar;
