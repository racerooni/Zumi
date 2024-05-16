"use client";
import prismadb from "@/lib/prismadb";
import axios from "axios";
import { redirect, useParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import Loading from "../components/loading";
import { Products } from "@prisma/client";
import { error } from "console";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowDown, MailCheck, SeparatorHorizontal, User } from "lucide-react";
import Separator from "@/app/(root)/components/separator";
import { useEmailModal } from "@/hooks/use-email-modal";
import { useStoreModal } from "@/hooks/use-store-modal";
import Contact from "./components/contact";

export default function page() {
  const params = useParams();
  const [isLoading, setisLoading] = useState(true);
  const onOpen = useEmailModal((state) => state.onOpen);
  const isOpen = useEmailModal((state) => state.isOpen);
  useEffect(() => {
    if (!isOpen) {
      console.log("bb");
      onOpen();
    }
  }, [onOpen, isOpen]);

  const productid: string = params.productId.toString();
  const [product, setProduct] = useState<Products | null>(null); // Adjust the type definition here
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
    try {
      fetchItems();
      setisLoading(true);
    } catch (error: any) {
      console.log(error);
    } finally {
      setisLoading(false);
    }
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  return (
    <section className="w-full py-12 md:py-24 lg:py-32">
      <div className="container flex items-start gap-8 px-4 md:px-6 justify-between">
        <div className="flex space-x-4">
          <Image
            alt="Termék kép"
            className=" rounded-md fit-container border-black/60 border-2"
            height="500"
            src={product?.imageUrl!}
            width="500"
          />
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter">
              {product?.label} <br />
            </h1>
            <div className="flex space-x-1"></div>
            <p className="text-base text-zinc-500 dark:text-zinc-400">
              {product?.description!}
            </p>
            <p className="text-2xl font-semibold text-zinc-900 dark:text-zinc-50">
              {product?.price} Ft.-
            </p>
            <p className="text-xs text-zinc-500 dark:text-zinc-400"></p>
          </div>
        </div>
      </div>
      <div className="mx-auto w-2/3 h-2 rounded-full bg-yellow-400 mt-16 mb-4"></div>
      <div className="container flex justify-center">
        <div className="flex flex-col items-center gap-2">
          <h1 className="text-xl">E-mail küldése az eladónak</h1>
          <ArrowDown className="h-8" />
        </div>
      </div>
      <div className="w-1/2 mx-auto mt-4">
        <Contact />
      </div>
    </section>
  );
}
