import Product from "@/app/dashboard/[storeId]/(routes)/billboards/components/products";
import prismadb from "@/lib/prismadb";
import { clerkClient } from "@clerk/nextjs";
import React from "react";
import AdminProduct from "./components/adminproduct";
import AdminSlider from "./components/adminproduct";

export default async function ProductsPage() {
  const product = await prismadb.products.findMany({});
  console.log(product);

  return null;
}
