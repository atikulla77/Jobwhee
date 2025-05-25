import Image from "next/image";
import Button from "../contracts/Button";

const EndContractModal = ({
	setShowEndContractModal,
	handleEndContract,
}: any) => {
	return (
		<div>
			<div className="w-full flex justify-center xl:mt-[8px] md:mt-[21px] mt-[27px] xl:mb-[29px] md:mb-[70px] mb-[18px]">
				<Image
					src={"/confirmationendofcontract.png"}
					width={257}
					height={227}
					alt=""
					className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
				/>
			</div>
			<h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px] text-center">
				Are you sure you want to end this contract?
			</h1>
			<p className="xl:text-[20px] text-[14px] text-[#545454] text-center">
				Provide feedback and settle payments in the next steps.
			</p>
			<div className="absolute xl:bottom-[35px] md:bottom-[57px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
				<div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
					<Button
						onClick={() => setShowEndContractModal(false)}
						type={"nonBorder"}
						action={"Cancel"}
					/>
				</div>
				<div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
					<Button
						onClick={() => handleEndContract("end-contract")}
						type={"active"}
						action={"End contract"}
					/>
				</div>
			</div>
		</div>
	);
};

export default EndContractModal;
