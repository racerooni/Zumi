import prismadb from "@/lib/prismadb";
import { auth } from "@clerk/nextjs";
import HomeNavbar from "./components/landingnav";
import UserBtns from "./components/userbtns";
import DashboardButton from "./components/dashboardbtn";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();
  let storeId: string;
  if (userId) {
    const store = await prismadb.store.findFirst({
      where: {
        userId,
      },
    });
    if (store) storeId = store.id;
  }

  return (
    <div className="relative bg-gray-100">
      <HomeNavbar>
        {userId ? <DashboardButton href={storeId} /> : <UserBtns />}
      </HomeNavbar>
      {children}
    </div>
  );
}
