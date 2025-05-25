import StarRating from "@/shared/ui-kit/StarRating";

interface FeedbackItem {
	name: string;
	rating: number;
	text: string;
}

interface FeedbackProps {
	feedbackList: FeedbackItem[];
}

const Feedback = ({ feedbackList }: FeedbackProps) => {
	return (
		<div className="2xl:h-[1068px] xl:h-[1191px] h-fit rounded-[16px] border border-[#CBEC5E] xl:p-[28px] md:p-[20px] p-[14px]">
			<h2 className="text-[16px] text-[#8A8A8A] font-[500] mb-[4px]">
				Feedback
			</h2>
			<div className="w-full h-[1px] bg-[#aeb3bc] relative">
				<div className="w-[92px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
			</div>

			{feedbackList.map((feedback, index) => (
				<div
					key={index}
					className={`mt-[${index === 0 ? 12 : "xl:39 md:18 21"}px]`}>
					<h3 className="text-[20px] font-[500] mb-[6px]">
						{feedback.name}'s feedback
					</h3>
					<div className="flex items-center gap-[10px] pb-[10px]">
						<StarRating
							rating={feedback.rating}
							width={16}
							height={16}
							gap="gap-[1px]"
							responsiveWidthHeight="md:w-[16px] !w-[16px]"
						/>
						<p className="text-[16px] text-[#545454]">
							{feedback.rating.toFixed(1)}
						</p>
					</div>
					<p className="xl:w-[350px] w-[99%] text-[#545454]">
						{feedback.text.split("<br />").map((line, i) => (
							<span key={i}>
								{line}
								<br className="xl:flex hidden" />
							</span>
						))}
					</p>
				</div>
			))}
		</div>
	);
};

export default Feedback;
