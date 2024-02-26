"use client"
import { Search } from 'lucide-react'
import React from 'react'
import { motion } from "framer-motion";

export default function Header() {
  return (
    <div className="h-[40vh] w-full bg-gray-100 relative bg-gradient-to-r from-red-500 to-orange-500 flex flex-col items-center">
      <div className="mb-12 mt-16">
        <motion.h1 className="text-5xl bg-gradient-to-r from-white font-bold to-blue-200 inline-block text-transparent bg-clip-text" initial={{ y: -500 }}
          animate={{ y: 0 }}>Nézz körül te is!</motion.h1>
      </div>
      <motion.form className="bg-white w-[35rem] h-12 rounded-full flex items-center justify-between px-4 divide-gray-800 divide-x border border-black/60"
        initial={{ y: -500 }}
        animate={{ y: 0 }}>
        <input type="text" className="font-xl outline-none accent-green-600 w-full" placeholder="Add meg egy termék nevét!" />
        <button className="ps-3 cursor-pointer">
          <Search />
        </button>
      </motion.form>
    </div>

  )
}
