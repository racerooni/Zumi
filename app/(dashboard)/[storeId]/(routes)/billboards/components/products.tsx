import Image from "next/image";
import Link from "next/link";

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
    id
}) => {
    return (
        <Link className="flex flex-col bg-red-100 shadow-md shadow-black/10 w-64 rounded-md cursor-pointer" href={id}>
            <div className="">
                <Image src={imageUrl} width={500} height={500} alt="Termék kép " className="object-cover rounded-md"/>
            </div>
            <div className="flex flex-col items-end px-2 gap-6">
                <p className="text-lg font-bold">{label}</p>
                <p className="text-sm">{price}Ft</p>
            </div>
        </Link>
    )
}

export default Product;