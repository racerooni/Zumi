<<<<<<< HEAD
=======
import HomeNavbar from "../(root)/components/landingnav";
import SearchBar from "../(root)/components/searchbar";
>>>>>>> parent of c357c9a (market page update)

export default async function MarketLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
<<<<<<< HEAD
    <div className="bg-gray-50 h-screen w-full">
    {children}
    </div>

=======
      <HomeNavbar>
        <SearchBar />
      </HomeNavbar>
      {children}
>>>>>>> parent of c357c9a (market page update)
    </>
  );
}
