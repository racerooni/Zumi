import React from "react";
import CarouselSlider from "./components/carousel";
import Categories from "./components/categories";
import Header from "./components/header";
import Separator from "./components/separator";
import Qualities from "./components/qualities";
import AboutSection from "./components/about";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Header />
      <CarouselSlider />
      <div className="text-4xl text-center font-bold mt-12 mb-12 border-b-2 border-yellow-400 py-2">Hogy miért vásárolj a Zümin?</div>
      <Qualities />
      <AboutSection/>
    </div>
  );
}
