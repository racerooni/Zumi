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
import { Carrot, Eye, ShoppingCart } from "lucide-react";
import { Products } from "@prisma/client";
import Link from "next/link";

interface CarouselProps {
  products: Products[];
}

const CarouselSlider: React.FC<CarouselProps> = ({ products }) => {
  return (
    <motion.div
      className="px-8 mt-6 flex flex-col items-center bg-gradient-to-b "
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        {products.map((product, i) => (
          <Link href={`market/${product.id}`} key={product.id}>
            <div
              className="w-[18rem] border from-white to bg-yellow-50 transition hover:scale-105 bg-gradient-to-t shadow-black border-black/20 rounded-xl p-2 relative flex flex-col justify-between"
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
              <button className="bg-yellow-400 h-[2rem] w-full absolute bottom-0 left-[50%] translate-x-[-50%] rounded-b-xl px-4 items-center flex justify-center text-md gap-2">
                <p>Megtekintem</p>
                <Eye />
              </button>
            </div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default CarouselSlider;
