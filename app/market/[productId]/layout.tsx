import SearchBar from "@/app/(root)/components/searchbar";

export default async function MarketLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <SearchBar />
            <div className="h-screen w-full flex justify-center items-center">
                {children}
            </div>

        </>
    );
}
