import React from "react";
import CarouselSlider from "./components/carousel";
import Categories from "./components/categories";
import Header from "./components/header";
import Separator from "./components/separator";
import Qualities from "./components/qualities";
import AboutSection from "./components/about";
import prismadb from "@/lib/prismadb";
import { Products } from "@prisma/client";

export default async function Home() {
  const products = await prismadb.products.findMany({
    where: {
      storeId: "9d0de472-4895-4df7-bbd4-385e9c21b432",
    },
    take: 5,
  });
  console.log();
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CarouselSlider products={products} />
      <div className="text-4xl text-center font-bold mt-12 mb-12 border-b-2 border-yellow-400 py-2">
        Hogy miért vásárolj a Zümin?
      </div>
      <Qualities />
      <AboutSection />
    </div>
  );
}
