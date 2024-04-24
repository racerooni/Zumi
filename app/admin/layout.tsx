import { auth } from "@clerk/nextjs";
import React from "react";
import { redirect } from "next/navigation";
import { Sidebar } from "./components/sidebar";

export default async function AdminLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { storeId: string };
}) {
  const { userId } = auth();

  return (
    <div className="h-screen w-screen">
      <Sidebar />
      {children}
    </div>
  );
}
