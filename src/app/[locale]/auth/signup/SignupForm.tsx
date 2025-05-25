"use client";
import Image from "next/image";
import {useState} from "react";
import Input from "@/components/Sign-up/Input";
import {CheckBoxIcon} from "../../../../../public/icons/CheckboxIcon";
import DropdownInput from "@/components/Sign-up/DropdownInput";
import {UserTypeEnum} from "@/constants/UserTypeAndRoleEnum";
import {registerUser} from "@/lib/api/authApi/authApi";
import {useRouter} from "@/i18n/routing";

export const SignUpForm = ({role}) => {
    const router = useRouter();

    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        city: "",
        phoneNumber: "12313",
        country: 'Armenia',
        role: role, // Default role is set to "Talent" from the enum
    });

    const [checkedOne, setCheckedOne] = useState(false);
    const [checkedTwo, setCheckedTwo] = useState(false);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [success, setSuccess] = useState("");

    const dropdownList = ["Greece", "Armenia", "Italy"]; // Example dropdown list

    const handleChange = (e) => {
        const {name, value} = e.target;
        setFormData((prev) => ({...prev, [name]: value}));
    };

    const handleDropdownChange = (selectedCountry) => {
        setFormData((prev) => ({...prev, country: selectedCountry}));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!checkedTwo) {
            setError("You must agree to the Terms of Service to continue.");
            return;
        }

        // Validate if necessary fields are provided
        if (
            !formData.firstName ||
            !formData.lastName ||
            !formData.email ||
            !formData.password
        ) {
            setError("Please fill out all required fields.");
            return;
        }

        setLoading(true);
        setError(""); // Reset previous errors

        try {
            // Call the registerUser function, passing the formData
            const response = await registerUser({
                ...formData,
                role: formData.role as UserTypeEnum, // Ensure the role is cast correctly to UserTypeEnum
            });

            if (response?.data) {
                setSuccess("Account created successfully! Please log in.");
                router.push("/auth/signin");
            } else {
                setError("An error occurred. Please try again.");
            }
        } catch (error) {
            setError(error.message || "An unknown error occurred.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="mt-[80px] 2xl:mt-[72px] flex justify-center pb-[50px] max-w-[587px] mx-auto">
            <div
                className="2xl:max-w-[806px] lg:max-w-[472px] max-w-[444px] w-full flex flex-col items-center px-[20px]">
                <Image
                    src={"/images/all-images/jobwhee-icon.png"}
                    width={212}
                    height={34}
                    alt="jobwhee-icon"
                    className="lg:w-[236px] lg:h-[42px] 2xl:w-[212px] 2xl:h-[34px] sm:w-[180px] sm:h-[28px] w-[155px] h-[24px]"
                />

                <p className="text-[#000] 2xl:text-[30px] lg:text-[30px] sm:text-[28px] text-[20px] font-medium mt-[30px]">
                    Sign up to find work you love
                </p>
                <form onSubmit={handleSubmit} className="w-full mt-[20px]">
                    <div className="flex flex-col gap-y-[12px]">
                        <div className="flex flex-col sm:flex-row gap-x-[20px] gap-y-[12px]">
                            <Input
                                name="firstName"
                                value={formData.firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                label="First Name"
                            />
                            <Input
                                name="lastName"
                                value={formData.lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                label="Last Name"
                            />
                        </div>
                        <Input
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Email"
                            label="Email"
                        />
                        <Input
                            name="password"
                            type="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Password"
                            label="Password"
                        />
                        <Input
                            name="city"
                            value={formData.city}
                            onChange={handleChange}
                            placeholder="City"
                            label="City"
                        />
                        <DropdownInput
                            label="Country"
                            list={dropdownList}
                            onChange={handleDropdownChange}
                        />

                        <div
                            className="flex items-center gap-[8px] text-[14px]"
                            onClick={() => setCheckedOne(!checkedOne)}
                        >
                            <div
                                className={`w-[18px] h-[18px] border-[2px] ${
                                    checkedOne ? "border-[#18470D]" : "border-[#AEB3BC]"
                                } flex items-center justify-center cursor-pointer rounded`}
                            >
                                {checkedOne && <CheckBoxIcon/>}
                            </div>
                            Send me helpful emails to find rewarding work and job leads.
                        </div>
                        <div
                            className="flex items-center gap-[8px] text-[14px]"
                            onClick={() => setCheckedTwo(!checkedTwo)}
                        >
                            <div
                                className={`w-[18px] h-[18px] border-[2px] ${
                                    checkedTwo ? "border-[#18470D]" : "border-[#AEB3BC]"
                                } flex items-center justify-center cursor-pointer rounded`}
                            >
                                {checkedTwo && <CheckBoxIcon/>}
                            </div>
                            Yes, I agree to the{" "}
                            <a href="#" className="text-blue-600">
                                Terms of Service
                            </a>
                            .
                        </div>

                        {error && <p className="text-red-600">{error}</p>}
                        {success && <p className="text-green-600">{success}</p>}

                        <button
                            type="submit"
                            className="w-full h-[42px] sm:w-[239px] bg-[#CBEC5E] rounded-[46px] text-[#18470D] text-[14px] font-medium mt-[20px]"
                            disabled={loading}
                        >
                            {loading ? "Creating Account..." : "Create my account"}
                        </button>
                    </div>
                </form>
            </div>
        </main>
    );
};
