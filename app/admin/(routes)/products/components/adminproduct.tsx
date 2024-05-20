"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
  CardFooter,
} from "@/components/ui/card";
import React from "react";
import { examples } from "@/lib/data";
import Image from "next/image";
import { motion } from "framer-motion";
import { Rating } from "@mui/material";
import { Carrot, Eye, ShoppingCart, Trash } from "lucide-react";
import { Products } from "@prisma/client";
import Link from "next/link";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import toast from "react-hot-toast";

interface CarouselProps {
  products: Products[];
}

const CarouselSlider: React.FC<CarouselProps> = ({ products }) => {
  const handleDelete = async (id: string) => {
    try {
      await axios.delete(`/api/admin`, {
        params: { id },
      });
      toast.success("Termék törlése sikeres volt!");
    } catch (error) {
      toast.error("Termék törlése nem sikerult!");
      console.log(error);
      console.log(id);
    }
  };
  return (
    <motion.div
      className="px-8 mt-6 flex flex-col items-center bg-gradient-to-b "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {products.map((product, i) => (
          <div
            className="w-[17rem] border bg-gray-100 transition hover:scale-105 bg-gradient-to-t shadow-black border-black/20 rounded-xl p-2 relative flex flex-col justify-between"
            key={product.id}
          >
            <div>
              <div className="flex justify-center items-center h-[17rem] mb-4 object-contain overflow-hidden">
                <Image
                  alt="xd"
                  width={300}
                  height={300}
                  src={product.imageUrl}
                  className="aspect-square w-[17rem] mix-blend-multiply rounded-md bg-red-400"
                />
              </div>
              <div className="text-xl font-semibold">{product.label}</div>
            </div>
            <div>
              <p>
                {product.price.toLocaleString(
                  undefined, // leave undefined to use the visitor's browser
                  // locale or a string like 'en-US' to override it.
                  { minimumFractionDigits: 0 }
                )}{" "}
                Ft
              </p>
            </div>
            <div className="h-[2rem]"></div>
            <button
              className="bg-red-600 h-[2rem] w-full absolute bottom-0 left-[50%] translate-x-[-50%] rounded-b-xl px-4 items-center flex justify-center text-md gap-2"
              onClick={() => handleDelete(product.id)}
            >
              Törlés <Trash />
            </button>
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselSlider;
