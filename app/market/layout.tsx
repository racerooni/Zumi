import HomeNavbar from "../(root)/components/landingnav";
import SearchBar from "../(root)/components/searchbar";

export default async function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <HomeNavbar>
        <SearchBar />
      </HomeNavbar>
      {children}
    </>
  );
}
