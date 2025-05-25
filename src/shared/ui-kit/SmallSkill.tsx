export const SmallSkill = ({ skill }: { skill: string }) => {
  return (
    <div className="font-medium xl:text-[14px] text-[13px] p-[3px_9px] border border-[#00000047] w-fit rounded-[50px] text-nowrap">
      {skill}
    </div>
  );
};
