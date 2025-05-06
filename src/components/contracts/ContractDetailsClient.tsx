const ContractDetailsClient = () => {
	return (
		<div>
			<div className=" w-full text-[#545454] rounded-xl border border-[#CBEC5E] p-6">
				<h2 className="text-lg font-bold mb-2">About the client</h2>
				<div className="flex items-center mb-2">
					<img
						src="https://via.placeholder.com/40"
						alt="Client"
						className="w-10 h-10 rounded-full mr-2"
					/>
					<div>
						<p className="text-sm font-semibold">Eleni C.</p>
						<p className="text-xs text-gray-600">Member since Sep 4, 2025</p>
					</div>
				</div>
				<div className="flex items-center mb-2">
					<span className="text-green-600 text-xs mr-1">💳</span>
					<p className="text-xs">Payment Method Verified</p>
				</div>
				<div className="flex items-center mb-2">
					<span className="text-yellow-500 text-xs mr-1">★★★★★</span>
					<p className="text-xs">5.0</p>
					<p className="text-xs text-gray-600 ml-1">5.0 of 3 reviews</p>
				</div>
				<p className="text-xs mb-1">Greece</p>
				<p className="text-xs mb-1">Athens 12:51 pm</p>
				<p className="text-xs mb-1">32 jobs posted</p>
				<p className="text-xs mb-1">1 open job</p>
				<p className="text-xs mb-1">$80 total spent</p>
				<p className="text-xs">3 hires, 0 active</p>
			</div>
		</div>
	);
};

export default ContractDetailsClient;
