import { auth } from "@clerk/nextjs";

import { redirect } from "next/navigation";

import prismadb from "@/lib/prismadb";
import Navbar from "@/components/navbar";
import { useRouter } from "next/navigation";
export default async function DashboardNewLayout({
    children,
    params,
}: {
    children: React.ReactNode;
    params: { storeId: string };
}) {
    const { userId } = auth();



    return (
        <>
            {children}
        </>
    );
}
