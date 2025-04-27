interface ButtonProps {
	width?: string;
	type?: "active" | "inactive";
	text: string;
}

const Button: React.FC<ButtonProps> = ({
	width = "220px",
	type = "active",
	text = "Next",
}) => {
	return (
		<button
			style={{ width }}
			className={`h-[48px] text-[16px] rounded-full font-medium transition-all duration-300
        ${
					type === "active"
						? "bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] cursor-pointer"
						: "bg-[#EAEAEA] text-[#B8B8B8] cursor-not-allowed"
				}
      `}>
			{text}
		</button>
	);
};

export default Button;
