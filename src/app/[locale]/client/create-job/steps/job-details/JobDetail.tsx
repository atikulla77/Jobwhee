import { EditIcon } from "../../../../../../../public/icons/EditIcon";

interface JobDetailProps {
  title: string;
  desc?: string;
  skills?: string[];
  onClick?: () => void;
}

export const JobDetail: React.FC<JobDetailProps> = ({
  title,
  desc,
  skills,
  onClick,
}) => {
  return (
    <div className="border border-[#CBEC5E] rounded-[16px] flex justify-between p-[8px] sm:p-[12px_10px] lg:p-[16px] 2xl:p-[21px_12px]">
      <div>
        <span className="text-[16px] sm:text-[20px] text-black font-medium">
          {title}
        </span>
        {desc && (
          <p className="whitespace-pre-line text-[14px] sm:text-[16px] text-[#302F2F] max-w-[1075px] mt-[8px]">
            {desc}
          </p>
        )}
        {skills && (
          <div className="flex flex-wrap gap-[10px] mt-[14px]">
            {skills.map((skill, i) => (
              <div
                key={i}
                className="p-[6px_23px_] border border-[#000000] rounded-full font-medium text-black"
              >
                {skill}
              </div>
            ))}
          </div>
        )}
      </div>
      <div onClick={onClick}  className="border border-[#CBEC5E] rounded-full min-w-[36px] h-[36px] cursor-pointer flex justify-center items-center">
        <EditIcon />
      </div>
    </div>
  );
};
