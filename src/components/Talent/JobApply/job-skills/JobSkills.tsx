interface JobSkillsProps {
  skills: string[];
}

export const JobSkills: React.FC<JobSkillsProps> = ({skills}) => {
  return (
    <div>
      <div>
        <span className="text-[18px] sm:text-[20px] lg:text-[30px] font-medium">Skills</span>
      </div>
      <div className="flex 2xl:gap-[23px] lg:gap-[20px] sm:gap-[12px] gap-[14px] mt-[18px] mb-[12px] sm:mb-[45px] flex-wrap">
        {skills.map((skill, i) => {
            return (
                <div className="p-[10px] text-[#545454] border-[1px] border-[#545454] rounded-[77px] font-medium text-center" key={i}>{skill}</div>
            )
        })}
      </div>
    </div>
  );
};
