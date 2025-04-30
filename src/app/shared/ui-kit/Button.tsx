interface ButtonProps {
	type: string;
	action: string;
	handleButton: (action: string) => void;
}
const Button: React.FC<ButtonProps> = ({
	type = "active",
	action = "Next",
	handleButton,
}) => {
	return (
		<button
			onClick={() => handleButton(action)}
			className={`w-full h-full flex items-center justify-center ${type === "transparent" ? "xl:px-[41px] px-[25px]":"xl:px-[25px] px-[20px]"}  md:text-[16px] text-[14px] rounded-full font-medium transition-all duration-300
        ${
					type === "active"
						? "bg-[#CBEC5E] text-[#18470D] hover:bg-[#ACD624] cursor-pointer"
						: type === "transparent"
						? "border border-[#CCCCCC] text-[#18470D] cursor-pointer"
						: "bg-[#E2E2E2] text-[#5B5B5B]"
				}
      `}>
			{action}
		</button>
	);
};

export default Button;
