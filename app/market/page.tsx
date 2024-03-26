"use client";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import Item from "./components/items";
<<<<<<< HEAD
import Link from "next/link";
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar";
import MarketNavBar from "./components/navbar";
import ItemsDisplay from "./components/itemsdisplay";
import Loading from "./components/loading";
=======
>>>>>>> parent of c357c9a (market page update)

interface items {
  id: string;
  label: string;
  price: string;
  imageUrl: string;
  createdAt: string;
  updatedAt: string;
}

const MarketPage = () => {
<<<<<<< HEAD

  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [isLoading, setIsLoading] = useState(true)


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

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value)
    router.push(pathname + '?' + createQueryString('search', e.target.value))
  }


=======
  const params = useSearchParams();
  const [search, setSearch] = useState(params.get("search"));
  const [items, setItems] = useState<items[]>();

>>>>>>> parent of c357c9a (market page update)
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
    setTimeout(() => {
      setIsLoading(false)
    }, 500);
  }, [search]);

  if (isLoading) {
    return <Loading/ >
  }

  return (
<<<<<<< HEAD
    <>

    <MarketNavBar>
      <div>
      <Input type="text" placeholder="Keresés.." onChange={handleOnChange} className="w-1/3" />
      </div>
      
    </MarketNavBar>
    <div className="flex h-full justify-center w-full">
    <ItemsDisplay>
    {items?.map((item) => (
=======
    <div className="flex gap-4">
      {items?.map((item) => (
>>>>>>> parent of c357c9a (market page update)
        <Item key={item.id} item={item} />
      ))}
    </ItemsDisplay>
    </div>
   
    
    </>
    
  );
};

export default MarketPage;
