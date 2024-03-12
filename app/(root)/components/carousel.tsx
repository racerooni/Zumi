"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle, CardFooter } from '@/components/ui/card'
import React from 'react'
import { examples } from "@/lib/data";
import Image from 'next/image';
import { motion } from "framer-motion"


export default function CarouselSlider() {
  return (
    <motion.div className="px-8 mt-12 flex flex-col items-center" initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}>
      <h2 className="text-4xl self-start">Egy kis ízelítő a kínálatunkból...</h2>
      <div className="flex gap-6 mt-16">
        {examples.map((product, i) => (
          <Card className="border border-black/20" key={i}>
            <CardHeader>
              <Image alt="xd" width={300} height={300} src={product.imageUrl} />
              <CardTitle>{product.name}</CardTitle>
              <CardDescription>{product.desc}</CardDescription>
            </CardHeader>
            <CardContent>
              <p>{product.price}</p>
            </CardContent>
          </Card>
        ))}

      </div>
    </motion.div>
  )
}
