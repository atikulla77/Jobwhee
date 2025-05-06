const RecentActivity = () => {
	const activities = [
		{
			date: "September 15, 2024",
			description: "You give Maria T. feedback.",
		},
		{
			date: "September 15, 2024",
			description: "Maria T. gives you feedback.",
		},
		{
			date: "September 15, 2024",
			description: "Eleni C. ended your contract.",
		},
		{
			date: "September 15, 2024",
			description:
				"Payment for the milestone Touch-ups & Post-Event Care has been rejected.",
		},
		{
			date: "September 15, 2024",
			description:
				"Payment for the milestone Touch-ups & Post-Event Care has been successfully released.",
		},
		{
			date: "September 15, 2024",
			description:
				"Maria T. send request for payment, milestone Touch-ups & Post-Event Care.",
			descriptionClass: "text-green-600",
		},
		{
			date: "September 15, 2024",
			description: "Eleni C. activate milestone Touch-ups & Post-Event Care.",
			descriptionClass: "text-green-600",
		},
		{
			date: "September 15, 2024",
			description: "Eleni C. activate milestone Touch-ups & Post-Event Care.",
			descriptionClass: "text-green-600",
		},
		{
			date: "September 15, 2024",
			description: "Eleni C. created milestone Touch-ups & Post-Event Care.",
			descriptionClass: "text-green-600",
		},
	];

	return (
		<div className=" text-[#545454] rounded-xl border border-[#CBEC5E] p-6">
			<h2 className="text-lg font-bold mb-1 border-b border-gray-300 pb-1">
				Activity
			</h2>
			<div className="flex justify-between mt-2">
				<span className="text-sm font-semibold">Date</span>
				<span className="text-sm font-semibold">Description</span>
			</div>
			{activities.map((activity, index) => (
				<div key={index} className="flex justify-between mt-2">
					<span className="text-sm">{activity.date}</span>
					<span className={`text-sm ${activity.descriptionClass || ""}`}>
						{activity.description}
					</span>
				</div>
			))}
			<div className="flex justify-center mt-4">
				<button className="px-4 py-1 bg-white border border-gray-300 rounded-full text-sm hover:bg-gray-100">
					Load More
				</button>
			</div>
		</div>
	);
};

export default RecentActivity;
