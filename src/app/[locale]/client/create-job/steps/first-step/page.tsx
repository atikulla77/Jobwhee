'use client';
import { useEffect, useState } from 'react';
import StepsPanel from '../fifth-step/StepsPanel';
import { useJobCreate } from '@/contextProviders/JobCreateContext';
import useSWR from 'swr';
import { usePathname } from 'next/navigation';
import { getCategories } from '@/lib/api/categoriesApi/categoriesApi';
import { getSubcategories } from '@/lib/api/subcategoryApi/subcategoryApi';
import StepDropDown from '@/components/Client/jobCreate/StepDropDown';
import { set, sub } from 'date-fns';

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

interface FirstStepProps {
  handleChangeStep: (step: number) => void;
  currentStepsData: Array<{
    stepCount: number;
    active: boolean;
    checked: boolean;
  }>;
}

const FirstStep: React.FC<FirstStepProps> = ({
  handleChangeStep,
  currentStepsData,
}) => {
  const { jobDetails, setJobDetails } = useJobCreate();
  const [jobTitle, setJobTitle] = useState(jobDetails.title);
  const [jobTitleValid, setJobTitleValid] = useState(true);
  const [categoryValid, setCategoryValid] = useState(true);
  const [buttonValid, setButtonValid] = useState(false);
  const pathname = usePathname();
  const languageCode = pathname.split('/')[1];
  const {
    data: categories,
    error: categoriesError,
    mutate: categoriesMutate,
  } = useSWR(['/category', languageCode], () => getCategories(languageCode));
  const [category, setCategory] = useState(
    categories?.data.categories.find((elm) => elm.id == jobDetails.category.id || elm.translation.name == jobDetails.category.translations.name)
    ?.translation.name || ''
  );
  const {
    data: subcategories,
    error: subcategoriesError,
    mutate: subcategoriesMutate,
  } = useSWR(
    [
      '/subcategory/category/' +
      categories?.data.categories.find(
        (elm) => elm.translation.name == category
      ),
      languageCode,
      categories?.data.categories.find(
        (elm) => elm.translation.name == category
      ),
    ],
    () =>
      getSubcategories(
        languageCode,
        categories?.data.categories.find(
          (elm) => elm.translation.name == category
        )?.id || 0
      )
    );
    const [subCategory, setSubCategory] = useState("");
  useEffect(() => {
    if (jobDetails && categories && subcategories && !category) {
      setCategory(
        categories?.data.categories.find(
          (elm) => elm.id == jobDetails.category.id
        )?.translation.name || ''
      );
    }
    if (category && subcategories) {
      subcategoriesMutate();
      setSubCategory(jobDetails.subcategory ?
        subcategories?.data.subcategories.find(
          (elm: any) => elm.id == jobDetails.subcategory.id || elm.translation.name == jobDetails.subcategory
        )?.translation.name || "" : subcategories?.data.subcategories[0].translation.name
      );
    }
  }, [jobDetails, categories, subcategories, category]);

  const handleJobTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    const regex = /^(?!^\p{N}+$)[\p{L}\p{N} ]+$/u;

    if (value === '' || regex.test(value)) {
      setJobTitle(value);
      setJobTitleValid(true);
    } else {
      setJobTitleValid(false);
    }
  };

  useEffect(() => {
    if (jobTitle.length && category.length) {
      setButtonValid(true);
    } else {
      setButtonValid(false);
    }
  }, [jobTitle, category]);

  const validateForm = () => {
    let isValid = true;

    if (!jobTitle) {
      isValid = false;
      setJobTitleValid(false);
    } else {
      setJobTitleValid(true);
    }

    if (!category) {
      isValid = false;
      setCategoryValid(false);
    } else {
      setCategoryValid(true);
    }

    return isValid;
  };

  const handleNextClick = () => {
    setJobDetails({ ...jobDetails, title: jobTitle, category: { ...jobDetails.category, translations: { ...jobDetails.category.translations, name: category } }, subcategory: subCategory });
    if (validateForm()) {
      handleChangeStep(2);
    }
  };
  return (
    <div className=" xl:px-0 lg:justify-center lg:px-[20px] 2xl:pt-[216px] xl:px-none xl:justify-between max-w-[335px] sm:max-w-[569px] lg:max-w-[1240px] 2xl:max-w-[1430px] mx-auto lg:pt-[157px] sm:pt-[120px] pt-[112px] flex justify-between flex-wrap lg:flex-nowrap gap-x-[20px] mb-[111px] gap-y-[50px] sm:gap-y-[13px]">
      <div>
        <StepsPanel stepsData={currentStepsData} />
        <h1 className="text-[#000] text-[20px] font-medium sm:text-[30px] lg:text-[40px] sm:mt-[19px] xl:mt-[13px] 2xl:mt-[22px] mt-[48px] 2xl:max-w-[210px]">
          Make your title stand out from the start.
        </h1>
        <div className="text-[#545454] text-[14px] sm:text-[16px] lg:text-[18px] mt-[19px] sm:mt-[5px] max-w-[520px]">
          <span>
            This helps your job post stand out to the right candidates. It’s the
            first thing they’ll see, so make it count!
          </span>
        </div>
      </div>
      <div className="lg:max-w-[540px] max-w-[335px] sm:max-w-[514px] 2xl:max-w-[590px] min-h-[373px] lg:min-h-[512px] w-full flex flex-col">
        <div className="flex-1">
          <div>
            <div>
              <label
                className="text-[#000] xl:text-[16px] sm:text-[16px] 2xl:text-[18px]"
                htmlFor="input"
              >
                Write a title for your job post*
              </label>
            </div>
            <div
              className={`border-[1px] mt-[8px] h-[42px] rounded-[12px] flex items-center p-[8px] ${!jobTitleValid ? 'border-[#DD331D]' : 'border-[#242524]'
                }`}
            >
              <input
                placeholder="e.g. Photographer needed for professional event coverage"
                className="w-full h-[24px] placeholder:text-[#8B939F] text-[12px] sm:text-[14px] placeholder:text-[12px] sm:placeholder:text-[14px] 2xl:placeholder:text-[16px] text-[#2B2C2D] focus:outline-0 text-ellipsis"
                id="input"
                type="text"
                value={jobTitle}
                onChange={handleJobTitleChange}
              />
            </div>
            {!jobTitleValid && (
              <p className="mt-[8px] text-[#DD331D] text-[12px]">
                This field is required
              </p>
            )}
          </div>
          <div className="mt-[10px] sm:mt-[14px] lg:mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Category*
            </label>
            <div className="mt-[8px]">
              <StepDropDown
                isValid={categoryValid}
                inValidText="This field is required"
                state={category}
                setState={setCategory}
                list={
                  categories?.data.categories.map((elm) => {
                    return { id: elm.id, title: elm.translation.name };
                  }) || []
                }
                placeholder="Select Category"
              />
            </div>
          </div>
          <div className="mt-[20px]">
            <label className="text-[#000] text-[16px] 2xl:text-[18px]">
              Subcategories
            </label>
            <div className="mt-[8px]">
              <StepDropDown
                state={subCategory}
                setState={setSubCategory}
                list={subcategories?.data.subcategories && subcategories?.data.subcategories.map((elm) => {
                  return { id: elm.id, title: elm.translation.name };
                }) || []}
                placeholder="Select Subcategory"
              />


            </div>
          </div>
        </div>
        <div className="flex gap-[16px] pt-[20px] justify-end">
          <button
            onClick={() => handleChangeStep(0)}
            className="w-[140px] h-[40px] lg:w-[200px] lg:h-[48px] text-[#18470D] text-[16px] border border-[#CCCCCC] rounded-[50px] cursor-pointer font-medium"
          >
            Back
          </button>
          <button
            onClick={handleNextClick}
            className={`w-[140px] h-[40px] lg:w-[200px] lg:h-[48px]  text-[16px] rounded-[50px] font-medium  ${buttonValid
              ? ' bg-[#CBEC5E] text-[#18470D] cursor-pointer '
              : ' bg-[#EAEAEA] text-[#B8B8B8] '
              }`}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};
export default FirstStep;