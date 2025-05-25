"use client";

import TalentSettings from "@/components/Talent/TalentSettings/TalentSettings";
import {Footer} from "../../../../components/landingApp/Footer/Footer";
import { Link } from "lucide-react";

const FreelancerSettingsPage = () => {
    return (
        <div className={"flex flex-col bg-white"}>
             <div
                  className={`flex flex-col md:flex-row gap-[40px] sm:gap-[30px] lg:gap-[60px] mt-[100px] sm:mt-[186px] mx-[20px] md:mx-[40px] xl:mx-[120px] 2xl:mx-[135px]`}
                >
                  <aside
                    className={`w-[337px] md:w-[328px] xl:w-[387px] 2xl:w-[411px] h-[260px] md:h-[287px] xl:h-[389px] 2xl:h-[435px] border-b md:border-b-0  md:border-r  border-[#B9B9B9]`}
                  >
                    <div
                      className={`w-full h-[260px] md:w-[278px] md:h-[287px] xl:w-[337px] xl:h-[333px] `}
                    >
                      <h2
                        className={`mb-[10px] md:mb-[30px] lg:mb-[32px] font-medium text-[22px] sm:text-[40px] leading-[60px]`}
                      >
                        Settings
                      </h2>
                      <ul
                        className={`flex flex-col gap-[22px] md:gap-[19px] lg:gap-[36px] ml-[40px]`}
                      >
                        <li
                          className={`font-semibold text-[16px] hover:scale-105 duration-300 cursor-pointer md:text-[18px] text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
                        >
                          Account
                        </li>
                        <li
                          className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
                        >
                          Security
                        </li>
                        <li
                          className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer text-[#545454]  lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
                        >
                          Notifications
                        </li>
                        <Link href={"/freelancer/verification"}>
                          <li
                            className={`font-semibold text-[16px] md:text-[18px]  hover:scale-105 duration-300 cursor-pointer lg:text-[20px] leading-[24px] md:leading-[27px] lg:leading-[30px]`}
                          >
                            Verification
                          </li>
                        </Link>
                      </ul>
                    </div>
                  </aside>
                  <p className="text-center w-full text-2xl text-green-500">Client Verified</p>
                </div>
            <footer>
                <Footer/>
            </footer>
        </div>
    );
};
export default FreelancerSettingsPage;
