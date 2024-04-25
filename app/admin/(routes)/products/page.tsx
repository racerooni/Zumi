import { clerkClient } from "@clerk/nextjs";
import React from "react";

export default async function ProductsPage() {
  const response = await clerkClient.users.getUserList();
  console.log(response);
  return <div>Products</div>;
}
