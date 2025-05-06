const ContractSummaryRow = () => {
	return (
		<div className=" rounded-xl border  border-[#CBEC5E] p-6">
			<h2 className="text-lg font-bold mb-1 border-b border-gray-300 pb-1">
				Details
			</h2>

			<h3 className="text-md font-semibold mt-4 mb-2">Summary</h3>
			<div className="flex justify-between mb-4">
				<div>
					<p className="text-sm text-gray-600">Contract type</p>
					<p className="text-sm">Fixed-Price</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">Start date</p>
					<p className="text-sm">March 14, 2025</p>
				</div>
			</div>

			<h3 className="text-md font-semibold mb-2">Details</h3>
			<div className="flex justify-between">
				<div>
					<p className="text-sm text-gray-600">Verified name</p>
					<p className="text-sm">Maria T.</p>
				</div>
				<div>
					<p className="text-sm text-gray-600">Contract ID</p>
					<p className="text-sm">98765xyz12</p>
				</div>
			</div>
		</div>
	);
};

export default ContractSummaryRow;
