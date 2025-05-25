const linksList = [
  {
    text: "© 2025 Jobwhee All rights reserved.",
    customStyle: "!list-none -translate-x-[15px] lg:!-translate-x-[7px]",
  },
  {
    text: "Terms of Service",
    customStyle: "order-none sm:order-2 lg:order-none lg:!-translate-x-[7px]",
  },
  { text: "Privacy Policy", customStyle: "order-4 sm:order-none lg:!-translate-x-[7px]" },
  { text: "Cookies", customStyle: "order-3 sm:order-4 lg:order-none lg:!-translate-x-[7px]" },
];

export const RegistrationFooter = () => {
  return (
    <footer className="w-full flex justify-center">
      <div className="2xl:max-w-[1474px] lg:max-w-[960px] sm:max-w-[514px] max-w-[335px] py-[16px] md:py-[22px] bg-[#181818] w-full 2xl:min-h-[106px] lg:min-h-[60px] sm:min-h-[86px] rounded-[20px] flex items-center justify-center text-white text-[12px] 2xl:text-[14px] px-[60px]">
        <ul className="grid grid-cols-1 sm:grid-cols-[repeat(2,1fr)] lg:grid-cols-4 sm:gap-x-[100px] lg:gap-x-[22px] 2xl:gap-x-[32px] gap-y-[5px] lg:flex text-left lg:text-center grid-gap-0">
          {linksList.map((link, i) => (
            <li
              key={i}
              className={`${link.customStyle || ""} text-nowrap list-disc pl-[5px]`}
            >
              {link.text}
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default RegistrationFooter;
