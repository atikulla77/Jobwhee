"use client";
import React, {
  ChangeEventHandler,
  FormEventHandler,
  useCallback,
  useState,
} from "react";

import jwt from "jsonwebtoken";
import { getSession, signIn } from "next-auth/react";
import { Link, useRouter } from "@/i18n/routing";
import { UserTypeEnum } from "@/constants/UserTypeAndRoleEnum";
import Image from "next/image";

const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const SignIn: React.FC = () => {
  const router = useRouter();
  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleChange: ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      const { name, value } = e.target;
      setSignInData((prevData) => ({ ...prevData, [name]: value }));
    },
    []
  );

  const handleSubmit: FormEventHandler<HTMLFormElement> = useCallback(
    async (e) => {
      e.preventDefault();
      setError(null);
      if (!emailRegex.test(signInData.email)) {
        setError("Enter a valid email address");
        return;
      }
      if (!signInData.password || signInData.password.length < 6) {
        setError("Password must be at least 6 characters");
        return;
      }
      setIsLoading(true);

      try {
        const res = await signIn("credentials", {
          email: signInData.email,
          password: signInData.password,
          redirect: false,
        });

        setIsLoading(false);

        if (res?.ok) {
          const session = await getSession();
          if (session && session.accessToken) {
            const decodedToken = jwt.decode(session?.accessToken);
            // if (decodedToken?.role === UserTypeEnum.Talent) {

            //   router.push("/freelancer");
            //   alert("frelancer");
            // } else if (decodedToken?.role === UserTypeEnum.Client) {

            //   router.push("/client");
            //   router.push("/client");
            // }
            console.log(decodedToken, "outer");
            if (typeof decodedToken === "object" && decodedToken !== null) {
              console.log(decodedToken, "inner");

              // Redirect based on the u,ser role
              if (decodedToken.role === UserTypeEnum.Talent) {
                localStorage.removeItem("notifications"); // 🧹 Clear the localStorage key
                router.push("/freelancer");
                console.log("signed");
              } else if (decodedToken.role === UserTypeEnum.Client) {
                localStorage.removeItem("notifications"); // 🧹 Clear the localStorage key
                router.push("/client");
              }
            }
          } else {
            router.push("/");
            console.log("not signed");
          }
        } else {
          setError("Invalid email or password");
        }
      } catch (error) {
        console.error("An error occurred during sign in:", error);
        setError("An unexpected error occurred. Please try again.");
        setIsLoading(false);
      }
    },
    [signInData]
  );
  return (
    <main className="flex flex-col sm:items-center px-[20px] 2xl:pt-[165px] sm:pt-[140px] pt-[80px] h-[100vh]">
      <div className="w-full flex justify-center flex-1 ">
        <div className="flex flex-col items-center max-w-[335px] sm:max-w-[376px] lg:max-w-[337px] 2xl:max-w-[350px] w-full">
          <Image
            src={"/images/all-images/jobwhee-icon.png"}
            width={212}
            height={34}
            alt="jobwhee-icon"
            className="mt-[20px] lg:w-[270px] lg:h-[42px] 2xl:w-[212px] 2xl:h-[34px] sm:w-[180px] sm:h-[28px] w-[155px] h-[24px]"
          />
          <p className="text-[#000] 2xl:text-[30px] lg:text-[28px] sm:text-[24px] text-[20px] mt-[14px] 2xl:mt-[62px] lg:mt-[22px] sm:mt-[30px]">
            Log in to Jobwhee
          </p>
          <form onSubmit={handleSubmit} className=" max-w-[350px] w-full">
            {" "}
            {/* Attach handleSubmit here */}
            <div>
              <div className="text-[#545454] text-[14px] sm:text-[16px] mt-11 lg:text-[18px]">
                Username or Email
              </div>
            </div>
            <input
              id="email"
              name="email"
              type="email"
              onChange={handleChange}
              disabled={isLoading}
              placeholder="Enter your email"
              className="w-full mt-2 border border-[#AEB3BC] rounded-[12px] bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
            />
            <div className="text-[#545454] text-[14px] sm:text-[16px] mt-5 lg:text-[18px]">
              <p>Password</p>
            </div>
            <input
              id="password"
              name="password"
              type="password"
              value={signInData.password}
              disabled={isLoading}
              onChange={handleChange}
              placeholder="Password"
              className="w-full  border border-[#AEB3BC] rounded-[12px] mt-2 bg-transparent py-2 pl-6 pr-10 text-black outline-none focus:border-primary focus-visible:shadow-none"
            />
            <div className="flex w-full justify-between mt-5">
              <div className=" gap-2 flex">
                <div className=" w-6 h-6 border rounded-md border-[#AEB3BC]" />
                <p className=" text-base">Remember Me</p>
              </div>
              <Link
                href="/forget-password"
                className=" text-base text-[#18470D]"
              >
                Forgot Password?
              </Link>
            </div>
            <div className="flex justify-center">
              <button
                type="submit"
                disabled={isLoading}
                className={`cursor-pointer lg:mt-[30px] 2xl:mt-[47px] sm:mt-[47px] mt-[30px] font-medium w-full sm:h-[51px] lg:h-[41px] h-[42px] 2xl:w-[156px] 2xl:h-[48px] bg-[#CBEC5E] rounded-[46px] text-[#18470D] text-[14px] lg:text-[16px] ${
                  isLoading ? "opacity-50 cursor-not-allowed" : ""
                }`}
              >
                {isLoading ? "Loading..." : "Continue"}
              </button>
            </div>
          </form>

          <div className="flex items-center gap-[26px] 2xl:mt-[30px] lg:mt-[33px] sm:mt-[41px] mt-[47px]">
            <hr className="w-[141px] bg-[#C7C7C7] h-px" />
            <span className="text-[#999999] text-[12px] sm:text-[14px]">
              or
            </span>
            <hr className="w-[141px] bg-[#C7C7C7] h-px" />
          </div>
          <div className="flex items-center gap-[12px] mt-[30px]">
            <hr className="w-[39px] bg-[#C7C7C7] h-px" />
            <span className="text-[#999999] text-[10px] sm:text-[14px] lg:text-[12px] 2xl:text-[15px] text-nowrap">
              Don’t have a Jobwhee account?
            </span>
            <hr className="w-[39px] bg-[#C7C7C7] h-px" />
          </div>
          <div className="mt-[29px] sm:mt-[27px] lg:mt-[22px] 2xl:mt-[66px]">
            <Link href="/auth/signup">
              <button className="w-[155px] h-[45px] border-[#18470D] border-[1px] rounded-[38px] text-[14px] 2xl:text-[15px] text-[#18470D] font-medium cursor-pointer">
                Sign Up
              </button>
            </Link>
          </div>
        </div>
      </div>
      {/* <Footer /> */}
    </main>
  );
};

export default SignIn;
