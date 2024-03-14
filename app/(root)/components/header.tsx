import { Search } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";
import Categories from "./categories";
import bg from "@/public/Hexagon(1).svg";
import SearchBar from "./searchbar";

export default function Header() {
  return (
    <div
      className="h-[75vh] md:h-[55vh] w-full relative flex flex-col items-center overflow-hidden bg-no-repeat bg-cover shadow-2xl shadow-yellow-500 border border-black/10"
      style={{
        backgroundImage: `url("${bg.src}")`,
      }}
    >
      <div className="mb-12 mt-24">
        <h1 className="text-5xl text-center font-bold text-white inline-block text-transparent bg-clip-text">
          Nézz körül te is!
        </h1>
      </div>
      <SearchBar />
      <div className="my-auto">
        <Categories />
      </div>
    </div>
  );
}
