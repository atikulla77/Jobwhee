import { getAllSkills } from "@/lib/api/allSkillsApi/allSkillsApi";
import useSWR from "swr";
import { usePathname } from "next/navigation";

export const useAllSkills = () => {
  const pathname = usePathname();
  const languageCode = pathname.split("/")[1];

  const { data } = useSWR(["/skills", languageCode], () =>
    getAllSkills(languageCode)
  );

  return data?.data.skills || [];
};
