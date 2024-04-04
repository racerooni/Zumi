import { auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
import ProfileNav from "@/components/ui/profilenav";
export default async function DashboardLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { storeId: string };
}) {
    const { userId } = auth();



    return (
        <>
            <ProfileNav />
            {children}
        </>
    );
}
