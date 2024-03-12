"use client"
import prismadb from '@/lib/prismadb';
import axios from 'axios';
import { useSearchParams } from 'next/navigation'
import { useEffect, useState } from 'react';

const MarketPage = () => {

    const params = useSearchParams();
    const [search, setSearch] = useState(params.get('search'))
    console.log(search)
    const [items, setItems] = useState<{ id: string; storeId: string; label: string; imageUrl: string; price: string; createdAt: Date; updatedAt: Date; }[] | undefined>(undefined);
    useEffect(() => {
        const fetchItems = async () => {
            try {
                const result = await axios.get(`/api/market/`, {
                    params: { search }
                });
                console.log(result.data);
                setItems(result.data);
            } catch (error) {
                console.error('Error fetching items:', error);
            }

        }
        fetchItems()
    }, [search])
    return (
        <div>{items?.map((item) => (
            <h1 key={item.id}>{item.label}</h1>
        ))}</div>
    )
}

export default MarketPage;