import { Rating } from "@mui/material";
import { Eye, ShoppingCart, TextCursor } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface ItemProps {
  item: {
    id: string;
    label: string;
    price: string;
    imageUrl: string;
    createdAt: string;
    updatedAt: string;
  };
}

const Item: React.FC<ItemProps> = ({ item }) => {
  return (
    <Link href={`market/${item.id}`} key={item.id}>
      <div
        className="w-[17rem] border from-white to bg-yellow-50 transition hover:scale-105 bg-gradient-to-t shadow-black border-black/20 rounded-xl p-2 relative flex flex-col justify-between"
        key={item.id}
      >
        <div>
          <div className="flex justify-center items-center h-[17rem] mb-4 object-contain overflow-hidden">
            <Image
              alt="xd"
              width={300}
              height={300}
              src={item.imageUrl}
              className="aspect-square w-[17rem] mix-blend-multiply rounded-md bg-red-400"
            />
          </div>
          <div>{item.label}</div>
        </div>
        <div>
          <p>{item.price}</p>
        </div>
        <div className="h-[2rem]"></div>
        <button className="bg-yellow-400 h-[2rem] w-full absolute bottom-0 left-[50%] translate-x-[-50%] rounded-b-xl px-4 items-center flex justify-center text-md gap-2">
          <p>Megtekintem</p>
          <Eye />
        </button>
      </div>
    </Link>

  );
};

export default Item;
