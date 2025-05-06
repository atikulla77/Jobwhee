import Button from "@/shared/ui-kit/Button";
import { TextArea } from "@/shared/ui-kit/TextArea";

const RefundModal = ({ setShowRefundRequestModal }: any) => {
	return (
		<div className="">
			<h2 className="text-xl font-semibold text-green-800">Request a refund</h2>

			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 mb-1">
					INVOICE
				</label>
				<select className="w-full p-2 border border-gray-300 rounded-md text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500">
					<option>Select Invoice</option>
				</select>
			</div>

			<div className="mb-4">
				<div className="flex items-center mb-2">
					<input
						type="radio"
						name="refund-amount"
						id="total"
						className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
					/>
					<label htmlFor="total" className="ml-2 text-sm text-gray-700">
						TOTAL INVOICE AMOUNT 0.0
					</label>
				</div>
				<div className="flex items-center">
					<input
						type="radio"
						name="refund-amount"
						id="other"
						className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
					/>
					<label htmlFor="other" className="ml-2 text-sm text-gray-700">
						OTHER
					</label>
				</div>
			</div>

			<div className="mb-4">
				<label className="block text-sm font-medium text-gray-700 mb-1">
					NOTE
				</label>
				<TextArea
					placeholder="Write additional note"
					width={"100%"}
					height={"146px"}
					responsiveWidthHeight="w-[100%] h-[146px]"
				/>
			</div>

			<div className="mb-6">
				<button className="flex items-center px-4 py-2 border border-gray-300 rounded-md text-green-800 hover:bg-gray-50">
					<svg
						className="w-5 h-5 mr-2"
						fill="none"
						stroke="currentColor"
						viewBox="0 0 24 24"
						xmlns="http://www.w3.org/2000/svg">
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							strokeWidth="2"
							d="M15.172 7l-6.586 6.586a2 2 0 002.828 2.828L18 9.828V15h2V7h-8zM9 17H5v-2h4v2z"></path>
					</svg>
					Attach File
				</button>
				<p className="text-xs text-gray-500 mt-1">Max file size: 1000MB</p>
			</div>
			<div className="absolute xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button
						onClick={() => setShowRefundRequestModal(false)}
						action={"Cancel"}
						type={"nonBorder"}
					/>
				</div>
				<div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
					<Button action={"Send Request"} type="disabled" />
				</div>
			</div>
		</div>
	);
};

export default RefundModal;
