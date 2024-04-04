"use client"
import prismadb from '@/lib/prismadb'
import axios from 'axios';
import { redirect, useParams } from 'next/navigation'
import React, { useEffect, useState } from 'react'
import Loading from '../components/loading';
import { Products } from '@prisma/client';

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
        fetchItems();
        setTimeout(() => {
            setisLoading(false);
          }, 1000);

    }, [product]);

    if (isLoading) {
        return (
            <Loading/>
        )
    }

    return (
        <div>
            termek neve:
            <h1>{product?.label}</h1>
            termek ara: {product?.price}
            kategoria: {product?.category}
        </div>

    )
}
