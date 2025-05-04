interface ButtonProps {
	type: string;
	action: string;
	onClick?: () => void;
}
const Button: React.FC<ButtonProps> = ({
  type = "active",
  action = "Next",
  onClick,
}) => {
  return (
		<button
			onClick={onClick}
			className={`w-full h-full flex items-center justify-center cursor-pointer text-[#18470D] ${
				type === "transparent"
					? "xl:px-[41px] px-[25px]"
					: "xl:px-[25px] px-[20px]"
			}  md:text-[15px] text-[14px] rounded-full font-medium transition-all duration-300
        ${
					type === "active"
						? "bg-[#CBEC5E] hover:bg-[#ACD624] cursor-pointer"
						: type === "transparent"
						? "border border-[#CCCCCC] cursor-pointer"
						: type === "nonBorder"
						? "bg-transparent"
						: "bg-[#E2E2E2] text-[#B8B8B8]"
				}`}>
			{action}
		</button>
	);
};

export default Button;
