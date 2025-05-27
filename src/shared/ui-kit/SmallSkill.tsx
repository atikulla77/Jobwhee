export const SmallSkill = ({ skill }: { skill: string }) => {
  return (
    <div className="p-[3px_9px] border border-[#00000047] w-fit rounded-[50px] h-[28px]">
      <p className="xl:text-[14px] text-[13px] font-[400] text-black ">{skill}</p>
    </div>
  );
};
