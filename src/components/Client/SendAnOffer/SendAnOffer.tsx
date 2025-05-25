"use client";
import TalentProfileCard from "@/components/contracts/TalentProfileCard/TalentProfileCard";
import Dropdown from "@/shared/ui-kit/Dropdown";
import RadioButtons from "@/shared/ui-kit/RadioButtons";
import Image from "next/image";
import { useState } from "react";
import { WhiteCheckIcon } from "../../../../public/icons/WhiteCheckIcon";
import Button from "@/shared/ui-kit/Button";
import { EditIcon } from "../../../../public/icons/EditIcon";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import EscrowModalContent from "@/shared/widgets/EscrowModalContent/EscrowModalContent";
import CancelOfferModal from "./CancelOfferModal";
import { useRouter } from "next/navigation";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";
import { CalendarIcon } from "lucide-react";
import { InfoSectionGreen } from "@/shared/widgets/InfoSectionGreen.tsx/InfoSectionGreen";
import { PersonBrainIcon } from "../../../../public/icons/PersonBrainIcon";
import { MoneyIcon } from "../../../../public/icons/MoneyIcon";

const SendAnOffer = () => {
  const router = useRouter();
  const [bidAmount, setBidAmount] = useState(0);
  const [isAcceptTermsOfService, setIsAcceptTermsOfService] = useState(false);
  const [tosError, setTosError] = useState(false);
  const [isOpenEscrowModal, setIsOpenEscrowModal] = useState(false);
  const [isOpenSuccessModal, setIsOpenSuccessModal] = useState(false);
  const [isOpenCancelOfferModal, setIsOpenCancelOfferModal] = useState(false);
  const [title, setTitle] = useState("Hairstylist Needed for Special Events");
  const [isEditing, setIsEditing] = useState(false);
  const [jobDescription, setJobDescription] = useState(
    `We are looking for a skilled and professional hairstylist to provide event-ready hairstyling services for weddings, parties, corporate functions, and photoshoots. The ideal candidate is passionate about hair design, stays up-to-date with industry trends, and is committed to delivering high-quality styling services.`
  );

  const [dropDownData, setDropDrownData] = useState([]);
  const [selectedOption, setSelectedOption] = useState(0);
  const radioButtonsData = ["Per Milestone", "After work is completed"];

  const [jobDescriptionList, setJobDescriptionList] = useState([
    "Provide hairstyling services for various occasions, including bridal, glam, formal, casual, and editorial styling.",
    "Perform a range of techniques such as updos, curls, braiding, blowouts, and sleek styles.",
    "Use professional haircare brands and styling tools to achieve high-quality results.",
    "Prepare hair with treatments, heat protection, and volume-boosting techniques to ensure optimal styling.",
    "Ensure styles are long-lasting, frizz-free, and photo-ready.",
    "Offer additional services such as hair extensions, accessory styling, and quick touch-ups.",
    "At least 1 year of experience as a hairstylist.",
    "Portfolio showcasing hairstyling work (before & after images, editorial shoots, or event styling).",
    "Proficiency in hairstyling techniques, including updos, curls, braiding, and blowouts.",
    "Knowledge of professional haircare products and styling tools.",
    "Strong communication skills and ability to collaborate with clients to achieve their desired look.",
    "Attention to detail, creativity, and ability to work under time constraints.",
    "Flexible schedule to accommodate event-based bookings.",
  ]);

  const talentInfo = {
    name: "Maria T.",
    avatarUrl: "/images/topTalents/userPhoto.png",
    location: "Athene, Greece",
    rating: 4.9,
    earnings: "$3K+",
    totalJobs: 12,
    totalHours: 155,
  };

  const [milestones, setMilestones] = useState([
    {
      description: "Consultation & Style Planning",
      dueDate: "01/01/25",
      amount: 500,
    },
    {
      description: "Trial Hairstyling Session",
      dueDate: "01/01/25",
      amount: 500,
    },
    { description: "Event Day Hairstyling", dueDate: "01/01/25", amount: 500 },
    {
      description: "Touch-ups & Post-Event Care",
      dueDate: "01/01/25",
      amount: 500,
    },
  ]);

  const handleAddMilestone = () => {
    setMilestones((prev) => [
      ...prev,
      { description: "New Milestone", dueDate: "01/01/25", amount: 0 },
    ]);
  };

  const handleDelete = (index: number) => {
    setMilestones((prev) => prev.filter((_, i) => i !== index));
  };

  const total = milestones.reduce((acc, m) => {
    const amount = Number(m.amount) || 0;
    return acc + amount;
  }, 0);

  const tax = total * 0.1;
  const finalCost = total + tax;
  const handleSubmitEscrow = () => {
    setIsOpenSuccessModal(true);
    setIsOpenEscrowModal(false);
  };
  const handleCancelOffer = () => {
    setIsOpenCancelOfferModal(true);
    setIsOpenEscrowModal(false);
  };
  const handleClick = (action: string) => {
    if (action === "Send") {
      if (isAcceptTermsOfService) {
        setIsOpenEscrowModal(true);
        setTosError(false);
      } else {
        setTosError(true);
      }
    }
    if (action === "Back to Home") {
      router.push(`/`);
      setIsOpenSuccessModal(false);
    }
  };

  const handleDescriptionChange = (index: number, value: string) => {
    const updated = [...milestones];
    updated[index].description = value;
    setMilestones(updated);
  };

  const handleDueDateChange = (index: number, value: string) => {
    const updated = [...milestones];
    updated[index].dueDate = value;
    setMilestones(updated);
  };
  const handleAmountChange = (index: number, value: string) => {
    const updated = [...milestones];
    updated[index].amount = parseFloat(value);
    setMilestones(updated);
  };
  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <>
      <div className="2xl:w-[1412px] xl:w-[1200px] md:w-[780px] w-[335px] pt-[38px] mx-auto mt-[100px] bg-white">
        <div className="w-full 2xl:h-[125px] md:h-[99px] h-[54px] flex items-center md:pl-[26px] pl-[14px] border-[1px] border-[#CBEC5E] rounded-[16px]">
          <h1 className="2xl:text-[40px] xl:text-[30px] md:text-[28px] text-[20px] font-[500] text-black">
            Send an offer
          </h1>
        </div>

        <div className="flex xl:flex-row flex-col xl:gap-0 md:gap-[53px] gap-[33px] justify-between 2xl:mt-[30px] xl:mt-[16px] mt-[10px]">
          <div className="2xl:w-[855px] xl:w-[774px] w-full flex flex-col 2xl:gap-[30px] xl:gap-[20px] gap-[10px]">
            {/* contract title and job details start  */}
            <div className="w-[100%] h-fit xl:p-[28px_28px_40px_28px] md:p-[20px_36px_47px_20px] p-[14px_20px_59px_14px] border-[1px] border-[#CBEC5E] rounded-[16px]">
              <h2 className="md:text-[16px] text-[14px] text-[#8A8A8A] font-[500] md:mb-[4px] mb-[8px]">
                Details
              </h2>
              <div className="w-full h-[0.9px] bg-[#AEB3BC] relative">
                <div className="w-[77px] h-[5px] bg-[#CBEC5E] rounded-[15px] absolute left-0 top-[-2.5px]"></div>
              </div>
              <h1 className="text-[20px] font-[500] xl:mt-[10px] md:mt-[18px] mt-[16px]">
                Job Details
              </h1>
              <div className="md:mt-[23px] mt-[14px] xl:mb-[29px] mb-[16px]">
                <h1 className="text-[18px] text-[#545454] mb-[8px]">
                  Contract Title
                </h1>
                <div className="w-full md:h-[42px] h-[40px] border-[1px] border-[#242524] rounded-[12px] flex items-center pl-[8px]">
                  <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    className="text-[#2B2C2D] text-[15px] bg-transparent w-full h-full outline-none"
                  />
                </div>
              </div>
              <div className="flex md:flex-row flex-col md:gap-0 gap-[16px] justify-between">
                <div className="2xl:w-[271.59px] md:w-[205px] w-full">
                  <h1 className="text-[18px] text-[#545454] md:mb-[8px] mb-[10px]">
                    Hiring Person
                  </h1>
                  <div className="w-full h-[42px] border-[1px] border-[#242524] rounded-[12px] flex items-center px-[8px]">
                    <p className="text-[#2B2C2D]">Eleni C.</p>
                  </div>
                </div>
                <div className="2xl:w-[271.59px] md:w-[230px] w-full">
                  <h1 className="text-[18px] text-[#545454] md:mb-[8px] mb-[10px]">
                    Related job post
                  </h1>

                  <div>
                    <Dropdown
                      width="w-[100%]"
                      list={dropDownData}
                      type="checkboxes"
                      placeholder={title}
                    />
                  </div>
                </div>
                <div className="2xl:w-[218px] md:w-[230px] w-full">
                  <h1 className="text-[18px] text-[#545454] md:mb-[8px] mb-[10px]">
                    Start Date
                  </h1>

                  <div className="w-full h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] flex items-center px-[8px]">
                    <p className="text-[#8B939F]"> 00/00/00</p>
                    <Image
                      src="/images/icon-images/calendar.png"
                      width={16}
                      height={16}
                      className="w-[16px] h-[16px] ml-auto"
                      alt=""
                    />
                  </div>
                </div>
              </div>
            </div>
            {/* contract length and duration start  */}
            <div className="mt-[10px] lg:mt-[20px] 2xl:mt-[35px]">
              <InfoSectionGreen title="About" lineWidth="w-[77px]">
                <div
                  className={`flex mt-[34px] sm:mt-[16px] justify-between flex-wrap gap-[16px] flex-col sm:flex-row mb-[12px] sm:mb-[44px]`}
                >
                  <div className="flex gap-[8px]">
                    <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                      <CalendarIcon />
                    </div>
                    <div>
                      <p className="font-medium text-[16px] sm:text-[20px]">
                        1-3 months
                      </p>
                      <p className="text-[#545454] text-[14px] mt-[4px]">
                        Work Scope
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                      <PersonBrainIcon />
                    </div>
                    <div>
                      <p className="font-medium text-[16px] sm:text-[20px]">
                        Intermediate
                      </p>
                      <p className="text-[#545454] text-[14px] mt-[4px]">
                        Experience Level
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-[8px]">
                    <div className="2xl:w-[28px] 2xl:h-[28px] w-[24px] h-[24px]">
                      <MoneyIcon />
                    </div>
                    <div>
                      <p className="font-medium text-[16px] sm:text-[20px]">
                        $1000
                      </p>
                      <p className="text-[#545454] text-[14px] mt-[4px]">
                        Budget
                      </p>
                    </div>
                  </div>
                </div>
              </InfoSectionGreen>
            </div>

            {/* contract terms and milestones or completed task section start  */}
            <div className="w-[100%] h-fit 2xl:p-[28px_32px_23px_28px] xl:p-[28px_20px_29px_28px] md:p-[20px_20px_29px_20px] p-[14px_14px_14px_14px] border-[1px] border-[#CBEC5E] rounded-[16px]">
              <h2 className="md:text-[16px] text-[14px] text-[#8A8A8A] font-[500] md:mb-[4px] mb-[8px]">
                Terms
              </h2>
              <div className="w-full h-[0.9px] bg-[#AEB3BC] relative">
                <div className="w-[72px] md:h-[5px] h-[3px] bg-[#CBEC5E] rounded-[15px] absolute left-0 md:top-[-2.5px] top-[-1.5px]"></div>
              </div>
              <h1 className="md:text-[20px] text-[16px] font-[500] mt-[18px]">
                Terms
              </h1>

              <h3 className="font-[500] md:pt-[10px] pt-[13px] md:pb-[18px] pb-[30px]">
                How do you want to be paid?
              </h3>

              <RadioButtons
                radioButtonsData={radioButtonsData}
                selectedOption={selectedOption}
                setSelectedOption={setSelectedOption}
                radioButtonsDescription={[
                  "Break your work into parts and get paid when each part is done.",
                  "Get full payment once all tasks are completed and delivered.",
                ]}
                gapy="xl:gap-y-[29px] md:gap-y-[37px] gap-y-[30px]"
              />
              <h3
                className={`font-[500] xl:pt-[34px] md:pt-[26px] pt-[13px] ${
                  selectedOption === 0 ? "md:pb-[12px] pb-[22px]" : "hidden"
                }`}
              >
                How many milestones would you
                <br className="md:hidden block" /> like to set?
              </h3>
              {selectedOption === 0 ? (
                <>
                  <div className="flex flex-col text-[16px] pl-[11px]">
                    <div className="flex flex-col md:gap-[23px] gap-[21px]">
                      {milestones.map((milestone, index) => (
                        <div
                          key={index}
                          className="flex md:flex-row flex-col 2xl:gap-[16px] md:gap-[10px] gap-[12px]"
                        >
                          {/* Description */}
                          <div className="flex md:gap-[12px] gap-[3px] xl:ml-[-5px] ml-0">
                            <div className="md:flex hidden justify-end items-end md:w-[5.6px] w-[10px] h-auto ml-0">
                              <p className="font-[500] h-[42px] flex items-center">
                                {index + 1}
                              </p>
                            </div>
                            <div className="md:w-[269px] w-full relative">
                              <div className="md:hidden flex justify-end items-end md:w-[5.6px] w-[10px] h-[42px] absolute left-[-13px] bottom-[0px]">
                                <p className="font-[500] h-[42px] flex items-center">
                                  {index + 1}
                                </p>
                              </div>
                              {index === 0 && (
                                <h3 className="text-[18px] text-[#545454] pb-[8px]">
                                  Description
                                </h3>
                              )}
                              {index !== 0 && (
                                <h3 className="text-[18px] text-[#545454] pb-[8px] md:hidden block">
                                  Description
                                </h3>
                              )}
                              <div className="w-full h-[42px] border-[1px] border-[#242524] rounded-[12px] flex items-center px-[8px]">
                                <input
                                  type="text"
                                  value={milestone.description}
                                  onChange={(e) =>
                                    handleDescriptionChange(
                                      index,
                                      e.target.value
                                    )
                                  }
                                  className="text-[#000000] bg-transparent w-full h-full outline-none"
                                />
                              </div>
                            </div>
                          </div>

                          {/* Due Date */}
                          <div className="2xl:w-[224px] xl:w-[190px] md:w-[191px] w-full">
                            {index === 0 && (
                              <h3 className="text-[18px] text-[#545454] pb-[8px]">
                                Due Date
                              </h3>
                            )}
                            {index !== 0 && (
                              <h3 className="text-[18px] text-[#545454] pb-[8px] md:hidden block">
                                Due Date
                              </h3>
                            )}
                            <div className="w-full h-[42px] border-[1px] border-[#242524] rounded-[12px] flex items-center px-[8px]">
                              <input
                                type="date"
                                value={milestone.dueDate}
                                onChange={(e) =>
                                  handleDueDateChange(index, e.target.value)
                                }
                                className="text-[#000000] bg-transparent w-full h-full outline-none appearance-none"
                              />
                            </div>
                          </div>

                          {/* Amount */}
                          <div className="2xl:w-[256px] xl:w-[227px] md:w-[232px] w-full 2xl:ml-0 md:ml-[4px] ml-0">
                            {index === 0 && (
                              <h3 className="text-[18px] text-[#545454] pb-[8px]">
                                Amount
                              </h3>
                            )}
                            {index !== 0 && (
                              <h3 className="text-[18px] text-[#545454] pb-[8px] md:hidden block">
                                Amount
                              </h3>
                            )}
                            <div className="w-full h-[42px] flex justify-between items-center">
                              <div className="2xl:w-[203px] xl:w-[172px] md:w-[174px] w-[239px] h-full border-[1px] border-[#242524] rounded-[12px] flex items-center px-[8px]">
                                <span className="text-[#000000] mr-1">€</span>
                                <input
                                  type="text"
                                  step="0.1"
                                  value={milestone.amount || 0}
                                  onChange={(e) =>
                                    handleAmountChange(index, e.target.value)
                                  }
                                  className="text-[#000000] bg-transparent w-full h-full outline-none appearance-none"
                                />
                              </div>

                              <button
                                onClick={() => handleDelete(index)}
                                className="w-[42px] h-[42px] border-[1.4px] border-[#CBEC5E] rounded-full flex items-center justify-center"
                              >
                                <Image
                                  src="/images/icon-images/trash-2.png"
                                  width={19}
                                  height={19}
                                  className="w-[19px] h-[19px]"
                                  alt=""
                                />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Add Milestone */}
                    <div>
                      <button
                        onClick={handleAddMilestone}
                        className="text-[#18470D] md:text-[16px] text-[14px] font-[500] xl:pt-[17px] md:pt-[25px] pt-[12px] xl:pl-[12px] md:pl-[20px] pl-[0px]"
                      >
                        +Add Milestone
                      </button>
                    </div>

                    {/* Divider */}
                    <div className="2xl:w-[798px] xl:w-[727px] md:w-full w-[307px] h-[1px] bg-[#aeb3bc82] md:ml-[-5px] ml-[-13px] md:mt-[25px] mt-[36px] 2xl:mb-[23px] mb-[15px]"></div>

                    {/* Total Summary */}
                    <div className="flex md:flex-row flex-col md:gap-0 gap-[31px] md:justify-between justify-center 2xl:ml-[-5px] xl:ml-[2px] md:ml-[-1px] ml-0 md:pr-0 pr-[11px]">
                      <div className="flex flex-col justify-center text-center text-[20px] gap-[4px]">
                        <h2 className="font-[500]">Total cost</h2>
                        <p className="text-[#FF0000] font-[400]">
                          €{total.toFixed(1)}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center text-center text-[20px] gap-[4px] xl:ml-[5px] ml-[0px]">
                        <h2 className="font-[500]">Payment tax</h2>
                        <p className="text-[#000000] font-[400]">
                          €+{tax.toFixed(1)}
                        </p>
                      </div>
                      <div className="flex flex-col justify-center text-center text-[20px] gap-[4px] xl:pr-0 md:pr-[1px] pr-0">
                        <h2 className="font-[500]">Final cost</h2>
                        <p className="text-[#000000] font-[400]">
                          €{finalCost.toFixed(1)}
                        </p>
                      </div>
                    </div>
                  </div>
                </>
              ) : (
                <div className="mt-5">
                  <div className="flex 2xl:flex-row flex-col 2xl:gap-0 gap-[20px] justify-between items-center 2xl:pb-[12px] pb-[19px] 2xl:pr-0 pr-[8px]">
                    {/* Bid Amount */}
                    <div className="2xl:w-[231px] w-full">
                      <h3 className="text-[18px] text-[#545454] pb-[8px]">
                        Bid
                      </h3>
                      <div className="w-full h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] flex items-center px-[8px]">
                        <span className="text-[#000000] mr-1">€</span>
                        <input
                          type="number"
                          step="0.1"
                          value={bidAmount}
                          onChange={(e) =>
                            setBidAmount(parseFloat(e.target.value) || 0)
                          }
                          className="text-[#000000] bg-transparent w-full h-full outline-none appearance-none"
                        />
                      </div>
                    </div>

                    {/* Service Charge */}
                    <div className="2xl:w-fit w-full">
                      <h3 className="text-[18px] text-[#545454] pb-[8px]">
                        10% Talent Service Charge
                      </h3>
                      <div className="2xl:w-[231px] w-full h-[42px] border-[1px] border-[#E9E9E9] bg-[#E9E9E9] rounded-[12px] flex items-center px-[8px]">
                        <p className="text-[#8B939F]">
                          -€ {(bidAmount * 0.1).toFixed(2)}
                        </p>
                      </div>
                    </div>

                    {/* Final Cost */}
                    <div className="2xl:w-[231px] w-full">
                      <h3 className="text-[18px] text-[#545454] pb-[8px]">
                        Final Cost
                      </h3>
                      <div className="w-full h-[42px] border-[1px] border-[#AEB3BC] rounded-[12px] flex items-center px-[8px]">
                        <p className="text-[#000000]">
                          € {(bidAmount - bidAmount * 0.1).toFixed(2)}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
            {/* Contract description start  */}
            <div className="w-[100%] h-fit 2xl:p-[28px_33px_28px_28px] xl:p-[28px_16px_31px_28px] md:p-[20px_30px_39px_20px] p-[10px_8px_24px_14px] border-[1px] border-[#CBEC5E] rounded-[16px] relative">
              <h2 className="md:text-[16px] text-[14px] text-[#8A8A8A] font-[500] md:mb-[4px] mb-[8px]">
                Description
              </h2>

              <button
                onClick={handleEditClick}
                className="w-[36px] h-[36px] absolute 2xl:right-[33px] xl:right-[23px] right-[20px] xl:top-[11px] top-[6px] border-[1px] border-[#CBEC5E] rounded-full md:flex hidden justify-center items-center"
              >
                <EditIcon />
              </button>

              <div className="w-full h-[0.9px] bg-[#AEB3BC] relative">
                <div className="w-[117px] md:h-[5px] h-[3px] bg-[#CBEC5E] rounded-[15px] absolute left-0 md:top-[-2.5px] top-[-1.5px]"></div>
              </div>

              <h1 className="md:text-[20px] text-[15px] font-[500] md:mt-[10px] mt-[6px] mb-[10px]">
                Job Description
              </h1>

              <div className="text-[#545454] md:text-[16px] text-[14px] font-[400]">
                {isEditing ? (
                  <>
                    <textarea
                      value={jobDescription}
                      onChange={(e) => setJobDescription(e.target.value)}
                      className="w-full border border-[#CBEC5E] rounded-[8px] p-[10px] text-[#545454] md:text-[16px] text-[14px] resize-none"
                      rows={6}
                    />

                    {jobDescriptionList.map((item, index) => (
                      <div key={index} className="flex mt-2">
                        <p className="md:px-[9px] px-[8px]">•</p>
                        <input
                          value={item}
                          onChange={(e) => {
                            const newList = [...jobDescriptionList];
                            newList[index] = e.target.value;
                            setJobDescriptionList(newList);
                          }}
                          className="bg-transparent outline-none border-b border-[#D3D3D3] w-full"
                        />
                      </div>
                    ))}
                  </>
                ) : (
                  <>
                    <p className="md:pb-[2px] pb-[8px]">{jobDescription}</p>
                    {jobDescriptionList.map((item, index) => (
                      <div key={index} className="flex">
                        <p className="md:px-[9px] px-[8px]">•</p>
                        <p>{item}</p>
                      </div>
                    ))}
                  </>
                )}

                <div>
                  <div className="w-[170px] h-[42px] border-[1px] cursor-pointer border-[#B9B9B9] text-[#18470D] rounded-[6px] flex items-center 2xl:mt-[38px] mt-[25px] pl-[12px]">
                    <label className="flex items-center cursor-pointer">
                      <input
                        type="file"
                        className="hidden"
                        onChange={(e) => console.log(e.target.files)}
                      />
                      <Image
                        src={"/images/icon-images/attach.png"}
                        width={24}
                        height={24}
                        className="w-[24px] h-[24px]"
                        alt=""
                      />
                      <p className="pl-[11px] text-[16px]">Attach File</p>
                    </label>
                  </div>
                  <p className="mt-[14px] text-[14px] text-[#545454]">
                    Max file size: 1000MB
                  </p>
                </div>
              </div>
            </div>
            {/* Accept terms section start  */}
            <label className="flex md:items-center items-start gap-[8px] cursor-pointer 2xl:mt-0 xl:mt-[15px] mt-0">
              <input
                type="checkbox"
                checked={isAcceptTermsOfService}
                onChange={() =>
                  setIsAcceptTermsOfService(!isAcceptTermsOfService)
                }
                className="hidden"
              />
              <div
                className={`min-w-[24px] h-[24px] flex items-center justify-center border rounded-[6px] ${
                  isAcceptTermsOfService
                    ? "bg-[#18470D] border-[#18470D]"
                    : "bg-none border-[#AEB3BC]"
                }`}
              >
                {isAcceptTermsOfService && <WhiteCheckIcon />}
              </div>
              <p
                className={`text-[#545454] md:text-[16px] text-[14px] pt-[1px]`}
              >
                Yes, I understand and agree to the{" "}
                <span className={` text-[#18470D]`}>
                  Jobwhee Terms of Service
                </span>{" "}
                and <span className={`  "text-[#18470D]`}>Privacy Policy</span>.
              </p>
            </label>
            {tosError && !isAcceptTermsOfService && (
              <p className="text-red-500 text-sm ">
                You must accept the Terms of Service before continuing.
              </p>
            )}

            <div className="flex items-center md:gap-[13px] gap-[20px] 2xl:mt-[-12px] xl:mt-[19px] md:mt-[29px] mt-[27px]">
              <div className="md:w-[200px] w-[157px] h-[48px]">
                <Button
                  type={"transparent"}
                  action={"Cancel an offer"}
                  padding={false}
                />
              </div>
              <div className="md:w-[195px] w-[157px] h-[48px]">
                <Button
                  onClick={() => handleClick("Send")}
                  type={"active"}
                  action={"Continue"}
                  padding={false}
                />
              </div>
            </div>
          </div>
          <div className="2xl:w-[507px] xl:w-[407px] w-full">
            <TalentProfileCard
              talentInfo={talentInfo}
              classes="w-full 2xl:h-[498px] h-[490px] pt-[38px] md:pb-[38px] pb-[20px] 2xl:mt-[-12px] mt-[0px]"
            />
          </div>
        </div>
      </div>

      {/* ---------------------------- Modal area ------------------------------------ */}

      {/* start the escrow modal  */}
      {isOpenEscrowModal && setIsOpenEscrowModal && (
        <GlobalModal
          isOpen={isOpenEscrowModal}
          onClose={() => setIsOpenEscrowModal(false)}
          classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[517px] h-[462px] md:px-[38px]  px-[24px] xl:py-[28px] py-[24px]"
        >
          <EscrowModalContent
            amount={500}
            onConfirm={() => handleSubmitEscrow()}
            onCancel={() => handleCancelOffer()}
          />
        </GlobalModal>
      )}

      {/* success modal  */}
      {isOpenSuccessModal && setIsOpenSuccessModal && (
        <GlobalModal
          isOpen={isOpenSuccessModal}
          onClose={() => setIsOpenSuccessModal(false)}
          classes="xl:w-[637px] md:w-[552px] w-[335px] xl:h-[390px] md:h-[359px] h-[342px] xl:py-[58.62px] md:py-[46.63px] py-[60.63px] relative"
        >
          <div className="flex flex-col justify-center items-center text-center">
            <div className="w-[75.75px] h-[75.75px] flex justify-center items-center bg-[#CBEC5E] rounded-[50%] md:mb-[27.62px] mb-[16.62px]">
              <Image
                src={"/images/icon-images/check.png"}
                width={55}
                height={55}
                className="w-[55px] h-[55px]"
                alt=""
              />
            </div>

            <h1 className="xl:text-[26px] text-[20px] font-medium text-[#000] xl:mb-[9px] mb-[18px]">
              Your job offer has been successfully sent.
            </h1>
            <p className="text-[#545454] xl:text-[16px] text-[14px] mb-[34px]">
              Wait the talent response for your job offer.
            </p>
            <div className="absolute xl:bottom-[35px] md:bottom-[34px] bottom-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button
                  onClick={() => handleClick("Back to Home")}
                  type={"nonBorder"}
                  action={"Back to Home"}
                />
              </div>
              <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
                <Button
                  onClick={() => setIsOpenSuccessModal(false)}
                  type={"active"}
                  action={"Find new talents"}
                />
              </div>
            </div>
          </div>
        </GlobalModal>
      )}

      {/* cancel modal  */}
      {isOpenCancelOfferModal && setIsOpenCancelOfferModal && (
        <GlobalModal
          isOpen={isOpenCancelOfferModal}
          onClose={() => setIsOpenCancelOfferModal(false)}
          classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[477px] md:h-[524px] h-[628px]  px-[24px] xl:py-[24px] md:py-[25px] py-[21px] "
        >
          <CancelOfferModal
            setIsOpenCancelOfferModal={setIsOpenCancelOfferModal}
          />
        </GlobalModal>
      )}
    </>
  );
};

export default SendAnOffer;
