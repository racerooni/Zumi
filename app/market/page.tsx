"use client";
import axios from "axios";
import { useSearchParams, useRouter, useParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Item from "./components/items";
import Link from "next/link";

interface items {
  id: string;
  label: string;
  price: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const MarketPage = () => {

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()


  const [search, setSearch] = useState(searchParams.get("search") + "");
  const [items, setItems] = useState<items[]>();

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString())
      params.set(name, value)

      return params.toString()
    },
    [searchParams]
  )

  const handleOnChange = (e) => {
    setSearch(e.target.value)
    router.push(pathname + '?' + createQueryString('search', e.target.value))
  }


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
      <input type="text" placeholder="KERESS" onChange={handleOnChange} />
      {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </div>
  );
};

export default MarketPage;