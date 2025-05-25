import { Input } from "@/shared/ui-kit/Input";
import { TextArea } from "@/shared/ui-kit/TextArea";
import { GlobalModal } from "@/shared/ui-kit/GlobalModal";
import { useState } from "react";
import Image from "next/image";
import Button from "../contracts/Button";
import EscrowModalContent from "@/shared/widgets/EscrowModalContent/EscrowModalContent";

interface MilestoneItemCardProps {
  item: {
    id: string;
    title: string;
    amount: number;
    status: "closed" | "ongoing" | "not_started";
    dueDate?: string;
  };
  index: number;
  hasOngoing: boolean;
  contract: any;
  setShowContractMetaData: any;
}

const MilestoneItemCard = ({
  contract,
  setShowContractMetaData,
  item,
  index,
  hasOngoing,
}: MilestoneItemCardProps) => {
  const [submitTheMilestonePayment, setSubmitTheMilestonePayment] = useState({
    amount: item?.amount.toString() || "",
    note: "",
  });
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [showStartTheMilestoneModal, setShowStartTheMilestoneModal] =
    useState(false);

  const [paymentErrors, setPaymentErrors] = useState({
    amount: "",
  });
  const statusConfig = {
    closed: {
      bgColor: "bg-[#F5F5F5]",
      statusBgColor: "bg-[#e2e2e27a]",
      statusTextColor: "text-[#5B5B5B]",
      arrowBgColor: "bg-[#F5F5F5]",
      textOpacity: "opacity-50",
      dateTextColor: "text-[#00000078]",
      statusLabel: item.status,
      showButton: false,
      buttonAction: "",
    },
    ongoing: {
      bgColor: "bg-[#CBEC5E]",
      statusBgColor: "bg-[#EEF6DB]",
      statusTextColor: "text-[#5A7D06]",
      arrowBgColor: "bg-[#CBEC5E]",
      textOpacity: "",
      dateTextColor: "text-[#000000]",
      statusLabel: item.status,
      showButton: item.status === "ongoing",
      buttonAction: "Submit the payment",
    },
    not_started: {
      bgColor: "bg-[#F0F1F4]",
      statusBgColor: "bg-[#F6EED9]",
      statusTextColor: "text-[#CAAC00]",
      arrowBgColor: "bg-[#F0F1F4]",
      textOpacity: "",
      dateTextColor: "text-[#000000]",
      statusLabel: "Not Started",
      showButton: !hasOngoing && item.status === "not_started",
      buttonAction: "Start the Milestone",
    },
  };

  const config = statusConfig[item.status];
  const isOngoing = item.status === "ongoing";

  // Determine alignment based on index (even: left, odd: right)
  const isLeftAligned = index % 2 === 0;

  // Parse due date
  const [month, day, year] = item.dueDate?.split(" ") || [
    "March",
    "01",
    "2025",
  ];

  // Handle Release button
  const handleReleasePayment = () => {
    if (item?.status !== "ongoing") return;

    const minPayment = item.amount;
    const submittedAmount = parseFloat(submitTheMilestonePayment.amount);
    let errors = { amount: "" };

    if (isNaN(submittedAmount)) {
      errors.amount = "Please enter a valid payment amount.";
    } else if (submittedAmount < minPayment) {
      errors.amount = `Minimum payment amount is €${minPayment}.`;
    }

    setPaymentErrors(errors);

    // If there are errors, do not proceed
    if (errors.amount) return;

    // Logic from handleClosed integrated here
    const updatedMilestones = contract.milestones.map((contr: any) =>
      contr.id === item.id
        ? { ...contr, status: "closed", amount: submittedAmount }
        : contr
    );

    const paidMilestonesCount = updatedMilestones.filter(
      (milestone: any) => milestone.status === "closed"
    ).length;
    const remainingMilestonesCount = updatedMilestones.filter(
      (milestone: any) => milestone.status !== "closed"
    ).length;

    const totalSpend = updatedMilestones
      .filter((milestone: any) => milestone.status === "closed")
      .reduce((acc: number, milestone: any) => acc + milestone.amount, 0);

    const inEscrow = updatedMilestones
      .filter((milestone: any) => milestone.status === "ongoing")
      .reduce((acc: number, milestone: any) => acc + milestone.amount, 0);

    setShowContractMetaData({
      ...contract,
      milestones: updatedMilestones,
      milestonesPaid: paidMilestonesCount,
      milestonesRemaining: remainingMilestonesCount,
      totalSpend,
      inEscrow,
    });

    setShowPaymentModal?.(false);
  };

  const handleStartMilestone = (id: string) => {
    const updatedMilestones = contract.milestones.map((contr: any) =>
      contr.id === id ? { ...contr, status: "ongoing" } : contr
    );
    const remainingMilestonesCount = updatedMilestones.filter(
      (milestone: any) => milestone.status === "not_started"
    ).length;
    const inEscrow = updatedMilestones
      .filter((milestone: any) => milestone.status === "ongoing")
      .reduce((acc: number, milestone: any) => acc + milestone.amount, 0);
    setShowContractMetaData({
      ...contract,
      milestones: updatedMilestones,
      inEscrow,
      milestonesRemaining: remainingMilestonesCount,
    });
    setShowStartTheMilestoneModal(false);
  };
  return (
    <div>
      <div
        className={`w-full flex ${
          isLeftAligned ? "justify-start" : "md:justify-end justify-start"
        } z-50`}
      >
        <div
          className={`w-[297px] h-fit pb-[80px] flex ${
            isLeftAligned ? "justify-start" : "md:justify-end justify-start"
          } relative`}
        >
          {/* Middle Line */}
          <div
            className={`absolute ${
              isLeftAligned ? "right-0" : "md:left-0 right-0"
            } top-0 h-full w-[1px] bg-[#c6c2c2a6]`}
          ></div>
          <div
            className={`w-[290px] h-[128px] flex ${
              isLeftAligned ? "justify-start" : "md:justify-end justify-start"
            } items-center relative`}
          >
            {/* Circle */}
            <div
              className={`absolute ${
                isLeftAligned
                  ? "right-[-14px]"
                  : "md:left-[-14px] right-[-14px]"
              } top-0 h-full z-[1] flex items-center`}
            >
              <div className="w-[14px] h-[14px] rounded-[50%] bg-[#CBEC5E]"></div>
            </div>
            {/* Arrow */}
            <div
              className={`absolute ${
                isLeftAligned ? "right-0" : "md:left-0 right-0"
              } top-0 h-full z-[0] flex items-center`}
            >
              <div
                className={`w-[27px] h-[22px] ${
                  isLeftAligned
                    ? "rotate-[90deg]"
                    : "md:rotate-[270deg] rotate-[90deg]"
                } ${config.arrowBgColor}`}
                style={{
                  clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
                }}
              ></div>
            </div>
            {/* Content */}
            <div
              className={`w-[266px] h-full pl-[12px] pr-[17px] flex justify-between items-center ${config.bgColor} rounded-[16px] relative`}
            >
              <div className={`space-y-[8px] ${config.textOpacity}`}>
                <h4 className="text-[16px] font-medium text-[#18470D]">
                  {item.title}
                </h4>
                <p className="text-[16px] font-[400] text-[#000000]">
                  € {item.amount}
                </p>
                <p
                  className={`text-[15px] font-[500] ${config.statusTextColor} ${config.statusBgColor} rounded-[30px] px-[17px] py-[5px] capitalize`}
                >
                  {config.statusLabel}
                </p>
              </div>
              <div className="absolute right-[73px] top-0 h-[100%] w-[1px] flex items-center">
                <div className="w-full h-[80%] bg-white"></div>
              </div>
              <div
                className={`font-[500] ${config.dateTextColor} flex flex-col items-center leading-[30px]`}
              >
                <p className="text-[14px]">{month}</p>
                <h1 className="text-[35px] font-[400]">{day}</h1>
                <p className="text-[14px]">{year}</p>
              </div>
            </div>
            {/* Button for Ongoing or Not Started */}
            {config.showButton && (
              <div className="absolute md:bottom-[-50px] bottom-[-45px] w-[266px] mx-auto h-[38px] z-10 text-[15px] font-[500] text-[#18470D] bg-[#CBEC5E] rounded-[30px]">
                <Button
                  onClick={() =>
                    isOngoing && setShowPaymentModal
                      ? setShowPaymentModal(true)
                      : setShowStartTheMilestoneModal(true)
                  }
                  type="active"
                  action={config.buttonAction}
                />
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Payment Modal for Ongoing */}
      {isOngoing && showPaymentModal && setShowPaymentModal && (
        <GlobalModal
          isOpen={showPaymentModal}
          onClose={() => setShowPaymentModal(false)}
          classes="xl:w-[678px] md:w-[556px] w-[335px] h-[687px] xl:p-10 p-5"
        >
          <>
            <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] mb-[30px]">
              Submit the payment
            </h1>
            <p className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
              Name of the milestone
            </p>
            <div className="h-[42px] bg-[#EAEAEA] rounded-[12px] flex items-center p-[8px]">
              <p className="text-[#8B939F]">{item.title}</p>
            </div>
            <div className="w-full flex md:flex-row flex-col justify-between xl:gap-[46px] md:gap-[12px] gap-[20px] mt-[20px] xl:mb-[20px] md:mb-[26px] mb-[24px]">
              <div className="w-[100%] space-y-[8px]">
                <h2 className="xl:text-[18px] text-[16px] text-[#545454]">
                  Amount
                </h2>
                <Input
                  onChange={(val: any) =>
                    setSubmitTheMilestonePayment((prevData) => ({
                      ...prevData,
                      amount: val,
                    }))
                  }
                  width="100%"
                  height="42px"
                  type="number"
                  value={submitTheMilestonePayment.amount}
                  placeholder={`Min amount is: ${item.amount.toString()}`}
                  isIcon={false}
                />
                {paymentErrors.amount && (
                  <p className="text-red-500 text-sm mt-1">
                    {paymentErrors.amount}
                  </p>
                )}
              </div>
              <div className="w-[100%] space-y-[8px]">
                <h2 className="xl:text-[18px] text-[16px] text-[#545454]">
                  Due date
                </h2>
                <Input
                  width="100%"
                  height="42px"
                  type="text"
                  isIcon={false}
                  placeholder=""
                  value={
                    item.dueDate
                      ? `${day}.${month.slice(0, 3)}.${year}`
                      : "22.03.2025"
                  }
                  disabled={true}
                />
              </div>
            </div>
            <h2 className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
              Note (Optional)
            </h2>
            <TextArea
              placeholder="Write additional note"
              width="100%"
              height="146px"
              responsiveWidthHeight="w-[100%] h-[146px]"
            />
            <div className="absolute xl:bottom-[36px] md:bottom-[65px] bottom-[24px] xl:right-[38px] md:right-[64px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
              <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
                <Button
                  onClick={() => setShowPaymentModal(false)}
                  action="Reject"
                  type="nonBorder"
                />
              </div>
              <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
                <Button
                  onClick={handleReleasePayment}
                  action="Release payment"
                  type="active"
                />
              </div>
            </div>
          </>
        </GlobalModal>
      )}

      {/* start the milestone modal  */}
      {showStartTheMilestoneModal && setShowStartTheMilestoneModal && (
        <GlobalModal
          isOpen={showStartTheMilestoneModal}
          onClose={() => setShowStartTheMilestoneModal(false)}
          classes="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[517px] h-[462px] md:px-[38px]  px-[24px] xl:py-[28px] py-[24px]"
        >
          <EscrowModalContent
            amount={item?.amount}
            onConfirm={() => handleStartMilestone(item?.id)}
            onCancel={() => setShowStartTheMilestoneModal(false)}
          />
        </GlobalModal>
      )}
    </div>
  );
};

export default MilestoneItemCard;
