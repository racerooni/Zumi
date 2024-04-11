"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import React from 'react'
import { examples } from "@/lib/data";
import Image from 'next/image';
import { motion } from "framer-motion"
import { Rating } from '@mui/material'
import { Carrot, Eye, ShoppingCart } from 'lucide-react';


export default function CarouselSlider() {
  return (
    <motion.div className="px-8 mt-6 flex flex-col items-center bg-gradient-to-b " initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
   
      <div className="grid gap-6 mt-12 grid-cols-1 md:grid-cols-3 xl:grid-cols-5">
        {examples.map((product, i) => (
          <div className="border bg-white transition hover:scale-105 shadow-black border-black/20 rounded-xl p-2 relative flex flex-col justify-between max-w-[370px]" key={i}>
            <div>
              <div className='flex justify-center items-center h-[17rem] mb-4 object-contain overflow-hidden'>
                <Image alt="xd" width={300} height={300} src={product.imageUrl} className="aspect-square w-[75%] mix-blend-multiply" />
              </div>
              <div>{product.name}</div>
              <Rating
                name="simple-controlled"
                readOnly
                value={product.rating}
              />
            </div>
            <div>
              <p>{product.price}</p>
            </div>
            <div className="h-[2rem]"></div>
            <button className="bg-yellow-400 h-[2rem] w-full absolute bottom-0 left-[50%] translate-x-[-50%] rounded-b-xl px-4 items-center flex justify-center text-md gap-2">
          <p>Megtekintem</p>
          <Eye />
        </button>
          </div>
        ))}

      </div>
    </motion.div>
  )
}
