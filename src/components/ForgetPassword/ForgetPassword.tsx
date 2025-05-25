"use client";
import React, {
  useState,
  useCallback,
  FormEventHandler,
  ChangeEventHandler,
} from "react";
import Image from "next/image";
import { passwordResetRequestLink } from "@/lib/api/forgetPassword/forgetPassword";
import { Link } from "@/i18n/routing";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState<string | null>(null);
  const [isPending, setPending] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      setEmail(e.target.value);
    },
    []
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      setSuccess(null);

      if (!emailRegex.test(email)) {
        setError("Please enter a valid email address.");
        return;
      }

      setIsLoading(true);
      try {
        const message = await passwordResetRequestLink(email);
        setIsLoading(false);
        setPending(true);
        setSuccess(
          message || "Password reset instructions have been sent to your email."
        );
      } catch (err: any) {
        setError(
          err.message || "An unexpected error occurred. Please try again."
        );
        setIsLoading(false);
      }
    },
    [email]
  );

  return (
    // <div className=" flex h-[100vh] w-full items-center justify-center rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark">
    //   <div className="ml-[500px] flex w-[50%] flex-wrap items-center">
    //     <div className="w-full border-stroke dark:border-strokedark xl:w-1/2 xl:border-l-2">
    //       <div className="w-full p-4 sm:p-12.5 xl:p-17.5">
    //         <h2 className="mb-9 text-2xl font-bold text-black dark:text-white sm:text-title-xl2">
    //           Forgot Password?
    //         </h2>
    //         <p className="mb-6 text-sm text-gray-500 dark:text-gray-400">
    //           Enter your email, and we'll send you instructions to reset your
    //           password.
    //         </p>

    //         {error && <p className="mb-4 text-sm text-red-600">{error}</p>}
    //         {success && (
    //           <p className="mb-4 text-sm text-green-600">{success}</p>
    //         )}

    //         <form onSubmit={handleSubmit} noValidate={true}>
    //           <div className="mb-4">
    //             <label className="mb-2.5 block font-medium text-black dark:text-white">
    //               Email
    //             </label>
    //             <div className="relative">
    //               <input
    //                 type="email"
    //                 name="email"
    //                 onChange={handleChange}
    //                 disabled={isLoading}
    //                 placeholder="Enter your email"
    //                 className="w-full rounded-lg border border-stroke bg-transparent py-4 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none dark:border-form-strokedark dark:bg-form-input dark:text-white dark:focus:border-primary"
    //               />
    //             </div>
    //           </div>

    //           <div className="mb-5">
    //             <button
    //               type="submit"
    //               disabled={isLoading}
    //               className={`w-full rounded-md py-2 text-white ${
    //                 isLoading
    //                   ? "cursor-not-allowed bg-gray-500"
    //                   : "bg-blue-500 hover:bg-blue-600"
    //               }`}
    //             >
    //               {isLoading ? "Sending..." : "Send Instructions"}
    //             </button>
    //           </div>
    //         </form>

    //         <div className="text-center">
    //           <Link
    //             href="/auth/signin"
    //             className="text-sm text-primary hover:underline"
    //           >
    //             Back to Sign In
    //           </Link>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <main
      className={
        "flex flex-col sm:items-center px-[20px] 2xl:pt-[110px] lg:pt-[135px] sm:pt-[140px] pt-[80px] h-[100vh] " +
        (isLoading && " lg:pt-[140px]! sm:pt-[80px]! pt-[94px]")
      }
    >
      <div className="w-full flex justify-center flex-1 ">
        <div
          className={
            "flex flex-col items-center max-w-[335px] sm:max-w-[492px] 2xl:max-w-[590px] w-full" +
            (isPending &&
              " lg:max-w-[828px] 2xl:max-w-[828px] sm:max-w-[553px]")
          }
        >
          <Image
            src={"/images/all-images/jobwhee-icon.png"}
            width={212}
            height={34}
            alt="jobwhee-icon"
            className={
              "lg:w-[270px] lg:h-[42px] 2xl:w-[212px] 2xl:h-[34px] sm:w-[180px] sm:h-[28px] w-[155px] h-[24px] " +
              (isLoading && "sm:w-[249px] sm:h-[40px]")
            }
          />
          <p
            className={
              "text-[#000] 2xl:text-[40px] lg:text-[30px] sm:text-[28px] text-[20px] mt-[20px] 2xl:mt-[136px] lg:mt-[66px] sm:mt-[30px] font-medium " +
              (isPending &&
                " mt-[16px]! sm:mt-[40px]! 2xl:mt-[136px]! text-[24px]")
            }
          >
            {isPending ? "Check your email" : "Password recovery"}
          </p>
          <p
            className={
              "text-[#545454] 2xl:text-[24px] lg:text-[20px] sm:text-[20px] sm:mt-[16px] text-center lg:mt-[14px] mt-[16px] text-[14px] " +
              (isPending &&
                "2xl:mt-[54px] sm:mt-[30px] lg:mt-[89px] lg:text-[24px] mt-[30px]")
            }
          >
            {isPending
              ? `Check your inbox for password reset instructions. If you didn't request
this or need a different account, select "Return to login."`
              : `Enter the email address or username associated with your Jobwhee
      account.`}
          </p>

          <div
            className={
              "2xl:mt-[0] lg:mt-[60px] sm:mt-[84px] mt-[58px] w-full max-w-[342px] lg:max-w-none " +
              (isPending && "mt-[0]!")
            }
          >
            <form onSubmit={handleSubmit}>
              {!isPending && (
                <div className="lg:pl-[10px]">
                  <div className="2xl:mt-[42px]">
                    <label
                      className="text-[#545454] text-[16px] lg:text-[18px]"
                      htmlFor="input"
                    >
                      Email or username
                    </label>
                  </div>

                  <input
                    type="email"
                    name="email"
                    onChange={handleChange}
                    disabled={isLoading}
                    placeholder="Enter your email"
                    className="w-full rounded-lg border border-stroke mt-2 placeholder:text-[#8B939F]  py-2 pl-6 pr-10 text-[#8B939F] outline-none"
                  />
                </div>
              )}
              <div
                className={
                  "flex justify-center lg:mt-[40px] 2xl:mt-[40px] sm:mt-[47px] mt-[30px] " +
                  (isPending &&
                    "2xl:mt-[98px] lg:mt-[126px] sm:mt-[60px] mt-[80px]")
                }
              >
                {!isPending && (
                  <button
                    className={
                      "cursor-pointer font-medium w-full sm:h-[51px] lg:max-w-[326px] lg:h-[50px] h-[44px] 2xl:w-[357px] 2xl:h-[48px] bg-[#CBEC5E] rounded-[46px] text-[#18470D] text-[14px] lg:text-[16px] " +
                      (isPending && "2xl:max-w-[207px]")
                    }
                  >
                    {isPending ? "Return to Log In" : "Continue"}
                  </button>
                )}

                {isPending && (
                  <Link href="/auth/signin">
                    <button
                      className={
                        "cursor-pointer font-medium w-full sm:h-[51px] lg:max-w-[326px] lg:h-[50px] h-[44px] 2xl:w-[357px] 2xl:h-[48px] bg-[#CBEC5E] rounded-[46px] text-[#18470D] text-[14px] lg:text-[16px] " +
                        (isPending && "2xl:max-w-[207px]")
                      }
                    >
                      Return to Log In
                    </button>
                  </Link>
                )}
              </div>
            </form>
          </div>

          {!isPending && (
            <Link
              className="2xl:mt-[38px] lg:mt-[26px] text-[#18470D] font-medium sm:text-[16px] text-[14px] sm:mt-[26px] mt-[27px]"
              href={"/auth/signin"}
            >
              Back to Log In
            </Link>
          )}
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default ForgotPassword;
