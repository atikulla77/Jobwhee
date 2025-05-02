"use client";

import React, { useEffect, useState } from "react";
import MessengerSidebar from "@/components/messenger/MessengerSidebar";
import MobileBackButton from "@/components/messenger/MobileBackButton";

const page = () => {
	const [isMobile, setIsMobile] = useState<boolean>(false);
	const [showChat, setShowChat] = useState<boolean>(false);

	// Detect screen size
	useEffect(() => {
		const handleResize = () => {
			setIsMobile(window.innerWidth < 768);
		};

		handleResize();
		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	const handleSelectChat = () => {
		if (isMobile) {
			setShowChat(true);
			return true;
		}
		return false;
	};

	const handleBack = () => {
		setShowChat(false);
	};

	return (
		<div className="px-36 py-10">
			<div>
				{/* Show Sidebar only if not in chat or on desktop */}
				{(!isMobile || !showChat) && (
					<MessengerSidebar onSelectChat={handleSelectChat} />
				)}

				{/* Show Back Button only on mobile and in chat view */}
				{isMobile && showChat && <MobileBackButton onClick={handleBack} />}
			</div>
		</div>
	);
};

export default page;
