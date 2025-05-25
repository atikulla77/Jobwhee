import React, { useEffect, useState } from 'react';
import { ArrowIcon } from '../../../../../public/icons/ArrowIcon';
import Image from 'next/image';
import CustomDropdown from './CustomDropDown';
import { SpokenLanguagesEnum } from '@/constants/LanguagesEnum';

interface Language {
  language: string;
  proficiency: string;
}

interface LanguagesSectionProps {
  userLanguages: Language[];
  onChange?: (updated: Language[]) => void;
}

const LanguagesSection: React.FC<LanguagesSectionProps> = ({
  userLanguages,
  onChange,
}) => {
  const [languages, setLanguages] = useState<Language[]>([]);

  useEffect(() => {
    setLanguages(
      userLanguages.length ? userLanguages : [{ language: '', proficiency: '' }]
    );
  }, []);

  useEffect(() => {
    if (onChange) {
      onChange(languages);
    }
  }, [languages]);

  const handleChange = (
    index: number,
    field: keyof Language,
    value: string
  ) => {
    const updated = [...languages];
    updated[index][field] = value;
    setLanguages(updated);
  };

  const handleAddLanguage = () => {
    const updated = [...languages, { language: '', proficiency: '' }];
    setLanguages(updated);
    onChange?.(updated);
  };
  const handleRemoveLanguage = (index: number) => {
    const updated = languages.filter((_, i) => i !== index);
    // setLanguages(updated.length ? updated : [{ language: "", proficiency: "" }]);
    setLanguages(updated);
    onChange?.(updated);
  };

  const rowsToRender =
    languages.length > 0 ? languages : [{ language: '', proficiency: '' }];
  return (
    <>
      <div className="flex flex-col justify-start md:flex-row items-start md:justify-evenly gap-[16px]">
        <div className="flex flex-col">
          <h3 className="text-[18px] text-[#545454]">Language</h3>
          {/* {rowsToRender.map((lang, index) => (
                        <div key={index} className="flex flex-col mb-[20px]">
                            <div className="relative flex-1">
                                <select
                                    value={lang?.language || ""}
                                    onChange={(e) => handleChange(index, "language", e.target.value)}
                                    className="text-[#8B939F] w-[252px] xl:w-[340px] p-2 border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 appearance-none pr-10"
                                >
                                    <option value="">Select Language</option>
                                    <option value="English">English</option>
                                    <option value="Russian">Russian</option>
                                    <option value="Ukrainian">Ukrainian</option>
                                    <option value="German">German</option>
                                    <option value="Chinese">Chinese</option>
                                </select>
                                <span className="absolute top-[18px] right-[20px] flex items-center pointer-events-none text-gray-500">
                  <ArrowIcon />
                </span>
                            </div>
                        </div>
                    ))} */}
          {rowsToRender.map((lang, index) => (
            <div key={index} className="flex flex-col mb-[20px]">
              <CustomDropdown
                languages={Object.values(SpokenLanguagesEnum)}
                selectedLanguage={lang.language}
                onSelect={(value) => handleChange(index, 'language', value)}
              />
            </div>
          ))}
        </div>

        <div className="flex flex-col">
          <h3 className="text-[18px] text-[#545454]">Proficiency level</h3>
          {/* {rowsToRender.map((lang, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-[10px]"
            >
              <div className="flex flex-col mb-[20px]">
                <div className="relative flex-1">
                  <select
                    value={lang.proficiency}
                    onChange={(e) =>
                      handleChange(index, 'proficiency', e.target.value)
                    }
                    className="text-[#8B939F] w-[252px] xl:w-[340px] p-2 border rounded-[12px] focus:border-[#545454] focus:border-[1px] border-[#AEB3BC] mt-1 appearance-none pr-10"
                  >
                    <option value="">Select Proficiency</option>
                    <option value="Native">Native</option>
                    <option value="Fluent">Fluent</option>
                    <option value="Intermediate">Intermediate</option>
                    <option value="Beginner">Beginner</option>
                  </select>
                  <span className="absolute top-[18px] right-[20px] flex items-center pointer-events-none text-gray-500">
                    <ArrowIcon />
                  </span>
                </div>
              </div>
              <button
                className="min-h-[36px] min-w-[36px] mb-[20px]"
                onClick={() => handleRemoveLanguage(index)}
              >
                <Image
                  src="/icons/trash.png"
                  alt="trash"
                  width={36}
                  height={36}
                />
              </button>
            </div>
          ))} */}
          {rowsToRender.map((lang, index) => (
            <div
              key={index}
              className="flex justify-center items-center gap-[10px]"
            >
              <div className="flex flex-col mb-[20px]">
                <div className="relative flex-1">
                  <CustomDropdown
                    languages={['Native', 'Fluent', 'Intermediate', 'Beginner']}
                    selectedLanguage={lang.proficiency}
                    onSelect={(value) =>
                      handleChange(index, 'proficiency', value)
                    }
                  />
                </div>
              </div>
              <button
                className="min-h-[36px] min-w-[36px] mb-[20px]"
                onClick={() => handleRemoveLanguage(index)}
              >
                <Image
                  src="/icons/trash.png"
                  alt="trash"
                  width={36}
                  height={36}
                />
              </button>
            </div>
          ))}
        </div>
      </div>

      <button
        className="w-full border border-[#AEB3BC] rounded-[74px] h-[48px] text-[#18470D] font-medium mt-2"
        onClick={handleAddLanguage}
      >
        + Add new language
      </button>
    </>
  );
};

export default LanguagesSection;
