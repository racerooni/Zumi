export default async function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="bg-gray-50 w-full min-h-screen">{children}</div>
    </>
  );
}
