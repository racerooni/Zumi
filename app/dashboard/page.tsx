import { auth } from "@clerk/nextjs";
import prismadb from "@/lib/prismadb";
import { redirect } from "next/navigation";
const DashboardPage = async () => {
  const { userId } = auth();

  if (userId) {
    const store = await prismadb.store.findFirst({
      where: {
        userId,
      },
    });
    if (store) {
      redirect(`/dashboard/${store.id}/billboards`);
    } else if (!store) {
      redirect(`/dashboard/new`);
    }
  }

  return null;
};

export default DashboardPage;
