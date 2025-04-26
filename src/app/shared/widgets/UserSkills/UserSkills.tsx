import Image from "next/image";
import React from "react";

interface ISkill {
  id: number;
  createdAt?: string;
  updatedAt?: string;
  name: string;
}

interface UserSkillsProps {
  skills: ISkill[];
}

const UserSkills: React.FC<UserSkillsProps> = ({ skills }: { skills: ISkill[] }) => {
  return (
    <div
      className={`mb-[34px] mt-[17px] sm:mt-[22px] flex w-full flex-wrap gap-2.5`}
    >
      {skills.length > 0 ? (
        skills.map((skill: ISkill) => (
          <p
            key={skill.id}
            className="rounded-[20px] border border-[#000000] p-[9px] sm:p-[10px] text-[#000000]"
          >
            {skill.name}
          </p>
        ))
      ) : (
        <div className="flex flex-col mx-auto">
          <Image
            src={"/images/profile/skills.png"}
            alt={"skill"}
            width={159}
            height={159}
          />
          <p className="  font-medium text-[20px] text-center text-[#000000]">
            No skills yet
          </p>
        </div>
      )}
    </div>
  );
};

export default UserSkills