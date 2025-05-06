import Button from "@/shared/ui-kit/Button";
import { TextArea } from "@/shared/ui-kit/TextArea";

const GiveRefund = () => {
	return (
		<div className="w-full">
			<div className="mt-8 2xl:mb-[50px] xl:mb-[40px] md:mb-[50px] mb-[30px] md:max-w-full mx-auto flex items-center xl:pl-[26px] md:pl-[19px] pl-[15px] 2xl:pr-8 xl:pr-[29px] pr-[23px] border-2 border-[#CBEC5E] rounded-2xl xl:h-[116px] md:h-[82px] h-[85px] md:py-0 py-[10px]">
				<h1 className="xl:text-[40px] md:text-[28px] text-[20px] font-medium md:w-fit w-full">
					Give a Refund
				</h1>
			</div>
			{/* Details Section */}
			<div className="mb-6">
				<h3 className="text-sm font-semibold text-gray-500 mb-2">Details</h3>
				<div className="border-b border-gray-200 mb-4"></div>
				<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
					{/* Left Column: Contract Details */}
					<div>
						<h2 className="text-lg font-semibold text-gray-800">Contract</h2>
						<p className="text-sm text-gray-600 mt-1">
							WEEKLY HOUSE CLEANING SERVICE FOR A 3-BEDROOM APARTMENT
						</p>
						<div className="mt-4">
							<p className="text-sm text-gray-600">
								<span className="font-medium">Refund Amount:</span> € 0.00
							</p>
							<p className="text-sm text-gray-600 mt-1">
								<span className="font-medium">Current Balance:</span> € 0.00
							</p>
							<p className="text-sm text-gray-600 mt-1">
								<span className="font-medium">
									Your Balance Will Be Debited:
								</span>{" "}
								€ 0.00
							</p>
							<p className="text-xs text-gray-500 mt-1">
								(Includes credit for Jobwhee service charge)
							</p>
						</div>
					</div>
					{/* Right Column: Invoice and Note */}
					<div>
						<div className="mb-4">
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Invoice(s)
							</label>
							<select className="w-full p-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
								<option>Select Invoice(s)</option>
							</select>
						</div>
						<div>
							<label className="block text-sm font-medium text-gray-700 mb-1">
								Note for the client
							</label>
							<TextArea
								placeholder="Write additional note"
								width={"100%"}
								height={"146px"}
								responsiveWidthHeight="w-[100%] h-[146px]"
							/>
						</div>
					</div>
				</div>
			</div>

			{/* Action Buttons */}
			<div className="  xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Cancel"} type={"nonBorder"} />
				</div>
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Give Refund"} type="active" />
				</div>
			</div>
		</div>
	);
};

export default GiveRefund;
