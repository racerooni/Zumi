"use client"
import prismadb from '@/lib/prismadb'
import axios from 'axios';
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../components/loading';
import { Products } from '@prisma/client';
import { error } from 'console';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { MailCheck, SeparatorHorizontal, User } from 'lucide-react';
import Separator from '@/app/(root)/components/separator';

export default function page() {
    const params = useParams();
    const [isLoading, setisLoading] = useState(true)
    const productid: string = params.productId.toString();
    const [product, setProduct] = useState<{ id: string; storeId: string; label: string; imageUrl: string; price: string; createdAt: Date; updatedAt: Date; category: string } | null>(null); // Adjust the type definition here
    useEffect(() => {
        const fetchItems = async () => {

            try {
                const result = await axios.get(`/api/market/${productid}`, {
                    params: { productid },
                });
                setProduct(result.data);
            } catch (error) {
                console.error("Error fetching items:", error);
            }
        };
        try{
            fetchItems();
            setisLoading(true)
        } catch (error: any) {
            console.log(error)
        } finally {
            setisLoading(false)
        }

    }, [product]);

    if (isLoading) {
        return (
            <Loading/>
        )
    }


    return (

    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6">
        <Image
          alt="Termék kép"
          className=" rounded-md fit-container"
          height="500"
          src={product?.imageUrl!}
          width="500"

        />
        <div className="space-y-6">
          <h1 className="text-4xl font-bold tracking-tighter">{product?.label}</h1>
          <div className="flex space-x-1">
  
          </div>
          <p className="text-base text-zinc-500 dark:text-zinc-400">
            jo minosegu bontatlan ujszeru hangfal
          </p>
          <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">{product?.price} Ft.-</p>
          <p className="text-xs text-zinc-500 dark:text-zinc-400">
            
          </p>
        </div>
        <div className="flex flex-col items-center gap-2">
          <div className="w-[24rem] h-36 flex justify-center items-center border-black/20 border rounded-xl flex-col cursor-pointer">
            <p>Kattintson ide az eladó adataiért!</p>
            <User className="w-12 h-12" />
          </div>
          <SeparatorHorizontal/>
          <div className="w-[24rem] h-36 flex justify-center items-center border-black/20 border rounded-xl flex-col cursor-pointer">
            <p>Email küldése az eladónak</p>
            <MailCheck className="w-12 h-12" />
          </div>
        </div>
       
      </div>
    </section>
  )
}

    