import { useState } from "react";
import { EyeCloseIcon } from "../../../public/icons/EyeCloseIcon";
import { EyeOpenIcon } from "../../../public/icons/eyeOpenIcon";
import { UserIcon } from "../../../public/icons/userIcon";

type InputProps = {
	width: string;
	height: string;
	type: string;
	icon?: string;
	isIcon: boolean;
	value?: string;
	disabled?: boolean;
	placeholder: string;
	onChange?: (value: string) => void;
};
export const Input: React.FC<InputProps> = ({
	width = "350px",
	height = "42px",
	type = "text",
	icon = "",
	isIcon = true,
	value = "John",
	disabled = false,
	placeholder = "",
	onChange,
}) => {
	const [inputValue, setInputValue] = useState(value);
	const [isPasswordVisible, setIsPasswordVisible] = useState(false);

	const togglePasswordVisibility = () => {
		setIsPasswordVisible(prev => !prev);
	};

	return (
		<div
			style={{ width, height }}
			className="relative md:text-[16px] text-[14px]">
			{disabled ? (
				<input
					type={
						type === "password" && !isPasswordVisible
							? "password"
							: type === "number"
							? "number"
							: "text"
					}
					style={{ width, height }}
					value={inputValue}
					disabled
					onChange={e => {
						setInputValue(e.target.value);
						onChange?.(e.target.value);
					}}
					placeholder={placeholder}
					className={`border border-[#EAEAEA] bg-[#EAEAEA] rounded-[12px] outline-[#18470D] text-[#8B939F] relative ${
						isIcon ? "pl-8" : icon === "" ? "pl-2" : "pl-6"
					}`}
				/>
			) : inputValue === "" ? (
				<input 
					type={ 
						type === "password" && !isPasswordVisible
							? "password"
							: type === "number"
							? "number"
							: "text"
					}
					style={{ width, height }}
					placeholder={placeholder}
					onChange={e => {
						setInputValue(e.target.value);
						onChange?.(e.target.value);
					}}
					className={`border border-[#AEB3BC] rounded-[12px] outline-[#18470D] placeholder:text-[#8B939F] text-[#8B939F] relative ${
						isIcon ? "pl-8" : icon === "" ? "pl-2" : "pl-6"
					}`}
				/>
			) : (
				// Default Value
				<input
					type={
						type === "password" && !isPasswordVisible
							? "password"
							: type === "number"
							? "number"
							: "text"
					}
					style={{ width, height }}
					value={inputValue}
					placeholder={placeholder}
					onChange={e => {
						setInputValue(e.target.value);
						onChange?.(e.target.value);
					}}
					className={`border border-[#AEB3BC] rounded-[12px] outline-[#18470D] placeholder:text-[#8B939F] text-[#8B939F] relative ${
						isIcon ? "pl-8" : icon === "" ? "pl-2" : "pl-6"
					}`}
				/>
			)}

			{isIcon && type === "text" && (
				<>
					<div className={`absolute left-2 top-[13px]`}>
						<UserIcon />
					</div>
				</>
			)}
			{icon === "Amount" && (
				<div className="absolute left-2 top-0 h-full flex items-center">
					<p className="text-[#8B939F]">€</p>
				</div>
			)}
			{type === "password" && (
				<div
					className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer z-30"
					onClick={togglePasswordVisibility}>
					{isPasswordVisible ? <EyeCloseIcon /> : <EyeOpenIcon />}
				</div>
			)}
		</div>
	);
};
