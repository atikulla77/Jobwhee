import ProfileAvatar from "@/shared/ui-kit/ProfileAvatar";
import AboutClientCard from "@/shared/wrappers/AboutClientCard/AboutClientCard";
import { ThreeDotIcon } from "../../../../public/icons/ThreeDotIcon";
import Button from "@/shared/ui-kit/Button";
import Image from "next/image";
import { CircleCheckIcon } from "../../../../public/icons/CircleCheckIcon";
import { BriefcaseIcon } from "../../../../public/icons/BriefcaseIcon";
import { MoneyIcon } from "../../../../public/icons/MoneyIcon";
import { PersonBrainIcon } from "../../../../public/icons/PersonBrainIcon";
import { SmallSkill } from "@/shared/ui-kit/SmallSkill";
import { useEffect, useState } from "react";
import { WhiteCheckIcon } from "../../../../public/icons/WhiteCheckIcon";
import { DropDownArrowIcon } from "../../../../public/icons/DropDownArrowIcon";
import { SearchBar } from "@/shared/ui-kit/SearchBar";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";

const InviteTalents = ({ acceptRejectData }: any) => {
  const [skillsNumber, setSkillsNumber] = useState(4);
  const [search, setSearch] = useState();
  const [isOpenFilterModal, setIsOpenFilterModal] = useState(false);

  useEffect(() => {
    const width = window.innerWidth;
    if (width >= 1536) {
      setSkillsNumber(4);
    } else if (width >= 1280) {
      setSkillsNumber(4);
    } else if (width >= 764) {
      setSkillsNumber(3);
    } else if (width >= 375) {
      setSkillsNumber(5);
    } else {
      setSkillsNumber(5);
    }
  }, [])


  const TalentBadgeData = [
    { id: 1, icon: "/images/talent-status/growingStar.png", title: "Growing Star" },
    { id: 2, icon: "/images/talent-status/leadingTalent.png", title: "Leading Talent" },
    { id: 3, icon: "/images/talent-status/proTalent.png", title: "Pro Talent" },
  ]
  const JobSuccessData = [
    { id: 1, title: "Any job success" },
    { id: 2, title: "80% & up" },
    { id: 3, title: "90% & up" },
  ]
  const RatingData = [
    { id: 1, title: "Any rating" },
    { id: 2, title: "4.0 & up" },
    { id: 3, title: "4.5 & up" },
    { id: 4, title: "5.0" },
  ]
  const EarnedAmountData = [
    { id: 1, title: "Any amount earned" },
    { id: 2, title: "$1+ earned" },
    { id: 3, title: "$100+ earned" },
    { id: 4, title: "$1K+ earned" },
    { id: 5, title: "$10K+ earned" },
    { id: 6, title: "No earnings yet" },
  ]

  return (
    <div className="flex justify-between 2xl:mt-[30px] xl:mt-[20px] mt-[10px]">
      <div className="2xl:w-[362px] w-[269px] xl:flex hidden flex-col gap-[30px]">
        <CheckedSectionContainer Tittle="Talent Badge" Data={TalentBadgeData} />
        <CheckedSectionContainer Tittle="Job Success" Data={JobSuccessData} />
        <CheckedSectionContainer Tittle="Rating" Data={RatingData} />
        <CheckedSectionContainer Tittle="Earned amount" Data={EarnedAmountData} />
      </div>
      <div className="2xl:w-[991px] xl:w-[895px] md:w-full w-[335px] flex flex-col 2xl:gap-[30px] xl:gap-[20px] gap-[10px] md:mx-0 mx-auto">
        <div className="flex justify-between items-center">
          <SearchBar
            placeholder="Search talent"
            className="2xl:w-[792px] xl:w-[692px] md:w-[533px] w-full h-[46px] !p-[2px] !gap-[20px]"
            iconWidth={42}
            iconHeight={42}
            setSearch={() => setSearch}
          />
          <div className="md:flex hidden items-center gap-[12px]">
            <div
              onClick={() => setIsOpenFilterModal(true)} className="w-[46px] h-[46px] xl:hidden flex justify-center items-center border-[1px] border-[#CBEC5E] rounded-full cursor-pointer">
              <Image
                className="cursor-pointer"
                width={24}
                height={24}
                alt="filter"
                src={"/images/icon-images/filter_1.png"}
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[48px] h-[24px] px-[2px] bg-[#D0D4D9] flex justify-start items-center rounded-[50px]">
                <div className="w-[20px] h-[20px] bg-[#F0F1F4] rounded-full"></div>
              </div>
              <p className="text-[#545454]">Available now</p>
            </div>
          </div>
        </div>
        <div className="md:hidden flex items-center justify-end gap-[12px]">
            <div
              onClick={() => setIsOpenFilterModal(true)} className="w-[46px] h-[46px] xl:hidden flex justify-center items-center border-[1px] border-[#CBEC5E] rounded-full cursor-pointer">
              <Image
                className="cursor-pointer"
                width={24}
                height={24}
                alt="filter"
                src={"/images/icon-images/filter_1.png"}
              />
            </div>
            <div className="flex items-center gap-[8px]">
              <div className="w-[48px] h-[24px] px-[2px] bg-[#D0D4D9] flex justify-start items-center rounded-[50px]">
                <div className="w-[20px] h-[20px] bg-[#F0F1F4] rounded-full"></div>
              </div>
              <p className="text-[#545454]">Available now</p>
            </div>
        </div>
        <div className="w-[100%] flex flex-col gap-[10px] xl:gap-[20px] 2xl:gap-[30px] md:mt-0 mt-[21px]">
          {acceptRejectData.map((userData, index) => (
            <div
              // onClick={() => handleUserClick(userData)}
              className="cursor-pointer w-[100%] 2xl:h-[264px] xl:h-[233px] md:h-[334px] h-[555px]"
              key={userData.userId || index}
            >
              <AboutClientCard classes="h-full justify-start 2xl:p-[38px_37px] xl:p-[28px_28px_34px_28px] md:p-[20px_20px_20px_20px] p-[14px_14px_14px_14px]">
                <div className="2xl:w-[466px] xl:w-[417px] w-full flex flex-col justify-start xl:items-center xl:mr-0 mr-0">
                  <div className="2xl:mt-[8px] mt-0 w-full flex items-center 2xl:gap-[15px] gap-[17px]">
                    <ProfileAvatar
                      isOnline={userData.isOnline}
                      imgSrc={userData.avatarUrl}
                      hasBadge={userData.hasBadge}
                    />

                    <div className="2xl:mt-[-4px] xl:mt-[-18px] md:mt-[-15px] mt-0 2xl:w-fit md:w-[316px] w-fit font-[400] text-left text-black">
                      <div className="flex items-center 2xl:gap-[3px] xl:gap-[11px] md:gap-[5px] gap-0">
                        <p className="font-medium text-[22px] md:text-[24px] 2xl:text-[26px] leading-normal">
                          {/* {userData.userName} */}
                          Katerina S.
                        </p>
                        <div className="w-[20px] h-[20px]">
                          <Image
                            className="pb-[3px]"
                            height={20.125}
                            width={20.125}
                            alt="start"
                            src={"/images/icon-images/verifyTalentIcons.png"}
                          />
                        </div>
                      </div>

                      <p className="text-[#A8B1C1] text-[14px] 2xl:text-[16px] leading-normal">
                        {/* {userData.country} */}
                        Greece
                      </p>
                      <p className="text-[14px] 2xl:text-[16px] w-fit leading-normal">
                        {/* {userData.desc} */}
                        Experienced Math Teacher| Algebra, Calculus
                      </p>
                    </div>
                  </div>
                  <div className="w-full mt-[20px] md:mt-[21px] 2xl:mt-[30px] gap-[4px] md:gap-[20px] flex">
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className={`bg-white xl:w-[48px] w-[40px] xl:h-[48px] h-[40px]  border border-[#CBEC5E] rounded-full flex justify-center items-center cursor-pointer`}
                    >
                      <div className="xl:w-[24px] w-[20px] xl:h-[24px] h-[20px]">
                        <Image
                          className=""
                          height={24}
                          width={24}
                          alt="start"
                          src={"/images/icon-images/mail.png"}
                        />
                      </div>
                    </div>
                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="md:w-[192px] w-[127px] xl:w-[172px] 2xl:w-[192px] xl:h-[48px] h-[40px]"
                    >
                      <Button
                        // onClick={() => handleClick("Message")}
                        action="Hire"
                        type="transparent"
                      />
                    </div>

                    <div
                      onClick={(e) => e.stopPropagation()}
                      className="md:w-[173px] w-[128px] xl:w-[156px] 2xl:w-[173px] xl:h-[48px] h-[40px]"
                    >
                      <Button
                        // onClick={() => handleClick("Hire")}
                        action="Invite"
                        type="active"
                      />
                    </div>
                  </div>
                </div>
                <div className="2xl:ml-[40px] xl:ml-[35px] ml-0 h-full xl:mt-0 md:mt-[29px] mt-[20px] text-[14px] 2xl:text-[16px] text-[#545454] flex items-start md:gap-[34px] gap-[32px]">
                  <div className="2xl:w-fit xl:w-[157px] w-full flex xl:flex-col md:flex-row flex-col xl:items-start items-center xl:gap-0 md:gap-[20px] gap-0">
                    <div className="2xl:w-[98px] xl:w-[83px] w-[98px] 2xl:h-[37.4px] h-[38px] flex justify-center items-center gap-[7px] 2xl:mb-[8px] xl:mb-[11.52px] mb-0 md:mr-0 mr-auto border border-[#AEB3BC] rounded-full">
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
                    <div className="md:w-fit w-full font-[400] text-black md:flex xl:flex-col 2xl:gap-0 xl:gap-[26px] gap-[10px] 2xl:pl-[5px] md:pl-[0px] pl-[10px]">
                      <div className="flex items-center xl:gap-[6px] gap-[10px] 2xl:h-[44px] md:h-[21px] h-[41px] ">
                        <CircleCheckIcon />
                        <span>100% Job Success</span>
                      </div>
                      <div className="flex items-center gap-[10px] 2xl:h-[44px] md:h-[21px] h-[41px] xl:ml-0 md:ml-[3px]  ml-0">
                        <BriefcaseIcon />
                        <span>32 completed jobs</span>
                      </div>
                      <div className="flex items-center gap-[10px] 2xl:h-[44px] md:h-[21px] h-[41px] xl:ml-0 md:ml-[13px]  ml-[0px]">
                        <div className="w-[16px] h-[16px]">
                          <MoneyIcon />
                        </div>
                        <span>$30K+ earned</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="2xl:ml-[21px] xl:ml-[24px] ml-0 xl:w-[206px] w-full h-full flex md:gap-[34px] gap-[24px] items-start 2xl:mt-[10px] xl:mt-[0px] md:mt-[29px] mt-[8px]">
                  <div className="md:flex xl:flex-col 2xl:gap-[5px] xl:gap-[12px] gap-[9px]">
                    <div className="xl:w-fit w-[276px] xl:h-[44px] md:h-fit h-[44px] flex gap-x-[2px] items-center">
                      <div className="min-w-[19px] w-[19px] h-[19px]">
                        <PersonBrainIcon />
                      </div>
                      <span className="text-[16px] font-[400] text-black xl:pt-[0px] pt-[2px]">
                        {userData.skills.length} skills of their profile
                      </span>
                    </div>

                    <div className="flex md:gap-[6px_6px] gap-[11px_6px] 2xl:gap-[6px_6px] xl:gap-[12px_6px] flex-wrap w-full xl:w-[221px] 2xl:w-[226px] md:pt-0 pt-[11px]">
                      {userData.skills
                        .slice(0, skillsNumber)
                        .map((skill: any, i: number) => (
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
              </AboutClientCard>
            </div>
          ))}
        </div>
      </div>

      {isOpenFilterModal && setIsOpenFilterModal && (
        <GlobalModal
          isOpen={isOpenFilterModal}
          onClose={() => setIsOpenFilterModal(false)}
          containerClasses="md:pt-[0px] pt-[86px]"
          classes="md:w-[737px] w-[100%] md:max-h-[903px] max-h-[100%] h-full md:pl-[40px] pl-[20px] md:pr-[21px] pr-[7px] md:py-[40px] py-[30px] relative overflow-hidden md:!rounded-b-[30px] !rounded-b-[0px]"
        >
          <div className="md:mb-[31px] mb-[15px] pl-[10px]">
            <h1 className="text-[30px] font-[500] text-[#18470D]">Filter By</h1>
          </div>
          <div className="w-full md:h-[760px] h-[90vh] relative overflow-y-auto md:pr-[19px] pr-[14px] ml-[-2px]">
            <div className="flex flex-col gap-[30px]">
              <CheckedSectionContainer Tittle="Talent Badge" Data={TalentBadgeData} TittlePadding="md:p-[10px_15px_10px_13px] p-[10px_7px_10px_13px]" CheckedSectionLeftPadding="md:pl-[17px] pl-[13px]" />
              <CheckedSectionContainer Tittle="Job Success" Data={JobSuccessData} TittlePadding="md:p-[10px_15px_10px_13px] p-[10px_7px_10px_13px]" />
              <CheckedSectionContainer Tittle="Rating" Data={RatingData} TittlePadding="md:p-[10px_15px_10px_13px] p-[10px_7px_10px_13px]" />
              <CheckedSectionContainer Tittle="Earned amount" Data={EarnedAmountData} TittlePadding="md:p-[10px_15px_10px_13px] p-[10px_7px_10px_13px]" />
              <div className="w-full h-[105px] md:flex hidden"></div>
              <div className="w-full h-full bg-white border-t-[1px] border-t-[#EAEAEA] md:hidden flex flex-col justify-center gap-[20px] md:pt-[34px] pt-[25px]">
                <div className="w-full h-[48px]">
                  <Button
                    action="Clear Filters"
                    type="transparent"
                    onClick={() => setIsOpenFilterModal(false)}
                  />
                </div>
                <div className="w-full h-[48px]">
                  <Button
                    action="Apply"
                    type="active"
                    onClick={() => setIsOpenFilterModal(false)}
                  /></div>
              </div>
              <div className="w-full h-[105px] md:hidden flex"></div>
            </div>
          </div>
          <div className="w-full h-[116px] bg-white border-t-[1px] border-t-[#EAEAEA] absolute bottom-0 left-0 right-0 md:flex hidden justify-end gap-[20px] pr-[45px] pt-[34px]">
            <div className="w-[200px] h-[48px]">
              <Button
                action="Clear Filters"
                type="transparent"
                onClick={() => setIsOpenFilterModal(false)}
              />
            </div>
            <div className="w-[195px] h-[48px]">
              <Button
                action="Apply"
                type="active"
                onClick={() => setIsOpenFilterModal(false)}
              /></div>
          </div>
        </GlobalModal>
      )}
    </div>
  );
};

export default InviteTalents;

type CheckedSectionProps = {
  keyid?: number;
  icon?: string;
  tittle: string;
};
type CheckedSectionContainerProps = {
  Tittle: string;
  Data: Array<{ id: number; title: string; icon?: string }>;
  TittlePadding?: string;
  CheckedSectionLeftPadding?: string;
};

const CheckedSectionContainer: React.FC<CheckedSectionContainerProps> = ({ Tittle, Data, TittlePadding, CheckedSectionLeftPadding }) => {
  const [dropDownContainer, setDropDownContainer] = useState(true);
  return (
    <div>
      <div onClick={() => { setDropDownContainer(!dropDownContainer) }} className={`w-full h-[50px] flex justify-between items-center cursor-pointer ${TittlePadding ? TittlePadding : "2xl:p-[10px_15px_10px_13px] p-[10px_15px_10px_8px]"}`}>
        <h3 className="text-[20px] text-[#18470D] font-[500]">{Tittle}</h3>
        <div className={`w-[16px] h-[16px] ${dropDownContainer ? "rotate-180" : ""}`}>
          <DropDownArrowIcon color="#18470D" />
        </div>
      </div>
      <div className={`${CheckedSectionLeftPadding ? CheckedSectionLeftPadding : "2xl:pl-[23px] pl-[13px]"} mt-[12px] ${dropDownContainer ? "flex" : "hidden"} flex-col gap-[20px]`}>
        {Data.map((key) => {
          return (
            <CheckedSection keyid={key.id} tittle={key.title} icon={key.icon} />
          )
        })}
      </div>
    </div>
  );
};
const CheckedSection: React.FC<CheckedSectionProps> = ({ keyid = 1, icon, tittle }) => {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div key={keyid} className={`w-full ${icon ? "h-[30px]" : "h-[24px]"} flex items-center gap-[8px] cursor-pointer`} onClick={() => setIsChecked(!isChecked)}>
      <input type="checked" checked={isChecked} className="hidden" />
      <div className={`min-w-[24px] h-[24px] flex items-center justify-center border rounded-[6px] ${isChecked ? "bg-[#18470D] border-[#18470D]" : "bg-none border-[#AEB3BC]"}`}>
        {isChecked && <WhiteCheckIcon />}
      </div>
      <Image
        className={`${icon ? "" : "hidden"}`}
        width={28}
        height={30}
        alt="start"
        src={`${icon ? icon : "/images/talent-status/proTalent.png"}`}
      />
      <span className="text-gray-800 select-none">{tittle}</span>
    </div>
  );
};