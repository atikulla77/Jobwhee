"use client";
import React, {
  useState,
  useCallback,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import { useSearchParams } from "next/navigation";
import { changeForgottenPassword } from "@/lib/api/forgetPassword/forgetPassword";
import { Link } from "@/i18n/routing";
import Image from "next/image";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
const [isPending,setPending] = useState(false)
  const searchParams = useSearchParams();
  const token = searchParams.get("token");

  const handlePasswordChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setPassword(e.target.value);
    }, []);

  const handleConfirmPasswordChange: ChangeEventHandler<HTMLInputElement> =
    useCallback((e) => {
      setConfirmPassword(e.target.value);
    }, []);

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      setSuccess(null);

      if (password !== confirmPassword) {
        setError("Passwords do not match.");
        return;
      }

      if (password.length < 6) {
        setError("Password must be at least 6 characters long.");
        return;
      }

      setIsLoading(true);
      try {
        const message = await changeForgottenPassword(token, password);
        setIsLoading(false);
        setSuccess(message || "Your password has been successfully reset.");
        setPending(true)
      } catch (err: any) {
        setError(
          err.message || "An unexpected error occurred. Please try again."
        );
        setIsLoading(false);
      }
    },
    [password, confirmPassword, token]
  );

  return (
    // <div className="flex h-screen w-full items-center justify-center bg-gray-100">
    //   <div className="w-full max-w-md rounded-lg bg-white p-8 shadow-lg">
    //     <h2 className="mb-6 text-2xl font-bold text-gray-800">
    //       Reset Password
    //     </h2>
    //     <p className="mb-4 text-sm text-gray-600">
    //       Enter your new password and confirm it below.
    //     </p>

    //     {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
    //     {success && <p className="mb-4 text-sm text-green-600">{success}</p>}

    //     <form onSubmit={handleSubmit} noValidate>
    //       <div className="mb-4">
    //         <label
    //           htmlFor="newPassword"
    //           className="mb-2 block text-sm font-medium text-gray-700"
    //         >
    //           New Password
    //         </label>
    //         <input
    //           id="newPassword"
    //           type="password"
    //           name="newPassword"
    //           value={password}
    //           onChange={handlePasswordChange}
    //           disabled={isLoading}
    //           placeholder="Enter your new password"
    //           className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //         />
    //       </div>

    //       <div className="mb-4">
    //         <label
    //           htmlFor="confirmPassword"
    //           className="mb-2 block text-sm font-medium text-gray-700"
    //         >
    //           Confirm Password
    //         </label>
    //         <input
    //           id="confirmPassword"
    //           type="password"
    //           name="confirmPassword"
    //           value={confirmPassword}
    //           onChange={handleConfirmPasswordChange}
    //           disabled={isLoading}
    //           placeholder="Confirm your new password"
    //           className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
    //         />
    //       </div>

    //       <button
    //         type="submit"
    //         disabled={isLoading}
    //         className={`w-full rounded-md bg-blue-500 py-2 text-sm font-medium text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 ${
    //           isLoading ? "cursor-not-allowed bg-blue-300" : ""
    //         }`}
    //       >
    //         {isLoading ? "Resetting..." : "Reset Password"}
    //       </button>
    //     </form>

    //     <div className="mt-4 text-center">
    //       <Link
    //         href="/auth/signin"
    //         className="text-sm text-blue-500 hover:underline"
    //       >
    //         Back to Sign In
    //       </Link>
    //     </div>
    //   </div>
    // </div>

    <main className="flex flex-col sm:items-center px-[20px] 2xl:pt-[110px] lg:pt-[140px] sm:pt-[140px] pt-[80px] h-[100vh] ">
      <div className="w-full flex justify-center flex-1 ">
        <div className="flex flex-col items-center max-w-[335px] sm:max-w-[492px] lg:max-w-[590px] w-full">
          <Image
            src={"/images/all-images/jobwhee-icon.png"}
            width={212}
            height={34}
            alt="jobwhee-icon"
            className="lg:w-[270px] lg:h-[42px] 2xl:w-[212px] 2xl:h-[34px] sm:w-[180px] sm:h-[28px] w-[155px] h-[24px] "
            />
            { success&&
            <p className=" text-[#28A745] mt-5">Your password has been successfully changed.</p>
            
            
            }
          <p
            className={
              "text-[#000] 2xl:text-[40px] lg:text-[30px] sm:text-[28px] text-[20px] mt-[40px] 2xl:mt-[136px] lg:mt-[66px] sm:mt-[112px] font-medium "
            }
          >
            Create a New Password
          </p>
          <p className="text-[#545454] lg:text-[24px] sm:text-[20px] sm:mt-[16px] text-center mt-[14px] text-[14px] lg:mt-[25px] 2xl:mt-[15px]">
            Enter the email address or username associated with your Jobwhee
            account.
          </p>
          <div className="2xl:mt-[15px] lg:mt-[37px] sm:mt-[33px] mt-[58px] w-full max-w-[342px] sm:max-w-[423px] lg:max-w-[545px] 2xl:max-w-[590px]">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-y-[20px]">
                <div className="mb-4">
                  <label
                    htmlFor="newPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    New Password
                  </label>
                  <input
                    id="newPassword"
                    type="password"
                    name="newPassword"
                    value={password}
                    onChange={handlePasswordChange}
                    disabled={isPending}
                    placeholder="Enter your new password"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="confirmPassword"
                    className="mb-2 block text-sm font-medium text-gray-700"
                  >
                    Confirm Password
                  </label>
                  <input
                    id="confirmPassword"
                    type="password"
                    name="confirmPassword"
                    value={confirmPassword}
                    onChange={handleConfirmPasswordChange}
                    disabled={isPending}
                    placeholder="Confirm your new password"
                    className="w-full rounded-md border border-gray-300 px-4 py-2 text-sm text-gray-700 focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
                  />
                </div>
              </div>
              <div className="flex justify-center lg:mt-[119px] 2xl:mt-[47px] sm:mt-[118px] mt-[89px] ">
                <button className="cursor-pointer sm:font-medium w-full sm:w-[247px] sm:h-[41px] lg:max-w-[247px] lg:h-[41px] h-[44px] 2xl:max-w-[156px] 2xl:h-[48px] bg-[#CBEC5E] rounded-[46px] text-[#18470D] text-[14px] 2xl:text-[16px] lg:text-[14px] font-bold ">
                  Continue
                </button>
              </div>
            </form>
          </div>

          <Link
            className="2xl:mt-[38px] lg:mt-[26px] text-[#18470D] font-medium sm:text-[16px] text-[14px] sm:mt-[26px] mt-[27px]"
            href={"/auth/signin"}
          >
            Back to Log In
          </Link>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default ResetPassword;
