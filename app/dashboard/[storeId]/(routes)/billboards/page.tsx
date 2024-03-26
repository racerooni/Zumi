import prismadb from "@/lib/prismadb";
import { BillboardClient } from "./components/client";
import Product from "./components/products";

const BillboardsPage = async ({ params }: { params: { storeId: string } }) => {
  const billboards = await prismadb.products.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  return (
    <div className="flex flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardClient data={billboards} />
      </div>
      <div className="px-8 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 mx-auto gap-8 md:gap-12 lg:gap-16">
        {billboards.map((product) => (
          <Product imageUrl={product.imageUrl} label={product.label} price={`${product.price}`} key={product.id} id={product.id
          } />
        ))}
      </div>

    </div>
  );
};

export default BillboardsPage;
