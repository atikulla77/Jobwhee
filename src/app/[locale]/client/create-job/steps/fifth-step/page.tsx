'use client';
import { useRef, useState } from 'react';
import { FilePickerIcon } from '../../../../../../../public/icons/FilePickerIcon';
import StepsPanel from './StepsPanel';
import { useJobCreate } from '@/contextProviders/JobCreateContext';
import { getUploadedFileLink } from '@/lib/api/fileUploadApi/fileUploadApi';

const headingItems = [
  'Clearly outline what needs to be done.',
  'Highlight the must-have skills.',
  'Keep communication open and easy.',
  'Let them know how you like to work.',
];

interface Job {
  id: number;
  type: string;
  title: string;
  createdTime: string;
  invited: number;
  proposals: number;
  messaged: number;
  desc: string;
  category: string;
  speciality: string;
  budget: string;
  scope: string;
  skills: string[];
}

interface FifthStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{
    stepCount: number;
    active: boolean;
    checked: boolean;
  }>;
}

 const FifthStep: React.FC<FifthStepProps> = ({
  currentStepsData,
  handleChangeStep,
}) => {
  const { jobDetails, setJobDetails } = useJobCreate()
  const [desc, setDesc] = useState(jobDetails.description || '');
  const [errorMsg, setErrorMsg] = useState('');
  const [buttonValid, setButtonValid] = useState(desc ? true : false);
  const file = useRef<HTMLInputElement | null>(null);
  const [selectedFileName, setSelectedFileName] = useState<string | null>(null);
  const [isUploading, setIsUploading] = useState(false); // new
  const handleNextClick = async () => {
    if (!desc) {
      setErrorMsg('Description is too short. Add more details to clarify your job requirements.');
      return;
    }

    const selectedFile = file.current?.files?.[0];

    if (selectedFile) {
      setSelectedFileName(selectedFile.name);
      try {
        setIsUploading(true);
        const uploadResponse = await getUploadedFileLink(selectedFile);
        setJobDetails(prev => ({
          ...prev,
          description: desc,
          fileUrl: uploadResponse.data.fileUrl,
        }));
        handleChangeStep(6);
      } catch (error) {
        console.error('File upload failed:', error);
        setErrorMsg('Failed to upload file. Please try again.');
      } finally {
        setIsUploading(false);
      }
    }
    else {
      // No file attached, only description
      setJobDetails(prev => ({
        ...prev,
        description: desc,
        fileUrl: '', // or undefined
      }));

      handleChangeStep(6);
    }
  };

  const handleDescChange = (text: string) => {
    setDesc(text);
    if (text) {
      setErrorMsg('');
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  };

  return (
    <div className="2xl:max-w-[1650px] lg:max-w-[1200px] mx-auto mb-[40px]">
      <div className="px-[40px] lg:px-0 w-full mx-auto 2xl:px-[20px] lg:justify-center xl:justify-between lg:max-w-[1110px] 2xl:max-w-[1330px] lg:pt-[157px] sm:pt-[77px] pt-[112px] flex justify-center md:justify-between flex-wrap md:flex-nowrap gap-y-[25px] md:gap-y-[40px] sm:gap-y-[34px]">
        <div className="max-w-[380px] lg:max-w-[500px] w-full">
          <StepsPanel stepsData={currentStepsData} />
          <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] mt-[48px]">
            Let's Chat!
          </h1>
          <div className="sm:min-w-[328px] lg:max-w-[380px] xl:min-w-[514px] mt-[8px] sm:mt-[14px] lg:mt-[22px] 2xl:mt-[8px]">
            <p className="text-[14px] text-[#545454] sm:text-[16px] lg:text-[18px] flex items-center gap-[10px]">
              You’re almost there—time to connect! <br />
              Share a few key details to help find the perfect match:
            </p>
            <ul className="w-full 2xl:mt-[4px] lg:max-w-none leading-[22px] sm:leading-[26px]">
              {headingItems.map((item, i) => {
                return (
                  <li
                    className="text-[14px] text-[#545454] sm:text-[16px] lg:text-[18px] pl-[10px] flex items-center gap-[10px]"
                    key={i}
                  >
                    <div className="w-[4px] h-[4px] bg-[#545454] rounded-full"></div>
                    {item}
                  </li>
                );
              })}
            </ul>
            <p className="text-[14px] text-[#545454] sm:text-[16px] lg:text-[18px] flex items-center gap-[10px]">
              A great match starts with a great conversation!
            </p>
          </div>
        </div>
        <div className="max-w-[350px] lg:max-w-[450px] w-full">
          <div>
            <label
              className="text-[#000] sm:text-[16px] lg:text-[18px]"
              htmlFor="input"
            >
              Describe your job*
            </label>
            <div className="border border-[#AEB3BC] rounded-[12px] mt-[8px] p-[10px] min-h-[146px] flex flex-col">
              <textarea
                value={desc}
                onChange={(e) => handleDescChange(e.target.value)}
                name=""
                id="input"
                placeholder="Already have a description? Past here"
                className="text-[#000] text-[14px] placeholder:text-[14px] lg:text-[16px]  lg:placeholder:text-[16px] outline-none placeholder:text-[#8B939F] resize-y w-full min-h-[125px] max-h-[500px]"
              ></textarea>
            </div>
            {errorMsg && (
              <p className="mt-[8px] text-[#DD331D] text-[12px]">{errorMsg}</p>
            )}
          </div>
          <div className="mt-[57px] sm:mt-[77px] lg:mt-[120px]">
            <label
              className="w-[170px] h-[42px] border border-[#B9B9B9] rounded-[6px] flex p-[9px_12px] cursor-pointer"
              htmlFor="file-input"
            >
              <FilePickerIcon />
              <span className="text-[#18470D] text-[14px] lg:text-[16px] ml-[11px]">
                Attach File
              </span>
              <input
                className="hidden"
                id="file-input"
                type="file"
                accept="image/*,.pdf"
                ref={file}
                onChange={(e) => {
                  if (e.target.files?.[0]) {
                    setSelectedFileName(e.target.files[0].name);
                  }
                }}
              />
            </label>
            {selectedFileName && (
              <span className="mt-[10px] block text-[#18470D] text-[14px] font-medium">
                Attached: {selectedFileName}
              </span>
            )}
            <span className="mt-[14px] block text-[#545454] text-[14px]">
              Max file size: 1000MB
            </span>
          </div>
        </div>
      </div>
      <div className="border-t border-[#18470D] mt-[145px] sm:mt-[420px] lg:mt-[250px] pt-[30px] sm:pt-[37px] flex justify-end mx-[20px]">
        <button
          onClick={() => handleNextClick()}
          className={` w-[167px] h-[40px] text-nowrap lg:w-[200px] lg:h-[48px] p-[8px_20px] lg:p-[12px_35px] rounded-full text-[16px] font-medium ${buttonValid
            ? ' bg-[#CBEC5E] text-[#18470D] cursor-pointer '
            : ' bg-[#EAEAEA] text-[#B8B8B8] '
            }`}
          type="button"
        >
          Review Job Post
        </button>
      </div>
    </div>
  );
};

export default FifthStep;