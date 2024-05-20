import { UserButton, auth } from "@clerk/nextjs";
import { MainNav } from "./main-nav";
import StoreSwitcher from "./store-switcher";
import { redirect } from "next/navigation";
import prismadb from "@/lib/prismadb";
import UserPageButton from "./ui/userpagebtn";
import NavbarResponsive from "./component/navbarres";

const Navbar = async () => {
  const { userId } = auth();
  if (!userId) {
    redirect("/sign-in");
  }
  const stores = await prismadb.store.findMany({
    where: {
      userId,
    },
  });
  return (
    <div className="border-b">
      <div className="flex h-16 items-center ps-4 justify-between">
        <StoreSwitcher items={stores} />
        <NavbarResponsive userId={userId} />
      </div>
    </div>
  );
};

export default Navbar;
