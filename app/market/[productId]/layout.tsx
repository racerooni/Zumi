
export default async function MarketLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
        <div className="h-screen w-full flex justify-center items-center">
        {children}
        </div>

        </>
    );
}
