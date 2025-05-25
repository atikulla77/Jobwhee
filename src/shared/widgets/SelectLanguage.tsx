"use client";
import Image from "next/image";
import { WhiteCheck } from "../../../public/icons/talent-client/WhiteCheck";
import useSWR from "swr";
import { startTransition, useState } from "react";
import { getLanguages } from "@/lib/api/languageApi/languageApi";
import { useRouter } from "next/navigation";
import { useLocale } from "next-intl";
import { BlackArrow } from "../../../public/icons/BlackArrow";
import { Locale } from "@/i18n/routing";
import ClickOutside from "@/shared/widgets/ClickOutside/ClickOutside";

interface SelectLanguageProps {
  theme: string;
}

export const SelectLanguage: React.FC<SelectLanguageProps> = ({ theme }) => {
  const { data: languagesData, error } = useSWR("/language", getLanguages);
  const languages = languagesData?.data ?? [];
  const router = useRouter();
  const locale = useLocale();

  const [isLngClicked, setLngClicked] = useState(false);
  const isOpen = isLngClicked;

  const handleLngClick = () => {
    setLngClicked((prev) => !prev);
  };

  const handleSetLanguage = (lng: string) => {
    const nextLocale = lng as Locale;
    startTransition(() => {
      router.replace(
        // @ts-expect-error -- TypeScript will validate that only known `params`
        // are used in combination with a given `pathname`. Since the two will
        // always match for the current route, we can skip runtime checks.
        { pathname, params },
        { locale: nextLocale }
      );
    });
  };

  return (
    <ClickOutside onClick={() => setLngClicked(false)} className="relative">
      <div className="relative cursor-pointer">
        <div
          onClick={handleLngClick}
          className="w-[95px] h-[48px] mt-1 cursor-pointer lg:mt-0 flex items-center border pl-[9px] gap-[10px] border-[#949494] border-opacity-50 rounded-[40px]"
        >
          {languages.map(
            (lang) =>
              locale === lang.code && (
                <div key={lang.code} className="flex items-center gap-[10px]">
                  <Image
                    src={lang.image}
                    width={24}
                    height={24}
                    alt="Language"
                  />
                  <div className="flex items-center gap-1">
                    <p
                      className={`text-[14px] font-medium ${theme === "light" ? "text-black" : "text-white"
                        }`}
                    >
                      {lang.code.toUpperCase()}
                    </p>
                    <div className={`transform duration-300 ease-in-out ${isLngClicked ? "rotate-180" : "rotate-0"}`}>
                      {theme === "light" ? <BlackArrow /> : <WhiteCheck />}
                    </div>
                  </div>
                </div>
              )
          )}
        </div>

        {isOpen && (
          <div
            className={`absolute w-[131px] h-auto px-2 py-2 -right-5 top-14 z-50 border border-[#949494] border-opacity-50 rounded-[14px] ${theme === "light" ? "bg-white" : "bg-black"
              }`}
          >
            {languages.map((lang) => (
              <div
                key={lang.code}
                onClick={() => handleSetLanguage(lang.code)}
                className="flex items-center gap-2 mt-2 first:mt-0"
              >
                <Image src={lang.image} width={24} height={24} alt="lang" />
                <p
                  className={`${theme === "light" ? "text-black" : "text-white"
                    } text-sm`}
                >
                  {lang.name}
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </ClickOutside>
  );
};
