"use client";
import { Button } from "@/components/ui/button";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

interface HomeNavbarProps {
  children: React.ReactNode;
}

const HomeNavbar: React.FC<HomeNavbarProps> = ({ children }) => {
  return (
    <nav className="min-h-12 w-full flex text-white py-2 px-6 justify-between absolute z-20">
      <motion.div initial={{ x: -300 }} animate={{ x: 0 }}>
        <span className="text-white font-bold tracking-wider text-3xl">
          Zümi
        </span>
      </motion.div>
      <motion.div
        className="flex gap-3 items-center"
        initial={{ x: 300 }}
        animate={{ x: 0 }}
      >
        {children}
      </motion.div>
    </nav>
  );
};
export default HomeNavbar;
