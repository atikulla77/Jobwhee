"use client";
import EndContractExperience from "@/components/end-contract/EndContractExperience";
import Image from "next/image";
import { useEffect, useState } from "react";
import Modal from "../../../../../shared/ui-kit/Modal";
import { Input } from "@/shared/ui-kit/Input";
import { TextArea } from "@/shared/ui-kit/TextArea";
import Button from "@/shared/ui-kit/Button";
import CustomDatePicker from "@/shared/ui-kit/CustomDatePicker";

const page = () => {
  const topTalentProtfolioCard = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const handleButton = (action: string) => {};

  return (
    <div className="2xl:w-[1430px] xl:w-[1200px] md:w-[780px] w-[335px] flex flex-wrap justify-between mx-auto pt-[52px] pb-[50px]">
      {/* Modal */}
      <div className="">
        <Modal
          children={<Submitthepayment />}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={"678px"}
          height={"h-[687px]"}
        />
        {/* <Modal
          children={<AddNewMilestone />}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={"860px"}
          height={"xl:h-[558px] md:h-[517px] h-[524px]"}
        />
        <Modal
          children={<ManageMilestones />}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={"860px"}
          height={"xl:h-[768px] md:h-[590px] h-[665px] "}
        />
        <Modal
          children={<ConfirmationEndOfContract />}
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          width={"860px"}
          height={"xl:h-[558px] md:h-[450px] h-[462px]"}
        /> */}
      </div>

      <EndContractExperience />

      <div className="2xl:w-[533px] xl:w-[414px] w-full md:h-[534px] h-[458px] rounded-[16px] shadow-[0px_0px_15px_0px_#00000017] overflow-hidden relative 2xl:mt-0 xl:mt-[57px] mt-[20px]">
        <div
          onClick={() => setIsModalOpen(true)}
          className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]"
        >
          <Button
            handleButton={handleButton}
            type={"active"}
            action={"Show Modal"}
          />
        </div>
        <div className="w-full md:h-[528px] h-[454px] text-center bg-white rounded-[16px] relative z-[1] xl:pt-[38px] md:pt-[58px] pt-[20px] 2xl:pb-[74px] md:pb-[30px] pb-[20px] md:mb-0 mb-[6px]">
          <div
            className={`w-[123px] h-[123px] mx-auto relative ${
              topTalentProtfolioCard
                ? "2xl:mb-[45px] md:mb-[28px] mb-[40px]"
                : "2xl:mb-[42px] mb-[20px]"
            } `}
          >
            <Image
              src={"/images/topTalents/userPhoto.png"}
              width={123}
              height={123}
              alt=""
              className="rounded-[50%]"
            />
            <div className="w-[26.65px] h-[26.65px] absolute left-[2px] top-[2px] flex justify-center items-center bg-[#fff] rounded-[50%]">
              <div className="w-[21.8px] h-[21.8px] bg-[#00FF4D] rounded-[50%]"></div>
            </div>

            <div
              className={`${
                topTalentProtfolioCard ? "flex" : "hidden"
              } absolute left-0 bottom-[-25px] w-full justify-center`}
            >
              <Image
                src={"/images/icon-images/topTalentBatch.png"}
                width={36.68}
                height={46.01}
                alt=""
                className=""
              />
            </div>
          </div>
          <h1 className="text-[20px] font-[600] mb-[10px]">Maria T.</h1>
          <div className="flex justify-center items-center gap-[8px] mb-[16px]">
            <Image
              src={"/images/icon-images/map-pin.png"}
              width={20}
              height={20}
              alt=""
              className="rounded-[50%]"
            />
            <h2 className="text-[18px] text-[#64748B] font-[500]">
              Athene, Greece
            </h2>
          </div>
          <div className="w-[98px] h-[36px] flex items-center justify-center border-[1px] border-[#AEB3BC] rounded-[40px] mx-auto gap-[7px] md:mb-[22px] mb-[42px]">
            <Image
              src={"/images/icon-images/starIcon.png"}
              width={23}
              height={23}
              alt=""
              className="rounded-[50%]"
            />
            <p className="text-[18px] font-[500]">4.9</p>
          </div>
          <div className="flex justify-center items-center 2xl:gap-[28px] xl:gap-[12px] md:gap-[20px] gap-[12px]">
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
                $3K+
              </h2>
              <p className="text-[14px] font-[500]">Total Earning</p>
            </div>
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
                12
              </h2>
              <p className="text-[14px] font-[500]">Total Jobs</p>
            </div>
            <div className="md:w-[110px] w-[90px] md:h-[110px] h-[90px] flex flex-col justify-center items-center border-[1px] border-[#AEB3BC] rounded-[50%] leading-[-3px] px-[10px]">
              <h2 className="md:text-[18px] text-[16px] text-[#18470D] font-[500] mb-[-2px]">
                155
              </h2>
              <p className="text-[14px] font-[500]">Total Hours</p>
            </div>
          </div>
        </div>

        <div className="absolute left-0 bottom-0 w-full h-[20px] bg-[#CBEC5E] z-0"></div>
      </div>
    </div>
  );
};

export default page;

const Submitthepayment = () => {
  const handleButton = (action: string) => {
    alert(action);
  };
  return (
    <div className="xl:w-[678px] md:w-[556px] w-[335px] h-[687px] md:px-[38px] px-[24px] xl:py-[28px] py-[24px] bg-white rounded-[30px] relative">
      <div className="absolute xl:right-[38px] right-[24px] xl:top-[38px] top-[27px]">
        <Image
          src={"/images/icon-images/xicon.png"}
          width={24}
          height={24}
          alt=""
          className="rounded-[50%]"
        />
      </div>
      <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] mb-[30px]">
        Submit the payment
      </h1>

      <p className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
        Name of the milestone
      </p>

      <div className="h-[42px] bg-[#EAEAEA] rounded-[12px] flex items-center p-[8px]">
        <p className="text-[#8B939F]">Week 2</p>
      </div>

      <div className="w-full flex md:flex-row flex-col justify-between xl:gap-[46px] gap-[12px] xl:mt-[20px] mt-[23px] xl:mb-[20px] mb-[26px]">
        <div className="w-[100%] space-y-[8px]">
          <h2 className="xl:text-[18px] text-[16px] text-[#545454]">Amount</h2>
          <Input
            width="100%"
            height="42px"
            type="text"
            placeholder=""
            isIcon={false}
            value="500.0"
          />
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
            value="22.03.2025"
            disabled={true}
          />
        </div>
      </div>

      <h2 className="xl:text-[18px] text-[16px] text-[#545454] mb-[8px]">
        Note (Optional)
      </h2>
      <TextArea
        placeholder="Write additional note"
        width={"100%"}
        height={"146px"}
        responsiveWidthHeight="w-[100%] h-[146px]"
      />

      <div className="absolute xl:bottom-[36px] md:bottom-[65px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end gap-[8px] md:px-0 px-[24px]">
        <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            action={"Reject"}
            type={"nonBorder"}
          />
        </div>
        <div className="xl:w-[200px] md:w-[174px] w-[100%] xl:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            action={"Release payment"}
            type={"active"}
          />
        </div>
      </div>
    </div>
  );
};

const AddNewMilestone = () => {
  const handleButton = (action: string) => {
    alert(action);
  };
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[517px] h-[524px] md:px-[38px] px-[24px] 2xl:py-[24px] md:py-[38px] py-[24px] bg-white rounded-[30px] relative">
      <div className="absolute md:right-[38px] right-[24px] 2xl:top-[24px] xl:top-[49px] md:top-[41px] top-[27px]">
        <Image
          src={"/images/icon-images/xicon.png"}
          width={24}
          height={24}
          alt=""
          className="rounded-[50%]"
        />
      </div>
      <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] 2xl:mb-[53px] xl:mb-[37px] md:mb-[40px] mb-[30px]">
        Add new milestone
      </h1>

      <div className="w-full xl:mb-[29px] md:mb-[16px] mb-[20px]">
        <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
          Name of Milestone 3*
        </p>
        <Input
          width="100%"
          height="42px"
          type="text"
          isIcon={false}
          value=""
          placeholder="Milestone name"
        />
      </div>

      <div className="w-full xl:mb-[29px] md:mb-[16px] mb-[20px]">
        <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
          Amount*
        </p>
        <Input
          width="100%"
          height="42px"
          type="text"
          isIcon={false}
          value="0.0"
          icon="Amount"
          placeholder=""
        />
      </div>
      <div className="w-full">
        <p className="md:text-[18px] text-[16px] text-[#545454] mb-[8px]">
          Due Date
        </p>
        <div className="w-[100%] h-[42px]">
          <CustomDatePicker
            onChangeDate={setDate}
            isIcon={true}
            width="100%"
            height="100%"
          />
        </div>
      </div>
      <div className="absolute xl:bottom-[36px] md:bottom-[38px] bottom-[24px] md:right-[38px] right-0 w-full flex md:flex-row flex-col-reverse justify-end xl:gap-[8px] gap-[16px] md:px-0 px-[24px]">
        <div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            action={"Cancel"}
            type={"nonBorder"}
          />
        </div>
        <div className="xl:w-[200px] md:w-[156px] w-[100%] xl:h-[48px] h-[40px]">
          <Button handleButton={handleButton} action={"Save"} type={""} />
        </div>
      </div>
    </div>
  );
};

const ManageMilestones = () => {
  const handleButton = (action: string) => {
    alert(action);
  };
  const [date, setDate] = useState<Date | null>(null);

  return (
    <div className="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[768px] md:h-[590px] h-[665px] xl:px-[28px] px-[14px] 2xl:py-[38px] xl:py-[38px] py-[24px] bg-white rounded-[30px] relative">
      <div className="absolute xl:right-[36px] md:right-[38px] right-[24px] 2xl:top-[38px] xl:top-[49px] top-[27px]">
        <Image
          src={"/images/icon-images/xicon.png"}
          width={24}
          height={24}
          alt=""
          className="rounded-[50%]"
        />
      </div>
      <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] px-[10px] xl:mb-[21px] md:mb-[27px] mb-[19px]">
        Manage Milestones
      </h1>

      <div className="xl:h-[527px] md:h-[392px] h-[440px] px-[10px] pt-[10px] xl:mr-[5px] md:mr-[20px] mr-[10px] relative overflow-y-auto">
        <div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
          <div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
            <h3 className="xl:text-[16px] text-[14px] text-[#000000]">1</h3>
            <h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
              Week 1
            </h1>
          </div>

          <div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
            <h2 className="xl:text-[18px] text-[13px] text-[#414750]">
              Change due date
            </h2>
            <div className="w-[100%] h-[42px]">
              <CustomDatePicker
                onChangeDate={setDate}
                isIcon={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
          <div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
            <h3 className="xl:text-[16px] text-[14px] text-[#000000]">1</h3>
            <h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
              Week 1
            </h1>
          </div>

          <div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
            <h2 className="xl:text-[18px] text-[13px] text-[#414750]">
              Change due date
            </h2>
            <div className="w-[100%] h-[42px]">
              <CustomDatePicker
                onChangeDate={setDate}
                isIcon={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
          <div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
            <h3 className="xl:text-[16px] text-[14px] text-[#000000]">1</h3>
            <h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
              Week 1
            </h1>
          </div>

          <div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
            <h2 className="xl:text-[18px] text-[13px] text-[#414750]">
              Change due date
            </h2>
            <div className="w-[100%] h-[42px]">
              <CustomDatePicker
                onChangeDate={setDate}
                isIcon={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
        <div className="xl:w-[762px] md:w-[470px] w-[263px] xl:h-[137px] md:h-[110px] h-[132px] min-h-[110px] xl:pl-[38px] md:pl-[24px] pl-[14px] md:pr-[25px] pr-[14px] md:py-[18px] py-[14px] flex md:flex-row flex-col md:justify-between justify-start items-center border-[1px] border-[#B9B9B9] rounded-[12px] shadow-[0px_5px_15px_0px_#b9b9b959] mb-[10px]">
          <div className="md:w-fit w-full flex flex-row justify-start items-center font-[500] xl:gap-[31px] gap-[16px]">
            <h3 className="xl:text-[16px] text-[14px] text-[#000000]">1</h3>
            <h1 className="xl:text-[18px] text-[16px] text-[#18470D]">
              Week 1
            </h1>
          </div>

          <div className="xl:w-[350px] md:w-[298px] w-[238px] h-full space-y-[8px] md:mt-0 mt-[10px]">
            <h2 className="xl:text-[18px] text-[13px] text-[#414750]">
              Change due date
            </h2>
            <div className="w-[100%] h-[42px]">
              <CustomDatePicker
                onChangeDate={setDate}
                isIcon={true}
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="xl:w-[774px] md:w-[508px] w-[287px] h-[1px] md:ml-[8px] ml-[10px] bg-[#18470D]"></div>

      <div className="absolute xl:bottom-[49px] bottom-[24px] xl:right-[38px] md:right-[24px] right-[0] w-full flex md:flex-row flex-col-reverse justify-end md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
        <div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            action={"Cancel"}
            type={"nonBorder"}
          />
        </div>
        <div className="xl:w-[200px] md:w-[150px] w-[100%] xl:h-[48px] h-[40px]">
          <Button handleButton={handleButton} action={"Save"} type={"active"} />
        </div>
      </div>
    </div>
  );
};

const ConfirmationEndOfContract = () => {
  const handleButton = (action: string) => {
    alert(action);
  };

  return (
    <div className="xl:w-[860px] md:w-[556px] w-[335px] xl:h-[558px] md:h-[450px] h-[462px] md:py-[38px] py-[24px] px-[24px] bg-white rounded-[30px] relative text-center">
      <div className="absolute md:right-[38px] right-[24px] 2xl:top-[24px] xl:top-[49px]  top-[27px]">
        <Image
          src={"/images/icon-images/xicon.png"}
          width={24}
          height={24}
          alt=""
          className="rounded-[50%]"
        />
      </div>

      <div className="w-full flex justify-center mt-[27px] md:mb-[29px] mb-[18px]">
        <Image
          src={"/images/confirmationendofcontract.png"}
          width={257}
          height={227}
          alt=""
          className="xl:w-[257px] md:w-[176px] w-[107px] xl:h-[227px]  md:h-[154px] h-[94px]"
        />
      </div>
      <h1 className="xl:text-[30px] text-[20px] text-[#18470D] font-[500] pb-[12px]">
        Are you sure you want to end this contract?
      </h1>
      <p className="xl:text-[20px] text-[14px] text-[#545454]">
        Provide feedback and settle payments in the next steps.
      </p>
      <div className="absolute bottom-[35px] right-[0] w-full flex md:flex-row flex-col-reverse justify-center md:gap-[8px] gap-[12px] md:px-0 px-[24px]">
        <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            type={"nonBorder"}
            action={"Cancel"}
          />
        </div>
        <div className="md:w-[200px] w-[100%] md:h-[48px] h-[40px]">
          <Button
            handleButton={handleButton}
            type={"active"}
            action={"End contract"}
          />
        </div>
      </div>
    </div>
  );
};
