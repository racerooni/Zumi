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

  const categories = await prismadb.categories.findMany();

  const conditions = await prismadb.condition.findMany();

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <BillboardForm
          initialData={billboard}
          Categories={categories}
          Condition={conditions}
        />
      </div>
    </div>
  );
};

export default BillboardPage;
