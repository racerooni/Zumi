import prismadb from "@/lib/prismadb";
import Image from "next/image";

const Categories = async () => {
  const categories = await prismadb.categories.findMany({});
  return (
    <ul className="grid grid-cols-3 md:grid-cols-6 mt-4 gap-2">
      {categories.map((category) => (
        <li
          key={category.id}
          className="text-center flex flex-col items-center max-w-[100px] border border-black/40 rounded-md backdrop-blur-md p-2 transition hover:scale-105"
        >
          <Image src={category.imageUrl} alt="img" width={75} height={75} />
          {category.name}
        </li>
      ))}
    </ul>
  );
};

export default Categories;
