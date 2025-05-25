'use client';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import { useJobCreate } from '@/contextProviders/JobCreateContext';
import { useClientJobs } from '@/contextProviders/ClientJobsContext';
import { TermCard } from '@/components/Client/jobCreate/TermCard';
import DropdownInput from '@/components/Client/jobCreate/DropDownInput';
import ArrowDropDown from '@/shared/widgets/ArrowDropDown/ArrowDropDown';
import StepDropDown from '@/components/Client/jobCreate/StepDropDown';
import Dropdown from '@/shared/ui-kit/Dropdown';

const headingItems = [
  'Define your project details, budget, and expectations.',
  'Attract top talent by posting a fresh listing.',
  'Set up requirements to match the right talents.',
];

const shortCardData = [
  { title: 'One-time job' },
  { title: 'Less than 1 month' },
];
const longCardData = [{ title: '1 to 3 months' }, { title: '3 to 6 months' }];

interface GetStartedProps {
  handleChangeStep: (step: number) => void;
}

const GetStarted: React.FC<GetStartedProps> = ({
  handleChangeStep,
}) => {
  const [firstLiOpened, setFirstLiOpened] = useState(true);
  const [secondLiOpened, setSecondLiOpened] = useState(false);
  const { jobDetails, setJobDetails, clearJobDetails } = useJobCreate();
  const { jobsData } = useClientJobs();
  const [selectedTerm, setSelectedTerm] = useState<string>('');
  const [selectedOption, setSelectedOption] = useState<number>(0);
  useEffect(() => {
    if (jobDetails?.workDuration) {
      const term =
        jobDetails.workDuration === 'one-time' || jobDetails.workDuration === 'less-than-1-month'
          ? 'short'
          : 'long';
      const option =
        jobDetails.workDuration === 'one-time' || jobDetails.workDuration === '1-to-3-months'
          ? 0
          : 1;

      setSelectedTerm(term);
      setSelectedOption(option);
    } else {
      setSelectedTerm('');
      setSelectedOption(0);
    }
  }, [jobDetails?.workDuration]);

  const handleNextStep = () => {
    let workDuration = '';
    switch (selectedTerm) {
      case 'short':
        if (selectedOption == 0) {
          workDuration = 'one-time';
        } else {
          workDuration = 'less-than-1-month';
        }
        break;
      case 'long':
        if (selectedOption == 0) {
          workDuration = '1-to-3-months';
        } else {
          workDuration = '3-to-6-months';
        }
        break;
      default:
        workDuration = 'one-time';
        break;
    }
    setJobDetails({ ...jobDetails, workDuration: workDuration });
    handleChangeStep(1);
  };
  useEffect(() => {
    if (jobDetails) {
      setSelectedTerm(
        jobDetails.workDuration &&
        (jobDetails.workDuration == 'one-time' ||
          jobDetails.workDuration == 'less-than-1-month'
          ? 'short'
          : 'long')
      );
      setSelectedOption(
        jobDetails.workDuration == 'one-time' ||
          jobDetails.workDuration == '1-to-3-months'
          ? 0
          : 1
      );
    }
  }, [jobDetails]);
  return (
    <main className="justify-center md:justify-between sm:gap-[20px_3px] px-[20px] flex-wrap lg:flex-nowrap pt-[94px] sm:px-[40px] xl:px-0 lg:max-w-[1200px] 2xl:max-w-[1430px] mx-auto lg:pt-[201px] 2xl:pt-[229px] sm:pt-[133px] flex lg:px-[110px 2xl:px-none]">
      <div className="sm:min-w-[328px] sm:max-w-[328px] xl:min-w-[514px] w-full sm:w-auto ">
        <h1 className="max-w-[220px] sm:max-w-none text-[20px] sm:text-[30px] lg:text-[40px] text-[#000] font-medium">
          How can we help you get started?
        </h1>
        <p className="max-w-[220px] mt-[25px] text-[16px] sm:max-w-[235px] lg:max-w-none lg:mt-[35px] 2xl:mt-[29px] sm:mt-[40px] sm:text-[18px] lg:text-[20px] text-[#000] font-medium leading-normal sm:leading-[30px] lg:leading-normal">
          Get Started with Your Job Post Effortlessly
        </p>
        <ul className="max-w-[320px] mt-[13px] sm:mt-[42px] sm:max-w-[268px] lg:max-w-none lg:mt-[20px] 2xl:leading-[30px] 2xl:mt-[26px] lg:leading-[24px]">
          {headingItems.map((item, i) => {
            return (
              <li
                className="text-[14px] text-[#545454] sm:text-[14px] lg:text-[16px] pl-[10px] flex gap-[7px] sm:gap-[10px]"
                key={i}
              >
                <div className="w-[4px] h-[4px] bg-[#545454] rounded-full mt-[11px]"></div>
                {item}
              </li>
            );
          })}
        </ul>
      </div>
      <div className="min-h-[347px] 2xl:w-[644px] lg:w-[543px] sm:min-h-[460px] lg:min-h-[553px] 2xl:min-h-[590px] w-full sm:w-[335px] max-w-[335px] sm:max-w-none my-[42px] mt-[38px] sm:my-[82px] sm:mt-0 flex flex-col gap-[20px_0]">
        <ul className="flex flex-col ml-[15px] 2xl:ml-[-35px]  lg:w-[538px]  -mt-[10px] md:gap-0 w-[305px] sm:w-[303px]  2xl:w-[644px]  pt-[10px] sm:pt-[0px] lg:pt-[15px] 2xl:pt-[12px]  sm:mt-[-3px] sm:ml-[-7px] sm:gap-[14px] lg:gap-[22px]">
          <li
            className="w-full border-[#9B9B9B] 2xl:pb-[13px] border-b cursor-pointer">
            <ArrowDropDown
              open={firstLiOpened}
              setOpen={() => setFirstLiOpened(!firstLiOpened)}
              title={"I want to create a new job post"}
              insideElement={
                <div
                  className={
                    "flex flex-wrap justify-center mt-[35px] gap-[12px] lg:mt-[25px] lg:ml-[0px] lg:gap-[30px] 2xl:gap-[82px] 2xl:ml-[-5px] 2xl:mt-[23px]"
                  }
                >
                  <div onClick={() => setSelectedTerm('short')}>
                    <TermCard
                      iconSrc="/images/all-images/timerIcon.png"
                      cardData={shortCardData}
                      title="Short Term Work"
                      selected={selectedTerm === 'short'}
                      OnSelectingOption={(id: number) => setSelectedOption(id)}
                      selectedOption={selectedOption}
                    />
                  </div>
                  <div onClick={() => setSelectedTerm('long')}>
                    <TermCard
                      iconSrc="/images/all-images/calendarIcon.png"
                      cardData={longCardData}
                      title="Long Term Work"
                      selected={selectedTerm === 'long'}
                      selectedOption={selectedOption}
                      OnSelectingOption={(id: number) => setSelectedOption(id)}
                    />
                  </div>
                </div>
              }
            />

          </li>
          <li className={`w-full border-[#9B9B9B] 2xl:mt-[-1px] border-b cursor-pointer md:mt-[-9px] md:pb-0 sm:pb-[10px] lg:pb-[8px] ${jobsData && jobsData.length <= 0 && "grayscale"}`}>
            <ArrowDropDown
              open={secondLiOpened}
              setOpen={() => jobsData && jobsData.length > 0 && setSecondLiOpened(!secondLiOpened)}
              title={"I want to reuse a previous job post"}
              insideElement={
                <div
                  className={
                    " mt-[10px] lg:pl-[16px] lg:pr-[32px] 2xl:px-[24px] pr-[7px] sm:pr-[15px] sm:mb-[2px] lg:mb-[14px] 2xl:mb-[10px] block"
                  }
                >
                  <Dropdown
                    list={(jobsData && [{ title: "New Job", id: -1 }, ...jobsData.map((item) => { return { title: item.title, id: item.id } })]) || []}
                    setSelectedItem={(title) => {
                      if (title === "New Job") {
                        clearJobDetails();
                      } else {
                        //@ts-ignore
                        setJobDetails(jobsData?.find((elm) => elm.title === title));
                      }
                    }}
                    selectedItem={jobDetails.title}
                    placeholder={"Select a job"}
                    type='select'
                  />
                </div>
              }
            />

          </li>
        </ul>
        <div className="flex 2xl:gap-[20px] gap-[10px] lg:pl-[32px] justify-end mt-auto">
          <Link href={'/client'}>
            <button
              className="w-[150px] h-[40px] lg:w-[190px] lg:h-[40px] 2xl:w-[200px] 2xl:h-[48px] rounded-[49px] border border-[#CCCCCC] text-[16px] text-[#18470D] font-medium cursor-pointer"
            >
              Cancel
            </button>
          </Link>
          <button
            onClick={() => selectedTerm && handleNextStep()}
            className={`w-[139px] lg:w-[156px] h-[40px] 2xl:h-[48px] 2xl:w-[200px] rounded-[49px] text-[16px] text-[#18470D] font-medium bg-[#CBEC5E] cursor-pointer ${selectedTerm
              ? " bg-[#CBEC5E] text-[#18470D] cursor-pointer  hover:bg-[#ACD624] "
              : " bg-[#EAEAEA] text-[#B8B8B8] "}`}
          >
            Continue
          </button>
        </div>
      </div>
    </main>
  );
};
export default GetStarted;