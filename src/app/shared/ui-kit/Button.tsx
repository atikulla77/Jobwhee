interface ButtonProps {
	type: string;
	text: string;
	handleButton: (action: string) => void;
}
const Button: React.FC<ButtonProps> = ({
	type = "active",
	text = "Next",
	handleButton,
}) => {
	return (
		<button
			onClick={() => handleButton(text)}
			className={`sm:h-[48px] h-[40px] sm:px-4 px-7 sm:text-[16px] text-[14px] rounded-full font-medium transition-all duration-300
        ${
					type === "active"
						? "bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] cursor-pointer"
						: type === "transparent"
						? "border border-[#EAEAEA] text-[#000] cursor-pointer"
						: "bg-[#E2E2E2] text-[#5B5B5B]"
				}
      `}>
			{text}
		</button>
	);
};

export default Button;
