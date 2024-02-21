import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import Product from "./components/products";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.billboard.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards} />
      </div>
      <div className="px-8 flex">
      {billboards.map((product) => (
        <Product imageUrl={product.imageUrl} label={product.label} price={product.price} key={product.id} id={product.id
        }/>
      ))}
      </div>
      
    </div>
  );
};

export default BillboardsPage;
