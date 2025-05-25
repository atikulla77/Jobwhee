import {getServerSession} from "next-auth";
import {authOptions} from "@/app/api/auth/[...nextauth]/route";
import {getLocale} from "next-intl/server";
import {redirect} from "@/i18n/routing";
import {UserTypeEnum} from "@/constants/UserTypeAndRoleEnum";
import JobList from "./job-list/JobList";

export default async function FreelancerPage() {
    const session = await getServerSession(authOptions);
    const locale = await getLocale();
    if (session?.role !== UserTypeEnum.Talent) {
        redirect({
            href: "/auth/signin",
            locale,
        });
    }

    return (
        <>
            <JobList/>
        </>
    );
}

