import prismadb from "@/lib/prismadb";
import { UserButton, auth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Header from "./components/header";
import HomeNavbar from "./components/landingnav";
import UserBtns from "./components/userbtns";

export default async function SetupLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userId } = auth();

  return (
    <div className="relative bg-gray-100">
      <HomeNavbar>{userId ? <UserButton /> : <UserBtns />}</HomeNavbar>
      {children}
    </div>
  );
}
