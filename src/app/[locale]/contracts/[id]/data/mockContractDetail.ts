export const mockContractDetail = {
	contractId: "xyz123",
	title: "Weekly House Cleaning Service for a 3-Bedroom Apartment",
	status: "ongoing",
	projectPrice: 1500,
	inEscrow: 500,
	milestonesPaid: 1,
	milestonesRemaining: 2,
	totalSpend: 500,
	milestones: [
		{
			id: 1,
			title: "Week 1",
			status: "closed",
			amount: 500,
			dueDate: "March 01 2025",
		},
		{
			id: 2,
			title: "Week 2",
			status: "ongoing",
			amount: 500,
			dueDate: "March 01 2025",
		},
		{
			id: 3,
			title: "Week 3",
			status: "not_started",
			amount: 500,
			dueDate: "March 01 2025",
		},
	],
	participants: [{ name: "Maria T.", avatarUrl: "/images/maria.png" }],
	files: [
		{
			uploader: "Eleni C.",
			avatarUrl: "/images/eleni.png",
			time: "2:25 PM",
			items: [
				{ name: "image1.jpg", size: "91KB", type: "image" },
				{ name: "image2.jpg", size: "91KB", type: "image" },
			],
		},
	],
	actions: ["Request a Refund", "End Contract", "Open a Dispute"],
};
