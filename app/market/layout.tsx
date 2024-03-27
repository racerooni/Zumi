
export default async function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
    <div className="bg-gray-50 h-screen w-full">
    {children}
    </div>

    </>
  );
}
