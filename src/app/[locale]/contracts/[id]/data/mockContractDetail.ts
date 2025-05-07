export const mockContractDetail = {
	contractId: "abc123",
	title: "Weekly House Cleaning Service for a 3-Bedroom Apartment",
	status: "ongoing",
	projectPrice: 1500,
	inEscrow: 500,
	milestonesPaid: 1,
	milestonesRemaining: 2,
	totalSpend: 2000,
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
		{
			id: 4,
			title: "Week 4",
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

export const clientContractDetail = {
	id: "c123",
	title: "UX Designer for SaaS Platform",
	status: "ongoing",
	startDate: "Feb 01, 2025",
	endDate: "Present",
	description: "...",
	category: "UI/UX Design",
	client: {
		name: "Maria T.",
		avatarUrl: "/images/maria.png",
		location: "Athens, Greece",
		rating: 4.9,
	},
	stats: {
		totalEarnings: "$3K+",
		totalJobs: 12,
		totalHours: 155,
	},
	files: [{ name: "brief.pdf", size: "91KB", uploadedBy: "Maria T." }],
};
