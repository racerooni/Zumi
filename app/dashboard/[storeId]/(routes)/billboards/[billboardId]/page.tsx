import prismadb from "@/lib/prismadb";

import { BillboardForm } from "../components/billboard-form";

const BillboardPage = async ({
  params,
}: {
  params: { billboardId: string };
}) => {
  const billboard = await prismadb.products.findUnique({
    where: {
      id: params.billboardId,
    },
  });

  const categories = await prismadb.categories.findMany()

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm initialData={billboard} Categories={categories} />
      </div>
    </div>
  );
};

export default BillboardPage;
