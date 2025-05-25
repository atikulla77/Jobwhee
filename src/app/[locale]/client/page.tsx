import { getServerSession } from "next-auth";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { redirect } from "@/i18n/routing";
import { getLocale } from "next-intl/server";
import { UserTypeEnum } from "@/constants/UserTypeAndRoleEnum";
import { ClientHome } from "@/components/Client/ClientDashboard";
import DashboardLayout from "@/components/Layouts/UserLayout";
import { JobCreateProvider } from "@/contextProviders/JobCreateContext";

export default async function ClientPage() {
  const session = await getServerSession(authOptions);
  const locale = await getLocale();
  if (session?.role !== UserTypeEnum.Client) {
    redirect({
      href: "/auth/signin",
      locale,
    });
  }
  return (
    <>
      <DashboardLayout>
        <JobCreateProvider>
          <ClientHome />
        </JobCreateProvider>
      </DashboardLayout>
    </>
  );
}
