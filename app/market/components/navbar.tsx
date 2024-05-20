import { UserButton } from "@clerk/nextjs";

interface MarketNavBarProps {
  children: React.ReactNode;
}

const MarketNavBar: React.FC<MarketNavBarProps> = ({ children }) => {
  return (
    <nav className=" top-0 mb-4 h-14 bg-yellow-300 flex justify-between items-center px-4">
      {children}
      <UserButton afterSignOutUrl="/" />
    </nav>
  );
};

export default MarketNavBar;
