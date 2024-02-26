"use client";
import { motion } from "framer-motion";
import { Search } from "lucide-react";
import bee from "@/public/bee.png";
import Image from "next/image";
const SearchBar = () => {
  const handleSubmit = () => {};
  return (
    <motion.form
      className="bg-white w-full md:w-1/2 lg:w-1/3 h-12 rounded-full flex items-center justify-between px-4 divide-gray-800 border border-black/60 relative"
      initial={{ y: -500 }}
      animate={{ y: 0 }}
    >
      <Image
        src={bee.src}
        alt="mehecske"
        width={50}
        height={50}
        className="absolute -top-11 right-4"
      />
      <input
        type="text"
        className="font-xl outline-none accent-green-600 w-full"
        placeholder="Add meg egy termék nevét!"
      />
      <button className="ps-3 cursor-pointer" onClick={handleSubmit}>
        <Search />
      </button>
    </motion.form>
  );
};

export default SearchBar;
