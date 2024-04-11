"use client"
import prismadb from '@/lib/prismadb'
import axios from 'axios';
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../components/loading';
import { Products } from '@prisma/client';
import { error } from 'console';
import Image from 'next/image';

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
        <div className="container bg-yellow-300 flex">
            <div className="w-1/2 h-1/2 flex justify-center items-center">
                <Image src={product?.imageUrl!} alt='Termék kép' width={350} height={350} className="object object-contain"/>
            </div>
            <div>
            <p className="text-3xl">{product?.label!}</p>
            </div>
        </div>

    )
}
