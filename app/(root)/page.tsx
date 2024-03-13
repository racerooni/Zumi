import React from "react";
import CarouselSlider from "./components/carousel";
import Categories from "./components/categories";
import Header from "./components/header";
import Separator from "./components/separator";
import Qualities from "./components/qualities";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CarouselSlider />
      <div className="text-4xl font-bold mt-12 mb-12">Hogy miért vásárolj a Zümin?</div>
      <Qualities />
    </div>
  );
}
