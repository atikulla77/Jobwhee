'use client';

import { useSearchParams, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import FirstStep from './steps/first-step/page';
import FourthStep from './steps/fourth-step/page';
import FifthStep from './steps/fifth-step/page';
import GetStarted from './steps/get-started/page';
import JobDetails from './steps/job-details/page';
import ThirdStep from './steps/third-step/page';
import { JobCreateProvider } from '@/contextProviders/JobCreateContext';
import { ClientJobsProvider } from '@/contextProviders/ClientJobsContext';
import SecondStep from './steps/second-step/page';

const data = {
  stepsData: [
    { stepCount: 1, active: false, checked: false },
    { stepCount: 2, active: false, checked: false },
    { stepCount: 3, active: false, checked: false },
    { stepCount: 4, active: false, checked: false },
    { stepCount: 5, active: false, checked: false },
  ],
};
export default function CreateJob() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const [currentStepsData, setCurrentStepsData] = useState(data.stepsData);

  const stepParam = searchParams.get('step');
  const currentStep = stepParam ? parseInt(stepParam, 10) : 0;
  const jobIdFromUrl = searchParams.get("id");
  const handleChangeStep = (step: number) => {
    router.push(`/client/create-job?step=${step}${jobIdFromUrl ? `&id=${jobIdFromUrl}` : ''}`);
    setCurrentStepsData((prevData) =>
      prevData.map((prevStepData) => ({
        ...prevStepData,
        active: prevStepData.stepCount === step,
        checked: prevStepData.stepCount < step,
      }))
    );
  };

  return (
    <main>
      <JobCreateProvider>
        <ClientJobsProvider>
          {currentStep === 1 ? (
            <FirstStep
              currentStepsData={currentStepsData}
              handleChangeStep={handleChangeStep}
            />
          ) : currentStep === 2 ? (
            <SecondStep
              currentStepsData={currentStepsData}
              handleChangeStep={handleChangeStep}
            />
          ) : currentStep === 3 ? (
            <ThirdStep
              currentStepsData={currentStepsData}
              handleChangeStep={handleChangeStep}
            />
          ) : currentStep === 4 ? (
            <FourthStep
              currentStepsData={currentStepsData}
              handleChangeStep={handleChangeStep}
            />
          ) : currentStep === 5 ? (
            <FifthStep
              currentStepsData={currentStepsData}
              handleChangeStep={handleChangeStep}
            />
          ) : currentStep === 6 ? (
            <JobDetails
              handleChangeStep={handleChangeStep}
            />
          ) : (
            <GetStarted
              handleChangeStep={handleChangeStep}
            />
          )}
        </ClientJobsProvider>
      </JobCreateProvider>
    </main>
  );
}
