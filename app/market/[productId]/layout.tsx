import BackButton from "./components/backbutton";

export default async function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className=" w-full flex justify-center p-4 relative">
        <BackButton />
        {children}
      </div>
    </>
  );
}
