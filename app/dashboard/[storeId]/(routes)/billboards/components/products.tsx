"use client"
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";


interface ProductProps {
    imageUrl: string,
    price: string,
    label: string,
    id: string,

}



const Product: React.FC<ProductProps> = ({
    imageUrl,
    price,
    label,
    id,

}) => {
    const router = useRouter();
    return (
        <Link className="flex flex-col justify-center items-center bg-gray-100 shadow-md border border-black/20 shadow-black/20 w-64 h-[300px] rounded-md cursor-pointer transition duration-300 hover:scale-110" href={`billboards/${id}`}>
            <div className="w-[250px] h-[250px] overflow-hidden object-center border-b-2 border-b-black/30">
                <Image src={imageUrl} width={250} height={250} alt="Termék kép " className="object-contain rounded-md aspect-square w-full" />
            </div>
            <div className="flex flex-col items-center px-2 gap-4 flex-1 justify-between w-64">
                <div className="w-full text-right">
                    <p className="text-lg text-gray-900 font-bold">{label}</p>
                </div>
                <div className="w-full text-right">
                    <p className="text-md text-gray-600">{price}Ft</p>
                </div>
            </div>
        </Link>
    )
}

export default Product;