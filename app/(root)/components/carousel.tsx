"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import React from 'react'
import { examples } from "@/lib/data";
import Image from 'next/image';
import { motion } from "framer-motion"
import { Rating } from '@mui/material'


export default function CarouselSlider() {
  return (
    <motion.div className="px-8 mt-12 flex flex-col items-center" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <h2 className="text-4xl self-start bg-yellow-500 -ms-12 py-2 ps-16 rounded-r-full w-1/3 border border-black/20">Egy kis ízelítő a kínálatunkból..</h2>
      <div className="grid gap-6 mt-12 grid-cols-5">
        {examples.map((product, i) => (
          <div className="border border-black/20 rounded-xl p-2" key={i}>
            <div>
              <div className='flex justify-center items-center h-[17rem] mb-4 object-contain overflow-hidden'>
                <Image alt="xd" width={300} height={300} src={product.imageUrl} className="aspect-square w-[75%]" />
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
          </div>
        ))}

      </div>
    </motion.div>
  )
}
