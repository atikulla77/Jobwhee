interface JobDescriptionProps {
  text: string;
  list?: string[];
  customStyles?: string;
}

export const JobDescription: React.FC<JobDescriptionProps> = ({
  text,
  list,
  customStyles,
}) => {
  return (
    <div className={customStyles}>
      <p className="sm:text-[20px] text-[14px] font-medium mt-[6px] lg:mt-[8px] ">
        Description
      </p>
      <div className="text-[#545454] text-[14px] lg:text-[16px] lg:mt-[15px] sm:mt-[8px] mt-[10px] mb-[22px]">
        <p className="">{text}</p>
        <ul className="2xl:mt-[15px] lg:mt-[12px] sm:mt-[14px] mt-[8px]">
          {list?.map((item, i) => {
            return (
              <li
                className="text-[14px] text-[#545454] sm:text-[14px] lg:text-[16px] pl-[10px] flex items-center"
                key={i}
              >
                <div className="w-[4px] h-[4px] bg-[#545454] rounded-full mr-[10px]"></div>
                <p>
                  {item}
                  {list.length - 1 === i && (
                    <span className="text-[#18470D] underline decoration-[#18470D] ml-[5px] text-nowrap">
                      read more
                    </span>
                  )}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};
