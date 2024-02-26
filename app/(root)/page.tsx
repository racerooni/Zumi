import React from "react";
import CarouselSlider from "./components/carousel";
import Categories from "./components/categories";
import Header from "./components/header";

export default function Home() {
  return (
    <div>
      <Header />
      <CarouselSlider />
    </div>
  );
}
