import prismadb from "@/lib/prismadb";

interface DashboardPageProps {
  params: { storeId: string };
}

const DashboardPage: React.FC<DashboardPageProps> = async ({ params }) => {
  const billboard = await prismadb.products.findMany({
    where: {
      id: params.storeId,
    },
  });
  return (
    <>
      <div className="w-full mx-4 mt-4 flex flex-col">
        <div className="text-3xl font-bold ">A boltod statisztikái: <br /><span className="text-gray-600 text-sm font-medium">Ezen az oldalon tekintheted meg az eladásaidat!</span></div>
        <div>

        </div>
      </div>

    </>
  )

};

export default DashboardPage;
