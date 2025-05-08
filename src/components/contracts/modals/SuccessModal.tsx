import Button from "@/shared/ui-kit/Button";
import Image from "next/image";

const SuccessModal = ({
	setShowContractSuccessfullyCompleted,
	handleCancelEndContract,
}: any) => {
	return (
		<div>
			<div>
				<div className="w-full flex justify-center xl:mt-[36px] md:mt-[45px] mt-[51px] xl:mb-[29px] md:mb-[22px] mb-[18px]">
					<Image
						src={"/images/contractSuccessfullyCompleted.png"}
						width={257}
						height={227}
						alt=""
						className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
					/>
				</div>
				<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px] text-center">
					Your contract has been successfully completed
				</h1>
				<p className="xl:text-[20px] text-[14px] text-[#545454] text-center">
					Review the contract and share your feedback now.
				</p>
				<div className="absolute xl:bottom-[35px] md:bottom-[34px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
					<div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
						<Button
							onClick={() => setShowContractSuccessfullyCompleted(false)}
							type={"nonBorder"}
							action={"Cancel"}
						/>
					</div>
					<div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
						<Button
							onClick={() => handleCancelEndContract()}
							type={"active"}
							action={"End contract"}
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default SuccessModal;
