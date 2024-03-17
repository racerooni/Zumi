import { Rating } from "@mui/material";
import { ShoppingCart } from "lucide-react";
import Image from "next/image";
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
    <div
      className="w-[17rem] border bg-white transition hover:scale-105 shadow-black border-black/20 rounded-xl p-2 relative flex flex-col justify-between"
      key={item.id}
    >
      <div>
        <div className="flex justify-center items-center h-[17rem] mb-4 object-contain overflow-hidden">
          <Image
            alt="xd"
            width={300}
            height={300}
            src={item.imageUrl}
            className="aspect-square w-[75%] mix-blend-multiply bg-red-400"
          />
        </div>
        <div>{item.label}</div>
      </div>
      <div>
        <p>{item.price}</p>
      </div>
      <div className="h-[2rem]"></div>
      <button className="bg-green-600 h-[2rem] w-full absolute bottom-0 left-[50%] translate-x-[-50%] rounded-b-xl px-4 items-center flex justify-center text-md">
        <p>Megrendelem</p>
        <ShoppingCart />
      </button>
    </div>
  );
};

export default Item;
