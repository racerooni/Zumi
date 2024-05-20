import React from "react";

import prismadb from "@/lib/prismadb";
import { Products } from "@prisma/client";
import CarouselSlider from "./components/adminproduct";

export default async function Home() {
  const products = await prismadb.products.findMany({});
  console.log(products);

  return (
    <div className="flex flex-col items-center">
      <CarouselSlider products={products} />
    </div>
  );
}
