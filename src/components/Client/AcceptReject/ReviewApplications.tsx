import Dropdown from "@/shared/ui-kit/Dropdown";
import ProfileAvatar from "@/shared/ui-kit/ProfileAvatar";
import { Search } from "@/shared/ui-kit/Search";
import AboutClientCard from "@/shared/wrappers/AboutClientCard/AboutClientCard";
import { useEffect, useState } from "react";
import Button from "@/shared/ui-kit/Button";
import { SmallSkill } from "@/shared/ui-kit/SmallSkill";
import Image from "next/image";
import dynamic from "next/dynamic";
import { useRouter } from "next/navigation";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import { CircleCheckIcon } from "../../../../public/icons/CircleCheckIcon";
import { BriefcaseIcon } from "../../../../public/icons/BriefcaseIcon";
import { MoneyIcon } from "../../../../public/icons/MoneyIcon";
import { PersonBrainIcon } from "../../../../public/icons/PersonBrainIcon";
import { StarIcon } from "../../../../public/icons/talent-client/StarIcon";
const OfferDetailsPanel = dynamic(
  () => import("@/shared/ui-kit/OfferDetailsPanel"),
  {
    ssr: false,
  }
);

const categories = [
  { id: 1, title: "Newest application", checked: false },
  { id: 2, title: "Oldest application", checked: false },
  { id: 3, title: "Highest earnings", checked: false },
];
const ReviewApplications = ({ acceptRejectData }: any) => {
  const router = useRouter();
  const [isOpenOfferPanel, setIsOpenOfferPanel] = useState(false);
  const [selectedUser, setSelectedUser] = useState(null);
  const [dropDownData, setDropDrownData] = useState(categories);
  const [maxLetterLength, setMaxLetterLength] = useState(223);
  const [skillsNumber, setSkillsNumber] = useState(5);
  const activeFilter = dropDownData.find((item) => item.checked);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1536) {
        setMaxLetterLength(223);
        setSkillsNumber(5);
        console.log("setSkillsNumber", skillsNumber);
      } else if (width >= 1280) {
        setSkillsNumber(5);
      } else if (width >= 764) {
        setMaxLetterLength(164);
        setSkillsNumber(3);
        console.log("setSkillsNumber", skillsNumber);
      } else if (width >= 375) {
        setSkillsNumber(5);
        console.log("setSkillsNumber", skillsNumber);
        setMaxLetterLength(165);
      } else {
        setMaxLetterLength(165);
        setSkillsNumber(5);
        console.log("setSkillsNumber", skillsNumber);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const filteredUsers = [...acceptRejectData];

  if (activeFilter) {
    if (activeFilter.title === "Newest application") {
      filteredUsers.sort(
        (a: any, b: any) =>
          new Date(b.applicationDate).getTime() -
          new Date(a.applicationDate).getTime()
      );
    } else if (activeFilter.title === "Oldest application") {
      filteredUsers.sort(
        (a: any, b: any) =>
          new Date(a.applicationDate).getTime() -
          new Date(b.applicationDate).getTime()
      );
    } else if (activeFilter.title === "Highest earnings") {
      filteredUsers.sort((a: any, b: any) => {
        const parseMoney = (moneyStr: string) => {
          let num = moneyStr.replace(/[^0-9.]/g, "");
          if (moneyStr.toUpperCase().includes("K")) {
            return parseFloat(num) * 1000;
          } else if (moneyStr.toUpperCase().includes("M")) {
            return parseFloat(num) * 1000000;
          }
          return parseFloat(num);
        };

        return parseMoney(b.moneyEarned) - parseMoney(a.moneyEarned);
      });
    }
  }

  const handleUserClick = (user: any) => {
    setSelectedUser(user);
    setIsOpenOfferPanel(true);
  };
  const handleClick = (action: string) => {
    if (action === "Hire") {
      router.push("/client/job-offer");
    }
    if (action === "Message") {
      router.push("/local/messenger");
    }
  };

  return (
    <div>
      <section>
        <div className="flex flex-col xl:flex-row gap-[24px] justify-between 2xl:mt-[81px] xl:mt-[136px] md:mt-[69px] mt-[27px] md:px-0 px-[20px]">
          <Search width="xl:w-[489px] w-full" placeholder="Search talent" />

          <div className="md:flex hidden items-center gap-[17px]">
            <div className="flex items-center gap-[10px]">
              <span className="text-[16px] text-black">Sort:</span>
              <Dropdown
                width="w-[254px]"
                setDropDownData={setDropDrownData}
                list={dropDownData}
                type="checkboxes"
                placeholder="Newest application"
              />
            </div>

            <div className="w-[116px] h-[44px] border-[1px] border-[#AEB3BC] rounded-[50px] flex justify-center items-center gap-[10px]">
              <p className="text-[#18470D]">Filter</p>
              <Image
                src={"/images/icon-images/filter.png"}
                width={16}
                height={16}
                className="w-[16px] h-[16px]"
                alt=""
              />
            </div>
          </div>
        </div>
        <div>
          <div className="w-full rounded-[120px] border border-[#EAEAEA] h-[53px] 2xl:mt-[72px] mt-[74px] hidden xl:flex items-center text-[16px] text-black font-medium md:px-0 px-[20px]">
            <span className="2xl:ml-[6.9%] xl:ml-[10.7%]">User info</span>

            <span className="2xl:ml-[24.3%] xl:ml-[27.8%]">State</span>

            <span className="2xl:ml-[11.6%] xl:ml-[9.6%]">Skills</span>

            <span className="2xl:ml-[16.3%] xl:ml-[17%]">Details</span>
          </div>
          <div className="2xl:mt-[11px] xl:mt-[43px] md:mt-[55px] mt-[20px] flex flex-col gap-[29px] md:gap-[27px] xl:gap-[20px] 2xl:gap-[25px] md:px-0 px-[20px]">
            {filteredUsers.map((userData, index) => (
              <div
                onClick={() => handleUserClick(userData)}
                className="cursor-pointer"
                key={userData.userId || index}
              >
                <AboutClientCard radius="30px">
                  <div className="2xl:p-[0_0_0_25.5px] xl:p-[0_0_0_12px] md:p-[21px_30px_37px] p-[19px_13px_30px_13px] flex flex-col xl:items-center 2xl:mr-0 xl:mr-[11px] mr-0">
                    <div className="w-full flex gap-[17px]">
                      <ProfileAvatar
                        isOnline={userData.isOnline}
                        imgSrc={userData.avatarUrl}
                        hasBadge={userData.hasBadge}
                      />

                      <div className="md:w-fit w-[204px]">
                        <p className="font-medium text-[22px] md:text-[24px] 2xl:text-[26px]">
                          {userData.userName}
                        </p>
                        <p className="text-[#A8B1C1] text-[14px] 2xl:text-[16px]">
                          {userData.country}
                        </p>
                        <p className="text-[14px] 2xl:text-[16px] w-fit">
                          {userData.desc}
                        </p>
                      </div>
                    </div>
                    <div className="mt-[20px] md:mt-[15px] xl:mt-[21px] gap-[4px] md:gap-[10px] xl:gap-[20px] flex">
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className={`bg-white xl:w-[48px] w-[40px] xl:h-[48px] h-[40px]  border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
                      >
                        <div className="xl:w-[24px]  w-[20px] xl:h-[24px] h-[20px]">
                          <ThreeDotIcon />
                        </div>
                      </div>
                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[130px] md:w-[145px] xl:w-[192px] xl:h-[48px] h-[40px]"
                      >
                        <Button
                          onClick={() => handleClick("Message")}
                          action="Message"
                          type="transparent"
                        />
                      </div>

                      <div
                        onClick={(e) => e.stopPropagation()}
                        className="w-[130px] md:w-[145px] xl:w-[173px] xl:h-[48px] h-[40px]"
                      >
                        <Button
                          onClick={() => handleClick("Hire")}
                          action="Hire"
                          type="active"
                        />
                      </div>
                    </div>
                  </div>
                  <div className="xl:mt-0 mt-[0px] xl:pl-0 md:pl-[30px] pl-[13px] text-[14px] 2xl:text-[16px] text-[#545454]  text-nowrap flex md:gap-[34px] gap-[32px]">
                    <span className="xl:hidden text-[#545454] font-medium text-[16px] md:mt-0 mt-[-5px]">
                      State
                    </span>
                    <div>
                      <div className="w-[98px] h-[37.4px] flex justify-center items-center gap-[7px] mb-3 border border-[#AEB3BC] rounded-full">
                        <Image
                          className="pb-[3px]"
                          height={20.125}
                          width={20.125}
                          alt="start"
                          src={"/images/icon-images/starIcon.png"}
                        />
                        <p className="text-[37.46511459350586] font-bold">
                          {userData?.ratings}
                        </p>
                      </div>
                      <div className="2xl:px-[10px] xl:px-[20px] px-0 md:flex xl:flex-col gap-[13px] xl:gap-[20px]">
                        <div className="flex items-center gap-[10px]">
                          <CircleCheckIcon />
                          <span>{userData.jobSuccessPercent}% Job Success</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-[20px] md:mt-[0px]">
                          <BriefcaseIcon />
                          <span>{userData.completedJobs} completed jobs</span>
                        </div>
                        <div className="flex items-center gap-[10px] mt-[20px] md:mt-[0px]">
                          <div className="w-[16px] h-[16px]">
                            <MoneyIcon />
                          </div>
                          <span>{userData.moneyEarned} earned</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="2xl:w-fit xl:w-[226px] w-full xl:pl-0 md:pl-[30px] pl-[13px] flex md:gap-[34px] gap-[24px] items-start xl:items-center xl:mt-0 md:mt-[40px] mt-[32px]">
                    <span className="xl:hidden text-[#545454] font-medium text-[16px]">
                      Skills
                    </span>
                    <div className="md:flex xl:flex-col 2xl:gap-[14px] xl:gap-[7px] gap-[16px]">
                      <div className="xl:h-[44px] h-fit flex gap-x-[2px] items-center">
                        <div className="min-w-[19px] w-[19px] h-[19px]">
                          <PersonBrainIcon />
                        </div>
                        <span className="text-nowrap">
                          {userData.skills.length} skills of their profile
                        </span>
                      </div>

                      <div className="flex gap-[14px_6px] 2xl:gap-[12px_6px] xl:gap-[7px_6px] flex-wrap w-full xl:w-[`221px] 2xl:w-[226px] md:pt-0 pt-[21px]">
                        {userData.skills
                          .slice(0, skillsNumber)
                          .map((skill:any, i:number) => (
                            <div key={i}>
                              <SmallSkill skill={skill} />
                            </div>
                          ))}
                        {userData.skills.length > skillsNumber && (
                          <SmallSkill
                            skill={`+${userData.skills.length - skillsNumber}`}
                          />
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="flex xl:gap-[34px] md:gap-[25px] gap-[11px] xl:mt-[0px] md:mt-[28px] mt-[13px] xl:pl-[10px] md:pl-[30px] pl-[13px]">
                    <span className="xl:hidden text-[#545454] font-medium text-[16px] md:mt-0 mt-[-3px]">
                      Details
                    </span>
                    <p className="text-[#545454] 2xl:text-[16px] text-[14px] max-w-[243px] md:max-w-[602px] xl:max-w-[243px] 2xl:max-w-[401px]">
                      <span className="font-medium">Cover letter: </span>
                      {userData.coverLetter.slice(0, maxLetterLength)}
                      {userData.coverLetter.length >= maxLetterLength && " ..."}
                      {userData.coverLetter.length >= maxLetterLength && (
                        <span className="text-[#18470D] underline cursor-pointer 2xl:block">
                          View More
                        </span>
                      )}
                    </p>
                  </div>
                </AboutClientCard>
              </div>
            ))}
          </div>
        </div>
      </section>
      {typeof window !== "undefined" && selectedUser && isOpenOfferPanel && (
        <OfferDetailsPanel
          user={selectedUser}
          isOpenOfferPanel={isOpenOfferPanel}
          setIsOpenOfferPanel={setIsOpenOfferPanel}
        />
      )}
    </div>
  );
};

export default ReviewApplications;
