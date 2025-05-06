const ContractMetaInfo = () => {
	return (
		<div>
			<div className=" w-full  text-[#545454] rounded-xl border border-[#CBEC5E] p-6">
				<h2 className="text-lg text-[#8A8A8A] font-bold mb-2 border-b border-[#AEB3BC] pb-1">
					Details
				</h2>
				<h1 className="text-black text-[20px] font-medium pt-4 pb-2">
					Description
				</h1>
				<p className="mb-4">
					We are looking for a reliable and experienced cleaner to provide
					weekly house cleaning services for a 3-bedroom apartment. The cleaning
					should be thorough and include all essential tasks to maintain a clean
					and comfortable living space.
				</p>
				<h3 className="text-md font-semibold mb-2">Responsibilities:</h3>
				<ul className="list-disc list-inside mb-4 space-y-1">
					<li>Dusting and wiping down surfaces in all rooms</li>
					<li>Vacuuming and mopping floors</li>
					<li>Cleaning bathrooms (toilets, sinks, showers, mirrors)</li>
					<li>
						Kitchen cleaning (countertops, sinks, stove, and appliance
						exteriors)
					</li>
					<li>Emptying trash bins and replacing liners</li>
					<li>Changing bed linens (if replaced)</li>
					<li>Light organizing and tidying up</li>
				</ul>
				<h3 className="text-md font-semibold mb-2">Requirements:</h3>
				<ul className="list-disc list-inside space-y-1">
					<li>Experience in residential cleaning</li>
					<li>Attention to detail and reliability</li>
					<li>Must bring own cleaning supplies (or specify if provided)</li>
					<li>Flexible scheduling for weekly visits</li>
				</ul>
			</div>
		</div>
	);
};

export default ContractMetaInfo;
