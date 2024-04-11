import BackButton from "./components/backbutton";

export default async function MarketLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <div className="h-screen w-full flex justify-center items-center p-4 relative">
        <BackButton/>
        {children}
        </div>
        </>
    );
}
