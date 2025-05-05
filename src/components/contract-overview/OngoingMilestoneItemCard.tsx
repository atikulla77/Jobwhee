import Button from "@/shared/ui-kit/Button";
import { Input } from "@/shared/ui-kit/Input";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { GlobalModal } from "@/shared/widgets/GlobalModal/GlobalModal";

 

const OngoingMilestoneItemCard = ({
	item,
	setPaymentModal,
	showPaymentModal,
}: any) => {
	return (
		<div>
			<div className="w-full flex md:justify-end justify-start z-50">
				<div className="w-[297px] h-fit pb-[80px] flex md:justify-end justify-start relative">
					{/* Middle Line */}
					<div className="absolute md:left-0 left-[] md:right-[] right-0 top-0 h-full w-[1px] bg-[#c6c2c2a6]"></div>
					<div className="w-[290px] h-[128px] flex md:justify-end justify-start items-center relative">
						{/* Middle Line cercle */}
						<div className="absolute md:left-[-14px] left-[] md:right-[] right-[-14px] top-0 h-full z-[1] flex items-center">
							<div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
						</div>
						{/* left Arrow */}
						<div className="absolute md:left-0 left-[] md:right-[] right-0 top-0 h-full z-[0] flex items-center">
							<div
								className="w-[27px] h-[22px] md:rotate-[270deg] rotate-[90deg] bg-[#CBEC5E]"
								style={{
									clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
								}}></div>
						</div>
						{/* content */}
						<div className="w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center bg-[#CBEC5E] rounded-[16px] relative">
							<div className="space-y-[8px]">
								<h4 className="text-[16px] font-medium text-[#18470D] ">
									{item?.title}
								</h4>
								<p className="text-[16px] font-[400] text-[#000000]">
									€ {item?.amount}
								</p>
								<p className="text-[15px] font-[500] text-[#5A7D06] bg-[#EEF6DB] rounded-[30px] px-[17px] py-[5px] capitalize">
									{item?.status}
								</p>
							</div>
							<div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
								<div className="w-full h-[80%] bg-white"></div>
							</div>
							<div className="font-[500] text-[#000000] flex flex-col items-center leading-[30px]">
								<p className="text-[14px]">March</p>
								<h1 className="text-[35px] font-[400]">01</h1>
								<p className="text-[14px]">2025</p>
							</div>
						</div>
						{/* Button */}
						<div className="absolute md:bottom-[-50px] bottom-[-45px]    w-[266px] mx-auto h-[38px] z-10 text-[15px] font-[500] text-[#18470D] bg-[#CBEC5E] rounded-[30px]">
							<Button
								onClick={() => setPaymentModal(true)}
								type="active"
								action={"Submit the payment"}
							/>
						</div>
					</div>
				</div>
			</div>
			{/* payment modal  */}
			{showPaymentModal && (
				<GlobalModal
					isOpen={showPaymentModal}
					onClose={() => setPaymentModal(false)}
					classes="xl:w-[678px] md:w-[556px] w-[335px] h-[687px] xl:p-10 p-5">
					<>
						<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] mb-[30px]">
							Submit the payment
						</h1>

						<p className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
							Name of the milestone
						</p>

						<div className="h-[42px] bg-[#EAEAEA] rounded-[12px] flex items-center p-[8px]">
							<p className="text-[#8B939F]">Week 2</p>
						</div>

						<div className="w-full flex md:flex-row flex-col justify-between xl:gap-[46px] md:gap-[12px] gap-[20px] mt-[20px] xl:mb-[20px] md:mb-[26px] mb-[24px]">
							<div className="w-[100%] space-y-[8px]">
								<h2 className="xl:text-[18px] text-[16px] text-[#545454]">
									Amount
								</h2>
								<Input
									width="100%"
									height="42px"
									type="text"
									placeholder=""
									isIcon={false}
									value="500.0"
								/>
							</div>
							<div className="w-[100%] space-y-[8px]">
								<h2 className="xl:text-[18px] text-[16px] text-[#545454]">
									Due date
								</h2>
								<Input
									width="100%"
									height="42px"
									type="text"
									isIcon={false}
									placeholder=""
									value="22.03.2025"
									disabled={true}
								/>
							</div>
						</div>

						<h2 className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
							Note (Optional)
						</h2>
						<TextArea
							placeholder="Write additional note"
							width={"100%"}
							height={"146px"}
							responsiveWidthHeight="w-[100%] h-[146px]"
						/>

						<div className="absolute xl:bottom-[36px] md:bottom-[65px] bottom-[24px] xl:right-[38px] md:right-[64px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
							<div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
								<Button
									onClick={() => setPaymentModal(false)}
									action={"Reject"}
									type={"nonBorder"}
								/>
							</div>
							<div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
								<Button action={"Release payment"} type={"active"} />
							</div>
						</div>
					</>
				</GlobalModal>
			)}
		</div>
	);
};

export default OngoingMilestoneItemCard
