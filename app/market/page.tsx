"use client";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Item from "./components/items";

interface items {
  id: string;
  label: string;
  price: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const MarketPage = () => {
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("search"));
  const [items, setItems] = useState<items[]>();

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const result = await axios.get("/api/market", {
          params: { search },
        });
        setItems(result.data);
      } catch (error) {
        console.error("Error fetching items:", error);
      }
    };
    fetchItems();
  }, [search]);

  return (
    <div className="flex gap-4">
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MarketPage;
