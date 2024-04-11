"use client";
import axios from "axios";
import { useSearchParams, useRouter, useParams, usePathname } from "next/navigation";
import { useCallback, useEffect, useState } from "react";
import Item from "./components/items";
import Link from "next/link";
import { Input } from "@/components/ui/input"
import Navbar from "@/components/navbar";
import MarketNavBar from "./components/navbar";
import ItemsDisplay from "./components/itemsdisplay";
import Loading from "./components/loading";
import logo from "@/public/zumilogo.png";
import Image from "next/image";


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
    <>

    <MarketNavBar>
      <Link href="/">
      <div>
      <Image
            src={logo.src}
            width={150}
            height={95}
            alt="logo"
            className=""
          />
      </div>
      </Link>
      <div className="w-full md:w-1/3">
      <Input type="text" placeholder="Keresés.." onChange={handleOnChange} className="w-full" />
      </div>
      <div></div>
    </MarketNavBar>
    <div className="flex h-full justify-center w-full">
    <ItemsDisplay>
    {items?.map((item) => (
        <Item key={item.id} item={item} />
      ))}
    </ItemsDisplay>
    </div>
   
    
    </>
    
  );
};

export default MarketPage;