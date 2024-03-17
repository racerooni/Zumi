import prismadb from "@/lib/prismadb";
import { UserButton, auth } from "@clerk/nextjs";
import HomeNavbar from "./components/landingnav";
import UserBtns from "./components/userbtns";
import DashboardButton from "./components/dashboardbtn";
import { redirect } from "next/navigation";
import Footer from "./components/footer";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <div className="relative bg-gray-100">
      <HomeNavbar>
        {userId ? (
          <>
            <DashboardButton href={`/dashboard/`} /> <UserButton />
          </>
        ) : (
          <UserBtns />
        )}
      </HomeNavbar>
      {children}
      <Footer />
    </div>
  );
}
